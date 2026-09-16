'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  FileText,
  Database,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Zap,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewerTourProps {
  onNavigate: (sectionId: string) => void;
  onOpenChaosModal: () => void;
}

export function ReviewerTour({ onNavigate, onOpenChaosModal }: ReviewerTourProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const evaluationPaths = [
    {
      id: 'transform',
      badge: 'Step 1 • Core Engine',
      title: 'Live Transformation Studio',
      desc: 'Load candidate backgrounds (Retail, Teaching, Hospitality), run real AI inference, and inspect side-by-side Before ➔ After diffs with Ope\'s methodology tags.',
      actionLabel: 'Launch Studio',
      icon: FileText,
    },
    {
      id: 'rag-vault',
      badge: 'Step 2 • Exemplar RAG',
      title: '50-100+ Exemplar Vector Bank',
      desc: 'Semantic retrieval across Ope\'s before-and-after coaching archive. Matches candidates to past successful placements with cosine similarity.',
      actionLabel: 'Explore Exemplars',
      icon: Database,
    },
    {
      id: 'evaluator',
      badge: 'Step 3 • Hiring Manager Gate',
      title: 'SDR VP Evaluation Bench',
      desc: 'Automated 6-second glance scorecard, 70% metric density compliance audit, phone grit index, and redline recommendations.',
      actionLabel: 'Run Evaluation',
      icon: UserCheck,
    },
    {
      id: 'blueprints',
      badge: 'Step 4 • Zero Lock-In',
      title: 'Multi-Engine Portability',
      desc: 'Inspect exportable Python/FastAPI code, Dify DSL YAML, n8n JSON, and self-hosted Docker blueprints to guarantee 100% IP ownership.',
      actionLabel: 'View Blueprints',
      icon: Code2,
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-xs transition-all">
      {/* Top Banner Header with Problem-Solution Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 whitespace-nowrap shrink-0 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              Executive Evaluation Briefing
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono font-medium hidden sm:inline">
              Ope Career Coaching • Toronto
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            How to Evaluate This AI-Powered SDR Resume Transformation System
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1 max-w-4xl leading-relaxed">
            Engineered to automate 80–90% of your manual coaching workflow: ingesting candidate backgrounds, retrieving relevant past before/after exemplars, applying your proprietary SDR positioning formula, and evaluating drafts from a VP of Sales perspective—with 100% client code ownership.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 text-xs font-medium border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)] whitespace-nowrap shrink-0 shadow-xs"
          >
            {isCollapsed ? (
              <>
                <ChevronDown className="h-3.5 w-3.5 mr-1" />
                Expand Briefing
              </>
            ) : (
              <>
                <ChevronUp className="h-3.5 w-3.5 mr-1" />
                Collapse Briefing
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Collapsible Evaluation Paths */}
      {!isCollapsed && (
        <div className="mt-5 space-y-4">
          {/* 4 Interactive Evaluation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {evaluationPaths.map((path) => {
              const Icon = path.icon;
              return (
                <div
                  key={path.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 transition-all hover:border-slate-400 hover:bg-[var(--color-surface)] shadow-xs hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-800 whitespace-nowrap shrink-0 shadow-xs">
                        {path.badge}
                      </span>
                      <Icon className="h-4 w-4 text-[var(--color-text-muted)] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1.5">
                      {path.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {path.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[var(--color-border-subtle)]">
                    <button
                      onClick={() => onNavigate(path.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>{path.actionLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* High-Contrast Command Console Summary Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 rounded-xl bg-slate-900 text-white p-3.5 sm:p-4 shadow-card border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-xs leading-relaxed">
                <strong className="font-bold text-white uppercase tracking-wider text-[11px] mr-2">
                  Ope's 4-Phase System Architecture:
                </strong>
                <span className="text-slate-300 font-normal">
                  1. Intake & Background Parser <span className="text-slate-500 mx-1">➔</span> 2. Exemplar Semantic Vector Match <span className="text-slate-500 mx-1">➔</span> 3. SDR Methodology Rewrite Engine <span className="text-slate-500 mx-1">➔</span> 4. Hiring Manager Audit & 5-Min Coach Sign-off.
                </span>
              </div>
            </div>

            <Button
              size="sm"
              onClick={onOpenChaosModal}
              className="h-8 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white shadow-xs whitespace-nowrap shrink-0 border border-amber-500/40"
            >
              <Zap className="h-3.5 w-3.5 mr-1 text-amber-200" />
              <span>Test Failover</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
