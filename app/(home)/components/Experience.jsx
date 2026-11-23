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
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const ExperienceSection = () => {
    const experiences = config.experiences || [];

    if (!experiences || experiences.length === 0) {
        return null;
    }

    return (
        <section className="py-24" id="experience">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-white"
                        >
                            <HiBriefcase className="w-5 h-5 text-white/90" />
                            <span className="text-sm font-medium text-white/90">
                                Professional Experience
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                        >
                            Work Experience
                        </motion.h2>
                        <motion.p
                            variants={itemAnimation}
                            className="text-base sm:text-lg text-white/70"
                        >
                            A journey through my professional engineering career and key achievements
                        </motion.p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={containerAnimation}
                            className="space-y-8"
                        >
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className="relative"
                                >
                                    <div className="flex gap-4 sm:gap-6">
                                        {/* Timeline node */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] flex-shrink-0">
                                                <HiBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                            {index !== experiences.length - 1 && (
                                                <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent mt-4" />
                                            )}
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 pb-8">
                                            <div className="mirror-effect mirror-effect-hover mirror-shine mirror-border rounded-2xl p-5 sm:p-6 group relative overflow-hidden">
                                                {/* Shiny overlay effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                                                </div>
                                                
                                                {/* Glossy shine effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                                                </div>
                                                
                                                <div className="relative z-10">
                                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                                        <div>
                                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                                                                {exp.position}
                                                            </h3>
                                                            <p className="text-white/80 font-medium text-sm sm:text-base">
                                                                {exp.company}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                                                            <HiCalendar className="w-4 h-4 flex-shrink-0" />
                                                            <span>{exp.period}</span>
                                                        </div>
                                                    </div>

                                                    {exp.location && (
                                                        <div className="flex items-center gap-1.5 text-xs text-white/60 mb-3">
                                                            <HiLocationMarker className="w-3.5 h-3.5" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    )}

                                                    {exp.description && (
                                                        <p className="text-sm text-white/75 leading-relaxed mb-4">
                                                            {exp.description}
                                                        </p>
                                                    )}

                                                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                                                        <ul className="space-y-2 mb-4">
                                                            {exp.responsibilities.map((responsibility, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                                                                    <span className="text-white/40 mt-1">▸</span>
                                                                    <span>{responsibility}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {exp.technologies && exp.technologies.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                                                            {exp.technologies.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
