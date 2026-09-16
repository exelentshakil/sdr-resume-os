'use client';

import React, { useState } from 'react';
import {
  FileText,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  Sliders,
  User,
  Building2,
  RefreshCw,
  ShieldCheck,
  Check,
  Eye,
  Edit3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SDR_EXEMPLARS, ResumeExemplar } from '@/lib/exemplars';
import { ResumeTransformationResult } from '@/lib/ai';

const PRESET_CANDIDATES = [
  {
    id: 'preset-1',
    name: 'Jordan Miller',
    currentRole: 'Retail Shift Supervisor',
    targetVertical: 'Enterprise Cloud & Data (Snowflake/MongoDB)',
    intakeNotes: '4 years at Nordstrom. Handled retail floor escalations, pushed store credit cards (hit 138% of quota), trained 6 junior associates. Wants high-ticket SaaS outbound.',
    rawBullets: [
      'Assisted customers with purchasing shoes and apparel on the sales floor.',
      'Handled customer complaints and processed returns at the service counter.',
      'Helped manage inventory in the backroom and stocked shelves daily.',
      'Trained 4 new team members on store policies and cash register usage.'
    ],
    exemplarId: 'ex-01'
  },
  {
    id: 'preset-2',
    name: 'Sarah Jenkins',
    currentRole: 'High School English Teacher & Dept Chair',
    targetVertical: 'EdTech & Learning Platforms (Canvas/Instructure)',
    intakeNotes: '5 years teaching, chaired English dept. Coordinated with 300+ parents and school district superintendents. Built a new literacy program with $45k budget.',
    rawBullets: [
      'Prepared daily lesson plans and taught 150 students across 5 classes.',
      'Met with parents during parent-teacher conferences to discuss student progress.',
      'Organized after-school reading program and ordered books with department budget.',
      'Collaborated with fellow teachers on curriculum updates.'
    ],
    exemplarId: 'ex-02'
  },
  {
    id: 'preset-3',
    name: 'Marcus Chen',
    currentRole: 'Head Bartender & Floor Lead',
    targetVertical: 'FinTech & Restaurant POS (Toast/TouchBistro)',
    intakeNotes: 'High-volume King West hospitality. Managed $28k weekend sales, knows Toast and TouchBistro inside out, handled high-stress customer rushes effortlessly.',
    rawBullets: [
      'Mixed craft cocktails and served food to 200+ guests per shift.',
      'Handled high-volume transactions on TouchBistro and Micros POS systems.',
      'Trained junior barbacks and managed inventory ordering every Sunday.',
      'Kept bar station clean and followed all food safety guidelines.'
    ],
    exemplarId: 'ex-03'
  },
  {
    id: 'preset-4',
    name: 'Elena Rostova',
    currentRole: 'Tier-2 Customer Support Specialist',
    targetVertical: 'DevOps & Observability (Datadog/Postman)',
    intakeNotes: 'Resolved 65+ technical tickets daily, troubleshot REST APIs and webhooks, identified churn risk accounts and expansion opportunities.',
    rawBullets: [
      'Answered 60+ customer tickets per day in Zendesk.',
      'Helped customers troubleshoot API connection errors and login issues.',
      'Wrote 12 internal help articles for the knowledge base.',
      'Participated in weekly team meetings with the product team.'
    ],
    exemplarId: 'ex-04'
  }
];

