"use client";

import React, { useState } from "react";
import {
  Brain,
  MoreVertical,
  MessageSquare,
  Video,
  Cpu,
  FlaskConical,
  Paperclip,
  Send,
  Image as ImageIcon,
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-5 py-4 border-b border-slate-800/60 bg-[#0a0d14]/80 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
            <Brain className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wide text-white flex items-center gap-1.5">
              Synthetic Intelligence <span className="text-cyan-400 text-xs px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-800">SI</span>
            </h1>
          </div>
        </div>

        {/* 3-Dot Menu Button */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all"
          >
            <MoreVertical className="w-6 h-6" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#0f1420] border border-slate-800 rounded-2xl shadow-2xl py-2 z-50 backdrop-blur-xl">
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Previous Chats</span>
              </button>
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Live Video Class</span>
              </button>
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Live Simulation</span>
              </button>
              <button className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                <FlaskConical className="w-4 h-4 text-cyan-400" />
                <span>Virtual Lab</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Center Area (Cyberpunk Podium Portal) */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        <div className="relative flex items-center justify-center">
          {/* Glowing Rings */}
          <div className="w-64 h-64 rounded-full border border-cyan-500/20 animate-spin [animation-duration:12s] absolute" />
          <div className="w-48 h-48 rounded-full border border-dashed border-cyan-400/40 animate-spin [animation-duration:8s] absolute" />
          <div className="w-32 h-32 rounded-full bg-cyan-500/10 border border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex items-center justify-center backdrop-blur-sm">
            <Brain className="w-14 h-14 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <p className="mt-8 text-slate-400 text-sm tracking-widest uppercase">
          Synthetic Intelligence Active
        </p>
      </main>

      {/* Bottom Input Area */}
      <footer className="relative z-20 p-4 max-w-3xl w-full mx-auto">
        <div className="relative flex items-center bg-[#0d121d]/90 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md focus-within:border-cyan-500/50 transition-all">
          <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <ImageIcon className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 px-3 text-sm"
          />
          <button className="p-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
