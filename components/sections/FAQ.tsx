"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { CLINIC } from "@/lib/data";

const FAQS = [
  {
    q: "Как записаться на приём?",
    a: `Проще всего написать нам в WhatsApp — ответим в течение нескольких минут и подберём удобное время. Также можно позвонить по телефону ${CLINIC.phone} или написать в Instagram.`,
  },
  {
    q: "Сколько стоит лечение?",
    a: "Стоимость зависит от объёма и сложности лечения. Точную цену вы узнаете на бесплатной консультации после осмотра и диагностики — никаких скрытых платежей.",
  },
  {
    q: "В чём разница между филиалами?",
    a: "Оба филиала работают по единому стандарту качества и с одинаковым перечнем услуг. Выбирайте тот, что ближе к вам — на Заводской, 40в или на Аз Наурыз, 41.",
  },
  {
    q: "Что делать при острой зубной боли?",
    a: "Мы принимаем неотложных пациентов ежедневно без предварительной записи. Позвоните нам или приезжайте в ближайший филиал — снимем боль и проведём диагностику.",
  },
  {
    q: "Работаете ли вы по выходным?",
    a: "Да, клиника работает ежедневно, без выходных, с 09:30 до 19:00 — включая субботу и воскресенье.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="container-px mx-auto max-w-3xl">
        <FadeUp className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-dark text-balance">
            Частые вопросы
          </h2>
        </FadeUp>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeUp key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-teal-100/70 bg-mint/40">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-semibold text-dark">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-dark/65">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
