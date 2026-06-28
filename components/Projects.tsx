"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Target, Cog, Layers } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";

interface Project {
  name: string;
  badge: string;
  desc: string;
  stack: string[];
  github: string;
  live?: string;
}

interface FeaturedProject extends Project {
  problem: string;
  how: string;
  stackDetail: { tool: string; role: string }[];
}

const featured: FeaturedProject[] = [
  {
    name: "Multi-Provider LLM Inference Gateway",
    badge: "AI Infrastructure",
    desc: "",
    problem:
      "Apps that rely on AI providers (Gemini, Groq, Mistral, NVIDIA) are fragile: each has different APIs, rate limits, pricing, and downtime. If your one provider goes down or throttles you, your whole product breaks — and there's no easy way to see how much each is actually costing you.",
    how: "I built a single self-hosted gateway that sits between an app and four AI providers. The app talks to one unified API, and behind the scenes the gateway picks an available provider, instantly reroutes to another if one fails or hits a rate limit (automatic failover), enforces rate limits, and records the exact cost of every request in real time. Think of it as a smart traffic controller for AI APIs.",
    stack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    stackDetail: [
      { tool: "FastAPI", role: "the unified API layer apps call" },
      { tool: "Redis", role: "fast rate-limit counters + response caching" },
      { tool: "PostgreSQL", role: "stores per-provider usage & cost history" },
      { tool: "Docker", role: "packaged for one-command self-hosting" },
    ],
    github: "https://github.com/Zem-0/Multi-Provider-LLM-Inference-Gateway",
  },
  {
    name: "Autonomous Code Review Agent",
    badge: "Agentic AI",
    desc: "",
    problem:
      "Code reviews are slow and inconsistent. Human reviewers are busy, miss bugs and security issues, and a review can take hours or days — blocking the whole team from shipping.",
    how: "An AI agent that plugs into GitHub. The moment a pull request opens, it pulls the code changes and runs several checks in parallel — looking for bugs, security vulnerabilities, and bad patterns — then posts clear, structured feedback straight onto the PR in under 10 seconds. It also remembers findings over time, so it can flag issues that keep coming back across different PRs.",
    stack: ["Python", "LangChain", "GPT-4", "FastAPI", "Docker", "PostgreSQL"],
    stackDetail: [
      { tool: "LangChain", role: "orchestrates the review agent's steps" },
      { tool: "GPT-4", role: "the reasoning engine that reads the code" },
      { tool: "FastAPI", role: "webhook server that listens for new PRs" },
      { tool: "PostgreSQL", role: "tracks recurring issues across PRs" },
    ],
    github: "https://github.com/Zem-0/Autonomous-Code-Review-Agent",
  },
  {
    name: "Job Copilot — Multi-LLM Resume SaaS",
    badge: "Full Stack SaaS",
    desc: "",
    problem:
      "Job seekers can't tell how well their resume matches a specific job, and tailoring it is pure guesswork. Most tools also lock you into a single AI provider.",
    how: "A live SaaS product where you paste your resume and a job description and get a match score plus concrete, actionable feedback in under 60 seconds. It supports multiple AI engines (OpenAI, Anthropic, and locally-run Ollama), so it isn't tied to one vendor. Every user gets their own private history and an application-tracking dashboard, and updates ship with zero downtime.",
    stack: ["FastAPI", "LangChain", "React", "TypeScript", "Supabase", "Docker"],
    stackDetail: [
      { tool: "FastAPI + LangChain", role: "scoring backend & multi-LLM routing" },
      { tool: "React + TypeScript", role: "the user-facing dashboard" },
      { tool: "Supabase", role: "auth + per-user (multi-tenant) data" },
      { tool: "Vercel CI/CD", role: "zero-downtime deployments" },
    ],
    github: "https://github.com/Zem-0/Job-copilot",
    live: "https://job-copilot-self.vercel.app",
  },
  {
    name: "AI-Powered Smart Traffic Management System",
    badge: "ML / Computer Vision",
    desc: "",
    problem:
      "Most traffic lights run on fixed timers, so a green light can stay on for an empty road while a packed road waits. That wastes time, fuel, and patience — and causes avoidable congestion.",
    how: "A system that watches live traffic through cameras, uses computer vision (YOLO) to detect and count vehicles in each lane in real time, and a forecasting model (LSTM) to predict incoming flow. Instead of fixed timers, it gives green-light time based on actual demand. In simulation it cut average queue length by 72.9%. This was my B.Tech final-year project.",
    stack: ["Python", "YOLOv8", "LSTM", "TensorFlow", "Pygame"],
    stackDetail: [
      { tool: "YOLOv8", role: "real-time vehicle detection & counting" },
      { tool: "LSTM / TensorFlow", role: "predicts upcoming traffic flow" },
      { tool: "Pygame", role: "simulates junctions to test the model" },
    ],
    github: "https://github.com/Zem-0/AI-Powered-Smart-Traffic-Management-System",
  },
];

