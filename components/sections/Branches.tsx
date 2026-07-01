"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { BRANCHES, CLINIC, openBranch1, openBranch2 } from "@/lib/data";

const HANDLERS = [openBranch1, openBranch2];

export default function Branches() {
  return (
    <section id="branches" className="bg-mint py-24">
      <div className="container-px mx-auto max-w-7xl">
        <FadeUp className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Филиалы
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-dark text-balance">
            Два филиала в Актобе
          </h2>
          <p className="mt-4 text-lg text-dark/60">
            Выбирайте удобное расположение — оба филиала работают ежедневно с одинаково высоким стандартом сервиса.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRANCHES.map((branch, i) => (
            <FadeUp key={branch.id} delay={i * 0.12}>
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft border border-teal-100/60 h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white font-display text-lg font-bold">
                    {branch.id}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-dark">{branch.title}</h3>
                </div>

                <div className="mt-6 space-y-3 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-teal-600" strokeWidth={1.75} />
                    <p className="text-dark/75">
                      {branch.address}, {branch.city}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="mt-0.5 shrink-0 text-teal-600" strokeWidth={1.75} />
                    <p className="text-dark/75">{CLINIC.hours}</p>
                  </div>
                </div>

                <button
                  onClick={HANDLERS[i]}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lift"
                >
                  <Navigation size={17} />
                  Открыть в 2ГИС
                </button>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
