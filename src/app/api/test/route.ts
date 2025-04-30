import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'API route is working correctly',
    env: {
      // Show that env variables are available (without exposing actual values)
      hasRazorpayKeyId: !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      hasRazorpayKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
    }
  });
} 