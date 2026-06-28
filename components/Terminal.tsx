"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Each line carries a "type" used for coloring:
 *  - prompt: the `$ ...` command lines (green-tinted)
 *  - output: `> ...` lines (accent blue)
 *  - plain:  json / values (white-ish)
 */
type LineType = "prompt" | "output" | "plain";

interface Line {
  type: LineType;
  text: string;
}

const LINES: Line[] = [
  { type: "prompt", text: "$ whoami" },
  { type: "output", text: "> parinith — backend & genai engineer" },
  { type: "plain", text: "" },
  { type: "prompt", text: "$ cat skills.json" },
  { type: "plain", text: "{" },
  { type: "plain", text: '  "languages": ["Python", "TypeScript", "Java"],' },
  { type: "plain", text: '  "ai_stack":  ["LangChain", "RAG", "Agents"],' },
  { type: "plain", text: '  "backend":   ["FastAPI", "Node.js", "Redis"],' },
  { type: "plain", text: '  "cloud":     ["AWS", "Docker", "Kubernetes"]' },
  { type: "plain", text: "}" },
  { type: "plain", text: "" },
  { type: "prompt", text: "$ ls projects/" },
  { type: "output", text: "> llm-gateway/  code-review-agent/" },
  { type: "output", text: "> job-copilot/  traffic-ai/  ..." },
  { type: "plain", text: "" },
  { type: "prompt", text: "$ git log --oneline" },
  { type: "output", text: "> 7 PRs merged to 47k★ repos" },
  { type: "output", text: "> LiteLLM · HackerRank Hiring Agent" },
  { type: "plain", text: "" },
  { type: "prompt", text: "$ _" },
];

const CHAR_DELAY = 18; // ms per character
const LINE_PAUSE = 180; // ms between lines

function colorClass(type: LineType) {
  if (type === "prompt") return "text-[#4ade80]"; // green-tinted prompts
  if (type === "output") return "text-accent"; // accent blue
  return "text-[#e2eaf8]"; // white values
}

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedRef.current) {
      setLineIndex(LINES.length);
      setDone(true);
    }
  }, []);

  useEffect(() => {
    if (done || reducedRef.current) return;
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }

    const current = LINES[lineIndex].text;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_DELAY);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, LINE_PAUSE);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, done]);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[var(--border-bright)] bg-[#020408] shadow-[0_0_50px_rgba(56,189,248,0.08)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[#05080f] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-text-muted">
          ~/parinith
        </span>
      </div>

      {/* Body */}
      <div className="h-[420px] overflow-hidden p-5 font-mono text-[13px] leading-6 sm:text-sm">
        {LINES.map((line, i) => {
          if (i > lineIndex) return null;
          const text =
            i === lineIndex && !done ? line.text.slice(0, charIndex) : line.text;
          const showCursor = i === lineIndex && !done;
          const isLast = i === LINES.length - 1;
          return (
            <div key={i} className={`whitespace-pre ${colorClass(line.type)}`}>
              {text || " "}
              {(showCursor || (done && isLast)) && (
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
