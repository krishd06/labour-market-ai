import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import FeatureTwo from './pages/FeatureTwo';
import { 
  Building2, 
  Database, 
  Compass, 
  Home, 
  LogIn, 
  UserCheck, 
  UserPlus, 
  X, 
  Key, 
  Mail, 
  Lock, 
  ShieldCheck, 
  Copy, 
  Check 
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [authModal, setAuthModal] = useState(null); // null, 'signin', 'signup'
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeUserRole, setActiveUserRole] = useState('Ministry Planner (Admin)');
  const [copiedDemo, setCopiedDemo] = useState(false);

  // Form input state
  const [authEmail, setAuthEmail] = useState('planner.demo@labourai.gov');
  const [authPassword, setAuthPassword] = useState('GovIntelligence2026!');
  const [authName, setAuthName] = useState('Dr. Krish Doiphode');

  const handleCopyDemo = (email, pass) => {
    setAuthEmail(email);
    setAuthPassword(pass);
    setCopiedDemo(true);
    setTimeout(() => setCopiedDemo(false), 2000);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setAuthModal(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* Modern Executive Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Platform Name */}
          <div 
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-lg text-white">
                  Labour<span className="text-blue-400">AI</span>
                </span>
                <span className="text-[10px] font-mono font-bold uppercase bg-blue-950 text-blue-400 border border-blue-500/30 px-1.5 py-0.2 rounded">
                  GOV.INTEL
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-400 block -mt-0.5">
                National Workforce Planning System
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setCurrentView('landing')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                currentView === 'landing' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" /> Overview
            </button>

            <button
              onClick={() => setCurrentView('home')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                currentView === 'home' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5 text-blue-400" /> Data & AI Forecasting
            </button>

            <button
              onClick={() => setCurrentView('feature2')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                currentView === 'feature2' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" /> Geospatial Radar & Alerts
            </button>
          </nav>

          {/* Authentication & User Session Actions */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-2.5">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs font-bold text-white">{authName}</span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {activeUserRole}
                  </span>
                </div>
                
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAuthModal('signin')}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5" /> Sign In
                </button>

                <button
                  onClick={() => setAuthModal('signup')}
                  className="clean-btn-primary px-3.5 py-1.5 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" /> Sign Up / Demo
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Mobile View Switcher */}
        <div className="flex md:hidden items-center justify-around gap-1 pt-2 mt-2 border-t border-slate-800">
          <button
            onClick={() => setCurrentView('landing')}
            className={`text-xs font-semibold px-3 py-1 rounded ${
              currentView === 'landing' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setCurrentView('home')}
            className={`text-xs font-semibold px-3 py-1 rounded ${
              currentView === 'home' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Data & AI
          </button>
          <button
            onClick={() => setCurrentView('feature2')}
            className={`text-xs font-semibold px-3 py-1 rounded ${
              currentView === 'feature2' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Geospatial
          </button>
        </div>
      </header>

      {/* Main Routed View */}
      <main>
        {currentView === 'landing' && (
          <LandingPage 
            onNavigate={(view) => setCurrentView(view)} 
            onOpenAuth={(type) => setAuthModal(type)}
          />
        )}
        {currentView === 'home' && <HomePage />}
        {currentView === 'feature2' && <FeatureTwo />}
      </main>

      {/* Sign In & Sign Up Modal with Demo Credentials */}
      {authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md clean-card p-6 sm:p-8 bg-slate-900 border border-slate-700 shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setAuthModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {authModal === 'signin' ? 'Sign In to LabourAI' : 'Create Government Account'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Access national labour market datasets, predictive models & geospatial radars
              </p>
            </div>

            {/* Demo Credentials Box */}
            <div className="mb-6 p-3.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs">
              <div className="flex items-center justify-between text-blue-400 font-bold mb-2">
                <span className="flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5" /> Instant Demo Credentials
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyDemo('planner.demo@labourai.gov', 'GovIntelligence2026!')}
                  className="text-[11px] text-sky-300 hover:text-white font-medium flex items-center gap-1 cursor-pointer"
                >
                  {copiedDemo ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedDemo ? 'Filled!' : 'Use Demo Login'}</span>
                </button>
              </div>

              <div className="space-y-1 font-mono text-[11px] text-slate-300">
                <div><span className="text-slate-500">Email:</span> planner.demo@labourai.gov</div>
                <div><span className="text-slate-500">Password:</span> GovIntelligence2026!</div>
                <div><span className="text-slate-500">Role:</span> Senior Workforce Policy Advisor</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {authModal === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <input 
                    type="text"
                    required
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    className="w-full text-xs bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 outline-none focus:border-blue-500"
                    placeholder="e.g. Dr. Rajesh Kumar"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Official Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input 
                    type="email"
                    required
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className="w-full text-xs bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-white placeholder-slate-500 outline-none focus:border-blue-500 font-mono"
                    placeholder="official.name@gov.in"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input 
                    type="password"
                    required
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className="w-full text-xs bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-white placeholder-slate-500 outline-none focus:border-blue-500 font-mono"
                    placeholder="••••••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full clean-btn-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <ShieldCheck className="w-4 h-4" />
                {authModal === 'signin' ? 'Authenticate & Enter' : 'Register & Enter Workspace'}
              </button>
            </form>

            {/* Toggle Switch */}
            <div className="mt-5 pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
              {authModal === 'signin' ? (
                <span>
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setAuthModal('signup')} 
                    className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                  >
                    Sign up with Demo
                  </button>
                </span>
              ) : (
                <span>
                  Already registered?{' '}
                  <button 
                    onClick={() => setAuthModal('signin')} 
                    className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                  >
                    Sign in here
                  </button>
                </span>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
