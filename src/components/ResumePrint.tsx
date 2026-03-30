import React from 'react';
import { Mail, Phone } from 'lucide-react';
import resumeData from '../data/resume.json';

export const ResumePrint: React.FC = () => {
  return (
    <div 
      className="p-10 w-[800px] mx-auto font-serif" 
      id="resume-content"
      style={{ 
        minHeight: '1122px',
        backgroundColor: '#ffffff',
        color: '#000000'
      }}
    >
      <header className="pb-4 mb-6" style={{ borderBottom: '1px solid #e5e7eb' }}>
        <div className="grid grid-cols-3 items-center mb-2">
          <div className="text-xs">
            <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-1" style={{ color: '#2563eb' }}>
              <Mail size={12} />
              {resumeData.basics.email}
            </a>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#000000' }}>
              Shreya<span style={{ color: '#94a3b8' }}>.</span>Patel
            </h1>
          </div>
          <div className="text-right text-xs">
            <a href={resumeData.basics.links[0].url} target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px] font-medium" style={{ color: '#64748b' }}>
          <div>Work Authorization: {resumeData.basics.workAuthorization}</div>
          <div className="flex items-center gap-1">
            <Phone size={10} />
            {resumeData.basics.phone}
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-base font-bold text-center uppercase tracking-widest mb-3 pb-1" style={{ borderBottom: '1px solid #e5e7eb', color: '#1d4ed8' }}>Summary</h2>
        <p className="text-[13px] leading-relaxed" style={{ color: '#1e293b' }}>{resumeData.basics.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-base font-bold text-center uppercase tracking-widest mb-3 pb-1" style={{ borderBottom: '1px solid #e5e7eb', color: '#1d4ed8' }}>Technical skills</h2>
        <div className="space-y-1">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category} className="text-[13px]">
              <span className="font-bold">{category}:</span> {skills.join(', ')}.
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-base font-bold text-center uppercase tracking-widest mb-4 pb-1" style={{ borderBottom: '1px solid #e5e7eb', color: '#1d4ed8' }}>PROFESSIONAL EXPERIENCE</h2>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="page-break-inside-avoid">
              <div className="flex justify-between items-baseline mb-1">
                <div className="flex items-center gap-1">
                  <h3 className="font-bold text-[14px]" style={{ color: '#0f172a' }}>{exp.company}</h3>
                  <span style={{ color: '#94a3b8' }}>|</span>
                  <p className="italic text-[13px]" style={{ color: '#1e40af' }}>{exp.role}</p>
                </div>
                <span className="text-[12px] font-bold italic" style={{ color: '#475569' }}>{exp.dates}</span>
              </div>
              <ul className="list-disc ml-5 space-y-1 mb-2">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-[12px] leading-snug" style={{ color: '#1e293b' }}>{bullet}</li>
                ))}
              </ul>
              <div className="text-[11px] font-bold" style={{ color: '#64748b' }}>
                Tech Stack: <span className="font-normal" style={{ color: '#334155' }}>{exp.techStack}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-base font-bold text-center uppercase tracking-widest mb-3 pb-1" style={{ borderBottom: '1px solid #e5e7eb', color: '#1d4ed8' }}>Education</h2>
        <div className="space-y-2">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="flex justify-between items-baseline">
              <div className="flex gap-2">
                <h3 className="font-bold text-[13px]" style={{ color: '#0f172a' }}>{edu.degree}</h3>
                <span style={{ color: '#94a3b8' }}>-</span>
                <p className="text-[13px]" style={{ color: '#1e293b' }}>{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
