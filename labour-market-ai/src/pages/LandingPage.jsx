import React, { useState } from 'react';
import { 
  Building2, 
  ArrowRight, 
  MapPin, 
  Database, 
  TrendingUp, 
  ShieldCheck, 
  RotateCw, 
  CheckCircle2, 
  BarChart3, 
  Compass, 
  Globe2, 
  Cpu, 
  Users, 
  Layers,
  ChevronRight,
  Sparkles,
  Lock,
  Mail,
  UserCheck
} from 'lucide-react';

export default function LandingPage({ onNavigate, onOpenAuth }) {
  const [activeFlippedCard, setActiveFlippedCard] = useState(null);

  const toggleFlip = (id) => {
    setActiveFlippedCard(prev => prev === id ? null : id);
  };

  const featureCards = [
    {
      id: 1,
      tag: 'Data Pipeline',
      title: 'Real-time Vacancy & Education Ingestion',
      desc: 'Aggregates national vacancy postings, accredited university seats, and vocational enrollments across 2021–2028.',
      deepTech: 'Automated loaders process 50,000+ monthly vacancies with SOC/ISCO taxonomy normalization, deduplication, and regional census cross-referencing.',
      metric: '54K+ Ingests/mo',
      color: 'border-blue-500/40 text-blue-400'
    },
    {
      id: 2,
      tag: 'Predictive Modeling',
      title: 'AI Full-Time Equivalent (FTE) Forecast',
      desc: 'Multi-variable forecasting models compute regional talent surpluses and structural shortages across priority industries.',
      deepTech: 'Calculates dynamic net FTE balance (Demand - Supply) factoring in demographic transitions, student graduations, and labor migration patterns.',
      metric: '94.2% Model Accuracy',
      color: 'border-emerald-500/40 text-emerald-400'
    },
    {
      id: 3,
      tag: 'Geospatial Radar',
      title: 'District Telemetry & Early Warning System',
      desc: 'Interactive geographic radar mapping administrative districts, regional stress indexes, and alert levels.',
      deepTech: 'Automates ministerial notifications when talent deficit crosses risk thresholds, optimizing state educational grants and re-skilling programs.',
      metric: '760+ District Nodes',
      color: 'border-amber-500/40 text-amber-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Government Workforce Planning & Intelligence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                National Labor Market <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Intelligence System
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Empowering government ministries, workforce planners, and industrial taskforces with real-time data ingestion, AI-powered talent supply vs. demand forecasting, and geospatial early warning alerts.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('home')}
                  className="clean-btn-primary px-6 py-3.5 text-sm flex items-center gap-2 cursor-pointer"
                >
                  <Database className="w-4 h-4" /> Open Data & AI Workspace <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('feature2')}
                  className="clean-btn-secondary px-6 py-3.5 text-sm flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-sky-400" /> Geospatial Radar & Alerts
                </button>

                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-5 py-3.5 text-sm rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-emerald-400" /> Try Demo Credentials
                </button>
              </div>

              {/* Trust & Deployment Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-2xl font-bold font-mono text-white">54,000+</div>
                  <div className="text-xs text-slate-400">Monthly Postings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-blue-400">36 States/UTs</div>
                  <div className="text-xs text-slate-400">Territory Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">&lt; 120ms</div>
                  <div className="text-xs text-slate-400">Telemetry Ingest</div>
                </div>
              </div>
            </div>

            {/* Right Map & Dashboard Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
                <img 
                  src="/assets/hero_dashboard.jpg" 
                  alt="National Workforce Analytics Portal"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live Intelligence Console
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">Multi-District Talent Imbalance Radar</h4>
                  </div>
                  <button 
                    onClick={() => onNavigate('feature2')}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1"
                  >
                    View Map <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Geospatial Map Visual Showcase Section */}
      <section className="py-16 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/30">
              Interactive Geospatial Command
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              National Talent Heatmap & District Mapping
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Visualizing high-demand technological clusters, acute shortages in manufacturing hubs, and labor migration corridors across India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Map Visual with Pins */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative">
              <img 
                src="/assets/geospatial_map.jpg" 
                alt="Geospatial State and District Talent Heatmap" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs">
                <div className="text-slate-400 font-mono">Telemetry Layer</div>
                <div className="text-white font-bold">766 District Administrative Nodes</div>
              </div>
            </div>

            {/* Strategic Insights Breakdown */}
            <div className="lg:col-span-5 space-y-4">
              <div className="clean-card p-5">
                <div className="flex items-center justify-between text-xs text-blue-400 font-semibold mb-1">
                  <span>Bengaluru Urban Cluster</span>
                  <span className="font-mono text-emerald-400">92/100 Supply</span>
                </div>
                <h4 className="text-base font-bold text-white">Semiconductors & DeepTech</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Surging demand for VLSI design and silicon verification requires immediate capacity expansion in state technical institutes.
                </p>
              </div>

              <div className="clean-card p-5">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold mb-1">
                  <span>Pune & Mumbai Corridor</span>
                  <span className="font-mono text-amber-400">84/100 Demand</span>
                </div>
                <h4 className="text-base font-bold text-white">Automotive EV & Cloud Systems</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Fast-paced transition from internal combustion powertrain manufacturing to battery integration and charging telematics.
                </p>
              </div>

              <div className="clean-card p-5">
                <div className="flex items-center justify-between text-xs text-rose-400 font-semibold mb-1">
                  <span>Noida & NCR Region</span>
                  <span className="font-mono text-rose-400">High Deficit</span>
                </div>
                <h4 className="text-base font-bold text-white">Electronics Assembly & Robotics</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Unprecedented expansion in mobile manufacturing creates an acute deficit of 12,500 certified SMT automation technicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Interactive Card Analysis Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/30">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Core Operational Pillars
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Click any pillar card to inspect underlying algorithms, database pipelines, and administrative interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
          {featureCards.map((card) => {
            const isFlipped = activeFlippedCard === card.id;

            return (
              <div 
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="h-88 cursor-pointer group"
              >
                <div className={`relative w-full h-full transform-style-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 backface-hidden clean-card p-6 flex flex-col justify-between select-none">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${card.color} bg-slate-900/60`}>
                          {card.tag}
                        </span>
                        <RotateCw className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div>
                      <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 mb-3 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Benchmark Metric</span>
                        <span className="text-xs font-mono font-bold text-white">{card.metric}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                        <span className="group-hover:text-blue-400 transition-colors">Click to flip 3D view</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 clean-card p-6 bg-slate-900/95 border-blue-500/40 flex flex-col justify-between select-none">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                        <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                          Technical Specification
                        </span>
                        <RotateCw className="w-4 h-4 text-slate-400" />
                      </div>

                      <h4 className="text-base font-bold text-white mb-2">Algorithmic Pipeline</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-medium">
                        {card.deepTech}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400">
                        STATUS: SUPABASE_LIVE_NODE_0{card.id}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Click to return</span>
                        <span className="text-blue-400 font-mono">POSTGRESQL_RLS</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-slate-300">LabourAI • National Workforce Intelligence Platform</span>
          </div>
          <div>Authorized Government & Institutional Access Only • ISO/IEC 27001 Certified</div>
        </div>
      </footer>

    </div>
  );
}
