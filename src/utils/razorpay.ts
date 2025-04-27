import { loadScript } from './scriptLoader';

export interface PaymentDetails {
  planTitle: string;
  planPrice: string;
  userDetails: {
    name: string;
    mobile: string;
    age: string;
    collegeName: string;
  };
}

const loadRazorpayScript = async (): Promise<boolean> => {
  return await loadScript('https://checkout.razorpay.com/v1/checkout.js');
};

export const initiatePayment = async (
  paymentDetails: PaymentDetails,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  try {
    // Load Razorpay script
    const scriptLoaded = await loadRazorpayScript();
    
    if (!scriptLoaded) {
      throw new Error('Razorpay SDK failed to load');
    }
    
    // Extract numeric value from price string (e.g., "INR 1000" -> 1000)
    const priceValue = paymentDetails.planPrice.replace(/\D/g, '');
    const amount = parseInt(priceValue, 10);
    
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid price amount');
    }
    
    // Create order on server
    const response = await fetch('/api/payment/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: {
          planTitle: paymentDetails.planTitle,
          userName: paymentDetails.userDetails.name,
          userMobile: paymentDetails.userDetails.mobile,
          userAge: paymentDetails.userDetails.age,
          userCollege: paymentDetails.userDetails.collegeName,
        },
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create order');
    }
    
    const orderData = await response.json();
    
    // Initialize Razorpay options
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'The Dev Dock',
      description: `Payment for ${paymentDetails.planTitle}`,
      order_id: orderData.id,
      prefill: {
        name: paymentDetails.userDetails.name,
        contact: paymentDetails.userDetails.mobile,
      },
      handler: function (response: any) {
        // Handle successful payment
        verifyPayment(response, onSuccess, onError);
      },
      modal: {
        ondismiss: function() {
          console.log('Payment modal closed');
        },
      },
      theme: {
        color: '#2563eb',
      },
    };
    
    // @ts-ignore - Razorpay is loaded via script
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    
  } catch (error) {
    console.error('Payment initiation error:', error);
    onError(error);
  }
};

const verifyPayment = async (
  razorpayResponse: any,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  try {
    const response = await fetch('/api/payment/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        razorpay_order_id: razorpayResponse.razorpay_order_id,
        razorpay_payment_id: razorpayResponse.razorpay_payment_id,
        razorpay_signature: razorpayResponse.razorpay_signature,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Payment verification failed');
    }
    
    const data = await response.json();
    
    if (data.success) {
      onSuccess({
        ...razorpayResponse,
        ...data,
      });
    } else {
      throw new Error(data.message || 'Payment verification failed');
    }
    
  } catch (error) {
    console.error('Payment verification error:', error);
    onError(error);
  }
}; 