"use client";

import { MessageCircle, MapPin, Navigation, Phone } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { BRANCHES, CLINIC, openBranch1, openBranch2 } from "@/lib/data";

const HANDLERS = [openBranch1, openBranch2];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-dark to-teal-700 py-24"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white text-balance">
            Запишитесь на бесплатную консультацию
          </h2>
          <p className="mt-4 text-lg text-white/65">
            Оцените улыбку вместе с нашими врачами — без обязательств и без скрытых платежей.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-semibold text-dark shadow-lift transition-transform hover:scale-[1.03]"
            >
              <MessageCircle size={20} />
              Написать в WhatsApp
            </a>
            <a
              href={CLINIC.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={18} />
              {CLINIC.phone}
            </a>
          </div>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRANCHES.map((branch, i) => (
            <FadeUp key={branch.id} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl bg-white/10 border border-white/10 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-cta" strokeWidth={1.75} />
                  <div>
                    <div className="text-sm font-semibold text-white">{branch.title}</div>
                    <div className="text-sm text-white/60">
                      {branch.address}, {branch.city}
                    </div>
                  </div>
                </div>
                <button
                  onClick={HANDLERS[i]}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-white/90"
                >
                  <Navigation size={15} />
                  2ГИС
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
