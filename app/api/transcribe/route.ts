import { NextRequest, NextResponse } from 'next/server';

// Stub transcription endpoint - add your own transcription service
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audio = formData.get('audio');

    if (!audio || !(audio instanceof Blob)) {
      return NextResponse.json({ error: 'No audio file found in form data.' }, { status: 400 });
    }

    // Add your transcription service implementation here
    // Example: OpenAI Whisper, Google Speech-to-Text, etc.
    console.log('Transcription service not configured');
    
    return NextResponse.json({ 
      error: 'Transcription service not configured',
      text: '' 
    }, { status: 501 });
  } catch (error) {
    console.error('Error processing transcription request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
