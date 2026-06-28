"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";

const groups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    label: "AI / ML",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "FAISS",
      "Agentic AI",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Prompt Engineering",
      "YOLOv8",
      "LSTM",
      "Fine-tuning",
    ],
  },
  {
    label: "Backend",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "PostgreSQL",
      "Redis",
      "MySQL",
      "Supabase",
    ],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      "AWS (EC2 · S3 · RDS · Lambda)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform",
      "Vercel",
      "CI/CD",
    ],
  },
];

const exploring = [
  "Rust",
  "Ray (distributed ML)",
  "MLOps",
  "LLM Fine-tuning at scale",
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-section px-6">
        <SectionHeading eyebrow="// tech stack" title="What I Work With" />

        <div className="mt-14 space-y-8">
          {groups.map((group, gi) => (
            <div
              key={group.label}
              className="grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr] sm:items-start"
            >
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {group.label}
              </h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
                className="flex flex-wrap gap-2.5"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 12, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ scale: 1.06 }}
                    className="cursor-default rounded-full border border-[var(--border)] bg-base-3 px-4 py-2 text-sm text-text-muted transition-colors hover:border-[var(--border-bright)] hover:text-accent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
            Currently Exploring
          </span>
          <div className="flex flex-wrap gap-2.5">
            {exploring.map((item) => (
              <span
                key={item}
                className="rounded-full border border-dashed border-[var(--border)] px-3.5 py-1.5 text-sm text-text-dim"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
