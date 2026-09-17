import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  FileText,
  Github,
  GraduationCap,
  Image as ImageIcon,
  Linkedin,
  Lock,
  Mail,
  Plane,
  ShieldCheck,
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
  "mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-300";
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
  cvPdf: assetPath("Agastya_Kataria_Resume.pdf"),
  coverLetterPdf: assetPath("Agastya_Kataria_Cover_Letter.pdf"),
};

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "Java", "SQL"],
  },
  {
    label: "Frameworks & data",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "React",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Plotly",
    ],
  },
  {
    label: "Infrastructure",
    skills: [
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Kafka",
      "Prometheus",
      "Git",
      "Linux",
      "Gradle",
    ],
  },
  {
    label: "Security & observability",
    skills: ["Elasticsearch", "Logstash", "Kibana", "SIEM", "Threat Detection"],
  },
  {
    label: "Engineering & modelling",
    skills: [
      "REST APIs",
      "Data Structures & Algorithms",
      "Distributed Systems",
      "Machine Learning",
      "FIX Protocol",
      "Value-at-Risk",
      "Financial Modelling",
    ],
  },
];

const courses = [
  "Mathematics for Machine Learning · Imperial",
  "Data Structures & Algorithms · UCSD",
  "Finance & Quantitative Modeling · Wharton",
  "Cybersecurity Fundamentals · IBM",
  "Introduction to CS & Programming using Python · MITx",
  "Financial Markets · Yale",
  "Web Development & API Specialization · Coursera",
];

