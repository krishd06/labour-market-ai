require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.SUPABASE_URL || 'https://ngrtphcwpcpzkpxhuxkg.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncnRwaGN3cGNwemtweGh1eGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNjg2MzUsImV4cCI6MjEwNzc0NDYzNX0.RzDH1IwGNCumm5iLDv8z1aVKTp8wi6qibYeHTnJq9Qc';

const supabase = createClient(supabaseUrl, supabaseKey);

// 10 realistic sample records for labour market intelligence mapping
const sampleWorkforceData = [
  {
    state: 'Maharashtra',
    district: 'Pune',
    sector: 'Information Technology & AI',
    year: 2025,
    job_vacancies: 18450,
    fte_supply: 22000.0,
    fte_demand: 34500.0,
    automation_risk_score: 32.5,
    augmentation_potential: 84.0,
    early_warning_status: 'Deficit Alert'
  },
  {
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    sector: 'Semiconductors & DeepTech',
    year: 2025,
    job_vacancies: 14200,
    fte_supply: 11500.0,
    fte_demand: 24000.0,
    automation_risk_score: 24.0,
    augmentation_potential: 91.5,
    early_warning_status: 'Critical Shortage'
  },
  {
    state: 'Tamil Nadu',
    district: 'Chennai',
    sector: 'Automotive & Electric Mobility',
    year: 2024,
    job_vacancies: 9800,
    fte_supply: 15000.0,
    fte_demand: 21500.0,
    automation_risk_score: 58.2,
    augmentation_potential: 62.0,
    early_warning_status: 'Deficit Alert'
  },
  {
    state: 'Telangana',
    district: 'Hyderabad',
    sector: 'Biopharma & HealthTech',
    year: 2025,
    job_vacancies: 8200,
    fte_supply: 9800.0,
    fte_demand: 16400.0,
    automation_risk_score: 21.0,
    augmentation_potential: 78.4,
    early_warning_status: 'Deficit Alert'
  },
  {
    state: 'Gujarat',
    district: 'Ahmedabad',
    sector: 'Renewable Energy & Solar',
    year: 2026,
    job_vacancies: 7300,
    fte_supply: 8100.0,
    fte_demand: 13200.0,
    automation_risk_score: 18.5,
    augmentation_potential: 72.0,
    early_warning_status: 'Deficit Alert'
  },
  {
    state: 'Haryana',
    district: 'Gurugram',
    sector: 'Fintech & Cloud Architecture',
    year: 2024,
    job_vacancies: 11200,
    fte_supply: 13500.0,
    fte_demand: 19800.0,
    automation_risk_score: 41.0,
    augmentation_potential: 86.0,
    early_warning_status: 'Deficit Alert'
  },
  {
    state: 'Maharashtra',
    district: 'Mumbai Suburban',
    sector: 'Supply Chain & Logistics',
    year: 2025,
    job_vacancies: 12500,
    fte_supply: 19000.0,
    fte_demand: 18200.0,
    automation_risk_score: 65.0,
    augmentation_potential: 45.0,
    early_warning_status: 'Surplus'
  },
  {
    state: 'Odisha',
    district: 'Khordha (Bhubaneswar)',
    sector: 'Green Metallurgy & Manufacturing',
    year: 2026,
    job_vacancies: 4600,
    fte_supply: 5200.0,
    fte_demand: 8700.0,
    automation_risk_score: 51.5,
    augmentation_potential: 54.0,
    early_warning_status: 'Deficit Alert'
  },
  {
    state: 'Rajasthan',
    district: 'Jaipur',
    sector: 'Tourism & Cultural Tech',
    year: 2024,
    job_vacancies: 3800,
    fte_supply: 6800.0,
    fte_demand: 6200.0,
    automation_risk_score: 30.0,
    augmentation_potential: 59.0,
    early_warning_status: 'Balanced'
  },
  {
    state: 'Uttar Pradesh',
    district: 'Gautam Buddha Nagar (Noida)',
    sector: 'Electronics Hardware & Assembly',
    year: 2025,
    job_vacancies: 16500,
    fte_supply: 14000.0,
    fte_demand: 26500.0,
    automation_risk_score: 62.0,
    augmentation_potential: 67.5,
    early_warning_status: 'Critical Shortage'
  }
];

