import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bruno-folio-8y1g.vercel.app"),
  title: {
    default: "Bruno Lopes | Software Engineer & Full-Stack Developer",
    template: "%s | Bruno Lopes",
  },
  description:
    "Software Engineer specializing in full-stack development, API architecture, and scalable systems. Building modern web applications with React, Next.js, Node.js, and .NET.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    ".NET",
    "Web Development",
    "Portugal",
  ],
  authors: [{ name: "Bruno Lopes" }],
  creator: "Bruno Lopes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bruno-folio-8y1g.vercel.app/",
    siteName: "Bruno Lopes Portfolio",
    title: "Bruno Lopes | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in full-stack development, API architecture, and scalable systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Lopes | Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in full-stack development, API architecture, and scalable systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