const projects = [
  {
    id: "security-platform",
    title: "Security Platform Suite",
    period: "CRIS Internship · 2026",
    icon: <ShieldCheck className="h-5 w-5" />,
    description:
      "Three integrated cybersecurity builds spanning SIEM threat detection, machine-learning phishing detection, and security-awareness simulation.",
    highlights: [
      "Processed 100,000+ synthetic Windows and Linux security events through an ELK-based SIEM with 10 detection rules and automated incident reports",
      "Trained phishing classifiers on 15,600+ URL and email samples, then served real-time predictions through a Flask API and Chrome extension",
      "Built PhishGuard with campaign management, user-interaction tracking, department analytics, and automated awareness reporting",
    ],
    tags: ["Cybersecurity", "ELK Stack", "Machine Learning"],
    repoLabel: "Internship project source",
    repoHref: null,
    privateNote:
      "The project source is not currently linked publicly, but the architecture and implementation are documented in this case study.",
    screenshot: null,
    gallery: [],
    caseStudy: {
      challenge:
        "Create an end-to-end security platform that could ingest realistic telemetry, detect suspicious activity, protect users from phishing, and support awareness training.",
      solution:
        "Combined an ELK monitoring pipeline, a production-minded phishing classifier, a browser protection workflow, and a Flask-based simulation platform.",
      impact: [
        "Covered brute-force attacks, privilege escalation, malware execution, C2 activity, and suspicious logons",
        "Handled a real offline-to-online ML consistency issue by retaining only features available at inference time",
        "Turned security events and campaign interactions into actionable dashboards and reports",
      ],
      mockTitle: "Cybersecurity platform overview",
    },
  },
  {
    id: "quantlab",
    title: "QuantLab-Suite",
    period: "2024 – 2025",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "A modular Java and Python trading simulator for exploring order execution, portfolio analytics, and risk modelling.",
    highlights: [
      "Implemented multiple order types, FIX message simulation, portfolio performance tracking, volatility estimation, and stress testing",
      "Built Historical and Monte Carlo Value-at-Risk workflows for portfolio risk analysis",
      "Explored a microservice architecture with Docker, PostgreSQL, Kafka, and Prometheus",
    ],
    tags: ["Java + Python", "Risk Analytics", "Distributed Systems"],
    repoLabel: "View GitHub repository",
    repoHref: "https://github.com/agastya-kataria/quantlab-suite",
    privateNote: null,
    screenshot: assetPath("screenshots/quantlab-dashboard.png"),
    gallery: [
      assetPath("screenshots/quantlab-dashboard.png"),
      assetPath("screenshots/quantlab-02.png"),
      assetPath("screenshots/quantlab-03.png"),
      assetPath("screenshots/quantlab-04.png"),
      assetPath("screenshots/quantlab-05.png"),
      assetPath("screenshots/quantlab-06.png"),
      assetPath("screenshots/quantlab-07.png"),
      assetPath("screenshots/quantlab-08.png"),
      assetPath("screenshots/quantlab-09.png"),
    ],
    caseStudy: {
      challenge:
        "Bring trading workflows, portfolio analytics, and risk modelling together in a modular system rather than a narrow calculator.",
      solution:
        "Combined Java and Python components for order execution, FIX simulation, portfolio tracking, risk analysis, and infrastructure experimentation.",
      impact: [
        "Connects financial modelling with practical software architecture",
        "Demonstrates Historical and Monte Carlo VaR in a broader portfolio workflow",
        "Explores observability and event-driven components used in distributed systems",
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
    screenshot: assetPath("screenshots/pme-toolkit-dashboard.png"),
    gallery: [
      assetPath("screenshots/pme-toolkit-dashboard.png"),
      assetPath("screenshots/pme-toolkit-02.png"),
      assetPath("screenshots/pme-toolkit-03.png"),
      assetPath("screenshots/pme-toolkit-04.png"),
      assetPath("screenshots/pme-toolkit-05.png"),
      assetPath("screenshots/pme-toolkit-06.png"),
      assetPath("screenshots/pme-toolkit-07.png"),
      assetPath("screenshots/pme-toolkit-08.png"),
      assetPath("screenshots/pme-toolkit-09.png"),
      assetPath("screenshots/pme-toolkit-10.png"),
      assetPath("screenshots/pme-toolkit-11.png"),
    ],
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
    screenshot: assetPath("screenshots/fixed-income-dashboard.png"),
    gallery: [
      assetPath("screenshots/fixed-income-dashboard.png"),
      assetPath("screenshots/fixed-income-02.png"),
      assetPath("screenshots/fixed-income-03.png"),
      assetPath("screenshots/fixed-income-04.png"),
      assetPath("screenshots/fixed-income-05.png"),
      assetPath("screenshots/fixed-income-06.png"),
      assetPath("screenshots/fixed-income-07.png"),
    ],
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
    period: "Jan – Apr 2026",
    icon: <Briefcase className="h-5 w-5" />,
    description:
      "A ten-week university software engineering project developed with Toast to enable controlled rollout and rollback of production features.",
    highlights: [
      "Implemented CRUD services, DTO layers, persistence models, and service-layer validation for feature flags and users",
      "Designed deterministic percentage rollouts by hashing user IDs into 100 exposure bins",
      "Integrated user functionality with authentication and contributed to logging, conditional flags, and REST API design",
    ],
    tags: ["Backend", "REST APIs", "Industry Project"],
    repoLabel: "Private university GitLab project",
    repoHref: null,
    privateNote:
      "Repository access is restricted via university GitLab and may require TCD Wi-Fi or VPN.",
    screenshot: null,
    gallery: [],
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
  {
    id: "atmoslens",
    title: "AtmosLens HoloViz Air-Quality App",
    period: "2026",
    icon: <Activity className="h-5 w-5" />,
    description:
      "An interactive decision-support application that turns air-quality forecasts into location-aware activity recommendations.",
    highlights: [
      "Visualized Open-Meteo forecasts with Panel, HoloViews, GeoViews, hvPlot, Datashader, DuckDB, and Xarray",
      "Built health-profile configuration, exposure scoring, location search, and forecast refresh workflows",
      "Added more than 250 automated tests covering recommendation logic, data access, SQL integration, and core application behaviour",
    ],
    tags: ["Python", "Data Visualisation", "Testing"],
    repoLabel: "Project repository not linked",
    repoHref: null,
    privateNote: "A public repository link can be added when the project is published.",
    screenshot: null,
    gallery: [],
    caseStudy: {
      challenge:
        "Make complex forecast data understandable enough to support practical, health-aware activity decisions.",
      solution:
        "Built an interactive geospatial dashboard with configurable health profiles, exposure scoring, and recommendation logic backed by extensive automated testing.",
      impact: [
        "Combined live environmental data with a clear user decision workflow",
        "Demonstrated breadth across analytics, geospatial visualisation, SQL, and application testing",
        "Validated core behaviour with a test suite of more than 250 cases",
      ],
      mockTitle: "Air-quality decision dashboard",
    },
  },
  {
    id: "flight-analyser",
    title: "Flight Data Analyser",
    period: "2025",
    icon: <Plane className="h-5 w-5" />,
    description:
      "A Skyscanner-inspired Java application for exploring, filtering, and comparing large real-world flight datasets.",
    highlights: [
      "Processed more than 10,000 flight-log entries to identify patterns, route options, and pricing insights",
      "Built interactive search, filtering, comparison, and data-visualisation workflows using Java and Processing",
      "Implemented custom search algorithms and performance-tuned result rendering",
    ],
    tags: ["Java", "Data Analysis", "Algorithms"],
    repoLabel: "Project repository not linked",
    repoHref: null,
    privateNote: "A public repository link can be added when the project is published.",
    screenshot: null,
    gallery: [],
    caseStudy: {
      challenge:
        "Turn a large, unstructured flight dataset into a responsive application for route and pricing exploration.",
      solution:
        "Designed a Java application with custom parsing, search, filtering, comparisons, dashboards, and tuned rendering.",
      impact: [
        "Demonstrated practical data-structures and algorithms work on 10,000+ records",
        "Connected data processing with a complete interactive user interface",
        "Focused on usability and performance rather than analysis in isolation",
      ],
      mockTitle: "Flight search and analysis dashboard",
    },
  },
];

const achievements = [
  "First Class Honours (Distinction) in Computer Science · 81%",
  "International Mathematical Olympiad · multiple medals and highest international rank 13",
  "International Science Olympiad · rank 27",
  "Eurofest 2019 · 2nd place, Odyssey of the Mind",
  "Trinity Student Management Fund member · approximately €700k AUM",
];

const experience = [
  {
    title: "Cybersecurity Engineering Intern",
    org: "CRIS · Centre for Railway Information Systems",
    period: "May – Aug 2026",
    text: "Built an integrated security platform spanning centralized monitoring, threat detection, phishing defence, and security-awareness simulation.",
    highlights: [
      "Developed an ELK-based SIEM for Windows and Linux telemetry, with automated detection and incident reporting",
      "Designed machine-learning phishing detection using URL features and email metadata with real-time browser protection",
      "Built PhishGuard for campaign management, interaction tracking, analytics, and awareness reporting",
    ],
  },
  {
    title: "Backend Developer",
    org: "Toast – Rollout Feature Flag Platform",
    period: "Jan – Apr 2026",
    text: "Contributed to a ten-week team project with Toast, implementing backend services for controlled feature rollout and rollback.",
    highlights: [
      "Built CRUD services, DTOs, persistence models, and validation for users and feature flags",
      "Implemented deterministic percentage rollouts and integrated the user system with authentication",
      "Contributed to REST APIs, activity logging, database integration, and conditional flag evaluation",
    ],
  },
];

function SectionHeader({ eyebrow, title, blurb }) {
  return (
    <div className="max-w-3xl">
      <div className={headingEyebrow}>{eyebrow}</div>
      <h2 className={sectionTitle}>{title}</h2>
      {blurb ? <p className="mt-3 text-base leading-7 text-zinc-400">{blurb}</p> : null}
    </div>
  );
}

function ProjectMockup({ project }) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-zinc-900 to-emerald-500/10 p-4 sm:p-6">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-400/10 blur-2xl" />
      <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-300">
          <Sparkles className="h-4 w-4" /> Project overview
        </div>
        <span className="text-xs text-zinc-400">{project.period}</span>
      </div>
      <div className="relative py-2 sm:py-5">
        <div className="mb-2 inline-flex rounded-xl border border-white/10 bg-black/20 p-2 text-white sm:mb-4 sm:rounded-2xl sm:p-3">
          {project.icon}
        </div>
        <div className="max-w-md text-lg font-semibold tracking-tight text-white sm:text-2xl">
          {project.caseStudy.mockTitle}
        </div>
      </div>
      <div className="relative flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-zinc-200"
          >
            {tag}
          </span>
        ))}
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

  return <ProjectMockup project={project} />;
}

