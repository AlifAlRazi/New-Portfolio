"use client";

import { Download, MapPin, Mail, Phone, GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
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
            Get to Know{" "}
            <span className="gradient-text">Me</span>
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
              Aspiring AI and software engineer with a strong foundation in computer science,
              machine learning, and computer vision. Passionate about building innovative,
              production-grade AI systems that drive real-world impact across tech, SaaS,
              fintech, and digital transformation industries.
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

          {/* Location Card */}
          <motion.div
            className="glass-card p-6 flex flex-col justify-between group"
            variants={itemVariants}
          >
            <div>
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 inline-flex mb-4 shadow-lg shadow-emerald-500/20">
                <MapPin size={20} className="text-white" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                Based in
              </p>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                Galway, Ireland
              </p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              Open to remote & relocation
            </p>
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
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  MSc in Computing — AI
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Technological University Dublin
                </p>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold">
                  2025 – 2026
                </p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">
                  BSc in CSE
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  North South University
                </p>
                <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold">
                  2020 – 2024 • CGPA: 3.51/4.00
                </p>
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

          {/* Resume Download Card */}
          <motion.div
            className="glass-card p-6 flex flex-col justify-between group"
            variants={itemVariants}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                Resume
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Download my latest CV with full details on experience, skills, and projects.
              </p>
            </div>
            <Link
              href="/resume/ALIF_AL_RAZI(CV).pdf"
              target="_blank"
              className="magnetic-btn inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={18} />
              Download CV
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}