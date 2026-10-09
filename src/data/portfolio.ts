export const profile = {
  name: "Hridul M Anilkumar",
  short: "Hridul",
  location: "Kerala, India",
  email: "hridul54@gmail.com",
  phone: "+91 8289864099",
  phoneHref: "tel:+918289864099",
  linkedin: "https://www.linkedin.com/in/hridulmk",
  github: "https://github.com/HridulMk",
  role: "AI & full-stack developer",
};

export const categories = ["All", "Full-stack", "AI / ML", "Computer vision", "Research"] as const;

export type Category = (typeof categories)[number];

export type Project = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  categories: Exclude<Category, "All">[];
  stack: string[];
  summary: string;
};

export const projects: Project[] = [
  {
    id: "oction",
    index: "01",
    title: "Oction Mart",
    kicker: "Real-time auction platform",
    categories: ["Full-stack"],
    stack: ["Next.js", "Django REST", "PostgreSQL", "JWT"],
    summary:
      "Role-based bidding and transactions for 80+ mock users. Real-time streams were tested at 100+ concurrent bids, with JWT APIs checked against 500+ records.",
  },
  {
    id: "parkai",
    index: "02",
    title: "ParkAI",
    kicker: "Smart parking & space sharing",
    categories: ["Computer vision", "Full-stack"],
    stack: ["Flutter", "Django REST", "YOLO", "PostgreSQL"],
    summary:
      "Slot booking, vehicle access, and occupancy detection. YOLO recognizes vehicles and open bays; QR covers entry, exit, and 300+ payment trials.",
  },
  {
    id: "dropout",
    index: "03",
    title: "Dropout risk",
    kicker: "Student intervention system",
    categories: ["AI / ML"],
    stack: ["Python", "Pandas", "SQL", "Machine learning"],
    summary:
      "A hybrid model scores dropout risk across 1,000+ profiles from attendance, academics, and fees, then drafts an intervention note for each student.",
  },
  {
    id: "storefront",
    index: "04",
    title: "Storefront",
    kicker: "E-commerce application",
    categories: ["Full-stack"],
    stack: ["Python", "Authentication", "CRUD"],
    summary:
      "A training storefront with sign-in, product management, and full CRUD — built project-style during a Python full-stack internship in Kochi.",
  },
  {
    id: "pqc",
    index: "05",
    title: "Post-quantum IoT",
    kicker: "Research paper · ICAISM, April 2025",
    categories: ["Research"],
    stack: ["Cryptography", "IoT", "Space communication"],
    summary:
      "Presented “Lightweight Post-Quantum Cryptography for IoT Security in Space Communication” at ICAISM, Jain University.",
  },
];

export const experience = [
  {
    role: "Digital Marketing Intern",
    org: "Adz4Needz",
    place: "Remote",
    dates: "Jun 2026 – Aug 2026",
    points: [
      "Coordinated task assignments and daily deliverables so the team stayed on schedule.",
      "Reviewed social performance data to spot trends and steer content decisions.",
      "Practiced team leadership, communication, and campaign analysis.",
    ],
  },
  {
    role: "Web Application Developer Intern",
    org: "Progressive Cybernetics Pvt. Ltd.",
    place: "Muvattupuzha, Kerala",
    dates: "Jun 2025 – Sep 2025",
    points: [
      "Designed UI and product workflows from the brief and how people actually use them.",
      "Extended features across the frontend, backend, and API.",
      "Tested 800+ mock bid records for sync and API issues, and helped raise bid-verification efficiency by about 20%.",
    ],
  },
  {
    role: "Python Full Stack Developer Intern",
    org: "Inmakes Infotech Pvt. Ltd.",
    place: "Kochi, Kerala",
    dates: "Jul 2023 – Oct 2023",
    points: [
      "Shipped an e-commerce app with authentication, product management, and CRUD.",
      "Worked through OpenCV exercises — practical image processing, not a slide deck.",
      "Debugged, tested, and deployed the work as part of the training.",
    ],
  },
];

export const education = [
  {
    school: "Jain University, Kochi",
    credential: "Master of Computer Applications (AI & Machine Learning)",
    year: "2026",
    detail: "CGPA 8.35",
  },
  {
    school: "St Pius X College, Rajapuram",
    credential: "Bachelor of Science (Physics), Kannur University",
    year: "2023",
    detail: "63.08%",
  },
];

export const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "JavaScript (ES6+)", "SQL", "C", "Dart"],
  },
  {
    label: "AI & machine learning",
    items: [
      "TensorFlow",
      "Neural networks",
      "Predictive modeling",
      "Feature engineering",
      "Pandas",
      "YOLO",
      "Computer vision",
    ],
  },
  {
    label: "Web & full-stack",
    items: ["React.js", "Next.js", "Django", "Flask", "Tailwind CSS", "Material UI"],
  },
  {
    label: "APIs & data",
    items: ["Django REST Framework", "REST", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Cloud & systems",
    items: ["Docker", "AWS", "Render", "Linux", "Cisco Packet Tracer"],
  },
  {
    label: "Practice",
    items: ["Git & GitHub", "Postman", "Figma", "Debugging", "Claude, Cursor, Copilot, Grok"],
  },
];

export const study = [
  "Exploring IoT with Cisco Packet Tracer — Cisco Networking Academy",
  "Machine Learning with Python — IBM",
  "Databases and SQL for Data Science with Python — IBM",
  "AWS Solutions Architect Associate (SAA-C03) — LinkedIn Learning",
  "RAG hands-on workshop — MongoDB, The Summit of Future 2026, JAIN",
];

export const languages = ["English", "Malayalam", "Hindi"];
