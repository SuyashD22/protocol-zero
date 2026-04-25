"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowLeft, ExternalLink, CheckCircle2, Gift } from "lucide-react";
import Link from "next/link";
import type { EventData } from "./page";

export default function EventDetailClient({ event }: { event: EventData }) {
  return (
    <div className="flex-1 w-full min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-[family-name:var(--font-mono)] text-sm mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[24px] p-10 mb-10 relative overflow-hidden"
          style={{ backgroundColor: event.color }}
        >
          {/* Status badge */}
          <div className={`absolute top-6 right-6 px-4 py-1.5 font-black uppercase rounded-full text-sm border-2 border-black ${
            event.status === "Ongoing" ? "bg-[#CCFF00] text-black animate-pulse" :
            event.status === "Upcoming" ? "bg-[#FFDE00] text-black" : "bg-white text-neutral-500"
          }`}>
            {event.status === "Ongoing" ? "🔴 LIVE NOW" : event.status}
          </div>

          <span className="inline-block px-3 py-1 bg-black/20 text-white text-xs font-bold uppercase tracking-widest rounded-md mb-6">
            {event.type}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase font-[family-name:var(--font-heading)] leading-none mb-4 text-white">
            {event.title}
          </h1>
          <p className="text-xl text-white/80 font-bold italic mb-8">{event.tagline}</p>

          <div className="flex flex-wrap gap-6 font-[family-name:var(--font-mono)] font-bold text-sm text-white/90">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{event.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{event.time}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{event.location}</span>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="terminal-card rounded-xl overflow-hidden mb-6"
        >
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-2 text-xs text-neutral-500 font-[family-name:var(--font-mono)]">about_event.md</span>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-black uppercase font-[family-name:var(--font-heading)] mb-4 text-white">About</h2>
            <p className="text-neutral-300 leading-relaxed text-lg">{event.description}</p>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="terminal-card rounded-xl overflow-hidden mb-6"
        >
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-2 text-xs text-neutral-500 font-[family-name:var(--font-mono)]">rules_and_guidelines.md</span>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-black uppercase font-[family-name:var(--font-heading)] mb-6 text-white">Rules</h2>
            <ul className="space-y-4">
              {event.rules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="terminal-card rounded-xl overflow-hidden mb-10"
        >
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-2 text-xs text-neutral-500 font-[family-name:var(--font-mono)]">prizes_and_perks.md</span>
          </div>
          <div className="p-8 flex items-start gap-4">
            <Gift className="w-8 h-8 text-[#FFDE00] shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-black uppercase font-[family-name:var(--font-heading)] mb-2 text-white">Prizes & Perks</h2>
              <p className="text-neutral-300 text-lg">{event.prizeOrPerk}</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        {event.registrationLink ? (
          <motion.a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full py-5 bg-[#CCFF00] text-black font-black uppercase tracking-widest text-xl flex items-center justify-center gap-3 hover:bg-white transition-colors transform -skew-x-6 hover:shadow-[0_0_40px_rgba(204,255,0,0.4)] duration-200"
          >
            <span className="inline-flex items-center gap-3 skew-x-6">
              Register Now <ExternalLink className="w-5 h-5" />
            </span>
          </motion.a>
        ) : (
          <div className="w-full py-5 bg-neutral-800 text-neutral-500 font-black uppercase tracking-widest text-xl flex items-center justify-center rounded-lg">
            Registration Closed
          </div>
        )}
      </div>
    </div>
  );
}
