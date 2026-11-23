"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiUser, HiOutlineCheckCircle, HiArrowRight } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
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
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};

const AboutSection = () => {
    const about = config.about || {};

    return (
        <section className="py-20 relative border-t border-white/10" id="about">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-5xl mx-auto space-y-12"
                >
                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-md"
                        >
                            <HiUser className="w-4 h-4 text-cyan-400" />
                            <span>Engineering Philosophy</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                        >
                            About My Work & Approach
                        </motion.h2>

                        <motion.p
                            variants={itemAnimation}
                            className="text-sm sm:text-base text-gray-400 leading-relaxed"
                        >
                            {about.headline}
                        </motion.p>
                    </div>

                    {/* Main Story Panel */}
                    <motion.div
                        variants={itemAnimation}
                        className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10 space-y-6"
                    >
                        <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                            {about.paragraphs?.map((p, idx) => (
                                <p key={idx} className="leading-relaxed">
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Engineering Pillars */}
                        <div className="pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {about.pillars?.map((pillar, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-2"
                                >
                                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <HiOutlineCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                        <span>{pillar.title}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Bar */}
                        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                            <div className="text-xs text-gray-400 font-mono">
                                Available for remote full-time & high-impact contract roles
                            </div>
                            <Link href="/contact">
                                <Button className="rounded-full px-5 py-2 text-xs sm:text-sm font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all">
                                    <span>Let's Discuss Opportunities</span>
                                    <HiArrowRight className="ml-2 w-3.5 h-3.5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
