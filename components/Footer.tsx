import { navLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-section flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-text-muted">
          © 2026 Parinith. Built with Next.js.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
