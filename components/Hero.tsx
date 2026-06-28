"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Twitter, Mail, Phone, Download } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Terminal from "./Terminal";
import { social } from "@/lib/constants";

/* ---------- Magnetic button ---------- */
function MagneticButton({
  children,
  href,
  variant,
}: {
  children: React.ReactNode;
  href: string;
  variant: "primary" | "secondary";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-accent text-base hover:bg-accent-glow hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
      : "border border-[var(--border-bright)] text-text-primary hover:bg-accent hover:text-base";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className={`${base} ${styles}`}
    >
      <span className="pointer-events-none">{children}</span>
    </motion.a>
  );
}

/* ---------- Typewriter cycling subtitle ---------- */
const PHRASES = [
  "I build agentic AI systems",
  "I ship distributed backends",
  "I deploy full-stack products",
  "I contribute to open source",
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setSub(PHRASES[0]);
      return;
    }

    const current = PHRASES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && sub === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % PHRASES.length);
    } else {
      timeout = setTimeout(
        () => {
          setSub((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? 40 : 70
      );
    }

    return () => clearTimeout(timeout);
  }, [sub, deleting, index]);

  return (
    <span className="text-text-primary">
      {sub}
      <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 animate-blink bg-accent" />
    </span>
  );
}

/* ---------- Floating orb ---------- */
function Orb({
  className,
  x,
  y,
  duration,
}: {
  className: string;
  x: number[];
  y: number[];
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{ filter: "blur(120px)" }}
      animate={{ x, y }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background drifts down, content rises and fades as you scroll past
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Layer 1 — background orbs + grid */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <Orb
          className="left-[-10%] top-[10%] h-[480px] w-[480px] bg-[#1d4ed8] opacity-[0.12]"
          x={[0, 80, 0]}
          y={[0, 60, 0]}
          duration={16}
        />
        <Orb
          className="right-[-5%] top-[20%] h-[420px] w-[420px] bg-[#0ea5e9] opacity-[0.12]"
          x={[0, -70, 0]}
          y={[0, 90, 0]}
          duration={20}
        />
        <Orb
          className="bottom-[-10%] left-[30%] h-[400px] w-[400px] bg-[#38bdf8] opacity-[0.1]"
          x={[0, 60, 0]}
          y={[0, -50, 0]}
          duration={18}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto grid w-full max-w-section grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-2 lg:pt-20"
      >
        {/* Layer 2 — content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-mono text-sm text-accent"
          >
            [ Backend &amp; GenAI Engineer ]
            <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
          </motion.p>

          <h1 className="mt-4 font-heading font-bold tracking-tight text-text-primary">
            <span
              className="block"
              style={{
                fontSize: "clamp(64px, 10vw, 120px)",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              <AnimatedText text="Parinith" delay={0.4} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 font-heading text-2xl font-semibold sm:text-3xl"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-5 max-w-lg text-text-muted"
          >
            From first line of code to production — serving 5,000+ users across
            AI, backend, and cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View My Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Get In Touch
            </MagneticButton>
            <motion.a
              href={social.resume}
              download
              whileHover={{ y: -2 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-bright)] px-7 py-3.5 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-base"
            >
              <Download size={17} /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            {[
              { icon: Twitter, label: "X (Twitter)", href: social.twitter },
              { icon: Mail, label: "Email", href: `mailto:${social.email}` },
              {
                icon: Phone,
                label: "Phone",
                href: `tel:${social.phone.replace(/\s/g, "")}`,
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                whileHover={{ y: -3 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-text-muted transition-colors hover:border-[var(--border-bright)] hover:text-accent"
              >
                <item.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Layer 3 — terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Terminal />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.5 },
          y: { delay: 1.6, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
