"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function JoinPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    linkedin: "",
    hackerrank: "",
    leetcode: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("http://localhost:8000/members/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.status === 409) {
        setErrorMsg("This email is already registered!");
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setErrorMsg("Could not reach the server. Make sure the backend is running on port 8000.");
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0A0A0A] border border-neutral-800 text-white placeholder:text-neutral-600 rounded-lg px-4 py-3 font-[family-name:var(--font-mono)] text-sm focus:outline-none focus:border-[#CCFF00] transition-colors";

  const labelClass =
    "block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 font-[family-name:var(--font-mono)]";

  return (
    <div className="flex-1 w-full min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#CCFF00] p-1.5 rounded-sm">
              <Terminal className="w-5 h-5 text-black" strokeWidth={3} />
            </div>
            <span className="text-[#CCFF00] font-bold text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest">
              membership_request.init
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase font-[family-name:var(--font-heading)] leading-none">
            JOIN <span className="text-[#CCFF00]">THE</span>
            <br /> PROTOCOL
          </h1>
          <p className="mt-4 text-neutral-400 font-[family-name:var(--font-mono)] text-sm leading-relaxed">
            [sys.log]: Fill the form below. Our team will review your profile &amp; respond within 48 hours.
          </p>
        </div>

        {/* Terminal card */}
        <div className="terminal-card rounded-xl overflow-hidden">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-2 text-xs text-neutral-500 font-[family-name:var(--font-mono)]">
              new_member_form.tsx
            </span>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 className="w-20 h-20 text-[#CCFF00] mx-auto mb-6" />
                  <h2 className="text-3xl font-black uppercase font-[family-name:var(--font-heading)] mb-3">
                    Request Submitted!
                  </h2>
                  <p className="text-neutral-400 font-[family-name:var(--font-mono)] text-sm">
                    [sys.log]: Welcome aboard, {form.name.split(" ")[0]}. You&apos;ll hear from us shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input name="name" required placeholder="e.g. Arjun Sharma" onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input name="email" type="email" required placeholder="you@college.edu" onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Year of Study *</label>
                      <select name="year" required onChange={handleChange} className={inputClass}>
                        <option value="">Select year</option>
                        {["1st Year", "2nd Year", "3rd Year", "4th Year"].map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Branch / Department *</label>
                      <input name="branch" required placeholder="e.g. CSE, ECE, IT" onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  {/* Profile Links */}
                  <div className="pt-2">
                    <p className="text-xs text-neutral-500 uppercase tracking-widest font-[family-name:var(--font-mono)] mb-4 border-b border-neutral-800 pb-2">
                      &gt; profile_links — all mandatory
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label className={labelClass}>
                          LinkedIn Profile *
                        </label>
                        <input
                          name="linkedin"
                          type="url"
                          required
                          placeholder="https://linkedin.com/in/your-username"
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          HackerRank Profile *
                        </label>
                        <input
                          name="hackerrank"
                          type="url"
                          required
                          placeholder="https://hackerrank.com/your-username"
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          LeetCode Profile *
                        </label>
                        <input
                          name="leetcode"
                          type="url"
                          required
                          placeholder="https://leetcode.com/your-username"
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <label className={labelClass}>Why do you want to join?</label>
                    <textarea
                      name="reason"
                      rows={4}
                      placeholder="Tell us what you want to learn or contribute..."
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 text-red-400 bg-red-900/20 border border-red-800 px-4 py-3 rounded-lg text-sm font-[family-name:var(--font-mono)]">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-[#CCFF00] text-black font-black uppercase tracking-widest text-lg hover:bg-white transition-colors disabled:opacity-50 transform -skew-x-6 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] duration-200"
                  >
                    <span className="inline-flex items-center gap-3 skew-x-6">
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request_"
                      )}
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
