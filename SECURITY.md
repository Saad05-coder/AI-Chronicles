# Security Policy for AI Chronicles

This project is a **front-end educational demonstration** designed to simulate an "AI Access Terminal." It runs entirely in the browser (Client-Side) and relies on HTML, CSS, and JavaScript.

## 📝 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0     | :white_check_mark: |

## 🛡️ Scope & Expected Behavior (Please Read)

Because this is a **UI Simulation**, the following behaviors are **intentional** and are **NOT** considered security vulnerabilities:

1.  **Login Bypass:** The login terminal (`1.html`) is a cosmetic interface. Navigating directly to `2.html` via the URL bar or the "Skip" link is the intended behavior. There is no backend authentication database.
2.  **Client-Side Validation:** The form validation relies on HTML5 and JavaScript. It is designed for User Experience (UX), not data security.
3.  **No Data Storage:** The contact form is a frontend modal (Bootstrap). It does not currently send data to a server or store personal information (PII).

## 🐞 Reporting a Real Vulnerability

If you find a genuine issue, such as:
*   **Cross-Site Scripting (XSS):** If inputting scripts into the simulated terminal causes code execution.
*   **Malicious Dependencies:** If a linked library (like WOWSlider or Bootstrap) has a known vulnerability.

Please report it via email to: **mr.saadmuath05@gmail.com**

## ⚠️ Known Limitations
This site is static. All logic is visible in the source code (`View Source`). Do not use this code as a template for securing sensitive data.
