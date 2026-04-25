"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Trophy, Users, CalendarCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });

  // Text zooms from 1× → 4× as you scroll through the intro section
  const textScale   = useTransform(scrollYProgress, [0, 0.8], [1, 5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0]);

  return (
    <div className="flex-1 w-full">

      {/* ── SCROLL-ZOOM INTRO (Norway-style) with Video BG ─────────────── */}
      <section
        ref={introRef}
        className="relative h-[300vh] bg-black"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-55"
          >
            <source src="/prozero.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Zoom text */}
          <motion.p
            style={{ scale: textScale, opacity: textOpacity }}
            className="relative z-10 text-white text-2xl md:text-4xl lg:text-5xl font-black text-center uppercase leading-tight px-6 font-[family-name:var(--font-heading)] max-w-5xl"
          >
            PROTOCOL ZERO: Pushed by{" "}
            <span className="text-[#CCFF00]">Students.</span>{" "}
            Pulled by{" "}
            <span className="text-[#FFDE00]">Ambition.</span>{" "}
            Merged into{" "}
            <span className="text-[#EC3750]">Excellence.</span>
          </motion.p>
        </div>
      </section>

      {/* ── BRUTALIST HERO ──────────────────────────────────────────────── */}
      <div className="bg-black px-4 md:px-6 pb-10">
        <section className="min-h-[90vh] w-full brutalist-container bg-[#F5F5F5] text-black flex flex-col justify-between p-8 md:p-16 relative">
          <div className="flex justify-between items-start w-full">
            <div className="font-[family-name:var(--font-mono)] text-sm font-bold uppercase tracking-widest px-4 py-2 bg-black text-[#FFDE00] rounded-full">
              EST. 2026
            </div>
            <div className="hidden md:flex gap-2">
              <div className="w-4 h-4 rounded-full bg-black" />
              <div className="w-4 h-4 rounded-full bg-black" />
              <div className="w-4 h-4 rounded-full bg-[#FFDE00]" />
            </div>
          </div>

          <div className="w-full mt-16 mb-16">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[12.5vw] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] leading-[0.85] font-black uppercase font-[family-name:var(--font-heading)] text-black"
            >
              THE <br />
              PLACEMENT <br />
              <span
                className="text-[#FFDE00]"
                style={{ WebkitTextStroke: "3px #000" }}
              >
                PROTOCOL
              </span>
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end w-full border-t-[3px] border-black pt-8 gap-6">
            <p className="text-xl md:text-3xl font-black text-black max-w-2xl uppercase">
              From semester one to your first offer letter — we close the gap.
            </p>
            <Link href="/join">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-4 bg-[#FFDE00] text-black border-[3px] border-black rounded-[20px] px-8 py-5 text-xl font-black uppercase cursor-pointer hover:bg-black hover:text-[#FFDE00] transition-colors"
              >
                JOIN US
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </motion.span>
            </Link>
          </div>
        </section>

        {/* ── FEATURES GRID ─────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code,       title: "HARDCORE DEV",     desc: "Full-stack, DSA & system design — everything modern companies test." },
              { icon: Trophy,     title: "HACKATHONS",       desc: "Winning national & international competitions as a team." },
              { icon: Users,      title: "PEER LEARNING",    desc: "Weekly study circles, peer code reviews & mentorship from alumni." },
              { icon: CalendarCheck, title: "ONGOING EVENTS", desc: "Live workshops, contests & networking sessions — click to explore.",
                href: "/events", highlight: true },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                onClick={() => feature.href && (window.location.href = feature.href)}
                className={`brutalist-container p-10 min-h-[300px] flex flex-col justify-between transition-colors cursor-pointer ${
                  feature.highlight
                    ? "bg-[#CCFF00] text-black hover:bg-[#FFDE00]"
                    : "bg-[#F5F5F5] text-black hover:bg-[#FFDE00]"
                }`}
              >
                <feature.icon className="w-16 h-16 text-black" strokeWidth={1.5} />
                <div>
                  <h3 className="text-3xl font-black uppercase font-[family-name:var(--font-heading)] mb-4 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-base font-bold text-black">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
