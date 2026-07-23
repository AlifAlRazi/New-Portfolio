"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Search } from "lucide-react";
import { motion } from "framer-motion";

const allProjects = [
  {
    id: 1,
    title: "ED AI LMS",
    subtitle: "Knowledge Graph Based Personalised Learning",
    category: "AI/ML",
    description:
      "Built an AI-powered Learning Management System that uses knowledge graphs and RAG to detect individual learning gaps and deliver personalised study paths. Integrated Stripe for payments and Google Auth for user management.",
    image: "/images/aiReader.png",
    technologies: ["Next.js", "OpenAI API", "RAG", "Knowledge Graphs", "Cloudinary", "Stripe"],
    github: null,
    liveDemo: null,
  },
  {
    id: 2,
    title: "EmailYourProfessor.com",
    subtitle: "AI Academic Outreach SaaS",
    category: "SaaS",
    description:
      "Emailyourprofessor.com is an AI-powered SaaS platform that helps students write context-aware emails to professors based on student and professor bios. Manages university listings, scheduled emails, and analytics dashboard.",
    image: "/images/emailProfessor.png",
    technologies: ["Next.js", "Express.js", "MongoDB", "OpenAI API", "Node.js"],
    github: null,
    liveDemo: "https://emailyourprofessor.com",
  },
  {
    id: 3,
    title: "AI-Powered PDF Reading Tool",
    subtitle: "RAG Document Intelligence Platform",
    category: "AI/ML",
    description:
      "A live AI-powered PDF reading tool allowing users to upload books or documents, interact with content using AI, ask context-aware questions, and translate passages.",
    image: "/images/aiReader.png",
    technologies: ["Next.js", "OpenAI API", "RAG", "LangChain", "Cloudinary", "Google Auth"],
    github: null,
    liveDemo: "https://ai-reader-blue.vercel.app/",
  },
  {
    id: 4,
    title: "Alpine Global Consultancy",
    subtitle: "HNW Relocation Platform",
    category: "Web",
    description:
      "Full-stack marketing website for a premium HNW relocation and company formation firm operating across Thailand, Malaysia, UAE, and China. Modern landing page with destination showcases and consultation booking.",
    image: "/images/textToImage.png",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
    github: null,
    liveDemo: null,
  },
  {
    id: 5,
    title: "Smart Surplus",
    subtitle: "Food Waste Reduction Marketplace",
    category: "Web",
    description:
      "Marketplace platform where businesses list near-expiry products at reduced prices to minimise food waste. Integrated AI-powered pricing suggestions, Google Auth, and Stripe for payments.",
    image: "/images/textToImage.png",
    technologies: ["Next.js", "OpenAI API", "Google Auth", "Stripe"],
    github: null,
    liveDemo: null,
  },
  {
    id: 6,
    title: "AI T-Shirt Designer",
    subtitle: "Real-time Generative Design Tool",
    category: "SaaS",
    description:
      "Real-time AI image generation tool allowing users to design custom t-shirts in seconds using text prompts. Integrated DALL·E generation with live 3D mockup previews.",
    image: "/images/aiTshirt.png",
    technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "DALL·E"],
    github: null,
    liveDemo: "https://ai-t-shirt-pi.vercel.app/design",
  },
  {
    id: 7,
    title: "AI Image Generator",
    subtitle: "Text-to-Image Generation Backend",
    category: "AI/ML",
    description:
      "Application that uses AI to generate images based on text prompts, leveraging Hugging Face diffusion models and Python FastAPI backend.",
    image: "/images/textToImage.png",
    technologies: ["Python", "Hugging Face", "React", "FastAPI"],
    github: "https://github.com/AlifAlRazi/textToImage-backend",
    liveDemo: "https://www.alifalrazi.com/projects/projectslist/textToImage",
  },
  {
    id: 8,
    title: "Basearch.xyz Real Estate Platform",
    subtitle: "Property Listings & Authentication",
    category: "Web",
    description:
      "Real estate web platform facilitating property listings and transactions. Built RESTful APIs, integrated MongoDB for data persistence, and deployed on AWS S3 and EC2.",
    image: "/images/project_basearch.png",
    technologies: ["React.js", "Express.js", "MongoDB", "AWS S3", "EC2"],
    github: null,
    liveDemo: null,
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI/ML", "SaaS", "Web"];

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Page Title */}
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2 block">
            Archive
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Projects <span className="gradient-text">Archive</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl">
            A comprehensive list of projects I&apos;ve built across AI/ML engineering, full-stack SaaS, and client web applications.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20"
                    : "glass-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search by tech or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-medium glass-card focus:outline-none focus:border-violet-500/40 text-slate-900 dark:text-white placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div>
                {/* Project Image Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-violet-500/80 text-white backdrop-blur-md shadow-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-slate-300 hover:text-white transition-colors"
                      >
                        <Github size={14} />
                      </Link>
                    )}
                    {project.liveDemo && (
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}