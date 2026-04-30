"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Network, Cpu, Trophy, Users, Zap } from "lucide-react";

const members = [
  {
    name: "Durgesh A P",
    role: "sys.admin / Lead Organizer",
    skills: ["Linux", "Kubernetes", "AWS"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Durgesh",
    icon: Terminal,
  },
  {
    name: "Neekshith",
    role: "dev.core / Web Lead",
    skills: ["React", "Next.js", "TypeScript"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Neekshith",
    icon: Code2,
  },
  {
    name: "Keerthana Kulal",
    role: "net.sec / Cybersecurity",
    skills: ["Pen Testing", "Cryptography", "C++"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Keerthana",
    icon: Network,
  },
  {
    name: "Suyash Devadiga",
    role: "ai.model / ML Engineer",
    skills: ["Python", "TensorFlow", "PyTorch"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Suyash",
    icon: Cpu,
  },
];

const milestones = [
  { icon: Users,  value: "200+", label: "Active Members",    color: "#CCFF00" },
  { icon: Trophy, value: "12",   label: "Hackathons Won",    color: "#FFDE00" },
  { icon: Zap,    value: "40+",  label: "Events Conducted",  color: "#EC3750" },
];

const timelineEvents = [
  {
    num: 1,
    name: "System Design Masterclass",
    desc: "Senior engineers walked attendees through designing Netflix-scale systems end-to-end.",
    color: "#EC3750",
  },
  {
    num: 2,
    name: "Zero to Web3 Hackathon",
    desc: "48-hour hackathon. 30 teams. ₹5L prize pool. Decentralised apps built from scratch.",
    color: "#338EDA",
    winner: "Team Cipher (1st)",
    runnerUp: "BlockHeads (2nd)",
  },
  {
    num: 3,
    name: "Resume Roast & Review",
    desc: "1-on-1 resume deep-dives with alumni at top MNCs. Every bullet point scrutinised.",
    color: "#6B21A8",
  },
  {
    num: 4,
    name: "CP Blitz — Speed Round",
    desc: "10 problems, 3 hours, zero mercy. A competitive programming trial by fire.",
    color: "#0D9488",
    winner: "Alex Chen",
    runnerUp: "Rahul Verma",
  },
  {
    num: 5,
    name: "OS & Low-Level Deep Dive",
    desc: "The OS internals that interviewers love — process scheduling, memory & deadlocks.",
    color: "#D97706",
  },
];

export default function Portfolio() {
  return (
    <div className="flex-1 w-full pt-32 pb-20 px-6 font-[family-name:var(--font-mono)]">
      <div className="container mx-auto max-w-6xl">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] rounded-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider">Access Granted</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 font-[family-name:var(--font-heading)]">
            CORE_MEMBERS<span className="text-[#CCFF00] animate-pulse">_</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl">
            [sys.log]: Fetching directory of active Protocol Zero core maintainers and event organizers.
          </p>
        </div>

        {/* ── MEMBER CARDS ────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="terminal-card rounded-lg overflow-hidden hover-glow transition-all duration-300 group"
            >
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs text-neutral-500">
                  user_{member.name.split(" ")[0].toLowerCase()}.exe
                </span>
              </div>
              <div className="p-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-black rounded-full border-2 border-neutral-800 group-hover:border-[#CCFF00] p-2 transition-colors overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-[#CCFF00] text-xs font-bold uppercase">
                    <member.icon className="w-4 h-4" />
                    {member.role}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-xs text-neutral-600 uppercase font-bold mb-2">&gt; root@skills:~#</div>
                  {member.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-neutral-300">
                      <span className="text-neutral-600">-</span> {skill}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-2 bg-transparent border border-neutral-700 text-neutral-400 text-sm font-bold uppercase hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors skew-x-[-10deg]">
                  <span className="inline-block skew-x-[10deg]">View Profile</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MILESTONES ──────────────────────────────────────────── */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFDE00]/10 border border-[#FFDE00]/30 text-[#FFDE00] rounded-md mb-6"
          >
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">milestones.reached</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-[family-name:var(--font-heading)]">
            BY THE <span className="text-[#CCFF00]">NUMBERS</span>
          </h2>
          <p className="text-neutral-500 text-base max-w-xl mb-12">
            [sys.log]: Aggregating impact metrics across all semesters and cohorts.
          </p>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 120 }}
              whileHover={{ y: -8 }}
              className="terminal-card rounded-xl p-8 flex flex-col items-center text-center hover-glow transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: `${m.color}18`, border: `2px solid ${m.color}40` }}
              >
                <m.icon className="w-7 h-7" style={{ color: m.color }} />
              </div>
              <span className="text-5xl font-black font-[family-name:var(--font-heading)] mb-2" style={{ color: m.color }}>
                {m.value}
              </span>
              <span className="text-neutral-400 text-sm uppercase tracking-widest font-bold">{m.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── EVENT TREE / TIMELINE ────────────────────────────────── */}
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] rounded-md mb-6"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">events.log</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-[family-name:var(--font-heading)]">
            EVENT <span className="text-[#CCFF00]">TREE</span>
          </h2>
          <p className="text-neutral-500 text-base max-w-xl mb-16">
            [sys.log]: A complete log of Protocol Zero events — every branch is a milestone.
          </p>
        </div>

        {/* ── EVENT TREE / TIMELINE (STATIC NEO-BRUTALIST) ─────────── */}
        <div className="relative mt-16 pb-12">
          {/* Vertical trunk line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white" />

          <div className="w-full space-y-16 md:space-y-12 relative z-10">
            {timelineEvents.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-center gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  
                  {/* Content box */}
                  <div className={`w-full md:w-[45%] pl-16 pr-4 md:px-0 z-10 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <div
                      className="relative rounded-none p-6 md:p-8 inline-block w-full bg-[#0a0a0a] border-4 transition-transform hover:-translate-y-1 hover:-translate-x-1 duration-200"
                      style={{ 
                        borderColor: ev.color,
                        boxShadow: `8px 8px 0px 0px ${ev.color}`
                      }}
                    >
                      <h3
                        className="text-xl md:text-2xl font-black uppercase font-[family-name:var(--font-heading)] mb-3 tracking-wide"
                        style={{ color: ev.color }}
                      >
                        {ev.name}
                      </h3>
                      <p className="text-white text-sm md:text-base leading-relaxed font-bold">
                        {ev.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center/Left: horizontal branch + numbered circle */}
                  <div className="absolute left-6 md:static md:w-[10%] flex items-center justify-center z-20 -translate-x-1/2 md:translate-x-0">
                    {/* Horizontal branch line */}
                    <div
                      className="hidden md:block absolute h-1 w-[50%] bg-white"
                      style={{ 
                        [isLeft ? 'right' : 'left']: '50%'
                      }}
                    />
                    
                    {/* Numbered Node */}
                    <div
                      className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#0a0a0a] border-4 z-10 hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                      style={{ borderColor: ev.color, boxShadow: `4px 4px 0px 0px ${ev.color}` }}
                    >
                      <span 
                        className="font-black text-xl md:text-2xl"
                        style={{ color: ev.color }}
                      >
                        {ev.num}
                      </span>
                    </div>
                  </div>

                  {/* Empty spacer / Winners */}
                  <div className={`hidden md:flex md:w-[45%] flex-col justify-center ${isLeft ? "pl-12 text-left" : "pr-12 text-right"}`}>
                    {ev.winner && (
                      <div className="mb-2">
                        <p className="text-[#CCFF00] font-black uppercase text-sm font-[family-name:var(--font-mono)] tracking-widest mb-2 flex items-center gap-2" style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}>
                          <Trophy className="w-5 h-5" /> 
                          <span className="bg-[#CCFF00] text-black px-2 py-0.5 font-bold uppercase tracking-widest border border-black">WINNER</span>
                        </p>
                        <p className="text-white font-black text-2xl tracking-tight uppercase">
                          {ev.winner}
                        </p>
                      </div>
                    )}
                    {ev.runnerUp && (
                      <div className="mt-1">
                        <p className="text-neutral-500 font-black uppercase text-xs font-[family-name:var(--font-mono)] tracking-widest mb-1">
                          Runner Up
                        </p>
                        <p className="text-neutral-300 text-base font-bold uppercase">{ev.runnerUp}</p>
                      </div>
                    )}
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
