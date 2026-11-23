"use client"
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = config.NAV_ITEMS;

const NavLink = ({ href, label, isMobile = false, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative"
        >
            <motion.span
                className={`relative block ${
                    isMobile ? 'px-4 py-3 text-base' : 'px-4 py-2 text-sm font-medium'
                } text-white/70 hover:text-white transition-colors ${
                    isActive ? 'text-white font-semibold' : ''
                }`}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {label}
                {isActive && !isMobile && (
                    <motion.div
                        className="absolute inset-0 mirror-effect mirror-glow rounded-full"
                        layoutId="activeNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30
                        }}
                        style={{ zIndex: -1 }}
                    />
                )}
            </motion.span>
        </Link>
    );
};

const Logo = ({ isMobile = false }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link
            href="/"
            className="flex items-center space-x-2.5 hover:opacity-90 transition-opacity"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/30 bg-black flex items-center justify-center shadow-lg"
            >
                <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt={config.developer.name}
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <motion.span
                className="text-white font-bold tracking-tight text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {config.developer.name}
            </motion.span>
        </Link>
    </motion.div>
);

const Navigation = ({ isMobile = false, onLinkClick }) => (
    <motion.nav
        className={isMobile ? "flex flex-col space-y-2" : "hidden md:flex items-center space-x-2"}
        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isMobile ? 0 : 0.2, duration: 0.4 }}
    >
        {NAV_ITEMS.map((item, index) => (
            <motion.div
                key={item.href}
                initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: isMobile ? index * 0.1 : 0.1 * index }}
            >
                <NavLink {...item} isMobile={isMobile} onClick={onLinkClick} />
            </motion.div>
        ))}
    </motion.nav>
);

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                className="py-4 sm:py-6 z-50 text-white sticky top-0 bg-black/40 backdrop-blur-md border-b border-white/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 max-w-6xl">
                    <Logo />

                    <div className="hidden md:flex items-center space-x-6">
                        <Navigation />
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                        <a
                            href="/Peter_Njuguna_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Peter_Njuguna_Resume.pdf"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full text-xs font-semibold mirror-effect mirror-glow text-white hover:bg-white/10 border-white/20 px-4 py-2"
                            >
                                Resume (PDF)
                            </Button>
                        </a>

                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="rounded-full font-semibold bg-white text-gray-950 hover:bg-gray-200 text-xs px-4 py-2 transition-all shadow-md"
                            >
                                Contact
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-white/80 hover:text-white transition-colors rounded-lg bg-white/5 border border-white/10"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="w-6 h-6" />
                        ) : (
                            <HiMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                            onClick={closeMobileMenu}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 mirror-effect border-l border-white/10 z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col h-full p-6 justify-between">
                                <div className="space-y-6">
                                    {/* Mobile Logo & Close Button */}
                                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                                        <Logo isMobile={true} />
                                        <button
                                            onClick={closeMobileMenu}
                                            className="p-1.5 text-white/70 hover:text-white"
                                            aria-label="Close menu"
                                        >
                                            <HiX className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Mobile Navigation */}
                                    <Navigation isMobile={true} onLinkClick={closeMobileMenu} />
                                </div>

                                <div className="space-y-3 pt-6 border-t border-white/10">
                                    <a
                                        href="/Peter_Njuguna_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download="Peter_Njuguna_Resume.pdf"
                                        className="block w-full"
                                    >
                                        <Button
                                            variant="outline"
                                            className="w-full rounded-xl text-xs font-semibold mirror-effect text-white border-white/20"
                                        >
                                            Resume (PDF)
                                        </Button>
                                    </a>

                                    <Link href="/contact" className="block w-full" onClick={closeMobileMenu}>
                                        <Button className="w-full rounded-xl text-xs font-semibold bg-white text-gray-950 hover:bg-gray-200">
                                            Contact
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
