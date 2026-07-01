import { CLINIC } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeUp from "@/components/FadeUp";

const STATS = [
  { value: CLINIC.ratingsCount, suffix: "+", label: "Оценки" },
  { value: CLINIC.rating, decimals: 1, label: "Рейтинг" },
  { value: CLINIC.reviewsCount, suffix: "+", label: "Отзывов" },
  { value: 2, label: "Филиала" },
];

export default function TrustBar() {
  return (
    <section className="bg-dark py-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08} className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-bold text-white">
                <AnimatedCounter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix ?? ""} />
              </div>
              <div className="mt-2 text-sm font-medium tracking-wide text-white/50 uppercase">
                {stat.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
