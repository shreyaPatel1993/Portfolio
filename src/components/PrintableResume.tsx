import React from 'react';
import resumeData from '../data/resume.json';

export const PrintableResume: React.FC = () => {
  return (
    <div className="bg-white text-black p-8 max-w-[800px] mx-auto font-serif shadow-2xl">
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-tight">{resumeData.basics.name}</h1>
        <p className="text-xl text-gray-700 font-medium">{resumeData.basics.title}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          <span>{resumeData.basics.email}</span>
          <span>{resumeData.basics.location}</span>
          {resumeData.basics.links.map(link => (
            <span key={link.name}>{link.url}</span>
          ))}
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed">{resumeData.basics.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Experience</h2>
        <div className="space-y-4">
          {resumeData.experience.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-md">{exp.company}</h3>
                <span className="text-sm text-gray-600">{exp.dates}</span>
              </div>
              <p className="italic text-sm text-gray-700">{exp.role} | {exp.location}</p>
              <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="leading-tight">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category} className="text-sm">
              <span className="font-bold">{category}: </span>
              <span>{skills.join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Education</h2>
        {resumeData.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm">{edu.school}</h3>
              <span className="text-sm text-gray-600">{edu.dates}</span>
            </div>
            <p className="text-sm">{edu.degree}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-2">Additional</h2>
        <ul className="list-disc list-inside text-sm">
          {resumeData.extra.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
