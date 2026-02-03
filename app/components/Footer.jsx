"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wide">
              © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-teal-400">Alif</span>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/ALIF-AL-RAZI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <Github size={22} strokeWidth={2.5} />
            </Link>
            <Link
              href="https://linkedin.com/in/alif-al-razi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={2.5} />
            </Link>
            <Link
              href="mailto:alifalrazi1@gmail.com"
              className="text-slate-400 hover:text-rose-500 transition-all hover:scale-110 active:scale-95"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}