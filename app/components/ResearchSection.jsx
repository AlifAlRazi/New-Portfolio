"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award, Microscope } from "lucide-react";
import Link from "next/link";

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 block">
            Publications
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Research{" "}
            <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Research Card */}
        <motion.div
          className="glass-card p-8 md:p-10 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl transition-all group-hover:from-violet-500/10 group-hover:to-cyan-500/10" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="publish-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Award size={14} />
                Published at IEEE
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                2024
              </span>
            </div>

            {/* Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20 flex-shrink-0 mt-1">
                <Microscope size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  Ophthalmic Diseases Detection Using CNN: A Comparative
                  Analysis of ResNet and VGG Architectures
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  IEEE International Conference on Computational Intelligence
                  and Communication Networks
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Developed a CNN model for automated detection of ophthalmic
              diseases using deep learning architectures. Achieved high
              classification accuracy through comparative benchmarking and
              hyperparameter tuning on medical imaging datasets.
            </p>

            {/* Architecture Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["ResNet-50", "ResNet-18", "VGG-16", "VGG-19", "CNN", "Medical Imaging"].map(
                (tag, i) => (
                  <motion.span
                    key={tag}
                    className="skill-tag text-xs py-1 px-2.5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>

            {/* DOI & Link */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 text-xs font-mono text-slate-600 dark:text-slate-400">
                <BookOpen size={14} />
                DOI: 10.1109/CICN63059.2024.10847410
              </span>
              <Link
                href="https://doi.org/10.1109/CICN63059.2024.10847410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
              >
                View Paper
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}