function ProjectModal({ project, onClose }) {
  const gallery =
    project?.gallery?.length
      ? project.gallery
      : project?.screenshot
      ? [project.screenshot]
      : [];
  const [activeScreenshot, setActiveScreenshot] = useState(gallery[0] || null);

  useEffect(() => {
    setActiveScreenshot(gallery[0] || null);
  }, [project?.id]);

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
                <Badge className="rounded-full border border-white/10 bg-white/10 text-zinc-200">
                  {project.period}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 text-zinc-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-300">
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
                      <div className="text-sm font-medium text-zinc-300">Challenge</div>
                      <p className="mt-1 leading-7 text-zinc-400">
                        {project.caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300">Approach</div>
                      <p className="mt-1 leading-7 text-zinc-400">
                        {project.caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300">Why it matters</div>
                      <div className="mt-2 space-y-3">
                        {project.caseStudy.impact.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
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
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-zinc-200" />
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
                  <div className="mb-3 flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    <h4 className="text-lg font-semibold text-white">Project preview</h4>
                  </div>
                  <div className="aspect-[16/10]">
                    <ProjectVisual
                      project={{
                        ...project,
                        screenshot: activeScreenshot || project.screenshot,
                      }}
                      alt={`${project.title} preview`}
                      className="aspect-[16/10]"
                    />
                  </div>
                  {gallery.length > 1 ? (
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {gallery.map((imageSrc, index) => (
                        <button
                          key={imageSrc}
                          type="button"
                          onClick={() => setActiveScreenshot(imageSrc)}
                          className={`overflow-hidden rounded-lg border ${
                            activeScreenshot === imageSrc
                              ? "border-emerald-300"
                              : "border-white/15"
                          }`}
                          aria-label={`Open ${project.title} screenshot ${index + 1}`}
                        >
                          <img
                            src={imageSrc}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="h-16 w-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {gallery.length
                      ? "Browse the project gallery to see the interface and analytical workflows in more detail."
                      : "A concise visual summary of the project’s scope, stack, and case study."}
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_20%),linear-gradient(to_bottom,#09090b,#09090b)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">
              Agastya Kataria
            </div>
            <div className="text-sm text-zinc-300">
              Software Engineering • Cybersecurity • Data
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
              Building secure, data-driven software from backend systems to applied machine learning.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              I’m Agastya Kataria, a Computer Science undergraduate at Trinity College Dublin with
              <span className="font-semibold text-white"> First Class Honours (81%)</span> and hands-on
              experience across cybersecurity engineering, backend development, machine learning,
              and quantitative systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-2xl px-6 py-6 text-base">
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5"
              >
                <a href={links.cvPdf} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent px-6 py-6 text-base text-white hover:bg-white/5"
              >
                <a href={links.coverLetterPdf} target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Cover Letter
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-300">
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
                    <div className="text-sm text-zinc-300">Profile snapshot</div>
                    <div className="text-2xl font-semibold text-white">
                      Engineering range grounded in strong fundamentals
                    </div>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    {projectCount} featured projects
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Academic Result", "First Class · 81%"],
                    ["University", "Trinity College Dublin"],
                    ["Recent Experience", "Cybersecurity · CRIS"],
                    ["Core Focus", "Backend + Applied ML"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-sm text-zinc-300">{k}</div>
                      <div className="mt-1 text-base font-medium text-white">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-medium text-zinc-200">
                    What I build
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Practical systems with measurable scope: security monitoring pipelines,
                    production-minded ML workflows, backend APIs, and analytical applications.
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
            <h2 className={sectionTitle}>Curious across domains, rigorous about how the pieces fit together.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              I enjoy projects that connect technical depth with a clear real-world use case. My work
              spans backend systems, security monitoring, machine learning, data-heavy applications,
              and quantitative finance.
            </p>
            <p>
              During my CRIS internship, I built across the security lifecycle—from collecting
              Windows and Linux telemetry to threat detection, phishing protection, and awareness
              reporting. My work with Toast added collaborative backend engineering experience in a
              company-linked team environment.
            </p>
            <p>
              An olympiad-level mathematics background shapes how I approach unfamiliar problems:
              break them down carefully, test assumptions, and turn the result into software that is
              useful and explainable.
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
            title="Experience building systems with real constraints"
            blurb="From security engineering at CRIS to collaborative backend development with Toast."
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
                  <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
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
            title="Selected builds across security, software, data, and finance"
            blurb="Open any project for a concise case study covering the challenge, approach, and technical contribution."
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
                          <Lock className="h-4 w-4" /> Source not public
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
            eyebrow="Featured work"
            title="A closer look at three representative builds"
            blurb="Security engineering, quantitative systems, and collaborative backend development."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects
              .filter((project) =>
                ["security-platform", "quantlab", "toast"].includes(project.id)
              )
              .map((project) => (
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
                How I approach engineering work
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  "Break complex problems into testable components and explicit assumptions",
                  "Learn unfamiliar tools quickly, then apply them in complete working systems",
                  "Connect backend architecture, data, observability, and user-facing workflows",
                  "Communicate technical trade-offs clearly and collaborate with a professional mindset",
                  "Hold both implementation quality and the final user experience to a high standard",
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
            title="A technical toolkit shaped by building"
            blurb="The languages, platforms, and engineering concepts used across my academic, internship, and independent work."
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
                    <div>Trinity College Dublin</div>
                    <div className="text-sm text-zinc-400">Sep 2024 – May 2028 (expected)</div>
                    <div className="mt-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                      Latest academic percentage: 81% • First Class Honours (Distinction)
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Diploma in Python Programming</div>
                    <div>EBVTR — A Grade</div>
                    <div className="text-sm text-zinc-400">Dec 2022 – Feb 2023</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">SAT</div>
                    <div>1440 • 780 Mathematics • 660 Reading & Writing</div>
                    <div className="text-sm text-zinc-400">Feb 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-white/10 bg-white/5">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-white">Technical toolkit</h3>
                <div className="mt-6 space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.label}>
                      <h4 className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-100"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white">Selected coursework</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {courses.map((course) => (
                      <div
                        key={course}
                        className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm leading-6 text-zinc-300"
                      >
                        {course}
                      </div>
                    ))}
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
          <Card className="rounded-[2rem] border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/5 to-emerald-500/10">
            <CardContent className="p-8 lg:p-10">
              <div className="max-w-4xl">
                <div className={headingEyebrow}>Contact</div>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Interested in the problems I’m building toward?
                </h2>
                <p className="mt-5 text-lg leading-8 text-zinc-200">
                  I’m open to software engineering, cybersecurity, and data-focused
                  opportunities where I can contribute seriously, learn quickly, and
                  work alongside a strong team.
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
                      <Github className="mr-2 h-4 w-4" /> GitHub
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
