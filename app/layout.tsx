import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelpDesk AI — AI-Powered Support for Modern Teams",
  description:
    "Automatically route tickets to the right technician with AI. Reduce response times, eliminate manual assignment, and keep your team focused. Join the early access program.",
  openGraph: {
    title: "HelpDesk AI — AI-Powered Support for Modern Teams",
    description:
      "Automatically route tickets to the right technician. Reduce response times and eliminate manual assignment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
