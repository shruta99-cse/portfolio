export const personalDetails = {
  name: "Shruti Sathe",
  fullName: "Shruti Prakash Sathe",
  titles: [
    "Computer Science Engineering Student",
    "Full Stack Developer",
    "AI & Machine Learning Enthusiast",
    "Federated Learning Researcher"
  ],
  tagline: "Building intelligent, production-ready software experiences with modern web technologies and AI.",
  location: "Maharashtra, India",
  phone: "8087853394",
  email: "shrutisathe741@gmail.com",
  github: "https://github.com/shruta99-cse",
  linkedin: "https://www.linkedin.com/in/shruti-sathe-041388376/",
  leetcode: "https://leetcode.com/u/shruti_sathe_1704/",
  avatar: "/profile.png",
  availableForHire: true,
  summary: "Computer Science undergraduate (CPI: 8.60) with hands-on full-stack experience across Java, Spring Boot, React.js, Python, and MySQL. Delivered a sponsored, production-facing inventory management system for an industry client, and built federated learning & ML applications. Track record of shipping modular React code during software development internships."
};

export const statsData = [
  { label: "B.Tech CPI", value: "8.60", suffix: "/10", detail: "ADCET CSE (No standing arrears)" },
  { label: "Deployed Projects", value: "3+", suffix: "", detail: "Full Stack & AI SaaS Applications" },
  { label: "Internships", value: "2", suffix: "", detail: "React & Web Engineering Roles" },
  { label: "Diploma Score", value: "89.03%", suffix: "", detail: "Computer Science & Eng. (NMPI)" }
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C++ (DSA)", level: 85, icon: "SiCplusplus", color: "#00599C" },
      { name: "Java", level: 88, icon: "FaJava", color: "#f89820" },
      { name: "Python", level: 90, icon: "FaPython", color: "#3776AB" },
      { name: "JavaScript (ES6+)", level: 92, icon: "SiJavascript", color: "#F7DF1E" },
      { name: "HTML5 & CSS3", level: 95, icon: "FaHtml5", color: "#E34F26" }
    ]
  },
  {
    category: "Frontend Frameworks",
    skills: [
      { name: "React.js", level: 94, icon: "FaReact", color: "#61DAFB" },
      { name: "Tailwind CSS", level: 92, icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Framer Motion", level: 85, icon: "SiFramer", color: "#0055FF" },
      { name: "Three.js / R3F", level: 80, icon: "SiThreedotjs", color: "#000000" }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Spring Boot", level: 86, icon: "SiSpringboot", color: "#6DB33F" },
      { name: "FastAPI", level: 88, icon: "SiFastapi", color: "#009688" },
      { name: "Node.js", level: 82, icon: "FaNodeJs", color: "#339933" },
      { name: "REST APIs", level: 92, icon: "TbApi", color: "#00f0ff" },
      { name: "MySQL & SQL", level: 88, icon: "SiMysql", color: "#4479A1" },
      { name: "DBMS & Schema Design", level: 88, icon: "FaDatabase", color: "#3b82f6" }
    ]
  },
  {
    category: "AI / ML & Data",
    skills: [
      { name: "Machine Learning", level: 86, icon: "Brain", color: "#8b5cf6" },
      { name: "Federated Learning (Flower)", level: 90, icon: "Network", color: "#00f0ff" },
      { name: "PyTorch", level: 84, icon: "SiPytorch", color: "#EE4C2C" },
      { name: "Explainable AI (SHAP)", level: 88, icon: "Cpu", color: "#06b6d4" }
    ]
  },
  {
    category: "Core CS & Tools",
    skills: [
      { name: "Data Structures & Algorithms", level: 88, icon: "Code2", color: "#3b82f6" },
      { name: "Git & GitHub", level: 92, icon: "FaGithub", color: "#ffffff" },
      { name: "Vercel & Render", level: 88, icon: "SiVercel", color: "#ffffff" },
      { name: "Postman & VS Code", level: 90, icon: "SiPostman", color: "#FF6C37" },
      { name: "Agile / Scrum", level: 85, icon: "Users", color: "#10b981" }
    ]
  }
];

