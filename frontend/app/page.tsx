
'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  BrainCircuit,
  Image as ImageIcon,
  Video,
  Atom,
  FlaskConical,
  Send,
  Plus,
  MoreHorizontal,
  Clock,
  ArrowLeft,
  Play,
  Pause,
  X,
  MessageCircle,
  Upload,
  ChevronDown,
  Sparkles,
  BookOpen,
  Trash2,
  Home,
} from 'lucide-react';

type View = 'home' | 'video' | 'simulation' | 'lab';

type Message = {
  role: 'user' | 'system';
  text: string;
  image?: string;
};

type Chat = {
  id: number;
  title: string;
  time: string;
  messages: Message[];
};

const initialChats: Chat[] = [
  {
    id: 1,
    title: 'Quantum Physics Overview',
    time: '2h ago',
    messages: [
      { role: 'user', text: 'Explain quantum physics.' },
      {
        role: 'system',
        text: 'This is a sample conversation. Connect an AI service later to generate real answers.',
      },
    ],
  },
  {
    id: 2,
    title: 'Neural Network Tutorial',
    time: 'Yesterday',
    messages: [
      { role: 'user', text: 'What is a neural network?' },
      {
        role: 'system',
        text: 'This is a sample conversation for the UI preview.',
      },
    ],
  },
  {
    id: 3,
    title: 'Chemistry Lab Experiment',
    time: '3 days ago',
    messages: [
      { role: 'user', text: 'Open chemistry lab.' },
      {
        role: 'system',
        text: 'This is a sample conversation for the UI preview.',
      },
    ],
  },
];

