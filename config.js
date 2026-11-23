import React from "react";
import { FaGithub, FaMapPin, FaLinkedin, FaPhone, FaFileDownload } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiServer, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Peter Njuguna",
        title: "Python Backend Developer | Full-Stack Engineer | AI Evaluation Specialist",
        headline: "Engineering resilient Python backends, high-integrity web applications, and empirical AI evaluation pipelines.",
        shortBio: "Software engineer specializing in Python backend architecture, REST API development, relational databases, and AI model evaluation. Focused on Clean Architecture, server-enforced business logic, and automated testing.",
        availability: "Open to remote full-time, part-time, and contract engineering opportunities",
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
        { href: '/projects', label: 'Projects' },
        { href: '/#experience', label: 'Experience' },
        { href: '/#skills', label: 'Skills' },
        { href: '/#about', label: 'About' },
        { href: '/contact', label: 'Contact' }
    ],
    engineeringSnapshot: [
        {
            title: "Python & Backend Systems",
            icon: "HiServer",
            badge: "Primary Focus",
            highlight: "FastAPI, Clean Architecture & Scalable APIs",
            description: "Engineered with Python, FastAPI, Node.js/Express, and REST API standards. Focus on domain boundary isolation, repository patterns, asynchronous request handling, and sub-second endpoint responses."
        },
        {
            title: "Enterprise Full-Stack",
            icon: "HiLightningBolt",
            badge: "Web Applications",
            highlight: "Next.js 14 App Router & React 18",
            description: "Full-stack web applications leveraging Next.js App Router, TypeScript, Redux Toolkit centralized state slices, Tailwind CSS responsive tokens, and fluid micro-interactions."
        },
        {
            title: "Databases & Data Integrity",
            icon: "HiDatabase",
            badge: "Persistence & Schemas",
            highlight: "SQL Server, PostgreSQL & MongoDB",
            description: "Relational schema design, versioned database migrations, least-privilege role security, foreign key constraints, and driver integrations (msnodesqlv8, SQLAlchemy, native SQL)."
        },
        {
            title: "AI Quality & Evaluation",
            icon: "HiShieldCheck",
            badge: "Empirical QA",
            highlight: "LLM Output Assessment & Automated Benchmarking",
            description: "Structured evaluation rubrics assessing multi-step reasoning, prompt constraint compliance, factuality verification, hallucination detection heuristics, and automated Python test pipelines."
        }
    ],
    about: {
        headline: "Building with Discipline, Clean Boundaries & Empirical Verification",
        paragraphs: [
            "I am a software engineer focused on building practical, dependable software across Python backends, modern full-stack web platforms, and AI evaluation infrastructure. My engineering philosophy centers on architectural integrity: decoupling business rules from external frameworks, enforcing strict server-side validation, and writing code that is straightforward to verify through automated tests.",
            "Whether developing dynamic hierarchical approval workflows for KenGen ICT's annual budgeting portal, building responsive e-commerce storefronts with persistent Redux Toolkit state, or writing low-level kernel driver wrappers in Python, I prioritize reliability, maintainability, and honest technical execution.",
            "In AI evaluation, I replace subjective impressions with empirical testing rubrics: verifying instruction adherence, identifying logical errors, measuring factual grounding, and automating verification pipelines with Python scripts."
        ],
        pillars: [
            { title: "Clean Architecture", desc: "Domain logic strictly isolated from database drivers and external presentation frameworks for testability and longevity." },
            { title: "Defensive Coding", desc: "Server-enforced validation rules, least-privilege security roles, and comprehensive immutable audit trails." },
            { title: "Empirical QA", desc: "Automated test suites (Vitest, PyTest) and structured evaluation rubrics measuring factual accuracy and prompt compliance." }
        ]
    },
    projects: [
        {
            id: 1,
            title: "KenGen ICT Budgeting Portal",
            tagline: "Enterprise Clean Architecture Budgeting & Hierarchical Approval Platform",
            category: "Full-Stack & Enterprise Systems",
            role: "Software Developer (Developed against defined KenGen internship project scope)",
            problem: "KenGen ICT needed a centralized annual budgeting portal to replace fragmented spreadsheets, enforce hierarchical multi-tier organizational approvals without hardcoding job titles, and generate immutable audit-logged financial CSV exports for SAP ERP integration.",
            description: "Enterprise budgeting platform developed against KenGen ICT annual budget planning specifications. Implemented 3-layer Clean Architecture (Domain → Application → Infrastructure), tree-based dynamic approval routing walking organizational manager hierarchies (Users.managerId), multi-tier workflow (Staff → Manager → GM → Finance → Finalised), immutable audit logging, and automated SAP-compliant CSV exports.",
            image: "/projects/project-1.webp",
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "Vitest", "RBAC"],
            github: "https://github.com/petero-codes/budget-planner",
            demo: "https://github.com/petero-codes/budget-planner",
            badge: "Enterprise Case Study",
            workflow: "Staff Submission → Line Manager Review → General Manager Authorization → Finance Validation → Finalised (Locked) → SAP CSV Export",
            architecture: "Clean Architecture separation: Domain entities isolated from application services and infrastructure adapters (mock in-memory driver and Microsoft SQL Server driver via msnodesqlv8).",
            decisions: "Implemented signed session cookies with HMAC-SHA256, isolated database runtime access using least-privilege app_budget_ops role, and structured test coverage with 163 unit tests using Vitest.",
            challenges: "1. Dynamic tree approval traversal: Walking managerial hierarchy via Users.managerId without brittle hardcoded job titles.\n2. Server-enforced finalization: Rendered budget items strictly immutable once Finance approves.\n3. Audit lineage: Complete chronological record of budget modifications, approvals, and user comments.",
            testing: "Comprehensive Vitest test suite with 27 test files and 163 passing unit tests verifying domain rules, hierarchy walking, retry logic, and authorization gates.",
            limitations: "Illustrative prototype developed against defined internship scope; SAP integration export validated via formatted CSV pipeline rather than direct RFC endpoints."
        },
        {
            id: 2,
            title: "Seekon Sneakerverse E-Commerce",
            tagline: "Modern E-Commerce Storefront with AI Shopping Assistant & Persistent State",
            category: "Full-Stack & E-Commerce",
            role: "Frontend Software Developer (Collaborative development with dedicated backend team)",
            problem: "Building a high-performance, responsive e-commerce storefront for footwear discovery with multi-faceted filtering, persistent cart state across sessions, and an interactive conversational assistant.",
            description: "Full-featured e-commerce web platform for footwear discovery and purchasing. Engineered responsive product catalogs with multi-faceted filtering (brand, size, price), Redux Toolkit state management for persistent shopping cart & checkout flows, an interactive AI shopping assistant widget, and an administrative dashboard.",
            image: "/projects/project-3.webp",
            technologies: ["React 18", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion", "REST APIs"],
            github: "https://github.com/petero-codes/frontend-sneeker-store",
            demo: "https://frontend-sneeker-store.vercel.app",
            badge: "Live Web App",
            workflow: "Product Discovery → Multi-Faceted Filter → Product Detail & Size Select → Persistent Redux Cart → Multi-Step Checkout",
            architecture: "Component-driven React architecture with centralized Redux Toolkit state slices (cartSlice, productSlice) and custom responsive Tailwind design system.",
            decisions: "Adopted Vite for fast module bundling, modularized product cards with lazy image loading, and separated state management from presentation layers.",
            challenges: "1. Client state persistence: Synced cart items across page reloads and browser tabs without hydration mismatches.\n2. Responsive UI performance: Maintained 60fps animations with Framer Motion on mobile viewports.",
            testing: "Manual user testing across mobile, tablet, and desktop viewports; cross-browser checkout flow verification.",
            limitations: "Frontend connects to staging REST endpoints; production brand storefront deployed at seekonapparelglobal.com."
        },
        {
            id: 3,
            title: "AI-Powered Code Review Assistant",
            tagline: "High-Throughput Static Analysis & Code Quality Evaluation Backend",
            category: "AI & Backend Engineering",
            role: "Backend Software Developer (Sole developer)",
            problem: "Automating static code inspection, defect scoring, and structured evaluation metrics through high-throughput, containerized REST API endpoints.",
            description: "High-throughput Python backend service designed with FastAPI and SQLAlchemy for automated code quality assessment, static analysis heuristics, security defect detection, and model output benchmarking. Features containerized Docker deployments and structured benchmark metrics.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "Docker", "SQLite", "Pydantic", "REST APIs"],
            github: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            demo: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            badge: "Backend Microservice",
            workflow: "Code Submission → AST & Security Heuristics Analysis → Benchmark Scoring → Structured Evaluation Payload Generation → Persistence",
            architecture: "FastAPI service-oriented architecture with strict Pydantic schemas, SQLAlchemy ORM data layers, and decoupled evaluator modules.",
            decisions: "Utilized asynchronous FastAPI endpoints to handle parallel evaluation requests and enforced type validation via Pydantic v2 schemas.",
            challenges: "1. Deterministic evaluation: Eliminating variance across repeated code analysis runs.\n2. Extensible heuristic rules: Structuring rule evaluation so additional security checks can be added without modifying core handlers.",
            testing: "Endpoint verification via FastAPI OpenAPI docs and Postman contract validation tests.",
            limitations: "Current version uses SQLite for lightweight local microservice deployment; can be configured with PostgreSQL for high-concurrency production."
        },
        {
            id: 4,
            title: "Autonomous Systems Automation Engine",
            tagline: "Low-Level Windows Process & Hardware Simulation Platform",
            category: "Systems & Python Automation",
            role: "Systems Automation Developer (Sole developer)",
            problem: "Executing automated desktop workflows on Windows systems with natural, human-indistinguishable mouse/keyboard inputs, stateful session resumption, and crash recovery.",
            description: "Low-level Windows automation platform engineered with Python and C-based kernel driver bindings (Interception). Features procedural code execution, human-physics mouse movement curves, multi-window process management, session state resumption, and comprehensive integration test suites.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Interception Driver", "Win32 API", "PyTest", "Process Management", "Windows OS"],
            github: "https://github.com/petero-codes/automation-",
            demo: "https://github.com/petero-codes/automation-",
            badge: "Systems Engineering",
            workflow: "Driver Initialization → Session Checkpoint Verification → Window Target Identification → Human Physics Trajectory Execution → State Persistence",
            architecture: "Low-level C-driver wrapper layer with Bezier curve physics generator, window state management hooks, and JSON session checkpoint manager.",
            decisions: "Formulated non-linear Bezier trajectory algorithms mimicking human motor pacing and natural deceleration.",
            challenges: "1. Kernel-level driver abstraction: Interfacing with the Interception C library safely across Windows runtimes.\n2. Stateful resumption: Recovering long-running workloads immediately upon application restart.",
            testing: "Automated integration test suite (tests/test_nextgen_suite.py) validating window hooks and driver status before executing tasks.",
            limitations: "Requires Windows OS with Interception kernel driver installed; not cross-platform with Linux or macOS."
        },
        {
            id: 5,
            title: "Finance Club Market Analytics Dashboard",
            tagline: "Real-Time Asset Metrics & Interactive Market Analytics",
            category: "Frontend & Analytics",
            role: "Frontend Developer (Sole developer)",
            problem: "Building a responsive, high-density financial analytics dashboard that renders complex asset metrics, historical charts, and portfolio balances smoothly on mobile and desktop devices.",
            description: "Real-time market analytics dashboard built with React, TypeScript, and Tailwind CSS. Features interactive visual charting, financial metric computation, responsive asset performance summaries, and client-side cached data fetching for fast user interaction.",
            image: "/projects/project-5.webp",
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Vite"],
            github: "https://github.com/petero-codes/finnanceclub",
            demo: "https://finnanceclub.vercel.app/dashboard",
            badge: "Live Dashboard",
            workflow: "Market Feed Ingestion → Client-Side Cache Indexing → Chart Computation → Interactive Performance Analytics Render",
            architecture: "Modular React component architecture with decoupled charting components and cached HTTP data fetching.",
            decisions: "Leveraged memoized calculation hooks and modular SVG charting primitives for minimal re-render overhead.",
            challenges: "1. Dense charting performance: Rendering financial asset time-series charts without frame stutter.\n2. Mobile adaptation: Converting complex multi-column financial tables into readable mobile card layouts.",
            testing: "Component testing, cross-browser responsiveness checks, and live deployment verification on Vercel.",
            limitations: "Uses simulated and cached market feeds for demonstration; production deployment would integrate authenticated WebSockets."
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
    skillsProficiency: [
        {
            tier: "Strong Working Technologies",
            badge: "Production Ready",
            description: "Technologies used daily with deep hands-on implementation across production and enterprise case studies.",
            skills: [
                { name: "Python", context: "FastAPI, Automation, Heuristics" },
                { name: "FastAPI", context: "Async APIs, Pydantic, Endpoints" },
                { name: "Next.js 14", context: "App Router, SSR, Server Actions" },
                { name: "React 18", context: "Hooks, Component Architecture" },
                { name: "TypeScript", context: "Strict Typing, Interfaces, Enums" },
                { name: "SQL Server", context: "msnodesqlv8, Schemas, Roles" },
                { name: "PostgreSQL", context: "Relational Modeling, Indexing" },
                { name: "Tailwind CSS", context: "Design Tokens, Glassmorphism" },
                { name: "Docker", context: "Containerization, Multi-Stage Builds" }
            ]
        },
        {
            tier: "Technologies Used in Projects",
            badge: "Hands-on Project Experience",
            description: "Technologies actively integrated into complete full-stack applications and services.",
            skills: [
                { name: "Redux Toolkit", context: "State Slices, Persistence, Selectors" },
                { name: "Node.js & Express", context: "REST Endpoints, Middleware" },
                { name: "MongoDB", context: "Document Collections, Aggregations" },
                { name: "MySQL & SQLite", context: "Relational CRUD, Testing DB" },
                { name: "Vitest & PyTest", context: "Automated Unit & Integration Suites" },
                { name: "Framer Motion", context: "Fluid Animations, Accessible UI" },
                { name: "SQLAlchemy", context: "ORM Modeling, Migrations" },
                { name: "Git & GitHub", context: "Branch Hygiene, Code Reviews" }
            ]
        },
        {
            tier: "Familiarity & Ongoing Development",
            badge: "Active Exploration",
            description: "Technologies applied in specialized modules and ongoing technical development.",
            skills: [
                { name: "Redis", context: "In-Memory Caching & Session Storage" },
                { name: "C / Kernel Bindings", context: "Interception Driver Low-Level Wrappers" },
                { name: "Linux / Bash", context: "Shell Automation, Environment Config" },
                { name: "LLM Quality Rubrics", context: "Empirical Reasoning & Safety QA" },
                { name: "REST Security", context: "HMAC Cookie Signing, Scoped RBAC" }
            ]
        }
    ],
    experiences: [
        {
            position: "Software & AI Evaluation Engineer",
            company: "Handshake AI",
            classification: "Part-time employment",
            period: "2025 – Present",
            location: "Remote",
            description: "Architecting backend services and structured validation pipelines supporting distributed AI evaluation workflows.",
            responsibilities: [
                "Engineered backend services driving distributed AI evaluation and high-throughput processing sequences.",
                "Developed production-grade APIs and full-stack services utilizing Python, FastAPI, Next.js, PostgreSQL, and Redis.",
                "Enhanced backend services to maximize maintainability, testability, and responsiveness across distributed nodes.",
                "Collaborated asynchronously on architecture design, schema contracts, and technical code reviews."
            ],
            technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Distributed Systems"]
        },
        {
            position: "Full-Stack & AI Evaluation Specialist",
            company: "Outlier AI",
            classification: "Contract engagement",
            period: "2024 – Present",
            location: "Remote",
            description: "Building evaluation tools, analytics dashboards, and asynchronous services for frontier AI assessment workflows.",
            responsibilities: [
                "Evaluated frontier language model outputs across multi-step mathematical reasoning, code correctness, and constraint following.",
                "Designed asynchronous processing pipelines and optimized database queries to boost throughput.",
                "Created automated Python scripts to validate response structures, audit datasets, and benchmark comparative model outputs.",
                "Documented edge cases, logical fallacies, and safety protocol deviations using standardized evaluation rubrics."
            ],
            technologies: ["Python", "React.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"]
        },
        {
            position: "AI Quality Evaluator & Backend Specialist",
            company: "Scale AI",
            classification: "Contract engagement",
            period: "2023 – 2024",
            location: "Remote",
            description: "Engineered distributed backend pipelines and data transformation engines supporting core AI training infrastructure.",
            responsibilities: [
                "Audited code generation outputs and technical data pipelines supporting core machine learning model training infrastructure.",
                "Improved system throughput, eliminated processing bottlenecks, and optimized resource efficiency.",
                "Conducted comparative pairwise analyses measuring factual grounding, hallucination prevalence, and prompt adherence.",
                "Partnered with engineering teams to track regressions and implement robust edge-case validation routines."
            ],
            technologies: ["Python", "FastAPI", "Docker", "AWS", "Data Pipelines", "Redis"]
        },
        {
            position: "ICT & Software Engineering Intern",
            company: "KenGen (Kenya Electricity Generating Company)",
            classification: "Internship",
            period: "2024",
            location: "Nairobi, Kenya",
            description: "Developed annual budgeting portal prototype with dynamic organizational hierarchy approval flows and SQL Server.",
            responsibilities: [
                "Architected annual budgeting portal utilizing Next.js 14, Clean Architecture, and TypeScript.",
                "Implemented dynamic tree-based approval routing walking organizational manager hierarchies without hardcoded job titles.",
                "Constructed SQL Server driver integration via msnodesqlv8 and enforced least-privilege security roles.",
                "Built automated SAP-compliant CSV export pipeline with full immutable audit history."
            ],
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "Vitest"]
        },
        {
            position: "Software & Machine Learning Developer",
            company: "IBM SkillsBuild",
            classification: "Professional Development & Projects",
            period: "2022 – 2023",
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
            icon: <FaFileDownload className="w-5 h-5 text-white" />,
            label: "Curriculum Vitae",
            value: "Download Peter Njuguna CV (PDF)",
            link: "/Peter_Njuguna_Resume.pdf"
        },
        {
            icon: <FaMapPin className="w-5 h-5 text-white" />,
            label: "Location",
            value: "Nairobi, Kenya",
            link: null
        }
    ]
};
