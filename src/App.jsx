import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  FolderGit2,
  Github,
  GraduationCap,
  Image as ImageIcon,
  Linkedin,
  Lock,
  Mail,
  Sparkles,
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

const headingEyebrow =
  "mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200";
const sectionTitle = "text-3xl font-semibold tracking-tight text-white sm:text-4xl";

const baseUrl = import.meta.env.BASE_URL || "/";

const assetPath = (filePath) => {
  const encodedPath = filePath
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${baseUrl}${encodedPath}`;
};

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
  "Data Structures and Algorithms",
  "OOP",
  "Portfolio Optimization",
  "Risk Modelling",
  "Monte Carlo Simulation",
  "Black-Scholes",
  "VaR and CVaR",
  "Machine Learning",
  "Streamlit",
];

const projects = [
  {
    id: "quantlab",
    title: "QuantLab-Suite",
    period: "2024 - 2025",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "A full-stack algorithmic trading and risk management platform covering multi-asset workflows, microstructure simulation, portfolio analytics, and machine-learning-led strategy experimentation.",
    highlights: [
      "Designed modular architecture across strategy execution, order management, and risk analytics",
      "Implemented VaR, Expected Shortfall, scenario analysis, and event-driven backtesting infrastructure",
      "Built systems that mirror practical quantitative engineering workflows",
    ],
    tags: ["Algorithmic Trading", "Risk Analytics", "Full Stack"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/quantlab-suite",
    privateNote: null,
    screenshot: assetPath("screenshots/quantlab-dashboard.png"),
    caseStudy: {
      challenge:
        "Create a project that demonstrates trading-system design and quantitative depth beyond a narrow toy demo.",
      solution:
        "Built an end-to-end platform combining execution architecture, risk systems, and machine learning experimentation.",
      impact: [
        "Shows strong systems thinking across finance and engineering",
        "Demonstrates practical quantitative analytics and backend design",
        "Acts as a flagship project for quant-focused internships",
      ],
      mockTitle: "QuantLab trading dashboard",
    },
  },
  {
    id: "pme-toolkit",
    title: "PM-Analyzer - Private Markets Portfolio Analyzer",
    period: "2025",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "A Python analytics platform for private equity, private debt, and real estate portfolio analysis with institutional-style metrics and interactive reporting.",
    highlights: [
      "Implemented MWIR, TWIR, PME, Sharpe, Sortino, VaR, and CVaR analytics",
      "Built Monte Carlo NAV simulation, J-curve modelling, and stress testing workflows",
      "Designed Streamlit dashboards for decomposition, analysis, and presentation",
    ],
    tags: ["Python", "Private Markets", "Quant Analytics"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/PME-Toolkit",
    privateNote: null,
    screenshot: assetPath("screenshots/pme-toolkit-dashboard.png"),
    caseStudy: {
      challenge:
        "Translate private-markets portfolio theory into a practical tool useful for real analysis.",
      solution:
        "Developed a modular analytics stack with return metrics, simulation models, and an interactive Streamlit interface.",
      impact: [
        "Demonstrates applied financial modelling and software engineering",
        "Shows ability to build clean analytical architecture in Python",
        "Adds direct relevance for investment and analytics teams",
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
      "An open-source Streamlit dashboard for fixed income analytics and scenario-based risk management across vanilla, callable, and inflation-protected bonds.",
    highlights: [
      "Implemented pricing, yield-curve bootstrapping, scenario shocks, Monte Carlo simulation, and VaR analytics",
      "Built practical workflow features such as autosave, restore, audit trails, and diversification checks",
      "Designed a responsive interface with portfolio state export and import",
    ],
    tags: ["Fixed Income", "Streamlit", "Risk Management"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/portfolio-management",
    privateNote: null,
    screenshot: assetPath("screenshots/fixed-income-dashboard.png"),
    caseStudy: {
      challenge:
        "Build a fixed income tool that feels useful in practice, not just theoretically correct.",
      solution:
        "Developed a production-style dashboard combining analytics, simulations, and robust portfolio workflows.",
      impact: [
        "Shows practical fixed income and risk-management capability",
        "Demonstrates conversion of quantitative ideas into usable software",
        "Strengthens fit for quant and analytics internship roles",
      ],
      mockTitle: "Fixed income portfolio dashboard",
    },
  },
  {
    id: "toast",
    title: "Toast - Rollout Feature Flag Platform",
    period: "2026 - Present",
    icon: <Briefcase className="h-5 w-5" />,
    description:
      "An ongoing university software engineering project with the firm Toast to build a feature-flagging platform for controlled rollout and rollback of production features.",
    highlights: [
      "Worked on the user feature by designing models with name, email, team prefixes, and accessible flags",
      "Implemented backend logic for user systems and integrated it with authentication",
      "Contributed to logging, conditional flags, rollout mechanisms, and REST APIs with database integration and service-layer validation",
    ],
    tags: ["Backend", "REST APIs", "Industry Project"],
    repoLabel: "Private university GitLab project",
    repoHref: null,
    privateNote:
      "This is an ongoing university project with the firm Toast. The repository is in GitLab and currently not accessible without TCD Wi-Fi or VPN.",
    screenshot: null,
    caseStudy: {
      challenge:
        "Deliver reliable backend functionality in a collaborative project connected to a real company workflow.",
      solution:
        "Built and integrated user services, authentication flows, and rollout logic while contributing to feature-activity logging and API validation.",
      impact: [
        "Demonstrates real collaboration with the firm Toast",
        "Shows practical backend ownership in a team setting",
        "Adds credibility through production-style API and validation design",
      ],
      mockTitle: "Feature-flag rollout workflow",
    },
  },
];

const achievements = [
  "Latest academic percentage: 86%",
  "First Class Honours (Distinction), Computer Science, Trinity College Dublin",
  "International Mathematical Olympiad medals, highest international rank 13",
  "International Science Olympiad rank 27",
  "Member, Trinity Student Management Fund",
];

const experience = [
  {
    title: "Backend Developer",
    org: "Toast - Rollout Feature Flag Platform",
    period: "2026 - Present",
    text: "Working on the backend of a team project with the firm Toast to build a feature-flagging system for controlled rollout and rollback. My work includes user models (name, email, team prefixes, accessible flags), authentication integration, feature-activity logging, conditional rollout logic, and REST API design with database integration and service-layer validation.",
  },
  {
    title: "Creator and Lead Developer",
    org: "QuantLab-Suite and related portfolio projects",
    period: "2024 - Present",
    text: "Building portfolio projects across backend engineering and quantitative analytics, with a focus on technical depth, practical usefulness, and clear communication.",
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
      {blurb ? <p className="mt-3 text-base leading-7 text-zinc-300">{blurb}</p> : null}
    </div>
  );
}

function ProjectMockup({ title }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="text-xs text-zinc-300">{title}</div>
      </div>
      <div className="grid gap-3 p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/15 p-3">
            <div className="text-xs text-zinc-300">Metric A</div>
            <div className="mt-2 text-lg font-semibold text-white">+12.4%</div>
          </div>
          <div className="rounded-xl border border-sky-500/30 bg-sky-500/15 p-3">
            <div className="text-xs text-zinc-300">Metric B</div>
            <div className="mt-2 text-lg font-semibold text-white">0.87</div>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/15 p-3">
            <div className="text-xs text-zinc-300">Metric C</div>
            <div className="mt-2 text-lg font-semibold text-white">24 ms</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="mb-3 flex items-end gap-2">
            {[50, 72, 60, 88, 76, 95, 81, 92].map((h, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-t-md bg-white/80"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
          <div className="text-xs text-zinc-300">
            Mock dashboard preview used when a project screenshot is unavailable.
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project, alt, className = "" }) {
  const [showImage, setShowImage] = useState(Boolean(project.screenshot));

  useEffect(() => {
    setShowImage(Boolean(project.screenshot));
  }, [project.screenshot]);

  if (showImage) {
    return (
      <img
        src={project.screenshot}
        alt={alt}
        className={`h-full w-full rounded-2xl border border-white/10 object-cover ${className}`.trim()}
        loading="lazy"
        onError={() => setShowImage(false)}
      />
    );
  }

  return <ProjectMockup title={project.caseStudy.mockTitle} />;
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
          className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl shadow-black/50"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <Badge className="rounded-full border border-white/10 bg-white/10 text-zinc-100">
                  {project.period}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 text-zinc-100"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-200">
                {project.description}
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={onClose}
              className="rounded-full border-white/15 bg-transparent text-white hover:bg-white/5"
              aria-label="Close case study"
            >
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
                      <div className="text-sm font-medium text-zinc-200">Challenge</div>
                      <p className="mt-1 leading-7 text-zinc-300">
                        {project.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">Approach</div>
                      <p className="mt-1 leading-7 text-zinc-300">
                        {project.caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">Why it matters</div>
                      <div className="mt-2 space-y-3">
                        {project.caseStudy.impact.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-zinc-200"
                          >
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
                      <div
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-200"
                      >
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-100" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="rounded-[1.5rem] border-white/10 bg-white/5">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-zinc-100">
                    <ImageIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">Preview</span>
                  </div>
                  <div className="aspect-[16/10]">
                    <ProjectVisual
                      project={project}
                      alt={`${project.title} preview`}
                      className="aspect-[16/10]"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    For public projects, this panel uses screenshots from
                    <span className="text-zinc-100"> public/screenshots/</span>. If an image is
                    missing, the site automatically shows a polished mock dashboard.
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
                      <p className="mt-2 text-sm leading-6 text-zinc-200">
                        {project.privateNote}
                      </p>
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

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.14),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(to_bottom,#0a0a0f,#09090b)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">
              Agastya Kataria
            </div>
            <div className="text-sm text-zinc-200">
              Computer Science, Trinity College Dublin
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-200 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#deployment" className="transition hover:text-white">
              Deployment
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55 }}
          >
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              CV plus portfolio, built to show technical depth and internship readiness.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-200 sm:text-xl">
              I am Agastya Kataria, a Computer Science undergraduate at Trinity College
              Dublin with a latest academic percentage of
              <span className="font-semibold text-white"> 86%</span> and First Class
              Honours <span className="font-semibold text-white">(Distinction)</span>.
              This site combines my CV, cover letter, and project case studies so a
              hiring team can quickly evaluate both my work quality and potential.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-2xl px-6 py-6 text-base">
                <a href="#projects">
                  <Sparkles className="mr-2 h-4 w-4" /> View Projects
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5"
              >
                <a href={links.cvPdf} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download CV (PDF)
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5"
              >
                <a href={links.coverLetterPdf} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Download Cover Letter (PDF)
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-200">
              <a href={links.email} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> agastyakataria17@gmail.com
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-zinc-200">Profile snapshot</div>
                    <div className="text-2xl font-semibold text-white">
                      Prepared for high-ownership internship work
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    {projectCount} featured projects
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Latest Percentage", "86%"],
                    ["University", "Trinity College Dublin"],
                    ["Core Strength", "Backend and Quantitative Systems"],
                    ["Academic Standing", "First Class Honours (Distinction)"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-zinc-200">{k}</div>
                      <div className="mt-1 text-base font-medium text-white">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-medium text-zinc-100">
                    What this site is designed to do
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-200">
                    Provide a clear, respectful, and evidence-based view of my work so it
                    is easy to assess fit for internship roles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="mt-24 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className={headingEyebrow}>About</div>
            <h2 className={sectionTitle}>
              A focused portfolio that complements my CV and cover letter.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-zinc-200">
            <p>
              I enjoy building software where strong engineering and strong reasoning
              meet. My work spans backend systems, financial analytics, and
              data-heavy applications.
            </p>
            <p>
              This website is intended to make review efficient: clear project context,
              concise technical decisions, and direct links to code where available.
            </p>
            <p>
              I am looking for internship opportunities where I can contribute with
              reliability, learn quickly, and work closely with experienced teams.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Experience"
            title="Selected experience and ongoing work"
            blurb="Collaborative software engineering work plus independent technical project development."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <Card key={item.org} className="rounded-[1.75rem] border-white/10 bg-white/5">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-zinc-200">{item.org}</p>
                    </div>
                    <Badge className="rounded-full border border-white/10 bg-white/10 text-zinc-100">
                      {item.period}
                    </Badge>
                  </div>
                  <p className="mt-4 leading-7 text-zinc-200">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Projects"
            title="Project cards with individual case-study modals"
            blurb="Each project opens into its own detailed case-study modal with challenge, approach, impact, and repository context."
          />

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.id} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-5 aspect-[16/9] overflow-hidden rounded-2xl">
                      <ProjectVisual project={project} alt={`${project.title} screenshot`} />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-zinc-100">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                          <p className="text-sm text-zinc-200">{project.period}</p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 leading-7 text-zinc-200">{project.description}</p>

                    <div className="mt-5 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-3 text-sm leading-6 text-zinc-100">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-100" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-zinc-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button onClick={() => setSelectedProject(project)} className="rounded-2xl">
                        View Case Study
                      </Button>
                      {project.repoHref ? (
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/5"
                        >
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

                    {project.privateNote ? (
                      <p className="mt-3 text-sm leading-6 text-zinc-300">{project.privateNote}</p>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Visual previews"
            title="Screenshots and smart mock fallback"
            blurb="If a screenshot exists in public/screenshots, it is shown. If not, a polished mock dashboard is shown automatically."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="rounded-[1.75rem] border-white/10 bg-white/5">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-2 text-zinc-100">
                      {project.icon}
                    </div>
                    <div className="text-sm font-medium text-white">{project.title}</div>
                  </div>
                  <div className="aspect-[16/10]">
                    <ProjectVisual project={project} alt={`${project.title} preview`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="why-me"
          className="mt-24 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
            <CardContent className="p-7">
              <div className={headingEyebrow}>Professional strengths</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                How I aim to contribute to an internship team
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  "Strong learning velocity and consistency under feedback",
                  "Comfort across backend engineering, analytics, and quantitative workflows",
                  "Care for code quality, architecture, and clear technical communication",
                  "Reliable collaboration habits in team settings",
                  "Visible evidence of execution through shipped projects",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-zinc-100"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
            <CardContent className="p-7">
              <div className={headingEyebrow}>Highlights</div>
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Academic and competitive signals
              </h2>
              <div className="mt-6 space-y-4">
                {achievements.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <Trophy className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span className="leading-7 text-zinc-100">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="skills"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Education and skills"
            title="Strong fundamentals with practical project application"
            blurb="A blend of software engineering, quantitative finance, and data systems skills for internship contribution across multiple domains."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-zinc-100" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="mt-5 space-y-5 text-zinc-200">
                  <div>
                    <div className="font-medium text-white">B.A. in Computer Science</div>
                    <div className="inline-flex items-center gap-2">
                      <Building2 className="h-4 w-4" /> Trinity College Dublin
                    </div>
                    <div className="text-sm text-zinc-300">Sep 2024 - Present</div>
                    <div className="mt-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                      Latest academic percentage: 86%, First Class Honours (Distinction)
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Diploma in Python Programming</div>
                    <div>EBVTR, A Grade</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">SAT</div>
                    <div>1440, 95th percentile overall, 99th percentile Mathematics</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-white">Technical toolkit</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="deployment"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="GitHub Pages setup"
            title="Deployment-ready with your requested repository structure"
            blurb="This section keeps the structure explicit so the project can be maintained and deployed cleanly."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <div className="flex items-center gap-3">
                  <FolderGit2 className="h-5 w-5 text-zinc-100" />
                  <h3 className="text-xl font-semibold text-white">
                    Suggested repo structure
                  </h3>
                </div>
                <pre className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-xs leading-6 text-zinc-200">
                  {repoStructure}
                </pre>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-white">Deployment notes</h3>
                <div className="mt-5 space-y-4 text-zinc-200">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    CV and cover letter links point to files in
                    <span className="text-white"> public/</span> with exact filenames.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Project visuals load from
                    <span className="text-white"> public/screenshots/</span> and fallback to
                    mock dashboards if missing.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Toast is clearly marked as an ongoing university project with the
                    firm Toast, and the GitLab repository access note is included.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Public project cards include direct repository links.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-amber-400/15 via-white/5 to-emerald-500/10">
            <CardContent className="p-8 lg:p-10">
              <div className="max-w-4xl">
                <div className={headingEyebrow}>Contact</div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Thank you for taking the time to review my work.
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-200">
                  I would be glad to share additional project details, walkthroughs, or
                  private materials where access is restricted.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild className="rounded-2xl px-6 py-6 text-base">
                    <a href={links.email}>
                      <Mail className="mr-2 h-4 w-4" /> Email Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5"
                  >
                    <a href={links.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5"
                  >
                    <a href={links.github} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
