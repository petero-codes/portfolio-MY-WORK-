"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-8 border-t border-white/10 text-white"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-white/60 flex flex-wrap items-center justify-center sm:justify-start gap-1.5 leading-tight">
                        <span>© {new Date().getFullYear()} {config.developer.name}</span>
                        <span>•</span>
                        <span>All rights reserved</span>
                        <span>•</span>
                        <span>Full-Stack &amp; Python Developer</span>
                    </div>

                    <div className="flex items-center gap-4 text-white/60">
                        <a
                            href={config.social.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>

                        <a
                            href={config.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin className="w-4 h-4" />
                        </a>

                        <a
                            href={`mailto:${config.social.email}`}
                            className="hover:text-white transition-colors"
                            aria-label="Send Email"
                        >
                            <HiMail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
