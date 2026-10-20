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
  Sliders 
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [activeModal, setActiveModal] = useState<string | null>(null);

    setTimeout(() => {
      const aiResponse = { 
        role: "assistant", 
        content: `Synthetic Intelligence (SI) Core: I have processed your input regarding "${userMessage.content}". All systems are fully operational.` 
      };
      setMessages([...updatedMessages, aiResponse]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Header */}
      <header className="flex items-center justify-between p-4 z-20">
        <div className="flex items-center space-x-3">
          <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/20 text-cyan-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold tracking-wide text-sm md:text-base flex items-center gap-2">
              Synthetic Intelligence 
              <Brain className="w-4 h-4 text-cyan-400" />
            </h1>
            <p className="text-xs text-slate-400">SI</p>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-2xl text-slate-300 hover:text-cyan-400 transition-colors shadow-lg"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </header>

      {/* Dropdown Menu / Sidebar for Previous Chats & Options */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-80 bg-slate-950/95 border border-slate-800 rounded-3xl p-4 shadow-2xl backdrop-blur-xl z-50 space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-semibold text-slate-200">Previous Chats</h3>
            <button onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* History List */}
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Quantum Physics Overview • 2h ago</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Neural Network Tutorial • Yesterday</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chemistry Lab Experiment • 3 days ago</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-2">
            <button 
              onClick={() => { setActiveModal("video"); setMenuOpen(false); }}
              className="w-full flex items-center gap-2.5 p-2.5 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Video className="w-4 h-4 text-cyan-400" />
              <span>Live Video Class</span>
            </button>
            <button 
              onClick={() => { setActiveModal("simulation"); setMenuOpen(false); }}
              className="w-full flex items-center gap-2.5 p-2.5 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Live Simulation</span>
            </button>
            <button 
              onClick={() => { setActiveModal("lab"); setMenuOpen(false); }}
              className="w-full flex items-center gap-2.5 p-2.5 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Virtual Lab</span>
            </button>
          </div>
        </div>
      )}

      {/* Center Body / Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-3xl w-full mx-auto overflow-y-auto space-y-4 pb-28">
        {messages.length === 0 ? (
          <div className="text-center space-y-6 my-auto">
            {/* Glowing Ring Animation / Visualizer */}
            <div className="relative w-48 h-20 mx-auto flex items-center justify-center">
              <div className="absolute w-32 h-8 bg-cyan-500/20 rounded-full blur-md animate-pulse" />
              <div className="absolute w-full h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
              <div className="absolute w-3/4 h-0.5 bg-cyan-300 rounded-full top-6 shadow-[0_0_15px_#22d3ee]" />
              <div className="absolute w-1/2 h-0.5 bg-cyan-200 rounded-full top-12 shadow-[0_0_10px_#22d3ee]" />
            </div>
          </div>
        ) : (
          <div className="w-full space-y-4 my-auto">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-2xl max-w-[85%] ${
                  msg.role === "user" 
                    ? "ml-auto bg-cyan-600 text-white rounded-br-none" 
                    : "mr-auto bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none shadow-xl"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Input Box */}
      <footer className="fixed bottom-6 left-0 right-0 z-30 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSend} className="relative flex items-center bg-[#0d121d]/95 border border-slate-800/80 rounded-full px-4 py-2.5 shadow-2xl backdrop-blur-xl focus-within:border-cyan-500/50 transition-all">
            <button type="button" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Video className="w-5 h-5" />
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
            <button 
              type="submit" 
              className="p-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full transition-all font-semibold flex items-center justify-center shadow-lg shadow-cyan-500/30"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </footer>

      {/* Modals for Live Simulation / Video Class / Virtual Lab */}
      {activeModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {activeModal === "video" && <Video className="w-5 h-5 text-cyan-400" />}
                {activeModal === "simulation" && <Activity className="w-5 h-5 text-cyan-400" />}
                {activeModal === "lab" && <FlaskConical className="w-5 h-5 text-cyan-400" />}
                <span className="capitalize">{activeModal === "video" ? "Live Video Class" : activeModal === "simulation" ? "Live Simulation" : "Virtual Lab"}</span>
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeModal === "simulation" && (
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Quantum Frequency</span>
                    <span className="text-cyan-400 font-medium">{quantumFreq} Hz</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="150" 
                    value={quantumFreq} 
                    onChange={(e) => setQuantumFreq(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Mesh Density</span>
                    <span className="text-cyan-400 font-medium">{meshDensity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={meshDensity} 
                    onChange={(e) => setMeshDensity(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Status:</span>
                  <span className="text-cyan-400 font-medium">{labStatus}</span>
                </div>

                <button 
                  onClick={() => setLabStatus("Test Running...")}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-2xl transition-all shadow-lg shadow-cyan-500/20 text-sm flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Run Test
                </button>
              </div>
            )}

            {activeModal === "video" && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto text-cyan-400 animate-pulse">
                  <Video className="w-8 h-8" />
                </div>
                <p className="text-sm text-slate-300">Connecting to Live Video Stream...</p>
              </div>
            )}

            {activeModal === "lab" && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto text-cyan-400 animate-pulse">
                  <FlaskConical className="w-8 h-8" />
                </div>
                <p className="text-sm text-slate-300">Initializing Virtual Lab Environment...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

// Simulation states
  const [quantumFreq, setQuantumFreq] = useState(75);
  const [meshDensity, setMeshDensity] = useState(60);
  const [labStatus, setLabStatus] = useState("Idle");

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

  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Top Header */}
      <header className="flex items-center justify-between p-4 z-20">
        <div className="flex items-center space-x-3">
          <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/20 text-cyan-400">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold tracking-wide text-sm md:text-base flex items-center gap-2">
              Synthetic Intelligence 
              <Brain className="w-4 h-4 text-cyan-400" />
            </h1>
            <p className="text-xs text-slate-400">SI</p>
          </div>
        </div>

        {/* Menu Toggle Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-2xl text-slate-300 hover:text-cyan-400 transition-colors shadow-lg"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </header>

      {/* Dropdown Menu / Sidebar for Previous Chats & Options */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-80 bg-slate-950/95 border border-slate-800 rounded-3xl p-4 shadow-2xl backdrop-blur-xl z-50 space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-semibold text-slate-200">Previous Chats</h3>
            <button onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* History List */}
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Quantum Physics Overview • 2h ago</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Neural Network Tutorial • Yesterday</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-colors">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Chemistry Lab Experiment • 3 days ago</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-2">
            <button 
              onClick={() => { setActiveModal("video"); setMenuOpen(false); }}
              className="w-full flex items-center gap-2.5 p-2.5 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Video className="w-4 h-4 text-cyan-400" />
              <span>Live Video Class</span>
            </button>
            <button 
              onClick={() => { setActiveModal("simulation"); setMenuOpen(false); }}
              className="w-full flex items-center gap-2.5 p-2.5 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Live Simulation</span>
            </button>
            <button 
              onClick={() => { setActiveModal("lab"); setMenuOpen(false); }}
              className="w-full flex items-center gap-2.5 p-2.5 hover:bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Virtual Lab</span>
            </button>
          </div>
        </div>
      )}

      {/* Center Body / Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-3xl w-full mx-auto overflow-y-auto space-y-4 pb-28">
        {messages.length === 0 ? (
          <div className="text-center space-y-6 my-auto">
            {/* Glowing Ring Animation / Visualizer */}
            <div className="relative w-48 h-20 mx-auto flex items-center justify-center">
              <div className="absolute w-32 h-8 bg-cyan-500/20 rounded-full blur-md animate-pulse" />
              <div className="absolute w-full h-1 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
              <div className="absolute w-3/4 h-0.5 bg-cyan-300 rounded-full top-6 shadow-[0_0_15px_#22d3ee]" />
              <div className="absolute w-1/2 h-0.5 bg-cyan-200 rounded-full top-12 shadow-[0_0_10px_#22d3ee]" />
            </div>
          </div>
        ) : (
          <div className="w-full space-y-4 my-auto">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-2xl max-w-[85%] ${
                  msg.role === "user" 
                    ? "ml-auto bg-cyan-600 text-white rounded-br-none" 
                    : "mr-auto bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none shadow-xl"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Input Box */}
      <footer className="fixed bottom-6 left-0 right-0 z-30 px-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSend} className="relative flex items-center bg-[#0d121d]/95 border border-slate-800/80 rounded-full px-4 py-2.5 shadow-2xl backdrop-blur-xl focus-within:border-cyan-500/50 transition-all">
            <button type="button" className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Video className="w-5 h-5" />
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
            <button 
              type="submit" 
              className="p-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full transition-all font-semibold flex items-center justify-center shadow-lg shadow-cyan-500/30"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </footer>

      {/* Modals for Live Simulation / Video Class / Virtual Lab */}
      {activeModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {activeModal === "video" && <Video className="w-5 h-5 text-cyan-400" />}
                {activeModal === "simulation" && <Activity className="w-5 h-5 text-cyan-400" />}
                {activeModal === "lab" && <FlaskConical className="w-5 h-5 text-cyan-400" />}
                <span className="capitalize">{activeModal === "video" ? "Live Video Class" : activeModal === "simulation" ? "Live Simulation" : "Virtual Lab"}</span>
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeModal === "simulation" && (
              <div className="space-y-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Quantum Frequency</span>
                    <span className="text-cyan-400 font-medium">{quantumFreq} Hz</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="150" 
                    value={quantumFreq} 
                    onChange={(e) => setQuantumFreq(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Mesh Density</span>
                    <span className="text-cyan-400 font-medium">{meshDensity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={meshDensity} 
                    onChange={(e) => setMeshDensity(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Status:</span>
                  <span className="text-cyan-400 font-medium">{labStatus}</span>
                </div>

                <button 
                  onClick={() => setLabStatus("Test Running...")}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-2xl transition-all shadow-lg shadow-cyan-500/20 text-sm flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Run Test
                </button>
              </div>
            )}

            {activeModal === "video" && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto text-cyan-400 animate-pulse">
                  <Video className="w-8 h-8" />
                </div>
                <p className="text-sm text-slate-300">Connecting to Live Video Stream...</p>
              </div>
            )}

            {activeModal === "lab" && (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto text-cyan-400 animate-pulse">
                  <FlaskConical className="w-8 h-8" />
                </div>
                <p className="text-sm text-slate-300">Initializing Virtual Lab Environment...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
