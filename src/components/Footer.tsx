import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Linkedin, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Education */}
          <motion.div
            id="education"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8 text-blue-400">
              <GraduationCap size={24} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-slate-800">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500" />
                  <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                  <p className="text-blue-400 text-sm font-medium">{edu.degree}</p>
                  {edu.dates && <p className="text-slate-500 text-xs mt-1">{edu.dates}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Open to Senior Software Engineer roles (Frontend / Full-stack). 
              Feel free to reach out for opportunities, collaborations, or referrals.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Email</div>
                  <div className="text-white font-medium">{resumeData.basics.email}</div>
                </div>
              </a>
              <a
                href={resumeData.basics.links[0].url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">LinkedIn</div>
                  <div className="text-white font-medium">Shreya Patel</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Extra Section */}
        <div className="mb-20 p-8 rounded-3xl bg-slate-900/30 border border-slate-800">
          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4">Additional Context</h3>
          <ul className="space-y-3">
            {resumeData.extra.map((item, index) => (
              <li key={index} className="text-slate-400 text-sm flex items-start gap-2">
                <span className="text-blue-500 mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tighter text-white">
            SP<span className="text-blue-500">.</span>
          </div>
          <p className="text-slate-600 text-sm">
            © 2026 {resumeData.basics.name}. Built with React, Tailwind & Framer Motion.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="text-xs font-mono uppercase tracking-widest">Premium Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
