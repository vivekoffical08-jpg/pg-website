# Nandini Luxury Co-Living — Defensive Security Agent

**Version:** 1.0.0  
**Operating Cost:** ₹0 / Month (Completely Free & Open-Source)  
**Target Architecture:** Static Client-Side Single Page Application (React 19, Vite 6, Tailwind CSS v4, Vercel/Cloudflare)  
**Security Paradigm:** Strict Defensive Isolation, Deterministic Guardrails, Prompt-Injection Hardened AI Context, Three-Tier Human-in-the-Loop Governance.

---

## 1. System Architecture

The security system is located inside `security-agent/` and operates alongside the website without modifying or endangering client website components, routes, styles, or business logic.

```
nandini pg/
├── security-agent/
│   ├── agent/                 # Core configuration, CLI entry, and permissions
│   │   ├── config.py          # Strict target validation & .env parsing
│   │   ├── permissions.py     # Three-tier action allowlist (SAFE, CONTROLLED, HIGH_RISK)
│   │   └── main.py            # Master CLI controller
│   ├── scanners/              # Zero-cost security scanners
│   │   ├── header_scanner.py  # OWASP Security Headers (CSP, HSTS, Framing)
│   │   ├── ssl_checker.py     # TLS/SSL certificate & cipher evaluation
│   │   ├── dependency_scanner.py # npm audit vulnerability catalog parser
│   │   ├── secret_scanner.py  # Regex + Shannon entropy scanner with masking
│   │   └── zap_runner.py      # Passive OWASP ZAP baseline runner
│   ├── monitoring/            # Real-time file & log inspection
│   │   ├── file_integrity.py  # Cryptographic SHA-256 FIM baseline engine
│   │   └── log_monitor.py     # Nginx/Apache Combined Log Format parser
│   ├── detection/             # Deterministic detection rules
│   │   ├── injection_patterns.py # SQLi, XSS, Path Traversal, Command Injection
│   │   ├── suspicious_requests.py # Recon probe paths & scanner user-agents
│   │   ├── rate_abuse.py      # Sliding-window volumetric & 404 scan detector
│   │   └── rules.py           # Unified request evaluation & sanitization
│   ├── ai/                    # Prompt-injection isolated analysis
│   │   ├── prompts.py         # Strict XML delimiters & defensive system prompt
│   │   ├── analyzer.py        # Schema-validated LLM analyzer + deterministic fallback
│   │   ├── correlator.py      # Multi-signal correlation engine
│   │   └── reporter.py        # Markdown, JSON, HTML report generator
│   ├── response/              # Action gating & mitigations
│   │   ├── policy_engine.py   # Policy decision matrix
│   │   ├── approval.py        # Human approval queue & SQLite audit trail
│   │   └── remediation.py     # Safe quarantine & Cloudflare/Nginx rule generator
│   ├── alerts/                # Multi-channel notification engine
│   │   ├── alert_manager.py   # Deduplication, throttling & router
│   │   ├── webhook.py         # Discord & Telegram webhook dispatcher
│   │   └── email_notifier.py  # Standard library SMTP email dispatcher
│   ├── dashboard/             # Local Security Operations Center
│   │   ├── server.py          # Zero-dependency Python HTTP API server
│   │   └── index.html         # Responsive dark-mode SOC console
│   ├── database/              # Local persistence
│   │   ├── models.py          # Typed dataclasses & Enums
│   │   └── db.py              # SQLite storage engine
│   ├── reports/               # Generated security audit documents
│   └── tests/                 # Unit tests (18 tests passing)
```

---

## 2. Core Security Pillars

### 1. Target Authorization Boundary
The agent strictly enforces defensive scoping. Scans and probes are cryptographically and programmatically prohibited from targeting any unauthorized external domain.
- Authorized domains: `localhost`, `127.0.0.1`, `nandiniluxurycoliving.com`.
- Any external target triggers an immediate `SecurityTargetViolationError`.

### 2. Privacy & Secret Hygiene
- High-entropy tokens and API keys detected during scans are masked (`AK************MPLE`).
- Raw secret values are **never** stored in SQLite, log files, or reports.

### 3. Three-Tier Human-in-the-Loop Governance
- **SAFE Tier (Automated):** `generate_report`, `create_alert`, `run_dependency_scan`, `run_security_scan`.
- **CONTROLLED Tier (Human Approval Required):** `request_ip_block`, `request_rate_limit`, `request_file_review`.
- **HIGH_RISK Tier (Strictly Forbidden / Mandatory Manual Review):** `modify_production_file`, `rotate_credentials`, `deploy_patch`.
- **Arbitrary Shell Execution:** Blocked by non-negotiable compile-time allowlist.

### 4. ₹0 Cost Guarantee
- All monitoring, scanning, database storage, and alerting functions operate on the Python standard library.
- No paid SaaS subscriptions (Snyk, Datadog, or external security vendors) are required.
- AI analysis runs via built-in deterministic expert rules by default, or connects optionally to free Google Gemini / local Ollama models.

---

## 3. Quick Start & CLI Usage

### Running a Full Defensive Scan
```powershell
python security-agent/agent/main.py scan --all
```

### Running Specific Scanners
```powershell
# Security Headers
python security-agent/agent/main.py scan --headers

# TLS Certificate
python security-agent/agent/main.py scan --tls

# Hardcoded Secret Check
python security-agent/agent/main.py scan --secrets

# npm Dependency Audit
python security-agent/agent/main.py scan --deps

# File Integrity Check
python security-agent/agent/main.py scan --fim
```

### Updating File Integrity Baseline
After deploying an authorized website release:
```powershell
python security-agent/agent/main.py baseline
```

### Reviewing Approval Requests
```powershell
# List pending requests
python security-agent/agent/main.py approvals list

# Approve or reject an action
python security-agent/agent/main.py approvals approve --id APP-xxxxxxxx
python security-agent/agent/main.py approvals reject --id APP-xxxxxxxx
```

### Launching the Security Dashboard
```powershell
python security-agent/agent/main.py dashboard
```
Open your browser at `http://127.0.0.1:8080` to access the live dark-mode Security Operations Center.

### Running Automated Unit Tests
```powershell
python security-agent/run_tests.py
```
