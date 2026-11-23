"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { config } from '@/config';
import useSWR from 'swr';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
};

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Docker: '#2496ed'
};

const ITEMS_PER_PAGE = 6;
const GITHUB_API_URL = `https://api.github.com/users/${config.social.github}/repos`;

const getProjectSize = (index) => {
    const sizes = [
        "col-span-2 sm:col-span-1 md:col-span-2 row-span-1",
        "col-span-1 sm:row-span-2 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ];
    return sizes[index % sizes.length];
};

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('GitHub API rate limited or unavailable');
    }
    return res.json();
};

const ProjectSkeleton = () => (
    <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 min-h-[140px] h-full w-full">
        <div className="flex flex-col gap-3 h-full justify-between">
            <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <Skeleton className="h-4 w-32 bg-white/10" />
                    <Skeleton className="h-4 w-4 rounded-full bg-white/10" />
                </div>
                <Skeleton className="h-10 w-full bg-white/10" />
            </div>
            <div className="flex items-center space-x-2">
                <Skeleton className="h-3 w-12 bg-white/10" />
                <Skeleton className="h-3 w-8 bg-white/10" />
            </div>
        </div>
    </div>
);

const ProjectCard = ({ project, size }) => {
    const topics = project.topics || [];

    return (
        <motion.a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemAnimation}
            className={`relative group ${size}`}
        >
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all cursor-pointer h-full w-full min-h-[140px] flex flex-col justify-between hover:bg-white/[0.06]">
                <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                            <FaGithub className="w-4 h-4 text-white/80 flex-shrink-0" />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <h3 className="font-semibold text-white text-sm truncate font-mono">
                                            {project.name}
                                        </h3>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{project.title || project.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <HiExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                        {project.description || "No description provided"}
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-3 mt-auto">
                    {topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {topics.slice(0, 2).map((topic) => (
                                <span
                                    key={topic}
                                    className="text-[10px] bg-white/10 text-gray-300 px-2 py-0.5 rounded-full border border-white/10"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                        {project.language && (
                            <div className="flex items-center space-x-1.5">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{
                                        backgroundColor: project.languageColor || languageColors[project.language] || '#ccc'
                                    }}
                                />
                                <span>{project.language}</span>
                            </div>
                        )}
                        <div className="flex items-center space-x-1">
                            <FaStar className="w-3 h-3 text-gray-400" />
                            <span>{project.stargazers_count || project.stars || 0}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaCodeBranch className="w-3 h-3 text-gray-400" />
                            <span>{project.forks_count || project.forks || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

const GithubProjects = () => {
    const { data, isLoading } = useSWR(
        `${GITHUB_API_URL}?sort=updated&per_page=100&direction=desc`,
        fetcher,
        {
            revalidateOnFocus: false,
            shouldRetryOnError: false,
            dedupingInterval: 60000,
        }
    );

    const projects = React.useMemo(() => {
        if (data && Array.isArray(data) && data.length > 0) {
            const filtered = data
                .filter(project => !project.fork && !project.private)
                .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                .slice(0, ITEMS_PER_PAGE);

            if (filtered.length > 0) {
                return filtered.map((project, index) => ({
                    ...project,
                    size: getProjectSize(index)
                }));
            }
        }

        // Fallback to verified curated repositories from config
        return (config.curatedRepos || []).map((project, index) => ({
            ...project,
            id: project.name,
            size: getProjectSize(index)
        }));
    }, [data]);

    return (
        <section className="py-20 relative border-t border-white/10" id="github-projects">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="space-y-12">
                    <div className="space-y-4 text-center max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
                        >
                            <FaGithub className="w-4 h-4 text-white" />
                            <span>Public Repositories</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
                        >
                            Featured Open Source Work
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm sm:text-base text-gray-400"
                        >
                            Direct codebase repositories on GitHub demonstrating Clean Architecture, systems programming, and modern full-stack workflows.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4 w-full max-w-6xl mx-auto"
                    >
                        {isLoading && !data ? (
                            Array(ITEMS_PER_PAGE).fill(0).map((_, index) => (
                                <div key={index} className={getProjectSize(index)}>
                                    <ProjectSkeleton />
                                </div>
                            ))
                        ) : (
                            projects.map((project) => (
                                <ProjectCard key={project.id || project.name} project={project} size={project.size} />
                            ))
                        )}
                    </motion.div>

                    <div className="flex justify-center items-center pt-4">
                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-5 text-sm font-medium border-white/20 hover:border-white/40 text-white bg-white/5 hover:bg-white/10 transition-all"
                            asChild
                        >
                            <a
                                href={config.social.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span>Explore All Repositories on GitHub</span>
                                <HiExternalLink className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubProjects;
