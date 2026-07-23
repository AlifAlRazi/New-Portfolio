import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogList from "./components/BlogList";

export const metadata = {
  title: "Blog — Alif Al Razi",
  description:
    "Articles and insights on AI engineering, RAG pipelines, LLMs, Next.js full-stack SaaS development, and machine learning.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-500 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2 block">
            Articles
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Engineering <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl">
            My thoughts, tutorials, and insights on AI systems, RAG architecture, LLM agentic workflows, and full-stack development.
          </p>
        </div>

        <BlogList />
      </div>
    </div>
  );
}