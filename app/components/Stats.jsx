"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Cpu, GitCommitHorizontal } from "lucide-react";

export default function Stats() {
  const [mounted, setMounted] = useState(false);
  const [gitStats, setGitStats] = useState({
    totalCommits: 936,
    publicRepos: 24,
    yearsExp: 3,
    techCount: 15,
  });

  useEffect(() => {
    setMounted(true);

    // Fetch live GitHub stats for AlifAlRazi
    async function fetchLiveGitStats() {
      try {
        const [userRes, contribRes] = await Promise.all([
          fetch("https://api.github.com/users/AlifAlRazi"),
          fetch("https://github-contributions.vercel.app/api/v1/AlifAlRazi"),
        ]);

        let repos = 24;
        let commits = 936;

        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.public_repos) {
            repos = userData.public_repos;
          }
        }

        if (contribRes.ok) {
          const contribData = await contribRes.json();
          if (contribData.years && contribData.years.length > 0) {
            const total = contribData.years.reduce((acc, curr) => acc + curr.total, 0);
            if (total > 0) commits = total;
          }
        }

        setGitStats({
          totalCommits: commits,
          publicRepos: repos,
          yearsExp: 3,
          techCount: 15,
        });
      } catch (err) {
        console.error("Failed to fetch live GitHub stats:", err);
      }
    }

    fetchLiveGitStats();
  }, []);

  const statsList = [
    {
      num: gitStats.totalCommits,
      suffix: "+",
      text: "GitHub Contributions",
      icon: GitCommitHorizontal,
      color: "from-emerald-500 to-teal-500",
    },
    {
      num: gitStats.publicRepos,
      suffix: "+",
      text: "Public Repos & Projects",
      icon: FolderGit2,
      color: "from-violet-500 to-purple-500",
    },
    {
      num: gitStats.techCount,
      suffix: "+",
      text: "Technologies & Frameworks",
      icon: Cpu,
      color: "from-cyan-500 to-blue-500",
    },
    {
      num: gitStats.yearsExp,
      suffix: "+",
      text: "Years of Experience",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsList.map((item, index) => {
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
                      duration={2.5}
                      delay={0.1}
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