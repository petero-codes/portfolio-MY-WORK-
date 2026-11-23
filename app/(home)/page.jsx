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
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center space-y-6 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Open to New Engineering Opportunities
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Looking for a dependable Python backend engineer, full-stack developer, or AI evaluation specialist? Let&apos;s talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full mirror-effect mirror-effect-hover mirror-shine mirror-glow text-white text-sm font-semibold transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-gray-950 hover:bg-gray-200 text-sm font-semibold transition-all shadow-lg"
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
