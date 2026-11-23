"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiOutlineServer, HiOutlineShieldCheck, HiOutlineCpuChip } from 'react-icons/hi2';
import { itemAnimation } from './Animations';

export const ProjectCard = ({ project, index }) => (
    <motion.article
        variants={itemAnimation}
        className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all p-5 sm:p-7 md:p-8 space-y-6"
    >
        {/* Top Header: Category, Badge & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {project.badge || "Engineering Case Study"}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                    {project.category}
                </span>
            </div>
            <span className="text-xs font-mono text-gray-500">
                #{String(index + 1).padStart(2, '0')}
            </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual Image Preview */}
            <div className="lg:col-span-4">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <img
                        src={project.image}
                        alt={`Screenshot and preview of ${project.title}`}
                        loading="lazy"
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Description & Technical Breakdown */}
            <div className="lg:col-span-8 space-y-4">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {project.title}
                    </h2>
                    {project.tagline && (
                        <p className="text-sm font-medium text-emerald-400 mt-1">
                            {project.tagline}
                        </p>
                    )}
                </div>

                {/* Overview */}
                <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                </p>

                {/* Deep Technical Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.architecture && (
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                                <HiOutlineServer className="w-4 h-4 text-blue-400" />
                                <span>Architecture & Patterns</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                {project.architecture}
                            </p>
                        </div>
                    )}

                    {project.decisions && (
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                                <HiOutlineShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span>Engineering Decisions</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                {project.decisions}
                            </p>
                        </div>
                    )}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions: GitHub & Live Demo */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                    {project.github && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full h-9 px-4 text-xs font-medium border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 transition-all"
                            asChild
                        >
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                                aria-label={`View ${project.title} source code on GitHub`}
                            >
                                <FaGithub className="w-3.5 h-3.5" />
                                <span>GitHub Repository</span>
                                <FaExternalLinkAlt className="w-2.5 h-2.5 text-gray-400" />
                            </a>
                        </Button>
                    )}

                    {project.demo && project.demo !== project.github && (
                        <Button
                            size="sm"
                            className="rounded-full h-9 px-4 text-xs font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all shadow-md"
                            asChild
                        >
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                                aria-label={`View live demo of ${project.title}`}
                            >
                                <span>Live Application</span>
                                <FaExternalLinkAlt className="w-2.5 h-2.5" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    </motion.article>
);
