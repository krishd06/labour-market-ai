import React from 'react';
import { 
  Compass, 
  MapPin, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  TrendingDown, 
  Activity, 
  Radio
} from 'lucide-react';

export default function FeatureTwo() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 p-4 sm:p-6 lg:p-8">
      {/* Workspace Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between pb-6 border-b-2 border-zinc-900 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-rose-500 text-white font-mono text-xs font-bold border border-zinc-900 uppercase tracking-wider mb-2">
            Person 2 Workspace: Geospatial & Early Warning Alerts
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950">
            Geospatial Dashboard & Deficit Radar
          </h1>
          <p className="text-sm font-semibold text-zinc-600 mt-1">
            District-level talent cluster filtering, automation impact, and early warning stress indicators
          </p>
        </div>

        {/* Live Radar Beacon Indicator */}
        <div className="neo-box px-3.5 py-2 bg-amber-400 flex items-center gap-2 text-xs font-black uppercase tracking-wider">
          <Radio className="w-4 h-4 text-zinc-950 animate-pulse" />
          <span>Active Radar: All States Monitored</span>
        </div>
      </div>

      {/* Surplus/Deficit Bento Grid Placeholder Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* District Filter & Stress Card */}
        <div className="neo-box p-6 bg-[#FAF8F5] md:col-span-1">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-zinc-900">
            <MapPin className="w-5 h-5 text-rose-500" />
            <h3 className="font-black text-lg uppercase tracking-tight">Geospatial Filters</h3>
          </div>
          <p className="text-xs font-medium text-zinc-700 leading-relaxed mb-6">
            [Placeholder: State & District multi-select filters, coordinate radius selector, and regional census cross-referencing.]
          </p>
          <div className="p-4 bg-zinc-100 border-2 border-zinc-900 border-dashed text-xs font-mono text-zinc-500 text-center">
            GIS_MAPPING_CONTAINER_PLACEHOLDER
          </div>
        </div>

        {/* Bento Grid High-Impact Metrics */}
        <div className="neo-box p-6 bg-[#FAF8F5] md:col-span-2">
          <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-zinc-900">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-violet-600" />
              <h3 className="font-black text-lg uppercase tracking-tight">Surplus / Deficit Bento Grid</h3>
            </div>
            <span className="text-xs font-black bg-rose-500 text-white px-2 py-0.5 border border-zinc-900">
              Early Warning Active
            </span>
          </div>
          <p className="text-xs font-medium text-zinc-700 leading-relaxed mb-6">
            [Placeholder: Bento grid visualization for FTE deficit calculations, automation replacement index, and augmentation ratios across high-priority districts.]
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 border-2 border-zinc-900">
              <span className="text-xs font-black uppercase text-amber-800">Alert Priority Level 1</span>
              <h4 className="text-sm font-black text-zinc-950 mt-1">Noida Electronics Cluster</h4>
              <p className="text-xs text-zinc-600 mt-1">Demand surge: +12,500 FTE deficit detected.</p>
            </div>

            <div className="p-4 bg-rose-50 border-2 border-zinc-900">
              <span className="text-xs font-black uppercase text-rose-800">Alert Priority Level 2</span>
              <h4 className="text-sm font-black text-zinc-950 mt-1">Bengaluru Urban DeepTech</h4>
              <p className="text-xs text-zinc-600 mt-1">Critical shortage in VLSI and Semiconductor talent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Early Warning Alerts Section Placeholder */}
      <div className="max-w-7xl mx-auto mt-8 p-6 neo-box bg-[#FAF8F5]">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-zinc-900">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="font-black text-lg uppercase tracking-tight">Early Warning Incident Console</h3>
        </div>
        <p className="text-xs font-medium text-zinc-700 leading-relaxed">
          [Placeholder: Dynamic dispatch alerts, ministerial briefing downloaders, and targeted regional retraining budget recommendations. Ensure zero errors.]
        </p>
      </div>
    </div>
  );
}
