"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  BrainCircuit,
  Cloud,
  Database,
  Wrench,
  Layers,
  Terminal,
  Cpu,
  Globe,
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++"],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: BrainCircuit,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "scikit-learn",
      "XGBoost",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "Fine-tuning",
      "Prompt Engineering",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "genai",
    label: "GenAI & RAG",
    icon: Cpu,
    skills: [
      "LLMs",
      "RAG Pipelines",
      "Agentic AI",
      "Multi-Agent Systems",
      "Tool-use",
      "ReAct Agents",
      "VectorStore",
      "Chroma",
      "Pinecone",
      "Embeddings",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "web",
    label: "Web Dev",
    icon: Globe,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux",
      "Tailwind CSS",
      "REST APIs",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "data",
    label: "Data Science",
    icon: Layers,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "Data Analysis",
      "Statistical Modelling",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "aws",
    label: "AWS",
    icon: Cloud,
    skills: [
      "Amazon Bedrock",
      "S3",
      "EC2",
      "Lambda",
      "SageMaker",
      "ECS",
      "ECR",
      "IAM",
      "CloudWatch",
      "API Gateway",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "azure",
    label: "Azure",
    icon: Cloud,
    skills: [
      "Azure Container Instances",
      "Azure Container Registry",
      "Azure OpenAI",
      "Azure Functions",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "devops",
    label: "DevOps",
    icon: Terminal,
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes (K8s)",
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "MLOps",
    ],
    color: "from-rose-500 to-pink-500",
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "VectorStore"],
    color: "from-teal-500 to-green-500",
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    skills: ["Git", "Postman", "VS Code", "Adobe Photoshop", "Adobe Illustrator"],
    color: "from-slate-500 to-zinc-500",
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("languages");

  const currentCategory = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
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
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Technical{" "}
            <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-violet-500/10 hover:border-violet-500/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color}`}
                    layoutId="activeSkillTab"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  <span className="hidden sm:inline">{category.label}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={currentCategory.id}
              className="glass-card p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${currentCategory.color} shadow-lg`}
                >
                  <currentCategory.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {currentCategory.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {currentCategory.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {currentCategory.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCategory.color}`}
                    />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Skills Overview (mini grid) */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`glass-card p-4 text-center transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-violet-500/30 dark:border-violet-500/40 glow-violet"
                    : ""
                }`}
              >
                <div
                  className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${category.color} mb-2 ${
                    isActive ? "shadow-lg" : "opacity-60"
                  } transition-all`}
                >
                  <Icon size={16} className="text-white" />
                </div>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {category.label}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">
                  {category.skills.length} skills
                </p>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}