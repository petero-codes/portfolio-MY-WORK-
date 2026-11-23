"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { containerAnimation } from './Animations';

const CATEGORIES = [
    { id: 'all', label: 'All Systems', match: [1, 2, 3, 4, 5] },
    { id: 'backend', label: 'Backend & Enterprise', match: [1, 3] },
    { id: 'systems', label: 'Systems & Automation', match: [4] },
    { id: 'web', label: 'Full-Stack & Frontend', match: [2, 5] },
];

export const ProjectsList = ({ projects }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(p => {
            const cat = CATEGORIES.find(c => c.id === selectedCategory);
            return cat ? cat.match.includes(p.id) : true;
        });

    return (
        <div className="space-y-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
                {CATEGORIES.map(cat => {
                    const isSelected = selectedCategory === cat.id;
                    const count = cat.match.length;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                                isSelected
                                    ? 'bg-white text-gray-950 font-semibold shadow-md'
                                    : 'mirror-effect mirror-glow text-white/70 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            <span>{cat.label}</span>
                            <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                                isSelected ? 'bg-black/10 text-gray-900 font-bold' : 'bg-white/10 text-white/60'
                            }`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Projects List */}
            <motion.div
                variants={containerAnimation}
                initial="hidden"
                animate="show"
                key={selectedCategory}
                className="space-y-6 sm:space-y-8"
            >
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </motion.div>
        </div>
    );
};
