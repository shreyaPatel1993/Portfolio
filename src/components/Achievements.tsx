import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes('%')) return Math.round(latest) + '%';
    if (value.includes('M')) return latest.toFixed(1) + 'M+';
    if (value.includes('x')) return latest.toFixed(1) + 'x';
    return Math.round(latest) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [numericValue]);

  return <motion.span>{rounded}</motion.span>;
};

const getIcon = (type: string) => {
  switch (type) {
    case 'scale': return <Users className="text-blue-400" />;
    case 'metric': return <TrendingUp className="text-emerald-400" />;
    case 'efficiency': return <Zap className="text-amber-400" />;
    default: return <Award className="text-purple-400" />;
  }
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950/50 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Impact <span className="text-blue-500">Metrics</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Quantifiable results delivered across major engineering projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all group overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity scale-150">
                {getIcon(achievement.type)}
              </div>
              
              <div className="mb-6 p-3 rounded-2xl bg-slate-800/50 w-fit group-hover:bg-blue-500/10 transition-colors">
                {getIcon(achievement.type)}
              </div>

              <div className="text-4xl font-bold text-white mb-3 tracking-tight font-display">
                <Counter value={achievement.metric} />
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {achievement.context}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Top 3 Impact Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 via-slate-900/50 to-emerald-600/10 border border-blue-500/20 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="p-5 rounded-[2rem] bg-blue-600 text-white shadow-xl shadow-blue-600/20"
              >
                <Award size={40} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 font-display tracking-tight">Top Impact Highlights</h3>
                <p className="text-slate-400 font-light">Key measurable wins from the resume.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
              {[
                { label: "Users Served", value: "20M+", color: "text-blue-400" },
                { label: "Load Reduction", value: "15%", color: "text-emerald-400" },
                { label: "Dev Velocity", value: "~30%", color: "text-amber-400" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`text-3xl font-bold ${item.color} mb-1 font-display tracking-tight`}>
                    <Counter value={item.value} />
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-mono">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
