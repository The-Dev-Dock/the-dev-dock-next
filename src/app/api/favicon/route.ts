import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Get the path to favicon.ico in the public directory
    const faviconPath = path.join(process.cwd(), 'public', 'favicon.ico');
    
    // Read the file
    const faviconBuffer = fs.readFileSync(faviconPath);
    
    // Return the favicon with the correct content type
    return new NextResponse(faviconBuffer, {
      headers: {
        'Content-Type': 'image/x-icon',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return new NextResponse(null, { status: 404 });
  }
} 