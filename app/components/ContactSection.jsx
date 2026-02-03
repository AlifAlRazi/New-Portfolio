"use client";

import { useState } from "react";
import { Github, Linkedin, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    status: "", // success, error, or empty
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear previous status when user starts typing
    if (formStatus.status) {
      setFormStatus({ status: "", message: "" });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ status: "", message: "" });
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus({
          status: "success",
          message: data.message || "Message sent successfully! I'll get back to you soon."
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setFormStatus({
          status: "error",
          message: data.error || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus({
        status: "error",
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 text-center text-slate-900 dark:text-slate-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-teal-400">Touch</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="constant-border-card h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
              <div className="constant-border-inner bg-white dark:bg-slate-950 p-8 flex flex-col h-full transition-colors duration-500">
                <h3 className="text-2xl font-black mb-8 text-slate-900 dark:text-slate-100">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="2"
                  maxLength="100"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                  maxLength="1000"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-2 text-right">
                  {formData.message.length}/1000 characters
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
              
              {formStatus.status && (
                <motion.div 
                  className={`mt-6 p-4 rounded-xl font-bold flex items-center gap-3 border ${
                    formStatus.status === "success" 
                      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                      : "bg-rose-500/10 text-rose-600 border-rose-500/20"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.status === "success" ? (
                    <div className="bg-emerald-500 text-white p-1 rounded-full"><Code size={12} /></div>
                  ) : (
                    <div className="bg-rose-500 text-white p-1 rounded-full"><Code size={12} /></div>
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
            
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Feel free to reach out if you have any questions or want to work together. 
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 flex flex-col gap-4">
              <Link 
                href="https://github.com/AlifAlRazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="constant-border-card transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-500/10">
                  <div className="constant-border-inner bg-white dark:bg-slate-950 p-5 flex items-center gap-5 transition-colors duration-300">
                    <div className="bg-slate-500/10 p-4 rounded-2xl group-hover:bg-slate-500/20 transition-colors">
                      <Github className="text-slate-700 dark:text-slate-300" size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-slate-100">GitHub</h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">github.com/AlifAlRazi</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="https://linkedin.com/in/alifalrazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="constant-border-card transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                  <div className="constant-border-inner bg-white dark:bg-slate-950 p-5 flex items-center gap-5 transition-colors duration-300">
                    <div className="bg-blue-500/10 p-4 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin className="text-blue-600 dark:text-blue-400" size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-slate-100">LinkedIn</h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">linkedin.com/in/alifalrazi</p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link 
                href="https://hackerrank.com/alifalrazi1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="constant-border-card transition-all duration-300 group-hover:shadow-xl group-hover:shadow-teal-500/10">
                  <div className="constant-border-inner bg-white dark:bg-slate-950 p-5 flex items-center gap-5 transition-colors duration-300">
                    <div className="bg-teal-500/10 p-4 rounded-2xl group-hover:bg-teal-500/20 transition-colors">
                      <Code className="text-teal-600 dark:text-teal-400" size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-slate-100">HackerRank</h4>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">hackerrank.com/alifalrazi1</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full transition-all group-hover:bg-blue-500/10"></div>
              <h4 className="font-black text-slate-900 dark:text-slate-100 mb-3 relative z-10">Response Time</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                I typically respond to messages within 24-48 hours. For urgent inquiries, 
                feel free to connect with me on LinkedIn.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