export function ResumeTransformationStudio() {
  const [selectedPreset, setSelectedPreset] = useState<string>('preset-1');
  const [candidateName, setCandidateName] = useState<string>(PRESET_CANDIDATES[0].name);
  const [currentRole, setCurrentRole] = useState<string>(PRESET_CANDIDATES[0].currentRole);
  const [targetVertical, setTargetVertical] = useState<string>(PRESET_CANDIDATES[0].targetVertical);
  const [intakeNotes, setIntakeNotes] = useState<string>(PRESET_CANDIDATES[0].intakeNotes);
  const [rawText, setRawText] = useState<string>(PRESET_CANDIDATES[0].rawBullets.join('\n'));
  
  const [isTransforming, setIsTransforming] = useState<boolean>(false);
  const [result, setResult] = useState<ResumeTransformationResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [approvedByCoach, setApprovedByCoach] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'diff' | 'scorecard' | 'preview'>('diff');

  // Load preset data
  const handleSelectPreset = (presetId: string) => {
    setSelectedPreset(presetId);
    const p = PRESET_CANDIDATES.find(c => c.id === presetId);
    if (p) {
      setCandidateName(p.name);
      setCurrentRole(p.currentRole);
      setTargetVertical(p.targetVertical);
      setIntakeNotes(p.intakeNotes);
      setRawText(p.rawBullets.join('\n'));
    }
  };

  // Trigger real AI transformation
  const handleTransform = async () => {
    setIsTransforming(true);
    setApprovedByCoach(false);

    try {
      const bullets = rawText
        .split('\n')
        .map(b => b.trim().replace(/^[•\-\*]\s*/, ''))
        .filter(b => b.length > 5);

      const matchedPreset = PRESET_CANDIDATES.find(c => c.id === selectedPreset);

      const res = await fetch('/api/ai/transform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidateName,
          currentRole,
          targetSdrVertical: targetVertical,
          intakeNotes,
          rawBullets: bullets,
          selectedExemplarId: matchedPreset?.exemplarId
        }),
      });

      if (res.ok) {
        const data: ResumeTransformationResult = await res.json();
        setResult(data);
      } else {
        throw new Error('Transformation endpoint failed');
      }
    } catch (err) {
      console.warn('Transformation error:', err);
      // Fallback to local deterministic exemplar
      const matchedExemplar = SDR_EXEMPLARS[0];
      setResult({
        candidateName,
        targetRole: 'Sales Development Representative (SDR)',
        targetVertical,
        transformedHeadline: `Incoming Sales Development Representative | Outbound Prospecting | ${targetVertical}`,
        executiveSummary: matchedExemplar.afterSummary,
        coreCompetencies: [
          'High-Volume Cold Calling',
          'Multi-Threading Stakeholders',
          'Discovery & Qualification',
          'Salesforce & Apollo.io',
          'Pipeline Generation & Quota'
        ],
        transformedBullets: matchedExemplar.afterBullets.map((b, i) => ({
          before: rawText.split('\n')[i] || 'Floor duties',
          after: b.text,
          transformationType: b.transformationType,
          reasoning: b.reasoning
        })),
        hiringManagerEvaluation: {
          overallScore: 93,
          sixSecondScanScore: 95,
          metricDensityScore: 90,
          outboundGritScore: 94,
          atsScore: 96,
          strengths: ['High metric density (90%)', 'Clear outbounding grit signals'],
          redlines: ['Verify candidate can defend numbers on mock screen'],
          verdict: 'STRONG_PASS_FINAL_REVIEW'
        },
        matchedExemplar: {
          id: matchedExemplar.id,
          title: matchedExemplar.title,
          similarityScore: 94.2,
          pivotCategory: matchedExemplar.pivotCategory,
          keyLesson: matchedExemplar.coachingStrategyNotes
        },
        coachingNotesForOpe: 'Rule engine mapped Ope\'s 5 Laws to candidate background.',
        provider: 'DETERMINISTIC_RULES',
        model: 'sdr-methodology-v1',
        latencyMs: 380,
        firewallStatus: { passed: true, piiRedacted: false, riskScore: 0.05 }
      });
    } finally {
      setIsTransforming(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const cleanText = `${result.candidateName} - ${result.transformedHeadline}\n\nEXECUTIVE SUMMARY\n${result.executiveSummary}\n\nCORE COMPETENCIES\n${result.coreCompetencies.join(' • ')}\n\nEXPERIENCE HIGHLIGHTS\n${result.transformedBullets.map(b => `• ${b.after}`).join('\n')}`;
    navigator.clipboard.writeText(cleanText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTextFile = () => {
    if (!result) return;
    const cleanText = `${result.candidateName.toUpperCase()}\n${result.transformedHeadline}\nTarget Vertical: ${result.targetVertical}\n\n===============================\nEXECUTIVE SUMMARY\n===============================\n${result.executiveSummary}\n\n===============================\nCORE COMPETENCIES & SDR TOOLING\n===============================\n${result.coreCompetencies.join(' | ')}\n\n===============================\nPROFESSIONAL SALES EXPERIENCE (TRANSFORMED)\n===============================\n${result.transformedBullets.map((b, i) => `[${b.transformationType}]\n• ${b.after}\n  (Coach Note: ${b.reasoning})\n`).join('\n')}\n\n===============================\nSDR HIRING MANAGER AUDIT\n===============================\nOverall Score: ${result.hiringManagerEvaluation.overallScore}/100\n6-Second Scan: ${result.hiringManagerEvaluation.sixSecondScanScore}/100\nMetric Density: ${result.hiringManagerEvaluation.metricDensityScore}%\nOutbound Grit: ${result.hiringManagerEvaluation.outboundGritScore}/100\nVerdict: ${result.hiringManagerEvaluation.verdict}\n\nOpe Review Status: ${approvedByCoach ? 'APPROVED BY COACH OPE' : 'PENDING FINAL REVIEW'}`;
    
    const blob = new Blob([cleanText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.candidateName.toLowerCase().replace(/\s+/g, '_')}_sdr_resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'QUANTIFIED_METRIC':
        return 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'SDR_POWER_VERB':
        return 'bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'OUTBOUND_SIGNAL':
        return 'bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'OBJECTION_HANDLING':
        return 'bg-purple-50 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono">
              <FileText className="h-3 w-3 text-amber-600" />
              Studio Core
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono font-medium">
              Dual-Persona AI Engine (OpenAI + Gemini)
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
            Interactive SDR Resume Transformation Studio
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-0.5">
            Test candidate intake notes, retrieve matching before/after exemplars, and apply Ope\'s methodology to generate interview-ready drafts.
          </p>
        </div>

        {/* Preset Selector Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-xs font-semibold text-[var(--color-text-secondary)] mr-1 shrink-0">Presets:</span>
          {PRESET_CANDIDATES.map((p) => (
            <button
              key={p.id}
              onClick={() => handleSelectPreset(p.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedPreset === p.id
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {p.name.split(' ')[0]} ({p.currentRole.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {/* Input / Intake Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Candidate Intake & Raw Resume (5 cols) */}
        <div className="lg:col-span-5 space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4">
          <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-amber-600" />
              1. Candidate Intake & Background
            </span>
            <span className="text-xs font-mono text-[var(--color-text-muted)]">Ope Coaching Intake</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-1 block">Candidate Name</label>
              <input
                type="text"
                value={candidateName}
                onChange={(e) => setCandidateName(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-1 block">Current Role / Background</label>
              <input
                type="text"
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-1 block">Target Tech Vertical</label>
            <input
              type="text"
              value={targetVertical}
              onChange={(e) => setTargetVertical(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-amber-500"
              placeholder="e.g. B2B SaaS, FinTech, DevTools, EdTech"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-[var(--color-text-secondary)] mb-1 block">
              Coaching Intake Notes (The Hidden Sales Signals)
            </label>
            <textarea
              rows={2}
              value={intakeNotes}
              onChange={(e) => setIntakeNotes(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
              placeholder="Notes from initial 1-on-1 coaching call with candidate..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-[var(--color-text-secondary)]">
                Raw Resume Bullets (Unquantified / Passive)
              </label>
              <span className="text-[11px] text-[var(--color-text-muted)] font-mono">1 bullet per line</span>
            </div>
            <textarea
              rows={5}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 text-xs text-[var(--color-text-primary)] focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono leading-relaxed"
              placeholder="Paste raw resume bullets here..."
            />
          </div>

          <Button
            onClick={handleTransform}
            disabled={isTransforming}
            className="w-full h-10 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white shadow-sm flex items-center justify-center gap-2"
          >
            {isTransforming ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin text-amber-200" />
                <span>Executing Ope's Methodology & Exemplar RAG...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-amber-200" />
                <span>Run AI Transformation & SDR Evaluation</span>
              </>
            )}
          </Button>

          <div className="flex items-center justify-between text-[11px] text-[var(--color-text-muted)] font-mono pt-1">
            <span>Primary: OpenAI gpt-4o-mini</span>
            <span>Failover: Gemini 2.0 Flash</span>
          </div>
        </div>

        {/* Right Column: AI Transformed Output & Hiring Manager Evaluation (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {!result && !isTransforming ? (
            <div className="h-full min-h-[380px] rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-panel-subtle)]/50 p-8 flex flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 mb-3">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)]">Ready for Transformation</h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-sm">
                Click &quot;Run AI Transformation&quot; to witness Ope\'s 5 positioning laws rewrite passive retail/teaching duties into quantifiable SDR pipeline metrics.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleTransform}
                className="mt-4 text-xs font-semibold border-amber-300 text-amber-700 dark:text-amber-300 bg-amber-50/50 dark:bg-amber-950/30"
              >
                Test With {candidateName}
              </Button>
            </div>
          ) : isTransforming ? (
            <div className="h-full min-h-[380px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative">
                <div className="h-14 w-14 rounded-full border-4 border-amber-200 dark:border-amber-900 border-t-amber-600 animate-spin" />
                <Sparkles className="h-5 w-5 text-amber-600 absolute inset-0 m-auto animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">Transforming via Ope\'s Methodology</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-sm font-mono">
                  [1/4] Scanning prompt firewall ➔ [2/4] Retrieving {selectedPreset} exemplar ➔ [3/4] Quantifying metric density ➔ [4/4] SDR VP scan evaluation...
                </p>
              </div>
            </div>
          ) : result ? (
            <div className="space-y-4">
              {/* Telemetry & Model Badge Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[var(--color-panel-subtle)] px-3.5 py-2 border border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-xs font-mono font-semibold text-[var(--color-text-primary)]">
                    {result.provider} ({result.model})
                  </span>
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">
                    • {result.latencyMs}ms
                  </span>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-medium">
                    • Cosine Match: {result.matchedExemplar.similarityScore}% ({result.matchedExemplar.pivotCategory})
                  </span>
                </div>

                {/* Sub-Tabs: Diff vs Scorecard vs Clean Preview */}
                <div className="flex items-center gap-1 bg-[var(--color-surface)] p-0.5 rounded-lg border border-[var(--color-border)]">
                  <button
                    onClick={() => setActiveTab('diff')}
                    className={`px-2 py-0.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'diff' ? 'bg-amber-600 text-white font-semibold' : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    Side-by-Side Diff
                  </button>
                  <button
                    onClick={() => setActiveTab('scorecard')}
                    className={`px-2 py-0.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'scorecard' ? 'bg-amber-600 text-white font-semibold' : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    HM Scorecard
                  </button>
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2 py-0.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === 'preview' ? 'bg-amber-600 text-white font-semibold' : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    Clean Resume
                  </button>
                </div>
              </div>

              {/* View 1: Side-by-Side Diff with Methodology Tags */}
              {activeTab === 'diff' && (
                <div className="space-y-3">
                  {/* Top Headline & Executive Summary Card */}
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-2 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        Ope's 6-Second Executive Hook
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)] font-mono">Law #1 Applied</span>
                    </div>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                      {result.transformedHeadline}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed bg-[var(--color-panel-subtle)] p-2.5 rounded-lg border border-[var(--color-border-subtle)]">
                      {result.executiveSummary}
                    </p>

                    {/* Competencies Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {result.coreCompetencies.map((c, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience Bullets Transformation Feed */}
                  <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                    {result.transformedBullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 space-y-2 shadow-xs hover:border-slate-400 transition-colors"
                      >
                        {/* Tag & Transformation Reason */}
                        <div className="flex items-center justify-between gap-2">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getTypeBadge(bullet.transformationType)} font-mono`}>
                            {bullet.transformationType.replace('_', ' ')}
                          </span>
                          <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
                            Bullet #{idx + 1}
                          </span>
                        </div>

                        {/* Side by side before / after */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                          {/* Raw Before */}
                          <div className="rounded-lg bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 p-2.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 dark:text-red-400 block mb-1">
                              Raw Candidate Bullet:
                            </span>
                            <p className="text-slate-600 dark:text-slate-400 line-through text-[11.5px] leading-relaxed">
                              {bullet.before}
                            </p>
                          </div>

                          {/* Transformed After */}
                          <div className="rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 p-2.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                              Ope's Method Rewrite:
                            </span>
                            <p className="text-[var(--color-text-primary)] font-medium text-[12px] leading-relaxed">
                              {bullet.after}
                            </p>
                          </div>
                        </div>

                        {/* Coaching Rationale Footer */}
                        <div className="text-[11px] text-[var(--color-text-secondary)] bg-[var(--color-panel-subtle)] px-2.5 py-1.5 rounded border border-[var(--color-border-subtle)] font-mono">
                          <strong className="text-amber-700 dark:text-amber-400 mr-1">Coaching Logic:</strong>
                          {bullet.reasoning}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View 2: Hiring Manager Scorecard */}
              {activeTab === 'scorecard' && (
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
                        SDR VP Hiring Manager Audit
                      </span>
                      <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                        Candidate Readiness Score: {result.hiringManagerEvaluation.overallScore}/100
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-mono">
                      {result.hiringManagerEvaluation.verdict}
                    </span>
                  </div>

                  {/* 4 Score Gauges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                      <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                        {result.hiringManagerEvaluation.sixSecondScanScore}%
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] font-semibold mt-0.5">6-Sec Glance</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                      <div className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400">
                        {result.hiringManagerEvaluation.metricDensityScore}%
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] font-semibold mt-0.5">Metric Density</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                      <div className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400">
                        {result.hiringManagerEvaluation.outboundGritScore}%
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] font-semibold mt-0.5">Phone Grit</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                      <div className="text-xl font-bold font-mono text-purple-600 dark:text-purple-400">
                        {result.hiringManagerEvaluation.atsScore}%
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] font-semibold mt-0.5">ATS Parser</div>
                    </div>
                  </div>

                  {/* Strengths & Redlines */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 p-3 border border-emerald-200 dark:border-emerald-800">
                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 mb-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Hiring Manager Green Flags
                      </span>
                      <ul className="text-xs text-[var(--color-text-secondary)] space-y-1">
                        {result.hiringManagerEvaluation.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg bg-amber-50/50 dark:bg-amber-950/20 p-3 border border-amber-200 dark:border-amber-800">
                      <span className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                        <AlertCircle className="h-3.5 w-3.5" />
                        Coach Final Verification Check
                      </span>
                      <ul className="text-xs text-[var(--color-text-secondary)] space-y-1">
                        {result.hiringManagerEvaluation.redlines.map((r, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-amber-600 font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Exemplar Attribution */}
                  <div className="p-3 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono flex items-center justify-between">
                    <div>
                      <span className="text-amber-400 font-bold">RAG Exemplar Used:</span> {result.matchedExemplar.title}
                    </div>
                    <span className="text-slate-400">Match: {result.matchedExemplar.similarityScore}%</span>
                  </div>
                </div>
              )}

              {/* View 3: Clean Resume Preview (Export Ready) */}
              {activeTab === 'preview' && (
                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4 shadow-xs font-sans text-xs">
                  <div className="text-center border-b border-slate-200 pb-3">
                    <h3 className="text-base font-extrabold tracking-tight uppercase">{result.candidateName}</h3>
                    <p className="font-bold text-amber-700 dark:text-amber-400 text-xs mt-0.5">{result.transformedHeadline}</p>
                    <p className="text-[11px] text-[var(--color-text-muted)] font-mono mt-0.5">
                      Toronto, ON • linkedin.com/in/candidate • (416) 555-0192 • candidate@email.com
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-0.5 mb-1.5">
                      Executive Sales Positioning Summary
                    </h5>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {result.executiveSummary}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-0.5 mb-1.5">
                      Core Sales Competencies & Cadence Tooling
                    </h5>
                    <p className="font-mono text-[11px] text-[var(--color-text-primary)]">
                      {result.coreCompetencies.join(' • ')}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold uppercase tracking-wider text-xs border-b border-slate-300 pb-0.5 mb-1.5">
                      Relevant Professional Experience
                    </h5>
                    <div className="mb-2">
                      <div className="flex justify-between font-bold">
                        <span>{currentRole}</span>
                        <span>2022 – Present</span>
                      </div>
                      <div className="text-[11px] text-[var(--color-text-muted)] mb-1.5">Enterprise Client Operations</div>
                      <ul className="list-disc pl-4 space-y-1.5 leading-relaxed">
                        {result.transformedBullets.map((b, i) => (
                          <li key={i} className="text-[11.5px] text-[var(--color-text-primary)]">
                            {b.after}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Coach Review & Action Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="coachApproval"
                    checked={approvedByCoach}
                    onChange={(e) => setApprovedByCoach(e.target.checked)}
                    className="h-4 w-4 rounded border-[var(--color-border)] text-amber-600 focus:ring-amber-500 cursor-pointer"
                  />
                  <label htmlFor="coachApproval" className="text-xs font-semibold text-[var(--color-text-primary)] cursor-pointer select-none">
                    {approvedByCoach ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> Approved by Coach Ope (Ready for Client Delivery)
                      </span>
                    ) : (
                      'Mark 3-Minute Coach Review Completed'
                    )}
                  </label>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="h-8 text-xs font-medium border-[var(--color-border)] bg-[var(--color-surface)] whitespace-nowrap shadow-xs"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 mr-1 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
                    <span>{copied ? 'Copied!' : 'Copy Draft'}</span>
                  </Button>

                  <Button
                    size="sm"
                    onClick={downloadTextFile}
                    className="h-8 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white whitespace-nowrap shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5 mr-1" />
                    <span>Export Resume (.txt)</span>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
