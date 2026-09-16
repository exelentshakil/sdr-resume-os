import { NextRequest, NextResponse } from 'next/server';
import { transformResume, ResumeTransformParams } from '@/lib/ai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const params: ResumeTransformParams = {
      candidateName: typeof body.candidateName === 'string' ? body.candidateName : undefined,
      currentRole: typeof body.currentRole === 'string' ? body.currentRole : undefined,
      targetSdrVertical: typeof body.targetSdrVertical === 'string' ? body.targetSdrVertical : undefined,
      intakeNotes: typeof body.intakeNotes === 'string' ? body.intakeNotes : undefined,
      rawBullets: Array.isArray(body.rawBullets) ? body.rawBullets : undefined,
      rawText: typeof body.rawText === 'string' ? body.rawText : undefined,
      selectedExemplarId: typeof body.selectedExemplarId === 'string' ? body.selectedExemplarId : undefined,
      simulatedOutage: Boolean(body.simulatedOutage),
    };

    const result = await transformResume(params);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Transformation execution error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
