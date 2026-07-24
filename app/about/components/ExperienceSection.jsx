"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "RAIMS Work Experience Program Participant",
      type: "Part-time",
      company: "RAIMS® by Orcawise",
      period: "Jun 2026 – Present",
      location: "County Dublin, Ireland",
      description:
        "Contributing to RAIMS® (Responsible AI Management System), a live enterprise system operationalizing Responsible AI frameworks aligned with the EU AI Act and ISO 42001.",
      bullets: [
        "Contributing to RAIMS® (Responsible AI Management System), a live enterprise system operationalizing Responsible AI frameworks aligned with the EU AI Act and ISO 42001",
        "Working across the AI Engineering track's three teams: building structured data extraction pipelines with Python, Selenium, and APIs (EXTRACT); fine-tuning LLMs and building RAG/agentic AI pipelines (CUSTOMIZE); and developing React/Next.js front-ends for LLM-powered chatbots and Q&A systems (LOAD)",
        "Bridging regulatory compliance requirements with hands-on enterprise AI engineering as part of a structured, supervised work experience program",
      ],
      tech: ["Python", "Selenium", "RAG", "Agentic AI", "React", "Next.js", "LLM Fine-Tuning", "EU AI Act"],
    },
    {
      role: "Founder & Lead AI Engineer",
      type: "Founder / Venture",
      company: "ToggleITAI",
      period: "2024 – Present",
      location: "Remote / Ireland",
      description:
        "Founded and engineered ToggleITAI, an AI development and automation firm building custom LLM agentic workflows, RAG pipelines, and intelligent SaaS products.",
      bullets: [
        "Architected custom multi-agent LLM systems and RAG pipelines for client SaaS products and enterprise automation",
        "Engineered full-stack Next.js and Python cloud applications with scalable architecture",
        "Provided strategic AI engineering, system design, and production deployment across global clients",
      ],
      tech: ["Next.js", "Python", "OpenAI API", "LangChain", "RAG", "AWS", "Docker"],
    },
    {
      role: "Full-Stack Developer",
      type: "Client Project",
      company: "Alpine Global Consultancy",
      period: "April 2026 – Present",
      location: "Remote",
      description:
        "Designed and developed a full-stack corporate website for a premier HNW relocation and company formation firm operating across Thailand, Malaysia, UAE, and China.",
      bullets: [
        "Built a modern, responsive landing page featuring animated destination showcases, service breakdowns, client testimonials, and a consultation booking flow",
        "Deployed on Vercel with high-performance optimization",
      ],
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
    },
    {
      role: "Software Engineer",
      type: "Full-time",
      company: "Tweetsy Inc.",
      period: "May 2024 – August 2025",
      location: "Remote",
      description:
        "Developed full-stack SaaS products and AI-driven tools for automating client business operations.",
      bullets: [
        "Built responsive React/Next.js frontends and scalable Node.js backend services",
        "Deployed AI-driven tools using LangChain, OpenAI APIs, and RAG pipelines",
        "Designed CI/CD pipelines with GitHub Actions, containerised services with Docker, deployed to AWS (ECS, ECR, S3)",
      ],
      tech: ["React", "Next.js", "Node.js", "LangChain", "AWS", "Docker"],
    },
    {
      role: "Software Engineer",
      type: "Full-time",
      company: "HireSyncs.com",
      period: "Jan 2023 – Dec 2023",
      location: "Remote",
      description:
        "Built AI-powered recruitment tools and SaaS products for the hiring industry.",
      bullets: [
        "Developed an AI-powered job application management system (ATS), reducing time-to-fill and improving recruiter decision-making",
        "Accelerated product demo creation with a Chrome extension and web solution, significantly cutting delivery time",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "AI/ML", "Chrome Extension"],
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
        <Briefcase className="text-violet-500" size={24} />
        Work Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="glass-card p-6 border border-slate-200 dark:border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                  {exp.company} <span className="text-xs text-slate-400 font-normal">({exp.type})</span>
                </h4>
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar size={12} /> {exp.period}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin size={12} /> {exp.location}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 my-3 leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-1.5 mb-4">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2">
                  <span className="text-violet-500 mt-0.5">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}