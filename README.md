# 🏥 Patient Registration App – Medblocks Task

This is a frontend-only patient registration application built using **React + TypeScript** and **PGlite** for local SQL-based data storage.  
It allows registering patients, executing custom SQL queries, and supports persistent storage and multi-tab synchronization.

---

## 🔧 Features

- ✅ **Register new patients** with full personal, contact, and emergency details
- ✅ **Run custom SQL queries** to filter, view, or modify patient data
- ✅ **Live data updates across multiple tabs** using PGlite’s live query subscriptions
- ✅ **Persistent data** even after page refresh
- ✅ **Validation and error alerts** for empty queries or malformed SQL
- ✅ **Clear commit history** documenting each major feature

---

## 📦 Tech Stack

- **React + TypeScript**
- **PGlite** (SQLite-based, client-side DB)
- **Tailwind CSS** for styling
- **ShadCN UI** components

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
git clone https://github.com/jashwant-jaladi/patient-registration-application.git
cd patient-registration-application
npm install
npm run dev
```
---

### Usage Instructions

1. Fill out th patient registration form and click "Submit" to save the patient to local pglite database, you'll be able to see the registered patient if form is submitted successfully in the table below the form.
2. Use the query input section to run SQL commands (e.g., SELECT * FROM patients WHERE height > 5). Click "Submit" to execute the query and view results in the table below.
3. Open the app in multiple tabs. Any changes made (like registering a patient or deleting records) will automatically reflect across all open tabs in real time. But filtering the data is only restricted to the tab the query is executed.
4. Refresh the page or close and reopen the browser — all registered patient data will remain intact.

---
## ⚠️ Challenges Faced

Ensuring data updates reflected across tabs was tricky. db.live.query() with proper unsubscribe handling resolved this. Apart from that there weren't any major challenges faced during the development of the application.

---
📎 Submission
GitHub Repository: [https://github.com/jashwant-jaladi/patient-registration-application]

---
👤 Author
Jashwant
