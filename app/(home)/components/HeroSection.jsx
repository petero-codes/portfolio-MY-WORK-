/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center relative pt-8 pb-16" id="home">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center space-y-6 relative"
        >
          {/* Welcome Pill & Availability */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <motion.div
              variants={itemAnimation}
              className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-1.5 rounded-full text-white"
            >
              <HiCode className="w-4 h-4 text-white/90" />
              <span className="text-xs sm:text-sm font-medium text-white/90">Welcome to my portfolio</span>
            </motion.div>

            <motion.div
              variants={itemAnimation}
              className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-3.5 py-1.5 rounded-full text-xs text-white"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-white/80">Available for Remote Roles</span>
            </motion.div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
              <motion.span
                variants={textAnimation}
                className="block mb-2"
              >
                Hi, I'm {config.developer.name}
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-white/70 text-xl sm:text-2xl md:text-3xl font-medium"
              >
                {config.developer.title}
              </motion.span>
            </motion.h1>
          </div>

          {/* Short Bio */}
          <motion.p
            variants={itemAnimation}
            className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            {config.developer.shortBio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-2"
          >
            <Link href="/projects">
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                View Projects
              </Button>
            </Link>

            <a
              href="/Peter_Njuguna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Peter_Njuguna_Resume.pdf"
            >
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 text-sm sm:text-base font-semibold mirror-effect mirror-glow text-white hover:text-white hover:bg-white/10 transition-all"
              >
                <HiDownload className="mr-2 w-4 h-4" />
                <span>Download CV</span>
              </Button>
            </a>

            <Link href="/contact">
              <Button
                variant="ghost"
                className="rounded-full px-5 py-6 text-sm sm:text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all"
              >
                <HiMail className="mr-2 w-4 h-4" />
                <span>Contact</span>
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemAnimation}
            className="flex items-center justify-center gap-6 pt-2 text-sm text-white/60"
          >
            <a
              href={config.social.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
              <span className="text-xs font-mono">github.com/{config.social.github}</span>
            </a>

            <span className="text-white/20">•</span>

            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
              <span className="text-xs">LinkedIn</span>
            </a>
          </motion.div>

          {/* Ambient Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>

        {/* Signature Bento Skills Showcase */}
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;
