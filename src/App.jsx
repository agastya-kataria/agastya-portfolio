import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  FileText,
  FolderGit2,
  Github,
  GraduationCap,
  Image as ImageIcon,
  Linkedin,
  Lock,
  Mail,
  Trophy,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const headingEyebrow = "mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300";
const sectionTitle = "text-3xl font-semibold tracking-tight text-white sm:text-4xl";

const getBaseUrl = () => {
  if (typeof window === "undefined") return "/";
  const path = window.location.pathname || "/";
  if (path.endsWith(".html")) {
    const parts = path.split("/").filter(Boolean);
    if (parts.length > 1) return `/${parts[0]}/`;
  }
  return "/";
};

const assetPath = (fileName) => `${getBaseUrl()}${encodeURIComponent(fileName)}`;

const links = {
  email: "mailto:agastyakataria17@gmail.com",
  github: "https://github.com/agastya-kataria",
  linkedin: "https://www.linkedin.com/in/agastyakataria176/",
  cvPdf: assetPath("Agastya_Kataria Resume.pdf"),
  coverLetterPdf: assetPath("Agastya_Kataria Cover Letter.pdf"),
};

const skills = [
  "Java",
  "Python",
  "C",
  "SQL",
  "R",
  "React",
  "FastAPI",
  "Flask",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Kafka",
  "REST APIs",
  "Data Structures & Algorithms",
  "OOP",
  "Portfolio Optimization",
  "Risk Modelling",
  "Monte Carlo Simulation",
  "Black–Scholes",
  "VaR",
  "Machine Learning",
  "Streamlit",
];

