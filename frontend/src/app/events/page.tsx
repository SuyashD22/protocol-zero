"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: "system-design-masterclass",
    title: "System Design Masterclass",
    date: "Oct 15, 2026",
    time: "18:00 – 20:00",
    location: "Main Auditorium",
    type: "Workshop",
    status: "Ongoing",
    description: "Learn how to design scalable systems like Netflix and Uber from senior engineers.",
    color: "bg-[#EC3750]",
    rotate: -2,
  },
  {
    id: "zero-to-web3-hackathon",
    title: "Zero to Web3 Hackathon",
    date: "Oct 20–22, 2026",
    time: "48 Hours",
    location: "Innovation Lab",
    type: "Hackathon",
    status: "Ongoing",
    description: "Build decentralized applications over a weekend. ₹5,00,000 prize pool.",
    color: "bg-[#338EDA]",
    rotate: 3,
  },
  {
    id: "resume-roast",
    title: "Resume Roast & Review",
    date: "Nov 5, 2026",
    time: "16:00 – 18:00",
    location: "Seminar Hall B",
    type: "Career",
    status: "Upcoming",
    description: "Submit your resume. Get brutally honest, line-by-line feedback from alumni at top firms.",
    color: "bg-[#6B21A8]",
    rotate: -1,
  },
  {
    id: "cp-blitz",
    title: "CP Blitz — Speed Round",
    date: "Nov 12, 2026",
    time: "14:00 – 17:00",
    location: "Computer Lab 3",
    type: "Contest",
    status: "Upcoming",
    description: "A fast-paced competitive programming contest — 10 problems, 3 hours, no mercy.",
    color: "bg-[#0D9488]",
    rotate: 2,
  },
  {
    id: "os-deep-dive",
    title: "OS & Low-Level Deep Dive",
    date: "Nov 20, 2026",
    time: "17:00 – 19:00",
    location: "Online (Zoom)",
    type: "Workshop",
    status: "Upcoming",
    description: "Memory management, system calls, and why every placement interviewer loves OS questions.",
    color: "bg-[#D97706]",
    rotate: -3,
  },
  {
    id: "mock-interview-faang",
    title: "Mock Interview Series: FAANG",
    date: "Sep 28, 2026",
    time: "14:00 – 18:00",
    location: "Online",
    type: "Career",
    status: "Past",
    description: "1-on-1 mock technical interviews focusing on dynamic programming and graphs.",
    color: "bg-[#374151]",
    rotate: 1,
  },
];

export default function Events() {
  const ongoingCount = events.filter((e) => e.status === "Ongoing").length;

  return (
    <div className="flex-1 w-full bg-black text-white pt-32 pb-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: -5, scale: 1 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 10 }}
            className="absolute -top-10 left-[30%] bg-[#FFDE00] text-black px-4 py-2 font-black uppercase text-xl rounded-md shadow-lg font-[family-name:var(--font-heading)] transform -rotate-6 z-10"
          >
            GET INVOLVED!
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase font-[family-name:var(--font-heading)] text-white">
            CLUB{" "}
            <span className="underline decoration-[#EC3750] decoration-8 underline-offset-8">EVENTS</span>
          </h1>
          <p className="mt-6 text-xl text-neutral-400 font-medium max-w-xl mx-auto">
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC3750] animate-pulse" />
              {ongoingCount} ongoing events — click a card to see rules &amp; register.
            </span>
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {events.map((event, i) => (
            <Link key={i} href={`/events/${event.id}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                style={{ rotate: event.rotate }}
                className={`relative ${event.color} text-white rounded-[24px] p-8 shadow-2xl cursor-pointer transition-all h-full`}
              >
                {/* Status sticker */}
                <div className={`absolute -top-4 -right-4 px-4 py-2 font-black uppercase rounded-full shadow-lg border-2 border-black text-sm transform rotate-12 ${
                  event.status === "Ongoing"
                    ? "bg-[#CCFF00] text-black animate-pulse"
                    : event.status === "Upcoming"
                    ? "bg-[#FFDE00] text-black"
                    : "bg-white text-neutral-500"
                }`}>
                  {event.status === "Ongoing" ? "🔴 LIVE" : event.status}
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-black/20 font-bold uppercase tracking-wider rounded-md text-xs mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-2xl font-black mb-3 leading-tight font-[family-name:var(--font-heading)]">
                    {event.title}
                  </h3>
                  <p className="font-medium text-white/90 text-base leading-snug">{event.description}</p>
                </div>

                <div className="bg-black/20 rounded-xl p-4 flex flex-col gap-3 font-bold font-[family-name:var(--font-mono)] text-sm text-white mb-4">
                  <div className="flex items-center gap-3"><Calendar className="w-4 h-4 shrink-0" />{event.date}</div>
                  <div className="flex items-center gap-3"><Clock className="w-4 h-4 shrink-0" />{event.time}</div>
                  <div className="flex items-center gap-3"><MapPin className="w-4 h-4 shrink-0" />{event.location}</div>
                </div>

                <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-wider">
                  View Details <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
