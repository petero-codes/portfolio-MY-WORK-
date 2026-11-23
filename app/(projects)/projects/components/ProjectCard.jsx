"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineServer, HiOutlineShieldCheck, HiOutlineCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi';
import { itemAnimation } from './Animations';

export const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            variants={itemAnimation}
            className="group flex flex-col mirror-effect mirror-effect-hover mirror-shine mirror-border p-5 sm:p-7 rounded-2xl relative overflow-hidden space-y-6"
        >
            {/* Shiny overlay effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
            </div>

            {/* Glossy shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
            </div>

            {/* Top row: Image & Overview */}
            <div className="flex flex-col md:flex-row items-stretch gap-6 relative z-10">
                {/* Project Image */}
                <div className="md:w-2/5 flex-shrink-0">
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-black/50">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                        {project.badge && (
                            <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white">
                                {project.badge}
                            </span>
                        )}
                    </div>
                </div>

                {/* Project Details */}
                <div className="md:w-3/5 flex flex-col justify-between py-1 space-y-4">
                    <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                    {project.title}
                                </h3>
                                {project.tagline && (
                                    <p className="text-xs sm:text-sm font-medium text-white/80 mt-0.5">
                                        {project.tagline}
                                    </p>
                                )}
                            </div>
                            <span className="text-xs font-mono text-white/50 flex-shrink-0">
                                #{String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        {project.role && (
                            <p className="text-xs font-mono text-white/70">
                                <span className="text-white/40">Role:</span> {project.role}
                            </p>
                        )}

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

                    {/* Actions: Links & Expand Toggle */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                        <div className="flex flex-wrap items-center gap-3">
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
                                        <span>Source Repository</span>
                                        <FaExternalLinkAlt className="w-2.5 h-2.5 text-white/60" />
                                    </a>
                                </Button>
                            )}

                            {project.demo && project.demo !== "#" && project.demo !== project.github && (
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
                                        <span>Verified Demo</span>
                                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                                    </a>
                                </Button>
                            )}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-xs text-white/80 hover:text-white hover:bg-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5 ml-auto"
                        >
                            <span>{isExpanded ? "Hide Technical Details" : "View Case Study Details"}</span>
                            {isExpanded ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Expandable Technical Deep Dive */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/15 pt-5 relative z-10 space-y-4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Architecture */}
                            {project.architecture && (
                                <div className="p-4 rounded-xl bg-black/40 border border-white/15 space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                                        <HiOutlineServer className="w-4 h-4 text-blue-400" />
                                        <span>Architecture & Implementation</span>
                                    </div>
                                    <p className="text-xs text-white/70 leading-relaxed">
                                        {project.architecture}
                                    </p>
                                </div>
                            )}

                            {/* Decisions */}
                            {project.decisions && (
                                <div className="p-4 rounded-xl bg-black/40 border border-white/15 space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                                        <HiOutlineShieldCheck className="w-4 h-4 text-emerald-400" />
                                        <span>Engineering Decisions</span>
                                    </div>
                                    <p className="text-xs text-white/70 leading-relaxed">
                                        {project.decisions}
                                    </p>
                                </div>
                            )}

                            {/* Challenges & Solutions */}
                            {project.challenges && (
                                <div className="p-4 rounded-xl bg-black/40 border border-white/15 space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                                        <HiOutlineCheckCircle className="w-4 h-4 text-amber-400" />
                                        <span>Challenges & Solutions</span>
                                    </div>
                                    <p className="text-xs text-white/70 leading-relaxed whitespace-pre-line">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            {/* Testing & Limitations */}
                            {(project.testing || project.limitations) && (
                                <div className="p-4 rounded-xl bg-black/40 border border-white/15 space-y-2">
                                    {project.testing && (
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                                                <HiOutlineCheckCircle className="w-4 h-4 text-cyan-400" />
                                                <span>Testing & Verification</span>
                                            </div>
                                            <p className="text-xs text-white/70 leading-relaxed">
                                                {project.testing}
                                            </p>
                                        </div>
                                    )}

                                    {project.limitations && (
                                        <div className="space-y-1 pt-1 border-t border-white/10">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider">
                                                <HiOutlineExclamationCircle className="w-4 h-4 text-rose-400" />
                                                <span>Scope & Limitations</span>
                                            </div>
                                            <p className="text-xs text-white/70 leading-relaxed">
                                                {project.limitations}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
