"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Stats from "./Stats";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Software Engineer & AI Enthusiast";
  
  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[30%] left-[20%] w-[25%] h-[25%] bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <section id="hero" className=" flex items-center justify-center py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-60 gap-12">
        
      <motion.div 
          className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-3xl animate-pulse"></div>
          <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white/10 dark:border-white/5 shadow-2xl">
            <Image 
              src="/images/alif.png" 
              alt="Alif" 
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-8 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-teal-400">Alif</span>
            </h1>
            <div className="h-8">
              <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">
                {text}
                <span className={cn("ml-1 inline-block w-1.5 h-6 bg-blue-500 dark:bg-teal-400", {
                  "animate-pulse": isTyping
                })}></span>
              </p>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
              Building modern web applications with a focus on <span className="text-blue-600 dark:text-blue-400 font-bold">user experience</span> and <span className="text-indigo-600 dark:text-indigo-400 font-bold">performance</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/resume/ALIF_AL_RAZI(CV).pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <FileText size={18} />
              View Resume
            </Link>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Mail size={18} />
              Contact Me
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </motion.div>
        
        
      </div>
      
    </section>
    <Stats/>
    </div>
    
  );
}