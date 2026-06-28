"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: SectionHeadingProps) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-text-muted ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
