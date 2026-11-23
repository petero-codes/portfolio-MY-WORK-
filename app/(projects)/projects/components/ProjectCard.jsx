"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import { HiOutlineServer, HiOutlineShieldCheck } from 'react-icons/hi2';
import { itemAnimation } from './Animations';

export const ProjectCard = ({ project, index }) => (
    <motion.article
        variants={itemAnimation}
        className="rounded-3xl glass-panel glass-panel-hover transition-all duration-300 p-6 sm:p-8 md:p-9 space-y-6"
    >
        {/* Top Header: Category, Badge & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
            {/* Visual Image Preview */}
            <div className="lg:col-span-5">
                <Link href={`/projects/${project.slug}`} className="block group/img">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-xl">
                        <img
                            src={project.image}
                            alt={`Preview of ${project.title}`}
                            loading="lazy"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300 flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity">
                            <span>Open Detailed Case Study</span>
                            <FaArrowRight className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                    </div>
                </Link>
            </div>

            {/* Description & Technical Breakdown */}
            <div className="lg:col-span-7 space-y-4">
                <div>
                    <Link href={`/projects/${project.slug}`}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
                            {project.title}
                        </h2>
                    </Link>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.architecture && (
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                                <HiOutlineServer className="w-4 h-4 text-blue-400" />
                                <span>Architecture & Patterns</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
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
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                                {project.decisions}
                            </p>
                        </div>
                    )}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions: Case Study, GitHub & Live Demo */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link href={`/projects/${project.slug}`}>
                        <Button
                            size="sm"
                            className="rounded-full h-9 px-4 text-xs font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all shadow-md"
                        >
                            <span>Inspect Case Study</span>
                            <FaArrowRight className="ml-1.5 w-3 h-3" />
                        </Button>
                    </Link>

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
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <FaGithub className="w-3.5 h-3.5" />
                                <span>GitHub</span>
                                <FaExternalLinkAlt className="w-2.5 h-2.5 text-gray-400" />
                            </a>
                        </Button>
                    )}

                    {project.demo && project.demo !== project.github && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full h-9 px-4 text-xs font-medium border-white/20 hover:border-white/40 text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all"
                            asChild
                        >
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                                aria-label={`View live demo of ${project.title}`}
                            >
                                <span>Live Demo</span>
                                <FaExternalLinkAlt className="w-2.5 h-2.5" />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    </motion.article>
);
