'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import {
  Sparkles,
  Database,
  UserCheck,
  Calculator,
  Download,
  Terminal,
  Shield,
  Sun,
  Moon,
  Zap,
  ChevronDown,
  Search,
  SlidersHorizontal,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenChaosModal: () => void;
  onOpenGovernanceDrawer: () => void;
  onOpenLogsDrawer: () => void;
  onOpenCommandMenu: () => void;
}

export function Header({
  activeSection,
  onNavigate,
  onOpenChaosModal,
  onOpenGovernanceDrawer,
  onOpenLogsDrawer,
  onOpenCommandMenu,
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  // Primary high-signal navigation anchors with sleek typography labels
  const primaryNavItems = [
    { id: 'studio', label: 'Studio', icon: Sparkles },
    { id: 'exemplars', label: 'Exemplars', icon: Database },
    { id: 'evaluator', label: 'Hiring Manager', icon: UserCheck },
    { id: 'roi', label: 'Coach ROI', icon: Calculator },
    { id: 'blueprints', label: 'Zero Lock-In', icon: Download },
  ];

  // Secondary navigation anchors in sleek "More" dropdown
  const secondaryNavItems = [
    { id: 'briefing', label: 'Executive Briefing', icon: Zap, desc: 'Problem context & evaluation paths' },
    { id: 'governance', label: 'Securiti AI Firewall', icon: Shield, desc: 'OWASP Top 10 for LLMs & PII audit' },
    { id: 'logs', label: 'Live LLM Telemetry', icon: Terminal, desc: 'Token usage, latency, and provider fallbacks' },
  ];

  const isSecondaryActive = secondaryNavItems.some((item) => item.id === activeSection);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Cluster: Brand Anchor + Hairline Divider + Integrated Primary Nav */}
        <div className="flex items-center gap-4 xl:gap-5">
          {/* Brand Logo Lockup */}
          <button
            onClick={() => onNavigate('briefing')}
            className="group flex items-center gap-2.5 text-left transition-opacity hover:opacity-90 shrink-0"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600 text-white shadow-xs font-bold shrink-0">
              <FileText className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-[var(--color-text-primary)]">
                SDR Resume
              </span>
              <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-mono">
                OS
              </span>
            </div>
          </button>

          {/* Hairline Structural Divider */}
          <div className="hidden lg:block h-4 w-px bg-[var(--color-border)] mx-1 shrink-0" />

          {/* Primary Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2.5 py-1.5 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-semibold shadow-2xs border border-[var(--color-border)]'
                      : 'border border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)]/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Sleek "More" Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    isSecondaryActive
                      ? 'bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] font-semibold shadow-2xs border border-[var(--color-border)]'
                      : 'border border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)]/70'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className="h-3 w-3 opacity-60 ml-0.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-[var(--color-surface)] border border-[var(--color-border)] p-1.5 shadow-lg">
                {secondaryNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'governance') {
                          onOpenGovernanceDrawer();
                        } else if (item.id === 'logs') {
                          onOpenLogsDrawer();
                        } else {
                          onNavigate(item.id);
                        }
                      }}
                      className={`flex items-start gap-2.5 p-2 rounded-md cursor-pointer text-xs ${
                        isActive ? 'bg-[var(--color-panel-subtle)] font-semibold text-amber-600 dark:text-amber-400' : 'text-[var(--color-text-primary)]'
                      }`}
                    >
                      <Icon className="h-4 w-4 mt-0.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <div>
                        <div className="font-medium leading-none">{item.label}</div>
                        <div className="text-xs text-[var(--color-text-muted)] mt-1 font-normal">{item.desc}</div>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right Cluster: Command Menu Trigger + Live Status + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Command Trigger Badge (⌘K) */}
          <button
            onClick={onOpenCommandMenu}
            className="hidden md:flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-panel-subtle)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)] hover:border-slate-400 transition-colors shadow-2xs"
          >
            <Search className="h-3.5 w-3.5 text-[var(--color-text-muted)]" />
            <span className="font-medium">Quick Jump</span>
            <kbd className="rounded border border-[var(--color-border)] bg-[var(--color-surface)] px-1.5 py-0.5 text-[10px] font-mono font-semibold text-[var(--color-text-muted)]">
              ⌘K
            </kbd>
          </button>

          {/* Failover / Chaos Simulator Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenChaosModal}
            className="h-8 text-xs font-semibold border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] shadow-2xs hidden sm:flex items-center gap-1.5"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-amber-600" />
            <span>Chaos Test</span>
          </Button>

          {/* Securiti AI Firewall Drawer Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenGovernanceDrawer}
            className="h-8 text-xs font-semibold border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] shadow-2xs hidden xl:flex items-center gap-1.5"
          >
            <Shield className="h-3.5 w-3.5 text-emerald-600" />
            <span className="font-mono text-[11px]">Securiti Guard</span>
          </Button>

          {/* Theme Toggle (Light/Dark Mode, defaults to Light) */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-8 w-8 rounded-md border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)]"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
          </Button>
        </div>
      </div>
    </header>
  );
}
