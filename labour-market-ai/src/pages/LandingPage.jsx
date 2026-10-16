import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  MapPin, 
  TrendingUp, 
  ShieldAlert, 
  ArrowRight, 
  RotateCw, 
  BarChart3,
  Database,
  Compass
} from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  const [activeFlippedCard, setActiveFlippedCard] = useState(null);

  const toggleFlip = (id) => {
    setActiveFlippedCard(prev => prev === id ? null : id);
  };

  const roadmaps = [
    {
      id: 1,
      tag: 'Phase 1: Ingestion & Aggregation',
      title: 'Real-time Vacancy & Seat Pipeline',
      rotate: '-rotate-6',
      accent: 'bg-violet-600 text-white',
      accentBorder: 'border-violet-600',
      frontDescription: 'Aggregates job vacancies, public university seats, and private training certifications across 2021–2028.',
      backDetails: 'Automated data loaders process over 50,000 monthly job posts, normalizing taxonomies and generating historical baseline supply models.'
    },
    {
      id: 2,
      tag: 'Phase 2: Predictive Engine',
      title: 'AI Full-Time Equivalent (FTE) Gap Forecast',
      rotate: 'rotate-0',
      accent: 'bg-rose-500 text-white',
      accentBorder: 'border-rose-500',
      frontDescription: 'Multi-variable regression models calculate dynamic talent surpluses and structural deficits across key industrial sectors.',
      backDetails: 'Simulates net FTE deficits by contrasting emerging generative AI demand with regional academic qualification pipelines.'
    },
    {
      id: 3,
      tag: 'Phase 3: Geospatial Command',
      title: 'Geospatial Radar & Early Warnings',
      rotate: 'rotate-6',
      accent: 'bg-amber-400 text-zinc-900',
      accentBorder: 'border-amber-400',
      frontDescription: 'District-level heatmaps, stress indexes, and alert levels empower ministers and policymakers to act swiftly.',
      backDetails: 'Pinpoints geographic clusters vulnerable to automation risks, orchestrating re-skilling grants and resource subsidies.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 px-4 sm:px-6 lg:px-8 py-12 selection:bg-amber-400 selection:text-zinc-900">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center pt-8 pb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-zinc-900 bg-amber-400 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#18181b] mb-6">
          <Sparkles className="w-4 h-4 animate-spin" /> Government Workforce Planning Platform
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none text-zinc-950 mb-6">
          Labour Market <span className="bg-violet-600 text-white px-3 py-1 border-2 border-zinc-900 shadow-[4px_4px_0px_#18181b]">Intelligence</span> System
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl font-medium text-zinc-700 leading-relaxed mb-10">
          Bridging the chasm between talent supply and industry demand through AI-guided forecasting, automated FTE analysis, and geospatial alerts.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => onNavigate('home')} 
            className="neo-btn bg-violet-600 hover:bg-violet-700 text-white text-base px-6 py-3.5 rounded-none flex items-center gap-2 cursor-pointer"
          >
            <Database className="w-5 h-5" /> Launch Data & AI Workspace <ArrowRight className="w-4 h-4" />
          </button>
          
          <button 
            onClick={() => onNavigate('feature2')} 
            className="neo-btn bg-rose-500 hover:bg-rose-600 text-white text-base px-6 py-3.5 rounded-none flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-5 h-5" /> Geospatial & Alerts Grid <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Glowing Progress Indicator */}
      <div className="max-w-4xl mx-auto my-6 p-4 neo-box bg-[#FAF8F5]">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider mb-2">
          <span>2021-2028 National Intelligence Pipeline</span>
          <span className="text-violet-600 font-extrabold">Live Calibration 88.4%</span>
        </div>
        <div className="w-full h-3 bg-zinc-200 border-2 border-zinc-900 overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-violet-600 via-rose-500 to-amber-400 glow-bar w-[88%]"></div>
        </div>
      </div>

      {/* 3D Fanning Flashcard Interactive Roadmap */}
      <div className="max-w-5xl mx-auto mt-16 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            System Architecture Roadmap
          </h2>
          <p className="text-sm font-semibold text-zinc-600 mt-1">
            Click any card to flip in 3D and reveal internal technical mechanics
          </p>
        </div>

        {/* 3D Fanned Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 perspective-1000 pt-4">
          {roadmaps.map((card) => {
            const isFlipped = activeFlippedCard === card.id;

            return (
              <div 
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className={`cursor-pointer transition-transform duration-500 ${card.rotate} hover:rotate-0 hover:scale-105`}
              >
                <div 
                  className={`relative w-full h-84 transform-style-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 backface-hidden neo-box p-6 flex flex-col justify-between bg-[#FAF8F5]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-1 border border-zinc-900 ${card.accent}`}>
                          {card.tag}
                        </span>
                        <RotateCw className="w-4 h-4 text-zinc-500" />
                      </div>
                      <h3 className="text-xl font-black text-zinc-950 leading-snug mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm font-medium text-zinc-700 leading-relaxed">
                        {card.frontDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t-2 border-zinc-900 flex items-center justify-between text-xs font-bold text-zinc-600">
                      <span>Click to flip card</span>
                      <ArrowRight className="w-4 h-4 text-zinc-900" />
                    </div>
                  </div>

                  {/* BACK FACE (3D ROTATED) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 neo-box p-6 flex flex-col justify-between bg-zinc-900 text-[#FAF8F5]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 bg-amber-400 text-zinc-900 border border-amber-300">
                          Deep Inspection
                        </span>
                        <RotateCw className="w-4 h-4 text-zinc-400" />
                      </div>
                      <h4 className="text-lg font-black text-white mb-2">Technical Specification</h4>
                      <p className="text-sm font-medium text-zinc-300 leading-relaxed">
                        {card.backDetails}
                      </p>
                    </div>

                    <div className="p-3 bg-zinc-800 border border-zinc-700 text-xs text-amber-300 font-mono">
                      Status: ACTIVE_AGENT_NODES
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="max-w-5xl mx-auto border-t-2 border-zinc-900 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 neo-box bg-[#FAF8F5]">
            <Layers className="w-8 h-8 text-violet-600 mb-3" />
            <h4 className="text-lg font-black uppercase mb-1">State & District Ingestion</h4>
            <p className="text-xs font-semibold text-zinc-600 leading-normal">
              High-contrast datasets mapping Pune, Bengaluru, Chennai, Hyderabad, Noida, and emerging industrial hubs.
            </p>
          </div>

          <div className="p-5 neo-box bg-[#FAF8F5]">
            <Cpu className="w-8 h-8 text-rose-500 mb-3" />
            <h4 className="text-lg font-black uppercase mb-1">AI Automation Index</h4>
            <p className="text-xs font-semibold text-zinc-600 leading-normal">
              Calculates task automation risk vs. human augmentation potentials for accurate curriculum re-weighting.
            </p>
          </div>

          <div className="p-5 neo-box bg-[#FAF8F5]">
            <ShieldAlert className="w-8 h-8 text-amber-500 mb-3" />
            <h4 className="text-lg font-black uppercase mb-1">Real-time Warning System</h4>
            <p className="text-xs font-semibold text-zinc-600 leading-normal">
              Instant alerts identifying critical FTE deficits before talent bottlenecks threaten regional economic productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
