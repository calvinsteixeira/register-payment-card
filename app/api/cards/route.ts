import { NextResponse } from 'next/server';
const LOCAL_API_URL = 'http://localhost:3001';

export async function GET() {
  try {
    const result = await fetch(LOCAL_API_URL + '/cards', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!result.ok) {
      throw new Error('Falha na requisição');
    }

    const data = await result.json()
    
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Falha na requisição' }, { status: 500 });
  }
}
