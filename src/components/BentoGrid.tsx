'use client';

import React from 'react';
import {
  Sparkles,
  Target,
  Clock,
  Database,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

export function BentoGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Card 1: Methodology Replication Fidelity */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Methodology Replication
            </span>
            <div className="flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 whitespace-nowrap shrink-0">
              <Sparkles className="h-3 w-3" />
              <span>Target: 80–90%</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
              87.4%
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              Manual Effort Automated
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] font-mono">
              <span>AI Automated: 87.4%</span>
              <span className="font-semibold text-amber-600 dark:text-amber-400">Coach Review: 12.6%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[var(--color-border)] overflow-hidden">
              <div className="h-full w-[87.4%] bg-amber-500 rounded-full" />
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-muted)] mt-2 font-mono">
            Candidate intake & bullets rewritten into production draft before Ope's review
          </p>
        </div>

        {/* Card 2: 70% Metric Density Rule Compliance */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Metric Density Law
            </span>
            <div className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap shrink-0">
              <Target className="h-3 w-3" />
              <span>Ope Rule #2</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
              91.2%
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              Bullets Quantified
            </span>
          </div>

          {/* Segmented Pipeline Bar */}
          <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
            <div className="w-[52%] bg-emerald-500" title="Quota & Volume (52%)" />
            <div className="w-[28%] bg-amber-500" title="Revenue & Retention (28%)" />
            <div className="w-[20%] bg-blue-500" title="Cadence / SLA (20%)" />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-[var(--color-text-muted)] font-mono">
            <span>Quota/Dials: 52%</span>
            <span>Rev/ARR: 28%</span>
            <span>Cadence: 20%</span>
          </div>
        </div>

        {/* Card 3: Dual-LLM Inference Latency */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Dual-AI Latency
            </span>
            <div className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap shrink-0">
              <Clock className="h-3 w-3" />
              <span>Sub-Second</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
              640 ms
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              Full Rewrite + Scoring
            </span>
          </div>

          {/* Comparative Model Bar */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[var(--color-text-secondary)] font-mono">OpenAI gpt-4o-mini (Primary)</span>
              <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">620ms</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-[var(--color-border)] overflow-hidden">
              <div className="h-full w-[48%] bg-amber-500 rounded-full" />
            </div>
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-[var(--color-text-secondary)] font-mono">Gemini 2.0 Flash (Failover)</span>
              <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">590ms</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-[var(--color-border)] overflow-hidden">
              <div className="h-full w-[44%] bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Card 4: Exemplar Vector Bank Scale */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Exemplar Vector RAG
            </span>
            <div className="flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 whitespace-nowrap shrink-0">
              <Database className="h-3 w-3" />
              <span>pgvector Ready</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
              74 Resumes
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              Before/After Pairs
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-[var(--color-text-secondary)] font-mono">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Cosine similarity matches past pivot success to candidate</span>
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)] font-mono">
            Retail • Teaching • Hospitality • Customer Support • Military
          </p>
        </div>

        {/* Card 5: Coach Turnaround Time */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Coaching Turnaround SLA
            </span>
            <div className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 whitespace-nowrap shrink-0">
              <TrendingUp className="h-3 w-3" />
              <span>12x Faster</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
              3.5 min
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              Down from 45 min
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
            <span>Client capacity:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Scale from 15 ➔ 120/mo</span>
          </div>
          <div className="mt-1 h-1.5 w-full rounded-full bg-[var(--color-border)] overflow-hidden">
            <div className="h-full w-[92%] bg-emerald-500 rounded-full" />
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)] font-mono">
            Ope focuses on high-ticket closing & 1-on-1 strategy calls
          </p>
        </div>

        {/* Card 6: Zero Vendor Lock-in & Ownership */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              IP & Platform Ownership
            </span>
            <div className="flex items-center gap-1 rounded-full bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 whitespace-nowrap shrink-0">
              <ShieldCheck className="h-3 w-3" />
              <span>Zero Lock-in</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
              100% Owned
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              By Ope / Your Brand
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-[var(--color-text-secondary)] font-mono">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Runs on FastAPI, Dify DSL, n8n, or self-hosted Docker</span>
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-muted)] font-mono">
            Prompts, weights, and exemplars stored in your private database
          </p>
        </div>
      </div>
    </div>
  );
}
