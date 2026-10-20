'use client';

import React, { useState, FormEvent } from 'react';
import { 
  Cpu, 
  Activity, 
  Terminal, 
  Zap, 
  ShieldAlert, 
  RefreshCw, 
  Database, 
  FlaskConical, 
  Send, 
  Server, 
  Layers 
} from 'lucide-react';

export default function SyntheticIntelligenceApp() {
  // Simulation states (Correctly placed at the top of the component)
  const [quantumFreq, setQuantumFreq] = useState<number>(75);
  const [meshDensity, setMeshDensity] = useState<number>(60);
  const [labStatus, setLabStatus] = useState<string>("Idle");
  const [prompt, setPrompt] = useState<string>("");
  const [logs, setLogs] = useState<string[]>([
    "System initialized successfully.",
    "Quantum core stability at 99.8%.",
    "Awaiting user neural input..."
  ]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLogs(prev => [
      `> User Input: ${prompt}`,
      `> Processing synthetic logic and neural layers...`,
      ...prev
    ]);
    setPrompt("");
  };

  const triggerSimulation = () => {
    setLabStatus("Running Simulation...");
    setTimeout(() => {
      setLabStatus("Completed Successfully");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-cyan-400 p-4 md:p-8 font-mono">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between border-b border-cyan-800/50 pb-6 mb-8 gap-4">
        <div className="flex items-center gap-3">
          <Cpu className="w-10 h-10 text-cyan-400 animate-pulse" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-white">SYNTHETIC INTELLIGENCE</h1>
            <p className="text-xs text-cyan-400/70">Advanced Neural & Quantum Laboratory v1.0</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-slate-900 border border-cyan-800/40 px-4 py-2 rounded-lg">
          <Activity className="w-5 h-5 text-emerald-400 animate-bounce" />
          <span className="text-sm text-slate-300">Status: <strong className="text-emerald-400">ONLINE</strong></span>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Controls & Parameters */}
        <div className="bg-slate-900/80 border border-cyan-900/60 rounded-xl p-6 shadow-lg shadow-cyan-950/50 flex flex-col gap-6">
          <div className="flex items-center gap-2 border-b border-cyan-900/50 pb-3">
            <SlidersIcon className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Neural Parameters</h2>
          </div>

          {/* Quantum Frequency Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Quantum Frequency</span>
              <span className="text-cyan-400 font-bold">{quantumFreq} GHz</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="150" 
              value={quantumFreq} 
              onChange={(e) => setQuantumFreq(Number(e.target.value))}
              className="accent-cyan-500 cursor-pointer"
            />
          </div>

          {/* Mesh Density Slider */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Mesh Density</span>
              <span className="text-cyan-400 font-bold">{meshDensity}%</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              value={meshDensity} 
              onChange={(e) => setMeshDensity(Number(e.target.value))}
              className="accent-cyan-500 cursor-pointer"
            />
          </div>

          {/* Action Button */}
          <button 
            onClick={triggerSimulation}
            className="mt-auto w-full bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
          >
            <Zap className="w-5 h-5" />
            Initialize Core
          </button>
        </div>

        {/* Center & Right Columns: Terminal & Virtual Lab */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Virtual Lab Visualizer */}
          <div className="bg-slate-900/80 border border-cyan-900/60 rounded-xl p-6 shadow-lg shadow-cyan-950/50 flex flex-col items-center justify-center min-h-[220px]">
            <div className="flex items-center justify-center mx-auto text-cyan-400 animate-pulse mb-4">
              <FlaskConical className="w-12 h-12" />
            </div>
            <p className="text-sm text-slate-300 mb-2">Virtual Lab Environment Active</p>
            <span className="px-3 py-1 bg-cyan-950 border border-cyan-700 text-cyan-300 rounded-full text-xs font-semibold">
              {labStatus}
            </span>
          </div>

          {/* Terminal Console */}
          <div className="bg-slate-950 border border-cyan-900/80 rounded-xl p-4 shadow-inner flex flex-col h-[260px]">
            <div className="flex items-center gap-2 border-b border-cyan-900/50 pb-2 mb-3">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-400">System Terminal / Logs</span>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-1 text-xs text-cyan-300/90 font-mono">
              {logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="mt-3 flex gap-2 pt-2 border-t border-cyan-900/40">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter command or query..."
                className="flex-1 bg-slate-900 border border-cyan-800/60 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
              />
              <button 
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 text-slate-950 px-4 py-2 rounded text-xs font-bold flex items-center gap-1 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                Send
              </button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
}

// Simple internal helper component for slider icon
function SlidersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
  );
}
