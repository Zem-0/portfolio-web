"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { social } from "@/lib/constants";

const stats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Users Served" },
  { value: 7, suffix: "", label: "Open Source PRs" },
  { value: 761, suffix: "", label: "LeetCode Solved" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-section px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="font-mono text-sm text-accent">// about me</p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                I turn complex problems into systems that ship.
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5 text-text-muted">
              <Reveal delay={0.1}>
                <p>
                  I&apos;m a Backend and GenAI Engineer based in Bangalore with
                  2+ years of experience building real products used by real
                  people — not just demos. I&apos;ve shipped AI pipelines that
                  cut enterprise workloads by 75%, built platforms serving
                  5,000+ users, and contributed fixes to open-source tools that
                  thousands of developers depend on every day.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  My work spans the full stack: distributed backend systems,
                  LLM-powered agents, React frontends, and cloud deployments on
                  AWS. I care most about one thing — shipping things that hold
                  up in production under real load.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  When I&apos;m not building, I&apos;m on LeetCode (761 solved,
                  120 Hard), contributing to open source, or reading about
                  what&apos;s next in AI infrastructure.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-bright)] px-5 py-3 text-sm font-medium text-text-primary transition-all hover:bg-accent hover:text-base"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-bright)] px-5 py-3 text-sm font-medium text-text-primary transition-all hover:bg-accent hover:text-base"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — 40% : 2x2 stat grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <motion.div
                    whileHover="hover"
                    className="glass-card group h-full p-6"
                  >
                    <motion.div
                      variants={{
                        hover: {
                          textShadow: "0 0 20px rgba(56,189,248,0.8)",
                        },
                      }}
                      className="font-heading text-4xl font-bold text-accent sm:text-5xl"
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </motion.div>
                    <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
