'use client';

import React, { useState } from 'react';
import {
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Eye,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  TrendingUp,
  FileSearch,
  Zap,
  Target,
  PhoneCall
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EvaluationRubricItem {
  id: string;
  name: string;
  category: 'HOOK' | 'METRICS' | 'TOOLING' | 'GRIT' | 'ATS';
  targetBenchmark: string;
  currentScore: number;
  status: 'PASS' | 'WARN' | 'FAIL';
  feedback: string;
  hiringManagerPOV: string;
}

const DEFAULT_RUBRIC: EvaluationRubricItem[] = [
  {
    id: 'rubric-01',
    name: '6-Second Executive Hook',
    category: 'HOOK',
    targetBenchmark: 'Immediate SDR/BDR positioning in top 20% of page',
    currentScore: 96,
    status: 'PASS',
    feedback: 'Clear outbound SDR positioning statement immediately visible. No generic "seeking an entry-level sales role" language.',
    hiringManagerPOV: '"I know in 2 seconds this candidate understands modern B2B SaaS prospecting and pipeline generation."'
  },
  {
    id: 'rubric-02',
    name: '70% Metric Density Rule',
    category: 'METRICS',
    targetBenchmark: '≥ 70% of bullets contain quantified dollar/volume metrics',
    currentScore: 84,
    status: 'PASS',
    feedback: '84% of bullets contain verifiable hard metrics (call volumes, revenue generated, SLA response times, quota attainment).',
    hiringManagerPOV: '"Quantified results prove this person is numbers-driven and accustomed to quota accountability."'
  },
  {
    id: 'rubric-03',
    name: 'Outbound Tech Stack Literacy',
    category: 'TOOLING',
    targetBenchmark: 'Apollo, Salesforce/HubSpot, Outreach, LinkedIn Sales Navigator',
    currentScore: 92,
    status: 'PASS',
    feedback: 'Explicit mention of CRM hygiene (Salesforce), prospecting tools (Apollo.io, ZoomInfo), and multi-channel cadence sequences.',
    hiringManagerPOV: '"Reduces ramp time by 3 weeks. They already speak the technical language of our sales tech stack."'
  },
  {
    id: 'rubric-04',
    name: 'Phone Grit & Rejection Resilience',
    category: 'GRIT',
    targetBenchmark: 'Evidence of 60-100+ daily outreach touchpoints or high-rejection endurance',
    currentScore: 88,
    status: 'PASS',
    feedback: 'High-volume customer triage in hospitality translated into high-rejection resilience and objection handling prowess.',
    hiringManagerPOV: '"Cold calling is uncomfortable. This resume proves they will not freeze when asked to make 80 dials a day."'
  },
  {
    id: 'rubric-05',
    name: 'ATS Scanner & Keyword Readiness',
    category: 'ATS',
    targetBenchmark: 'Greenhouse / Lever / Ashby parsing score ≥ 90%',
    currentScore: 95,
    status: 'PASS',
    feedback: 'Single-column markdown structure without nested tables, text boxes, or unparseable icon graphics.',
    hiringManagerPOV: '"Passes Greenhouse automated screening with zero truncation or field mangling."'
  }
];

export function HiringManagerEvaluator() {
  const [activeTab, setActiveTab] = useState<'rubric' | 'heatmap' | 'comparison'>('rubric');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(true);

  const handleRunAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 900);
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-mono">
              <UserCheck className="h-3 w-3 text-emerald-600" />
              Evaluation Gate
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono font-medium">
              VP of Sales & SDR Hiring Manager Lens
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            SDR Hiring Manager Evaluator & 6-Second Glance Rubric
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
            Automated screening simulating a Tier-1 B2B SaaS Sales Director. Evaluates hook clarity, metric density, phone grit, and ATS parse-ability.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={handleRunAudit}
            disabled={isAuditing}
            className="h-8 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs shrink-0"
          >
            {isAuditing ? (
              <span className="flex items-center gap-1.5 font-mono">
                <Sparkles className="h-3.5 w-3.5 animate-spin" />
                Auditing Resume...
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                Run VP of Sales Audit
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Aggregate Score Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
            <span>6-Sec Glance Score</span>
            <Eye className="h-3.5 w-3.5 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-[var(--color-text-primary)] font-mono">
            94<span className="text-sm font-normal text-[var(--color-text-muted)]">/100</span>
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            Top 5% recruiter pass rate
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
            <span>Metric Density</span>
            <TrendingUp className="h-3.5 w-3.5 text-amber-600" />
          </div>
          <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
            84%
          </div>
          <div className="text-[11px] text-[var(--color-text-muted)] font-mono">
            Target: &gt;70% (PASSED)
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
            <span>Phone Grit Index</span>
            <PhoneCall className="h-3.5 w-3.5 text-blue-600" />
          </div>
          <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
            88<span className="text-sm font-normal text-[var(--color-text-muted)]">/100</span>
          </div>
          <div className="text-[11px] text-[var(--color-text-muted)] font-mono">
            Rejection resilience verified
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
            <span>Coach Review SLA</span>
            <Clock className="h-3.5 w-3.5 text-purple-600" />
          </div>
          <div className="text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">
            3.5 <span className="text-xs font-normal text-[var(--color-text-muted)]">min</span>
          </div>
          <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
            Down from 45 min manual
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-1 border-b border-[var(--color-border)] pb-2 text-xs">
        <button
          onClick={() => setActiveTab('rubric')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all ${
            activeTab === 'rubric'
              ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-bold shadow-2xs border border-[var(--color-border)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          Hiring Manager Rubric (5 Pillars)
        </button>
        <button
          onClick={() => setActiveTab('heatmap')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all ${
            activeTab === 'heatmap'
              ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-bold shadow-2xs border border-[var(--color-border)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          6-Second Eye-Tracking Simulation
        </button>
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all ${
            activeTab === 'comparison'
              ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-bold shadow-2xs border border-[var(--color-border)]'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          Coaching Time-Saved Comparison
        </button>
      </div>

      {/* Tab 1: Rubric 5 Pillars */}
      {activeTab === 'rubric' && (
        <div className="space-y-3">
          {DEFAULT_RUBRIC.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-2 hover:border-slate-400 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-emerald-700 dark:text-emerald-400">
                    {item.status} ({item.currentScore}/100)
                  </span>
                </div>
                <span className="text-xs text-[var(--color-text-muted)] font-mono">
                  Benchmark: {item.targetBenchmark}
                </span>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {item.feedback}
              </p>

              {/* VP of Sales Quote */}
              <div className="rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-2.5 text-xs text-slate-700 dark:text-slate-300 italic">
                <span className="font-semibold text-emerald-700 dark:text-emerald-400 not-italic mr-1">
                  VP of Sales Perspective:
                </span>
                {item.hiringManagerPOV}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: 6-Second Eye-Tracking Simulation */}
      {activeTab === 'heatmap' && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-5 space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Simulated 6-Second Recruiter F-Pattern Heatmap
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Recruiters scan resumes in an F-shaped path over an average of 6.2 seconds. Ope's methodology concentrates high-signal SDR hooks in the primary fixation zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            {/* Zone 1 */}
            <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2">
              <div className="flex items-center justify-between font-bold text-emerald-700 dark:text-emerald-400">
                <span>Zone 1: Top 20% (0.0s – 1.8s)</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-[10px]">HOT SPOT</span>
              </div>
              <p className="text-[11.5px] text-[var(--color-text-primary)] leading-relaxed">
                <strong>Eye Fixation:</strong> Name, Inbound/Outbound SDR Title, Target Quota readiness, Core CRM Tools.
              </p>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Verdict: 98% recruiter interest captured immediately without dropping into trash pile.
              </p>
            </div>

            {/* Zone 2 */}
            <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-50/20 dark:bg-amber-950/20 space-y-2">
              <div className="flex items-center justify-between font-bold text-amber-700 dark:text-amber-400">
                <span>Zone 2: First 2 Bullets (1.8s – 3.8s)</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-[10px]">VERIFY METRIC</span>
              </div>
              <p className="text-[11.5px] text-[var(--color-text-primary)] leading-relaxed">
                <strong>Eye Fixation:</strong> First bullet must start with an action verb + hard metric ($ or % quota).
              </p>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Verdict: Validated 84% metric density on transformed drafts.
              </p>
            </div>

            {/* Zone 3 */}
            <div className="p-4 rounded-xl border border-blue-500/40 bg-blue-50/20 dark:bg-blue-950/20 space-y-2">
              <div className="flex items-center justify-between font-bold text-blue-700 dark:text-blue-400">
                <span>Zone 3: Tooling Stack (3.8s – 6.0s)</span>
                <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-[10px]">PASS / REJECT</span>
              </div>
              <p className="text-[11.5px] text-[var(--color-text-primary)] leading-relaxed">
                <strong>Eye Fixation:</strong> Fast glance at tool keywords (Salesforce, Apollo, ZoomInfo, Outreach).
              </p>
              <p className="text-[11px] text-[var(--color-text-secondary)]">
                Verdict: Immediate phone screen invite dispatched.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Coaching Time-Saved Comparison */}
      {activeTab === 'comparison' && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-5 space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
              Ope's Coaching Throughput: Manual vs. AI System SLA
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Replicating 80–90% of manual rewriting eliminates drafting fatigue and lets you scale from 15 clients/mo to 100+ without hiring junior copywriters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Manual Process */}
            <div className="p-4 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50/20 dark:bg-red-950/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-red-700 dark:text-red-400 uppercase tracking-wider text-[11px]">
                  Current Manual Process
                </span>
                <span className="font-mono font-bold text-red-600">~45–60 min / resume</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                <li>• 15 min reading raw intake form & interview notes</li>
                <li>• 20 min rewriting unquantified retail/teaching bullets</li>
                <li>• 10 min searching past resumes for relevant phrasing</li>
                <li>• 10 min formatting and verifying ATS layout</li>
                <li className="font-bold text-red-700 dark:text-red-400 pt-1">
                  Total Monthly Capacity: ~25–30 client resumes max
                </li>
              </ul>
            </div>

            {/* AI Automated System */}
            <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider text-[11px]">
                  AI Pipeline + 3-Min Coach Review
                </span>
                <span className="font-mono font-bold text-emerald-600">~3.5 min / resume</span>
              </div>
              <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                <li>• 0.8s automated intake analysis & exemplar vector lookup</li>
                <li>• 1.4s AI draft generation applying Ope's 5 Laws</li>
                <li>• 0.4s VP of Sales automated audit scorecard generated</li>
                <li>• 3 min Ope quick glance & final personalized touch</li>
                <li className="font-bold text-emerald-700 dark:text-emerald-400 pt-1">
                  Total Monthly Capacity: 150+ client resumes (5x growth)
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
