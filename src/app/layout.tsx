import "./globals.css";

import { Nunito_Sans, Nunito } from "next/font/google";
import clsx from "clsx";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nunitoSans.variable, nunito.variable)}>
        <Header />
        <div className="grid gap-12 mx-auto max-w-6xl">{children}</div>
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0" />
      </body>
    </html>
  );
}
