# SECURITY ARCHITECTURE & SYSTEM DESIGN
## Nandini Luxury Co-Living — Defensive Security Platform

> **CLASSIFICATION:** DEFENSIVE SECURITY SPECIFICATION  
> **TARGET ASSET:** Nandini Luxury Co-Living Official Website (`Reddy's Nilaya, Doddakannelli, Bengaluru`)  
> **OPERATIONAL COST:** ₹0 / 100% Free & Open-Source  
> **AUTHORITATIVE DESIGN PRINCIPLE:** Deterministic Rules + Open-Source Scanners + AI Analysis + Human Approval + Audit Logging

---

## 1. Discovered System Architecture

### 1.1 Technology Stack
- **Client Application:** React 19 (`react@^19.0.0`, `react-dom@^19.0.0`) Single Page Application (SPA).
- **Language & Compiler:** TypeScript 5.7 (`strict: true`, `noEmit: true`), bundler resolution.
- **Build Tooling:** Vite 6 (`@vitejs/plugin-react`, `@tailwindcss/vite`).
- **Styling:** Vanilla CSS design tokens (`styles.css`), Tailwind CSS v4 (`index.css`), fluid clamp typography.
- **Animation Physics:** GreenSock Animation Platform (`gsap@^3.15.0`).
- **Local Runtime:** Node.js v24.18.0 / npm v11.16.0; Python 3.11.9.

### 1.2 Application Surface & Communications
- **Static Frontend:** Pure client-side rendering mounted via `index.html` -> `src/main.tsx` -> `src/App.tsx`.
- **Backend Services:** No custom origin backend server in current repo. Zero direct server-side script execution (no PHP, no Python backend, no Node.js Express server running live).
- **Database:** None in repo. No resident credentials, database connection strings, or user tables.
- **Authentication:** None. No resident login portal, password reset tokens, or session cookies in this codebase.
- **Conversion Endpoints:** Direct deep-links to WhatsApp (`https://wa.me/919900922277`) and telephone links (`tel:+919900922277`).
- **External Integrations:**
  - Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`)
  - Google Maps Embed (`www.google.com/maps/embed`)
  - Instagram Profile (`www.instagram.com/nandiniluxurycoliving`)

### 1.3 Deployment & Build Output
- **Production Artifact:** `dist/` containing `index.html`, `demo.html`, `assets/`, `images/`, `favicon.svg`, `robots.txt`, and `sitemap.xml`.
- **Hosting Targets:** Cloudflare Pages, Netlify, Vercel, AWS S3/CloudFront, GitHub Pages, or VPS Nginx/Caddy.
- **CDN / Edge WAF:** Cloudflare Free Tier provides DNSSEC, SSL termination, DDoS protection, Bot Fight Mode, and basic WAF rules.

---

## 2. Threat Modeling & Vulnerability Surface

| Threat Vector | Relevance to Current Architecture | Mitigation Strategy |
|---|---|---|
| **Missing HTTP Security Headers** | **High** (Clickjacking, MIME sniffing, cross-site leaks) | Enforce CSP, HSTS, X-Frame-Options, X-Content-Type-Options via `_headers` & `vercel.json`. |
| **Accidental Secret Exposure** | **High** (Accidental commit of API keys, tokens, or private credentials) | Automated pre-commit/CI deterministic regex + Shannon entropy secret scanner with masking. |
| **Vulnerable Dependencies** | **Medium** (Vulnerabilities in npm packages like Vite, React, GSAP) | Automated scheduled `npm audit` parser with CVE severity classification. |
| **Unauthorized File Tampering** | **Medium** (Malicious modification of production build assets) | Cryptographic File Integrity Monitoring (FIM) with SHA256 baseline hashing. |
| **SSL/TLS Misconfiguration** | **Medium** (Expired certificates, weak cipher suites) | Automated SSL/TLS socket inspector checking expiration days and protocol versions. |
| **Reconnaissance & Path Probing** | **Low-Medium** (Bots scanning for `/.env`, `/.git`, `/wp-login.php`, `/admin`) | Access log monitor & Cloudflare Free firewall rules detecting high-frequency 404 scans. |
| **SQL Injection / RCE** | **Not Applicable** (No dynamic database or server execution) | Verified non-existent in current architecture; documented to prevent false positives. |

---

## 3. Defensive Security Architecture Diagram

```
                    INTERNET TRAFFIC
                           │
                           ▼
                  CLOUDFLARE FREE WAF
              (DDoS, Bot Fight, Edge SSL)
                           │
                           ▼
                  HOSTING PLATFORM
            (Cloudflare Pages / Vercel / Nginx)
          [Headers: CSP, HSTS, X-Frame-Options]
                           │
                           ▼
                 CLIENT WEBSITE ASSETS
                           │
     ┌─────────────────────┴─────────────────────┐
     ▼                                           ▼
