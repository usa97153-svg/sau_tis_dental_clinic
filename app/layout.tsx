import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/700-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sau Tis Dental Clinic — Стоматология в Актобе",
  description:
    "Sau Tis Dental Clinic — современная стоматология в Актобе. Ортодонтия, имплантация, хирургия, цифровая стоматология. Два филиала. Бесплатная консультация. Рейтинг 4.9.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-body bg-white text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
