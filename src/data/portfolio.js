// Project data verified against github.com/donatienabafashijwenimana
// (repo names, primary languages and live URLs). Re-check before adding a new
// entry: every `github` slug below resolves, and `live` links returned 200.
// `collaboration` marks projects built as part of a team rather than solo.

export const skills = [
  {
    category: "Languages",
    icon: "Code",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
      { name: "PHP", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "UI",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 90 },
      { name: "Vanilla JS", level: 95 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    category: "Backend & Frameworks",
    icon: "API",
    items: [
      { name: "Express.js", level: 88 },
      { name: "Laravel", level: 85 },
      { name: "Django", level: 82 },
      { name: "JavaFX", level: 80 },
      { name: "PyQt", level: 78 },
    ],
  },
  {
    category: "Networking",
    icon: "Network",
    items: [
      { name: "Network Design & Installation", level: 90 },
      { name: "Router & Switch Configuration", level: 88 },
      { name: "VLANs & Subnetting", level: 85 },
      { name: "TCP/IP, DNS & DHCP", level: 90 },
      { name: "Wi-Fi & Structured Cabling", level: 86 },
      { name: "Network Troubleshooting", level: 92 },
    ],
  },
];

export const projects = [
  {
    title: "VFA Warehouse Management System",
    description:
      "Production-to-sales seed warehouse platform: quality control, batch tracking, inventory, orders and role-based reporting.",
    tech: ["React", "Tailwind", "Zustand", "Supabase", "PostgreSQL"],
    color: "from-emerald-600 to-teal-500",
    icon: "VFA",
    github: "https://github.com/donatienabafashijwenimana/vfawarehouse",
  },
  {
    title: "VFA Seed Website",
    description:
      "Marketing site for a certified Irish potato seed producer, with a searchable variety catalogue and enquiry flow.",
    tech: ["React", "Vite", "Tailwind", "Supabase"],
    color: "from-lime-600 to-emerald-500",
    icon: "VW",
    github: "https://github.com/donatienabafashijwenimana/vfa-client",
  },
  {
    title: "ECMS — Education & Child Management",
    description:
      "Tracks a child's full education journey from primary to graduation, with admin, staff and guardian roles.",
    tech: ["React", "Firebase", "Tailwind", "Recharts"],
    color: "from-blue-600 to-indigo-500",
    icon: "EC",
    github: "https://github.com/donatienabafashijwenimana/ecms",
  },
  {
    title: "InsightRwanda — Data Analytics Platform",
    description:
      "Team project for the NISR Big Data Hackathon: a nine-page Streamlit dashboard turning FinScope survey data into traceable financial-inclusion and poverty evidence.",
    tech: ["Python", "Streamlit", "Docker", "CI"],
    color: "from-sky-600 to-cyan-500",
    icon: "IR",
    github: "https://github.com/honorerw/InsightRwanda",
    live: "https://donatiendna-insightrwanda.static.hf.space",
    collaboration: "InsightRwanda hackathon team",
  },
  {
    title: "Umuco",
    description:
      "Cultural web platform built with JavaScript and deployed on Vercel.",
    tech: ["JavaScript", "HTML/CSS", "Vercel"],
    color: "from-cyan-600 to-sky-500",
    icon: "UM",
    github: "https://github.com/donatienabafashijwenimana/umuco",
    live: "https://umucowacu.vercel.app",
  },
  {
    title: "MERN Stock Management",
    description:
      "Inventory and stock management application built with the MERN stack.",
    tech: ["JavaScript", "MERN", "MongoDB", "Express"],
    color: "from-violet-600 to-purple-500",
    icon: "MS",
    github: "https://github.com/donatienabafashijwenimana/mern_stockmanagement",
  },
  {
    title: "Library Management — Django",
    description:
      "Library management application built with Django, Python and server-rendered HTML templates.",
    tech: ["Python", "Django", "HTML"],
    color: "from-amber-500 to-orange-500",
    icon: "DJ",
    github: "https://github.com/donatienabafashijwenimana/library-management-django",
  },
  {
    title: "MERN Chart",
    description:
      "Charting dashboard for visualising application data with interactive JavaScript charts.",
    tech: ["JavaScript", "Charts", "CSS"],
    color: "from-fuchsia-600 to-purple-500",
    icon: "MC",
    github: "https://github.com/donatienabafashijwenimana/mern_chart",
  },
  {
    title: "School Management",
    description:
      "School administration system for managing academic information and records.",
    tech: ["PHP", "MySQL"],
    color: "from-indigo-600 to-blue-500",
    icon: "SC",
    github: "https://github.com/donatienabafashijwenimana/schoolmanagement",
  },
  {
    title: "Trainees Management Information System",
    description:
      "Information system for managing trainee records and related workflows.",
    tech: ["PHP", "MySQL"],
    color: "from-cyan-600 to-emerald-500",
    icon: "TM",
    github:
      "https://github.com/donatienabafashijwenimana/trainees-management-information-system",
  },
  {
    title: "Beauty Employee Payment System",
    description:
      "Payroll and employee payment information system for a beauty business.",
    tech: ["PHP", "MySQL"],
    color: "from-pink-600 to-rose-500",
    icon: "BP",
    github:
      "https://github.com/donatienabafashijwenimana/beauty_employee_payment_information_system",
  },
  {
    title: "Car Go Import & Export Management",
    description:
      "Management system for car import and export business operations.",
    tech: ["PHP", "MySQL"],
    color: "from-orange-500 to-red-500",
    icon: "CG",
    github:
      "https://github.com/donatienabafashijwenimana/car_go_import-and-export-management-system",
  },
  {
    title: "Food Stock Management",
    description:
      "Stock management system for tracking food inventory and movement.",
    tech: ["PHP", "MySQL"],
    color: "from-lime-600 to-green-500",
    icon: "FS",
    github: "https://github.com/donatienabafashijwenimana/food_stock_management",
  },
  {
    title: "Berwa Stock Management",
    description:
      "PHP stock management system for product and inventory records.",
    tech: ["PHP", "MySQL"],
    color: "from-teal-600 to-cyan-500",
    icon: "BS",
    github:
      "https://github.com/donatienabafashijwenimana/berwa_stock_management_system",
  },
  {
    title: "Lavinia Stock Management",
    description:
      "Inventory management system for tracking Lavinia stock records.",
    tech: ["PHP", "MySQL"],
    color: "from-slate-600 to-blue-500",
    icon: "LS",
    github:
      "https://github.com/donatienabafashijwenimana/lavinia_stock_management_system",
  },
  {
    title: "Lab Management",
    description:
      "Laboratory management project for organising lab records and operations.",
    tech: ["PHP", "MySQL"],
    color: "from-yellow-500 to-amber-500",
    icon: "LB",
    github: "https://github.com/donatienabafashijwenimana/lab-management",
  },
  {
    title: "Chart",
    description:
      "PHP chart project focused on data presentation and reporting views.",
    tech: ["PHP", "JavaScript", "CSS"],
    color: "from-fuchsia-600 to-rose-500",
    icon: "CH",
    github: "https://github.com/donatienabafashijwenimana/chart",
  },
  {
    title: "Exam Project",
    description:
      "HTML exam project with a deployed Vercel preview.",
    tech: ["HTML", "CSS", "Vercel"],
    color: "from-green-600 to-emerald-500",
    icon: "EX",
    github: "https://github.com/donatienabafashijwenimana/exam_project",
    live: "https://projectexam-pi.vercel.app",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
