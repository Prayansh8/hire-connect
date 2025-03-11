import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password, role } = await req.json();
  // Implement your registration logic here
  return NextResponse.json({ message: 'Registration successful', user: { email, role } });
}