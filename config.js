import React from "react";
import { FaGithub, FaMapPin, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiServer, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Peter Njuguna",
        title: "Full-Stack Developer | Python & Backend Engineering | AI Evaluation",
        shortBio: "Software Engineer specializing in Python, Next.js, FastAPI, Clean Architecture, and AI evaluation infrastructure. Focused on building verifiable, production-grade applications."
    },
    social: {
        github: "petero-codes",
        githubUrl: "https://github.com/petero-codes",
        linkedin: "https://linkedin.com/in/peter-njuguna-13b00a411",
        email: "waynelulu6@gmail.com",
        phone: "+254 712 953 342",
        location: "Nairobi, Kenya"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    projects: [
        {
            id: 1,
            title: "KenGen ICT Budgeting Portal",
            tagline: "Enterprise Clean Architecture Budgeting & Approval Platform",
            category: "Full-Stack & Enterprise Systems",
            highlight: "Clean Architecture & SQL Server Integration",
            description: "Enterprise financial budgeting platform engineered for KenGen ICT annual budget planning. Implemented Clean Architecture (Domain → Application → Infrastructure), tree-based dynamic approval routing walking organizational manager hierarchies, role-based access control (Staff → Manager → GM → Finance → Finalised), immutable audit logging, and automated SAP-compliant CSV exports.",
            image: "/projects/project-1.webp",
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "RBAC"],
            github: "https://github.com/petero-codes/budget-planner",
            demo: "https://github.com/petero-codes/budget-planner"
        },
        {
            id: 2,
            title: "Seekon Sneakerverse E-Commerce",
            tagline: "Modern E-Commerce Storefront with AI Assistance & State Management",
            category: "Full-Stack & E-Commerce",
            highlight: "Redux Toolkit & Responsive Storefront",
            description: "Full-featured e-commerce web platform for footwear discovery and purchase. Engineered responsive product catalogs with multi-faceted filtering (brand, size, price), Redux Toolkit state management for persistent shopping cart & checkout flows, an interactive AI shopping assistant widget, and an administrative order management dashboard.",
            image: "/projects/project-3.webp",
            technologies: ["React 18", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion", "REST APIs"],
            github: "https://github.com/petero-codes/frontend-sneeker-store",
            demo: "https://frontend-sneeker-store.vercel.app"
        },
        {
            id: 3,
            title: "AI-Powered Code Review Assistant",
            tagline: "High-Throughput Static Analysis & Model Output Evaluation API",
            category: "AI & Backend Engineering",
            highlight: "FastAPI Backend & Benchmark Scoring",
            description: "High-throughput Python backend service designed with FastAPI and SQLAlchemy for automated code quality assessment, static analysis heuristics, security defect detection, and model output benchmarking. Features containerized Docker deployments and structured benchmark metrics.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "Docker", "SQLite", "Pydantic", "REST APIs"],
            github: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            demo: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant"
        },
        {
            id: 4,
            title: "Autonomous Systems Automation Engine",
            tagline: "Low-Level Windows Process & Hardware Simulation Engine",
            category: "Systems & Python Automation",
            highlight: "Kernel Driver Bindings & Stateful Automation",
            description: "Low-level Windows automation platform engineered with Python and C-based kernel driver bindings (Interception). Features procedural code execution, human-physics mouse movement curves, multi-window process management, session state resumption, and comprehensive integration test suites.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Interception Driver", "Win32 API", "PyTest", "Process Management", "Windows OS"],
            github: "https://github.com/petero-codes/automation-",
            demo: "https://github.com/petero-codes/automation-"
        },
        {
            id: 5,
            title: "Finance Club Market Analytics Dashboard",
            tagline: "Real-Time Asset Metrics & Interactive Market Analytics",
            category: "Frontend & Analytics",
            highlight: "Real-Time Visualizations & Financial Metrics",
            description: "Real-time market analytics dashboard built with React and Tailwind CSS. Features interactive visual charting, financial metric computation, responsive asset performance summaries, and client-side cached data fetching for fast user interaction.",
            image: "/projects/project-5.webp",
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vite"],
            github: "https://github.com/petero-codes/finnanceclub",
            demo: "https://finnanceclub.vercel.app/dashboard"
        }
    ],
    curatedRepos: [
        {
            name: "budget-planner",
            title: "KenGen ICT Budgeting Portal",
            description: "Secure Next.js 14 App Router budgeting portal with Clean Architecture, SQL Server, and multi-tier approval workflows.",
            language: "TypeScript",
            languageColor: "#3178c6",
            html_url: "https://github.com/petero-codes/budget-planner",
            stars: 0,
            forks: 0
        },
        {
            name: "frontend-sneeker-store",
            title: "Seekon Sneakerverse",
            description: "Modern, responsive e-commerce frontend built with React 18, Vite, Redux Toolkit, and Tailwind CSS.",
            language: "JavaScript",
            languageColor: "#f1e05a",
            html_url: "https://github.com/petero-codes/frontend-sneeker-store",
            stars: 0,
            forks: 0
        },
        {
            name: "automation-",
            title: "Windows Automation Engine",
            description: "Low-level autonomous workforce platform engineered with Python, kernel driver bindings, and human-physics input curves.",
            language: "Python",
            languageColor: "#3572A5",
            html_url: "https://github.com/petero-codes/automation-",
            stars: 0,
            forks: 0
        },
        {
            name: "AI-Powered-Code-Review-Assistant",
            title: "AI Code Review Assistant",
            description: "Automated code quality, static analysis heuristics, and model benchmark evaluation backend built with FastAPI and Python.",
            language: "Python",
            languageColor: "#3572A5",
            html_url: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            stars: 0,
            forks: 0
        },
        {
            name: "finnanceclub",
            title: "Finance Club Dashboard",
            description: "Interactive analytics dashboard for financial asset metrics, portfolio tracking, and real-time visualization.",
            language: "TypeScript",
            languageColor: "#3178c6",
            html_url: "https://github.com/petero-codes/finnanceclub",
            stars: 0,
            forks: 0
        },
        {
            name: "greatness-within-website",
            title: "Greatness Within Web",
            description: "Responsive Next.js web application showcasing client-side animation patterns, Tailwind design systems, and component architecture.",
            language: "JavaScript",
            languageColor: "#f1e05a",
            html_url: "https://github.com/petero-codes/greatness-within-website",
            stars: 0,
            forks: 0
        }
    ],
    skillsCategories: [
        {
            title: "Backend & Systems",
            icon: <HiServer className="w-5 h-5 text-white" />,
            description: "High-throughput APIs, services, authentication, and architectural patterns",
            skills: [
                { name: "Python", context: "FastAPI, Systems, Automation" },
                { name: "FastAPI", context: "Async REST APIs, Pydantic" },
                { name: "Node.js & Express", context: "RESTful Endpoints, Middleware" },
                { name: "Clean Architecture", context: "Decoupled Domain & Infrastructure" },
                { name: "Auth & RBAC", context: "Session Cookies, Multi-Tier Roles" }
            ]
        },
        {
            title: "Frontend Engineering",
            icon: <HiLightningBolt className="w-5 h-5 text-white" />,
            description: "Responsive, accessible, and high-performance client applications",
            skills: [
                { name: "React 18", context: "Hooks, Context, Modular Components" },
                { name: "Next.js (App Router)", context: "SSR, SSG, Server Actions" },
                { name: "TypeScript", context: "Strict Type Safety, Interfaces" },
                { name: "Tailwind CSS", context: "Glassmorphism, Responsive Tokens" },
                { name: "Redux Toolkit", context: "Global State Slices, Selectors" }
            ]
        },
        {
            title: "Databases & Infrastructure",
            icon: <HiDatabase className="w-5 h-5 text-white" />,
            description: "Relational persistence, enterprise schemas, and containerization",
            skills: [
                { name: "Microsoft SQL Server", context: "Enterprise Schemas, msnodesqlv8" },
                { name: "PostgreSQL", context: "Relational Modeling, Indexing" },
                { name: "MongoDB", context: "Document Schemas, Aggregations" },
                { name: "Docker", context: "Containerization, Multi-Stage Builds" },
                { name: "Redis", context: "In-Memory Caching & Sessions" }
            ]
        },
        {
            title: "AI Evaluation & QA",
            icon: <HiShieldCheck className="w-5 h-5 text-white" />,
            description: "AI model evaluation, prompt rubrics, and automated testing",
            skills: [
                { name: "Model Output Assessment", context: "Factual Precision, Hallucination QA" },
                { name: "Benchmark Evaluation", context: "Comparative Model Heuristics" },
                { name: "Prompt Engineering", context: "Structured System Prompts" },
                { name: "Automated Testing", context: "Vitest, PyTest, Integration Testing" },
                { name: "Git & GitHub", context: "Branch Hygiene, Code Reviews" }
            ]
        }
    ],
    experiences: [
        {
            position: "Senior Full-Stack / AI Engineer",
            company: "Handshake AI",
            period: "2025 - Present",
            location: "Remote",
            description: "Architecting backend services and AI assessment workflows to support distributed evaluation pipelines with high reliability.",
            responsibilities: [
                "Engineered backend services driving distributed AI evaluation and high-throughput processing sequences.",
                "Developed production-grade APIs and full-stack services utilizing Python, FastAPI, Next.js, PostgreSQL, and Redis.",
                "Enhanced backend services to maximize maintainability, testability, and responsiveness across distributed nodes.",
                "Collaborated asynchronously on architecture design, feature scoping, and technical code reviews."
            ],
            technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Distributed Systems"]
        },
        {
            position: "Full-Stack Software Engineer",
            company: "Outlier AI",
            period: "2024 - Present",
            location: "Remote",
            description: "Building evaluation tools, analytics dashboards, and asynchronous services for frontier AI assessment workflows.",
            responsibilities: [
                "Developed scalable evaluation interfaces, data review dashboards, and backend services for AI assessment pipelines.",
                "Designed asynchronous processing pipelines and optimized database queries to boost throughput.",
                "Implemented Git-based collaborative workflows and automated CI/CD deployment routines.",
                "Conducted comparative analyses of model outputs to verify factual precision, safety, and logical consistency."
            ],
            technologies: ["Python", "React.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"]
        },
        {
            position: "Software Engineer",
            company: "Scale AI",
            period: "2023 - 2024",
            location: "Remote",
            description: "Engineered distributed backend pipelines and high-volume data transformation engines supporting core AI infrastructure.",
            responsibilities: [
                "Engineered distributed backend services and data-processing pipelines supporting AI infrastructure.",
                "Improved system throughput, eliminated processing bottlenecks, and optimized resource efficiency.",
                "Implemented automated validation checks and real-time monitoring to uphold stringent data-quality standards.",
                "Partnered with machine learning teams to track performance regressions and implement robust edge-case handling."
            ],
            technologies: ["Python", "FastAPI", "Docker", "AWS", "Data Pipelines", "Redis"]
        },
        {
            position: "Software & ICT Engineering Intern",
            company: "KenGen (Kenya Electricity Generating Company)",
            period: "2024",
            location: "Nairobi, Kenya",
            description: "Engineered centralized annual budgeting platform with dynamic organizational hierarchy approval flows and SQL Server.",
            responsibilities: [
                "Architected annual budgeting portal utilizing Next.js 14, Clean Architecture, and TypeScript.",
                "Implemented dynamic tree-based approval routing walking organizational manager hierarchies without hardcoded job titles.",
                "Constructed SQL Server driver integration via msnodesqlv8 and enforced least-privilege security roles.",
                "Built automated SAP-compliant CSV export pipeline with full immutable audit history."
            ],
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "RBAC"]
        },
        {
            position: "Machine Learning & Software Developer",
            company: "IBM SkillsBuild",
            period: "2022 - 2023",
            location: "Remote",
            description: "Developed and released machine learning and NLP microservices within cloud environments, optimizing inference latency.",
            responsibilities: [
                "Developed and released machine learning and NLP microservices within cloud production environments.",
                "Architected scalable APIs and backend services for analytics workflows and real-time computation systems.",
                "Collaborated with cross-functional engineering teams to optimize model-serving pipelines and improve inference latency.",
                "Conducted benchmarking on model accuracy and throughput across iterative framework upgrades."
            ],
            technologies: ["Python", "Machine Learning", "FastAPI", "Docker", "Cloud APIs"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5 text-white" />,
            label: "GitHub",
            value: "@petero-codes",
            link: "https://github.com/petero-codes"
        },
        {
            icon: <FaLinkedin className="w-5 h-5 text-white" />,
            label: "LinkedIn",
            value: "Peter Njuguna",
            link: "https://linkedin.com/in/peter-njuguna-13b00a411"
        },
        {
            icon: <HiMail className="w-5 h-5 text-white" />,
            label: "Email",
            value: "waynelulu6@gmail.com",
            link: "mailto:waynelulu6@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5 text-white" />,
            label: "Phone",
            value: "+254 712 953 342",
            link: "tel:+254712953342"
        },
        {
            icon: <FaMapPin className="w-5 h-5 text-white" />,
            label: "Location",
            value: "Nairobi, Kenya",
            link: null
        }
    ]
};
