import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ResearchSection from "../components/ResearchSection";

export const metadata = {
  title: "About — Alif Al Razi",
  description:
    "Learn more about Alif Al Razi — AI Engineer & Software Engineer education, research, and professional experience.",
};

export default function AboutPage() {
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
            Background
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            About <span className="gradient-text">Alif</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl text-base">
            AI Engineer & Software Engineer with a passion for building intelligent SaaS applications, machine learning systems, and full-stack solutions.
          </p>
        </div>

        <div className="space-y-16">
          <EducationSection />
          <ExperienceSection />
          <ResearchSection />
        </div>
      </div>
    </div>
  );
}