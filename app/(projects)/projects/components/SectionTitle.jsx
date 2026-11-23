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
        className="mb-10 sm:mb-14 space-y-6"
    >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3.5 max-w-3xl">
                <div className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-white">
                    <HiCode className="w-5 h-5 text-white/90" />
                    <span className="text-sm font-medium text-white/90">Curated Systems Portfolio</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                    Featured Systems & Case Studies
                </h1>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    Verified software engineering implementations across Python backend microservices, Clean Architecture enterprise prototypes, desktop systems automation, and client-side financial analytics. Every project is documented with explicit scope attribution, verified repository code, and concrete test coverage.
                </p>

                {/* Scope & Authenticity Disclosures */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-white/60">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        5 Evaluated Systems
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Clean Architecture Decoupling
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        Explicit Scope & Attribution
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Simulated Components Disclosed
                    </span>
                </div>
            </div>

            <div className="flex items-center flex-shrink-0 pt-2 md:pt-0">
                <Button
                    variant="expandIcon"
                    Icon={HiArrowRight}
                    iconPlacement="right"
                    className="rounded-full px-5 py-5 sm:px-6 sm:py-6 text-sm sm:text-base font-semibold mirror-effect text-white hover:bg-white/10"
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