const projects = [
  {
    id: "quantlab",
    title: "QuantLab-Suite",
    period: "2024 – 2025",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "A full-stack algorithmic trading and risk management platform covering multi-asset trading workflows, market microstructure simulation, portfolio risk analytics, and machine-learning-driven strategies.",
    highlights: [
      "Designed institutional-style architecture spanning order management, strategy execution, and real-time risk systems",
      "Implemented VaR, Expected Shortfall, scenario analysis, and event-driven backtesting infrastructure",
      "Integrated ML strategy experimentation and high-frequency trading simulation concepts",
    ],
    tags: ["Algorithmic Trading", "Risk Analytics", "Full Stack"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/quantlab-suite",
    privateNote: null,
    caseStudy: {
      challenge:
        "Build a project that demonstrates the architecture and analytical depth of real trading infrastructure rather than a narrow demo.",
      solution:
        "Designed a modular platform combining trading system components, quantitative analytics, and machine learning experimentation.",
      impact: [
        "Demonstrates end-to-end thinking across trading systems and analytics",
        "Shows strong range in financial engineering and backend system design",
        "Acts as a flagship quantitative engineering portfolio project",
      ],
      mockTitle: "QuantLab trading dashboard",
    },
  },
  {
    id: "pme-toolkit",
    title: "PM-Analyzer – Private Markets Portfolio Analyzer",
    period: "2025",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "A Python analytics platform for analysing private equity, private debt, and real estate portfolios with institutional-grade modelling and interactive dashboards.",
    highlights: [
      "Implemented MWIR, TWIR, Public Market Equivalent, Sharpe, Sortino, VaR and CVaR analytics",
      "Built Monte Carlo NAV simulations, J-curve modelling, and scenario stress testing",
      "Created interactive Streamlit dashboards for portfolio risk decomposition and reporting",
    ],
    tags: ["Python", "Private Markets", "Quant Analytics"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/PME-Toolkit",
    privateNote: null,
    caseStudy: {
      challenge:
        "Translate private markets portfolio theory into a practical analytics platform useful for investment analysis.",
      solution:
        "Built a modular Python framework combining return analytics, optimisation models, simulation tools, and interactive dashboards.",
      impact: [
        "Demonstrates capability in financial modelling and quantitative analytics",
        "Shows ability to design clean Python architecture for analytical systems",
        "Creates a portfolio project relevant to asset management and investment technology",
      ],
      mockTitle: "Private markets analytics dashboard",
    },
  },
  {
    id: "portfolio-management",
    title: "Fixed Income Portfolio Management Dashboard",
    period: "2025",
    icon: <Code2 className="h-5 w-5" />,
    description:
      "A modern open-source Streamlit dashboard for fixed income portfolio analytics, scenario analysis, and risk management across vanilla, callable, and inflation-protected bonds.",
    highlights: [
      "Implemented bond pricing, yield curve bootstrapping, scenario shocks, Monte Carlo simulation, and Value-at-Risk analytics",
      "Built portfolio workflows for uploads, diversification checks, reinvestment logic, audit trails, undo, and autosave or restore",
      "Designed an accessible interactive interface with mobile-friendly controls, dark or light theming, and portfolio state export or import",
    ],
    tags: ["Fixed Income", "Streamlit", "Risk Management"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/portfolio-management",
    privateNote: null,
    caseStudy: {
      challenge:
        "Build a fixed income analytics tool that goes beyond theory and feels like a practical portfolio management environment.",
      solution:
        "Developed a Streamlit dashboard covering bond analytics, curve construction, scenario testing, Monte Carlo risk, diversification automation, and portfolio state management.",
      impact: [
        "Shows applied fixed income and risk-management understanding",
        "Demonstrates the ability to turn quantitative finance workflows into usable software",
        "Adds a polished and relevant project for quant, asset management, and analytics roles",
      ],
      mockTitle: "Fixed income portfolio dashboard",
    },
  },
  {
    id: "toast",
    title: "Toast – Rollout Feature Flag Platform",
    period: "2026 – Present",
    icon: <Briefcase className="h-5 w-5" />,
    description:
      "An ongoing university software engineering project developed with the firm Toast to build a feature-flag platform enabling controlled rollout and rollback of production features.",
    highlights: [
      "Designed user models including name, email, team prefixes, and accessible feature flags",
      "Implemented backend logic and integrated user functionality with authentication",
      "Contributed to logging systems, conditional flags, rollout mechanisms, and REST API design",
    ],
    tags: ["Backend", "REST APIs", "Industry Project"],
    repoLabel: "Private university GitLab project",
    repoHref: null,
    privateNote:
      "Repository access is restricted via university GitLab and may require TCD Wi-Fi or VPN.",
    caseStudy: {
      challenge:
        "Contribute to a collaborative backend platform connected to a real company engineering workflow.",
      solution:
        "Focused on backend user systems, authentication integration, logging infrastructure, and conditional rollout logic.",
      impact: [
        "Demonstrates experience working on a real company-linked project with Toast",
        "Shows exposure to collaborative backend development",
        "Adds credibility through production-style API and system design",
      ],
      mockTitle: "Feature flag rollout workflow",
    },
  },
];

const achievements = [
  "86% latest academic percentage",
  "First Class Honours (Distinction) in Computer Science at Trinity College Dublin",
  "International Mathematical Olympiad medals with highest international rank 13",
  "International Science Olympiad rank 27",
  "Member of Trinity Student Management Fund",
];

const experience = [
  {
    title: "Backend Developer",
    org: "Toast – Rollout Feature Flag Platform",
    period: "2026 – Present",
    text: "Contributing to an ongoing university software engineering project with the firm Toast, focused on feature rollout, rollback, user management, authentication integration, logging, and conditional flag evaluation.",
  },
  {
    title: "Creator & Lead Developer",
    org: "QuantLab-Suite and related portfolio projects",
    period: "2024 – Present",
    text: "Building finance, analytics, and systems projects that combine strong engineering fundamentals with quantitative reasoning and polished presentation.",
  },
];

const repoStructure = `agastya-portfolio/
├── public/
│   ├── Agastya_Kataria Resume.pdf
│   ├── Agastya_Kataria Cover Letter.pdf
│   ├── screenshots/
│   │   ├── quantlab-dashboard.png
│   │   ├── pme-toolkit-dashboard.png
│   │   └── fixed-income-dashboard.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ProjectModal.jsx
│   │   ├── ProjectMockup.jsx
│   │   ├── SectionHeader.jsx
│   │   └── TopNav.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md`;

function SectionHeader({ eyebrow, title, blurb }) {
  return (
    <div className="max-w-3xl">
      <div className={headingEyebrow}>{eyebrow}</div>
      <h2 className={sectionTitle}>{title}</h2>
      {blurb ? <p className="mt-3 text-base leading-7 text-zinc-400">{blurb}</p> : null}
    </div>
  );
}

function ProjectMockup({ title }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="text-xs text-zinc-400">{title}</div>
      </div>
      <div className="grid gap-3 p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
            <div className="text-xs text-zinc-400">Metric A</div>
            <div className="mt-2 text-lg font-semibold text-white">+12.4%</div>
          </div>
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3">
            <div className="text-xs text-zinc-400">Metric B</div>
            <div className="mt-2 text-lg font-semibold text-white">0.87</div>
          </div>
          <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-3">
            <div className="text-xs text-zinc-400">Metric C</div>
            <div className="mt-2 text-lg font-semibold text-white">24 ms</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="mb-3 flex items-end gap-2">
            {[50, 72, 60, 88, 76, 95, 81, 92].map((h, idx) => (
              <div key={idx} className="flex-1 rounded-t-md bg-white/80" style={{ height: `${h}px` }} />
            ))}
          </div>
          <div className="text-xs text-zinc-400">Mock dashboard preview — replace with an actual screenshot in public/screenshots for deployment.</div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl shadow-black/50"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <Badge className="rounded-full border border-white/10 bg-white/10 text-zinc-200">{project.period}</Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} className="rounded-full border border-white/10 bg-black/20 text-zinc-200">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-300">{project.description}</p>
            </div>
            <Button variant="outline" size="icon" onClick={onClose} className="rounded-full border-white/15 bg-transparent text-white hover:bg-white/5">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Card className="rounded-[1.5rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white">Case study summary</h4>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="text-sm font-medium text-zinc-300">Challenge</div>
                      <p className="mt-1 leading-7 text-zinc-400">{project.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300">Approach</div>
                      <p className="mt-1 leading-7 text-zinc-400">{project.caseStudy.solution}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300">Why it matters</div>
                      <div className="mt-2 space-y-3">
                        {project.caseStudy.impact.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[1.5rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white">Key contributions</h4>
                  <div className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm leading-6 text-zinc-300">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-200" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <ProjectMockup title={project.caseStudy.mockTitle} />

              <Card className="rounded-[1.5rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <ImageIcon className="h-5 w-5 text-zinc-200" />
                    <h4 className="text-lg font-semibold text-white">Screenshot note</h4>
                  </div>
                  <p className="mt-3 leading-7 text-zinc-400">
                    This preview is currently a polished mock dashboard. Replace it with your real project screenshot by adding the image to <span className="text-zinc-200">public/screenshots</span> and swapping the mock component for an image during deployment.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[1.5rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  {project.repoHref ? (
                    <Button asChild className="w-full rounded-2xl">
                      <a href={project.repoHref} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> {project.repoLabel}
                      </a>
                    </Button>
                  ) : (
                    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-amber-200">
                        <Lock className="h-4 w-4" /> {project.repoLabel}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{project.privateNote}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CVPortfolioWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectCount = useMemo(() => projects.length, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_20%),linear-gradient(to_bottom,#09090b,#09090b)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">Agastya Kataria</div>
            <div className="text-sm text-zinc-300">Computer Science • Trinity College Dublin</div>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-200 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#deployment" className="transition hover:text-white">Deployment</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Building thoughtful software, strong technical projects, and a portfolio designed to leave a lasting impression.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              I’m Agastya Kataria, a Computer Science undergraduate at Trinity College Dublin with an
              <span className="font-semibold text-white"> 86% latest percentage</span>, a strong olympiad-level mathematical background,
              and hands-on experience across backend systems, analytics platforms, and quantitative finance tools.
              This website is intended to work as both my CV and a concise introduction to how I think, build, and contribute.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-2xl px-6 py-6 text-base">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5">
                <a href={links.cvPdf} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5">
                <a href={links.coverLetterPdf} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Cover Letter
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-300">
              <a href={links.email} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> agastyakataria17@gmail.com
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-zinc-300">Profile snapshot</div>
                    <div className="text-2xl font-semibold text-white">A strong fit for internship teams that value upside</div>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    {projectCount} featured projects
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Latest Percentage", "86%"],
                    ["University", "Trinity College Dublin"],
                    ["Core Strength", "Backend + Quantitative Systems"],
                    ["Academic Standing", "First Class Honours (Distinction)"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-zinc-300">{k}</div>
                      <div className="mt-1 text-base font-medium text-white">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-medium text-zinc-200">What this site is meant to show</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Strong analytical ability, clear communication, and a habit of turning ambitious ideas into polished technical work. The goal is simple: make it easy for a hiring manager to see both capability and trajectory.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.section id="about" className="mt-24 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <div>
            <div className={headingEyebrow}>About</div>
            <h2 className={sectionTitle}>A concise introduction to how I work and what I could bring to a team.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              I’m a Computer Science undergraduate who enjoys work at the intersection of technical depth, ownership, and ambition. My experience spans backend systems, financial analytics, data-heavy applications, and engineering-focused team projects.
            </p>
            <p>
              What I aim to offer is not just coding ability, but the combination of fast learning, structured thinking, clear communication, and a high standard for the final product. Whether it is APIs, analytics engines, or project architecture, I care about doing the work properly.
            </p>
            <p>
              I’m looking for internship opportunities where I can contribute seriously, grow quickly, and be useful to strong teams solving meaningful problems.
            </p>
          </div>
        </motion.section>

        <motion.section id="experience" className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <SectionHeader
            eyebrow="Experience"
            title="Selected experience and ongoing work"
            blurb="A blend of collaborative software engineering work and independent technical project building."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <Card key={item.org} className="rounded-[1.75rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-zinc-300">{item.org}</p>
                    </div>
                    <Badge variant="secondary" className="rounded-full border border-white/10 bg-white/10 text-zinc-200">
                      {item.period}
                    </Badge>
                  </div>
                  <p className="mt-4 leading-7 text-zinc-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <SectionHeader
            eyebrow="Projects"
            title="Projects selected to show technical range and depth"
            blurb="Each project card opens into a mini case-study modal with a stronger explanation of what was built and why it matters."
          />

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.id} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-zinc-200">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                          <p className="text-sm text-zinc-300">{project.period}</p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 leading-7 text-zinc-300">{project.description}</p>

                    <div className="mt-5 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 text-sm leading-6 text-zinc-200">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-200" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-zinc-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button onClick={() => setSelectedProject(project)} className="rounded-2xl">
                        View Case Study
                      </Button>
                      {project.repoHref ? (
                        <Button asChild variant="outline" className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/5">
                          <a href={project.repoHref} target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Repo
                          </a>
                        </Button>
                      ) : (
                        <div className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200">
                          <Lock className="h-4 w-4" /> Private GitLab repo
                        </div>
                      )}
                    </div>

                    {project.privateNote ? <p className="mt-3 text-sm leading-6 text-zinc-400">{project.privateNote}</p> : null}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <SectionHeader
            eyebrow="Visual previews"
            title="Mock dashboards ready to be replaced with real screenshots"
            blurb="This keeps the site visually strong right now, while giving you an easy path to swap in actual project screenshots later."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="rounded-[1.75rem] border-white/10 bg-white/5">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-2 text-zinc-200">{project.icon}</div>
                    <div className="text-sm font-medium text-white">{project.title}</div>
                  </div>
                  <ProjectMockup title={project.caseStudy.mockTitle} />
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section id="why-me" className="mt-24 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
            <CardContent className="p-7">
              <div className={headingEyebrow}>Professional strengths</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">What I would aim to bring to an internship team</h2>
              <div className="mt-6 grid gap-4">
                {[
                  "A strong learning curve and a genuine interest in hard technical problems",
                  "Comfort across software engineering, analytics, and quantitative reasoning",
                  "Care for code quality, architecture, and the quality of the final presentation",
                  "Clear communication and a professional approach to collaboration",
                  "High long-term upside supported by academic strength and visible project execution",
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-zinc-200">
                    {point}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
            <CardContent className="p-7">
              <div className={headingEyebrow}>Highlights</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Academic and competitive signals</h2>
              <div className="mt-6 space-y-4">
                {achievements.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <Trophy className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span className="leading-7 text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section id="skills" className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <SectionHeader
            eyebrow="Education and skills"
            title="Strong fundamentals with room to grow fast"
            blurb="A mix of software engineering, quantitative finance, and data systems skills that allows me to contribute across different kinds of teams."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-zinc-200" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="mt-5 space-y-5 text-zinc-300">
                  <div>
                    <div className="font-medium text-white">B.A. in Computer Science</div>
                    <div>Trinity College Dublin</div>
                    <div className="text-sm text-zinc-400">Sep 2024 – Present</div>
                    <div className="mt-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                      Latest academic percentage: 86% • First Class Honours (Distinction)
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Diploma in Python Programming</div>
                    <div>EBVTR — A Grade</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">SAT</div>
                    <div>1440 • 95th percentile overall • 99th percentile Mathematics</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-white">Technical toolkit</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section id="deployment" className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <SectionHeader
            eyebrow="GitHub Pages setup"
            title="A clean deployment structure for turning this into a live portfolio"
            blurb="This section is here so the project is not just pretty in canvas — it is organised to be deployed properly."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <FolderGit2 className="h-5 w-5 text-zinc-200" />
                  <h3 className="text-xl font-semibold text-white">Suggested repo structure</h3>
                </div>
                <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-zinc-300">{repoStructure}</pre>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-white">Deployment notes</h3>
                <div className="mt-5 space-y-4 text-zinc-300">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Put your CV and cover letter PDFs in <span className="text-white">public/</span> using the exact filenames shown here so the download buttons work on GitHub Pages.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Replace the mock dashboard previews with real screenshots in <span className="text-white">public/screenshots/</span>.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Keep the Toast repository private note because access depends on university GitLab plus TCD Wi-Fi or VPN.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Public project links are now pointed to their exact repositories instead of temporary profile links.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section id="contact" className="mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/5 to-emerald-500/10">
            <CardContent className="p-8 lg:p-10">
              <div className="max-w-4xl">
                <div className={headingEyebrow}>Contact</div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Thanks for taking the time to look through my work.
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc