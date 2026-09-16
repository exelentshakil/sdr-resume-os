import { NextResponse } from 'next/server';

export async function GET() {
  const hasOpenAi = !!process.env.OPENAI_API_KEY;
  const hasGemini = !!process.env.GEMINI_API_KEY;
  const hasSupabase = !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;

  return NextResponse.json({
    status: 'healthy',
    system: 'SDR Resume OS • Coaching Methodology & RAG Transformation Engine',
    client: 'Ope Career Coaching (Toronto)',
    timestamp: new Date().toISOString(),
    version: '1.0.0-production',
    providers: {
      openai: {
        active: hasOpenAi,
        model: 'gpt-4o-mini',
        role: 'primary-methodology-transformation',
      },
      gemini: {
        active: hasGemini,
        model: 'gemini-2.0-flash',
        role: 'failover-transformation-engine',
      },
      deterministic: {
        active: true,
        model: 'sdr-methodology-v1',
        role: 'zero-dependency-coaching-rules',
      },
      supabase: {
        active: hasSupabase,
        role: 'pgvector-exemplar-storage',
      },
    },
    capabilities: [
      'sdr-methodology-replication-80-90%',
      'before-after-exemplar-vector-retrieval',
      'non-sales-to-quota-quantification',
      'sdr-hiring-manager-6s-scan-evaluation',
      'metric-density-scoring-70%-law',
      'human-in-the-loop-coach-approval',
      'multi-engine-export-dify-n8n-fastapi',
      'inline-llm-firewall-owasp-nist',
    ],
  });
}
