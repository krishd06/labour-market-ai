import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { 
  Compass, 
  MapPin, 
  AlertTriangle, 
  ShieldAlert, 
  TrendingUp, 
  TrendingDown, 
  RotateCw, 
  Layers, 
  CheckCircle2, 
  Radio, 
  Cpu, 
  Zap, 
  Activity, 
  Filter, 
  RefreshCw, 
  Database, 
  Info,
  Maximize2
} from 'lucide-react';

const FALLBACK_DISTRICTS = [
  { id: 1, state: 'Maharashtra', district: 'Pune', latitude: 18.5204, longitude: 73.8567, total_workforce: 950000, net_deficit_fte: 12500.0, top_critical_sector: 'Information Technology & AI', stress_index: 78.4, alert_level: 'Orange' },
  { id: 2, state: 'Karnataka', district: 'Bengaluru Urban', latitude: 12.9716, longitude: 77.5946, total_workforce: 1850000, net_deficit_fte: 12500.0, top_critical_sector: 'Semiconductors & DeepTech', stress_index: 89.2, alert_level: 'Red' },
  { id: 3, state: 'Tamil Nadu', district: 'Chennai', latitude: 13.0827, longitude: 80.2707, total_workforce: 1100000, net_deficit_fte: 6500.0, top_critical_sector: 'Automotive & Electric Mobility', stress_index: 64.0, alert_level: 'Orange' },
  { id: 4, state: 'Telangana', district: 'Hyderabad', latitude: 17.3850, longitude: 78.4867, total_workforce: 1250000, net_deficit_fte: 6600.0, top_critical_sector: 'Biopharma & HealthTech', stress_index: 71.5, alert_level: 'Orange' },
  { id: 5, state: 'Gujarat', district: 'Ahmedabad', latitude: 23.0225, longitude: 72.5714, total_workforce: 890000, net_deficit_fte: 5100.0, top_critical_sector: 'Renewable Energy & Solar', stress_index: 58.0, alert_level: 'Yellow' },
  { id: 6, state: 'Haryana', district: 'Gurugram', latitude: 28.4595, longitude: 77.0266, total_workforce: 740000, net_deficit_fte: 6300.0, top_critical_sector: 'Fintech & Cloud Architecture', stress_index: 73.2, alert_level: 'Orange' },
  { id: 7, state: 'Maharashtra', district: 'Mumbai Suburban', latitude: 19.0760, longitude: 72.8777, total_workforce: 2200000, net_deficit_fte: -800.0, top_critical_sector: 'Supply Chain & Logistics', stress_index: 34.0, alert_level: 'Green' },
  { id: 8, state: 'Odisha', district: 'Khordha (Bhubaneswar)', latitude: 20.2961, longitude: 85.8245, total_workforce: 420000, net_deficit_fte: 3500.0, top_critical_sector: 'Green Metallurgy & Manufacturing', stress_index: 61.2, alert_level: 'Yellow' },
  { id: 9, state: 'Rajasthan', district: 'Jaipur', latitude: 26.9124, longitude: 75.7873, total_workforce: 580000, net_deficit_fte: -600.0, top_critical_sector: 'Tourism & Cultural Tech', stress_index: 29.5, alert_level: 'Green' },
  { id: 10, state: 'Uttar Pradesh', district: 'Gautam Buddha Nagar (Noida)', latitude: 28.5355, longitude: 77.3910, total_workforce: 880000, net_deficit_fte: 12500.0, top_critical_sector: 'Electronics Hardware & Assembly', stress_index: 86.8, alert_level: 'Red' }
];

