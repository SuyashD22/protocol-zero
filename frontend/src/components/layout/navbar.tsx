"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Grid3X3, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Portfolio", href: "/portfolio" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group z-50" onClick={() => setIsOpen(false)}>
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring" as const, stiffness: 300 }}
            className="bg-[#CCFF00] p-2 rounded-sm"
          >
            <Terminal className="w-6 h-6 md:w-7 md:h-7 text-black" strokeWidth={3} />
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase group-hover:text-[#CCFF00] transition-colors font-[family-name:var(--font-heading)]">
            Protocol_Zero
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative font-black text-sm tracking-widest uppercase transition-all font-[family-name:var(--font-mono)]",
                    isActive ? "text-[#CCFF00]" : "text-neutral-400 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#CCFF00]"
                      transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Join Button */}
        <div className="hidden md:block">
          <Link
            href="/join"
            className="inline-block px-8 py-3 bg-[#CCFF00] text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-colors transform -skew-x-12 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] duration-200"
          >
            <span className="inline-block transform skew-x-12">Init_Join</span>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8 text-[#CCFF00]" /> : <Grid3X3 className="w-8 h-8 hover:text-[#CCFF00] transition-colors" />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "font-black text-3xl uppercase tracking-widest font-[family-name:var(--font-heading)]",
                          isActive ? "text-[#CCFF00]" : "text-white"
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/join"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-12 py-4 bg-[#CCFF00] text-black font-black text-lg uppercase tracking-widest hover:bg-white transition-colors"
              >
                Init_Join
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
