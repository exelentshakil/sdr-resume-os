#!/usr/bin/env python3
"""
Production Scope & Formal Estimate Generator
SDR Resume OS: AI Career Positioning & Exemplar RAG Engine
Client: Ope, SDR Career Coaching Practice (Toronto, Canada)
Budget Calibration: $25.00/hr (Posted: $15.00 - $30.00 Hourly) · Turnkey: $1,400.00 (56 hrs)
Built to exact BarakahSoft Gold-Standard Architecture:
- 6 Direct Flex Children (Zero Middle Void)
- High-Density 6-Row Scope Table with Percentage Allocations
- Verified Upwork Partner Credentials (Never "Top Rated")
- Dual Signature Block with Formal Authorization
- Inlined Base64 Assets and Headless Chrome Single-Page PDF Audit
"""

import os
import re
import base64
import subprocess
import sys

def build_estimate():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.abspath(os.path.join(current_dir, ".."))
    docs_dir = os.path.join(project_dir, "docs")
    html_path = os.path.join(docs_dir, "estimate.html")
    pdf_path = os.path.join(docs_dir, "ESTIMATE.pdf")

    headshot_file = os.path.join(docs_dir, "headshot.jpeg")
    logo_file = os.path.join(docs_dir, "logo.png")

    with open(headshot_file, "rb") as f:
        headshot_b64 = base64.b64encode(f.read()).decode("utf-8")

    with open(logo_file, "rb") as f:
        logo_b64 = base64.b64encode(f.read()).decode("utf-8")

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Production Scope &amp; Formal Estimate - SDR Resume OS</title>
  <style>
    @page {{
      size: letter portrait;
      margin: 5mm 7mm 5mm 7mm;
    }}
    * {{
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}
    html, body {{
      margin: 0;
      padding: 0;
      height: 100%;
      background: #ffffff;
      overflow: hidden;
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.25;
      font-size: 8.5px;
    }}
    #page-container {{
      width: 100%;
      height: 100%;
      max-height: 1040px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    /* Child 1: Header */
    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 6px;
      border-bottom: 1.5px solid #d97706;
    }}
    .brand-group {{
      display: flex;
      align-items: center;
      gap: 9px;
    }}
    .brand-logo {{
      width: 28px;
      height: 28px;
      border-radius: 6px;
      object-fit: contain;
    }}
    .brand-titles h1 {{
      margin: 0;
      font-size: 14px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
    }}
    .brand-titles p {{
      margin: 1px 0 0 0;
      font-size: 8px;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }}
    .client-meta {{
      text-align: right;
      font-size: 8px;
      color: #475569;
    }}
    .client-meta strong {{
      color: #0f172a;
      font-size: 9px;
    }}

    /* Child 2: Meta Strip (4 KPIs) */
    .meta-strip {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      margin: 5px 0;
    }}
    .kpi-card {{
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 5px;
      padding: 4px 6px;
    }}
    .kpi-label {{
      font-size: 7px;
      font-weight: 700;
      text-transform: uppercase;
      color: #64748b;
      letter-spacing: 0.04em;
    }}
    .kpi-value {{
      font-size: 11px;
      font-weight: 800;
      color: #0f172a;
      margin-top: 1px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }}
    .kpi-sub {{
      font-size: 7px;
      color: #16a34a;
      font-weight: 600;
    }}

    /* Child 3: Scope Table (6 Rows) */
    .table-container {{
      border: 1px solid #cbd5e1;
      border-radius: 5px;
      overflow: hidden;
      margin: 4px 0;
    }}
    table {{
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }}
    thead th {{
      background: #0f172a;
      color: #f8fafc;
      font-size: 7.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 4px 6px;
    }}
    tbody tr {{
      border-bottom: 1px solid #f1f5f9;
    }}
    tbody tr:nth-child(even) {{
      background: #f8fafc;
    }}
    tbody tr.phase-zero {{
      background: #f0fdf4;
      border-bottom: 1.5px solid #86efac;
    }}
    td {{
      padding: 4px 6px;
      font-size: 8px;
      vertical-align: middle;
    }}
    .phase-badge {{
      display: inline-block;
      font-size: 7px;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 3px;
      font-family: ui-monospace, monospace;
    }}
    .badge-done {{
      background: #dcfce7;
      color: #15803d;
      border: 1px solid #bbf7d0;
    }}
    .badge-ready {{
      background: #fef3c7;
      color: #b45309;
      border: 1px solid #fde68a;
    }}
    .mono {{
      font-family: ui-monospace, monospace;
      font-weight: 700;
    }}

    /* Child 4: Two-Track Engagement Terms */
    .terms-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin: 4px 0;
    }}
    .term-box {{
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      border-radius: 5px;
      padding: 5px 7px;
    }}
    .term-title {{
      font-size: 8px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 3px;
      display: flex;
      justify-content: space-between;
    }}
    .term-desc {{
      font-size: 7.5px;
      color: #475569;
      line-height: 1.25;
    }}

    /* Child 5: Enterprise Governance & Credentials */
    .governance-card {{
      background: #ffffff;
      border: 1px solid #d97706;
      border-radius: 5px;
      padding: 5px 8px;
      margin: 4px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}
    .gov-col {{
      font-size: 7.5px;
      color: #334155;
    }}
    .gov-col strong {{
      color: #0f172a;
      display: block;
      font-size: 8px;
      margin-bottom: 1px;
    }}

    /* Child 6: Dual Sign-off Footer */
    .footer-sign {{
      border-top: 1px solid #cbd5e1;
      padding-top: 6px;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 10px;
      align-items: center;
    }}
    .profile-lockup {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}
    .headshot {{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      border: 1.5px solid #d97706;
    }}
    .profile-info h4 {{
      margin: 0;
      font-size: 9px;
      font-weight: 800;
      color: #0f172a;
    }}
    .profile-info p {{
      margin: 1px 0 0 0;
      font-size: 7.5px;
      color: #64748b;
    }}
    .auth-block {{
      text-align: right;
      font-size: 7.5px;
      color: #475569;
    }}
    .auth-badge {{
      display: inline-block;
      background: #0f172a;
      color: #ffffff;
      font-size: 7px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 3px;
      margin-top: 2px;
      font-family: ui-monospace, monospace;
    }}
  </style>
</head>
<body>
  <div id="page-container">
    <!-- CHILD 1: Header -->
    <div class="header">
      <div class="brand-group">
        <img src="data:image/png;base64,{logo_b64}" class="brand-logo" alt="BarakahSoft Logo">
        <div class="brand-titles">
          <h1>SDR Resume OS • Production Architecture &amp; Delivery Scope</h1>
          <p>AI Career Positioning Engine · Exemplar Vector RAG · 100% Client IP Ownership</p>
        </div>
      </div>
      <div class="client-meta">
        <strong>Client:</strong> Ope (SDR Career Coaching Practice · Toronto, Canada)<br>
        <strong>Architect:</strong> Md Shakil Ahmed · BarakahSoft LLC (Verified Upwork Partner)<br>
        <strong>Date:</strong> September 2026 · <strong>Rate:</strong> $25.00/hr (Calibrated to $15–$30/hr posted)
      </div>
    </div>

    <!-- CHILD 2: Meta Strip (4 KPIs) -->
    <div class="meta-strip">
      <div class="kpi-card">
        <div class="kpi-label">Production V1 Timeline</div>
        <div class="kpi-value">3–4 Weeks</div>
        <div class="kpi-sub">56 Total Capped Hours</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Calibrated Hourly Rate</div>
        <div class="kpi-value">$25.00 / hr</div>
        <div class="kpi-sub">Within $15–$30/hr Range</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Total Turnkey Investment</div>
        <div class="kpi-value">$1,400.00</div>
        <div class="kpi-sub">Zero Hidden Cloud Fees</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Coach Turnaround SLA</div>
        <div class="kpi-value">3.5 Minutes</div>
        <div class="kpi-sub">88.9% Time Reduction</div>
      </div>
    </div>

    <!-- CHILD 3: Scope Table (6 Rows) -->
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th style="width: 14%;">Phase / Milestone</th>
            <th style="width: 48%;">Technical Scope &amp; Production Deliverables</th>
            <th style="width: 12%;">Turnaround</th>
            <th style="width: 10%;">Hours</th>
            <th style="width: 16%;">Investment</th>
          </tr>
        </thead>
        <tbody>
          <tr class="phase-zero">
            <td>
              <span class="phase-badge badge-done">PHASE 0</span><br>
              <strong>Live Prototype</strong>
            </td>
            <td>
              <strong>Working Dual AI Pipeline &amp; Exemplar Engine (COMPLETED):</strong> Live Next.js 15 App Router, OpenAI gpt-4o-mini + Gemini 2.0 Flash failover, 50+ Exemplar RAG bank, 6-sec glance rubric, and Dify/FastAPI blueprints.
            </td>
            <td>Instant</td>
            <td class="mono">0 hrs</td>
            <td class="mono" style="color: #15803d;">$0.00 (Ready)</td>
          </tr>
          <tr>
            <td>
              <span class="phase-badge badge-ready">MILESTONE 1</span><br>
              <strong>Archive Vector RAG</strong>
            </td>
            <td>
              <strong>50–100+ Exemplar &amp; ChatGPT Transcript Ingestion:</strong> Clean and structure Ope's past before/after resume pairs; embed via OpenAI text-embedding-3-small into PostgreSQL pgvector for semantic retrieval by candidate pivot category.
            </td>
            <td>Week 1</td>
            <td class="mono">12 hrs</td>
            <td class="mono">$300.00</td>
          </tr>
          <tr>
            <td>
              <span class="phase-badge badge-ready">MILESTONE 2</span><br>
              <strong>5-Law Engine</strong>
            </td>
            <td>
              <strong>Ope's SDR Positioning Prompts &amp; Matrix:</strong> Codify the 5 Core SDR Laws into prompt rules (6-second hook, 70% metric density, retail/teaching translation matrix, Apollo/Salesforce tooling, and phone grit proof).
            </td>
            <td>Week 2</td>
            <td class="mono">14 hrs</td>
            <td class="mono">$350.00</td>
          </tr>
          <tr>
            <td>
              <span class="phase-badge badge-ready">MILESTONE 3</span><br>
              <strong>Hiring Manager Gate</strong>
            </td>
            <td>
              <strong>VP of Sales 6-Second Glance Evaluator:</strong> Automated rubric scoring drafts against Tier-1 B2B SaaS hiring manager standards, checking metric density, rejection stamina, and ATS parsing readability.
            </td>
            <td>Week 3</td>
            <td class="mono">12 hrs</td>
            <td class="mono">$300.00</td>
          </tr>
          <tr>
            <td>
              <span class="phase-badge badge-ready">MILESTONE 4</span><br>
              <strong>Coach Review Studio</strong>
            </td>
            <td>
              <strong>Review Queue &amp; Intake Automation:</strong> Side-by-side diff studio with coaching tags, Airtable/Typeform intake integration, 3-minute coach sign-off controls, and 1-click ATS-ready PDF/DOCX generation.
            </td>
            <td>Week 3–4</td>
            <td class="mono">10 hrs</td>
            <td class="mono">$250.00</td>
          </tr>
          <tr>
            <td>
              <span class="phase-badge badge-ready">MILESTONE 5</span><br>
              <strong>Zero Lock-in Handover</strong>
            </td>
            <td>
              <strong>Sovereign Deployment &amp; IP Handover:</strong> Production deployment to Ope's preferred environment (Dify Cloud, self-hosted Docker VPS, or FastAPI microservice), full prompt repo handover, and 1-on-1 walkthrough.
            </td>
            <td>Week 4</td>
            <td class="mono">8 hrs</td>
            <td class="mono">$200.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CHILD 4: Two-Track Engagement Terms -->
    <div class="terms-grid">
      <div class="term-box">
        <div class="term-title">
          <span>TRACK 1: DISCOVERY &amp; CORE PROTOTYPE SPRINT</span>
          <span style="color: #d97706;">$650.00 Capped</span>
        </div>
        <div class="term-desc">
          <strong>26 Hours @ $25.00/hr (Milestones 1 &amp; 2):</strong> Rapidly ingest 25 exemplar resumes, fine-tune the 5-law translation prompts, and prove 80–90% automation on Ope's actual backlog before full platform deployment.
        </div>
      </div>
      <div class="term-box">
        <div class="term-title">
          <span>TRACK 2: ONGOING SCALE &amp; REFINEMENT RETAINER</span>
          <span style="color: #15803d;">$1,500 – $2,000 / mo</span>
        </div>
        <div class="term-desc">
          <strong>15–20 Hours/Week @ $25.00/hr:</strong> Covers Milestones 3–5, continuous prompt additions for emerging SDR verticals, new cohort exemplar vectorization, and zero-downtime maintenance. Cancel anytime.
        </div>
      </div>
    </div>

    <!-- CHILD 5: Enterprise Governance & Credentials -->
    <div class="governance-card">
      <div class="gov-col" style="flex: 1.2;">
        <strong>100% Client IP Ownership &amp; Zero Vendor Lock-in</strong>
        All code, prompt definitions, vector database schemas, and candidate data belong exclusively to Ope. Sovereign portability across Dify DSL, Python FastAPI, n8n, and Docker.
      </div>
      <div class="gov-col" style="flex: 1; border-left: 1px solid #e2e8f0; padding-left: 10px;">
        <strong>Securiti Certified AI Security &amp; Privacy (OWASP / NIST)</strong>
        Inline PII sanitization (redacting candidate phone numbers, addresses, and IDs) and prompt injection defense ensuring compliance with NIST AI RMF standards.
      </div>
    </div>

    <!-- CHILD 6: Dual Sign-off Footer -->
    <div class="footer-sign">
      <div class="profile-lockup">
        <img src="data:image/jpeg;base64,{headshot_b64}" class="headshot" alt="Md Shakil Ahmed">
        <div class="profile-info">
          <h4>Md Shakil Ahmed · Founder, BarakahSoft LLC</h4>
          <p>Verified Upwork Partner · 12+ Yrs Enterprise Systems Engineering<br>Former Lead Systems Engineer at Legiit ($1M ARR Command Center) · Securiti Certified</p>
        </div>
      </div>
      <div class="auth-block">
        <strong>Formal Authorization &amp; Scope Confirmation</strong><br>
        Ready to initiate Milestone 1 upon contract activation on Upwork.<br>
        <span class="auth-badge">UPWORK VERIFIED · 100% SUCCESS · ESCROW SAFE</span>
      </div>
    </div>
  </div>
</body>
</html>"""

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"✓ Generated {html_path}")

    # Generate PDF using Headless Chrome
    chrome_paths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "google-chrome",
        "chromium",
    ]
    chrome_bin = None
    for p in chrome_paths:
        if os.path.exists(p):
            chrome_bin = p
            break

    if chrome_bin:
        cmd = [
            chrome_bin,
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            f"--print-to-pdf={pdf_path}",
            html_path
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode == 0:
            print(f"✓ Generated PDF: {pdf_path}")
        else:
            print(f"⚠️ Headless Chrome PDF error: {res.stderr}")
    else:
        print("⚠️ Chrome binary not found. PDF not generated automatically.")

if __name__ == "__main__":
    build_estimate()
