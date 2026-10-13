import { Onest } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import "../globals.css";
const onest = Onest({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-onest",
});
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} className={onest.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
