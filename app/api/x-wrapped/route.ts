import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Stub X Wrapped endpoint - add your own implementation
export async function POST(req: NextRequest) {
  try {
    const bodySchema = z.object({
      username: z.string().min(1),
      year: z.number().int().min(2006).max(2100).optional(),
    });

    const parsedBody = bodySchema.safeParse(await req.json());
    if (!parsedBody.success) {
      return NextResponse.json({ error: 'Invalid request body', details: parsedBody.error.flatten() }, { status: 400 });
    }

    const year = parsedBody.data.year ?? 2025;
    const cleanUsername = parsedBody.data.username.replace(/^@+/, '').trim();
    
    if (!cleanUsername) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    // Add your X/Twitter API integration here
    return NextResponse.json({ 
      error: 'X Wrapped service not configured',
      username: cleanUsername,
      year 
    }, { status: 501 });
  } catch (error) {
    console.error('X Wrapped API error:', error);
    return NextResponse.json({ error: 'Failed to generate X Wrapped', details: String(error) }, { status: 500 });
  }
}
