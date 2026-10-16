import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import FeatureTwo from './pages/FeatureTwo';
import { Sparkles, Database, Compass, Home, LogIn, UserCheck } from 'lucide-react';

export default function App() {
  // Navigation / View Switch state: 'landing', 'home', 'feature2'
  const [currentView, setCurrentView] = useState('landing');
  
  // Authentication state simulation
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeUserRole, setActiveUserRole] = useState('Government Planner (Admin)');

  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-zinc-900 selection:bg-amber-400 selection:text-zinc-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b-2 border-zinc-900 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <div 
            onClick={() => setCurrentView('landing')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-violet-600 border-2 border-zinc-900 shadow-[3px_3px_0px_#18181b] flex items-center justify-center font-black text-white text-base group-hover:bg-violet-700 transition-colors">
              LM
            </div>
            <div>
              <span className="font-black tracking-tight text-lg text-zinc-950 uppercase block leading-none">
                Labour<span className="text-violet-600">AI</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block">
                Intelligence System
              </span>
            </div>
          </div>

          {/* View Switcher Tabs */}
          <nav className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setCurrentView('landing')}
              className={`neo-btn px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer ${
                currentView === 'landing' 
                  ? 'bg-amber-400 text-zinc-950' 
                  : 'bg-[#FAF8F5] text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <Home className="w-3.5 h-3.5" /> 3D Landing
            </button>

            <button
              onClick={() => setCurrentView('home')}
              className={`neo-btn px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer ${
                currentView === 'home' 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-[#FAF8F5] text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <Database className="w-3.5 h-3.5" /> Data & AI (Person 1)
            </button>

            <button
              onClick={() => setCurrentView('feature2')}
              className={`neo-btn px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer ${
                currentView === 'feature2' 
                  ? 'bg-rose-500 text-white' 
                  : 'bg-[#FAF8F5] text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> Geospatial & Alerts (Person 2)
            </button>
          </nav>

          {/* User Auth Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAuth}
              className={`neo-btn px-3 py-1.5 text-xs flex items-center gap-1.5 cursor-pointer ${
                isAuthenticated ? 'bg-emerald-200 text-emerald-950' : 'bg-zinc-200 text-zinc-700'
              }`}
            >
              {isAuthenticated ? (
                <>
                  <UserCheck className="w-3.5 h-3.5 text-emerald-800" />
                  <span className="hidden md:inline font-mono font-bold text-[11px]">{activeUserRole}</span>
                </>
              ) : (
                <>
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex sm:hidden items-center justify-around gap-1 pt-2 mt-2 border-t border-zinc-300">
          <button
            onClick={() => setCurrentView('landing')}
            className={`text-[11px] font-black uppercase px-2 py-1 ${
              currentView === 'landing' ? 'bg-amber-400 border border-zinc-900' : 'text-zinc-600'
            }`}
          >
            Landing
          </button>
          <button
            onClick={() => setCurrentView('home')}
            className={`text-[11px] font-black uppercase px-2 py-1 ${
              currentView === 'home' ? 'bg-violet-600 text-white border border-zinc-900' : 'text-zinc-600'
            }`}
          >
            Data & AI
          </button>
          <button
            onClick={() => setCurrentView('feature2')}
            className={`text-[11px] font-black uppercase px-2 py-1 ${
              currentView === 'feature2' ? 'bg-rose-500 text-white border border-zinc-900' : 'text-zinc-600'
            }`}
          >
            Geospatial
          </button>
        </div>
      </header>

      {/* View Switch Content Container */}
      <main>
        {currentView === 'landing' && <LandingPage onNavigate={(view) => setCurrentView(view)} />}
        {currentView === 'home' && <HomePage />}
        {currentView === 'feature2' && <FeatureTwo />}
      </main>
    </div>
  );
}
