import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Виртуалды зертхана — Гармоникалық тербелістер",
  description: "Гармоникалық тербелістердің теңдеулері мен графиктері",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body>{children}</body>
    </html>
  );
}