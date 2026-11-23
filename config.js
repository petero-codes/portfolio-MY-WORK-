import { FaGithub, FaMapPin, FaLinkedin, FaPhone, FaFileDownload } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiServer, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Peter Njuguna",
        title: "Full-Stack Developer | Python Developer | AI Engineering & Evaluation",
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
        { href: '/#experience', label: 'Experience' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    projects: [
        {
            id: 1,
            title: "KenGen ICT Budgeting Portal",
            tagline: "Enterprise Clean Architecture Budgeting & Approval Platform",
            category: "Full-Stack & Enterprise Systems",
            description: "Enterprise financial budgeting platform engineered for KenGen ICT annual budget planning. Implemented Clean Architecture (Domain → Application → Infrastructure), tree-based dynamic approval routing walking organizational manager hierarchies (Users.managerId), multi-tier approval workflow (Staff → Manager → GM → Finance → Finalised), audit logging, and automated SAP-compliant CSV exports.",
            image: "/projects/project-1.webp",
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "Vitest", "RBAC"],
            github: "https://github.com/petero-codes/budget-planner",
            demo: "https://github.com/petero-codes/budget-planner",
            badge: "Enterprise Flagship",
            architecture: "Clean Architecture domain separation: domain entities decoupled from use-case application services and SQL Server database drivers (msnodesqlv8).",
            challenges: "Dynamic organizational hierarchy traversal without hardcoding titles; server-enforced irreversible finalization rules; high-integrity audit logging across all budget item edits.",
            decisions: "Traversed managerId pointers dynamically to construct runtime approval routes; applied signed session cookies with HMAC and least-privilege SQL auth roles."
        },
        {
            id: 2,
            title: "Seekon Sneakerverse E-Commerce Platform",
            tagline: "Modern E-Commerce Storefront with AI Assistance & State Management",
            category: "Full-Stack & E-Commerce",
            description: "Full-featured e-commerce web platform for footwear discovery and purchase. Engineered responsive product catalogs with multi-faceted filtering (brand, size, price), Redux Toolkit state management for persistent shopping cart & checkout flows, an interactive AI shopping assistant widget, and an administrative order management dashboard.",
            image: "/projects/project-3.webp",
            technologies: ["React 18", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion", "React Router", "Axios"],
            github: "https://github.com/petero-codes/frontend-sneeker-store",
            demo: "https://frontend-sneeker-store.vercel.app",
            badge: "Live Web App",
            architecture: "Component-driven React architecture with centralized Redux Toolkit slices (cart, auth, catalog) and custom UI design system.",
            challenges: "Cart state synchronization across client sessions and maintaining sub-100ms render performance across complex product catalogs.",
            decisions: "Leveraged Vite for instantaneous module bundling and code-splitting, with responsive mobile-first Tailwind design system."
        },
        {
            id: 3,
            title: "AI-Powered Code Review & Evaluation Platform",
            tagline: "High-Throughput Static Analysis & Model Output Evaluation API",
            category: "AI & Backend Engineering",
            description: "High-throughput Python backend service designed with FastAPI and SQLAlchemy for automated code quality assessment, static analysis heuristics, security defect detection, and model output benchmarking. Features containerized Docker deployments and structured benchmark metrics.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "Docker", "SQLite", "Pydantic", "REST APIs"],
            github: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            demo: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            badge: "Backend Microservice",
            architecture: "Service-oriented FastAPI architecture with Pydantic validation schemas, ORM data layers, and automated review execution pipelines.",
            challenges: "Deterministic evaluation of code syntax, security risks, and latency across asynchronous API evaluation jobs.",
            decisions: "Isolated rule engines into discrete heuristic evaluators with containerized testing to eliminate runtime environment pollution."
        },
        {
            id: 4,
            title: "Autonomous Systems Automation Engine",
            tagline: "Low-Level Windows Process & Hardware Simulation Engine",
            category: "Systems & Python Automation",
            description: "Low-level Windows automation platform engineered with Python and C-based kernel driver bindings (Interception). Features procedural code execution, human-physics mouse movement curves, multi-window process management, session state resumption, and comprehensive integration test suites.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Interception Driver", "Win32 API", "PyTest", "Process Management", "Windows OS"],
            github: "https://github.com/petero-codes/automation-",
            demo: "https://github.com/petero-codes/automation-",
            badge: "Systems Engineering",
            architecture: "Hardware driver abstraction with Bezier mouse physics simulation and stateful recovery checkpoint manager.",
            challenges: "Simulating human-indistinguishable input timing and recovering execution state seamlessly after system interruptions.",
            decisions: "Used low-level Interception driver to bypass OS user-space detection hooks, combined with state-machine task queues."
        },
        {
            id: 5,
            title: "Finance Club Market Analytics Dashboard",
            tagline: "Real-Time Asset Metrics & Interactive Market Analytics",
            category: "Frontend & Analytics",
            description: "Real-time market analytics dashboard built with React and Tailwind CSS. Features interactive visual charting, financial metric computation, responsive asset performance summaries, and client-side cached data fetching for fast user interaction.",
            image: "/projects/project-5.webp",
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vite"],
            github: "https://github.com/petero-codes/finnanceclub",
            demo: "https://finnanceclub.vercel.app/dashboard",
            badge: "Live Dashboard",
            architecture: "Modular client-side dashboard with fast state caching and responsive analytical charting.",
            challenges: "Rendering dense financial datasets without frame drops on mobile viewports.",
            decisions: "Decoupled chart computation from DOM updates using memoized calculation hooks."
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
            name: "portfolio-MY-WORK-",
            title: "Portfolio Website",
            description: "Production Next.js portfolio deployed on Vercel showcasing full-stack and AI engineering work.",
            language: "JavaScript",
            languageColor: "#f1e05a",
            html_url: "https://github.com/petero-codes/portfolio-MY-WORK-",
            stars: 0,
            forks: 0
        }
    ],
    skillsCategories: [
        {
            title: "Programming Languages",
            icon: <HiCode className="w-5 h-5 text-emerald-400" />,
            description: "Core languages used for production backend, frontend, and systems development",
            skills: [
                { name: "Python", context: "FastAPI, Data Pipelines, Automation" },
                { name: "TypeScript", context: "Next.js, React, Typed Interfaces" },
                { name: "JavaScript (ES6+)", context: "Modern Web, Node.js" },
                { name: "SQL", context: "PostgreSQL, SQL Server, Complex Queries" },
                { name: "Bash", context: "Shell Scripting & Server Automation" }
            ]
        },
        {
            title: "Frontend Development",
            icon: <HiLightningBolt className="w-5 h-5 text-blue-400" />,
            description: "Responsive, accessible, and high-performance client applications",
            skills: [
                { name: "React.js", context: "Component Architecture, Hooks, Context" },
                { name: "Next.js (App Router)", context: "SSR, SSG, Server Actions, Routing" },
                { name: "Tailwind CSS", context: "Design Systems, Responsive Layouts" },
                { name: "Redux Toolkit", context: "Global State Management, Slices" },
                { name: "Framer Motion", context: "Subtle, Accessible Micro-Interactions" },
                { name: "HTML5 & Semantic CSS", context: "Accessibility, Responsive Design" }
            ]
        },
        {
            title: "Backend Development",
            icon: <HiServer className="w-5 h-5 text-purple-400" />,
            description: "High-throughput APIs, services, and asynchronous processing",
            skills: [
                { name: "FastAPI", context: "REST APIs, Pydantic, OpenAPI Specs" },
                { name: "Node.js & Express", context: "RESTful Endpoints, Middleware" },
                { name: "REST API Architecture", context: "Clean Contracts, Versioning" },
                { name: "Authentication & AuthZ", context: "JWT, Session Cookies, RBAC" },
                { name: "Redis Caching", context: "In-Memory Caching, Rate Limiting" }
            ]
        },
        {
            title: "Databases",
            icon: <HiDatabase className="w-5 h-5 text-amber-400" />,
            description: "Relational data modeling, schema migrations, and persistence",
            skills: [
                { name: "PostgreSQL", context: "Relational Design, Indexing, Constraints" },
                { name: "Microsoft SQL Server", context: "Enterprise Schemas, ODBC Driver" },
                { name: "MongoDB", context: "Document Storage, Aggregation" },
                { name: "MySQL", context: "Relational Queries & CRUD" },
                { name: "SQLite", context: "Local Caching & Microservice DB" }
            ]
        },
        {
            title: "Architecture & Engineering",
            icon: <HiShieldCheck className="w-5 h-5 text-teal-400" />,
            description: "Maintainable patterns, domain modeling, and system boundaries",
            skills: [
                { name: "Clean Architecture", context: "Domain, Application & Infra Decoupling" },
                { name: "Repository & Service Patterns", context: "Testable Data Access Layers" },
                { name: "Role-Based Access Control", context: "Hierarchical Approval Workflows" },
                { name: "Audit Logging & Lineage", context: "Immutable Revision Records" },
                { name: "Distributed Systems Concepts", context: "State Machines & Reliability" }
            ]
        },
        {
            title: "AI & Automation",
            icon: <HiCube className="w-5 h-5 text-cyan-400" />,
            description: "AI evaluation, prompt assessment, and system automation",
            skills: [
                { name: "LLM Output Evaluation", context: "Factual Verification, Quality QA" },
                { name: "Benchmark Assessment", context: "Comparative Model Heuristics" },
                { name: "Prompt Engineering", context: "Structured System Prompts" },
                { name: "Windows Systems Automation", context: "Low-Level Driver Bindings & UI" }
            ]
        },
        {
            title: "Development Tools",
            icon: <HiCube className="w-5 h-5 text-rose-400" />,
            description: "DevOps, testing, and modern engineering workflow tooling",
            skills: [
                { name: "Git & GitHub", context: "Branch Hygiene, Collaborative PRs" },
                { name: "Docker", context: "Containerization & Environment Parity" },
                { name: "Vite & Vitest", context: "Fast Bundling & Unit Testing" },
                { name: "Postman", context: "API Debugging & Contract Testing" },
                { name: "Linux / Shell", context: "Environment Config & Deployment" }
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
