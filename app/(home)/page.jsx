"use client"
import React from 'react'
import HeroSection from './components/HeroSection'
import EngineeringSnapshot from './components/EngineeringSnapshot'
import ExperienceSection from './components/Experience'
import GithubProjects from './components/GithubProjects'
import SkillsSection from './components/Skills'
import AboutSection from './components/AboutSection'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <EngineeringSnapshot />
      <ExperienceSection />
      <GithubProjects />
      <SkillsSection />
      <AboutSection />
      
      {/* Contact CTA Section */}
      <section className="py-20 border-t border-white/10 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 text-center space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Discuss High-Impact Software Engineering?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I am actively interviewing for remote full-stack, Python backend, and AI evaluation positions. Reach out directly or review my case studies.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-950 text-sm font-semibold hover:bg-gray-200 transition-all shadow-xl"
                >
                  <span>Get In Touch</span>
                  <HiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-all backdrop-blur-md"
                >
                  <span>Explore Case Studies</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home;
