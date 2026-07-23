"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  GitFork,
  Star,
  BookOpen,
  Users,
  ExternalLink,
  Code2,
  Flame,
  Activity,
  GitCommitHorizontal,
} from "lucide-react";
import Link from "next/link";

export default function GithubSection() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [totalContributions, setTotalContributions] = useState(null);
  const [loading, setLoading] = useState(true);

  const username = "AlifAlRazi";

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const [profileRes, reposRes, contribRes] = await Promise.allSettled([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`
          ),
          fetch(`https://github-contributions.vercel.app/api/v1/${username}`),
        ]);

        if (profileRes.status === "fulfilled" && profileRes.value.ok) {
          const profileData = await profileRes.value.json();
          setProfile(profileData);
        }

        if (reposRes.status === "fulfilled" && reposRes.value.ok) {
          const reposData = await reposRes.value.json();
          const nonForks = reposData.filter((r) => !r.fork);
          setRepos(nonForks.length > 0 ? nonForks : reposData);

          // Calculate total stars
          const stars = reposData.reduce(
            (acc, repo) => acc + repo.stargazers_count,
            0
          );
          setTotalStars(stars);

          // Calculate language percentages
          const langCount = {};
          reposData.forEach((repo) => {
            if (repo.language) {
              langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
          });

          const totalLangs = Object.values(langCount).reduce(
            (a, b) => a + b,
            0
          );
          const langArray = Object.keys(langCount).map((lang) => ({
            name: lang,
            count: langCount[lang],
            percentage: Math.round((langCount[lang] / totalLangs) * 100),
          }));

          langArray.sort((a, b) => b.count - a.count);
          setLanguages(langArray.slice(0, 5));
        }

        if (contribRes.status === "fulfilled" && contribRes.value.ok) {
          const contribData = await contribRes.value.json();
          if (contribData && contribData.years) {
            const sum = contribData.years.reduce((acc, y) => acc + y.total, 0);
            setTotalContributions(sum);
          }
        }
      } catch (err) {
        console.error("Failed to fetch GitHub data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-24 px-4 relative">
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
            Open Source
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-3">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto">
            Explore my public repositories, live contribution metrics, and open-source projects.
          </p>
        </motion.div>

        {/* Profile Card & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Profile Summary Card */}
          <motion.div
            className="glass-card p-8 flex flex-col justify-between group lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-violet-500/30 flex-shrink-0">
                  <img
                    src={
                      profile?.avatar_url ||
                      "https://avatars.githubusercontent.com/u/103985669?v=4"
                    }
                    alt="GitHub Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {profile?.name || "Alif Al Razi"}
                  </h3>
                  <p className="text-xs font-mono text-violet-600 dark:text-violet-400">
                    @{username}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {profile?.bio ||
                  "AI Engineer & Software Engineer passionate about machine learning, LLMs, and full-stack SaaS development."}
              </p>

              {/* Quick Profile Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-center">
                  <span className="block text-xl font-black text-violet-600 dark:text-violet-400">
                    {totalContributions ? `${totalContributions}+` : "900+"}
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    Total Contributions
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 text-center">
                  <span className="block text-xl font-black text-slate-900 dark:text-white">
                    {profile?.public_repos ?? "15"}
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-slate-400">
                    Repositories
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 text-center">
                  <span className="block text-xl font-black text-amber-500">
                    {totalStars}
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-slate-400">
                    Stars Earned
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 text-center">
                  <span className="block text-xl font-black text-slate-900 dark:text-white">
                    {profile?.followers ?? "10"}
                  </span>
                  <span className="text-[10px] font-semibold uppercase text-slate-400">
                    Followers
                  </span>
                </div>
              </div>
            </div>

            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2 w-full bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              <Github size={18} />
              Visit GitHub Profile
              <ExternalLink size={14} />
            </Link>
          </motion.div>

          {/* Native Language & Activity Breakdown */}
          <motion.div
            className="glass-card p-8 flex flex-col justify-between lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Flame className="text-amber-500" size={20} />
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    Top Languages & Activity
                  </h4>
                </div>
                <span className="text-xs font-mono text-violet-600 dark:text-violet-400 font-bold px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                  {totalContributions ? `${totalContributions} Commits` : "900+ Commits"}
                </span>
              </div>

              {/* Language Distribution Progress Bars */}
              <div className="space-y-4 mb-8">
                {languages.length > 0
                  ? languages.map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <Code2 size={14} className="text-violet-500" />
                            {lang.name}
                          </span>
                          <span>{lang.percentage}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))
                  : [1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-4 bg-slate-200 dark:bg-white/5 rounded animate-pulse"
                      />
                    ))}
              </div>
            </div>

            {/* GitHub Contribution Heatmap SVG */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Activity size={14} className="text-emerald-500" />
                  Contribution Heatmap ({totalContributions ? `${totalContributions} Contributions` : "900+ Total Contributions"})
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Last 1 Year
                </span>
              </div>
              <div className="w-full overflow-x-auto p-2 bg-slate-50 dark:bg-black/30 rounded-xl border border-slate-200 dark:border-violet-500/10">
                <img
                  src={`https://ghchart.rshah.org/8b5cf6/${username}`}
                  alt="Alif Al Razi's GitHub Contributions"
                  className="w-full min-w-[600px] h-auto object-contain rounded-lg dark:invert dark:hue-rotate-180 dark:contrast-150 dark:brightness-90 transition-all"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Public Repositories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="text-violet-600 dark:text-violet-400" size={20} />
              Public Repositories
            </h3>
            <Link
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
            >
              View All Repos <ExternalLink size={12} />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass-card p-6 h-36 animate-pulse bg-slate-200/20 dark:bg-white/5"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.slice(0, 6).map((repo) => (
                <Link
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex flex-col justify-between group hover:border-violet-500/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate pr-2 text-base">
                        {repo.name}
                      </h4>
                      <ExternalLink
                        size={14}
                        className="text-slate-400 group-hover:text-violet-500 transition-colors flex-shrink-0"
                      />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 font-normal">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100 dark:border-white/5">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 font-medium text-violet-600 dark:text-violet-400">
                        <span className="w-2 h-2 rounded-full bg-violet-500" />
                        {repo.language}
                      </span>
                    )}
                    <div className="flex items-center gap-3 ml-auto">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
