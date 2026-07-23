"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileText, Mail, Github, Linkedin, Sparkles, Brain, Code2, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Floating particles background
function FloatingParticles() {
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.35 + 0.15,
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
  const heroRef = useRef(null);

  const roles = [
    "Founder @ ToggleITAI",
    "AI & ML Systems Engineer",
    "Full-Stack SaaS Architect",
    "Computer Vision Researcher",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Mouse tilt effect for profile container
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMousePos({ x, y });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
      ref={heroRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-12 bg-gradient-to-b from-[#0f0732] via-[#09031d] to-[#030014] border-b border-violet-500/10"
    >
      {/* High-Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      <FloatingParticles />

      {/* Vibrant Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/25 dark:bg-violet-600/35 rounded-full blur-[140px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/25 dark:bg-cyan-500/30 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[150px] animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative z-10 my-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status pill badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 dark:bg-white/5 border border-violet-500/20 dark:border-violet-500/30 backdrop-blur-md shadow-lg shadow-violet-500/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-violet-300">
                  Founder @ <span className="gradient-text font-bold">ToggleITAI</span> • Available for Global Roles
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-slate-900 dark:text-white leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text drop-shadow-sm">Alif Al Razi</span>
            </motion.h1>

            {/* Dynamic Role Cycling Tagline */}
            <motion.div variants={itemVariants} className="h-12 mb-6 flex items-center justify-center lg:justify-start">
              <motion.div
                key={currentRole}
                initial={{ y: 25, opacity: 0, rotateX: -45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -25, opacity: 0, rotateX: 45 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-violet-600 dark:text-violet-400"
              >
                <Sparkles size={24} className="text-cyan-500 animate-pulse" />
                <span>{roles[currentRole]}</span>
              </motion.div>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Architecting production-grade{" "}
              <span className="text-violet-600 dark:text-violet-400 font-bold">
                AI Systems
              </span>
              , multi-agent{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                LLM Workflows
              </span>
              , and full-stack{" "}
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                SaaS Platforms
              </span>{" "}
              that solve high-impact real world challenges. MSc in AI Candidate @ TU Dublin.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Link
                href="/resume/ALIF_AL_RAZI(CV).pdf"
                target="_blank"
                className="magnetic-btn group inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-7 py-3.5 rounded-xl font-bold shadow-xl shadow-violet-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <FileText size={18} className="group-hover:rotate-12 transition-transform" />
                <span>View Resume</span>
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="magnetic-btn inline-flex items-center gap-2.5 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-violet-500/25 text-slate-900 dark:text-white hover:border-violet-500/50 px-7 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 backdrop-blur-md shadow-md"
              >
                <Mail size={18} className="text-violet-500" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                Connect:
              </span>
              <Link
                href="https://github.com/AlifAlRazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/15 hover:border-violet-500/40 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/alifalrazi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/15 hover:border-violet-500/40 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://wa.me/353894620802"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/15 hover:border-emerald-500/40 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Globe size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Interactive 3D Profile Photo & Floating Badges */}
          <motion.div
            className="relative order-1 lg:order-2 my-4 lg:my-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
              
              {/* Outer Glowing Ring */}
              <div className="profile-ring-outer animate-pulse" />
              {/* Rotating Gradient Ring */}
              <div className="profile-ring" />

              {/* Main Avatar Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-500/40 bg-black shadow-2xl shadow-violet-600/40 z-10">
                {/* Under-Shoulder Glowing Ambient Atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#8b5cf6_0%,#06b6d4_40%,transparent_75%)] opacity-80 z-0" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-violet-500/90 via-cyan-500/50 to-transparent blur-xl z-0 animate-pulse" />

                <Image
                  src="/images/alif.png"
                  alt="Alif Al Razi — AI Engineer"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700 relative z-10"
                  priority
                />

                {/* Upward Shoulder Glow Highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-violet-600/60 via-cyan-400/30 to-transparent mix-blend-screen pointer-events-none z-20" />
              </div>

              {/* Floating Pill Badges around Image */}
              <motion.div
                className="absolute -top-4 -left-6 z-20 glass-card px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border-violet-500/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400">
                  <Brain size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Specialty</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">RAG & Agentic AI</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 -translate-y-1/2 z-20 glass-card px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border-cyan-500/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <Rocket size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Venture</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">ToggleITAI Founder</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-6 z-20 glass-card px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border-blue-500/30"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Code2 size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Education</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">MSc AI @ TU Dublin</p>
                </div>
              </motion.div>

              {/* Ambient Background Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/30 via-cyan-500/20 to-blue-600/30 blur-3xl z-0" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-violet-500">
              Scroll Down
            </span>
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}