"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { itemAnimation } from './Animations';

export const ProjectCard = ({ project, index }) => (
    <motion.div
        variants={itemAnimation}
        className="group flex flex-col md:flex-row items-stretch gap-6 mirror-effect mirror-effect-hover mirror-shine mirror-border p-5 sm:p-6 rounded-2xl relative overflow-hidden"
    >
        {/* Shiny overlay effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
        </div>

        {/* Glossy shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
        </div>

        {/* Project Image */}
        <div className="md:w-2/5 flex-shrink-0 relative z-10">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-black/50">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
        </div>

        {/* Project Details */}
        <div className="md:w-3/5 flex flex-col justify-between py-1 relative z-10 space-y-4">
            <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            {project.title}
                        </h3>
                        {project.highlight && (
                            <span className="inline-block mt-1 text-xs font-medium text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                                {project.highlight}
                            </span>
                        )}
                    </div>
                    <span className="text-xs font-mono text-white/50 flex-shrink-0">
                        #{String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                <p className="text-sm text-white/75 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.github && project.github !== "#" && (
                    <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full h-9 px-4 text-xs font-medium mirror-effect mirror-glow text-white hover:bg-white/10 border-white/20"
                        asChild
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <FaGithub className="w-3.5 h-3.5" />
                            <span>GitHub Code</span>
                            <FaExternalLinkAlt className="w-2.5 h-2.5 text-white/60" />
                        </a>
                    </Button>
                )}

                {project.demo && project.demo !== "#" && (
                    <Button
                        size="sm"
                        className="rounded-full h-9 px-4 text-xs font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all shadow-md"
                        asChild
                    >
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt className="w-2.5 h-2.5" />
                        </a>
                    </Button>
                )}
            </div>
        </div>
    </motion.div>
);
