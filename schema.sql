-- Migration SQL for Supabase SQL Editor
-- Feature 1: Data Ingestion & AI Skill Gap Forecasting
-- Feature 2: Geospatial Dashboard & Early Warning Alerts

CREATE TABLE IF NOT EXISTS workforce_metrics (
  id BIGSERIAL PRIMARY KEY,
  state VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  sector VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  job_vacancies INT NOT NULL DEFAULT 0,
  fte_supply NUMERIC(12, 2) NOT NULL DEFAULT 0,
  fte_demand NUMERIC(12, 2) NOT NULL DEFAULT 0,
  deficit_metric NUMERIC(12, 2) GENERATED ALWAYS AS (fte_demand - fte_supply) STORED,
  automation_risk_score NUMERIC(5, 2) DEFAULT 0.00,
  augmentation_potential NUMERIC(5, 2) DEFAULT 0.00,
  early_warning_status VARCHAR(50) DEFAULT 'Normal',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS skill_supply_demand (
  id BIGSERIAL PRIMARY KEY,
  state VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  skill_cluster VARCHAR(100) NOT NULL,
  target_role VARCHAR(150) NOT NULL,
  year INT NOT NULL,
  training_seats_capacity INT NOT NULL DEFAULT 0,
  certified_graduates INT NOT NULL DEFAULT 0,
  industry_openings INT NOT NULL DEFAULT 0,
  gap_ratio NUMERIC(6, 2) DEFAULT 1.00,
  urgency_level VARCHAR(50) DEFAULT 'Medium',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS district_stats (
  id BIGSERIAL PRIMARY KEY,
  state VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  latitude NUMERIC(9, 6),
  longitude NUMERIC(9, 6),
  total_workforce INT NOT NULL DEFAULT 0,
  net_deficit_fte NUMERIC(12, 2) NOT NULL DEFAULT 0,
  top_critical_sector VARCHAR(100),
  stress_index NUMERIC(5, 2) DEFAULT 0.00,
  alert_level VARCHAR(50) DEFAULT 'Green',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and grant read/write access for public/anon
ALTER TABLE workforce_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_supply_demand ENABLE ROW LEVEL SECURITY;
ALTER TABLE district_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon all on workforce_metrics" ON workforce_metrics FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on skill_supply_demand" ON skill_supply_demand FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "Allow anon all on district_stats" ON district_stats FOR ALL TO anon USING (true) WITH CHECK (true);
