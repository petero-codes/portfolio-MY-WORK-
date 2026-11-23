"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiCheckCircle } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
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
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const AboutSection = () => {
    const about = config.about;

    if (!about) return null;

    return (
        <section className="py-20 relative" id="about">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-white"
                        >
                            <HiUser className="w-5 h-5 text-white/90" />
                            <span className="text-sm font-medium text-white/90">About Me</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                        >
                            {about.headline}
                        </motion.h2>
                    </div>

                    <motion.div
                        variants={itemAnimation}
                        className="mirror-effect mirror-shine mirror-border rounded-2xl p-6 sm:p-9 space-y-6 relative overflow-hidden"
                    >
                        <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed">
                            {about.paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>

                        {about.pillars && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                                {about.pillars.map((pillar, idx) => (
                                    <div key={idx} className="space-y-1.5 p-3.5 rounded-xl bg-black/40 border border-white/10">
                                        <div className="flex items-center gap-2 text-sm font-bold text-white">
                                            <HiCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                            <span>{pillar.title}</span>
                                        </div>
                                        <p className="text-xs text-white/60 leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
