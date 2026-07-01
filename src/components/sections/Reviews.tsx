"use client";

import { Star, Quote } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import { CLINIC } from "@/lib/data";

const REVIEWS = [
  {
    name: "Айгерим Сагатова",
    text: "Очень довольна результатом! Ставила виниры — врач подробно объяснила все этапы, было совсем не больно. Клиника чистая, современная, персонал вежливый.",
    role: "Ортопедия",
  },
  {
    name: "Данияр Ахметов",
    text: "Обратился с острой болью вечером — приняли в тот же день без записи. Быстро провели диагностику и сняли боль. Спасибо за оперативность!",
    role: "Неотложная помощь",
  },
  {
    name: "Жанар Тлеубердиева",
    text: "Дочке ставили брекеты в Sau Tis — ортодонт нашла подход к ребёнку, всё объясняла спокойно. Через год результат превзошёл ожидания.",
    role: "Ортодонтия",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-mint py-24">
      <div className="container-px mx-auto max-w-7xl">
        <FadeUp className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Отзывы
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-dark text-balance">
            Нам доверяют {CLINIC.reviewsCount}+ пациентов
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </span>
            <span className="text-lg font-semibold text-dark">{CLINIC.rating}</span>
            <span className="text-dark/50">на основе {CLINIC.ratingsCount} оценок</span>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-softer border border-teal-100/60">
                <Quote className="text-teal-100" size={32} fill="currentColor" strokeWidth={0} />
                <div className="mt-2 flex items-center gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-dark/75">{r.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-teal-50 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 font-display text-sm font-bold text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark">{r.name}</div>
                    <div className="text-xs text-dark/50">{r.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
