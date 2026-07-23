"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "GitHub", id: "github" },
  { label: "Research", id: "research" },
  { label: "Blog", isPage: true, href: "/blog" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = navLinks.filter((l) => !l.isPage).map((l) => l.id);
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        setActiveSection(currentSection || "");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navigateToSection = (link) => {
    setIsOpen(false);

    if (link.isPage) {
      router.push(link.href);
      return;
    }

    if (pathname === "/") {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${link.id}`);
    }
  };

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4">
        <nav
          className={cn(
            "flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500",
            scrolled
              ? "bg-[#0f0a28]/80 backdrop-blur-xl border border-violet-500/10 shadow-lg shadow-violet-500/5"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-black tracking-tight gradient-text hover:opacity-80 transition-opacity"
          >
            ALIF.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigateToSection(link)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg flex items-center gap-1",
                  activeSection === link.id || (link.isPage && pathname === link.href)
                    ? "text-violet-400 font-bold"
                    : "text-slate-400 hover:text-slate-100"
                )}
              >
                {link.label}
                {link.isPage && <ExternalLink size={12} className="opacity-60" />}
                {(activeSection === link.id || (link.isPage && pathname === link.href)) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side: Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              className="p-2.5 rounded-xl bg-white/5 border border-violet-500/10 text-slate-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-2 p-4 rounded-2xl bg-[#0f0a28]/95 backdrop-blur-xl border border-violet-500/10 shadow-xl"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => navigateToSection(link)}
                    className={cn(
                      "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between",
                      activeSection === link.id || (link.isPage && pathname === link.href)
                        ? "text-violet-400 bg-violet-500/10 font-bold"
                        : "text-slate-400 hover:bg-white/5"
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span>{link.label}</span>
                    {link.isPage && <ExternalLink size={14} className="opacity-60" />}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}