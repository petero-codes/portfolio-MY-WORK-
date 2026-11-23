"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiArrowNarrowRight, HiSparkles } from 'react-icons/hi';
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
    const pipelines = config.skillPipelines || [];

    return (
        <section className="py-20 border-t border-white/10 relative" id="skills">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-6xl mx-auto space-y-14"
                >
                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-md"
                        >
                            <HiCode className="w-4 h-4 text-emerald-400" />
                            <span>Technical Competencies</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                        >
                            Engineering Stack & Technology Pipelines
                        </motion.h2>

                        <motion.p
                            variants={itemAnimation}
                            className="text-sm sm:text-base text-gray-400 leading-relaxed"
                        >
                            Practical engineering proficiencies applied in production. Distinct separation between core production systems and actively explored tools—without arbitrary percentage meters.
                        </motion.p>
                    </div>

                    {/* Architectural Technology Pipelines */}
                    {pipelines.length > 0 && (
                        <motion.div
                            variants={itemAnimation}
                            className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4"
                        >
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-400">
                                <HiSparkles className="w-4 h-4 text-cyan-400" />
                                <span>End-to-End Architectural Workflows</span>
                            </div>

                            <div className="space-y-3">
                                {pipelines.map((pipe, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-2.5"
                                    >
                                        <span className="text-xs font-semibold text-emerald-400 font-mono min-w-[200px]">
                                            {pipe.domain}
                                        </span>
                                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                            {pipe.flow.map((node, i) => (
                                                <React.Fragment key={i}>
                                                    <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200 font-mono">
                                                        {node}
                                                    </span>
                                                    {i < pipe.flow.length - 1 && (
                                                        <HiArrowNarrowRight className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Categorized Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <motion.div
                                key={category.title}
                                variants={itemAnimation}
                                className="group relative rounded-2xl p-6 glass-panel glass-panel-hover transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-white tracking-tight">
                                                {category.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                                        {category.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => {
                                            const isExploring = skill.status === "Currently Exploring";
                                            return (
                                                <div
                                                    key={skill.name}
                                                    className={`group/skill inline-flex flex-col px-3 py-1.5 rounded-lg border transition-all ${
                                                        isExploring
                                                            ? 'bg-purple-500/5 border-purple-500/30 hover:border-purple-500/60'
                                                            : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                                                    }`}
                                                    title={skill.context}
                                                >
                                                    <div className="flex items-center justify-between gap-2">
                                                        <span className="text-xs font-medium text-gray-200">
                                                            {skill.name}
                                                        </span>
                                                        {isExploring && (
                                                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono">
                                                                Exploring
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[10px] text-gray-400 font-mono mt-0.5">
                                                        {skill.context}
                                                    </span>
                                                </div>
                                            );
                                        })}
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
