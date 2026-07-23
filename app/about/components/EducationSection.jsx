"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Masters of Science in Computing — HC Artificial Intelligence",
      institution: "Technological University Dublin",
      period: "2025 – 2026",
      result: "MSc Candidate",
    },
    {
      degree: "Bachelors of Science in Computer Science and Engineering",
      institution: "North South University",
      period: "2020 – 2024",
      result: "CGPA: 3.51 / 4.00",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "Adamjee Cantonment College",
      period: "2016 – 2018",
      result: "GPA: 5.00 / 5.00",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "BAF Shaheen College, Kurmitola",
      period: "2014 – 2016",
      result: "GPA: 5.00 / 5.00",
    },
  ];

  return (
    <section className="mb-16">
      <motion.h2
        className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GraduationCap className="text-violet-500" size={24} />
        Education
      </motion.h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                {edu.period}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              {edu.institution}
            </h4>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {edu.result}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}