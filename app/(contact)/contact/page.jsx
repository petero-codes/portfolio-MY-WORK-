/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundEffects from '@/components/ui/background-effects';
import ContactForm from './components/ContactForm';
import { config } from '@/config';
import { HiMail } from 'react-icons/hi';

const ContactPage = () => {
    const contactInfo = config.contactInfo || [];

    return (
        <section className="relative min-h-[calc(100vh-140px)] flex items-center justify-center py-12 md:py-16" id="contact">
            <BackgroundEffects
                variant="corners"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 max-w-2xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 backdrop-blur-md">
                        <HiMail className="w-4 h-4 text-emerald-400" />
                        <span>Direct Communication</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Get In Touch
                    </h1>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        Have a full-stack, Python backend, or AI evaluation role? Looking to collaborate on high-integrity software? Send a direct message below.
                    </p>
                </motion.div>

                <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                    {/* Contact Form Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="w-full lg:w-2/3 glass-panel rounded-3xl p-6 sm:p-8 md:p-10"
                    >
                        <h2 className="text-xl font-bold text-white mb-2">Send a Message</h2>
                        <p className="text-xs sm:text-sm text-gray-400 mb-6">
                            Deliver a message directly to my verified inbox at <span className="text-emerald-400 font-mono">{config.social.email}</span>.
                        </p>
                        <ContactForm />
                    </motion.div>

                    {/* Contact Details Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="w-full lg:w-1/3 glass-panel rounded-3xl p-6 sm:p-8 space-y-6"
                    >
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">Direct Channels</h2>
                            <p className="text-xs text-gray-400">Verified links & professional profiles</p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all">
                                    <div className="p-2 rounded-lg bg-white/5 text-gray-300 flex-shrink-0 mt-0.5">
                                        {info.icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-0.5">
                                            {info.label}
                                        </p>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs sm:text-sm text-white hover:text-emerald-400 transition-colors break-words font-medium"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-xs sm:text-sm text-white break-words font-medium">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
