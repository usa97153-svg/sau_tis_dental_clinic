"use client";

import { motion } from "framer-motion";
import {
  Move3D,
  Crown,
  Syringe,
  ScanLine,
  Stethoscope,
  Cpu,
  Radiation,
  Siren,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import FadeUp from "@/components/FadeUp";

const SERVICES = [
  {
    icon: Move3D,
    title: "Ортодонтия",
    desc: "Исправление прикуса брекет-системами и элайнерами для ровной, здоровой улыбки.",
  },
  {
    icon: Crown,
    title: "Ортопедия",
    desc: "Коронки, виниры и протезирование — восстановление функции и эстетики зубов.",
  },
  {
    icon: Syringe,
    title: "Хирургия",
    desc: "Удаление зубов любой сложности, костная пластика, синус-лифтинг.",
  },
  {
    icon: ScanLine,
    title: "Имплантация",
    desc: "Установка имплантов премиальных систем с гарантией и точным цифровым планированием.",
  },
  {
    icon: Stethoscope,
    title: "Пародонтология",
    desc: "Лечение дёсен, профессиональная гигиена и профилактика заболеваний пародонта.",
  },
  {
    icon: Cpu,
    title: "Цифровая стоматология",
    desc: "3D-сканирование и компьютерное планирование лечения для точных результатов.",
  },
  {
    icon: Radiation,
    title: "Рентген",
    desc: "Панорамные снимки и КТ на современном оборудовании прямо в клинике.",
  },
  {
    icon: Siren,
    title: "Неотложка",
    desc: "Срочный приём при острой боли и травмах — без ожидания, каждый день.",
  },
  {
    icon: ClipboardCheck,
    title: "Бесплатная консультация",
    desc: "Осмотр, диагностика и план лечения — первая консультация бесплатно.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container-px mx-auto max-w-7xl">
        <FadeUp className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Услуги
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-dark text-balance">
            Полный спектр стоматологической помощи
          </h2>
          <p className="mt-4 text-lg text-dark/60">
            От профилактики до сложной хирургии — всё под одной крышей, на современном оборудовании.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-teal-100/60 bg-white p-7 shadow-softer transition-shadow hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <s.icon size={22} strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-dark/20 transition-all group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-dark">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
