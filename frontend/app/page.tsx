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
  X,
  Play,
  Activity,
  Sliders,
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setPrompt("");

    setTimeout(() => {
      const aiResponse = { 
        role: "assistant", 
        content: `Synthetic Intelligence (SI) Core: I have processed your input regarding "${userMessage.content}". All systems are fully operational.` 
      };
      setMessages([...updatedMessages, aiResponse]);
    }, 1000);
  };

const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Simulation states
  const [quantumFreq, setQuantumFreq] = useState(75);
  const [meshDensity, setMeshDensity] = useState(60);
  const [labStatus, setLabStatus] = useState("Idle");

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    const newMessages = [...messages, { role: "user", content: prompt }];
    setMessages(newMessages);
    setPrompt("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "si", content: "Synthetic Intelligence core processed your request successfully. All neural modules are active and synced." },
      ]);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between overflow-hidden font-sans">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-5 py-4 border-b border-slate-800/60 bg-[#0a0d14]/80 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
            <Brain className={`w-6 h-6 ${messages.length > 0 ? "animate-spin" : "animate-pulse"}`} />
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
              <button
                onClick={() => { setActiveModal("chats"); setMenuOpen(false); }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Previous Chats</span>
              </button>
              <button
                onClick={() => { setActiveModal("video"); setMenuOpen(false); }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                <Video className="w-4 h-4 text-cyan-400" />
                <span>Live Video Class</span>
              </button>
              <button
                onClick={() => { setActiveModal("simulation"); setMenuOpen(false); }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Live Simulation</span>
              </button>
              <button
                onClick={() => { setActiveModal("lab"); setMenuOpen(false); }}
                className="w-full px-4 py-2.5 flex items-center gap-3 text-sm text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                <FlaskConical className="w-4 h-4 text-cyan-400" />
                <span>Virtual Lab</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Center Area / Chat Flow */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-cyan-500/20 animate-spin [animation-duration:12s] absolute" />
              <div className="w-48 h-48 rounded-full border border-dashed border-cyan-400/40 animate-spin [animation-duration:8s] absolute" />
              <div className="w-32 h-32 rounded-full bg-cyan-500/10 border border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.3)] flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-14 h-14 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <p className="mt-8 text-slate-400 text-sm tracking-widest uppercase">
              Synthetic Intelligence Active
            </p>
          </div>
        ) : (
          <div className="w-full max-w-2xl space-y-4 my-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl text-sm backdrop-blur-md border ${
                  msg.role === "user"
                    ? "bg-cyan-950/30 border-cyan-500/30 ml-auto max-w-[80%]"
                    : "bg-[#0f1420]/80 border-slate-800 mr-auto max-w-[80%]"
                }`}
              >
                <p className="font-semibold text-xs text-cyan-400 mb-1">
                  {msg.role === "user" ? "You" : "Synthetic Intelligence"}
                </p>
                <p className="text-slate-200">{msg.content}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Input Area */}
      <footer className="relative z-20 p-4 max-w-3xl w-full mx-auto">
        <form onSubmit={handleSend} className="relative flex items-center bg-[#0d121d]/90 border border-slate-800 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-md focus-within:border-cyan-500/50 transition-all">
          <button type="button" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <button type="button" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
            <ImageIcon className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-500 px-3 text-sm"
          />
          <button type="submit" className="p-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </footer>

      {/* Modals for Menu Features */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#0f1420] border border-slate-800 w-full max-w-lg rounded-3xl p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Chats Modal */}
            {activeModal === "chats" && (
              <div>
                <h2 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Previous Chats
                </h2>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-sm text-slate-300 hover:border-cyan-500/40 cursor-pointer">
                    DeepTech Architecture Discussion — Oct 2026
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-sm text-slate-300 hover:border-cyan-500/40 cursor-pointer">
                    Quantum Neural Simulation Setup
                  </div>
                </div>
              </div>
            )}

            {/* Live Video Class Modal */}
            {activeModal === "video" && (
              <div>
                <h2 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5" /> Live Video Class
                </h2>
                <div className="w-full h-48 bg-black/60 rounded-2xl border border-slate-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-cyan-400 animate-pulse cursor-pointer" />
                  </div>
                  <span className="absolute bottom-3 left-3 text-xs bg-red-600 px-2 py-0.5 rounded text-white font-bold">LIVE</span>
                </div>
                <p className="mt-3 text-xs text-slate-400 text-center">AI Tutor stream is ready to broadcast.</p>
              </div>
            )}

            {/* Live Simulation Modal */}
            {activeModal === "simulation" && (
              <div>
                <h2 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5" /> Live Simulation
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-slate-400 flex justify-between mb-1">
                      <span>Quantum Core Frequency</span>
                      <span className="text-cyan-400">{quantumFreq} GHz</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="150"
                      value={quantumFreq}
                      onChange={(e) => setQuantumFreq(Number(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 flex justify-between mb-1">
                      <span>Neural Mesh Density</span>
                      <span className="text-cyan-400">{meshDensity}%</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={meshDensity}
                      onChange={(e) => setMeshDensity(Number(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                  </div>
                  <div className="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 flex items-center gap-2">
                    <Activity className="w-4 h-4 animate-pulse" />
                    Simulation Engine Running Stable at Optimal Parameters.
                  </div>
                </div>
              </div>
            )}

            {/* Virtual Lab Modal */}
            {activeModal === "lab" && (
              <div>
                <h2 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5" /> Virtual Lab
                </h2>
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-sm text-slate-300">Algorithm Stress Test</span>
                    <button
                      onClick={() => setLabStatus("Test Running...")}
                      className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold rounded-lg"
                    >
                      Run Test
                    </button>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-sm text-slate-300">Deep Neural Scanner</span>
                    <button
                      onClick={() => setLabStatus("Scanning Completed.")}
                      className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold rounded-lg"
                    >
                      Initialize
                    </button>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                    Status: <span className="text-cyan-400 font-medium">{labStatus}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

