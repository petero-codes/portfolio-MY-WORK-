"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiChip } from 'react-icons/hi';
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
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const CategorySection = ({ category }) => (
    <div className="space-y-4">
        <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-black border border-white/30 flex items-center justify-center shadow-lg">
                {category.icon}
            </div>
            <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-xs sm:text-sm text-white/60">{category.description}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {category.skills.map((skill, idx) => (
                <motion.div
                    key={idx}
                    variants={itemAnimation}
                    className="
                        mirror-effect
                        mirror-effect-hover
                        mirror-shine
                        mirror-border
                        rounded-xl
                        p-3.5
                        flex flex-col justify-between
                        relative overflow-hidden
                    "
                >
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                            {skill.name}
                        </h4>
                        {skill.context && (
                            <p className="text-[11px] text-white/60 leading-tight">
                                {skill.context}
                            </p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const SkillsSection = () => {
    const categories = config.skillsCategories || [];

    return (
        <section className="py-24" id="skills">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16 max-w-6xl mx-auto"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-white"
                        >
                            <HiChip className="w-5 h-5 text-white/90" />
                            <span className="text-sm font-medium text-white/90">
                                Skills & Technologies
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                        >
                            Technical Proficiency
                        </motion.h2>
                        <motion.p
                            variants={itemAnimation}
                            className="text-base sm:text-lg text-white/70"
                        >
                            A comprehensive overview of my technical expertise across backend architecture, frontend engineering, databases, and AI evaluation.
                        </motion.p>
                    </div>

                    <div className="space-y-12">
                        {categories.map((category, index) => (
                            <CategorySection key={index} category={category} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
