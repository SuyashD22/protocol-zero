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

        {/* Tree — straight branch zigzag (Responsive) */}
        <div className="relative">
          {/* Vertical trunk line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#CCFF00] via-[#FFDE00] to-[#EC3750] opacity-30" />

          <div className="w-full space-y-10 md:space-y-0">
            {timelineEvents.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className={`relative flex items-center gap-0 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  
                  {/* Content box */}
                  <div className={`w-full md:w-[45%] pl-16 pr-4 md:px-0 ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                    <div
                      className="terminal-card rounded-xl p-5 md:p-6 inline-block w-full hover-glow transition-all duration-300"
                      style={{ borderColor: `${ev.color}40` }}
                    >
                      <h3
                        className="text-lg md:text-xl font-black uppercase font-[family-name:var(--font-heading)] mb-2"
                        style={{ color: ev.color }}
                      >
                        {ev.name}
                      </h3>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>

                  {/* Center/Left: horizontal branch + numbered circle */}
                  <div className="absolute left-6 md:static md:w-[10%] flex items-center justify-center z-10 -translate-x-1/2 md:translate-x-0">
                    {/* Horizontal branch line (hidden on mobile) */}
                    <div
                      className="hidden md:block absolute h-[2px] w-full opacity-40"
                      style={{ backgroundColor: ev.color }}
                    />
                    {/* Numbered circle */}
                    <div
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-black text-sm md:text-base z-10 border-2 bg-black"
                      style={{
                        borderColor: ev.color,
                        color: ev.color,
                        boxShadow: `0 0 16px ${ev.color}50`,
                      }}
                    >
                      {ev.num}
                    </div>
                  </div>

                  {/* Empty spacer / Winners (hidden on mobile, visible on desktop) */}
                  <div className={`hidden md:flex md:w-[45%] flex-col justify-center ${isLeft ? "pl-8 text-left" : "pr-8 text-right"}`}>
                    {ev.winner && (
                      <div className="opacity-80 transition-opacity hover:opacity-100">
                        <p className="text-[#FFDE00] font-black uppercase text-sm font-[family-name:var(--font-mono)] tracking-widest mb-1 flex items-center gap-2 justify-start" style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}>
                          <Trophy className="w-4 h-4" /> WINNER
                        </p>
                        <p className="text-white font-bold text-lg">{ev.winner}</p>
                      </div>
                    )}
                    {ev.runnerUp && (
                      <div className="mt-3 opacity-60 hover:opacity-100 transition-opacity">
                        <p className="text-neutral-400 font-bold uppercase text-xs font-[family-name:var(--font-mono)] tracking-widest mb-1">
                          Runner Up
                        </p>
                        <p className="text-neutral-300 text-sm">{ev.runnerUp}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
