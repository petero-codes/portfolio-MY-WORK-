"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiServer, HiLightningBolt, HiDatabase, HiShieldCheck, HiOutlineSparkles } from 'react-icons/hi';
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

const iconMap = {
    HiServer: HiServer,
    HiLightningBolt: HiLightningBolt,
    HiDatabase: HiDatabase,
    HiShieldCheck: HiShieldCheck
};

const EngineeringSnapshot = () => {
    const snapshots = config.engineeringSnapshot || [];

    return (
        <section className="py-20 relative" id="snapshot">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
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
                            <HiOutlineSparkles className="w-5 h-5 text-white/90" />
                            <span className="text-sm font-medium text-white/90">Technical Scope</span>
                        </motion.div>

                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                        >
                            Engineering Snapshot
                        </motion.h2>
                        <motion.p
                            variants={itemAnimation}
                            className="text-base sm:text-lg text-white/70"
                        >
                            A focused overview of my core engineering strengths and demonstrated production capabilities
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {snapshots.map((item, idx) => {
                            const IconComponent = iconMap[item.icon] || HiServer;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemAnimation}
                                    className="mirror-effect mirror-effect-hover mirror-shine mirror-border rounded-2xl p-6 sm:p-7 relative overflow-hidden group"
                                >
                                    {/* Shiny overlay sweep */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                                    </div>

                                    {/* Glossy shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                                    </div>

                                    <div className="relative z-10 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-xl bg-black border border-white/30 flex items-center justify-center shadow-lg group-hover:border-white/60 transition-colors">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15">
                                                {item.badge}
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-white tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-medium text-white/90">
                                                {item.highlight}
                                            </p>
                                        </div>

                                        <p className="text-sm text-white/70 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EngineeringSnapshot;
