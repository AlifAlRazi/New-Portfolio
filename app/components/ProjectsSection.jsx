"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Project Card Component
function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div 
      className="group relative cursor-pointer"
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="constant-border-card h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
        <div className="constant-border-inner bg-white dark:bg-slate-950 flex flex-col h-full transition-colors duration-500">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white text-sm font-medium leading-relaxed">{project.shortDescription}</p>
            </div>
          </div>
          
          <div className="p-5 flex-grow">
            <h3 className="text-xl font-black mb-3 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 transition-colors group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
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
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 hover:scale-110 transition-transform shadow-lg z-10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-transparent to-transparent"></div>
          </div>
          
          <div className="p-8 -mt-10 relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">{project.title}</h2>
              <div className="flex gap-3">
                {project.github && (
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors font-bold text-sm border border-slate-200 dark:border-slate-800"
                  >
                    <Github size={18} />
                    Code
                  </Link>
                )}
                {project.liveDemo && (
                  <Link 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-teal-500 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all font-bold text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.description}</p>
              
              {project.features && (
                <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-slate-100">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 font-medium">
                        <ArrowRight size={16} className="mt-1 flex-shrink-0 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Main Projects Section Component
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Handler functions
  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };
  
  const handleCloseProject = () => {
    setSelectedProject(null);
  };
  
  const projects = [
{
  id: 1,
  title: "AI-Powered PDF Reading Tool",
  shortDescription: "An AI-based tool to read, understand, and interact with PDFs",
  description:
    "A live AI-powered PDF reading tool that allows users to upload books or documents, read them online, and interact with the content using AI. Users can select text for explanations, ask questions directly from the PDF, translate passages, and access previous chats and files. The project is currently a working demo and not yet commercial.",
  image: "/images/aiReader.png",
  technologies: [
    "Next.js",
    "OpenAI API",
    "RAG (Retrieval-Augmented Generation)",
    "Cloudinary",
    "Google Authentication"
  ],
  github: null,
  liveDemo: "https://ai-reader-blue.vercel.app/",
  features: [
    "Google sign-in authentication",
    "Upload and read PDFs or books online",
    "AI-powered explanations for selected text",
    "Ask questions directly from PDF content",
    "Translate text into other languages",
    "Saved previous chats and uploaded files",
    "Free mode with limited prompts"
  ]
},

    {
  id: 2,
  title: "Emailyourprofessor.com",
  shortDescription: "AI-powered platform to help students write personalized emails to professors",
  description:
    "Emailyourprofessor.com is an AI-powered web application that helps students generate professional, personalized academic emails. The system uses student bio and professor bio to craft context-aware emails, supports finding universities and professors, manages sent and scheduled emails, and provides analytics through a modern dashboard.",
  image: "/images/emailProfessor.png",
  technologies: [
    "Next.js",
    "Express.js",
    "MongoDB",
    "OpenAI API"
  ],
  github: null,
  liveDemo: "https://emailyourprofessor.com",
  features: [
    "AI-generated emails based on student bio and professor bio",
    "Find universities and professors with detailed profiles",
    "Professor bio–aware email personalization",
    "Compose, send, and schedule emails",
    "Dashboard with email analytics and activity overview",
    "Track total, sent, and scheduled emails",
    "Manage professor contacts",
    "Bulk email support",
    "Saved email history and previous interactions",
    "Free plan with limits and premium upgrade option"
  ]
},

{
  id: 3,
  title: "AI T-Shirt Designer",
  shortDescription: "Create custom AI-generated t-shirt designs in seconds",
  description:
    "An AI-powered t-shirt design platform that allows users to create unique, print-ready designs by simply describing their idea. No design skills are required. Users can generate designs instantly, preview them on a t-shirt mockup, browse inspiration from a gallery, and start designing with a clean, modern interface.",
  image: "/images/aiTshirt.png",
  technologies: [
    "Next.js",
    "Tailwind CSS",
    "OpenAI API",
    "AI Image Generation"
  ],
  github: null,
  liveDemo: "https://ai-t-shirt-pi.vercel.app/design",
  features: [
    "AI-generated t-shirt designs from text prompts",
    "Live t-shirt mockup preview",
    "One-click design generation",
    "No design skills required",
    "Gallery with design inspiration",
    "Clean landing page with CTA-focused UI",
    "Fast and responsive user experience"
  ]
},

    {
      id: 4, // Added missing id
      title: "Portfolio Website",
      shortDescription: "Showcase of my work and skills",
      description: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and professional experience.",
      image: "/images/project4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "https://github.com/yourusername/portfolio",
      liveDemo: "https://yourusername.dev",
      features: [
        "Responsive design for all devices",
        "Dark/light mode toggle",
        "Project showcase with detailed views",
        "Skills and experience sections",
        "Contact form for inquiries"
      ]
    },
    {
      id: 5, // Added missing id
      title: "AI Image Generator",
      shortDescription: "Generate images with AI",
      description: "An application that uses AI to generate images based on text prompts, leveraging the latest in machine learning technology.",
      image: "/images/textToImage.png",
      technologies: ["Python", "Hugging Face", "React", "FastAPI"],
      github: "https://github.com/ALIF-AL-RAZI/textToImage-backend",
      liveDemo: "https://www.alifalrazi.com/projects/projectslist/textToImage",
      features: [
        "Text-to-image generation",
        "Style transfer capabilities",
        "Image editing and enhancement",
        "Gallery of generated images",
        "User accounts to save favorites"
      ]
    },
    {
      id: 6, // Added missing id
      title: "Fitness Tracker",
      shortDescription: "Track your fitness journey",
      description: "A fitness tracking application that helps users monitor their workouts, nutrition, and progress towards fitness goals.",
      image: "/images/project6.jpg",
      technologies: ["React Native", "Firebase", "HealthKit API", "Google Fit API"],
      github: "https://github.com/yourusername/fitness-tracker",
      liveDemo: "https://fitness-tracker-demo.example.com",
      features: [
        "Workout logging and tracking",
        "Nutrition and calorie tracking",
        "Progress visualization with charts",
        "Goal setting and achievement tracking",
        "Integration with health platforms"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 flex flex-col items-center gap-10">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-slate-900 dark:text-slate-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-teal-400">Projects</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleOpenProject}
              index={index}
            />
          ))}
        </div>
        
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseProject} />
        )}
        
      </div>
      <Link href="/projects" >
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
          See More <ArrowRight size={20} className="ml-2" />
        </Button>
      </Link>
    </section>
  );
}