import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const resumeLink = "https://drive.google.com/file/d/1gtzE1OT8Mq5azKBypsV9-Ry4hlIYjxS7/view";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const nameRevealVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
            <span className="relative px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-blue-400/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              />
              <span className="relative flex items-center gap-1">
                <Sparkles size={10} className="animate-pulse" />
                {resumeData.basics.workAuthorization}
              </span>
            </span>
            <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
              <MapPin size={12} className="text-blue-400" />
              {resumeData.basics.location}
            </div>
            <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
              <span className="text-slate-600">|</span>
              <Mail size={12} className="text-blue-400" />
              {resumeData.basics.email}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white font-display leading-tight">
              {resumeData.basics.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-[length:200%_auto] animate-gradient-x">
                {resumeData.basics.title}
              </span>
            </h1>
            <motion.div
              variants={nameRevealVariants}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed font-light tracking-wide font-display">
            {resumeData.basics.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToExperience}
              className="group relative flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                View Experience
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-xl font-semibold transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                View Resume
              </span>
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-6">
            {[
              { icon: Linkedin, href: resumeData.basics.links[0].url, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${resumeData.basics.email}`, label: "Email" }
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5, scale: 1.1 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-800/30 border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-blue-500 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};
