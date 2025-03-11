import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { candidateSkills, jobSkills } = await req.json();
  const missingSkills = jobSkills.filter((skill: string) => !candidateSkills.includes(skill));
  const recommendations = missingSkills.map(skill => ({
    skill,
    courses: [`Course related to ${skill}`, `Another course for ${skill}`]
  }));
  return NextResponse.json({ missingSkills, recommendations });
}