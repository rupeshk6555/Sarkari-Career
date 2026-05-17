import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarkari Career Hub",
  description:
    "Fast updates on government jobs, results, admit cards, syllabus, and education news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
