import { FaGithub, FaMapPin, FaLinkedin, FaPhone, FaFileDownload } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiServer, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Peter Njuguna",
        title: "Full-Stack Developer | Backend & Python Engineering | AI Evaluation",
        shortBio: "Software Engineer specializing in Python, Next.js, FastAPI, Clean Architecture, and AI evaluation infrastructure. Focused on building verifiable, production-grade systems.",
        resumeUrl: "/Peter_Njuguna_Resume.pdf"
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
        { href: '/', label: 'Home' },
        { href: '/#snapshot', label: 'Snapshot' },
        { href: '/projects', label: 'Projects' },
        { href: '/#skills', label: 'Skills' },
        { href: '/#experience', label: 'Experience' },
        { href: '/#about', label: 'About' },
        { href: '/contact', label: 'Contact' }
    ],
    engineeringSnapshot: [
        {
            title: "Backend & Systems",
            icon: "HiServer",
            badge: "Core Specialisation",
            highlight: "Clean Architecture & High-Throughput APIs",
            description: "Engineered with Python, FastAPI, Node.js/Express, REST API versioning, and Redis. Emphasizes strict boundary isolation, repository patterns, and sub-second endpoint latency."
        },
        {
            title: "Enterprise Full-Stack",
            icon: "HiLightningBolt",
            badge: "Web Applications",
            highlight: "Next.js App Router & React 18",
            description: "Production web applications leveraging Next.js App Router, TypeScript, Redux Toolkit state slices, Tailwind CSS design systems, and fluid Framer Motion micro-interactions."
        },
        {
            title: "Database Engineering",
            icon: "HiDatabase",
            badge: "Persistence & Schemas",
            highlight: "SQL Server, PostgreSQL & MongoDB",
            description: "Enterprise schema design, relational migrations, least-privilege role configuration, and driver integration (msnodesqlv8, SQLAlchemy, Prisma, native SQL)."
        },
        {
            title: "AI Quality & Evaluation",
            icon: "HiShieldCheck",
            badge: "Verification & Heuristics",
            highlight: "LLM Output Assessment & Benchmark QA",
            description: "Comparative model output evaluation, hallucination detection heuristics, rubric validation, prompt engineering, and automated test pipelines."
        }
    ],
    about: {
        headline: "Engineering with Discipline, Clean Boundaries & Verifiable Results",
        paragraphs: [
            "I am a software engineer focused on building resilient full-stack systems, scalable Python backends, and rigorous AI evaluation workflows. My engineering philosophy centers on architectural integrity: decoupling business rules from external frameworks, enforcing strict type safety, and writing code that is straightforward to test and maintain.",
            "Whether architecting dynamic hierarchical approval workflows for KenGen ICT's budgeting portal, constructing modern e-commerce storefronts with Redux Toolkit, or wrapping low-level Windows kernel drivers for autonomous process execution, I build with attention to real-world edge cases, performance, and security.",
            "I thrive in collaborative, high-standard engineering environments and remote teams where technical honesty, clean code review, and demonstrable evidence take priority over superficial metrics."
        ],
        pillars: [
            { title: "Clean Architecture", desc: "Domain logic decoupled from UI and database drivers for testability and longevity." },
            { title: "Defensive Coding", desc: "Server-enforced validation rules, least-privilege security roles, and full auditability." },
            { title: "Rigorous QA", desc: "Automated test suites, continuous integration, and empirical AI model evaluation rubrics." }
        ]
    },
    projects: [
        {
            id: 1,
            slug: "kengen-budgeting-portal",
            title: "KenGen ICT Budgeting Portal",
            tagline: "Enterprise Clean Architecture Budgeting & Approval Platform",
            category: "Full-Stack & Enterprise Systems",
            role: "Full-Stack Software Engineer & System Architect",
            problem: "KenGen ICT needed a centralized annual budgeting portal to replace fragmented spreadsheets, enforce hierarchical multi-tier organizational approvals without hardcoding job titles, and generate immutable audit-logged financial CSV exports for SAP ERP integration.",
            description: "Enterprise financial budgeting platform engineered for KenGen ICT annual budget planning. Implemented Clean Architecture (Domain → Application → Infrastructure), tree-based dynamic approval routing walking organizational manager hierarchies (Users.managerId), multi-tier approval workflow (Staff → Manager → GM → Finance → Finalised), audit logging, and automated SAP-compliant CSV exports.",
            image: "/projects/project-1.webp",
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "Vitest", "RBAC"],
            github: "https://github.com/petero-codes/budget-planner",
            demo: "https://github.com/petero-codes/budget-planner",
            badge: "Enterprise Flagship",
            workflow: "Staff Submission → Line Manager Review → General Manager Authorization → Finance Validation → Finalised (Locked) → SAP CSV Export",
            architecture: "Clean Architecture separation: Domain entities isolated from application services and infrastructure adapters (mock in-memory and Microsoft SQL Server driver via msnodesqlv8).",
            challenges: "1. Dynamic tree-based approval routing: Traversed organizational hierarchies using managerId pointers dynamically without brittle hardcoded executive titles.\n2. Server-enforced finalization: Rendered budget items strictly immutable once Finance approves.\n3. Audit lineage: Complete chronological record of budget modifications, approvals, and user comments.",
            decisions: "Implemented signed session cookies with HMAC-SHA256, isolated database runtime access using least-privilege app_budget_ops role, and structured test coverage using Vitest.",
            metrics: [
                { label: "Architecture", value: "Clean Architecture (3 Layers)" },
                { label: "Approval Flow", value: "Multi-Tier Dynamic Routing" },
                { label: "Database", value: "SQL Server (msnodesqlv8)" },
                { label: "Audit Integrity", value: "100% Immutable Lineage" }
            ]
        },
        {
            id: 2,
            slug: "seekon-sneakerverse",
            title: "Seekon Sneakerverse E-Commerce Platform",
            tagline: "Modern E-Commerce Storefront with AI Assistance & State Management",
            category: "Full-Stack & E-Commerce",
            role: "Frontend Engineer & UI Architect",
            problem: "Developing an intuitive, modern e-commerce storefront for sneakers with high-performance filtering, cart persistence across sessions, seamless responsive navigation, and an interactive conversational AI shopping assistant.",
            description: "Full-featured e-commerce web platform for footwear discovery and purchase. Engineered responsive product catalogs with multi-faceted filtering (brand, size, price), Redux Toolkit state management for persistent shopping cart & checkout flows, an interactive AI shopping assistant widget, and an administrative order management dashboard.",
            image: "/projects/project-3.webp",
            technologies: ["React 18", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion", "React Router", "Axios"],
            github: "https://github.com/petero-codes/frontend-sneeker-store",
            demo: "https://frontend-sneeker-store.vercel.app",
            badge: "Live Web App",
            workflow: "Product Discovery → Multi-Faceted Filter → Product Detail & Size Select → Persistent Redux Cart → Multi-Step Checkout → Order History",
            architecture: "Component-driven React architecture with centralized Redux Toolkit state slices (cartSlice, productSlice, userSlice) and custom responsive Tailwind design system.",
            challenges: "1. Client state persistence: Synced cart items across page reloads and browser tabs without hydration mismatches.\n2. Responsive UI performance: Maintained 60fps animations with Framer Motion on mobile viewports during catalog scrolling.\n3. AI Chat Assistant integration: Built an interactive conversational widget ready for API recommendation models.",
            decisions: "Adopted Vite for sub-second module bundling, modularized product cards with lazy image loading, and implemented protected routes for the administrative dashboard.",
            metrics: [
                { label: "Build Tool", value: "Vite + React 18" },
                { label: "State Management", value: "Redux Toolkit Slices" },
                { label: "Deployment", value: "Live on Vercel" },
                { label: "Responsiveness", value: "Mobile, Tablet, Desktop" }
            ]
        },
        {
            id: 3,
            slug: "ai-code-reviewer",
            title: "AI-Powered Code Review & Evaluation Platform",
            tagline: "High-Throughput Static Analysis & Model Output Evaluation API",
            category: "AI & Backend Engineering",
            role: "Backend Engineer & AI Systems Developer",
            problem: "Automating code inspection, security rule enforcement, and empirical model benchmark scoring through high-throughput, structured REST API endpoints.",
            description: "High-throughput Python backend service designed with FastAPI and SQLAlchemy for automated code quality assessment, static analysis heuristics, security defect detection, and model output benchmarking. Features containerized Docker deployments and structured benchmark metrics.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "Docker", "SQLite", "Pydantic", "REST APIs"],
            github: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            demo: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            badge: "Backend Microservice",
            workflow: "Code Submission → AST & Security Heuristics Analysis → Benchmark Scoring → Structured Evaluation Payload Generation → Persistence",
            architecture: "FastAPI service-oriented architecture with strict Pydantic schemas, SQLAlchemy ORM data layers, and decoupled evaluator modules.",
            challenges: "1. Deterministic evaluation: Eliminating variance across repeated code analysis runs.\n2. Extensible heuristic rules: Structuring rule evaluation so additional security checks can be added without modifying core handlers.\n3. Environment isolation: Containerizing the evaluation environment with Docker to prevent dependency conflicts.",
            decisions: "Utilized asynchronous FastAPI endpoints to handle parallel evaluation requests and enforced type validation via Pydantic v2 schemas.",
            metrics: [
                { label: "Framework", value: "FastAPI + Pydantic" },
                { label: "Database Layer", value: "SQLAlchemy ORM" },
                { label: "Packaging", value: "Docker Containerized" },
                { label: "API Standard", value: "OpenAPI / REST" }
            ]
        },
        {
            id: 4,
            slug: "windows-automation-engine",
            title: "Autonomous Systems Automation Engine",
            tagline: "Low-Level Windows Process & Hardware Simulation Engine",
            category: "Systems & Python Automation",
            role: "Systems Automation Engineer",
            problem: "Executing automated engineering and desktop tasks on Windows systems with human-indistinguishable mouse/keyboard inputs, stateful session resumption, and crash recovery.",
            description: "Low-level Windows automation platform engineered with Python and C-based kernel driver bindings (Interception). Features procedural code execution, human-physics mouse movement curves, multi-window process management, session state resumption, and comprehensive integration test suites.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Interception Driver", "Win32 API", "PyTest", "Process Management", "Windows OS"],
            github: "https://github.com/petero-codes/automation-",
            demo: "https://github.com/petero-codes/automation-",
            badge: "Systems Engineering",
            workflow: "Driver Initialization → Session Checkpoint Verification → Window Target Identification → Human Physics Trajectory Execution → State Persistence",
            architecture: "Low-level C-driver wrapper layer with Bezier curve physics generator, window state management hooks, and JSON session checkpoint manager.",
            challenges: "1. Kernel-level driver abstraction: Interfacing with the Interception C library safely across 64-bit and 32-bit Windows runtimes.\n2. Natural cognitive pacing: Formulating non-linear mouse speed profiles that mimic human motor control.\n3. Resumption: Recovering long-running workloads immediately upon application restart.",
            decisions: "Constructed comprehensive integration test suites (`tests/test_nextgen_suite.py`) validating window hooks and driver status before executing tasks.",
            metrics: [
                { label: "Driver Level", value: "Kernel Interception Driver" },
                { label: "Physics Engine", value: "Bezier Trajectory Curves" },
                { label: "State Engine", value: "Checkpoint Resumption" },
                { label: "Platform", value: "Windows 10 / 11" }
            ]
        },
        {
            id: 5,
            slug: "finance-club-dashboard",
            title: "Finance Club Market Analytics Dashboard",
            tagline: "Real-Time Asset Metrics & Interactive Market Analytics",
            category: "Frontend & Analytics",
            role: "Frontend Developer",
            problem: "Building a responsive, high-density financial analytics dashboard that renders complex asset metrics, historical charts, and portfolio balances smoothly on mobile and desktop devices.",
            description: "Real-time market analytics dashboard built with React and Tailwind CSS. Features interactive visual charting, financial metric computation, responsive asset performance summaries, and client-side cached data fetching for fast user interaction.",
            image: "/projects/project-5.webp",
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vite"],
            github: "https://github.com/petero-codes/finnanceclub",
            demo: "https://finnanceclub.vercel.app/dashboard",
            badge: "Live Dashboard",
            workflow: "Market Feed Ingestion → Client-Side Cache Indexing → Chart Computation → Interactive Performance Analytics Render",
            architecture: "Modular React component architecture with decoupled charting components and cached HTTP data fetching.",
            challenges: "1. Dense charting performance: Rendering financial asset time-series charts without frame stutter.\n2. Mobile adaptation: Converting complex multi-column financial tables into readable mobile card layouts.",
            decisions: "Leveraged memoized calculation hooks and modular SVG charting primitives for minimal re-render overhead.",
            metrics: [
                { label: "Framework", value: "React + TypeScript" },
                { label: "Deployment", value: "Live on Vercel" },
                { label: "Theme", value: "Dark Analytical UI" },
                { label: "Performance", value: "Sub-100ms Chart Updates" }
            ]
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
            forks: 0,
            badge: "Enterprise Flagship"
        },
        {
            name: "frontend-sneeker-store",
            title: "Seekon Sneakerverse",
            description: "Modern, responsive e-commerce frontend built with React 18, Vite, Redux Toolkit, and Tailwind CSS.",
            language: "JavaScript",
            languageColor: "#f1e05a",
            html_url: "https://github.com/petero-codes/frontend-sneeker-store",
            stars: 0,
            forks: 0,
            badge: "Live Storefront"
        },
        {
            name: "automation-",
            title: "Windows Automation Engine",
            description: "Low-level autonomous workforce platform engineered with Python, kernel driver bindings, and human-physics input curves.",
            language: "Python",
            languageColor: "#3572A5",
            html_url: "https://github.com/petero-codes/automation-",
            stars: 0,
            forks: 0,
            badge: "Systems"
        },
        {
            name: "AI-Powered-Code-Review-Assistant",
            title: "AI Code Review Assistant",
            description: "Automated code quality, static analysis heuristics, and model benchmark evaluation backend built with FastAPI and Python.",
            language: "Python",
            languageColor: "#3572A5",
            html_url: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            stars: 0,
            forks: 0,
            badge: "AI Backend"
        },
        {
            name: "finnanceclub",
            title: "Finance Club Dashboard",
            description: "Interactive analytics dashboard for financial asset metrics, portfolio tracking, and real-time visualization.",
            language: "TypeScript",
            languageColor: "#3178c6",
            html_url: "https://github.com/petero-codes/finnanceclub",
            stars: 0,
            forks: 0,
            badge: "Dashboard"
        },
        {
            name: "greatness-within-website",
            title: "Greatness Within Web",
            description: "Responsive Next.js web application showcasing client-side animation patterns, Tailwind design systems, and component architecture.",
            language: "JavaScript",
            languageColor: "#f1e05a",
            html_url: "https://github.com/petero-codes/greatness-within-website",
            stars: 0,
            forks: 0,
            badge: "Frontend"
        }
    ],
    skillPipelines: [
        {
            domain: "Python & Backend Systems",
            flow: ["Python 3", "FastAPI / Node", "Pydantic Schemas", "PostgreSQL / SQL Server", "Redis Caching"]
        },
        {
            domain: "Modern Full-Stack Web",
            flow: ["TypeScript", "Next.js App Router", "React 18", "Redux Toolkit", "Tailwind CSS"]
        },
        {
            domain: "AI Evaluation & QA",
            flow: ["Model Output Analysis", "Heuristic Benchmarks", "Quality Rubrics", "Automated PyTest", "CI/CD Deployment"]
        }
    ],
    skillsCategories: [
        {
            title: "Programming Languages",
            icon: <HiCode className="w-5 h-5 text-emerald-400" />,
            description: "Core languages used across production backends, client applications, and automation systems",
            skills: [
                { name: "Python", context: "FastAPI, Data Pipelines, Systems", status: "Core Production" },
                { name: "TypeScript", context: "Next.js, React, Type Safety", status: "Core Production" },
                { name: "JavaScript (ES6+)", context: "Modern Web, Node.js", status: "Core Production" },
                { name: "SQL", context: "PostgreSQL, SQL Server, Query Optimization", status: "Core Production" },
                { name: "Bash", context: "Shell Automation, CI Scripts", status: "Core Production" },
                { name: "C# / C (Bindings)", context: "Kernel Driver Wrappers", status: "Specialized" }
            ]
        },
        {
            title: "Backend Engineering",
            icon: <HiServer className="w-5 h-5 text-purple-400" />,
            description: "High-throughput APIs, services, authentication, and asynchronous processing",
            skills: [
                { name: "FastAPI", context: "REST APIs, Pydantic, Async Handlers", status: "Core Production" },
                { name: "Node.js & Express", context: "RESTful Endpoints, Custom Middleware", status: "Core Production" },
                { name: "REST API Architecture", context: "Clean Contracts, Versioning, Docs", status: "Core Production" },
                { name: "Auth & RBAC", context: "Signed Session Cookies, JWT, Roles", status: "Core Production" },
                { name: "Redis Caching", context: "In-Memory Caching & Rate Limiting", status: "Core Production" }
            ]
        },
        {
            title: "Frontend Engineering",
            icon: <HiLightningBolt className="w-5 h-5 text-blue-400" />,
            description: "Responsive, accessible, and high-performance client applications",
            skills: [
                { name: "React 18", context: "Hooks, Context, Component Design", status: "Core Production" },
                { name: "Next.js (App Router)", context: "SSR, SSG, Server Actions, Routes", status: "Core Production" },
                { name: "Tailwind CSS", context: "Custom Tokens, Glassmorphism, Responsive", status: "Core Production" },
                { name: "Redux Toolkit", context: "Global State Slices, Selectors", status: "Core Production" },
                { name: "Framer Motion", context: "Smooth, Accessible Micro-Interactions", status: "Core Production" },
                { name: "HTML5 & Semantic Web", context: "Accessibility, Focus Indicators", status: "Core Production" }
            ]
        },
        {
            title: "Databases & Persistence",
            icon: <HiDatabase className="w-5 h-5 text-amber-400" />,
            description: "Relational data modeling, schema migrations, and enterprise database drivers",
            skills: [
                { name: "Microsoft SQL Server", context: "Enterprise Schemas, msnodesqlv8 Driver", status: "Core Production" },
                { name: "PostgreSQL", context: "Relational Design, Indexing, Constraints", status: "Core Production" },
                { name: "MongoDB", context: "Document Schemas, Aggregation Pipelines", status: "Core Production" },
                { name: "MySQL", context: "Relational CRUD & Transactions", status: "Core Production" },
                { name: "SQLite", context: "Local Microservices, Testing DB", status: "Core Production" }
            ]
        },
        {
            title: "Architecture & Security",
            icon: <HiShieldCheck className="w-5 h-5 text-teal-400" />,
            description: "Maintainable patterns, domain modeling, and security boundaries",
            skills: [
                { name: "Clean Architecture", context: "Domain, Application & Infrastructure Isolation", status: "Core Production" },
                { name: "Repository & Service Patterns", context: "Decoupled Data Access Layers", status: "Core Production" },
                { name: "Hierarchical RBAC", context: "Multi-Tier Approval Workflows", status: "Core Production" },
                { name: "Audit Logging & Lineage", context: "Immutable Revision History", status: "Core Production" },
                { name: "Least-Privilege Security", context: "Isolated DB Roles & Cookie Signing", status: "Core Production" }
            ]
        },
        {
            title: "AI & Automation",
            icon: <HiCube className="w-5 h-5 text-cyan-400" />,
            description: "AI evaluation, prompt assessment, and systems automation",
            skills: [
                { name: "LLM Output Evaluation", context: "Factual Precision, Hallucination QA", status: "Core Production" },
                { name: "Benchmark Assessment", context: "Comparative Model Heuristics", status: "Core Production" },
                { name: "Prompt Engineering", context: "Structured System Prompts & Rubrics", status: "Core Production" },
                { name: "Windows Systems Automation", context: "Low-Level Driver Bindings & UI Hooks", status: "Core Production" }
            ]
        },
        {
            title: "Development Tools & DevOps",
            icon: <HiCube className="w-5 h-5 text-rose-400" />,
            description: "Testing, containerization, and modern engineering workflows",
            skills: [
                { name: "Git & GitHub", context: "Branch Hygiene, Code Reviews, PRs", status: "Core Production" },
                { name: "Docker", context: "Containerization, Multi-Stage Builds", status: "Core Production" },
                { name: "Vite & Vitest", context: "Rapid Bundling & Unit Test Suites", status: "Core Production" },
                { name: "Postman", context: "API Debugging, Contract Verification", status: "Core Production" },
                { name: "Linux / Shell", context: "Environment Config & CLI Tooling", status: "Core Production" },
                { name: "Active Exploration", context: "Rust, Go, Distributed Consensus", status: "Currently Exploring" }
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
            position: "Machine Learning Engineer",
            company: "IBM",
            period: "2022 - 2023",
            location: "Remote",
            description: "Developed and released machine learning and NLP microservices within cloud environments, optimizing inference latency.",
            responsibilities: [
                "Developed and released machine learning and NLP microservices within cloud production environments.",
                "Architected scalable APIs and backend services for analytics workflows and real-time computation systems.",
                "Collaborated with cross-functional engineering teams to optimize model-serving pipelines and improve inference latency.",
                "Conducted benchmarking on model accuracy and throughput across iterative framework upgrades."
            ],
            technologies: ["Python", "Machine Learning", "NLP", "FastAPI", "Docker", "Cloud APIs"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@petero-codes",
            link: "https://github.com/petero-codes"
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
            icon: <FaFileDownload className="w-5 h-5" />,
            label: "Curriculum Vitae",
            value: "Download Peter Njuguna CV (PDF)",
            link: "/Peter_Njuguna_Resume.pdf"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Nairobi, Kenya",
            link: null
        }
    ]
};
