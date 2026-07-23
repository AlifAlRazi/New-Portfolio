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
          {/* Main About Card — spans 2 cols */}
          <motion.div
            className="glass-card p-8 md:col-span-2 group"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Personal Summary
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              AI & software engineer and founder with a strong foundation in computer science,
              machine learning, and computer vision. Founder @{" "}
              <span className="text-violet-600 dark:text-violet-400 font-bold">ToggleITAI</span>,
              building innovative, production-grade AI systems that drive real-world impact across SaaS, tech, and digital transformation.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Experienced in full-stack SaaS development, cloud infrastructure, and deploying
              intelligent solutions with{" "}
              <span className="text-violet-600 dark:text-violet-400 font-semibold">LLMs</span>,{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                RAG pipelines
              </span>
              , and{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                agentic workflows
              </span>
              .
            </p>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors group/link"
              >
                Learn More About My Background
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ToggleITAI Company Card */}
          <motion.div
            className="glass-card p-6 flex flex-col justify-between group border-violet-500/30"
            variants={itemVariants}
          >
            <div>
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 inline-flex mb-4 shadow-lg shadow-violet-500/20">
                <Rocket size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-1">
                Company & Venture
              </p>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                ToggleITAI
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Building next-generation AI SaaS products, custom LLM agentic workflows, and automated enterprise AI systems.
              </p>
            </div>
            <Link
              href="https://www.toggleitai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline"
            >
              Visit toggleitai.com <ExternalLink size={12} />
            </Link>
          </motion.div>

          {/* Location Card — Full Background Picture */}
          <motion.div
            className="glass-card overflow-hidden flex flex-col justify-between group relative p-6 min-h-[220px]"
            variants={itemVariants}
          >
            {/* Full Card Background Image */}
            <Image
              src="/images/Galway.jpg"
              alt="Galway, Ireland"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
            />
            {/* Full Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30 z-10" />

            {/* Top Pin & Badge */}
            <div className="relative z-20 flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-emerald-500/80 backdrop-blur-md text-white shadow-lg shadow-emerald-500/20">
                <MapPin size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                Current Location
              </span>
            </div>

            {/* Bottom Text Details */}
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

          {/* Education Card */}
          <motion.div
            className="glass-card p-6 group"
            variants={itemVariants}
          >
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 inline-flex mb-4 shadow-lg shadow-blue-500/20">
              <GraduationCap size={20} className="text-white" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
              Education
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-violet-500/20">
                  <Image src="/images/TUD.jpg" alt="TU Dublin" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                    MSc in Computing — AI
                  </p>
                  <p className="text-xs text-slate-400">
                    Technological University Dublin
                  </p>
                  <p className="text-[11px] text-violet-400 font-semibold">
                    2025 – 2026
                  </p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-violet-500/20">
                  <Image src="/images/NSU.jpg" alt="North South University" fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                    BSc in CSE
                  </p>
                  <p className="text-xs text-slate-400">
                    North South University
                  </p>
                  <p className="text-[11px] text-violet-400 font-semibold">
                    2020 – 2024 • CGPA: 3.51
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            className="glass-card p-6 group"
            variants={itemVariants}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
              Contact
            </p>
            <div className="space-y-4">
              <a
                href="mailto:alifalrazi1@gmail.com"
                className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform"
              >
                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover/item:bg-violet-500/20 transition-colors">
                  <Mail size={16} className="text-violet-600 dark:text-violet-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-violet-600 dark:group-hover/item:text-violet-400 transition-colors">
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
                  <Phone size={16} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors">
                  WhatsApp: +353 894 620 802
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}