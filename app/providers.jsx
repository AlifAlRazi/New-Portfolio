"use client";

import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {children}
    </ThemeProvider>
  );
}