import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
  try {
    const { amount, currency, receipt, notes } = await request.json();

    // Validate the required fields
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }
    console.log("RZP, create-order:", process.env.RAZORPAY_KEY_ID);
    
    // Initialize Razorpay instance with your API keys
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create the order
    const options = {
      amount: amount * 100, // amount in smallest currency unit (paise for INR)
      currency: currency || 'INR',
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
} 