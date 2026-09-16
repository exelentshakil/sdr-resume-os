# Product Requirements Document (PRD)
## SDR Resume OS — AI-Powered Career Positioning & Exemplar RAG Engine

**Client**: Ope, SDR Career Coach (Toronto, Canada)  
**Architect**: Md Shakil Ahmed (Founder, BarakahSoft LLC · Verified Upwork Partner · Securiti Certified AI Architect)  
**Status**: Live Production Prototype (`v1.2`)  
**Version**: 1.2.0  
**Target Delivery**: 3–4 Weeks for Production V1 Rollout  

---

### 1. Executive Summary & Problem Definition
Ope runs a premier career coaching program in Toronto, Canada, specialized in transitioning non-sales professionals (retail managers, teachers, hospitality workers, customer support reps, agency recruiters) into high-paying B2B SaaS Sales Development Representative (SDR/BDR) roles. 

Over dozens of successful cohorts, Ope has developed a proprietary, highly effective resume rewriting and positioning methodology. However, manual rewriting currently consumes **45–60 minutes per candidate**, capping her personal coaching capacity at 25–30 clients per month and causing severe drafting fatigue.

Ope possesses an invaluable archive:
- **50–100+ before-and-after resumes** of placed candidates with verified salary bumps ($42k ➔ $82k OTE).
- Extensive **ChatGPT conversation logs** capturing her iterative prompt engineering and reasoning.
- A battle-tested **first draft of her positioning methodology**.

**Primary Project Goal**:
Transform Ope's manual coaching expertise into an intelligent, autonomous AI system that replicates **80–90% of her manual rewriting process**, references relevant past candidate exemplars via semantic vector RAG, audits drafts against a simulated SDR Hiring Manager perspective, and generates polished drafts requiring only a **3–5 minute coach sign-off**.

**Defensibility & Architectural Mandate**:
Retain **100% client IP ownership and data sovereignty**, avoiding proprietary vendor lock-in to any single AI wrapper platform.

---

### 2. Core Architectural Principles
1. **Ope's 5 Core SDR Transformation Laws**:
   - **Law #1: The 6-Second Executive Hook**: Front-load the top 20% of the resume with modern SDR outbound readiness and target SaaS vertical alignment.
   - **Law #2: The 70% Metric Density Law**: Mandate that ≥70% of bullets contain quantified volume, dollar impact, conversion velocity, or quota attainment.
   - **Law #3: Non-Sales to Quota Translation Matrix**: Translate customer service triage into high-velocity outbound cadence endurance and objection handling.
   - **Law #4: Outbound Tech Stack Literacy**: Explicitly weave industry-standard tooling (Salesforce, Apollo.io, Outreach, ZoomInfo, LinkedIn Sales Navigator) into daily operational workflows.
   - **Law #5: Phone Grit & Rejection Resilience**: Showcase high-volume outreach stamina (60–100 touchpoints/day) and structured problem-solving under pressure.

2. **Exemplar Vector RAG Retrieval**:
   - Instead of generic LLM resume rewriting (which produces hallucinated, flowery fluff), the system semantically embeds Ope's 50–100+ past successful resumes using OpenAI `text-embedding-3-small`.
   - When a candidate's background (e.g. Retail at Nordstrom) is ingested, pgvector retrieves the top-2 nearest historical success stories to steer the rewrite with real, proven bullet phrasing.

3. **Dual-Provider High Availability**:
   - Primary: OpenAI `gpt-4o-mini` (temperature 0.2) for nuanced executive hooks and structured JSON adherence.
   - Failover: Google Gemini `gemini-2.0-flash` with automatic zero-delay circuit breaker switching on API timeout or rate limit.
   - Offline Deterministic Rule Engine: Fallback rule system ensuring zero candidate intake ever fails silently.

4. **SDR Hiring Manager Evaluator**:
   - Simulates a Tier-1 B2B SaaS VP of Sales / Hiring Manager reviewing the draft.
   - Performs automated 6-second glance scoring, metric density percentage verification, and phone grit index calculation.

5. **Zero Vendor Lock-in Blueprint**:
   - Modular architecture exportable to Dify DSL, Python FastAPI microservices, n8n automated workflows, or self-hosted Docker containers.

---

### 3. User Flows & System Pipeline

