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

const TierSection = ({ tier }) => (
    <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/10">
            <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{tier.tier}</h3>
                <p className="text-xs sm:text-sm text-white/60">{tier.description}</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15 self-start sm:self-center">
                {tier.badge}
            </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {tier.skills.map((skill, idx) => (
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
    const proficiencyTiers = config.skillsProficiency || [];

    return (
        <section className="py-24" id="skills">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
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
                            Organized by verified practical experience across production backends, client applications, and AI evaluation
                        </motion.p>
                    </div>

                    <div className="space-y-12">
                        {proficiencyTiers.map((tier, index) => (
                            <TierSection key={index} tier={tier} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