const SKILL_CARDS_DATA = [
  {
    id: 'skill-1',
    trade: 'VLSI Silicon & Chip Fabrication',
    district: 'Bengaluru Urban',
    category: 'Semiconductors',
    deficitFte: 12500,
    status: 'severe-shortage',
    openings: 6100,
    annualGraduates: 1850,
    automationRisk: 24,
    augmentation: 91.5,
    action: 'Rapid-track subsidized cleanroom polytechnic quotas.'
  },
  {
    id: 'skill-2',
    trade: 'Autonomous EV Powertrain & BMS',
    district: 'Chennai',
    category: 'Automotive & Clean Energy',
    deficitFte: 6500,
    status: 'severe-shortage',
    openings: 5400,
    annualGraduates: 2900,
    automationRisk: 58.2,
    augmentation: 62.0,
    action: 'Pivot internal combustion engine lines to modular battery labs.'
  },
  {
    id: 'skill-3',
    trade: 'Automated Logistics & Warehousing',
    district: 'Mumbai Suburban',
    category: 'Supply Chain',
    deficitFte: -800,
    status: 'high-surplus',
    openings: 3200,
    annualGraduates: 3900,
    automationRisk: 65.0,
    augmentation: 45.0,
    action: 'High graduate surplus. Transition trainees into robotic fleet control.'
  },
  {
    id: 'skill-4',
    trade: 'GenAI & Large Scale ML Engineering',
    district: 'Pune',
    category: 'IT & Cognitive AI',
    deficitFte: 12500,
    status: 'severe-shortage',
    openings: 8900,
    annualGraduates: 3800,
    automationRisk: 32.5,
    augmentation: 84.0,
    action: 'Inject enterprise tensor frameworks into university curriculums.'
  }
];

const SKILL_TREE_NODES = [
  { id: 'foundation', label: 'Tier 1: Core Foundation', trade: 'STEM & Digital Literacy', xp: 'Level 1', status: 'completed', desc: 'Baseline mathematics, Python automation & circuit fundamentals' },
  { id: 'specialization', label: 'Tier 2: Sector Domain', trade: 'Applied Embedded Robotics', xp: 'Level 2', status: 'completed', desc: 'RTOS, IoT sensor grids & industrial PLC programming' },
  { id: 'advanced', label: 'Tier 3: Advanced Pipeline', trade: 'VLSI & Neural Acceleration', xp: 'Level 3', status: 'active', desc: 'Hardware description languages (VHDL/Verilog) & edge AI inference' },
  { id: 'mastery', label: 'Tier 4: Frontier Mastery', trade: 'Sovereign Fab Operations', xp: 'Level 4', status: 'locked', desc: 'Sub-7nm lithography, automated cleanrooms & quantum packaging' }
];

