"use client";

import { Download, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-slate-900 dark:text-slate-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-teal-400">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">Personal Summary</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Enthusiastic React Full Stack Developer with hands-on experience in developing web
applications using React.js, Node.js, and MongoDB. Focused on modern web technologies,
UI/UX design principles, and applications in AI and machine learning. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Proficient in
building intelligent solutions using OpenAI APIs, LangChain, RAG pipelines, and
popular ML frameworks like TensorFlow, PyTorch, and scikit-learn. Experienced in
developing end-to-end AI applications, including large language models (LLMs) and
vector databases.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Eager to contribute to innovative projects, leveraging both full-stack
development and machine learning expertise to create impactful solutions in a dynamic team
environment.
            </p>
            <Link href="/about">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                Know More <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1 group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="constant-border-card h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
              <div className="constant-border-inner bg-white dark:bg-slate-950 p-8 flex flex-col h-full transition-colors duration-500">
                <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-slate-100">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item">
                    <div className="bg-blue-500/10 p-3.5 rounded-xl border border-blue-500/20 group-hover/item:bg-blue-500/20 transition-colors">
                      <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Location</p>
                      <p className="font-bold text-slate-800 dark:text-slate-200">Dublin, Ireland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group/item">
                    <div className="bg-indigo-500/10 p-3.5 rounded-xl border border-indigo-500/20 group-hover/item:bg-indigo-500/20 transition-colors">
                      <Mail className="text-indigo-600 dark:text-indigo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Email</p>
                      <a href="mailto:alifalrazi1@gmail.com" className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        alifalrazi1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group/item">
                    <div className="bg-teal-500/10 p-3.5 rounded-xl border border-teal-500/20 group-hover/item:bg-teal-500/20 transition-colors">
                      <Phone className="text-teal-600 dark:text-teal-400" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-0.5">Phone</p>
                      <a href="tel:+353894620802" className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +353894620802
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-900">
                    <Link 
                      href="/resume/ALIF_AL_RAZI(CV).pdf" 
                      target="_blank"
                      className="inline-flex items-center gap-3 w-full justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Download size={20} />
                      Download Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}