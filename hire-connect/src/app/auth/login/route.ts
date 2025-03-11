import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // Implement your authentication logic here
  return NextResponse.json({ message: 'Login successful', user: { email } });
}