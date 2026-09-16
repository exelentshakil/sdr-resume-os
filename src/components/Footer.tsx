'use client';

import React from 'react';
import {
  ShieldCheck,
  FileText,
  ExternalLink,
  Award,
  Database,
  Cpu
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Systems Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-600 text-white font-black text-sm shadow-xs">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-[var(--color-text-primary)]">
                SDR Resume OS
              </span>
              <span className="rounded-full bg-amber-100 dark:bg-amber-950 px-2 py-0.5 text-xs font-mono font-bold text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                v1.2 Enterprise Cockpit
              </span>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-md">
              AI-driven career positioning engine replicating 80–90% of Ope&apos;s manual SDR resume rewriting methodology. Ingests raw candidate backgrounds, retrieves semantic exemplars from 50+ past successes, and subjects drafts to a simulated VP of Sales 6-second glance audit before coach sign-off.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Avg Coach Turnaround: 3.5 min
              </span>
              <span>•</span>
              <span>NIST AI RMF &amp; OWASP LLM Firewall</span>
              <span>•</span>
              <span>100% Client IP Ownership</span>
            </div>
          </div>

          {/* Architecture Pillars */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] font-mono">
              Systems Architecture
            </h4>
            <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
              <li>Next.js 15 App Router &amp; TypeScript</li>
              <li>Dual-Model (OpenAI gpt-4o-mini + Gemini 2.0 Flash)</li>
              <li>50+ Before/After Exemplar Vector Bank</li>
              <li>SDR Hiring Manager 6-Second Glance Audit</li>
              <li>Zero Lock-In (Dify DSL, FastAPI, n8n, Docker)</li>
              <li>Inline PII Sanitization &amp; Prompt Firewall</li>
            </ul>
          </div>

          {/* Systems Architect Verification */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] font-mono">
              Principal Systems Architect
            </h4>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-[var(--color-text-primary)]">
                <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Verified Upwork Partner</span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)]">
                12+ Years Enterprise Systems Engineering. Former Lead Systems Engineer at Legiit ($1M ARR Command Center).
              </p>
              <div className="pt-1 border-t border-[var(--color-border)] text-xs font-mono text-emerald-600 dark:text-emerald-400">
                Securiti Certified AI Architect
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-muted)] font-mono gap-3">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SDR Resume OS. Engineered for Ope&apos;s SDR Career Coaching Practice.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#studio" className="hover:text-[var(--color-text-primary)] transition-colors">
              Studio
            </a>
            <a href="#exemplars" className="hover:text-[var(--color-text-primary)] transition-colors">
              Exemplar Bank
            </a>
            <a href="#evaluator" className="hover:text-[var(--color-text-primary)] transition-colors">
              Hiring Manager Gate
            </a>
            <a href="#roi" className="hover:text-[var(--color-text-primary)] transition-colors">
              Coach ROI
            </a>
            <a href="#blueprints" className="hover:text-[var(--color-text-primary)] transition-colors">
              Blueprints
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
