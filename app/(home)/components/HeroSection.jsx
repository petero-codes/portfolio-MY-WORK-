/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiTypescript, SiReact, SiDocker } from 'react-icons/si';
import { config } from '@/config';
import Link from 'next/link';
import { BackgroundPresets } from '@/components/ui/background-effects';
import { motion } from 'framer-motion';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
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

const coreTech = [
  { name: "Python", icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
  { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
  { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
  { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
];

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative py-12 md:py-20">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center space-y-8 relative"
        >
          {/* Engineering Availability Badge */}
          <motion.div
            variants={itemAnimation}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Remote Roles: Full-Stack &bull; Backend/Python &bull; AI Engineering</span>
          </motion.div>

          {/* Primary Name & Headline */}
          <div className="space-y-3">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
            >
              Hi, I'm <span className="text-white underline decoration-white/30 decoration-2 underline-offset-8">{config.developer.name}</span>
            </motion.h1>

            <motion.h2
              variants={itemAnimation}
              className="text-lg sm:text-2xl md:text-3xl font-medium text-white/80 max-w-3xl mx-auto"
            >
              {config.developer.title}
            </motion.h2>
          </div>

          {/* Concise Technical Introduction */}
          <motion.p
            variants={itemAnimation}
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            I build resilient full-stack systems, high-throughput Python backends, and rigorous AI evaluation workflows. Experienced with Clean Architecture, SQL Server/PostgreSQL, distributed processing, and production quality standards.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <Link href="/projects">
              <Button
                className="rounded-full px-6 py-5 text-sm sm:text-base font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10"
              >
                <span>View Projects</span>
                <HiArrowRight className="ml-2 w-4 h-4" />
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
                className="rounded-full px-6 py-5 text-sm sm:text-base font-semibold border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <HiDownload className="mr-2 w-4 h-4" />
                <span>Download CV</span>
              </Button>
            </a>

            <Link href="/contact">
              <Button
                variant="ghost"
                className="rounded-full px-5 py-5 text-sm sm:text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <HiMail className="mr-2 w-4 h-4" />
                <span>Contact Me</span>
              </Button>
            </Link>
          </motion.div>

          {/* Direct Profile Links */}
          <motion.div
            variants={itemAnimation}
            className="flex items-center justify-center gap-6 pt-1 text-sm text-gray-400"
          >
            <a
              href={config.social.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-mono text-xs">github.com/{config.social.github}</span>
            </a>

            <span className="text-gray-600">&bull;</span>

            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
              <span className="text-xs">LinkedIn</span>
            </a>
          </motion.div>

          {/* Verified Core Technologies Strip */}
          <motion.div
            variants={itemAnimation}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
              Core Engineering Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {coreTech.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:border-white/20 transition-all"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Subtle Ambient Background Gradient */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-white/5 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
