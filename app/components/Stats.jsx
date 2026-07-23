"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Cpu, GitCommitHorizontal } from "lucide-react";

const stats = [
  {
    num: 3,
    suffix: "+",
    text: "Years of Experience",
    icon: Briefcase,
    color: "from-violet-500 to-purple-500",
  },
  {
    num: 10,
    suffix: "+",
    text: "Projects Completed",
    icon: FolderGit2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    num: 15,
    suffix: "+",
    text: "Technologies Mastered",
    icon: Cpu,
    color: "from-blue-500 to-indigo-500",
  },
  {
    num: 500,
    suffix: "+",
    text: "Code Commits",
    icon: GitCommitHorizontal,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Stats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glass-card p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  {mounted ? (
                    <CountUp
                      end={item.num}
                      duration={3}
                      delay={0.2}
                      className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white"
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                      {item.num}
                    </span>
                  )}
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    {item.suffix}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}