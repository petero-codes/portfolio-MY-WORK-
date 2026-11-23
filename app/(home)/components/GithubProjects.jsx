"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaSpinner } from 'react-icons/fa';
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
        transition: { staggerChildren: 0.15 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Docker: '#2496ed',
    Shell: '#89e051'
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
    <div className="rounded-xl sm:rounded-2xl bg-black border-white/30 border p-3 sm:p-4 md:p-5 min-h-[120px] sm:min-h-[140px] h-full w-full">
        <div className="flex flex-col gap-2 sm:gap-3 h-full justify-between">
            <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <Skeleton className="h-3 sm:h-4 w-24 sm:w-32 bg-white/10" />
                    <Skeleton className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <Skeleton className="h-8 sm:h-12 w-full bg-white/10" />
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Skeleton className="h-2 sm:h-2.5 w-10 sm:w-12 bg-white/10" />
                <Skeleton className="h-2 sm:h-2.5 w-8 sm:w-10 bg-white/10" />
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
            <div
                className="
                    mirror-effect
                    mirror-effect-hover
                    mirror-shine
                    mirror-border
                    p-3 sm:p-4 md:p-5
                    rounded-xl sm:rounded-2xl
                    cursor-pointer
                    relative overflow-hidden
                    h-full
                    w-full
                    min-h-[120px] sm:min-h-[140px]
                    flex flex-col
                    justify-between
                "
            >
                {/* Shiny overlay effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                </div>

                {/* Glossy shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between gap-2 sm:gap-3">
                    <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center space-x-1.5 sm:space-x-2 flex-1 min-w-0">
                                <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 flex-shrink-0" />
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <h3 className="font-semibold text-white text-xs sm:text-sm truncate">
                                                {project.name}
                                            </h3>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{project.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <HiExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
                        </div>

                        <p className="text-[11px] sm:text-xs text-white/70 line-clamp-2 leading-relaxed">
                            {project.description || "No description provided"}
                        </p>
                    </div>

                    <div className="space-y-2 pt-2 mt-auto">
                        {topics.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                                {topics.slice(0, 2).map((topic) => (
                                    <span
                                        key={topic}
                                        className="text-[9px] sm:text-[10px] bg-white/10 text-white/80 px-1.5 py-0.5 rounded-full border border-white/20"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex items-center justify-between text-[10px] sm:text-xs text-white/60">
                            {project.language && (
                                <div className="flex items-center space-x-1">
                                    <span
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: languageColors[project.language] || '#ccc' }}
                                    />
                                    <span>{project.language}</span>
                                </div>
                            )}

                            <div className="flex items-center space-x-3 ml-auto text-xs text-white/50">
                                <span className="flex items-center space-x-1">
                                    <FaCodeBranch className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                    <span>{project.forks_count ?? project.forks ?? 0}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

const GithubProjects = () => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading } = useSWR(GITHUB_API_URL, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false
    });

    const displayData = (data && Array.isArray(data) && data.length > 0)
        ? data
        : config.curatedRepos.map((repo, idx) => ({
            id: idx + 1,
            name: repo.title || repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
            stargazers_count: repo.stars,
            forks_count: repo.forks,
            topics: [repo.language.toLowerCase()]
        }));

    const paginatedProjects = displayData.slice(0, page * ITEMS_PER_PAGE);

    return (
        <section className="py-20 relative" id="github-projects">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-3 sm:space-y-4 text-center max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-2 mirror-effect mirror-glow px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white"
                        >
                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" />
                            <span className="text-xs sm:text-sm font-semibold text-white/90">Latest Github Projects</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
                        >
                            Open Source Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-white/70"
                        >
                            Check out my public repositories and codebases on GitHub
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 auto-rows-fr gap-3 sm:gap-4 w-full max-w-6xl mx-auto"
                    >
                        {isLoading && !data ? (
                            Array(ITEMS_PER_PAGE).fill(0).map((_, index) => (
                                <div key={index} className={getProjectSize(index)}>
                                    <ProjectSkeleton />
                                </div>
                            ))
                        ) : (
                            paginatedProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id || project.name}
                                    project={project}
                                    size={getProjectSize(index)}
                                />
                            ))
                        )}
                    </motion.div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8">
                        {displayData.length > paginatedProjects.length && (
                            <Button
                                variant="outline"
                                onClick={() => setPage(p => p + 1)}
                                className="rounded-full px-5 py-5 sm:px-6 sm:py-6 text-sm sm:text-base mirror-effect mirror-glow text-white hover:bg-white/10"
                            >
                                Load More Projects
                            </Button>
                        )}

                        <Button
                            variant="expandIcon"
                            Icon={FaGithub}
                            iconPlacement="right"
                            className="rounded-full px-5 py-5 sm:px-6 sm:py-6 text-sm sm:text-base font-semibold"
                            asChild
                        >
                            <a
                                href={config.social.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View More on GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubProjects;
