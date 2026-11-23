"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiServer, HiLightningBolt, HiDatabase, HiShieldCheck } from 'react-icons/hi';
import { config } from '@/config';

const icons = {
    HiServer: <HiServer className="w-5 h-5 text-purple-400" />,
    HiLightningBolt: <HiLightningBolt className="w-5 h-5 text-blue-400" />,
    HiDatabase: <HiDatabase className="w-5 h-5 text-amber-400" />,
    HiShieldCheck: <HiShieldCheck className="w-5 h-5 text-emerald-400" />
};

const glowColors = {
    HiServer: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    HiLightningBolt: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    HiDatabase: "hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    HiShieldCheck: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
};

const borderGradients = {
    HiServer: "from-purple-500/30 via-transparent to-transparent",
    HiLightningBolt: "from-blue-500/30 via-transparent to-transparent",
    HiDatabase: "from-amber-500/30 via-transparent to-transparent",
    HiShieldCheck: "from-emerald-500/30 via-transparent to-transparent"
};

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
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

const EngineeringSnapshot = () => {
    const snapshots = config.engineeringSnapshot || [];

    return (
        <section className="py-20 relative" id="snapshot">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span>Engineering Snapshot</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                        >
                            Architectural Foundations & Disciplines
                        </motion.h2>

                        <motion.p
                            variants={itemAnimation}
                            className="text-sm sm:text-base text-gray-400 leading-relaxed"
                        >
                            Demonstrable engineering capabilities built across production enterprise software, full-stack web platforms, and automated evaluation systems.
                        </motion.p>
                    </div>

                    {/* 4-Panel Glass Matrix */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {snapshots.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                variants={itemAnimation}
                                className={`group relative rounded-2xl p-6 sm:p-7 glass-panel glass-panel-hover transition-all duration-300 overflow-hidden ${glowColors[item.icon]}`}
                            >
                                {/* Subtle Top Edge Gradient */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${borderGradients[item.icon]}`} />

                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                            {icons[item.icon]}
                                        </div>
                                        <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-gray-200 transition-colors">
                                            {item.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                                            {item.highlight}
                                        </p>
                                    </div>

                                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EngineeringSnapshot;
