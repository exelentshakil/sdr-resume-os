'use client';

import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  Terminal,
  Trash2,
  CheckCircle2,
  Clock,
  Cpu,
  Database,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LogEntry {
  id: string;
  timestamp: string;
  stage: 'Intake' | 'Vector RAG' | 'AI Transform' | 'Hiring Manager Gate' | 'Coach Delivery';
  status: '200 OK' | 'Pass' | 'Sanitized' | 'Delivered';
  details: string;
  durationMs: number;
}

const INITIAL_LOGS: LogEntry[] = [
  {
    id: 'log_01',
    timestamp: '16:12:04.218',
    stage: 'Coach Delivery',
    status: 'Delivered',
    details: 'Draft pushed to Ope Review Queue (Score: 94/100, Density: 84%, Est review: 3.5 min)',
    durationMs: 42,
  },
  {
    id: 'log_02',
    timestamp: '16:12:04.176',
    stage: 'Hiring Manager Gate',
    status: 'Pass',
    details: 'VP of Sales 6-second glance rubric passed: 84% metric density, 92 grit index, 0 ATS errors',
    durationMs: 140,
  },
  {
    id: 'log_03',
    timestamp: '16:12:04.036',
    stage: 'AI Transform',
    status: '200 OK',
    details: 'OpenAI gpt-4o-mini transformed 4 bullets applying Laws #1, #2, #3 (1,420 tokens processed)',
    durationMs: 640,
  },
  {
    id: 'log_04',
    timestamp: '16:12:03.396',
    stage: 'Vector RAG',
    status: '200 OK',
    details: 'Retrieved top-2 exemplars from 50+ bank for Retail pivot (ex-01, ex-04, cosine score: 0.88)',
    durationMs: 78,
  },
  {
    id: 'log_05',
    timestamp: '16:12:03.318',
    stage: 'Intake',
    status: 'Sanitized',
    details: 'Securiti firewall sanitized candidate phone number, physical address, and PII markers (OWASP LLM02)',
    durationMs: 18,
  },
  {
    id: 'log_06',
    timestamp: '16:12:03.300',
    stage: 'Intake',
    status: '200 OK',
    details: 'Ingested raw intake notes & 4 retail bullets for candidate Marcus Vance (Pivot: Retail to SaaS SDR)',
    durationMs: 25,
  },
];

interface ExecutionLogDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExecutionLogDrawer({ open, onOpenChange }: ExecutionLogDrawerProps) {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [filter, setFilter] = useState<string>('All');

  const filteredLogs = logs.filter((l) => filter === 'All' || l.stage === filter);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto bg-[var(--color-surface)] border-l border-[var(--color-border)] p-6 text-[var(--color-text-primary)]">
        <SheetHeader className="border-b border-[var(--color-border)] pb-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <Terminal className="h-3.5 w-3.5 text-slate-600 dark:text-slate-400" />
                Live Execution Traces
              </span>
              <span className="text-xs text-emerald-600 font-mono font-bold">
                ● Connected
              </span>
            </div>

            <Button
              size="sm"
              variant="ghost"
              onClick={() => setLogs([])}
              className="h-7 text-xs text-[var(--color-text-muted)] hover:text-red-600 px-2"
            >
              <Trash2 className="h-3 w-3 mr-1" />
              <span>Clear</span>
            </Button>
          </div>
          <SheetTitle className="text-lg font-bold">
            Real-Time Pipeline Event Log
          </SheetTitle>
          <SheetDescription className="text-xs text-[var(--color-text-secondary)]">
            End-to-end execution traces capturing intake ingestion, exemplar vector lookups, LLM inference latency, and coach sign-off delivery.
          </SheetDescription>
        </SheetHeader>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 mb-4 text-xs font-mono overflow-x-auto pb-1">
          {['All', 'Intake', 'Vector RAG', 'AI Transform', 'Hiring Manager Gate', 'Coach Delivery'].map((stage) => (
            <button
              key={stage}
              onClick={() => setFilter(stage)}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap ${
                filter === stage
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Log Entries List */}
        <div className="space-y-2.5 font-mono text-xs">
          {filteredLogs.length === 0 ? (
            <p className="text-[var(--color-text-muted)] italic text-center py-8">
              No log entries match the selected filter.
            </p>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[var(--color-text-primary)]">
                      [{log.stage}]
                    </span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-xs font-semibold ${
                        log.status === 'Delivered' || log.status === '200 OK' || log.status === 'Pass'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs">
                    <span>{log.durationMs}ms</span>
                    <span>{log.timestamp}</span>
                  </div>
                </div>

                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {log.details}
                </p>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