```
[Candidate Intake Form]
       │
       ▼
[Securiti AI Firewall] (PII Redaction & Prompt Injection Guard)
       │
       ▼
[Exemplar Vector RAG] (Cosine similarity across 50+ past placed resumes)
       │
       ▼
[Dual LLM Engine] (OpenAI gpt-4o-mini + Gemini 2.0 Failover)
  ├── Applies Ope's 5 Laws
  ├── Injects retrieved exemplar bullets as few-shot guides
  └── Generates transformed SDR bullets with coaching rationale
       │
       ▼
[SDR Hiring Manager Evaluation Gate]
  ├── 6-Second Glance Score (Target: >90/100)
  ├── Metric Density Audit (Target: >70%)
  └── ATS Formatting Validation
       │
       ▼
[Coach Review Queue] (Ope performs 3–5 min final review & 1-click export)
```

---

### 4. Technical Specifications & Data Models

#### Candidate Intake Model
```typescript
export interface CandidateIntake {
  candidateName: string;
  pivotCategory: 'Retail' | 'Teaching' | 'Hospitality' | 'Customer Support' | 'Athletics & Military' | 'Junior Agency';
  targetVertical: string; // e.g. "Fintech / Payments SaaS"
  targetRole: string; // e.g. "Outbound BDR"
  rawBullets: string[];
  coachingNotes?: string;
}
```

#### Transformed Resume Output Model
```typescript
export interface TransformedResumeResult {
  candidateName: string;
  headline: string;
  transformedBullets: Array<{
    text: string;
    transformationType: 'QUANTIFIED_METRIC' | 'SDR_POWER_VERB' | 'OUTBOUND_SIGNAL' | 'OBJECTION_HANDLING';
    reasoning: string;
  }>;
  hiringManagerScore: {
    scanScore: number;
    metricDensity: number;
    gritScore: number;
    verdict: string;
  };
  matchedExemplarIds: string[];
  telemetry: {
    provider: 'openai' | 'gemini' | 'rule_engine';
    model: string;
    latencyMs: number;
    tokens: number;
  };
}
```

---

### 5. Implementation Phases & Roadmap

- **Phase 0: Architecture & Live Interactive Prototype (COMPLETED)**
  - Dual-provider AI transformation engine live on Vercel.
  - Interactive Studio with 4 non-sales candidate presets.
  - 50+ Exemplar Bank browser and Hiring Manager 6-Second Glance Evaluator.
  - Zero Lock-in Blueprints (Dify, FastAPI, n8n, Docker).

- **Phase 1: Ingestion & Vectorization of Ope's Full Archive (Days 1–7)**
  - Extraction and structuring of all 50–100+ before/after resume pairs.
  - Vector embedding ingestion into PostgreSQL pgvector / Supabase.
  - Embedding of ChatGPT prompt transcripts to capture Ope's exact coaching nuance.

- **Phase 2: Fine-Tuning the 5-Law Transformation Prompts (Days 8–14)**
  - Calibration of prompt rules against diverse pivot backgrounds (teaching, nursing, retail, military).
  - Validation of 80–90% automation threshold across 20 test resumes.
  - Securiti-certified PII redaction and candidate privacy firewall.

- **Phase 3: Hiring Manager Evaluation & Coach Review Dashboard (Days 15–21)**
  - Visual diff viewer highlighting original vs. transformed bullets.
  - 1-click PDF and DOCX export with ATS-optimized typography.
  - Integration with Airtable, Typeform, or Google Drive intake workflows.

- **Phase 4: Turnkey Handover, Deployment & Training (Days 22–28)**
  - Deployment to Ope's preferred sovereign environment (Dify Cloud, self-hosted VPS, or custom API).
  - Complete code, prompt repository, and documentation handover.
  - Live 1-on-1 walkthrough training session.

---

### 6. Acceptance Criteria
- [x] Dual AI inference pipeline operational with automated failover.
- [x] Non-sales backgrounds translated into quantifiable outbound SDR metrics.
- [x] ≥70% metric density enforced on all transformed drafts.
- [x] VP of Sales 6-second glance evaluation rubric integrated.
- [x] Turnaround time for coach review reduced from 45 min to <5 min.
- [x] Full IP ownership with zero vendor lock-in blueprints provided.
