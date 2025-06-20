import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  
  console.log('API /api/login fue llamada');
  return NextResponse.json({ token: 'fake-jwt-token-from-real-api' }, { status: 200 });
}