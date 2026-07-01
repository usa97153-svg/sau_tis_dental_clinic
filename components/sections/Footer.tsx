import { MessageCircle, Phone } from "lucide-react";
import { CLINIC } from "@/lib/data";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Филиалы", href: "#branches" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark py-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-2xl font-bold text-white italic">Sau Tis</span>
              <span className="text-[11px] tracking-[0.2em] font-semibold text-white/50">
                DENTAL CLINIC
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/45">
              Современная стоматология в Актобе. Забота о вашей улыбке на каждом этапе.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-cta hover:text-dark"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-dark"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={CLINIC.phoneHref}
                aria-label="Телефон"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal-600"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-4">Навигация</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-4">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>{CLINIC.phone}</li>
                <li>{CLINIC.hours}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/80 mb-4">Филиалы</h4>
              <ul className="space-y-2.5 text-sm text-white/50">
                <li>Заводская, 40в, 2 этаж</li>
                <li>Аз Наурыз, 41</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Sau Tis Dental Clinic, Актобе. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
