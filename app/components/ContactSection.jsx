"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ status: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formStatus.status) {
      setFormStatus({ status: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ status: "", message: "" });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setFormStatus({
          status: "success",
          message:
            data.message || "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus({
          status: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ALIF-AL-RAZI",
      username: "github.com/ALIF-AL-RAZI",
      icon: Github,
      color: "hover:border-slate-400 dark:hover:border-slate-500",
      iconColor: "text-slate-700 dark:text-slate-300",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/alifalrazi",
      username: "linkedin.com/in/alifalrazi",
      icon: Linkedin,
      color: "hover:border-blue-400 dark:hover:border-blue-500",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:alifalrazi1@gmail.com",
      username: "alifalrazi1@gmail.com",
      icon: Mail,
      color: "hover:border-violet-400 dark:hover:border-violet-500",
      iconColor: "text-violet-600 dark:text-violet-400",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
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
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I&apos;m always open
            to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${
                      focusedField === "name" || formData.name
                        ? "-top-2.5 text-xs text-violet-600 dark:text-violet-400 bg-card px-1"
                        : "top-4 text-sm text-slate-400"
                    }`}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    minLength="2"
                    maxLength="100"
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-violet-500/15 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all font-medium"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${
                      focusedField === "email" || formData.email
                        ? "-top-2.5 text-xs text-violet-600 dark:text-violet-400 bg-card px-1"
                        : "top-4 text-sm text-slate-400"
                    }`}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-violet-500/15 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all font-medium"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium ${
                      focusedField === "message" || formData.message
                        ? "-top-2.5 text-xs text-violet-600 dark:text-violet-400 bg-card px-1"
                        : "top-4 text-sm text-slate-400"
                    }`}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    minLength="10"
                    maxLength="1000"
                    rows={5}
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 dark:border-violet-500/15 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all font-medium resize-none"
                  />
                  <p className="text-[10px] font-medium text-slate-400 mt-1 text-right">
                    {formData.message.length}/1000
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status */}
                {formStatus.status && (
                  <motion.div
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      formStatus.status === "success"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formStatus.status === "success" ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <p className="text-sm font-medium">{formStatus.message}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info — 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Social Links */}
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card p-5 flex items-center gap-4 group ${social.color} transition-all`}
                  >
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 group-hover:bg-violet-500/10 transition-colors">
                      <Icon size={22} className={social.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {social.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {social.username}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </motion.div>
              );
            })}

            {/* Response Time */}
            <motion.div
              className="glass-card p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 blur-3xl rounded-full" />
              <h4 className="font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                ⚡ Response Time
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed relative z-10">
                I typically respond within 24-48 hours. For urgent inquiries,
                connect with me on LinkedIn.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Currently Available
                </h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Open to full-time roles, freelance projects, and consulting
                opportunities in AI/ML and full-stack development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