WEB SERVER LOGS                           LOCAL CODEBASE & DIST
     │                                           │
     └─────────────────────┬─────────────────────┘
                           ▼
               SECURITY AGENT CORE DAEMON
                     (Python 3.11)
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
  RULE ENGINE        SCANNERS ENGINE    INTEGRITY (FIM)
- Log Monitor      - Secret Scanner   - SHA256 Hashes
- Path Probes      - Header Scanner   - Baseline Diff
- Rate Anomalies   - SSL Checker      - Tamper Alert
- Anomaly Engine   - Dependency Audit
                   - OWASP ZAP Runner
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                 DETERMINISTIC FINDINGS
                           │
                           ▼
                    AI ANALYZER &
                   RISK CORRELATOR
             (Structured JSON Contract)
                           │
                           ▼
                 SQLITE AUDIT DATABASE
               (`security_agent/security.db`)
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
    LOCAL SECURITY DASHBOARD      ALERT MANAGER
    - Threat Level Summary        - Discord Webhook
    - Open Findings               - Telegram Bot
    - Scan History                - SMTP Email
    - Audit Trail
             │
             ▼
    HUMAN APPROVAL ENGINE
    (Safe / Controlled / High-Risk Gates)
             │
             ▼
      SAFE REMEDIATION
```

---

## 4. Free Tooling Ecosystem (₹0 Cost Guarantee)

| Security Capability | Selected Free Tool | Why Selected | License / Cost |
|---|---|---|---|
| **Core Platform** | Python 3 Standard Library | Zero external dependencies required for core ops (`sqlite3`, `hashlib`, `ssl`, `urllib`, `re`) | Open Source / ₹0 |
| **Dependency Auditing** | `npm audit` / `package-lock` parser | Native Node.js tooling, comprehensive CVE database | Built-in / ₹0 |
| **Secret Scanning** | Deterministic Regex + Shannon Entropy Engine | Pattern matching for AWS, GCP, Slack, GitHub, Stripe, Private Keys, JWTs | Custom Open-Source / ₹0 |
| **Header Evaluation** | Custom HTTP/1.1 Socket & Header Analyzer | Accurate compliance check against OWASP Secure Headers Project | Built-in / ₹0 |
| **SSL/TLS Validation** | Python `ssl` & `socket` Library | Checks expiration, SANs, cipher version, chain validity without external APIs | Built-in / ₹0 |
| **Web Vulnerability Scan** | OWASP ZAP (Zed Attack Proxy) | Industry-standard open-source application scanner for passive/active baseline checks | Apache 2.0 / ₹0 |
| **Edge Protection** | Cloudflare Free Tier | Global CDN, unmetered DDoS mitigation, free universal SSL, Bot Fight Mode | Free Tier / ₹0 |
| **Alerting** | Discord / Telegram Webhooks | Instant push notifications to admin channels with zero recurring cost | Free Tier / ₹0 |
| **Local Dashboard** | Lightweight Python HTTP Server + Vanilla HTML/CSS | Zero cloud hosting needed, runs locally on admin request | Built-in / ₹0 |
| **AI Analysis** | Structured Prompt Engine + Free AI API / Local Fallback | Enforces strict JSON contracts with deterministic rule fallback when offline | Free Tier / ₹0 |

---

## 5. Security Module Structure (`security-agent/`)

```
security-agent/
│
├── agent/
│   ├── main.py                  # Core CLI & daemon coordinator
│   ├── config.py                # Environment configuration & target authorization
│   ├── scheduler.py             # Periodic scanner & monitor scheduler
│   └── permissions.py           # Action allowlist & authorization boundary
│
├── monitoring/
│   ├── log_monitor.py           # Web access log parser (Apache/Nginx/Cloudflare/Mock)
│   ├── traffic_monitor.py       # Request rate and anomalous path probe detector
│   ├── anomaly_detector.py      # Statistical deviation detection
│   └── file_integrity.py        # Cryptographic SHA-256 baseline & FIM detector
│
├── detection/
│   ├── rules.py                 # Deterministic security rules & signatures
│   ├── injection_patterns.py   # SQLi, XSS, Path Traversal, Command Injection patterns
│   ├── suspicious_requests.py  # Reconnaissance probe signatures (.env, .git, /admin)
│   └── rate_abuse.py            # Threshold-based volumetric abuse detection
│
├── scanners/
│   ├── dependency_scanner.py    # `npm audit` parser & CVE classification
│   ├── secret_scanner.py        # High-entropy & regex secret detection with masking
│   ├── header_scanner.py        # OWASP recommended security header validator
│   ├── ssl_checker.py           # TLS certificate expiration & cipher suite verifier
│   └── zap_runner.py            # Authorized OWASP ZAP runner & report parser
│
├── ai/
│   ├── analyzer.py              # Structured event analyzer with strict schema validation
│   ├── correlator.py            # Multi-signal risk correlator & deduplicator
│   ├── reporter.py              # Executive and technical security report generator
│   └── prompts.py               # Deterministic, injection-resistant prompt templates
│
├── response/
│   ├── policy_engine.py         # Three-tier action classification (Safe/Controlled/High-Risk)
│   ├── approval.py              # Human approval queue and cryptographic signature
│   └── remediation.py           # Allowlisted, safe remediation recipes
│
├── alerts/
│   ├── alert_manager.py         # Central notification dispatcher
│   ├── webhook.py               # Discord / Telegram / Generic webhook adapters
│   └── email_notifier.py        # SMTP email adapter
│
├── database/
│   ├── db.py                    # SQLite connection & migration manager
│   ├── models.py                # Schema definitions (events, findings, approvals, audit)
│   └── security.db              # Local SQLite database (git-ignored)
│
├── dashboard/
│   ├── server.py                # Standalone zero-dependency Python dashboard server
│   └── index.html               # Clean, responsive security operations dashboard UI
│
├── reports/                     # Output directory for markdown & JSON audit reports
├── tests/                       # Unit tests and negative test cases
├── .env.example                 # Configuration template
├── requirements.txt             # Lightweight optional dependencies
└── README.md                    # Operational manual
```

---

## 6. Action Approval Classification

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ACTION GOVERNANCE MATRIX                        │
├─────────────────────────┬────────────────────────┬─────────────────────┤
│   SAFE AUTOMATIC        │   CONTROLLED           │   HIGH-RISK         │
│   (Auto-Executed)       │   (Configurable Gate)  │   (Human Mandatory) │
├─────────────────────────┼────────────────────────┼─────────────────────┤
│ • Run Dependency Audit  │ • Temporary IP Block   │ • Modify Files      │
│ • Run Secret Scan       │ • Enable Rate Limit    │ • Rotate Keys       │
│ • Run Header Check      │ • Update WAF Rules     │ • Deploy Patches    │
│ • Run SSL Certificate   │ • Invalidate Sessions  │ • Alter DNS / Web   │
│ • Calculate FIM Hashes  │ • Flush CDN Cache      │ • Take Site Offline │
│ • Ingest & Parse Logs   │                        │ • Change Auth Setup │
│ • Generate Reports      │                        │                     │
│ • Dispatch Alert Webhook│                        │                     │
└─────────────────────────┴────────────────────────┴─────────────────────┘
```

---

## 7. Next Step
Proceed to return the formal **PROJECT SECURITY ASSESSMENT** and implementation plan for user review prior to creating the security agent module.
