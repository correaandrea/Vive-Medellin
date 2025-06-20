import { NextResponse } from 'next/server';

// Esta función se ejecutará cuando el frontend haga un POST a /api/register
export async function POST(request: Request) {
  console.log('API /api/register fue llamada');
  return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}