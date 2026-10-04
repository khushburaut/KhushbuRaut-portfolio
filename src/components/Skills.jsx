import React from 'react';
import * as Icons from 'lucide-react';
import * as BrandIcons from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

// Dynamic Icon Component Solver
const SkillIcon = ({ iconName, className }) => {
  const BrandIconComponent = BrandIcons[iconName];
  if (BrandIconComponent) {
    return <BrandIconComponent className={className} />;
  }
  const IconComponent = Icons[iconName];
  if (!IconComponent) {
    return <Icons.Code className={className} />;
  }
  return <IconComponent className={className} />;
};

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Data Analytics",
      items: skills.dataAnalytics,
      badge: "BI & Modeling",
    },
    {
      title: "Web Development",
      items: skills.webDevelopment,
      badge: "Frontend & Logic",
    },
    {
      title: "Languages",
      items: skills.programming,
      badge: "Core Programming",
    },
    {
      title: "Developer Tools",
      items: skills.tools,
      badge: "Workflow & Design",
    }
  ];

  return (
    <section id="skills" className="py-24 bg-canvas relative overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="editorial-section-tag justify-center">
            <span>—</span> Tooling & Stack <span>—</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ink-950 font-heading mb-4">
            Technical <span className="text-brand-crimson">Skills</span>
          </h2>
          <p className="text-black max-w-xl mx-auto text-base sm:text-lg font-normal">
            Categorized checklist of technologies, programming languages, and analytical frameworks I work with.
          </p>
          <div className="w-12 h-1 bg-brand-crimson mx-auto rounded-full mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <div 
              key={catIdx}
              className="editorial-card p-7 sm:p-8 bg-white hover:border-brand-300 hover:shadow-editorial-hover transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Category Title & Badge */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/[0.05]">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-crimson"></span>
                  <h3 className="text-lg font-bold text-ink-950 font-heading tracking-tight group-hover:text-brand-crimson transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                <span className="editorial-badge text-xs">
                  {category.badge}
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-canvas hover:bg-brand-50/50 border border-black/[0.05] hover:border-brand-200/80 transition-all duration-200 group/item"
                  >
                    <div className="p-2 rounded-lg bg-white border border-black/[0.07] text-ink-700 group-hover/item:text-brand-crimson group-hover/item:border-brand-200 group-hover/item:shadow-sm transition-all duration-200 shrink-0">
                      <SkillIcon iconName={skill.icon} className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-base font-bold text-black group-hover/item:text-ink-950 transition-colors duration-200 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
