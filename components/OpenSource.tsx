"use client";

import { motion } from "framer-motion";
import { Github, Star } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";

interface PR {
  num?: string;
  text: string;
}

interface Repo {
  repo: string;
  stars: string;
  tag: string;
  github: string;
  desc: string;
  prs: PR[];
}

const repos: Repo[] = [
  {
    repo: "BerriAI/litellm",
    stars: "47,000+",
    tag: "AI Gateway · LLM Infrastructure",
    github: "https://github.com/BerriAI/litellm",
    desc: "LiteLLM is one of the most widely used open-source LLM gateway libraries — a unified interface to 100+ AI models used in production by companies worldwide. Contributed 3 merged PRs fixing critical infrastructure bugs.",
    prs: [
      {
        num: "#27587",
        text: "Fixed silent cost-tracking crash on unrecognized models; added 40 regression tests",
      },
      {
        num: "#27596",
        text: "Patched auth bug in Docker env-file loading that silently failed all providers",
      },
      {
        num: "#27605",
        text: "Wrote regression test catching monthly budget-limit bypass after spend reset",
      },
    ],
  },
  {
    repo: "interviewstreet/hiring-agent",
    stars: "2,000+",
    tag: "AI · Hiring Pipeline",
    github: "https://github.com/interviewstreet/hiring-agent",
    desc: "An AI-powered pipeline that evaluates and scores candidates automatically. Contributed 4 merged PRs improving reliability, safety, and explainability of the scoring system.",
    prs: [
      {
        num: "#242",
        text: "Built hallucination detection layer blocking fabricated achievements (was inflating scores 10–32 pts)",
      },
      {
        num: "#230",
        text: "Fixed pipeline crash on missing resume sections with graceful fallback",
      },
      {
        num: "#225",
        text: "Added Gemini model validation with clear error messages for unsupported models",
      },
      {
        text: "Added score band explanations with actionable improvement tips at zero latency overhead",
      },
    ],
  },
];

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="relative scroll-mt-20 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-section px-6">
        <SectionHeading
          eyebrow="// open source"
          title="Contributing to the Ecosystem"
          subtitle="Shipping fixes to tools used by thousands of developers worldwide"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {repos.map((repo, i) => (
            <Reveal key={repo.repo} delay={i * 0.1}>
              <div className="glass-card group h-full p-7 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-text-primary">
                      {repo.repo}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs text-accent">
                      {repo.tag}
                    </p>
                  </div>
                  <a
                    href={repo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${repo.repo} on GitHub`}
                    className="text-text-muted transition-colors hover:text-accent"
                  >
                    <Github size={22} />
                  </a>
                </div>

                {/* Stars */}
                <div className="mt-4 inline-flex items-center gap-1.5">
                  <Star
                    size={16}
                    className="fill-accent text-accent transition-transform group-hover:scale-110"
                  />
                  <span className="shimmer-text font-mono text-sm font-semibold">
                    {repo.stars} stars
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {repo.desc}
                </p>

                {/* PR list */}
                <ul className="mt-6 space-y-3">
                  {repo.prs.map((pr, pi) => (
                    <li
                      key={pi}
                      className="flex flex-col gap-2 rounded-xl border border-[var(--border)] bg-base-3 p-3.5 sm:flex-row sm:items-start"
                    >
                      <div className="flex shrink-0 items-center gap-2">
                        {pr.num && (
                          <span className="rounded-md bg-base px-2 py-0.5 font-mono text-xs text-accent">
                            {pr.num}
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-md bg-[rgba(74,222,128,0.12)] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#4ade80]">
                          Merged
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-text-muted">
                        {pr.text}
                      </p>
                    </li>
                  ))}
                </ul>

                <a
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[var(--border-bright)] px-5 py-2.5 text-sm font-medium text-text-primary transition-all hover:bg-accent hover:text-base"
                >
                  <Github size={16} /> View Repository
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