export default function SyntheticIntelligenceApp() {
  const [view, setView] = useState<View>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [videoRunning, setVideoRunning] = useState(false);
  const [labExperiment, setLabExperiment] = useState('Physics');
  const [frequency, setFrequency] = useState(75);
  const [density, setDensity] = useState(60);

  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (image?.startsWith('blob:')) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const openChat = (chat: Chat) => {
    setActiveChat(chat.id);
    setMessages(chat.messages);
    setPrompt('');
    setImage(null);
    setView('home');
    setMenuOpen(false);
  };

  const newChat = () => {
    setActiveChat(null);
    setMessages([]);
    setPrompt('');
    setImage(null);
    setView('home');
    setMenuOpen(false);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      e.target.value = '';
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Please select an image smaller than 10 MB.');
      e.target.value = '';
      return;
    }

    setImage(URL.createObjectURL(file));
    e.target.value = '';
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt.trim() && !image) return;

    const userMessage: Message = {
      role: 'user',
      text: prompt.trim() || 'Image uploaded',
      image: image || undefined,
    };

    setMessages((previous) => [...previous, userMessage]);

    // UI demo only: no AI service is connected yet.
    setMessages((previous) => [
      ...previous,
      {
        role: 'system',
        text: 'Your message was added successfully. Connect an AI API to receive a real answer.',
      },
    ]);

    const title = prompt.trim()
      ? prompt.trim().slice(0, 36)
      : 'Image question';

    const id = activeChat ?? Date.now();

    const updatedChat: Chat = {
      id,
      title,
      time: 'Just now',
      messages: [
        ...messages,
        userMessage,
        {
          role: 'system',
          text: 'Your message was added successfully. Connect an AI API to receive a real answer.',
        },
      ],
    };

    setChats((previous) => [
      updatedChat,
      ...previous.filter((chat) => chat.id !== id),
    ]);

    setActiveChat(id);
    setPrompt('');
    setImage(null);
  };

  const deleteChat = (id: number) => {
    setChats((previous) => previous.filter((chat) => chat.id !== id));

    if (activeChat === id) {
      newChat();
    }
  };

  const goTo = (nextView: View) => {
    setView(nextView);
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050812] text-white">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[35%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto min-h-screen w-full max-w-5xl px-4 py-5 sm:px-8">
        {/* Header */}
        <header className="flex items-center justify-between gap-3">
          <button
            onClick={() => goTo('home')}
            className="flex min-w-0 items-center gap-3 rounded-xl text-left"
            aria-label="Go to SI home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
              <BrainCircuit className="h-7 w-7 text-cyan-300" />
            </div>

            <div className="min-w-0">
              <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-base font-bold sm:text-xl">
                Synthetic Intelligence
              </h1>
              <p className="text-xs tracking-[0.25em] text-cyan-200/70">
                SI
              </p>
            </div>
          </button>

          <div className="relative">
            <button
              onClick={() => setMenuOpen((previous) => !previous)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/40 bg-slate-900/80 text-purple-300 transition hover:border-cyan-300 hover:text-cyan-300"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <MoreHorizontal className="h-6 w-6" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-14 z-30 w-64 rounded-2xl border border-purple-500/50 bg-[#0b1020] p-3 shadow-[0_0_35px_rgba(139,92,246,0.16)]">
                <button
                  onClick={newChat}
                  className="mb-3 flex w-full items-center gap-3 rounded-lg bg-cyan-400/10 px-3 py-3 text-sm text-cyan-200 hover:bg-cyan-400/20"
                >
                  <Plus className="h-4 w-4" />
                  New Chat
                </button>

                <p className="mb-2 px-2 text-xs font-semibold text-slate-400">
                  LEARNING MODULES
                </p>

                <button
                  onClick={() => goTo('video')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
                >
                  <Video className="h-4 w-4 text-cyan-300" />
                  Live Video Class
                </button>

                <button
                  onClick={() => goTo('simulation')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
                >
                  <Atom className="h-4 w-4 text-purple-300" />
                  Live Simulation
                </button>

                <button
                  onClick={() => goTo('lab')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
                >
                  <FlaskConical className="h-4 w-4 text-pink-300" />
                  Virtual Lab
                </button>

                <div className="my-2 border-t border-white/10" />

                <button
                  onClick={() => {
                    setHistoryOpen((previous) => !previous);
                    setMenuOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5"
                >
                  <span className="flex items-center gap-3">
                    <Clock className="h-4 w-4" />
                    Previous Chats
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition ${historyOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Previous chats */}
        {view === 'home' && historyOpen && chats.length > 0 && (
          <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-4 sm:ml-auto sm:max-w-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-cyan-200">
                Previous Chats
              </h2>
              <button
                onClick={() => setHistoryOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
                aria-label="Hide previous chats"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-1">
              {chats.slice(0, 5).map((chat) => (
                <div
                  key={chat.id}
                  className={`group flex items-center gap-2 rounded-lg ${
                    activeChat === chat.id
                      ? 'bg-cyan-400/10'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <button
                    onClick={() => openChat(chat)}
                    className="flex min-w-0 flex-1 items-center gap-3 px-2 py-2.5 text-left"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-cyan-300" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs text-slate-200">
                        {chat.title}
                      </span>
                      <span className="mt-1 block text-[10px] text-slate-500">
                        {chat.time}
                      </span>
                    </span>
                  </button>

                  <button
                    onClick={() => deleteChat(chat.id)}
                    className="mr-2 rounded p-1 text-slate-600 opacity-100 hover:text-red-400 sm:opacity-0 sm:group-hover:opacity-100"
                    aria-label={`Delete ${chat.title}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main content */}
        <section className="mx-auto mt-10 flex w-full max-w-3xl flex-col items-center sm:mt-16">
          {view === 'home' && (
            <>
              {messages.length === 0 ? (
                <div className="flex min-h-[260px] w-full flex-col items-center justify-center text-center">
                  <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse" />
                    <div className="absolute inset-3 rounded-full border border-purple-400/40" />
                    <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl" />
                    <BrainCircuit className="relative h-16 w-16 text-cyan-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
                    <Sparkles className="absolute right-0 top-1 h-6 w-6 text-purple-300" />
                  </div>

                  <h2 className="bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
                    How can SI help you?
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                    Ask questions, explore ideas, and learn something new.
                  </p>

                  <div className="relative mt-10 flex h-28 w-full max-w-md items-center justify-center">
                    <div className="absolute h-12 w-56 rounded-[50%] border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.12)]" />
                    <div className="absolute h-8 w-40 rounded-[50%] border border-blue-400/40" />
                    <div className="absolute h-3 w-24 rounded-[50%] bg-cyan-300/20 blur-md" />
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_18px_6px_rgba(34,211,238,0.4)]" />
                  </div>
                </div>
              ) : (
                <div className="mb-6 flex max-h-[45vh] w-full flex-col gap-4 overflow-y-auto pr-1">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`max-w-[90%] rounded-2xl border p-4 text-sm leading-6 ${
                        message.role === 'user'
                          ? 'self-end border-cyan-400/30 bg-cyan-400/10 text-cyan-50'
                          : 'self-start border-purple-400/20 bg-slate-900/80 text-slate-300'
                      }`}
                    >
                      {message.image && (
                        <img
                          src={message.image}
                          alt="User upload"
                          className="mb-3 max-h-48 max-w-full rounded-lg object-contain"
                        />
                      )}
                      {message.text}
                    </div>
                  ))}
                </div>
              )}

              {/* Composer */}
              <form
                onSubmit={handleSend}
                className="w-full rounded-2xl border border-cyan-400/50 bg-slate-900/80 p-3 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition focus-within:border-purple-400/70"
              >
                {image && (
                  <div className="mb-3 flex items-start gap-3">
                    <img
                      src={image}
                      alt="Selected upload preview"
                      className="h-20 w-20 rounded-xl border border-cyan-400/30 object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setImage(null)}
                      className="rounded-full border border-white/10 p-2 text-slate-400 hover:text-red-400"
                      aria-label="Remove selected image"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      e.currentTarget.form?.requestSubmit();
                    }
                  }}
                  rows={2}
                  placeholder="Ask anything..."
                  className="w-full resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
                  aria-label="Ask SI a question"
                />

                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs text-cyan-200 hover:bg-cyan-400/15"
                    >
                      <ImageIcon className="h-4 w-4" />
                      <span>Image</span>
                    </button>

                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImage}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => goTo('video')}
                      className="flex items-center gap-2 rounded-xl border border-purple-400/20 bg-purple-400/5 px-3 py-2 text-xs text-purple-200 hover:bg-purple-400/15"
                    >
                      <Video className="h-4 w-4" />
                      <span>Video Class</span>
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={!prompt.trim() && !image}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <div className="mt-5 grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
                <button
                  onClick={() => goTo('video')}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-cyan-400/20 bg-slate-900/60 p-4 text-center transition hover:border-cyan-300/60 hover:bg-cyan-400/5"
                >
                  <Video className="h-6 w-6 text-cyan-300" />
                  <span className="text-xs text-slate-200">Live Video Class</span>
                </button>

                <button
                  onClick={() => goTo('simulation')}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-purple-400/20 bg-slate-900/60 p-4 text-center transition hover:border-purple-300/60 hover:bg-purple-400/5"
                >
                  <Atom className="h-6 w-6 text-purple-300" />
                  <span className="text-xs text-slate-200">Live Simulation</span>
                </button>

                <button
                  onClick={() => goTo('lab')}
                  className="col-span-2 flex flex-col items-center gap-2 rounded-2xl border border-pink-400/20 bg-slate-900/60 p-4 text-center transition hover:border-pink-300/60 hover:bg-pink-400/5 sm:col-span-1"
                >
                  <FlaskConical className="h-6 w-6 text-pink-300" />
                  <span className="text-xs text-slate-200">Virtual Lab</span>
                </button>
              </div>
            </>
          )}

          {/* Video Class UI */}
          {view === 'video' && (
            <div className="w-full rounded-2xl border border-cyan-400/30 bg-slate-900/70 p-5 sm:p-8">
              <button
                onClick={() => goTo('home')}
                className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300"
              >
                <ArrowLeft className="h-4 w-4" /> Back to SI
              </button>

              <div className="mb-5 flex items-center gap-3">
                <Video className="h-8 w-8 text-cyan-300" />
                <div>
                  <h2 className="text-xl font-bold">Live Video Class</h2>
                  <p className="mt-1 text-xs text-slate-400">Video class interface</p>
                </div>
              </div>

              <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#050812] p-6 text-center">
                <BookOpen className="mb-4 h-12 w-12 text-cyan-300" />
                <p className="text-sm text-slate-200">
                  {videoRunning ? 'Class session started in demo mode' : 'Ready for your lesson?'}
                </p>
                <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500">
                  This is a UI preview. A real video class needs a video service and lesson content.
                </p>
              </div>

              <button
                onClick={() => setVideoRunning((previous) => !previous)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
              >
                {videoRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {videoRunning ? 'End Demo Session' : 'Start Demo Session'}
              </button>
            </div>
          )}

          {/* Simulation UI */}
          {view === 'simulation' && (
            <div className="w-full rounded-2xl border border-purple-400/30 bg-slate-900/70 p-5 sm:p-8">
              <button
                onClick={() => goTo('home')}
                className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-purple-300"
              >
                <ArrowLeft className="h-4 w-4" /> Back to SI
              </button>

              <div className="mb-6 flex items-center gap-3">
                <Atom className="h-8 w-8 text-purple-300" />
                <div>
                  <h2 className="text-xl font-bold">Live Simulation</h2>
                  <p className="mt-1 text-xs text-slate-400">Interactive parameter demo</p>
                </div>
              </div>

              <div className="mb-6 flex h-44 items-center justify-center rounded-2xl border border-purple-400/20 bg-[#050812]">
                <div className={`relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/40 ${simulationRunning ? 'animate-pulse' : ''}`}>
                  <div className="absolute inset-2 rounded-full border border-purple-400/60" />
                  <Atom className="h-10 w-10 text-cyan-300" />
                </div>
              </div>

              <label className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Quantum Frequency</span>
                <span className="text-cyan-300">{frequency} GHz</span>
              </label>
              <input
                type="range"
                min="10"
                max="150"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="mb-6 w-full accent-cyan-400"
              />

              <label className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Mesh Density</span>
                <span className="text-purple-300">{density}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="mb-6 w-full accent-purple-400"
              />

              <button
                onClick={() => setSimulationRunning((previous) => !previous)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 font-semibold text-white hover:bg-purple-400"
              >
                {simulationRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {simulationRunning ? 'Stop Demo' : 'Run Demo'}
              </button>

              <p className="mt-3 text-center text-xs text-slate-500">
                Visual demonstration only; not a real quantum simulation.
              </p>
            </div>
          )}

          {/* Virtual Lab UI */}
          {view === 'lab' && (
            <div className="w-full rounded-2xl border border-pink-400/30 bg-slate-900/70 p-5 sm:p-8">
              <button
                onClick={() => goTo('home')}
                className="mb-6 flex items-center gap-2 text-sm text-slate-400 hover:text-pink-300"
              >
                <ArrowLeft className="h-4 w-4" /> Back to SI
              </button>

              <div className="mb-6 flex items-center gap-3">
                <FlaskConical className="h-8 w-8 text-pink-300" />
                <div>
                  <h2 className="text-xl font-bold">Virtual Lab</h2>
                  <p className="mt-1 text-xs text-slate-400">Choose a lab category</p>
                </div>
              </div>

              <label className="mb-2 block text-sm text-slate-300">
                Experiment category
              </label>
              <select
                value={labExperiment}
                onChange={(e) => setLabExperiment(e.target.value)}
                className="mb-5 w-full rounded-xl border border-pink-400/30 bg-[#050812] px-4 py-3 text-sm text-white outline-none focus:border-pink-300"
              >
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>Mathematics</option>
              </select>

              <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-pink-400/20 bg-[#050812] p-5 text-center">
                <FlaskConical className="mb-3 h-12 w-12 text-pink-300" />
                <h3 className="font-semibold">{labExperiment} Laboratory</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Your selected category is {labExperiment}. Interactive experiments can be added here.
                </p>
              </div>

              <button
                onClick={() => alert(`${labExperiment} lab UI is selected. Add an experiment engine to run real experiments.`)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 px-4 py-3 font-semibold text-white hover:bg-pink-400"
              >
                <FlaskConical className="h-5 w-5" />
                Open Lab
              </button>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="relative mt-12 border-t border-white/10 py-5 text-center">
          <button
            onClick={() => goTo('home')}
            className="inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-300"
          >
            <Home className="h-4 w-4" />
            Synthetic Intelligence · SI V1
          </button>
          <p className="mt-2 text-[10px] text-slate-600">
            Education-focused interface preview
          </p>
        </footer>
      </div>
    </main>
  );
}

