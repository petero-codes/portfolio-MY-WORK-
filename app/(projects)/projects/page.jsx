"use client"
import React from 'react';
import BackgroundEffects from '@/components/ui/background-effects';
import { config } from '@/config';
import SectionTitle from './components/SectionTitle';
import { ProjectsList } from './components/ProjectsList';

const ProjectsPage = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20" id="projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <BackgroundEffects
                    variant="diagonal"
                    colors={{ first: "secondary", second: "secondary" }}
                    intensity="10"
                    blurAmount="3xl"
                />

                <div className="relative">
                    <SectionTitle />
                    <ProjectsList projects={config.projects} />
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
