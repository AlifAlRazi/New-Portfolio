"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileText, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Animated text that reveals character by character
function AnimatedText({ text, className, delay = 0 }) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

// Floating dots background for hero
function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-dot"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Founder @ ToggleITAI",
    "AI Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "ML Researcher",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <FloatingParticles />

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-[128px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[128px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[128px] animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Founder @ ToggleITAI • Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Alif</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div variants={itemVariants} className="h-12 mb-6 overflow-hidden">
              <motion.p
                key={currentRole}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl md:text-3xl font-bold text-violet-600 dark:text-violet-400"
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building innovative, production-grade{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">
                AI systems
              </span>{" "}
              and full-stack{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                SaaS products
              </span>{" "}
              that drive real-world impact across tech, fintech, and digital
              transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/resume/ALIF_AL_RAZI(CV).pdf"
                target="_blank"
                className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <FileText size={18} />
                View Resume
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="magnetic-btn inline-flex items-center gap-2 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-violet-500/20 text-slate-900 dark:text-white hover:border-violet-500/40 px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <Link
                href="https://github.com/AlifAlRazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 hover:border-violet-500/30 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/alifalrazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 hover:border-violet-500/30 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div className="profile-ring-outer" />
              {/* Rotating gradient ring */}
              <div className="profile-ring" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 dark:border-white/5 shadow-2xl z-10">
                <Image
                  src="/images/alif.png"
                  alt="Alif Al Razi — AI Engineer"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl z-0" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Scroll
            </span>
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}