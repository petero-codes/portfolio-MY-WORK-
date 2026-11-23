"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-12 border-t border-white/10 glass-panel mt-16 text-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left space-y-1">
                        <h3 className="text-base font-bold text-white tracking-tight">
                            {config.developer.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                            {config.developer.title}
                        </p>
                    </div>

                    {/* Quick Profile Links */}
                    <div className="flex items-center gap-4 text-gray-400">
                        <a
                            href={config.social.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-all"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>

                        <a
                            href={config.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-[#0A66C2] transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin className="w-4 h-4" />
                        </a>

                        <a
                            href={`mailto:${config.social.email}`}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-emerald-400 transition-all"
                            aria-label="Send Email"
                        >
                            <HiMail className="w-4 h-4" />
                        </a>

                        <a
                            href="/Peter_Njuguna_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-cyan-400 transition-all"
                            aria-label="Download CV"
                        >
                            <FaFileDownload className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-xs text-gray-500 font-mono">
                    <div>
                        &copy; {new Date().getFullYear()} {config.developer.name}. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
                        <Link href="/projects" className="hover:text-gray-300 transition-colors">Case Studies</Link>
                        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
