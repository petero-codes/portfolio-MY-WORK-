import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { config } from '@/config';
import { Button } from '@/components/ui/button';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { HiOutlineServer, HiOutlineShieldCheck, HiOutlineCpuChip, HiCheckCircle } from 'react-icons/hi2';

export async function generateStaticParams() {
    return (config.projects || []).map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = (config.projects || []).find((p) => p.slug === slug);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | Engineering Case Study`,
        description: project.description,
        openGraph: {
            title: `${project.title} — Peter Njuguna Case Study`,
            description: project.description,
            url: `https://iam-petero.vercel.app/projects/${project.slug}`,
            images: [project.image],
        },
    };
}

export default async function ProjectCaseStudyPage({ params }) {
    const { slug } = await params;
    const project = (config.projects || []).find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen py-16 sm:py-20 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
                {/* Back Link */}
                <div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors font-mono"
                    >
                        <FaArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to All Projects</span>
                    </Link>
                </div>

                {/* Hero Card */}
                <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2.5">
                            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                                {project.badge}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">
                                {project.category}
                            </span>
                        </div>
                        <span className="text-xs text-emerald-400 font-mono font-semibold">
                            Role: {project.role}
                        </span>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-base sm:text-lg text-emerald-400 font-medium">
                            {project.tagline}
                        </p>
                    </div>

                    {/* Image Preview */}
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl">
                        <img
                            src={project.image}
                            alt={`Preview of ${project.title}`}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Quick CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.github && (
                            <Button
                                className="rounded-full px-5 py-5 text-xs sm:text-sm font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all"
                                asChild
                            >
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    <span>Inspect GitHub Repository</span>
                                    <FaExternalLinkAlt className="w-3 h-3 text-gray-700" />
                                </a>
                            </Button>
                        )}

                        {project.demo && project.demo !== project.github && (
                            <Button
                                variant="outline"
                                className="rounded-full px-5 py-5 text-xs sm:text-sm font-semibold border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 transition-all"
                                asChild
                            >
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2"
                                >
                                    <span>Launch Live Demo</span>
                                    <FaExternalLinkAlt className="w-3 h-3" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Verifiable Metrics Matrix */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {project.metrics.map((m, idx) => (
                            <div
                                key={idx}
                                className="glass-panel rounded-2xl p-4 sm:p-5 text-center space-y-1"
                            >
                                <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                                    {m.label}
                                </p>
                                <p className="text-sm sm:text-base font-bold text-white">
                                    {m.value}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Workflow Architecture Stream */}
                {project.workflow && (
                    <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                            <HiOutlineCpuChip className="w-4 h-4" />
                            <span>System Workflow Architecture</span>
                        </div>
                        <p className="text-xs sm:text-sm font-mono text-gray-200 bg-white/5 p-4 rounded-xl border border-white/10 leading-relaxed">
                            {project.workflow}
                        </p>
                    </div>
                )}

                {/* Problem & Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-3">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            Problem Statement
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {project.problem}
                        </p>
                    </div>

                    <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-3">
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            Architecture & Design
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {project.architecture}
                        </p>
                    </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                        <HiOutlineServer className="w-4 h-4" />
                        <span>Engineering Challenges & Solutions</span>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                        {project.challenges}
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                            <HiOutlineShieldCheck className="w-4 h-4" />
                            <span>Core Engineering Decisions & Trade-offs</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {project.decisions}
                        </p>
                    </div>
                </div>

                {/* Technology Badges */}
                <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-3">
                    <p className="text-xs font-mono uppercase tracking-wider text-gray-400">
                        Technologies & Frameworks
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 font-mono"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                    >
                        <FaArrowLeft className="w-3.5 h-3.5" />
                        <span>All Case Studies</span>
                    </Link>

                    <Link href="/contact">
                        <Button className="rounded-full px-5 py-2 text-xs sm:text-sm font-semibold bg-white text-gray-950 hover:bg-gray-200 transition-all">
                            Discuss This Project
                        </Button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
