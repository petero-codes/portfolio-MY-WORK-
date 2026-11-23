"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { titleAnimation } from './Animations';

const SectionTitle = () => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={titleAnimation}
        className="mb-12 space-y-6"
    >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    <HiCode className="w-4 h-4 text-emerald-400" />
                    <span>Technical Case Studies</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Engineering Projects & Case Studies
                </h1>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    Verified production applications and open-source systems. Each case study details actual software architectures, workflow rules, database integrations, and key engineering trade-offs.
                </p>
            </div>

            <div className="flex items-center flex-shrink-0">
                <Button
                    variant="outline"
                    className="rounded-full px-5 py-5 text-sm font-medium border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 transition-all"
                    asChild
                >
                    <a
                        href={config.social.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                    >
                        <FaGithub className="w-4 h-4" />
                        <span>GitHub Profile</span>
                        <HiArrowRight className="w-4 h-4" />
                    </a>
                </Button>
            </div>
        </div>
    </motion.div>
);

export default SectionTitle;
