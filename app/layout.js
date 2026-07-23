import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alif Al Razi — AI Engineer & Software Engineer",
  icons: {
    icon: "/images/letter-a.png",
  },
  description:
    "AI Engineer & Software Engineer building production-grade AI systems, full-stack SaaS products, and intelligent solutions with LLMs, RAG pipelines, and cloud infrastructure.",
  keywords: [
    "AI engineer",
    "software engineer",
    "full stack developer",
    "machine learning",
    "LLM",
    "RAG",
    "Next.js",
    "React",
    "portfolio",
    "Alif Al Razi",
  ],
  authors: [{ name: "Alif Al Razi" }],
  openGraph: {
    title: "Alif Al Razi — AI Engineer & Software Engineer",
    description:
      "Building production-grade AI systems, full-stack SaaS products, and intelligent solutions with LLMs, RAG, and cloud infrastructure.",
    url: "https://alifalrazi.com",
    siteName: "Alif Al Razi Portfolio",
    images: [
      {
        url: "/images/alif.png",
        width: 1200,
        height: 630,
        alt: "Alif Al Razi — AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alif Al Razi — AI Engineer & Software Engineer",
    description:
      "Building production-grade AI systems, full-stack SaaS products, and intelligent solutions.",
    images: ["/images/alif.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Providers>
          {/* Animated gradient mesh background */}
          <div className="gradient-mesh" aria-hidden="true" />

          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
