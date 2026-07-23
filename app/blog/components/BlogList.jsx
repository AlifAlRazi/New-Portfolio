"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function BlogList() {
  const [filter, setFilter] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building Production-Grade RAG Pipelines with LangChain & OpenAI",
      excerpt:
        "A practical guide to structuring vector stores, chunking strategies, and retrieval evaluation for real-world document Q&A applications.",
      date: "July 10, 2024",
      readTime: "8 min read",
      category: "ai",
      image: "/images/blog_rag_ai.png",
    },
    {
      id: 2,
      title: "Building Responsive SaaS UIs with Next.js 15 and Tailwind CSS",
      excerpt:
        "Learn how to design fast, modern, accessible SaaS frontends using Next.js App Router, Framer Motion, and Tailwind CSS.",
      date: "June 25, 2024",
      readTime: "6 min read",
      category: "frontend",
      image: "/images/blog_nextjs_saas.png",
    },
    {
      id: 3,
      title: "Comparative Analysis of ResNet and VGG in Ophthalmic Disease Detection",
      excerpt:
        "Key takeaways from our IEEE research paper on CNN architectures, transfer learning, and hyperparameter tuning for medical imaging.",
      date: "May 14, 2024",
      readTime: "10 min read",
      category: "ai",
      image: "/images/blog_cnn_medical.png",
    },
    {
      id: 4,
      title: "RESTful API Design & Microservices with Node.js & Docker",
      excerpt:
        "Principles and best practices for building scalable REST APIs, containerizing services, and deploying to AWS ECS.",
      date: "April 18, 2024",
      readTime: "7 min read",
      category: "backend",
      image: "/images/blog_docker_api.png",
    },
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "ai", name: "AI & ML" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === cat.id
                ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20"
                : "glass-card text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="glass-card overflow-hidden flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-violet-500/80 text-white backdrop-blur-md shadow-md">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Full Article
                  <ChevronRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}