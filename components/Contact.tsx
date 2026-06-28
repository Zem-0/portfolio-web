"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Phone,
  Download,
  FileText,
} from "lucide-react";
import Reveal from "./Reveal";
import { social } from "@/lib/constants";

const links = [
  { icon: Mail, label: "Email", href: `mailto:${social.email}` },
  { icon: Linkedin, label: "LinkedIn", href: social.linkedin },
  { icon: Github, label: "GitHub", href: social.github },
  { icon: Twitter, label: "Twitter / X", href: social.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent">// contact</p>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Let&apos;s Build Something
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-muted">
            Open to full-time roles, freelance projects, and interesting
            collaborations. I reply fast.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${social.email}`}
            className="mt-8 inline-block font-heading text-2xl font-bold text-accent transition-all hover:underline hover:[text-shadow:0_0_24px_rgba(56,189,248,0.6)] sm:text-3xl"
          >
            {social.email}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <motion.a
              href={social.resume}
              download
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-accent-glow hover:shadow-[0_0_24px_rgba(56,189,248,0.45)]"
            >
              <Download size={17} /> Download Resume
            </motion.a>
            <motion.a
              href={social.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-bright)] px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-accent hover:text-base"
            >
              <FileText size={17} /> View in New Tab
            </motion.a>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={0.15 + i * 0.06}>
              <motion.a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="glass-card flex h-full flex-col items-center gap-2 p-5"
              >
                <link.icon className="text-accent" size={22} />
                <span className="text-sm text-text-muted">{link.label}</span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-col items-center gap-2 text-sm text-text-muted">
            <p className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-accent" /> {social.location}
            </p>
            <a
              href={`tel:${social.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone size={15} className="text-accent" /> {social.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
