# SECURITY BASELINE DOCUMENTATION
## Nandini Luxury Co-Living Official Website

> **VERSION:** 1.0.0  
> **DATE:** 2026-09-17  
> **TARGET ASSET:** Nandini Luxury Co-Living (`Reddy's Nilaya, Doddakannelli, Bengaluru`)  
> **CLASSIFICATION:** Authoritative Security Baseline  

---

## 1. System Inventory & Architecture Reality

| Dimension | Discovered Reality |
|---|---|
| **Website / Brand** | Nandini Luxury Co-Living (`Reddy's Nilaya`) |
| **Domain** | `nandiniluxurycoliving.com` (Target Domain Configuration) |
| **Physical Address** | 19, 1st Cross St, Janatha Colony, Doddakannelli, Bengaluru 560035 |
| **Hosting Architecture** | Static Web Application (Compiled HTML5/CSS3/JavaScript SPA) |
| **Frontend Framework** | React 19 (`react@^19.0.0`, `react-dom@^19.0.0`) |
| **Build Engine** | Vite 6 (`@vitejs/plugin-react`, `@tailwindcss/vite`) |
| **Language** | TypeScript 5.7 (`strict: true`, no implicit any) |
| **Styling** | Vanilla CSS custom properties (`styles.css`), Tailwind CSS v4 |
| **Animation Physics** | GSAP 3.15 (`gsap@^3.15.0`) |
| **Backend Framework** | **None** in repository (No Node/Express, Python/Django, PHP, or Ruby) |
| **Database** | **None** in repository (No SQL, NoSQL, ORMs, or connection strings) |
| **Authentication** | **None** in repository (No login forms, session cookies, or JWTs) |
| **External Services** | Google Fonts, Google Maps iframe embed, WhatsApp Web, Instagram |
| **Dependencies** | 7 runtime dependencies, 9 dev dependencies (`npm audit`: 0 vulnerabilities) |
| **Public Endpoints** | Static routes (`/`, `/demo.html`, `/robots.txt`, `/sitemap.xml`, `/favicon.svg`) |
| **Local Runtime** | Node.js v24.18.0 / npm v11.16.0; Python 3.11.9 |

---

## 2. Baseline Vulnerability Surface

### 2.1 Non-Applicable Attack Surfaces
Because this application is a static client-side SPA without an origin application server or database:
- **SQL Injection (SQLi):** Not applicable (no database engine).
- **Server-Side Request Forgery (SSRF):** Not applicable (no server-side HTTP client).
- **Remote Code Execution (RCE):** Not applicable (no server-side shell or code evaluation).
- **Session Hijacking / Fixation:** Not applicable (no authentication sessions or cookies).
- **Broken Object Level Authorization (BOLA):** Not applicable (no user-specific backend APIs).

### 2.2 Active Threat Vectors & Baseline Posture
1. **Missing HTTP Security Headers:**
   - Baseline status: Prior to agent deployment, static output had no `_headers` or server configuration for CSP, HSTS, X-Content-Type-Options, or Referrer-Policy.
   - Target baseline: Strictly enforce CSP (allowing Google Fonts & Maps), HSTS (1 year), and X-Content-Type-Options nosniff.
2. **Accidental Credential Exposure:**
   - Baseline status: Zero hardcoded secrets currently in repo.
   - Target baseline: Prevent accidental future commits of API keys or private keys via deterministic regex and Shannon entropy scanning.
3. **Third-Party Dependency Supply Chain:**
   - Baseline status: 0 known vulnerabilities across 49 packages.
   - Target baseline: Continuous automated checks via `npm audit` and lockfile analysis.
4. **File Tampering / Integrity Drift:**
   - Baseline status: No cryptographic baseline previously existed.
   - Target baseline: Cryptographic SHA-256 hash manifest across critical static and configuration files.
5. **Reconnaissance Probing:**
   - Baseline status: No log inspection for automated path scanners probing `/.env`, `/.git`, `/wp-admin`.
   - Target baseline: Access log monitoring and probe detection engine.

---

## 3. Authorized Targets Specification

The security agent is strictly constrained to authorized targets configured by the administrator:
```env
AUTHORIZED_TARGET=http://localhost:5173
AUTHORIZED_DOMAINS=localhost,127.0.0.1,nandiniluxurycoliving.com
TARGET_CONFIRMATION_REQUIRED=true
ACTIVE_SCAN_ENABLED=false
```
Scans targeting any non-authorized IP, URL, or domain will be immediately aborted.
