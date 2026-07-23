"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Heart, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/AlifAlRazi",
      icon: Github,
      label: "GitHub",
      hoverColor: "hover:text-slate-900 dark:hover:text-white",
    },
    {
      href: "https://linkedin.com/in/alifalrazi",
      icon: Linkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      href: "https://wa.me/353894620802",
      icon: MessageCircle,
      label: "WhatsApp",
      hoverColor: "hover:text-emerald-500",
    },
    {
      href: "mailto:alifalrazi1@gmail.com",
      icon: Mail,
      label: "Email",
      hoverColor: "hover:text-violet-600 dark:hover:text-violet-400",
    },
  ];

  return (
    <footer className="relative py-12 px-4">
      {/* Gradient divider */}
      <div className="section-divider mb-12" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Left: Logo + Copyright */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-black gradient-text mb-1 inline-block"
            >
              ALIF.
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Alif Al Razi. All rights reserved.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-violet-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-violet-500 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-violet-500 transition-colors">
              Projects Archive
            </Link>
            <Link href="/blog" className="hover:text-violet-500 transition-colors">
              Blog
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 text-slate-400 ${social.hoverColor} hover:border-violet-500/30 transition-all hover:scale-110 active:scale-95`}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Center: Built by ToggleITAI */}
        <div className="text-center pt-6 border-t border-slate-100 dark:border-white/5">
          <p className="text-xs text-slate-400 dark:text-slate-500 flex flex-wrap items-center justify-center gap-1.5">
            <span>Built by</span>
            <Link
              href="https://www.toggleitai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-violet-600 dark:text-violet-400 hover:underline"
            >
              <Image
                src="/images/toggleit_logo.png"
                alt="ToggleITAI Logo"
                width={18}
                height={18}
                className="object-contain inline-block"
              />
              <span>ToggleITAI</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}