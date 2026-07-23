"use client";

import { Download, MapPin, Mail, Phone, GraduationCap, Sparkles, ArrowRight, Rocket, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 1. Main About Card — Full Background Picture (NSU Campus) */}
          <motion.div
            className="glass-card overflow-hidden relative p-8 md:col-span-2 flex flex-col justify-between group min-h-[280px]"
            variants={itemVariants}
          >
            {/* Full Card Background Image */}
            <Image
              src="/images/NSU.jpg"
              alt="North South University"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 z-0 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70 z-10" />

            <div className="relative z-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-white">
                  Personal Summary
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                AI & software engineer and founder with a strong background in computer science, machine learning, and computer vision. Founder @{" "}
                <span className="text-violet-400 font-bold">ToggleITAI</span>, building innovative, production-grade AI systems that drive real-world impact across SaaS, tech, and digital transformation.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                Experienced in full-stack SaaS development, cloud infrastructure, and deploying intelligent solutions with{" "}
                <span className="text-violet-300 font-semibold">LLMs</span>,{" "}
                <span className="text-cyan-300 font-semibold">RAG pipelines</span>, and{" "}
                <span className="text-blue-300 font-semibold">agentic workflows</span>.
              </p>
            </div>

            <div className="relative z-20 mt-6 pt-4 border-t border-white/10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors group/link"
              >
                Learn More About My Background
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* 2. ToggleITAI Company Card — Full Background Picture */}
          <motion.div
            className="glass-card overflow-hidden relative p-6 flex flex-col justify-between group min-h-[280px] border-violet-500/40"
            variants={itemVariants}
          >
            {/* Full Background Image */}
            <Image
              src="/images/toggleit_real.png"
              alt="ToggleITAI"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40 z-10" />

            <div className="relative z-20">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 inline-flex mb-3 shadow-lg shadow-violet-500/20">
                <Rocket size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-1">
                Company & Venture
              </p>
              <h4 className="text-2xl font-black text-white mb-2">
                ToggleITAI
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Building next-generation AI SaaS products, custom LLM agentic workflows, and automated enterprise AI systems.
              </p>
            </div>

            <div className="relative z-20 mt-4">
              <Link
                href="https://www.toggleitai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-300 hover:text-white transition-colors bg-black/40 px-3 py-1.5 rounded-lg border border-violet-500/30 backdrop-blur-md"
              >
                Visit toggleitai.com <ExternalLink size={12} />
              </Link>
            </div>
          </motion.div>

          {/* 3. Location Card — Full Background Picture (Galway.jpg) */}
          <motion.div
            className="glass-card overflow-hidden flex flex-col justify-between group relative p-6 min-h-[250px]"
            variants={itemVariants}
          >
            <Image
              src="/images/Galway.jpg"
              alt="Galway, Ireland"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30 z-10" />

            <div className="relative z-20 flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-emerald-500/80 backdrop-blur-md text-white shadow-lg shadow-emerald-500/20">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                Current Location
              </span>
            </div>

            <div className="relative z-20 mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-0.5">
                Based in
              </p>
              <h4 className="text-2xl font-black text-white drop-shadow-md">
                Galway, Ireland
              </h4>
              <p className="text-xs font-medium text-slate-300 mt-1">
                Open to remote & global collaboration
              </p>
            </div>
          </motion.div>

          {/* 4. Education Card — Full Background Picture (TU Dublin) */}
          <motion.div
            className="glass-card overflow-hidden relative p-6 flex flex-col justify-between group min-h-[250px]"
            variants={itemVariants}
          >
            {/* Full Background Image */}
            <Image
              src="/images/TUD.jpg"
              alt="Technological University Dublin"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/50 z-10" />

            <div className="relative z-20">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 inline-flex shadow-lg shadow-blue-500/20">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-blue-300 border border-blue-500/30">
                  TU Dublin & NSU
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                Education
              </p>

              <div className="space-y-3">
                <div>
                  <p className="font-bold text-white text-sm">
                    MSc in Computing — AI
                  </p>
                  <p className="text-xs text-slate-300">
                    Technological University Dublin (2025–2026)
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-bold text-white text-sm">
                    BSc in CSE
                  </p>
                  <p className="text-xs text-slate-300">
                    North South University (CGPA: 3.51)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Contact Card — Full Glassmorphism Backdrop */}
          <motion.div
            className="glass-card p-6 flex flex-col justify-between group"
            variants={itemVariants}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
                Get in Touch
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:alifalrazi1@gmail.com"
                  className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover/item:bg-violet-500/20 transition-colors">
                    <Mail size={16} className="text-violet-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 group-hover/item:text-violet-300 transition-colors">
                    alifalrazi1@gmail.com
                  </span>
                </a>
                <a
                  href="https://wa.me/353894620802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover/item:bg-emerald-500/20 transition-colors">
                    <Phone size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200 group-hover/item:text-emerald-300 transition-colors">
                    WhatsApp: +353 894 620 802
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/resume/ALIF_AL_RAZI(CV).pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02]"
              >
                <Download size={14} />
                Download CV
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}