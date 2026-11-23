"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiCode } from 'react-icons/hi';
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
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-white">
                    <HiCode className="w-5 h-5 text-white/90" />
                    <span className="text-sm font-medium text-white/90">Portfolio Projects</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Featured Work & Projects
                </h1>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    A curated selection of verified software engineering systems, demonstrating expertise in Python backends, Next.js full-stack applications, and Clean Architecture.
                </p>
            </div>

            <div className="flex items-center flex-shrink-0 pt-2 md:pt-0">
                <Button
                    variant="expandIcon"
                    Icon={HiArrowRight}
                    iconPlacement="right"
                    className="rounded-full px-5 py-5 sm:px-6 sm:py-6 text-sm sm:text-base font-semibold"
                    asChild
                >
                    <a
                        href={config.social.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub
                    </a>
                </Button>
            </div>
        </div>
    </motion.div>
);

export default SectionTitle;
