import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Here you would normally process the contact form data, e.g., store in DB, send email, etc.
    console.log('Contact form submission:', data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
