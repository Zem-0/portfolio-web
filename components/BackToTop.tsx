"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-base shadow-[0_0_24px_rgba(56,189,248,0.4)] transition-colors hover:bg-accent-glow sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
