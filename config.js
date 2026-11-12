import { FaDiscord, FaGithub, FaMapPin, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Peter Njuguna",
        title: "Software Engineer & AI Systems Specialist",
    },
    social: {
        github: "petero-codes",
        linkedin: "https://linkedin.com/in/peter-njuguna-13b00a411",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Distributed AI Evaluation Platform",
            description: "Scalable AI evaluation platform engineered for distributed model benchmark suites. Features automated task queue processing, hallucination detection heuristics, and structured analytics with sub-second response times across large-scale model evaluation workflows.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "Celery"],
            github: "https://github.com/petero-codes",
            demo: "https://github.com/petero-codes"
        },
        {
            id: 2,
            title: "Finance Club Dashboard",
            description: "An interactive analytics dashboard for financial asset metrics, portfolio tracking, and real-time data visualization. Integrated third-party market data feeds with client-side state caching and responsive charts for high-performance rendering.",
            image: "/projects/project-2.webp",
            technologies: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript"],
            github: "https://github.com/petero-codes",
            demo: "https://finnanceclub.vercel.app/dashboard"
        },
        {
            id: 3,
            title: "Full-Stack SaaS & Inventory Management System",
            description: "A production-grade SaaS application with Next.js, Node.js, PostgreSQL, Redis, and Tailwind CSS, implementing CI/CD deployment workflows. Architected role-based access control (RBAC), multi-tenant data isolation, automated database-backed transaction reporting, and secure payment processing.",
            image: "/projects/project-3.webp",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS", "Python"],
            github: "https://github.com/petero-codes",
            demo: "https://seekonapparelglobal.com"
        },
        {
            id: 4,
            title: "Developer Productivity CLI Tool",
            description: "A Python-based automation CLI to accelerate engineering workflows, API integrations, and container deployment pipelines. Automated Git branch hygiene checks, multi-service Docker orchestration, and environment configuration audits.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Click/Typer", "Docker", "Git APIs", "Rich"],
            github: "https://github.com/petero-codes",
            demo: "https://github.com/petero-codes"
        }
    ],
    skills: [
        {
            title: "Backend & AI Systems",
            icon: <HiDatabase />,
            description: "High-throughput APIs & AI Systems",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Python", level: "Expert", hot: true },
                { name: "FastAPI", level: "Expert", hot: true },
                { name: "Node.js / Express", level: "Advanced", hot: true },
                { name: "PostgreSQL & SQL", level: "Advanced" },
                { name: "Redis & Celery", level: "Advanced" },
                { name: "LLM Evaluation & RLHF", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Frontend & Web",
            icon: <HiCode />,
            description: "Interactive & Scalable Web Apps",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "React.js", level: "Advanced", hot: true },
                { name: "Next.js", level: "Advanced", hot: true },
                { name: "JavaScript / TypeScript", level: "Advanced", hot: true },
                { name: "TailwindCSS", level: "Expert" },
                { name: "Framer Motion", level: "Intermediate" },
                { name: "Redux & State Management", level: "Advanced" }
            ]
        },
        {
            title: "Cloud, DevOps & Tools",
            icon: <HiCube />,
            description: "Infrastructure, CI/CD & Distributed Systems",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Docker & Containers", level: "Advanced", hot: true },
                { name: "AWS & GCP", level: "Advanced" },
                { name: "Git & GitHub Actions", level: "Expert", hot: true },
                { name: "CI/CD & Linux", level: "Advanced" },
                { name: "Distributed Systems", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Senior Full-Stack / AI Engineer",
            company: "Handshake AI",
            period: "2025 - Present",
            location: "Remote",
            description: "Architecting high-performance backend infrastructure and AI assessment systems to power distributed evaluation workflows with enterprise reliability.",
            responsibilities: [
                "Engineered resilient backend architectures driving distributed AI evaluation and high-throughput processing sequences",
                "Developed production-grade APIs and full-stack services utilizing Python, FastAPI, Next.js, PostgreSQL, and Redis",
                "Revamped core services to maximize scalability, maintainability, and sub-second response times across distributed nodes",
                "Orchestrated asynchronous collaboration on system architecture planning, implementation strategies, and code reviews"
            ],
            technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Distributed Systems"]
        },
        {
            position: "Full-Stack Software Engineer",
            company: "Outlier AI",
            period: "2024 - Present",
            location: "Remote",
            description: "Building data-intensive evaluation platforms, interactive analytics dashboards, and asynchronous microservices for frontier AI assessment.",
            responsibilities: [
                "Developed scalable evaluation tools, analytics dashboards, and backend services for AI assessment workflows",
                "Designed asynchronous processing pipelines and streamlined database queries to boost system throughput",
                "Introduced Git-based collaborative workflows, resolved critical technical bottlenecks, and automated CI/CD deployment",
                "Conducted deep comparative analyses of model outputs to guarantee factual verification, safety, and logical consistency"
            ],
            technologies: ["Python", "React.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"]
        },
        {
            position: "Software Engineer",
            company: "Scale AI",
            period: "2023 - 2024",
            location: "Remote",
            description: "Engineered distributed backend pipelines and high-volume data transformation engines supporting core generative AI infrastructure.",
            responsibilities: [
                "Engineered distributed backend services and high-volume data-processing pipelines supporting core AI infrastructure",
                "Expanded system scalability, eliminated processing bottlenecks, and optimized resource efficiency in production environments",
                "Implemented automated validation checks and real-time monitoring to uphold stringent data-quality standards and high uptime",
                "Partnered with machine learning teams to track performance regressions and implement robust edge-case handling"
            ],
            technologies: ["Python", "FastAPI", "Docker", "AWS", "Data Pipelines", "Redis"]
        },
        {
            position: "Operational Systems Technician",
            company: "Aligner Tech",
            period: "2023 - 2024",
            location: "Remote",
            description: "Audited complex software-specific model behaviors, verifying strict alignment with software engineering and networking standards.",
            responsibilities: [
                "Audited software-specific responses to verify alignment with modern software development and network engineering standards",
                "Tracked and logged performance regressions across iterative system updates, documenting technical bugs and edge cases",
                "Partnered with project leads to troubleshoot prompt-response failures across highly complex technical domains",
                "Formulated rubrics and feedback loops to systematically elevate response factual consistency and logical soundness"
            ],
            technologies: ["JavaScript", "C#", "System Auditing", "Git", "Quality Assurance", "JIRA"]
        },
        {
            position: "Machine Learning Engineer",
            company: "IBM",
            period: "2022 - 2023",
            location: "Remote",
            description: "Created and released machine learning and NLP microservices within cloud production environments, optimizing model inference latency.",
            responsibilities: [
                "Created and released machine learning and NLP applications within cloud-based production environments",
                "Architected scalable APIs and backend services for analytics workflows and real-time computation systems",
                "Collaborated with cross-functional engineering teams to optimize model-serving pipelines and improve inference latency",
                "Conducted benchmarking on model accuracy and throughput across iterative framework upgrades"
            ],
            technologies: ["Python", "Machine Learning", "NLP", "FastAPI", "Docker", "Cloud APIs"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@petero-codes",
            link: `https://github.com/petero-codes`
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Peter Njuguna",
            link: "https://linkedin.com/in/peter-njuguna-13b00a411"
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "waynelulu6@gmail.com",
            link: "mailto:waynelulu6@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+254 712 953 342",
            link: "tel:+254712953342"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Nairobi, Kenya",
            link: null
        }
    ]
};
