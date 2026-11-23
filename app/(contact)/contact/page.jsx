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
        <section className="relative flex items-center justify-center py-8 md:py-12" id="contact">
            <BackgroundEffects
                variant="corners"
                colors={{ first: "secondary", second: "secondary" }}
                intensity="10"
                blurAmount="3xl"
            />

            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-10 sm:mb-14 w-full max-w-2xl"
                >
                    <div className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 rounded-full text-white">
                        <HiMail className="w-5 h-5 text-white/90" />
                        <span className="text-sm font-medium text-white/90">Get In Touch</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Let's Connect
                    </h1>
                    <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base px-2">
                        Have a full-stack, Python backend, or AI evaluation role? Looking to collaborate on high-integrity software? Drop me a message below.
                    </p>
                </motion.div>

                <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-2/3 mirror-effect mirror-glow p-5 sm:p-8 rounded-2xl"
                    >
                        <h2 className="text-xl font-bold text-white mb-2">Send a Message</h2>
                        <p className="text-xs sm:text-sm text-white/60 mb-6">
                            Delivers directly to my inbox at <span className="text-white/90 font-mono">{config.social.email}</span>.
                        </p>
                        <ContactForm />
                    </motion.div>

                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full lg:w-1/3 mirror-effect mirror-glow p-5 sm:p-8 rounded-2xl"
                    >
                        <h2 className="text-xl font-bold mb-4 sm:mb-6 text-white">Contact Information</h2>
                        <div className="space-y-4 sm:space-y-5">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="p-2.5 rounded-xl bg-black border border-white/20 flex-shrink-0 mt-0.5 text-white">
                                        {info.icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs text-white/50 mb-0.5">
                                            {info.label}
                                        </p>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs sm:text-sm text-white font-medium hover:underline break-words"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-xs sm:text-sm text-white font-medium break-words">
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
