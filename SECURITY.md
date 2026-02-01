# Security Policy

Thank you for your interest in the security of the C++ School Management System. We take the security of our application seriously and appreciate the efforts of developers and students who help us ensure the integrity of this project.

## 📝 Supported Versions

Since this is an academic/portfolio project, we currently only support the latest version of the code present in the `main` branch.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## 🐞 Reporting a Vulnerability

If you discover a security vulnerability or a logic error (e.g., a way to bypass the login or crash the system via input), please follow these steps:

1.  **Do not open a public issue.** This prevents malicious use of the vulnerability while we fix it.
2.  Email the project maintainer at: **[mr.saadmuath05@gmail.com]**
3.  In the email, please include:
    *   A description of the vulnerability.
    *   Steps to reproduce the issue (e.g., "Login as Admin, enter 'ABC' into the phone field...").
    *   Screenshots if applicable.

We will acknowledge your email within **48 hours** and aim to provide a fix within **7 days**.

## 🛡️ Security Features Implemented

This project follows specific C++ procedural programming security practices:

*   **Input Validation:** Strict validation ensures that usernames cannot contain special characters and phone numbers must adhere to specific Yemeni prefixes (71, 73, 77, 78).
*   **Fail-Safe Input Handling:** The system utilizes `cin.clear()` and `cin.ignore()` to prevent infinite loops and crash states caused by invalid data types (e.g., entering text into an integer field).
*   **Role-Based Access Control (RBAC):** Distinct menus and permissions for **Admins** and **Employees**. Admins cannot be created by unauthorized users.
*   **Data Integrity:** File handling logic checks for file existence and open states (`is_open()`) before attempting read/write operations to prevent data corruption.

## ⚠️ Known Limitations

As this is an educational project designed to demonstrate C++ logic without external libraries:

*   **Data Storage:** User credentials and student records are stored in `.txt` files. In a real-world production environment, these would be encrypted or hashed.
*   **Local Access:** The security model assumes the user has execution rights but does not manually modify the text files outside the application.

## 🚫 Out of Scope

The following are considered out of scope for security reports:
*   Physical access to the machine hosting the `.txt` files.
*   Modification of the source code by the user.
