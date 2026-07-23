"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Calendar } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Masters of Science in Computing — Artificial Intelligence",
      institution: "Technological University Dublin",
      period: "2025 – 2026",
      result: "MSc Candidate",
      image: "/images/TUD.jpg",
      location: "Dublin, Ireland",
    },
    {
      degree: "Bachelors of Science in Computer Science & Engineering",
      institution: "North South University",
      period: "2020 – 2024",
      result: "CGPA: 3.51 / 4.00",
      image: "/images/NSU.jpg",
      location: "Dhaka, Bangladesh",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Adamjee Cantonment College",
      period: "2016 – 2018",
      result: "GPA: 5.00 / 5.00",
      image: "/images/ACC.jpg",
      location: "Dhaka, Bangladesh",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "BAF Shaheen College, Kurmitola",
      period: "2014 – 2016",
      result: "GPA: 5.00 / 5.00",
      image: "/images/BAF.jpg",
      location: "Dhaka, Bangladesh",
    },
  ];

  return (
    <section className="mb-16">
      <motion.h2
        className="text-3xl font-black mb-8 flex items-center gap-3 text-slate-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20">
          <GraduationCap size={24} />
        </div>
        Academic Journey & Institutes
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="glass-card overflow-hidden flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              {/* Institute Photo Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
                    <Calendar size={12} className="text-violet-400" />
                    {edu.period}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-violet-500/80 text-white backdrop-blur-md">
                    {edu.location}
                  </span>
                  <h4 className="text-lg font-black text-white mt-1 leading-snug drop-shadow-sm">
                    {edu.institution}
                  </h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Result / Status</span>
              <span className="text-xs font-extrabold text-violet-600 dark:text-violet-400 inline-flex items-center gap-1">
                <Award size={14} />
                {edu.result}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}