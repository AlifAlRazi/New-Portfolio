"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

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
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Founder & Lead AI Engineer",
    type: "Founder / Venture",
    company: "ToggleITAI",
    link: "https://www.toggleitai.com/",
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
    color: "from-violet-500 to-purple-500",
  },
  {
    role: "Full-Stack Developer",
    type: "Client Project",
    company: "Alpine Global Consultancy",
    link: "https://www.alpineglobalconsultancy.com/",
    period: "April 2026 – Present",
    location: "Remote",
    description:
      "Designed and developed a full-stack corporate website for a premium HNW relocation and company formation firm operating across Thailand, Malaysia, UAE, and China.",
    bullets: [
      "Built a modern, responsive landing page featuring animated destination showcases, service breakdowns, client testimonials, and a consultation booking flow",
      "Deployed on Vercel with high-performance optimization",
    ],
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
    color: "from-cyan-500 to-blue-500",
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
      "Ensured high performance and scalability through robust system design and code review practices",
    ],
    tech: ["React", "Next.js", "Node.js", "LangChain", "AWS", "Docker"],
    color: "from-blue-500 to-indigo-500",
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
      "Designed, developed, and maintained multiple SaaS products using React.js, Node.js, and MongoDB",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "AI/ML", "Chrome Extension"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Full-Stack Developer",
    type: "Freelance",
    company: "Basearch.xyz",
    period: "Jun 2022 – Nov 2022",
    location: "Remote",
    description:
      "Developed a real estate web platform facilitating property listings and transactions.",
    bullets: [
      "Built RESTful APIs, integrated MongoDB for data persistence",
      "Deployed the application on AWS S3 and EC2",
      "Implemented user authentication, property search filters, and responsive UI",
    ],
    tech: ["React.js", "Express.js", "MongoDB", "AWS S3", "EC2"],
    color: "from-amber-500 to-orange-500",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 block">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Work & <span className="gradient-text">Ventures</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="timeline-dot hidden md:block"
                    style={{ top: "2rem" }}
                  />

                  {/* Card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                    }`}
                  >
                    <div className="glass-card p-6 md:p-8 group">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div
                              className={`p-1.5 rounded-lg bg-gradient-to-br ${exp.color} shadow-md`}
                            >
                              <Briefcase size={14} className="text-white" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          {exp.link ? (
                            <Link
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-violet-600 dark:text-violet-400 font-semibold hover:underline inline-flex items-center gap-1"
                            >
                              {exp.company} <ExternalLink size={12} />
                            </Link>
                          ) : (
                            <p className="text-violet-600 dark:text-violet-400 font-semibold">
                              {exp.company}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-1 text-right">
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <Calendar size={12} />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-2 mb-5">
                        {exp.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="skill-tag text-xs py-1 px-2.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
