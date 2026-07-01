"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CLINIC } from "@/lib/data";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Филиалы", href: "#branches" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass bg-white/80 shadow-softer border-b border-teal-100/60" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-baseline gap-1.5 shrink-0">
          <span className="font-display text-2xl font-bold text-teal-700 italic">Sau Tis</span>
          <span className="hidden sm:inline text-[11px] tracking-[0.2em] font-semibold text-dark/60">
            DENTAL CLINIC
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark/70 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-700 hover:shadow-lift hover:-translate-y-0.5"
          >
            Записаться
          </a>
        </div>

        <button
          aria-label="Открыть меню"
          className="lg:hidden text-dark"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass bg-white/95 border-t border-teal-100/60 overflow-hidden"
        >
          <div className="container-px mx-auto flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-dark/80 border-b border-teal-50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Записаться
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
