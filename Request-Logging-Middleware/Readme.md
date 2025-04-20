# Express Logging Middleware using Morgan

## 📝 Assignment Overview

In this assignment, a logging middleware was developed for a Node.js application using Express. Morgan, a popular HTTP request logger, was used to capture and log essential information about incoming requests such as IP address, HTTP method, URL, response status, and response time.

---

## 🎯 Objective

To understand and implement middleware in an Express application that logs request details for monitoring and debugging purposes.

---

## 📁 Project Setup

```bash
npm init -y
npm install express morgan
```

---

### 📌 Explanation:

- Using `'combined'` format in Morgan logs the following:
  - `:remote-addr` – Client IP address
  - `:remote-user` – Authenticated user (if any)
  - `:method` – HTTP method
  - `:url` – Requested URL
  - `:status` – Response status code
  - `:res[content-length]` – Response size
  - `:referrer` – Referrer header
  - `:user-agent` – Client’s user agent string
  - `:response-time` – Time taken to serve the request

---

## ✅ Testing Summary

| Request              | Behavior              | Example Log Output                                |
|---------------------|-----------------------|---------------------------------------------------|
| `GET /`             | Returns Home Page     | `::1 - - [date] "GET / HTTP/1.1" 200 ...`         |
| `GET /contact-us`   | Returns Contact Page  | `::1 - - [date] "GET /contact-us HTTP/1.1" 200 ...` |
| `GET /invalid`      | Returns 404           | `::1 - - [date] "GET /invalid HTTP/1.1" 404 ...`  |

---


## 📘 Learnings

- Middleware functions in Express run before route handlers.
- Morgan’s `'combined'` format gives detailed and production-friendly logs.
- Logs provide visibility into app usage and help with debugging.

