"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ToggleIt AI",
    subtitle: "AI Agency & Automation SaaS",
    shortDescription:
      "AI SaaS & automation platform building custom LLM workflows, RAG agents, and intelligent software systems.",
    description:
      "Founded and engineered ToggleIt AI, an AI development and automation company specializing in custom LLM agentic workflows, RAG pipelines, intelligent SaaS products, and digital transformation.",
    image: "/images/toggleit_real.png",
    technologies: [
      "Next.js",
      "Python",
      "OpenAI API",
      "LangChain",
      "RAG",
      "Tailwind CSS",
      "Vercel",
    ],
    github: null,
    liveDemo: "https://www.toggleitai.com/",
    features: [
      "Custom LLM & Agentic AI workflows",
      "Enterprise RAG pipeline integration",
      "Intelligent web application development",
      "SaaS product architecture",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Alpine Global Consultancy",
    subtitle: "HNW Relocation & Company Formation",
    shortDescription:
      "Full-stack marketing and relocation platform operating across Thailand, Malaysia, UAE, and China.",
    description:
      "Designed and developed a full-stack corporate website for Alpine Global Consultancy, a premier firm facilitating HNW relocation, residency, and company formation across Southeast Asia and the Middle East.",
    image: "/images/alpine_global_real.png",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
    github: null,
    liveDemo: "https://www.alpineglobalconsultancy.com/",
    features: [
      "Animated destination & residency showcases",
      "Service breakdowns for Thailand, UAE, Malaysia & China",
      "Client consultation booking flow",
      "Modern dark glassmorphic design",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Alpine Impex Trading",
    subtitle: "Global Import & Export Platform",
    shortDescription:
      "International trade and supply chain platform showcasing global import-export products.",
    description:
      "Designed and developed the official digital web platform for Alpine Impex Trading, presenting international trading products, supply chain capabilities, and global trade inquiry portals.",
    image: "/images/alpine_impex_real.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    github: null,
    liveDemo: "https://www.alpineimpextrading.com/",
    features: [
      "International import-export product catalog",
      "Global trade inquiry booking portal",
      "Responsive interactive trade showcase",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "EmailYourProfessor.com",
    subtitle: "AI Email Outreach SaaS Platform",
    shortDescription:
      "SaaS platform generating personalised, AI-written emails for students reaching out to professors.",
    description:
      "Developed a SaaS platform that generates personalised, AI-written emails for students reaching out to professors, reducing writing time significantly. Built full-stack with Express.js backend and MongoDB.",
    image: "/images/emailProfessor.png",
    technologies: ["Next.js", "Express.js", "MongoDB", "OpenAI API"],
    github: null,
    liveDemo: "https://emailyourprofessor.com",
    features: [
      "AI-generated emails based on student and professor bios",
      "University and professor discovery",
      "Compose, send, and schedule emails",
      "Dashboard with email analytics",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "AI PDF Reading Tool",
    subtitle: "RAG-Powered Document Q&A",
    shortDescription:
      "AI-powered document Q&A platform enabling students to query PDFs with context-aware responses.",
    description:
      "Built an AI-powered document Q&A platform using RAG pipelines and OpenAI API, enabling students to extract and query information from PDFs with context-aware responses. Integrated Cloudinary for storage and Google Auth for secure access.",
    image: "/images/aiReader.png",
    technologies: [
      "Next.js",
      "OpenAI API",
      "RAG",
      "LangChain",
      "Cloudinary",
      "Google Auth",
    ],
    github: null,
    liveDemo: "https://ai-reader-blue.vercel.app/",
    features: [
      "Upload and read PDFs online",
      "AI-powered explanations for selected text",
      "Ask questions directly from PDF content",
      "Translate text into other languages",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "AI T-Shirt Designer",
    subtitle: "Real-time AI Image Generation",
    shortDescription:
      "Real-time AI image generation tool for designing custom t-shirts using text prompts.",
    description:
      "Created a real-time AI image generation tool allowing users to design custom t-shirts in seconds using text prompts. Integrated OpenAI image generation with a clean, responsive UI.",
    image: "/images/aiTshirt.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "OpenAI API",
      "AI Image Generation (DALL·E)",
    ],
    github: null,
    liveDemo: "https://ai-t-shirt-pi.vercel.app/design",
    features: [
      "AI-generated t-shirt designs from text prompts",
      "Live t-shirt mockup preview",
      "One-click design generation",
    ],
    color: "from-amber-500 to-orange-500",
  },
];

// 3D Tilt Card Component
function ProjectCard({ project, onClick, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.div
      className="group relative cursor-pointer"
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={cardRef}
        className="glass-card overflow-hidden transition-all duration-200 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-multiply`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
            <p className="text-white text-sm font-medium leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          {/* Live badge */}
          {project.liveDemo && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Site
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-1">
            {project.subtitle}
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-violet-500/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* View Details */}
          <div className="flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:gap-2 transition-all">
            View Details
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Project Modal Component
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card w-full max-w-3xl max-h-[90vh] overflow-y-auto border-violet-500/20"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm text-slate-900 dark:text-white hover:scale-110 transition-transform shadow-lg z-10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-1">
                {project.subtitle}
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {project.title}
              </h2>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 text-slate-900 dark:text-white hover:border-violet-500/30 transition-colors font-semibold text-sm"
                >
                  <Github size={16} />
                  Code
                </Link>
              )}
              {project.liveDemo && (
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all font-semibold text-sm"
                >
                  <ExternalLink size={16} />
                  Visit Live Site
                </Link>
              )}
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span key={i} className="skill-tag text-xs py-1 px-2.5">
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">
                Key Features & Capabilities
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Featured{" "}
            <span className="gradient-text">Projects & Ventures</span>
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="magnetic-btn inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-violet-500/20 transition-all hover:scale-105 active:scale-95"
          >
            View Full Projects Archive
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}