const featuredNames = new Set(featured.map((f) => f.name));

const projects: Project[] = [
  {
    name: "Bank Transaction Dashboard",
    badge: "Full Stack / Fintech",
    desc: "A fintech-style dashboard that parses UPI transaction messages, auto-categorises spending, computes analytics, and highlights cashback savings. All business logic lives backend-side — the frontend just renders clean, real-time insights.",
    stack: ["JavaScript", "Python", "REST APIs"],
    github: "https://github.com/Zem-0/bank-transaction-dashboard",
  },
  {
    name: "Lip Reader — Deep Learning",
    badge: "Computer Vision",
    desc: "A deep learning model that reads lip movements from video and converts them to text — no audio needed. Built using sequence modelling on visual frames to interpret speech purely from lip motion.",
    stack: ["Python", "Deep Learning", "Computer Vision", "Jupyter"],
    github: "https://github.com/Zem-0/lip-reader-",
  },
  {
    name: "AI Legal Assistant",
    badge: "Agentic AI / RAG",
    desc: "An AI assistant that navigates legal documents and answers queries in plain English — making legal information accessible through RAG-based document retrieval and LLM reasoning.",
    stack: ["Python", "LLMs", "RAG", "FastAPI"],
    github: "https://github.com/Zem-0/AI--Legal-Assistant",
  },
  {
    name: "HackerRank Hiring Agent Contributions",
    badge: "Open Source",
    desc: "Contributed 4 merged PRs to HackerRank's AI hiring pipeline — including a hallucination detection layer that prevented AI from inflating candidate scores by 10–32 points, and graceful handling of missing resume sections.",
    stack: ["Python", "AI Agents"],
    github: "https://github.com/interviewstreet/hiring-agent",
  },
].filter((p) => !featuredNames.has(p.name));

function FeaturedCard({ p, index }: { p: FeaturedProject; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="glass-card h-full p-7 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="rounded-full border border-[var(--border-bright)] px-3 py-1 font-mono text-xs text-accent">
              {p.badge}
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold text-text-primary">
              {p.name}
            </h3>
          </div>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.name} on GitHub`}
            className="shrink-0 text-text-muted transition-colors hover:text-accent"
          >
            <Github size={20} />
          </a>
        </div>

        {/* What it solved */}
        <div className="mt-6 flex gap-2.5">
          <Target size={16} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              What it solved
            </p>
            <p className="mt-1 text-sm leading-relaxed text-text-primary">
              {p.problem}
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-5 flex gap-2.5">
          <Cog size={16} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              How it works
            </p>
            <p className="mt-1 text-sm leading-relaxed text-text-primary">
              {p.how}
            </p>
          </div>
        </div>

        {/* What I used */}
        <div className="mt-5 flex gap-2.5 border-t border-[var(--border)] pt-5">
          <Layers size={16} className="mt-0.5 shrink-0 text-accent" />
          <div className="w-full">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
              What I used
            </p>
            <ul className="mt-2 space-y-1.5">
              {p.stackDetail.map((s) => (
                <li key={s.tool} className="text-sm text-text-muted">
                  <span className="font-semibold text-text-primary">
                    {s.tool}
                  </span>{" "}
                  — {s.role}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stack tags + live */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-base-3 px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
              {s}
            </span>
          ))}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-glow"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-section px-6">
        <SectionHeading
          eyebrow="// things i've built"
          title="Projects"
          subtitle="AI systems, developer tools, and full-stack applications — built to solve real problems"
        />

        {/* Featured — detailed breakdowns */}
        <Reveal>
          <p className="mt-12 font-mono text-sm text-accent">
            ★ Featured — a closer look
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedCard key={p.name} p={p} index={i} />
          ))}
        </div>

        {/* More projects — compact grid */}
        <Reveal>
          <p className="mt-16 font-mono text-sm text-accent">
            ▸ More projects
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded-full border border-[var(--border-bright)] px-3 py-1 font-mono text-xs text-accent">
                  {project.badge}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="text-text-muted transition-colors hover:text-accent"
                >
                  <Github size={20} />
                </a>
              </div>

              <h3 className="mt-4 font-heading text-lg font-bold text-text-primary">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {project.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-base-3 px-2.5 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-glow"
                >
                  Live Demo <ExternalLink size={15} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
