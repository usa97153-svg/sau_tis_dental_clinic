"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  Move3D,
  Syringe,
  ScanLine,
  ClipboardCheck,
  UserCheck,
  Cpu,
  ShieldCheck,
  CalendarCheck,
  Star,
} from "lucide-react";
import { CLINIC } from "@/lib/data";

const FLOAT_CARDS = [
  { icon: Move3D, label: "Ортодонтия", pos: "top-[2%] left-0 sm:left-[4%]", delay: 0 },
  { icon: ScanLine, label: "Имплантация", pos: "top-[20%] right-0 sm:right-[2%]", delay: 0.6 },
  { icon: Syringe, label: "Хирургия", pos: "bottom-[34%] left-0 sm:left-[-2%]", delay: 1.1 },
  { icon: Cpu, label: "Цифровая", pos: "bottom-[12%] right-0 sm:right-[6%]", delay: 0.3 },
  { icon: ClipboardCheck, label: "Консультация", pos: "bottom-[-4%] left-[20%] sm:left-[26%]", delay: 0.9 },
];

const TRUST_ITEMS = [
  { icon: UserCheck, label: "Индивидуальный подход" },
  { icon: Cpu, label: "Современные технологии" },
  { icon: ShieldCheck, label: "Безопасность лечения" },
  { icon: CalendarCheck, label: "Удобная запись" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mint pt-32 pb-16 md:pt-40 md:pb-24">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-teal-100/70 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white px-4 py-2 shadow-softer"
            >
              <span className="flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-sm font-semibold text-dark">{CLINIC.rating}</span>
              <span className="text-sm text-dark/50">
                · {CLINIC.ratingsCount} оценки · {CLINIC.reviewsCount} отзывов
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.08] text-dark text-balance"
            >
              Улыбка, которой{" "}
              <span className="italic text-teal-600">вы достойны</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg text-dark/65 leading-relaxed"
            >
              Современная стоматология в Актобе. Два филиала. Бесплатная консультация.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-white shadow-lift transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageCircle size={20} />
                Записаться в WhatsApp
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-600 px-8 py-4 text-base font-semibold text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
              >
                Наши услуги
              </a>
            </motion.div>
          </div>

          {/* Right: visual with floating cards */}
          <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative flex h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-dark shadow-lift"
              >
                <div className="absolute inset-4 rounded-full border border-white/15" />
                <Sparkles className="text-white/90" size={64} strokeWidth={1.25} />
                <svg
                  className="absolute bottom-[26%] left-1/2 -translate-x-1/2"
                  width="120"
                  height="40"
                  viewBox="0 0 120 40"
                  fill="none"
                >
                  <path
                    d="M4 6C20 34 100 34 116 6"
                    stroke="white"
                    strokeOpacity="0.85"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>

            {FLOAT_CARDS.map(({ icon: Icon, label, pos, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 + delay * 0.2 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
                }}
                className={`absolute ${pos} z-10 flex items-center gap-2 sm:gap-2.5 rounded-2xl bg-white px-3 py-2.5 sm:px-4 sm:py-3 shadow-lift border border-teal-50`}
              >
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon size={16} strokeWidth={1.75} className="sm:hidden" />
                  <Icon size={18} strokeWidth={1.75} className="hidden sm:block" />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-dark whitespace-nowrap">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-teal-600/10 pt-10"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-teal-600 shadow-softer">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-dark/70 leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
