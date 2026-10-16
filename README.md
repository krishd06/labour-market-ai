# AI-Powered Labour Market Intelligence System — Setup Guide

## Quick Database Setup

Supabase utilizes PostgreSQL with Row-Level Security (RLS). When accessing Supabase via an anonymous (`anon`) public API key, administrative DDL operations (`CREATE TABLE`) are restricted to the **Supabase Dashboard SQL Editor** to protect database integrity.

### 1. Execute SQL in Supabase
1. Open your Supabase Dashboard: [https://supabase.com/dashboard/project/ngrtphcwpcpzkpxhuxkg/sql](https://supabase.com/dashboard/project/ngrtphcwpcpzkpxhuxkg/sql)
2. Copy and paste the contents of [`schema.sql`](file:///c:/Users/Krish/Desktop/New%20folder%20(2)/schema.sql) into the SQL Editor.
3. Click **Run**.

### 2. Seed Data
Run the setup script in terminal:
```bash
node setup-db.js
```

This will automatically populate all 10 realistic government labour market intelligence records mapping States, Districts, Job Sectors, FTE supply/demand, deficits, and automation metrics.
