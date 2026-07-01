"use client";

import { Check, Sparkles } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { CLINIC } from "@/lib/data";

const PLANS = [
  {
    title: "Консультация",
    price: "Бесплатно",
    note: "Осмотр и план лечения",
    features: ["Первичный осмотр", "Диагностика", "План лечения", "Расчёт стоимости"],
    highlighted: false,
  },
  {
    title: "Лечение кариеса",
    price: "от 10 000 ₸",
    note: "За один зуб",
    features: ["Анестезия", "Современные материалы", "Гарантия качества", "Полировка пломбы"],
    highlighted: true,
  },
  {
    title: "Имплантация",
    price: "от 180 000 ₸",
    note: "Под ключ, с коронкой",
    features: ["3D-планирование", "Премиальные импланты", "Хирургический протокол", "Гарантия"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container-px mx-auto max-w-7xl">
        <FadeUp className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Цены
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-dark text-balance">
            Прозрачные цены, честный подход
          </h2>
          <p className="mt-4 text-lg text-dark/60">
            Точную стоимость лечения вы узнаете уже на бесплатной консультации.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <FadeUp key={plan.title} delay={i * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-dark text-white shadow-lift scale-[1.03] border border-teal-600/40"
                    : "bg-mint text-dark border border-teal-100/60 shadow-softer"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-dark">
                    <Sparkles size={13} /> Популярно
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold">{plan.title}</h3>
                <div className={`mt-4 font-display text-4xl font-bold ${plan.highlighted ? "text-cta" : "text-teal-700"}`}>
                  {plan.price}
                </div>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-white/60" : "text-dark/55"}`}>{plan.note}</p>

                <ul className="mt-7 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Check
                        size={17}
                        className={plan.highlighted ? "text-cta" : "text-teal-600"}
                        strokeWidth={2.5}
                      />
                      <span className={plan.highlighted ? "text-white/85" : "text-dark/75"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-cta text-dark hover:bg-cta/90"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
                >
                  Записаться
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
