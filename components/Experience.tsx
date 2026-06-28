"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Wrench } from "lucide-react";
import { SectionHeading } from "./Reveal";

interface Achievement {
  title: string;
  impact: string;
  plain: string;
  technical: string;
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  overview: string;
  achievements: Achievement[];
  tech: string[];
}

const jobs: Job[] = [
  {
    company: "OpenText (Documentum) · Fortune 500",
    role: "Software Engineer Intern — AI Infrastructure & Full Stack",
    period: "Sep 2025 – May 2026",
    location: "Bengaluru, India",
    overview:
      "Worked inside a Fortune 500 enterprise software company, building AI tools and backend systems that help internal teams and clients work faster — turning slow, manual tasks into automated ones.",
    achievements: [
      {
        title: "AI assistant that answers data questions in plain English",
        impact: "Query time: 2 hrs → 30 min (75% faster)",
        plain:
          "Normally, when a business analyst needs information from a database, they have to write code (SQL) or wait for an engineer. I built an AI assistant that lets them just type a question in plain English — like “how many orders shipped last month?” — and get the answer instantly. It automatically understands how the company's data is organised, so no one needs to know the technical details.",
        technical:
          "Production agentic text-to-SQL pipeline built with LangChain and FastAPI, using schema injection so the model always knows the live database structure before generating queries.",
      },
      {
        title: "Self-healing system that fixes server problems automatically",
        impact: "60% faster recovery · 40% lower AI cost",
        plain:
          "When software running on servers breaks, someone usually has to read through thousands of confusing error logs to find the cause — which takes a long time. I built a system that uses AI to read those logs, work out what went wrong, and automatically alert the right people or trigger a fix. This means problems get solved much faster.",
        technical:
          "Integrated LLM-based log analysis with PagerDuty auto-remediation, reducing mean-time-to-recovery (MTTR) by 60%. Cut LLM API costs 40% using prompt caching.",
      },
      {
        title: "Automated setup of client software environments",
        impact: "Setup time: 4 hrs → 25 min (90% faster)",
        plain:
          "Setting up a new client's software used to be a slow, manual, step-by-step job that took half a day. I wrote scripts that do the whole setup automatically and reliably, freeing up engineers for more valuable work.",
        technical:
          "Automated client environment provisioning via SSH scripting, removing repetitive manual configuration steps.",
      },
      {
        title: "Reliable pipeline that moves data between 4 database types",
        impact: "85% automated test coverage",
        plain:
          "Big companies store data in many different systems that don't naturally talk to each other. I built a tool that reliably moves and reshapes data across four of these systems, packaged so it runs the same way everywhere, with automated tests that catch problems before they reach users.",
        technical:
          "Dockerized multi-database ETL pipeline (Oracle, PostgreSQL, MySQL, MSSQL) with an async API and 85% test coverage.",
      },
    ],
    tech: ["LangChain", "FastAPI", "Python", "Docker", "PostgreSQL", "AWS"],
  },
  {
    company: "BoardCerts · EdTech Startup",
    role: "Full Stack Engineer — AI-Powered Products",
    period: "Mar 2024 – Aug 2025",
    location: "Remote",
    overview:
      "Helped build an education-technology product end to end — from the backend systems and AI features to the user-facing app — serving thousands of students preparing for professional exams.",
    achievements: [
      {
        title: "AI that writes exam content automatically",
        impact: "2,000 items per run across 50 exams",
        plain:
          "Creating practice questions, flashcards, and exam banks by hand takes educators hours for every single exam. I built an AI system that generates this content automatically — producing thousands of high-quality study items in one run and replacing 4–6 hours of manual work per exam.",
        technical:
          "GPT-4 content generation pipeline auto-producing 2,000 questions, flashcards, and exam banks per run across 50 exams.",
      },
      {
        title: "Made the app respond almost instantly",
        impact: "Response time: 2,000ms → 300ms (85% faster)",
        plain:
          "The app felt slow because it recalculated the same information over and over. I made it remember frequently-used results and reorganised how data is looked up, so pages now load almost instantly for users.",
        technical:
          "Reduced API latency 85% (2,000ms → 300ms) via Redis caching and PostgreSQL indexing.",
      },
      {
        title: "Locked down security with zero audit issues",
        impact: "Zero critical findings in security audit",
        plain:
          "Protecting user accounts and data is essential. I added extra login security (a second verification step and permission levels for different users), defended against common online attacks, and set up a safe way to release updates without downtime. An independent security review found no critical problems.",
        technical:
          "Shipped SuperTokens MFA, JWT/RBAC access control, SSRF protection, and blue-green CI/CD — zero critical findings in the security audit.",
      },
    ],
    tech: ["GPT-4", "React", "Next.js", "Redis", "Supabase", "CI/CD"],
  },
];

function AchievementCard({ a, delay }: { a: Achievement; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl border border-[var(--border)] bg-base-3 p-5"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h4 className="font-heading text-base font-semibold text-text-primary">
          {a.title}
        </h4>
        <span className="shrink-0 rounded-full border border-[var(--border-bright)] bg-base px-3 py-1 font-mono text-xs text-accent">
          {a.impact}
        </span>
      </div>

      {/* Plain English */}
      <div className="mt-4 flex gap-2.5">
        <Sparkles size={15} className="mt-0.5 shrink-0 text-accent" />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
            In plain English
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            {a.plain}
          </p>
        </div>
      </div>

      {/* Technical */}
      <div className="mt-4 flex gap-2.5 border-t border-[var(--border)] pt-4">
        <Wrench size={15} className="mt-0.5 shrink-0 text-text-dim" />
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
            Under the hood
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-dim">
            {a.technical}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-section px-6">
        <SectionHeading
          eyebrow="// work experience"
          title="Where I've Worked"
          subtitle="What I built, explained for everyone — the impact in plain English, and the engineering detail underneath."
        />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent via-[var(--border-bright)] to-transparent sm:left-[9px]" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector dot */}
                <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-base shadow-[0_0_12px_rgba(56,189,248,0.6)] sm:-left-[41px]" />

                <div className="glass-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-text-primary">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-medium text-accent">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right text-sm text-text-muted">
                      <p className="font-mono">{job.period}</p>
                      <p className="mt-1 inline-flex items-center gap-1">
                        <MapPin size={13} /> {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="mt-5 text-sm leading-relaxed text-text-muted">
                    {job.overview}
                  </p>

                  {/* Achievements */}
                  <div className="mt-6 space-y-4">
                    {job.achievements.map((a, ai) => (
                      <AchievementCard
                        key={a.title}
                        a={a}
                        delay={ai * 0.06}
                      />
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] bg-base-3 px-3 py-1 font-mono text-xs text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
