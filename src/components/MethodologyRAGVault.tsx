'use client';

import React, { useState } from 'react';
import {
  Database,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Building,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Plus,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SDR_EXEMPLARS, METHODOLOGY_RULES, ResumeExemplar } from '@/lib/exemplars';

export function MethodologyRAGVault() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedExemplarId, setExpandedExemplarId] = useState<string>('ex-01');
  const [ingestModalOpen, setIngestModalOpen] = useState<boolean>(false);
  const [ingestSuccess, setIngestSuccess] = useState<boolean>(false);

  const categories = ['All', 'Retail', 'Teaching', 'Hospitality', 'Customer Support', 'Junior Agency'];

  const filteredExemplars = SDR_EXEMPLARS.filter((ex) => {
    const matchesCategory = selectedCategory === 'All' || ex.pivotCategory === selectedCategory;
    const matchesQuery =
      ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.previousRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.placedCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.targetVertical.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleSimulateIngest = (e: React.FormEvent) => {
    e.preventDefault();
    setIngestSuccess(true);
    setTimeout(() => {
      setIngestSuccess(false);
      setIngestModalOpen(false);
    }, 1500);
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-mono">
              <Database className="h-3 w-3 text-blue-600" />
              Exemplar Vector RAG
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono font-medium">
              50–100+ Before/After Coaching Archive
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Ope's SDR Methodology Rulebook & Vector Exemplar Bank
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
            The secret sauce: your 5 positioning laws codified into prompt rules, combined with semantic vector retrieval across past candidate successes.
          </p>
        </div>

        <Button
          size="sm"
          onClick={() => setIngestModalOpen(true)}
          className="h-8 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white shadow-xs whitespace-nowrap shrink-0"
        >
          <Plus className="h-3.5 w-3.5 mr-1" />
          <span>Ingest New Exemplar</span>
        </Button>
      </div>

      {/* 5 Methodology Laws Strip */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-amber-600" />
            Ope's 5 Core SDR Transformation Laws (System Guardrails)
          </span>
          <span className="text-xs font-mono text-[var(--color-text-muted)]">Codified into LLM Prompt Prompts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {METHODOLOGY_RULES.map((rule) => (
            <div
              key={rule.ruleNumber}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3.5 space-y-1.5 hover:border-slate-400 transition-colors shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                  Law #{rule.ruleNumber}
                </span>
                <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  Weight: {rule.weight}
                </span>
              </div>
              <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                {rule.name}
              </h4>
              <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vector Exemplar Bank Explorer */}
      <div className="space-y-4 pt-2 border-t border-[var(--color-border-subtle)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white font-semibold shadow-xs'
                    : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="h-3.5 w-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input
              type="text"
              placeholder="Search roles, companies, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Exemplars List */}
        <div className="space-y-3">
          {filteredExemplars.map((ex) => {
            const isExpanded = expandedExemplarId === ex.id;
            return (
              <div
                key={ex.id}
                className={`rounded-xl border transition-all ${
                  isExpanded
                    ? 'border-amber-500/60 bg-[var(--color-surface)] shadow-sm'
                    : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] hover:border-slate-400'
                }`}
              >
                {/* Collapsed Header Summary */}
                <div
                  onClick={() => setExpandedExemplarId(isExpanded ? '' : ex.id)}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 cursor-pointer gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono">
                        {ex.pivotCategory} Pivot
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)] font-mono">
                        ID: {ex.id}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                      {ex.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] font-mono">
                      {ex.previousCompany} ➔ Placed at <strong className="text-emerald-700 dark:text-emerald-400">{ex.placedCompany}</strong> ({ex.placedRole})
                    </p>
                  </div>

                  {/* Badges / Metrics */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[var(--color-border-subtle)]">
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                        {ex.salaryBump}
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] font-mono">
                        {ex.interviewsWon} offers in {ex.timeToFirstOffer}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 pl-2">
                      <div className="h-7 w-7 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)]">
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Before/After Breakdown */}
                {isExpanded && (
                  <div className="border-t border-[var(--color-border)] p-4 sm:p-5 space-y-4 bg-[var(--color-surface)] rounded-b-xl">
                    {/* Strategy Notes Callout */}
                    <div className="rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 p-3 text-xs leading-relaxed">
                      <strong className="text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider text-[11px] mr-1">
                        Ope's Coaching Strategy & ChatGPT Prompt Genesis:
                      </strong>
                      <span className="text-slate-700 dark:text-slate-300">
                        {ex.coachingStrategyNotes}
                      </span>
                    </div>

                    {/* Before & After Headings Diff */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-red-50/40 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 dark:text-red-400">
                          Original Resume Headline:
                        </span>
                        <p className="text-slate-600 dark:text-slate-400 font-mono line-through text-[11px]">
                          {ex.beforeHeadline}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                          Ope's Transformed Headline:
                        </span>
                        <p className="text-[var(--color-text-primary)] font-mono font-semibold text-[11.5px]">
                          {ex.afterHeadline}
                        </p>
                      </div>
                    </div>

                    {/* Transformed Bullets Detailed Table */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                        Transformed Experience Bullets (Exemplar Mapping)
                      </span>
                      <div className="space-y-2">
                        {ex.afterBullets.map((b, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-1 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-amber-700 dark:text-amber-400">
                                {b.transformationType.replace('_', ' ')}
                              </span>
                              <span className="text-[10px] text-[var(--color-text-muted)] font-mono">
                                Bullet #{i + 1}
                              </span>
                            </div>
                            <p className="text-[var(--color-text-primary)] font-medium text-[12px] leading-relaxed">
                              {b.text}
                            </p>
                            <p className="text-[11px] text-[var(--color-text-secondary)] font-mono pt-1">
                              ↳ <strong className="text-slate-700 dark:text-slate-300">Coaching Rationale:</strong> {b.reasoning}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hiring Manager Evaluation */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <span>Scan: <strong className="text-emerald-400">{ex.hiringManagerCritique.scanScore}%</strong></span>
                        <span>•</span>
                        <span>Density: <strong className="text-amber-400">{ex.hiringManagerCritique.metricDensity}%</strong></span>
                        <span>•</span>
                        <span>Grit: <strong className="text-blue-400">{ex.hiringManagerCritique.gritScore}%</strong></span>
                      </div>
                      <span className="text-slate-400 truncate max-w-md">
                        &quot;{ex.hiringManagerCritique.verdict}&quot;
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Ingest New Exemplar Modal */}
      {ingestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-amber-600" />
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Add Before/After Resume to Vector Bank
                </h3>
              </div>
              <button
                onClick={() => setIngestModalOpen(false)}
                className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] font-mono"
              >
                ✕ Close
              </button>
            </div>

            {ingestSuccess ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Exemplar Ingested Successfully!</h4>
                <p className="text-xs text-[var(--color-text-secondary)] font-mono">
                  Embedded with text-embedding-3-small and stored in PostgreSQL pgvector. Available for cosine retrieval.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSimulateIngest} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-[var(--color-text-secondary)] mb-1 block">Pivot Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flight Attendant ➔ Aviation SaaS SDR"
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-3 py-1.5 text-xs text-[var(--color-text-primary)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-[var(--color-text-secondary)] mb-1 block">Pivot Category</label>
                    <select className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-3 py-1.5 text-xs text-[var(--color-text-primary)]">
                      <option>Hospitality</option>
                      <option>Retail</option>
                      <option>Teaching</option>
                      <option>Customer Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-[var(--color-text-secondary)] mb-1 block">Placed Company</label>
                    <input
                      type="text"
                      placeholder="e.g. Toast POS"
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-3 py-1.5 text-xs text-[var(--color-text-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-[var(--color-text-secondary)] mb-1 block">Raw Before Resume Snippet</label>
                  <textarea
                    rows={2}
                    placeholder="Paste unedited bullets from client..."
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2 text-xs text-[var(--color-text-primary)] font-mono"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[var(--color-text-secondary)] mb-1 block">Ope's Transformed Final Bullets</label>
                  <textarea
                    rows={2}
                    placeholder="Paste Ope's finalized SDR bullets..."
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2 text-xs text-[var(--color-text-primary)] font-mono"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setIngestModalOpen(false)}
                    className="h-8 text-xs border-[var(--color-border)]"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="sm"
                    className="h-8 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white"
                  >
                    Save & Generate Vector Embedding
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
