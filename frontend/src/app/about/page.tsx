"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <div className="flex-1 w-full pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            ABOUT <span className="text-blue-500">US</span>
          </h1>
          <p className="text-xl md:text-3xl text-neutral-400 font-medium leading-snug text-balance">
            Protocol Zero was founded on a simple principle: academic curriculum alone isn't enough to crack modern tech interviews. We are the bridge to the industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We envision a campus where every student has the practical skills, the right network, and the confidence to land their dream role in top tier tech companies. We focus on DSA, System Design, and Modern Web Development.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">The Protocol</h2>
            <ul className="space-y-4 text-neutral-400 text-lg">
              <li className="flex items-start gap-3">
                <Terminal className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <span>Weekly mock interviews and competitive programming contests.</span>
              </li>
              <li className="flex items-start gap-3">
                <Terminal className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <span>Hands-on workshops building real-world applications.</span>
              </li>
              <li className="flex items-start gap-3">
                <Terminal className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                <span>Direct mentorship from alumni in FAANG and top startups.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