export const projectsData = [
  {
    id: "diafed-ai",
    title: "DiaFed AI — Explainable Federated Learning for Early Diabetes",
    type: "B.Tech Final-Year Project • In Progress",
    featured: true,
    tagline: "Privacy-preserving AI framework utilizing PyTorch & Flower with SHAP explainability for multi-hospital diabetes prediction.",
    description: "Designing a decentralized federated learning architecture that enables healthcare institutions to collaboratively train a high-accuracy diabetes prediction model without centralizing sensitive patient data. Features SHAP explainability, non-IID data distribution handlers, and a full SaaS dashboard.",
    highlights: [
      "Collaborative PyTorch & Flower model training across decentralized healthcare nodes",
      "FastAPI backend with REST APIs, JWT authentication, and MySQL integration",
      "SHAP-based feature importance attribution building clinician trust",
      "Interactive SaaS analytics dashboard with real-time prediction feedback"
    ],
    technologies: ["Python", "FastAPI", "PyTorch", "Flower", "SHAP", "MySQL", "React.js", "Tailwind CSS"],
    liveUrl: "https://ug-frontend-shruti.vercel.app",
    githubUrl: "https://github.com/shruta99-cse",
    badge: "Featured AI Project",
    metrics: "Privacy Preserved | SHAP Explainable"
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    type: "Sponsored Industry Project • UMED Industry",
    featured: true,
    tagline: "Production-facing enterprise inventory management system deployed for UMED Industry, Sangli.",
    description: "End-to-end full-stack web application designed for industrial client inventory tracking. Features complete CRUD operations, automated stock recalculations, role-based authentication, and optimized MySQL schemas lifting operational efficiency by 40%.",
    highlights: [
      "Automated stock level workflows boosting system efficiency by ~40%",
      "Seamless REST API integration between React frontend and Spring Boot backend",
      "Normalized MySQL database schema designed for speed and consistency",
      "Deployed on live production hosting for UMED Industry"
    ],
    technologies: ["React.js", "Spring Boot", "MySQL", "REST API", "Tailwind CSS"],
    liveUrl: "https://ug-frontend-shruti.vercel.app/",
    githubUrl: "https://github.com/shruta99-cse",
    badge: "Industry Sponsored",
    metrics: "40% Efficiency Boost | Live Deployed"
  },
  {
    id: "phishing-detector",
    title: "Phishing Web Detector",
    type: "Full Stack Machine Learning App",
    featured: false,
    tagline: "Web security scanner utilizing machine learning classification to detect malicious URLs in real-time.",
    description: "Full-stack cybersecurity utility powered by a trained ML classification model that evaluates URL features and structure to flag phishing threats instantly.",
    highlights: [
      "Trained classification model served via Python REST API",
      "Interactive React.js web interface with instant security diagnostic feedback",
      "Deployed live on Vercel for public access"
    ],
    technologies: ["React.js", "Python", "Machine Learning", "REST API", "Vercel"],
    liveUrl: "https://ug-frontend-shruti.vercel.app",
    githubUrl: "https://github.com/shruta99-cse",
    badge: "Cybersecurity ML",
    metrics: "Real-time Detection | Vercel Live"
  }
];


export const experienceData = [
  {
    role: "React Developer Intern",
    company: "Softron Infotech",
    period: "2025",
    type: "Internship",
    location: "On-site / Hybrid",
    description: "Architected and built production React UI modules in an Agile team environment.",
    responsibilities: [
      "Built and maintained reusable React.js UI component libraries, cutting code duplication and improving project modularity.",
      "Applied web performance optimization techniques that measurably reduced initial page load speeds.",
      "Collaborated through Git & GitHub within Agile sprints to deliver production features on schedule.",
      "Identified, tracked down, and resolved UI bugs and state regressions efficiently."
    ],
    tech: ["React.js", "JavaScript", "HTML5/CSS3", "Git/GitHub", "Agile/Scrum"]
  },
  {
    role: "Web Development Intern",
    company: "Disha Institute",
    period: "2024",
    type: "Internship",
    location: "On-site",
    description: "Focused on responsive web development, cross-browser compatibility, and modern UI practices.",
    responsibilities: [
      "Crafted mobile-first, responsive web application views using HTML5, CSS3, and modern JavaScript.",
      "Implemented strict UI layouts adhering to cross-browser rendering standards.",
      "Engaged in technical code reviews and UI component refinement."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"]
  }
];

export const educationData = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "ADCET (Annasaheb Dange College of Engineering & Technology), Ashta",
    period: "2024 – 2027 (Expected)",
    grade: "CPI: 8.60",
    status: "Current • No Standing Arrears",
    highlights: ["Core Focus on Full Stack, Systems, & AI", "Final-Year DiaFed AI Project Lead"]
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    institution: "NMPI (Nanasaheb Mahadik Polytechnic Institute), Peth",
    period: "2022 – 2024",
    grade: "89.03%",
    status: "Completed with Distinction",
    highlights: ["Inter-college Sports Champion", "Technical Event Organization"]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Adarsh Balak Mandir High School, Islampur",
    period: "2019 – 2020",
    grade: "93.00%",
    status: "Completed with Merit",
    highlights: ["Academic Excellence Award", "Public Speaking Lead"]
  }
];

export const achievementsData = [
  {
    title: "Inter-College Sports Champion",
    category: "Sports & Leadership",
    detail: "Winner in Inter-College Cricket and Volleyball competitions (Diploma level) — demonstrating leadership and high-pressure teamwork.",
    icon: "Trophy",
    color: "#f59e0b"
  },
  {
    title: "College Event Lead & Anchor",
    category: "Public Speaking",
    detail: "Served as official anchor for technical and cultural college events, hosting audiences of 500+ students and faculty.",
    icon: "Mic",
    color: "#00f0ff"
  },
  {
    title: "Academic Excellence Distinction",
    category: "Academics",
    detail: "Achieved 93% in SSC, 89.03% in CSE Diploma, and consistently maintained 8.60 CPI in B.Tech Computer Science.",
    icon: "Award",
    color: "#3b82f6"
  },
  {
    title: "Industry Sponsored Engineering Delivery",
    category: "Engineering Impact",
    detail: "Successfully built and delivered UMED Industry's live production inventory portal yielding a ~40% efficiency boost.",
    icon: "Rocket",
    color: "#10b981"
  }
];
