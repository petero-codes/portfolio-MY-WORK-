"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};

const ExperienceSection = () => {
    const experiences = config.experiences || [];

    if (!experiences || experiences.length === 0) {
        return null;
    }

    return (
        <section className="py-20 border-t border-white/10" id="experience">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-12 max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
                        >
                            <HiBriefcase className="w-4 h-4 text-emerald-400" />
                            <span>Professional Background</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
                        >
                            Work Experience
                        </motion.h2>

                        <motion.p
                            variants={itemAnimation}
                            className="text-sm sm:text-base text-gray-400"
                        >
                            Verified engineering roles focused on backend scalability, full-stack application development, and frontier AI model evaluation.
                        </motion.p>
                    </div>

                    {/* Timeline List */}
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemAnimation}
                                className="rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all p-6 sm:p-7"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 border-b border-white/10 pb-4">
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                            {exp.position}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 mt-1">
                                            <span className="text-sm font-semibold text-emerald-400">
                                                {exp.company}
                                            </span>
                                            {exp.location && (
                                                <>
                                                    <span className="text-gray-600">&bull;</span>
                                                    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                                                        <HiLocationMarker className="w-3.5 h-3.5" />
                                                        {exp.location}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 self-start">
                                        <HiCalendar className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                {exp.description && (
                                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                        {exp.description}
                                    </p>
                                )}

                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul className="space-y-2 mb-4">
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                                                <span className="text-emerald-400 font-bold mt-1">&rsaquo;</span>
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
