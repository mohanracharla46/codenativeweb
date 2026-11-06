export const allProjects = [
  {
    id: "codenative-lms",
    title: "CodeNative — Telugu Coding & AI EdTech Platform",
    category: "SaaS & Web Apps",
    industry: "EdTech & Developer Education",
    year: "2025",
    liveUrl: "https://codenative.co.in/",
    displayUrl: "codenative.co.in",
    services: ["Interactive LMS", "In-Browser Code Sandbox", "AI Doubt Solver", "Next.js Video Streaming"],
    description: "Flagship Telugu coding education platform featuring step-by-step video courses, an integrated online code compiler, and an AI-powered instant doubt resolution engine.",
    fullDescription: "CodeNative's proprietary learning platform democratizes software engineering education by delivering comprehensive courses in Python, Java, C, and Web Development taught natively in Telugu. Built for high-volume student concurrency with zero-latency in-browser code execution.",
    challenge: "Traditional video courses lack interactive feedback, while global coding sandboxes are English-only and struggle on low-bandwidth rural mobile networks across Telangana and Andhra Pradesh.",
    solution: "CodeNative engineered a lightweight WebAssembly-based client sandbox paired with edge-cached video delivery and a context-aware LLM doubt assistant that explains programming bugs in conversational Telugu.",
    metrics: [
      { label: "Active Students", value: "15,000+" },
      { label: "Code Run Latency", value: "< 95ms" },
      { label: "Video CDN Uptime", value: "99.98%" }
    ],
    techStack: ["Next.js 15", "React 19", "Node.js", "WebAssembly", "Tailwind CSS", "Cloudflare Stream"],
    aspectRatio: "large",
    accentColor: "#5145E6",
    previewType: "codenative-lms",
    mockupData: {
      tag: "FLAGSHIP EDTECH ENGINE",
      activeLearners: "15,420 Enrolled",
      compilerSpeed: "94ms WebAssembly",
      aiAccuracy: "99.4% in Telugu"
    }
  },
  {
    id: "ira-reports",
    title: "Ira Media Concepts — Work Report & Operations System",
    category: "Enterprise Systems",
    industry: "Enterprise Operations & Reporting",
    year: "2025",
    liveUrl: "https://reports.iramediaconcepts.com/login",
    displayUrl: "reports.iramediaconcepts.com",
    services: ["Enterprise SaaS", "Work Reporting Cockpit", "Campaign ROI Analytics", "Role-Based Access Control"],
    description: "Mission-critical internal enterprise reporting system managing daily sprints, campaign deliverables, media performance audits, and team velocity metrics.",
    fullDescription: "Ira Media Concepts commissioned CodeNative to replace chaotic spreadsheet-based reporting with a unified, role-governed operational cockpit. The system allows project managers and media leads to log daily deliverables, generate automated client audits, and track campaign milestones in real time.",
    challenge: "Handling daily timesheets and media deliverables across multiple distributed client accounts without manual data duplication, calculation bottlenecks, or unauthorized cross-department data exposure.",
    solution: "We designed a secure, RBAC-hardened web platform with PostgreSQL automated indexing, instant PDF work report exports, and an intuitive dashboard that cut daily reporting overhead by 70%.",
    metrics: [
      { label: "Reporting Overhead", value: "-70%" },
      { label: "Daily Active Teams", value: "100%" },
      { label: "Audit Accuracy", value: "99.9%" }
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
    aspectRatio: "wide",
    accentColor: "#0D1117",
    previewType: "ira-reports",
    mockupData: {
      tag: "OPERATIONAL WORK COCKPIT",
      dailyTasks: "420 Logged Today",
      agencyVelocity: "98.8% On-Time",
      securityAudit: "SOC2 Level RBAC"
    }
  },
  {
    id: "gogo-cars",
    hidden: true,
    title: "GoGo Cars — Self-Drive Mobility & Fleet Booking",
    category: "Booking & Portals",
    industry: "Automotive Rental & Urban Mobility",
    year: "2025",
    liveUrl: "https://www.gogocar.in/",
    displayUrl: "gogocar.in",
    services: ["Fleet Booking Engine", "Dynamic Pricing Algorithm", "Instant Digital KYC", "Doorstep Dispatch Logistics"],
    description: "Self-drive car rental platform serving Hyderabad with instant hourly/daily booking, doorstep delivery dispatch, dynamic rate calculation, and paperless KYC.",
    fullDescription: "GoGo Cars is Hyderabad's premier self-drive mobility provider. CodeNative engineered a seamless mobile-first booking experience featuring real-time vehicle availability, dynamic peak-hour pricing algorithms, and instant Aadhaar/Driving License verification.",
    challenge: "Vehicle double-booking risks and prolonged offline customer verification causing customer drop-off during weekend rush hours.",
    solution: "Built an atomic inventory reservation lock with automated digital KYC verification and live map tracking for doorstep vehicle delivery across Hyderabad hubs (Madhapur, Gachibowli, Secunderabad).",
    metrics: [
      { label: "Booking Completion", value: "< 2 Mins" },
      { label: "Fleet Utilization", value: "92%" },
      { label: "Customer Rating", value: "4.9 ★" }
    ],
    techStack: ["React", "Next.js", "Node.js", "Leaflet Maps API", "Razorpay Gateway", "Twilio OTP"],
    aspectRatio: "medium",
    accentColor: "#F59E0B",
    previewType: "gogocars",
    mockupData: {
      tag: "SELF-DRIVE FLEET PLATFORM",
      availableFleet: "85+ Vehicles",
      hyderabadHubs: "Madhapur • Gachibowli",
      instantKyc: "Fast Digital KYC"
    }
  },
  {
    id: "referitup",
    title: "ReferItUp — Viral Referral & Payout Network",
    category: "SaaS & Web Apps",
    industry: "Affiliate Marketing & Growth SaaS",
    year: "2025",
    liveUrl: "https://referitup.com/",
    displayUrl: "referitup.com",
    services: ["Referral Tracking Engine", "Automated Payouts", "Fraud Prevention", "Real-Time Conversion Auditing"],
    description: "High-scale referral marketing platform powering viral customer acquisition loops, automated multi-tier commission calculations, and instant digital reward distribution.",
    fullDescription: "ReferItUp provides brands and influencers with an automated referral ecosystem. CodeNative built the core attribution tracking engine, sub-second conversion webhooks, and an anti-fraud heuristic pipeline that detects suspicious multi-account clicks.",
    challenge: "Preventing click fraud and multi-account referral abuse while keeping webhook response times below 50ms during viral marketing spikes.",
    solution: "We engineered an edge-distributed attribution worker mesh with Redis rate limiting, fingerprint validation, and automated payout pipelines connected to leading payment gateways.",
    metrics: [
      { label: "Referral Conversion", value: "+38%" },
      { label: "Webhook Latency", value: "32ms" },
      { label: "Fraud Detection", value: "99.7%" }
    ],
    techStack: ["Next.js 15", "TypeScript", "Node.js", "Tailwind CSS", "Redis", "Razorpay / Stripe"],
    aspectRatio: "medium",
    accentColor: "#10B981",
    previewType: "referitup",
    mockupData: {
      tag: "VIRAL GROWTH ENGINE",
      activeReferrals: "48,200+ Nodes",
      payoutSpeed: "Instant UPI/ACH",
      fraudFilter: "Zero-Fraud Verified"
    }
  },
  {
    id: "amarnath-sarangula",
    title: "Amarnath Sarangula — Executive & Public Leadership",
    category: "Brand & Showcase",
    industry: "Executive Leadership & Public Affairs",
    year: "2024",
    liveUrl: "https://amarnathsarangula.in/",
    displayUrl: "amarnathsarangula.in",
    services: ["Executive Brand Architecture", "Interactive Biography Timeline", "Press & Media Feed", "Public Outreach Portal"],
    description: "Official digital presence for IITian, startup founder, and BJP Telangana spokesperson Amarnath Sarangula, spotlighting strategic vision, media addresses, and community initiatives.",
    fullDescription: "Designed and engineered to present the multifaceted career of Amarnath Sarangula — spanning IIT engineering, technology entrepreneurship, and public policy advocacy. Features an interactive timeline, integrated media press hub, and high-performance SEO optimization.",
    challenge: "Creating a dignified, high-credibility digital identity that communicates both technical intellect and grassroots public leadership to diverse regional and national audiences.",
    solution: "Crafted an authoritative, clean design language with rich JSON-LD schema, instant multilingual asset delivery, and an interactive milestone roadmap optimized for maximum mobile accessibility.",
    metrics: [
      { label: "Mobile Engagement", value: "+85%" },
      { label: "Google PageSpeed", value: "98 / 100" },
      { label: "Search Visibility", value: "#1 Rank" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Headless CMS", "Structured Data Schemas"],
    aspectRatio: "medium",
    accentColor: "#FF6600",
    previewType: "amarnath",
    mockupData: {
      tag: "PUBLIC LEADERSHIP PLATFORM",
      profile: "IITian & Startup Founder",
      reach: "Statewide Telangana",
      performance: "98/100 Lighthouse"
    }
  },
  {
    id: "psmsk-temple",
    title: "Palnadu Sri Maha Saiva Kshetram — Pilgrimage & Seva Portal",
    category: "Booking & Portals",
    industry: "Cultural Heritage & Temple Tourism",
    year: "2024",
    liveUrl: "https://psmsk.com/",
    displayUrl: "psmsk.com",
    services: ["Online Seva Booking", "E-Hundi & 80G Donations", "Live Darshan Schedule", "Historical Preservation Gallery"],
    description: "Official heritage portal for Palnadu Sri Maha Saiva Kshetram, featuring online puja reservations, secure e-Hundi donations, Darshan schedules, and historical archives.",
    fullDescription: "Dedicated to the legendary spiritual heritage of Palnadu and Nayakurala Nagamma. CodeNative engineered a transparent digital pilgrimage portal enabling devotees worldwide to book sacred Sevas, receive automated tax receipts, and access sanctum history with high reliability.",
    challenge: "Handling heavy traffic spikes during annual Maha Shivaratri festivals without payment timeout errors or database lockups.",
    solution: "Engineered an edge-cached static frontend coupled with asynchronous payment webhooks, instant SMS confirmations, and automated e-receipt generation that scaled effortlessly through peak festivities.",
    metrics: [
      { label: "Shivaratri Uptime", value: "100%" },
      { label: "Seva Booking Latency", value: "< 1.5s" },
      { label: "Devotee Trust Score", value: "100%" }
    ],
    techStack: ["React", "Node.js", "Razorpay Payment Gateway", "Multilingual Support", "Cloudflare"],
    aspectRatio: "wide",
    accentColor: "#8B5CF6",
    previewType: "psmsk",
    mockupData: {
      tag: "TEMPLE HERITAGE PLATFORM",
      activeSevas: "Daily Pujas Online",
      eHundi: "Instant 80G Receipts",
      festivalCapacity: "Zero-Downtime Peak"
    }
  },
  {
    id: "ira-media-agency",
    title: "Ira Media Concepts — Digital Creative & Storytelling Agency",
    category: "Brand & Showcase",
    industry: "Digital Media & Brand Storytelling",
    year: "2024",
    liveUrl: "https://iramediaconcepts.com/",
    displayUrl: "iramediaconcepts.com",
    services: ["High-Impact Brand Architecture", "Interactive Storytelling", "Media Production Showcase", "Client Funnel Optimization"],
    description: "Flagship corporate agency website for Ira Media Concepts ('Where Ideas Become Stories that people remember'), featuring immersive digital storytelling, creative campaign portfolios, and client conversion funnels.",
    fullDescription: "Ira Media Concepts commissioned CodeNative to architect their corporate agency web experience. Built to showcase enterprise media production, digital brand marketing, and multi-channel storytelling with fluid cinematic animations and modern responsive layouts.",
    challenge: "Balancing high-resolution video reels and rich photography with lightning-fast mobile responsiveness and zero layout shift.",
    solution: "We engineered an adaptive media loading pipeline with edge-cached image CDN, smooth CSS scroll animations, and clean semantic navigation that elevated client consultation requests by 55%.",
    metrics: [
      { label: "Client Inquiries", value: "+55%" },
      { label: "Page Load Time", value: "0.7s" },
      { label: "Brand Recall", value: "99.4%" }
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Cloudflare CDN", "SEO Schemas"],
    aspectRatio: "wide",
    accentColor: "#E11D48",
    previewType: "ira-media",
    mockupData: {
      tag: "DIGITAL STORYTELLING AGENCY",
      slogan: "Where Ideas Become Stories",
      visualReels: "Adaptive 4K Video CDN",
      conversionGrowth: "+55% Consultation Bookings"
    }
  },
  {
    id: "vwish-technologies",
    title: "Vwish Technologies — Specialist SAP & Java Academy",
    category: "Enterprise Systems",
    industry: "Enterprise IT Training & Corporate Upskilling",
    year: "2024",
    liveUrl: "https://vwishtechnologies.com/",
    displayUrl: "vwishtechnologies.com",
    services: ["Course Catalog Engine", "Interactive Syllabus Explorer", "Demo Booking Pipeline", "Placement Tracker"],
    description: "Industry-oriented technical education portal specializing in SAP enterprise ERP modules and advanced Java engineering with instant batch registration and demo scheduling.",
    fullDescription: "Vwish Technologies bridges the corporate skills gap by offering practical, real-world training in high-demand enterprise technologies. CodeNative designed a high-conversion course discovery platform that increased student demo registrations by 45%.",
    challenge: "Translating complex enterprise module syllabi (SAP FICO, MM, SD, ABAP, Spring Boot) into an intuitive, easily navigable mobile experience.",
    solution: "Built a fast module explorer with one-click syllabus downloads, instant WhatsApp demo enrollment, and automated lead routing directly to counselor dashboards.",
    metrics: [
      { label: "Lead Conversion", value: "+45%" },
      { label: "Mobile Bounce Rate", value: "-32%" },
      { label: "Page Load Speed", value: "0.8s" }
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "WhatsApp API", "Lead Webhooks"],
    aspectRatio: "medium",
    accentColor: "#2563EB",
    previewType: "vwish",
    mockupData: {
      tag: "ENTERPRISE TRAINING ACADEMY",
      specialization: "SAP ERP & Java Enterprise",
      demoBooking: "Instant WhatsApp Sync",
      enrollmentGrowth: "+45% Conversion"
    }
  }
];

export const projects = allProjects.filter(p => !p.hidden);

export const projectCategories = [
  "All",
  "SaaS & Web Apps",
  "Booking & Portals",
  "Brand & Showcase",
  "Enterprise Systems"
];
