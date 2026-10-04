// Centralized Portfolio Data for Khushbu Raut
// Update or customize any fields here to instantly update the portfolio UI.

import { link } from "framer-motion/client";

export const portfolioData = {
  personalInfo: {
    name: "Khushbu Raut",
    headline: "Aspiring Web Developer & Data Analyst",
    subheadline: "B.Tech Computer Science & Engineering Student",
    bio: "Aspiring Web Developer & Data Analyst passionate about building responsive web applications, transforming data into meaningful insights, and creating practical technology solutions.",
    email: "khushburaut79@gmail.com",
    phone: "+91 7776910243",
    location: "Nagpur, Maharashtra, India",
    github: "https://github.com/khushburaut",
    linkedin: "https://www.linkedin.com/in/khushburaut?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    leetcode: "https://leetcode.com/u/Khushburaut/",
  },

  education: [
    {
      degree: "Bachelor of Technology: Computer Science & Engineering",
      institution: "Dr. Babasaheb Ambedkar Technological University, Nagpur",
      university: "JD College of Engineering & Management (JDCOEM), Nagpur",
      duration: "2024 – 2028 (Expected)",
      status: "Academic Standing: 3rd Year",
      cgpa: "GPA: 8.56/10.0",
      highlights: []
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bishop Cotton School, Dharampeth, Nagpur",
      duration: "March 2022",
      status: "Completed",
      cgpa: "Percentage: 85.20%",
      highlights: []
    }
  ],

  experience: [
    {
      role: "Data Analytics Intern",
      organization: "JD College of Engineering & Management",
      duration: "1 Month",
      description: "Worked with Excel, Power BI, Python, Pandas, and SQL. Conducted data analysis, created dashboards, and solved analytical problems.",
      bullets: [
        "Cleaned and preprocessed raw datasets using Python (Pandas & NumPy) and SQL.",
        "Built interactive Power BI dashboards utilizing Power Query for data transformation and modeling.",
      ],
      technologies: ["Excel", "Power BI", "Power Query", "Python", "Pandas", "SQL"]
    }
  ],

  skills: {
    programming: [
      { name: "Python", icon: "Code2" },
      { name: "Java", icon: "Coffee" },
      { name: "C", icon: "Terminal" },
      { name: "C++", icon: "Cpu" },
    ],
    webDevelopment: [
      { name: "HTML5", icon: "FileCode" },
      { name: "CSS3", icon: "FileStyle" },
      { name: "JavaScript", icon: "Code" },
    ],
    dataAnalytics: [
      { name: "Excel", icon: "Table" },
      { name: "Power BI", icon: "BarChart3" },
      { name: "Pandas", icon: "LineChart" },
    ],
    tools: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
      { name: "VS Code", icon: "Laptop" },
      { name: "Canva", icon: "Palette" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "AI_Travel_Planner_Chatbot",
      category: "Web Development",
      isAI: true,
      description: "AI-powered full-stack travel planner with personalized itinerary generation, AI chatbot, budget breakdown, destination exploration, user authentication, and trip management.",
      features: [
        "Personalized day-wise itinerary generation",
        "AI-powered trip and route recommendations",
      ],
      technologies: ["React", "Vite", "Node.js", "Express.js", "AI API", "JavaScript"],
      github: "https://github.com/khushburaut/AI_Travel_Planner_Chatbot",
      demo: "https://ai-travel-planner-chatbot-mu.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Anomaly-Detection-in-Network-Traffic",
      category: "Data Analytics",
      isAI: true,
      description: "Anomaly Detection in Network Traffic is a machine learning project designed to identify unusual or suspicious patterns in network traffic. The project analyzes network data, preprocesses relevant features, and applies machine learning techniques to classify normal and anomalous network activity.",
      features: [
        "Data preprocessing and feature engineering on network log datasets",
        "Identifying outlier anomalies and cyber security patterns"
      ],
      technologies: ["Python", "Pandas", "NumPy", "TensorFlow"],
      github: "https://github.com/khushburaut/Anomaly-Detection-in-Network-Traffic",
      demo: "",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Data-Structure-Algorithm",
      category: "Web Development", // Place under programming/dev logic
      isAI: false,
      description: "LeetCode solutions and Data Structures & Algorithms practice in C++ and Python for problem-solving and placement preparation.",
      features: [
        "Problem-solving practice targeting technical placement tests",
        "C++ and Python implementation of clean data structures"
      ],
      technologies: ["C++", "Python", "DSA"],
      github: "https://github.com/khushburaut/Data-Structure-Algorithm",
      demo: "",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Retail-Sales-Trend-Analysis",
      category: "Data Analytics",
      isAI: false,
      description: "Interactive Retail Sales Trend Analysis Dashboard built using Power BI, Power Query, and DAX to analyze sales trends, customer behavior, regional performance, and business insights.",
      features: [
        "Regional sales performance comparison metrics",
        "Profitability analysis across product categories",
      ],
      technologies: ["Power BI", "Excel", "Power Query"],
      github: "https://github.com/khushburaut/Retail-Sales-Trend-Analysis",
      demo: "",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    }
  ],

  achievements: {
    coding: {
      leetcodeUsername: "Khushburaut",
      leetcodeUrl: "https://leetcode.com/Khushburaut",
      stats: {
        solved: "50 Questions Solved",
        rating: "Intermediate",
        interests: [
          "Data Structures & Algorithms",
          "Problem Solving",
          "Arrays & Hashing",
          "Python / C++ Programming"
        ]
      }
    },
    items: [
      {
        title: "EDUSKILL Virtual Internship",
        description: "Successfully completed intensive practical milestones on AI/ML Virtual Internship, Java Full Stack development, and Professional UI/UX Design.",
        badge: "Eduskill",
        link: "/Eduskill-Certificate.pdf"
      },
      {
        title: "NPTEL Soft Skill Development",
        description: "Certified course covering professional communication, active listening, and workplace dynamics.",
        badge: "NPTEL",
        link: "/NPTEL-Soft-Skills-Certificate.pdf"
      },
      {
        title: "INFOSYS Interactive Skills & Time Management",
        description: "Certified credentials for interactive team skills, scheduling, and structured management models.",
        badge: "Infosys",
        link: "/Infosys-Certificate.pdf"
      },
      {
        title: "L&T",
        description: "Successfully completed Building Gen AI Systems, covering 7 courses and 33 learning hours.",
        badge: "L&T",
        link: "/Building-Gen-AI-Systems.pdf"
      },
      {
        title: "GDG On Campus Core Member",
        description: "Selected as a core developer community member helping plan workshops and technical hackathons.",
        badge: "GDG"
      }
    ]
  }
};
