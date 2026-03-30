import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Terminal, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

const getSkillIcon = (category: string) => {
  switch (category) {
    case 'Frontend': return <Layout size={20} />;
    case 'Backend': return <Terminal size={20} />;
    case 'Databases': return <Database size={20} />;
    case 'Cloud & DevOps': return <Globe size={20} />;
    case 'Testing': return <Zap size={20} />;
    case 'Tools & Other': return <Code2 size={20} />;
    default: return <Code2 size={20} />;
  }
};

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Technical <span className="text-emerald-400">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A comprehensive stack built over 6+ years of engineering excellence.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(resumeData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {getSkillIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-[0.2em]">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, sIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIndex * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#fff' }}
                    className="px-4 py-2 rounded-xl bg-slate-800/40 text-slate-400 text-sm border border-slate-700/50 transition-all cursor-default font-mono"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
