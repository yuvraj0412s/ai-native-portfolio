# Security Policy

## Introduction
The security of the **AI-Native Portfolio** is a top priority. We are dedicated to ensuring the application remains secure for everyone and appreciate the vital role the community plays in this effort. This document outlines our security procedures and how you can responsibly report a vulnerability.

---

## Supported Versions
We provide security updates for the latest version of the application. Please make sure you are running the most recent release before reporting an issue.

| Version | Supported          |
| ------- | ------------------ |
| `1.x.x` | ✅                 |
| `< 1.0` | ❌                 |

---

## Reporting a Vulnerability
We take all security reports seriously. If you discover a vulnerability, please report it **privately** so we can address it before it is publicly disclosed.

🚫 **Do not open a public GitHub issue for security vulnerabilities.**

Instead, please contact us at:

📧 **Email:** yuvraj0412s@gmail.com

When reporting, please include:

- **Title:** e.g., `Cross-Site Scripting (XSS) in Chat Component`  
- **Description:** Explain the potential impact of the vulnerability.  
- **Steps to Reproduce:** A clear, step-by-step guide.  
- **Proof of Concept (PoC):** Code snippets, Screenshots, or demo.  
- **Environment Details:** Browser, OS, project version, etc.  

✅ You will receive an acknowledgment within **48 hours**, and we will provide regular updates until the issue is resolved.

---

## Security Best Practices Implemented
This project is designed with **security-first principles**:

### 🔑 API Key and Secret Management
- No hardcoded secrets in the source code.  
- Environment variables via `.env.local` (excluded from version control).  
- Production secrets managed securely using **Vercel environment variables**.  

### 🔒 API Route Security
- All external API calls (OpenAI, Mistral, GitHub, etc.) handled via **Next.js API routes** (server-only).  
- Input validation and sanitization applied to all user data.  

### 📦 Dependency Management
- **Dependabot** enabled for automated vulnerability scanning.  
- Regular `pnpm audit` checks.  
- Vulnerabilities patched quickly after discovery.  

### 🛡️ Code & Repository Security
- **Branch Protection:** `main` requires pull requests + reviews.  
- **Linting & Static Analysis:** ESLint + best practices to prevent bugs/security issues.  
- **Secret Scanning:** GitHub secret scanning enabled.  

### 🧑‍💻 Infrastructure Security
- HTTPS enforced via hosting provider.  
- CORS configured securely.  
- Rate-limiting applied to API endpoints (planned for production).  

---

## Hall of Fame
We value and recognize contributors who help make this project safer.  
If you responsibly disclose a security vulnerability and it is confirmed + fixed, you may be added to our **Hall of Fame** below (with your consent):

| Researcher | Contribution | Date |
|------------|--------------|------|
| _Your Name Here_ | Reported a critical vulnerability | YYYY-MM-DD |

---

## Acknowledgments
We thank the security research community for their dedication to making open-source software safer. 🙏

---
