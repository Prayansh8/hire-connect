import { NextRequest, NextResponse } from 'next/server';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export async function POST(req: NextRequest) {
  const { jobDescription } = await req.json();
  const result = sentiment.analyze(jobDescription);
  return NextResponse.json({ sentiment: result });
}