import React from "react";
import { FaGithub, FaMapPin, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiServer, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

export const config = {
    developer: {
        name: "Peter Njuguna",
        title: "Python Backend Developer | Full-Stack Engineer | AI Evaluation Specialist",
        headline: "Engineering resilient Python backends, high-integrity web applications, and empirical AI evaluation pipelines.",
        shortBio: "Software engineer specializing in Python backend architecture, REST API development, relational databases, and AI model evaluation. Focused on Clean Architecture, server-enforced business logic, and automated testing."
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
            tagline: "Annual Budgeting & Multi-Tier Hierarchical Approval Platform",
            category: "Enterprise Systems & Clean Architecture",
            accent: "blue",
            attribution: "Internship Project • KenGen ICT (Kenya Electricity Generating Company)",
            role: "Software Developer (Developed against defined KenGen internship project specifications)",
            problem: "KenGen ICT required a centralized annual budgeting system to replace fragmented spreadsheets, enforce hierarchical multi-tier organizational approvals without hardcoding job titles, and generate immutable audit logs for financial reporting.",
            description: "Enterprise budgeting platform developed against KenGen ICT annual budget planning specifications. Features a 3-layer Clean Architecture isolating domain rules from database drivers, dynamic tree-based approval routing that traverses organizational manager hierarchies (Users.managerId), a multi-tier approval workflow (Staff → Line Manager → General Manager → Finance → Finalised), server-enforced immutability, immutable audit logging, and automated SAP ERP-compliant CSV exports.",
            image: "/projects/project-1.webp",
            technologies: ["Next.js 14", "TypeScript", "SQL Server", "Clean Architecture", "Tailwind CSS", "Vitest", "RBAC"],
            github: "https://github.com/petero-codes/budget-planner",
            demo: null,
            badge: "Enterprise Case Study",
            implementedFeatures: [
                "3-Layer Clean Architecture (Domain → Application → Infrastructure)",
                "Dynamic tree-based approval routing walking Users.managerId hierarchy",
                "Multi-tier approval workflow (Staff → Manager → GM → Finance → Finalised)",
                "Server-enforced immutability once approved by Finance",
                "Chronological audit trail logging user actions and review comments",
                "Microsoft SQL Server persistence via msnodesqlv8 and least-privilege app_budget_ops role",
                "Automated SAP-compliant CSV export pipeline"
            ],
            simulatedComponents: [
                "In-Memory Mock Driver: Dual-driver architecture allows rapid local testing without a live SQL Server instance",
                "SAP Integration: Implemented via validated CSV export pipeline rather than direct SAP RFC endpoints"
            ],
            scopeBoundaries: "Developed as an architectural engineering prototype against defined internship project specifications; not deployed into live KenGen enterprise production.",
            architecture: "Strict 3-layer Clean Architecture: Domain entities are completely decoupled from external frameworks and database drivers. Application use cases coordinate business rules, while Infrastructure adapters manage Microsoft SQL Server (msnodesqlv8) and in-memory mock persistence.",
            decisions: "1. Dynamic Hierarchy Traversal: Walked organizational reporting chains dynamically via Users.managerId instead of hardcoding organizational titles, ensuring organizational resilience to staffing changes.\n2. Least-Privilege Security: Database access configured through dedicated app_budget_ops role with scoped table permissions.\n3. Session Security: Enforced signed session cookies using HMAC-SHA256.",
            challenges: "1. Preventing Out-of-Order Approvals: Implemented state transition validation ensuring items cannot bypass intermediate managerial gates.\n2. Finalized Budget Immutability: Enforced server-side locks rejecting edits to any budget item once Finance authorization is granted.",
            testing: "Comprehensive Vitest automated test suite with 27 test files and 163 passing unit tests verifying domain rules, hierarchy walking, retry logic, and authorization gates.",
            limitations: "Architectural prototype developed against defined internship scope. Illustrative corporate workflow; SAP export format verified via formatted CSV schema."
        },
        {
            id: 2,
            title: "Seekon Apparel Storefront",
            tagline: "Footwear E-Commerce Storefront with Persistent Cart State",
            category: "Full-Stack & E-Commerce",
            accent: "sky",
            attribution: "Collaborative Team Project • Frontend Engineering",
            role: "Frontend Software Developer (Collaborative project with dedicated backend team)",
            problem: "Delivering a responsive footwear shopping experience with instant multi-faceted filtering, persistent cart state across sessions, and smooth micro-interactions.",
            description: "Modern e-commerce web platform for footwear discovery and shopping. Built with React 18, Vite, and Redux Toolkit. Features responsive product catalogs with multi-faceted filtering (brand, size, price), centralized state management ensuring cart persistence across browser tabs and reloads, an interactive conversational shopping assistant widget, and an administrative dashboard interface.",
            image: "/projects/project-3.webp",
            technologies: ["React 18", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion", "REST APIs"],
            github: "https://github.com/petero-codes/frontend-sneeker-store",
            demo: null,
            badge: "Team Frontend",
            implementedFeatures: [
                "Component-driven React 18 frontend architecture bundled with Vite",
                "Centralized Redux Toolkit state slices (cartSlice, productSlice) for persistent shopping cart",
                "Multi-faceted client filtering by category, size, price, and brand",
                "Responsive mobile-first UI with custom Tailwind tokens and 60fps Framer Motion animations",
                "Modular product detail pages with size selection and thumbnail galleries"
            ],
            simulatedComponents: [
                "Mock Backend & REST Endpoints: Products and order histories simulate real-world API responses",
                "Mock Checkout Flow: Multi-step checkout flow simulates order confirmation without live payment processing (e.g. Stripe)",
                "Mock AI Assistant: Conversational shopping assistant widget operates on simulated response logic (structured for future LLM API integration)"
            ],
            scopeBoundaries: "Frontend client application developed in a collaborative team context. Demo credentials and sensitive admin passwords have been completely scrubbed from public documentation.",
            architecture: "Component-driven React architecture with centralized Redux Toolkit state slices. State mutations are handled via pure reducers, isolating UI views from cart state and filtering operations.",
            decisions: "1. Centralized Redux Store: Guaranteed cart state persistence across page reloads and browser sessions.\n2. Modular Component Design: Separated layout, navigation, filtering, and product card primitives for maximum reuse.\n3. Mobile-First Optimization: Implemented touch-friendly drawers and responsive grid layouts.",
            challenges: "1. State Synchronization: Preventing hydration and persistence anomalies across multiple active browser tabs.\n2. Animation Performance: Maintaining smooth 60fps transitions on mobile viewports using Framer Motion.",
            testing: "Manual user testing across mobile, tablet, and desktop viewports; cross-browser state synchronization and form validation checks.",
            limitations: "Operates with simulated mock backend endpoints; checkout process is an illustrative simulated client flow with no live payment processing."
        },
        {
            id: 3,
            title: "AI-Powered Code Review Assistant",
            tagline: "Code Quality Inspection Service & Monaco Web Editor",
            category: "AI & Backend Engineering",
            accent: "purple",
            attribution: "Sole Developer Project • Full-Stack Microservice",
            role: "Backend & Full-Stack Developer (Sole developer)",
            problem: "Providing developers with automated code inspection, static issue detection, and persistent review tracking through an intuitive VS Code-inspired web interface and structured REST API.",
            description: "Full-stack code review platform featuring an asynchronous Python backend built with FastAPI and an interactive web frontend utilizing Microsoft's Monaco Editor. Inspects code submissions for syntax errors, style violations, and potential optimizations, generating structured feedback reports and maintaining a persistent review history with SQLAlchemy and SQLite/PostgreSQL.",
            image: "/projects/project-2.webp",
            technologies: ["Python", "FastAPI", "SQLAlchemy", "Docker", "SQLite", "Pydantic v2", "React 19", "Monaco Editor"],
            github: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            demo: null,
            badge: "Backend Microservice",
            implementedFeatures: [
                "Asynchronous FastAPI backend (Python 3.11) with non-blocking endpoint execution",
                "Strict Pydantic v2 schemas validating code payload submissions and language parameters",
                "Monaco Editor integration with syntax highlighting for 12+ programming languages",
                "VS Code-inspired dark UI theme with responsive split-pane layout and review panels",
                "SQLAlchemy ORM models managing review records, issue findings, and metadata",
                "Dual database support: SQLite for zero-config local development; PostgreSQL for production",
                "Containerized multi-stage Docker and Docker Compose environment"
            ],
            simulatedComponents: [
                "Mock AI Reviewer Service: Backend includes a structured review analysis service that categorizes issues (bugs, optimizations, standards); ready for direct Anthropic Claude API integration via ANTHROPIC_API_KEY"
            ],
            scopeBoundaries: "Designed as a containerized local developer microservice. Avoids unmeasured performance or throughput claims, focusing on clean API design, strict schemas, and asynchronous execution.",
            architecture: "Decoupled full-stack architecture: React 19 + Monaco Editor frontend communicates with an asynchronous FastAPI REST backend. Payloads are validated via Pydantic v2 schemas before being processed by the review service and persisted via SQLAlchemy ORM.",
            decisions: "1. Asynchronous Endpoints: Utilized FastAPI async handlers to handle concurrent review requests without thread starvation.\n2. Pydantic v2 Contracts: Enforced strict validation rules on incoming code snippets and outgoing review payloads.\n3. Containerized Packaging: Provided single-command docker-compose startup encompassing frontend, backend, and PostgreSQL database.",
            challenges: "1. Language Parameter Validation: Enforcing supported language taxonomies across 12+ programming languages.\n2. Extensible Service Interface: Designed the review service interface so mock analysis can be swapped with real Claude API calls by setting an environment variable without modifying route handlers.",
            testing: "FastAPI automatic OpenAPI documentation and interactive endpoint testing (/docs); manual Postman contract verification; Docker container health checks.",
            limitations: "Default configuration uses mock reviewer service; requires user-supplied Anthropic API key for live Claude model evaluations."
        },
        {
            id: 4,
            title: "Autonomous Systems Automation Engine",
            tagline: "Windows Desktop Automation & State Recovery Platform",
            category: "Systems & Python Automation",
            accent: "emerald",
            attribution: "Sole Developer Project • Systems & Process Control",
            role: "Systems Automation Developer (Sole developer)",
            problem: "Executing automated desktop workflows on Windows systems with safe input trajectory physics, immediate sub-2ms human emergency yielding, and fault-tolerant state recovery across interruptions or crashes.",
            description: "Low-level Windows desktop automation platform engineered with Python and C-based kernel driver bindings (Interception). Focuses on safe execution, user interruption handling, and deterministic state recovery. Features non-linear Bezier input trajectory smoothing, low-level Win32 emergency interruption hooks with sub-2ms yielding latency, and DPAPI-encrypted session checkpointing distinguishing completed operations from next intended operations.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Interception Driver", "Win32 API", "PyTest", "Process Management", "Windows OS", "DPAPI"],
            github: "https://github.com/petero-codes/automation-",
            demo: null,
            badge: "Systems Engineering",
            implementedFeatures: [
                "Low-level C driver wrapper interfacing with the Windows Interception filter driver",
                "Non-linear Bezier curve trajectory generator for smooth, natural cursor acceleration/deceleration",
                "Sub-2ms emergency human interruption yielding via Win32 low-level message hooks (WH_MOUSE_LL, WH_KEYBOARD_LL)",
                "Immediate emergency abort triggers: mouse displacement (>50px), click events, toggle hotkeys ([PAUSE], [F8]), and double-tap [ESC]",
                "Granular DPAPI-encrypted JSON checkpoints distinguishing last_completed_op from next_intended_op",
                "Crash-resilient state recovery preventing blind re-execution of completed operations upon session restart",
                "Strict foreground window focus verification before dispatching keyboard or mouse events (zero blind typing)",
                "Dedicated offline productivity workloads: VS Code (structural syntax, Git staging) and Microsoft Excel (accounting formulas, cell navigation)"
            ],
            simulatedComponents: [
                "Procedural Workload Generator: Synthesizes structured code modules and financial models offline without external cloud dependencies"
            ],
            scopeBoundaries: "Objectively engineered as desktop workflow automation with strict user control and emergency abort mechanisms. Strictly avoids human-impersonation or workforce replacement claims.",
            architecture: "Layered systems architecture: A low-level C-driver wrapper interfaces with the Interception kernel driver. The Win32 hook event loop monitors human input asynchronously, while the DPAPI session checkpoint manager serializes execution states to encrypted local storage.",
            decisions: "1. Asynchronous Yielding: Dispatched emergency pause signals asynchronously from Win32 hook callbacks to prevent blocking the OS message pump, achieving 0.6ms – 1.5ms measured yield latency.\n2. DPAPI Checkpoint Encryption: Protected session state using Windows DPAPI (CryptProtectData) to prevent plaintext persistence of code or financial data on disk.\n3. Non-Repeating Operations: Tracked operational lineage so resumed sessions advance strictly to the next intended operation.",
            challenges: "1. Driver Stack Binding: Interfacing safely with the Interception C library across Windows 10 and 11 environments.\n2. Focus Stealing Protection: Preventing automation from dispatching inputs if another window unexpectedly takes foreground focus.",
            testing: "Automated integration test suite (tests/test_nextgen_suite.py) validating window handle bindings, driver initialization, and DPAPI encryption integrity prior to execution.",
            limitations: "Requires Windows 10/11 operating system with Interception kernel driver installed; offline desktop execution with no Linux/macOS cross-compatibility."
        },
        {
            id: 5,
            title: "ClubVault (Finance Club Ledger & Analytics)",
            tagline: "Financial Ledger & Treasury Dashboard for Student Organizations",
            category: "Frontend & Treasury Analytics",
            accent: "amber",
            attribution: "Sole Developer Project • Financial Application",
            role: "Frontend & Application Developer (Sole developer)",
            problem: "Providing treasurers of clubs, societies, and community groups with a transparent, privacy-first financial dashboard to track transactions, compute cash flows, and manage meeting notes without costly or insecure cloud database dependencies.",
            description: "State-of-the-art financial ledger and treasury analytics application built with React 19, TypeScript, and Tailwind CSS. Features dynamic cash flow analytics, interactive Recharts visualizations, a complete transaction CRUD manager, drag-and-drop digital receipt storage via compressed Base64 Data URLs, autosaved meeting notes, and an automatic chronological audit trail. Built with 100% client-side serverless storage and protected by a 4-digit PIN lock with brute-force rate limiting.",
            image: "/projects/project-5.webp",
            technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Zustand", "Recharts v3", "Vite", "date-fns"],
            github: "https://github.com/petero-codes/finnanceclub",
            demo: "https://finnanceclub.vercel.app/dashboard",
            badge: "Live Web App",
            implementedFeatures: [
                "Dynamic financial dashboard computing total balance, YTD income/expense summaries, and cash trends",
                "Interactive Recharts visualizations: Expense by Category donut charts, Monthly Cash Flow bar charts, and 4-week rolling cash trend area charts",
                "Complete Transaction Manager with CRUD operations (description, amount, date, category)",
                "Digital Receipts Manager converting drag-and-drop receipts to compressed Base64 Data URLs",
                "Real-time autosaved rich-text meeting notes notebook that persists across page navigation",
                "Automatic chronological audit trail logging all additions, edits, deletions, and settings changes",
                "Privacy-First Client Storage: 100% serverless data persistence in browser localStorage (clubvault-storage) via Zustand persist middleware",
                "Full Data Portability: Complete database export and import as a portable JSON backup file",
                "Local Vault Security: 4-digit PIN-protected entry, inactivity auto-lock (1, 5, 10, 30 min), and brute-force rate-limiting (5 min lock after 3 failed attempts)",
                "Client-side HTML input sanitization blocking Cross-Site Scripting (XSS) on notes and transaction descriptions"
            ],
            simulatedComponents: [],
            scopeBoundaries: "Runs 100% locally in the browser with zero external server dependencies, ensuring complete data privacy and eliminating cloud database attack vectors.",
            architecture: "Client-side reactive architecture built with React 19 and Zustand. State mutations trigger synchronous atomic updates to the persisted browser storage while appending immutable entries to the audit trail ledger.",
            decisions: "1. Serverless Local Storage: Eliminated external database infrastructure costs and privacy concerns by storing all club finances locally in browser storage with full JSON export capabilities.\n2. Brute-Force Rate Limiting: Protected sensitive financial records from local unauthorized access by enforcing a 5-minute lockout upon 3 incorrect PIN entries.\n3. Responsive Modern UI: Engineered with Tailwind CSS v4 variables and Recharts responsive containers.",
            challenges: "1. Base64 Image Compression: Managing localStorage quotas by compressing uploaded receipt images into optimized Base64 strings.\n2. Autosaved Notebook: Implementing seamless debounced autosaving for meeting notes without interrupting typing flow.",
            testing: "Cross-browser testing on Chrome, Edge, and Safari; PIN lock rate-limiting validation; localStorage serialization and backup import/export verification.",
            limitations: "Storage capacity is bound by browser localStorage limits (typically 5MB-10MB); users must periodically export JSON backups for long-term multi-device sync."
        }
    ],
    curatedRepos: [
        {
            name: "budget-planner",
            title: "KenGen ICT Budgeting Portal",
            description: "Clean Architecture annual budgeting prototype with SQL Server, dynamic hierarchical approvals, and Vitest test suite (27 test files, 163 tests).",
            language: "TypeScript",
            languageColor: "#3178c6",
            html_url: "https://github.com/petero-codes/budget-planner",
            stars: 0,
            forks: 0
        },
        {
            name: "frontend-sneeker-store",
            title: "Seekon Apparel Storefront",
            description: "Modern e-commerce frontend built with React 18, Vite, Redux Toolkit, and Tailwind CSS (Collaborative project; mock backend & checkout).",
            language: "JavaScript",
            languageColor: "#f1e05a",
            html_url: "https://github.com/petero-codes/frontend-sneeker-store",
            stars: 0,
            forks: 0
        },
        {
            name: "automation-",
            title: "Windows Automation Engine",
            description: "Low-level desktop automation platform with C-based Interception driver wrapper, sub-2ms interruption yielding, and DPAPI state recovery.",
            language: "Python",
            languageColor: "#3572A5",
            html_url: "https://github.com/petero-codes/automation-",
            stars: 0,
            forks: 0
        },
        {
            name: "AI-Powered-Code-Review-Assistant",
            title: "AI Code Review Assistant",
            description: "Asynchronous FastAPI and Monaco Editor application with Pydantic v2 validation, SQLite/PostgreSQL review history, and Docker.",
            language: "Python",
            languageColor: "#3572A5",
            html_url: "https://github.com/petero-codes/AI-Powered-Code-Review-Assistant",
            stars: 0,
            forks: 0
        },
        {
            name: "finnanceclub",
            title: "ClubVault Finance Dashboard",
            description: "Privacy-first financial ledger with Recharts analytics, Zustand localStorage persistence, 4-digit PIN security, and audit trails.",
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