const sampleSkillData = [
  { state: 'Maharashtra', district: 'Pune', skill_cluster: 'LLM & Generative AI Ops', target_role: 'AI System Engineer', year: 2025, training_seats_capacity: 4500, certified_graduates: 3800, industry_openings: 8900, gap_ratio: 2.34, urgency_level: 'High' },
  { state: 'Karnataka', district: 'Bengaluru Urban', skill_cluster: 'VLSI Design & Embedded Systems', target_role: 'Silicon Architect', year: 2025, training_seats_capacity: 2200, certified_graduates: 1850, industry_openings: 6100, gap_ratio: 3.30, urgency_level: 'Critical' },
  { state: 'Tamil Nadu', district: 'Chennai', skill_cluster: 'EV Powertrain & BMS', target_role: 'Battery Integration Engineer', year: 2024, training_seats_capacity: 3500, certified_graduates: 2900, industry_openings: 5400, gap_ratio: 1.86, urgency_level: 'High' },
  { state: 'Telangana', district: 'Hyderabad', skill_cluster: 'Computational Biology & Clinical Analytics', target_role: 'Bioinformatics Scientist', year: 2025, training_seats_capacity: 1800, certified_graduates: 1400, industry_openings: 3900, gap_ratio: 2.78, urgency_level: 'High' },
  { state: 'Gujarat', district: 'Ahmedabad', skill_cluster: 'Grid Storage & Green Hydrogen', target_role: 'Renewables Plant Engineer', year: 2026, training_seats_capacity: 2100, certified_graduates: 1700, industry_openings: 3800, gap_ratio: 2.23, urgency_level: 'High' },
  { state: 'Haryana', district: 'Gurugram', skill_cluster: 'Zero-Trust Cybersecurity', target_role: 'Security Architect', year: 2024, training_seats_capacity: 3000, certified_graduates: 2600, industry_openings: 5700, gap_ratio: 2.19, urgency_level: 'High' },
  { state: 'Maharashtra', district: 'Mumbai Suburban', skill_cluster: 'Automated Logistics & Warehouse Robotics', target_role: 'Operations Tech Specialist', year: 2025, training_seats_capacity: 4200, certified_graduates: 3900, industry_openings: 3200, gap_ratio: 0.82, urgency_level: 'Low' },
  { state: 'Odisha', district: 'Khordha (Bhubaneswar)', skill_cluster: 'Smart Metallurgy & PLC Automation', target_role: 'Process Automation Lead', year: 2026, training_seats_capacity: 1400, certified_graduates: 1100, industry_openings: 2600, gap_ratio: 2.36, urgency_level: 'Medium' },
  { state: 'Rajasthan', district: 'Jaipur', skill_cluster: 'Digital Hospitality & Smart Inventory', target_role: 'Hospitality Tech Manager', year: 2024, training_seats_capacity: 2500, certified_graduates: 2300, industry_openings: 2100, gap_ratio: 0.91, urgency_level: 'Low' },
  { state: 'Uttar Pradesh', district: 'Gautam Buddha Nagar (Noida)', skill_cluster: 'SMT Automation & Quality Robotics', target_role: 'Hardware Manufacturing Lead', year: 2025, training_seats_capacity: 3800, certified_graduates: 3100, industry_openings: 8400, gap_ratio: 2.71, urgency_level: 'Critical' }
];

