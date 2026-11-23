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
    const isActive = href === '/' ? pathname === '/' : pathname === href || (href.startsWith('/#') && pathname === '/');

    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative"
        >
            <motion.span
                className={`relative block ${
                    isMobile ? 'px-4 py-2.5 text-base font-medium' : 'px-3.5 py-1.5 text-xs sm:text-sm font-medium'
                } text-gray-300 hover:text-white transition-colors ${
                    isActive ? 'text-white' : ''
                }`}
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {label}
                {isActive && !isMobile && (
                    <motion.div
                        className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md border border-white/15"
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
    <Link
        href="/"
        className="flex items-center space-x-2.5 hover:opacity-90 transition-opacity"
    >
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
            <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Peter Njuguna"
                className="w-full h-full object-cover rounded-full"
            />
        </div>
        <div className={`flex flex-col ${isMobile ? 'flex' : 'hidden sm:flex'}`}>
            <span className="text-white text-sm font-bold tracking-tight">
                {config.developer.name}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-medium">
                Full-Stack &bull; AI
            </span>
        </div>
    </Link>
);

const Navigation = ({ isMobile = false, onLinkClick }) => (
    <nav className={isMobile ? "flex flex-col space-y-1" : "hidden lg:flex items-center space-x-1"}>
        {NAV_ITEMS.map((item) => (
            <NavLink
                key={item.href}
                {...item}
                isMobile={isMobile}
                onClick={onLinkClick}
            />
        ))}
    </nav>
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
                className="sticky top-0 z-50 text-white bg-black/60 backdrop-blur-xl border-b border-white/10 py-3 sm:py-3.5 transition-all"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <Logo />
                    
                    <div className="glass-panel px-3 py-1.5 rounded-full hidden lg:block">
                        <Navigation />
                    </div>

                    <div className="hidden sm:flex items-center gap-3">
                        <a
                            href="/Peter_Njuguna_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-block"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full text-xs font-mono font-medium border-white/20 hover:border-white/40 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5"
                            >
                                Resume (PDF)
                            </Button>
                        </a>

                        <Link href="/contact">
                            <Button
                                size="sm"
                                className="rounded-full font-semibold bg-white text-gray-950 hover:bg-gray-200 text-xs px-4 py-2 transition-all shadow-md"
                            >
                                Get in Touch
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg bg-white/5 border border-white/10"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <HiX className="w-5 h-5" />
                        ) : (
                            <HiMenu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
                            onClick={closeMobileMenu}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                            className="fixed top-0 right-0 h-full w-72 glass-panel border-l border-white/10 z-50 lg:hidden overflow-y-auto p-6 flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <Logo isMobile={true} />
                                    <button
                                        onClick={closeMobileMenu}
                                        className="p-1.5 text-gray-400 hover:text-white rounded-lg bg-white/5"
                                        aria-label="Close menu"
                                    >
                                        <HiX className="w-5 h-5" />
                                    </button>
                                </div>

                                <Navigation isMobile={true} onLinkClick={closeMobileMenu} />
                            </div>

                            <div className="pt-6 border-t border-white/10 space-y-3">
                                <a
                                    href="/Peter_Njuguna_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl text-xs font-mono border-white/20 text-gray-200 bg-white/5"
                                    >
                                        Download CV (PDF)
                                    </Button>
                                </a>

                                <Link href="/contact" className="block w-full" onClick={closeMobileMenu}>
                                    <Button className="w-full rounded-xl text-xs font-semibold bg-white text-gray-950 hover:bg-gray-200">
                                        Get in Touch
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
