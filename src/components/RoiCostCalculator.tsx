'use client';

import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Cpu,
  Clock,
  Sparkles,
  CheckCircle2,
  Zap,
  Users,
  Award
} from 'lucide-react';

export function RoiCostCalculator() {
  const [monthlyClients, setMonthlyClients] = useState<number>(35);
  const [coachingFee, setCoachingFee] = useState<number>(1400);
  const [manualMinutes, setManualMinutes] = useState<number>(50);
  const [aiProvider, setAiProvider] = useState<'openai' | 'gemini' | 'hybrid'>('hybrid');

  // Time calculations
  const aiMinutes = 3.5;
  const minutesSavedPerResume = manualMinutes - aiMinutes;
  const monthlyHoursSaved = +((monthlyClients * minutesSavedPerResume) / 60).toFixed(1);
  const annualHoursSaved = +(monthlyHoursSaved * 12).toFixed(0);

  // API Token Cost Calculations:
  // Avg resume intake + 2 exemplars = ~1,600 input tokens
  // Transformed resume + hiring manager evaluation = ~800 output tokens
  // OpenAI gpt-4o-mini: $0.15 / 1M in ($0.00024) + $0.60 / 1M out ($0.00048) = $0.00072/resume
  // Gemini 2.0 Flash: $0.10 / 1M in + $0.40 / 1M out = $0.00048/resume
  // Hybrid with embeddings = ~$0.0016 / resume
  const costPerResume = {
    openai: 0.0012,
    gemini: 0.0008,
    hybrid: 0.0016,
  }[aiProvider];

  const monthlyAiCost = +(monthlyClients * costPerResume).toFixed(2);
  const annualAiCost = +(monthlyAiCost * 12).toFixed(2);

  // Financial Value Calculation
  // Valuing Ope's coaching time conservatively at $85/hr
  const coachHourlyValuation = 85;
  const monthlyLaborValueSaved = +(monthlyHoursSaved * coachHourlyValuation).toFixed(0);
  const annualLaborValueSaved = +(annualHoursSaved * coachHourlyValuation).toFixed(0);

  // Scaled Revenue Potential
  // Without AI: Capped at ~20-25 clients/month due to manual rewriting bottlenecks
  // With AI: Can easily scale to 70+ clients with the same 3-min review SLA
  const currentMonthlyGross = monthlyClients * coachingFee;
  const potentialScaledGross = Math.min(monthlyClients * 2.2, 100) * coachingFee;
  const incrementalRevenueUpside = Math.round(potentialScaledGross - currentMonthlyGross);

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 dark:bg-purple-950/40 px-2.5 py-0.5 text-xs font-semibold text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-mono">
              <Calculator className="h-3 w-3 text-purple-600" />
              Economics & SLA Model
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono font-medium">
              80–90% Workload Automation Impact
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Coaching ROI & Workload Turnaround Calculator
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
            Calculate the exact hours saved, infrastructure micro-costs, and business capacity expansion from automating candidate resume drafting.
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2 bg-[var(--color-panel-subtle)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-xs font-mono shrink-0">
          <Clock className="h-3.5 w-3.5 text-purple-600" />
          <span>SLA: <strong className="text-purple-600">3.5 min</strong> review</span>
        </div>
      </div>

      {/* Main Grid: Inputs vs. Live Real-Time Financial Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 6 Cols: Interactive Sliders & Options */}
        <div className="lg:col-span-6 space-y-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
              Coaching Program Parameters
            </span>
            <span className="text-[11px] font-mono text-[var(--color-text-muted)]">Live Sliders</span>
          </div>

          {/* Slider 1: Monthly Clients */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-[var(--color-text-primary)] flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-amber-600" />
                Monthly Coaching Clients
              </label>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400 bg-[var(--color-surface)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                {monthlyClients} clients / mo
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={100}
              step={5}
              value={monthlyClients}
              onChange={(e) => setMonthlyClients(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>5 clients</span>
              <span>35 (Standard)</span>
              <span>100+ (Scaled)</span>
            </div>
          </div>

          {/* Slider 2: Average Coaching Fee */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-[var(--color-text-primary)] flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5 text-emerald-600" />
                Average Coaching Package Price
              </label>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-[var(--color-surface)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                ${coachingFee.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={3000}
              step={100}
              value={coachingFee}
              onChange={(e) => setCoachingFee(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>$500</span>
              <span>$1,400 (Avg)</span>
              <span>$3,000</span>
            </div>
          </div>

          {/* Slider 3: Current Manual Rewriting Time */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-[var(--color-text-primary)] flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-purple-600" />
                Current Manual Rewrite Time (Mins)
              </label>
              <span className="font-mono font-bold text-purple-600 dark:text-purple-400 bg-[var(--color-surface)] px-2 py-0.5 rounded border border-[var(--color-border)]">
                {manualMinutes} mins / client
              </span>
            </div>
            <input
              type="range"
              min={25}
              max={90}
              step={5}
              value={manualMinutes}
              onChange={(e) => setManualMinutes(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] font-mono">
              <span>25m (Fast)</span>
              <span>50m (Realistic)</span>
              <span>90m (Heavy)</span>
            </div>
          </div>

          {/* AI Provider Architecture Selector */}
          <div className="space-y-2 pt-2 border-t border-[var(--color-border)]">
            <label className="text-xs font-semibold text-[var(--color-text-primary)] block">
              AI Infrastructure Engine
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAiProvider('openai')}
                className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                  aiProvider === 'openai'
                    ? 'border-purple-600 bg-purple-50/40 dark:bg-purple-950/30 text-[var(--color-text-primary)] font-semibold'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <div className="font-bold">OpenAI Only</div>
                <div className="text-[10px] text-[var(--color-text-muted)] font-mono">$0.0012/resume</div>
              </button>

              <button
                type="button"
                onClick={() => setAiProvider('gemini')}
                className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                  aiProvider === 'gemini'
                    ? 'border-purple-600 bg-purple-50/40 dark:bg-purple-950/30 text-[var(--color-text-primary)] font-semibold'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <div className="font-bold">Gemini 2.0</div>
                <div className="text-[10px] text-[var(--color-text-muted)] font-mono">$0.0008/resume</div>
              </button>

              <button
                type="button"
                onClick={() => setAiProvider('hybrid')}
                className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                  aiProvider === 'hybrid'
                    ? 'border-purple-600 bg-purple-50/40 dark:bg-purple-950/30 text-[var(--color-text-primary)] font-semibold'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <div className="font-bold">Dual Failover</div>
                <div className="text-[10px] text-[var(--color-text-muted)] font-mono">$0.0016/resume</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right 6 Cols: High-Impact ROI Gauges */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Hours Saved Card */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-1">
              <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
                <span>Hours Saved / Mo</span>
                <Clock className="h-4 w-4 text-purple-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">
                {monthlyHoursSaved} <span className="text-xs font-normal text-[var(--color-text-muted)]">hrs</span>
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)] font-mono">
                {annualHoursSaved} hours/year saved for strategy
              </p>
            </div>

            {/* Time Valuation Saved */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-1">
              <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] font-mono">
                <span>Value of Saved Time</span>
                <Award className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                ${monthlyLaborValueSaved}
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)] font-mono">
                ${annualLaborValueSaved}/yr at $85/hr coach value
              </p>
            </div>
          </div>

          {/* Infrastructure Cost Micro-Breakdown */}
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-blue-600" />
                Raw AI API Running Cost
              </span>
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                ${monthlyAiCost} / month
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-[var(--color-border-subtle)] font-mono text-[11px]">
                <span className="text-[var(--color-text-secondary)]">Cost per Candidate Transformation</span>
                <span className="font-bold text-[var(--color-text-primary)]">${costPerResume.toFixed(4)}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[var(--color-border-subtle)] font-mono text-[11px]">
                <span className="text-[var(--color-text-secondary)]">Annual Total AI Cloud Bill</span>
                <span className="font-bold text-emerald-600">${annualAiCost} / year</span>
              </div>
              <div className="flex justify-between items-center py-1 font-mono text-[11px]">
                <span className="text-[var(--color-text-secondary)]">ROI Ratio (Labor Value vs. AI Cost)</span>
                <span className="font-bold text-purple-600">
                  {monthlyAiCost > 0 ? `${Math.round(Number(monthlyLaborValueSaved) / Number(monthlyAiCost))}x` : '4,800x'}
                </span>
              </div>
            </div>
          </div>

          {/* Business Expansion Upside Callout */}
          <div className="rounded-xl border border-amber-500/40 bg-amber-50/20 dark:bg-amber-950/20 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-amber-600" />
              <h4 className="text-xs font-bold text-[var(--color-text-primary)]">
                Program Scale & Revenue Capacity Growth
              </h4>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              By removing manual drafting bottlenecks, your business can absorb <strong className="text-[var(--color-text-primary)]">+30–45 additional clients/month</strong> with zero increase in coaching hours. Potential revenue upside: <strong className="text-emerald-700 dark:text-emerald-400">+${incrementalRevenueUpside.toLocaleString()}/mo</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