const sampleDistrictStats = [
  { state: 'Maharashtra', district: 'Pune', latitude: 18.5204, longitude: 73.8567, total_workforce: 950000, net_deficit_fte: 12500.0, top_critical_sector: 'Information Technology & AI', stress_index: 78.4, alert_level: 'Orange' },
  { state: 'Karnataka', district: 'Bengaluru Urban', latitude: 12.9716, longitude: 77.5946, total_workforce: 1850000, net_deficit_fte: 12500.0, top_critical_sector: 'Semiconductors & DeepTech', stress_index: 89.2, alert_level: 'Red' },
  { state: 'Tamil Nadu', district: 'Chennai', latitude: 13.0827, longitude: 80.2707, total_workforce: 1100000, net_deficit_fte: 6500.0, top_critical_sector: 'Automotive & Electric Mobility', stress_index: 64.0, alert_level: 'Orange' },
  { state: 'Telangana', district: 'Hyderabad', latitude: 17.3850, longitude: 78.4867, total_workforce: 1250000, net_deficit_fte: 6600.0, top_critical_sector: 'Biopharma & HealthTech', stress_index: 71.5, alert_level: 'Orange' },
  { state: 'Gujarat', district: 'Ahmedabad', latitude: 23.0225, longitude: 72.5714, total_workforce: 890000, net_deficit_fte: 5100.0, top_critical_sector: 'Renewable Energy & Solar', stress_index: 58.0, alert_level: 'Yellow' },
  { state: 'Haryana', district: 'Gurugram', latitude: 28.4595, longitude: 77.0266, total_workforce: 740000, net_deficit_fte: 6300.0, top_critical_sector: 'Fintech & Cloud Architecture', stress_index: 73.2, alert_level: 'Orange' },
  { state: 'Maharashtra', district: 'Mumbai Suburban', latitude: 19.0760, longitude: 72.8777, total_workforce: 2200000, net_deficit_fte: -800.0, top_critical_sector: 'Supply Chain & Logistics', stress_index: 34.0, alert_level: 'Green' },
  { state: 'Odisha', district: 'Khordha (Bhubaneswar)', latitude: 20.2961, longitude: 85.8245, total_workforce: 420000, net_deficit_fte: 3500.0, top_critical_sector: 'Green Metallurgy & Manufacturing', stress_index: 61.2, alert_level: 'Yellow' },
  { state: 'Rajasthan', district: 'Jaipur', latitude: 26.9124, longitude: 75.7873, total_workforce: 580000, net_deficit_fte: -600.0, top_critical_sector: 'Tourism & Cultural Tech', stress_index: 29.5, alert_level: 'Green' },
  { state: 'Uttar Pradesh', district: 'Gautam Buddha Nagar (Noida)', latitude: 28.5355, longitude: 77.3910, total_workforce: 880000, net_deficit_fte: 12500.0, top_critical_sector: 'Electronics Hardware & Assembly', stress_index: 86.8, alert_level: 'Red' }
];

async function verifyAndSeedTable(tableName, sampleData) {
  console.log(`\n🔍 Verifying access and inserting data into '${tableName}'...`);
  
  // Test reading from the table first
  const { data: testRead, error: readError } = await supabase
    .from(tableName)
    .select('id')
    .limit(1);

  if (readError) {
    console.error(`❌ Table '${tableName}' is not ready yet:`, readError.message);
    return false;
  }

  // Insert sample rows
  const { data: inserted, error: insertError } = await supabase
    .from(tableName)
    .insert(sampleData)
    .select();

  if (insertError) {
    console.error(`❌ Error inserting into '${tableName}':`, insertError.message);
    return false;
  }

  console.log(`✅ Successfully seeded ${inserted ? inserted.length : sampleData.length} records into '${tableName}'!`);
  return true;
}

async function main() {
  console.log('================================================================');
  console.log('🤖 AI Labour Market Intelligence System - Database Setup');
  console.log('Target URL:', supabaseUrl);
  console.log('================================================================');

  const results = {
    workforce_metrics: await verifyAndSeedTable('workforce_metrics', sampleWorkforceData),
    skill_supply_demand: await verifyAndSeedTable('skill_supply_demand', sampleSkillData),
    district_stats: await verifyAndSeedTable('district_stats', sampleDistrictStats)
  };

  const allSuccess = Object.values(results).every(Boolean);

  if (allSuccess) {
    console.log('\n🎉 ALL TABLES VERIFIED AND 10 REALISTIC SAMPLE ROWS INSERTED SUCCESSFULLY!');
  } else {
    console.log('\n⚠️ Some tables could not be written to directly via anon key or do not exist yet in PostgreSQL.');
    console.log('ℹ️ In Supabase, DDL queries (CREATE TABLE) must be executed in the Supabase Dashboard SQL Editor when using anon key.');
    console.log(`📄 The exact SQL schema has been written to: ${path.resolve(__dirname, 'schema.sql')}`);
  }
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
