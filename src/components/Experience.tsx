import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Professional <span className="text-blue-500">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A timeline of building scalable systems and leading high-impact engineering teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-800 hidden md:block">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-blue-500 via-emerald-500 to-blue-500"
            />
          </div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 z-10 hidden md:block">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className={`absolute inset-0.5 rounded-full ${expandedIndex === index ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-slate-700'}`}
                  />
                </div>

                <motion.div
                  layout
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className={`group cursor-pointer p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden ${
                    expandedIndex === index
                      ? 'bg-slate-900/60 border-blue-500/30 shadow-2xl shadow-blue-500/10 backdrop-blur-md'
                      : 'bg-slate-900/20 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`p-4 rounded-2xl shrink-0 transition-colors duration-300 ${
                          expandedIndex === index ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Briefcase size={28} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm text-slate-400 font-mono">
                          <span className="text-blue-400 font-bold tracking-wider">{exp.company}</span>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-slate-500" />
                            {exp.dates}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-slate-500" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      className="text-slate-500 hidden md:block"
                    >
                      <ChevronDown size={28} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 mt-8 border-t border-slate-800/50 relative z-10">
                          <ul className="space-y-5">
                            {exp.bullets.map((bullet, bIndex) => (
                              <motion.li 
                                key={bIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: bIndex * 0.1 }}
                                className="flex items-start gap-4 text-slate-300 leading-relaxed text-lg"
                              >
                                <div className="mt-2 shrink-0">
                                  <Sparkles size={16} className="text-blue-400 animate-pulse" />
                                </div>
                                {bullet}
                              </motion.li>
                            ))}
                          </ul>
                          
                          {/* Tech Stack */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm"
                          >
                            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 mb-3">Technologies Leveraged</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.techStack.split(',').map((tech, tIndex) => (
                                <span key={tIndex} className="px-3 py-1 rounded-md bg-slate-900/50 text-slate-300 text-xs font-mono border border-slate-700/50">
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          </motion.div>

                          {/* Impact Highlight Panel */}
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-emerald-500/5 border border-blue-500/20"
                          >
                            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 mb-4 flex items-center gap-2">
                              <Sparkles size={14} />
                              Key Performance Metrics
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {exp.bullets.filter(b => b.includes('%') || b.includes('2x') || b.includes('20M') || b.includes('99.9%')).map((impact, iIndex) => (
                                <div key={iIndex} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
                                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                                  <span className="text-sm text-slate-300 font-medium italic">
                                    {impact.split(' ').slice(0, 8).join(' ')}...
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
