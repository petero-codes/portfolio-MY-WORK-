"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 15 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};

const SkillsSection = () => {
    const categories = config.skillsCategories || [];

    return (
        <section className="py-20 border-t border-white/10" id="skills">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-6xl mx-auto space-y-12"
                >
                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
                        >
                            <HiCode className="w-4 h-4 text-emerald-400" />
                            <span>Technical Competencies</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
                        >
                            Engineering Skills & Stack
                        </motion.h2>

                        <motion.p
                            variants={itemAnimation}
                            className="text-sm sm:text-base text-gray-400"
                        >
                            Production-tested technologies organized by engineering domain. No arbitrary percentage bars—only real technical proficiency applied across software projects and evaluation systems.
                        </motion.p>
                    </div>

                    {/* Categorized Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, idx) => (
                            <motion.div
                                key={category.title}
                                variants={itemAnimation}
                                className={`rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between ${
                                    idx === 0 || idx === 4 ? 'md:col-span-1 lg:col-span-1' : ''
                                }`}
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-white">
                                                {category.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                                        {category.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="group inline-flex flex-col px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                                                title={skill.context}
                                            >
                                                <span className="text-xs font-medium text-gray-200">
                                                    {skill.name}
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-mono">
                                                    {skill.context}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