export default function FeatureTwo() {
  const [districtData, setDistrictData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedMilestone, setSelectedMilestone] = useState(SKILL_TREE_NODES[2]);
  const [activeAlertFilter, setActiveAlertFilter] = useState('all');

  const fetchDistricts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('district_stats')
        .select('*')
        .order('stress_index', { ascending: false });

      if (error || !data || data.length === 0) {
        setDistrictData(FALLBACK_DISTRICTS);
      } else {
        setDistrictData(data);
      }
    } catch {
      setDistrictData(FALLBACK_DISTRICTS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDistricts();
  }, []);

  const states = ['All', ...new Set(districtData.map(d => d.state))];
  const availableDistricts = selectedState === 'All' 
    ? ['All', ...new Set(districtData.map(d => d.district))]
    : ['All', ...new Set(districtData.filter(d => d.state === selectedState).map(d => d.district))];

  const filteredDistricts = districtData.filter(d => {
    const matchState = selectedState === 'All' || d.state === selectedState;
    const matchDist = selectedDistrict === 'All' || d.district === selectedDistrict;
    return matchState && matchDist;
  });

  const activeDistrictRecord = filteredDistricts[0] || districtData[0] || FALLBACK_DISTRICTS[0];

  const activeAlerts = SKILL_CARDS_DATA.filter(skill => {
    if (activeAlertFilter === 'shortage') return skill.status === 'severe-shortage';
    if (activeAlertFilter === 'surplus') return skill.status === 'high-surplus';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 p-4 sm:p-6 lg:p-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" /> Person 2: Geospatial & Early Warning Alerts
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Geospatial Radar & Competency Matrix
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            District-level competency stress mapping, interactive skill pathways, and automated worker imbalance triggers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={fetchDistricts}
            className="clean-btn-secondary px-3.5 py-2 text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh Telemetry
          </button>

          <div className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-mono">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-slate-300">Live Telemetry: {filteredDistricts.length} Nodes</span>
          </div>
        </div>
      </div>

      {/* Geospatial Dropdown Toolbar */}
      <div className="max-w-7xl mx-auto mt-6 p-4 clean-card flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold uppercase text-slate-300">Administrative Filters:</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">State:</label>
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedDistrict('All');
              }}
              className="text-xs bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 text-white outline-none cursor-pointer"
            >
              {states.map(st => (
                <option key={st} value={st}>{st === 'All' ? 'All States (National)' : st}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">District:</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="text-xs bg-slate-900 border border-slate-700 rounded-md px-3 py-1.5 text-white outline-none cursor-pointer"
            >
              {availableDistricts.map(dt => (
                <option key={dt} value={dt}>{dt === 'All' ? 'All Districts' : dt}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
          <span>Active Focal Node:</span>
          <span className="bg-slate-900 text-blue-400 px-2 py-0.5 rounded border border-slate-700">
            {activeDistrictRecord.district}, {activeDistrictRecord.state}
          </span>
        </div>
      </div>

      {/* Early Warning Broadcast Banners */}
      <div className="max-w-7xl mx-auto mt-6 space-y-3">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Live Early Warning Broadcasts ({activeAlerts.length} Triggers)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveAlertFilter('all')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeAlertFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveAlertFilter('shortage')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeAlertFilter === 'shortage' ? 'bg-rose-600 text-white' : 'bg-slate-900 text-slate-400'
              }`}
            >
              Shortages
            </button>
            <button
              onClick={() => setActiveAlertFilter('surplus')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                activeAlertFilter === 'surplus' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400'
              }`}
            >
              Surpluses
            </button>
          </div>
        </div>

        {activeAlerts.map(alert => (
          <div 
            key={alert.id}
            className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-3 ${
              alert.status === 'severe-shortage' 
                ? 'bg-rose-950/20 border-rose-500/30 text-rose-200' 
                : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
            }`}
          >
            <div className="flex items-start md:items-center gap-3">
              <div className={`p-2 rounded-lg shrink-0 ${
                alert.status === 'severe-shortage' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {alert.status === 'severe-shortage' ? <AlertTriangle className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {alert.status === 'severe-shortage' ? 'CRITICAL SHORTAGE DETECTED' : 'STUDENT SURPLUS ALERT'}
                  </span>
                  <span className="text-[10px] font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-slate-300">
                    {alert.district} • {alert.category}
                  </span>
                </div>
                <p className="text-xs mt-1 text-slate-300">
                  <strong className="text-white">{alert.trade}</strong>: {
                    alert.status === 'severe-shortage'
                      ? `Worker deficit of +${alert.deficitFte.toLocaleString()} FTE. Current graduation capacity (${alert.annualGraduates}/yr) fails to meet ${alert.openings} industry vacancies.`
                      : `Graduation capacity exceeds localized industry demand by ${Math.abs(alert.deficitFte).toLocaleString()} FTE.`
                  }
                </p>
              </div>
            </div>

            <div className="shrink-0 text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300">
              Directive: {alert.action}
            </div>
          </div>
        ))}
      </div>

      {/* Bento Grid Layout with Embedded Map */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
        
        {/* Visual Map Overview Card (Col 1-7) */}
        <div className="md:col-span-7 clean-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <h3 className="font-bold text-base text-white">Geospatial Labor Telemetry Map</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                ACTIVE SENSORS
              </span>
            </div>

            {/* Embedded Map Visual */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 mb-4 group">
              <img 
                src="/assets/geospatial_map.jpg" 
                alt="Interactive Map of Indian Districts"
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>Selected: {activeDistrictRecord.district}, {activeDistrictRecord.state}</span>
                <span className="text-blue-400">Stress: {activeDistrictRecord.stress_index}/100</span>
              </div>
            </div>

            {/* Focal District Numbers */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Workforce</span>
                <span className="text-lg font-bold font-mono text-white">
                  {Number(activeDistrictRecord.total_workforce).toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Net Deficit</span>
                <span className={`text-lg font-bold font-mono ${activeDistrictRecord.net_deficit_fte > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {activeDistrictRecord.net_deficit_fte > 0 ? `+${Number(activeDistrictRecord.net_deficit_fte).toLocaleString()}` : Number(activeDistrictRecord.net_deficit_fte).toLocaleString()}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Critical Sector</span>
                <span className="text-xs font-bold text-amber-300 truncate block mt-1">
                  {activeDistrictRecord.top_critical_sector}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Competency Pathway Nodes (Col 8-12) */}
        <div className="md:col-span-5 clean-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <h3 className="font-bold text-base text-white">Competency Milestone Pathway</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">NSQF</span>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Click milestone circles to trace workforce progression from foundation to advanced industrial competencies:
            </p>

            {/* Clickable Milestone Nodes */}
            <div className="space-y-3">
              {SKILL_TREE_NODES.map((node) => {
                const isSelected = selectedMilestone.id === node.id;

                return (
                  <div 
                    key={node.id}
                    onClick={() => setSelectedMilestone(node)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-500/50 shadow-md'
                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        node.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : node.status === 'active'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-slate-800 text-slate-500'
                      }`}>
                        {node.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : node.xp.split(' ')[1]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{node.trade}</div>
                        <div className="text-[10px] text-slate-400">{node.label}</div>
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      node.status === 'completed' ? 'text-emerald-400 bg-emerald-950/40' : node.status === 'active' ? 'text-blue-400 bg-blue-950/40' : 'text-slate-500'
                    }`}>
                      {node.status.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Milestone Detail */}
            <div className="mt-4 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="text-blue-400 font-semibold block mb-0.5">{selectedMilestone.label}: {selectedMilestone.trade}</span>
              {selectedMilestone.desc}
            </div>
          </div>
        </div>

        {/* 3D Flip Cards Grid (Col 1-12) */}
        <div className="md:col-span-12 clean-card p-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-6">
            <div>
              <h3 className="font-bold text-base text-white">Trade Competency Cards (Hover to Flip 180°)</h3>
              <p className="text-xs text-slate-400">Hover over any trade card to inspect automation risk, augmentation, and policy interventions</p>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              4 Critical Sectors
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {SKILL_CARDS_DATA.map((card) => {
              const isShortage = card.status === 'severe-shortage';

              return (
                <div key={card.id} className="h-76 group cursor-pointer">
                  <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 backface-hidden clean-card p-5 flex flex-col justify-between select-none">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            isShortage ? 'bg-rose-950/80 text-rose-300 border border-rose-500/30' : 'bg-amber-950/80 text-amber-300 border border-amber-500/30'
                          }`}>
                            {isShortage ? 'DEFICIT' : 'SURPLUS'}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{card.district}</span>
                        </div>

                        <span className="text-[11px] text-blue-400 font-semibold block">{card.category}</span>
                        <h4 className="text-sm font-bold text-white mt-1 leading-snug">{card.trade}</h4>

                        <div className="mt-3 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">FTE Imbalance</span>
                          <span className={`text-lg font-bold font-mono ${isShortage ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {isShortage ? `+${card.deficitFte.toLocaleString()} FTE` : `${card.deficitFte.toLocaleString()} FTE`}
                          </span>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex items-center justify-between">
                        <span>Openings: {card.openings.toLocaleString()}</span>
                        <span className="text-blue-400">Hover 3D</span>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 clean-card p-5 bg-slate-900/95 border-blue-500/40 flex flex-col justify-between select-none">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                          <span className="text-[10px] font-mono text-blue-400 uppercase">Policy Profile</span>
                          <span className="text-[10px] text-emerald-400">CALIBRATED</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-2">
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                            <span className="block text-[9px] text-slate-400">Automation</span>
                            <span className="text-sm font-bold font-mono text-rose-400">{card.automationRisk}%</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950 border border-slate-800 text-center">
                            <span className="block text-[9px] text-slate-400">Augment</span>
                            <span className="text-sm font-bold font-mono text-emerald-400">{card.augmentation}%</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {card.action}
                        </p>
                      </div>

                      <div className="text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800">
                        NODE: {card.id}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
