/* =========================================================
   YOUR CONTENT LIVES HERE.
   Edit the arrays below — the page renders itself automatically.
   Every object's `id` just needs to be unique within its array.
   ========================================================= */

const PROJECTS = [
  {
    id: "p1",
    title: "FootTech: A Computer Vision-Based Foot Traffic Analytics for Real-Time Resource Optimization in Manila City using YOLOv10",
    status: "done", // "done" | "progress"
    video: "assets/images/capstone demo.mp4",
    image: "assets/images/dashboard1.png",
    featuredImage: "assets/images/dashboard2.png",
    images: [
      { src: "assets/images/dashboard1.png", alt: "Dashboard overview", caption: "Overview of the dashboard used in the project." },
      { src: "assets/images/dashboard2.png", alt: "Dashboard filters", caption: "Detail view of filters and metrics." }
    ],
    summary: "An interactive dashboard summarizing foot-traffic patterns and peak load times.",
    tags: ["SQL", "Power BI", "DAX"],
    problem: "Make foot-traffic data actionable for venue resource planning: when and where to allocate staff and resources.",
    approach: [
      "Ingested and cleaned sensor and camera-derived counts using a reproducible ETL pipeline.",
      "Built aggregation layer and measures in Power BI; used DAX for time-windowed metrics.",
      "Packaged actionable dashboards with filters and alerts for operational teams."
    ],
    outcome: "Reduced manual monitoring effort; dashboard used in demos to inform staffing decisions during events.",
    link: "https://github.com/yourname/sales-dashboard"
  },
  {
    id: "p2",
    title: "WATCH: An AI-Driven Multimodal Acoustic-Vision Sensing Framework for Hyper-Local Extreme Rainfall Classification and Early Warning",
    status: "done",
    image: "assets/images/watch1.png",
    featuredImage: "assets/images/watch2.png",
    images: [
      { src: "assets/images/watch1.png", alt: "Prototype setup", caption: "Prototype used for data collection and demo." },
      { src: "assets/images/watch2.png", alt: "Prototype screenshot", caption: "Prototype UI and results." }
    ],
    summary: "A multimodal sensing prototype combining acoustic and vision inputs to detect extreme rainfall events.",
    tags: ["Python", "Scikit-learn", "Sensors"],
    problem: "Provide localized early-warning signals for extreme rainfall using low-cost sensors.",
    approach: [
      "Collected synchronized acoustic and camera data; engineered time-window features.",
      "Trained and evaluated several classifiers; selected model balancing recall and latency.",
      "Validated in field demos and iterated on sensor thresholds."
    ],
    outcome: "Prototype achieved useful early warnings in pilot tests; informed next steps for deployment.",
    link: "https://github.com/yourname/nid-classifier"
  },
  {
    id: "p3",
    title: "AI-Enhanced Circular Sanitation: A Smart Nature-Based System for Transforming Septic Effluent into High-Value Ornamental Aquaponics",
    status: "progress",
    image: "assets/images/placeholder-project.svg",
    images: [ { src: "assets/images/placeholder-project.svg", alt: "placeholder", caption: "Placeholder image — replace with project photos." } ],
    summary: "Work-in-progress on integrating biological treatment with monitoring and control.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    problem: "Design a closed-loop system to recover resources from septic effluent while ensuring safety.",
    approach: [
      "Design sensors and monitoring pipeline; prototype control logic.",
      "Collect pilot data and plan model experiments.",
      "Implement safety checks and documentation for deployment."
    ],
    outcome: "Ongoing — prototype stage with data collection and initial results planned for next semester.",
    link: "https://github.com/yourname/churn-prediction"
  },
  {
    id: "p4",
    title: "Data Handling Policy Audit (OJT)",
    status: "done",
    image: "assets/images/placeholder-project.svg",
    summary: "A review of a partner company's data-handling practices during OJT, mapping gaps against basic data-privacy principles.",
    tags: ["Data Privacy", "Risk Assessment", "Documentation"],
    problem: "Audit a partner system's data handling and align practices with baseline privacy controls.",
    approach: [
      "Interviews, system review, and documentation analysis.",
      "Mapped findings to a simple control checklist and prioritized recommendations.",
      "Compiled a report and presented actionable steps to the supervisor."
    ],
    outcome: "Recommendations documented; some process changes adopted by the partner during handover.",
    link: ""
  }
];

const CERTIFICATIONS = [
  {
    id: "c1",
    title: "Oracle Cloud Infrastructure 2025 Multicloud Architecture Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    description: "Demonstrates advanced skills in designing, integrating, and managing multicloud solutions across Oracle and third-party cloud environments.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2EDC6BCA356C877510F9CC4ABE24EE0B1EF409EDE43A661B97ED31136CC0D8BB"
  },
  {
    id: "c2",
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    description: "Validates fundamental knowledge of Oracle Cloud Infrastructure services, architecture, and core cloud concepts.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=252B58F537FA89A9CFBE6257FC80CA61D0E0436115A11F856822A42736402C5F"
  },
  {
    id: "c3",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "October 2025",
    description: "Recognition of foundational AI and cloud skills, including AI concepts, services, and responsible AI principles within Oracle Cloud.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=83A1D4D0A659DBDE2B4A92DC441E44B7286B1AFAFCFB15A08C6B13B0D3FE2495"
  },
  {
    id: "c4",
    title: "Dean's Lister Award",
    issuer: "Technological Institute of the Philippines",
    date: "October 30, 2025",
    link: "https://app.diplomasafe.com/en-US/certificates/de35bb7097983a22d718295e85bd1b96386110d28"
  },
  {
    id: "c5",
    title: "Dean's Lister Award",
    issuer: "Technological Institute of the Philippines",
    date: "June 5, 2025",
    link: "https://app.diplomasafe.com/en-US/certificates/ddbe15b0089f5bd9bf22268a4dedae56f335fa803"
  },
  {
    id: "c6",
    title: "Dean's Lister Award",
    issuer: "Technological Institute of the Philippines",
    date: "July 11, 2024",
    link: "https://app.diplomasafe.com/en-US/certificates/da611336204ba2094982e99913856ea74de352d0f"
  }
];

const EXPERIENCE = [
  {
    id: "e1",
    role: "Iot Intern / Researcher (OJT)",
    org: "Ateneo Innovation Center",
    logo: "assets/images/ateneo.png",
    period: "Jan 2026 — Apr 2026",
    points: [
      "Processed, structured, and cleaned a complex 385,728-row dataset using automated scripts and data  validation tools, achieving complete data integrity and resolving imbalances.",
      "Gathered, matched, and verified environmental metrics across multiple live telemetry and sensor platforms to ensure baseline accuracy for analytical models. ",
      "Documented step-by-step verification procedures and maintained strict operational standards to prevent data loss or misreporting.",
      "Facilitated technology transfer and community-led technical training to ensure the long-term operational  resilience of deployed systems."
    ]
  },
  {
    id: "e2",
    role: "Customer Service Representative",
    org: "Concentrix",
    logo: "assets/images/concentrix_logo.png",
    period: "July 2022 — Dec 2022",
    points: [
      "Conducted high-volume account lookups, updated customer records, and cross-checked internal logs with zero error tolerance, maintaining a 92% CSAT score.",
      "Classified and tagged high-volume qualitative call logs and feedback trends into structured categories to streamline workflow efficiency and issue resolution.",
      "Collaborated with cross-functional teams to identify and resolve recurring customer issues, resulting in a 15% reduction in repeat inquiries.",
      "Handled sensitive client inquiries while adhering strictly to company data privacy and security guidelines."
    ]
  },
];

const BLOG = [
  {
    id: "j1",
    date: "Nov 2025 - June 2025",
    tag: "Capstone",
    title: "Our 7-months long journey to build a foot-traffic analytics dashboard",
    excerpt: "Coursework never tells you how messy production data actually is. Here's what surprised me.",
    coverImage: "assets/images/c2 - 2.1.png",
    featuredImage: "assets/images/dashboard1.png",
    body: [
      "The capstone pushed me to think beyond textbook examples and into the realities of messy, incomplete data.",
      "A lot of the challenge came from making thoughtful decisions under uncertainty, especially when stakeholders needed something useful quickly.",
      "The biggest lesson was that the analysis matters most when it helps someone act with confidence."
    ],
    images: [
      { src: "assets/images/dashboard1.png", alt: "Dashboard screenshot", caption: "The dashboard layout used to summarize movement patterns and key trends." },
      { src: "assets/images/dashboard2.png", alt: "Dashboard detail view", caption: "A closer look at the filters and metrics used during the analysis process." }
    ]
  },
  {
    id: "j2",
    date: "January 2026",
    tag: "Competition",
    title: "My first hackathon: how we built a mobile-based AI-companion in 24hrs",
    excerpt: "Our team had 30 hours to turn a messy public dataset into a working dashboard. Here's how we split the work.",
    coverImage: "assets/images/watch1.png",
    featuredImage: "assets/images/watch2.png",
    body: [
      "The experience taught me how much clarity comes from defining a narrow problem statement early.",
      "We focused on building something simple, useful, and explainable instead of chasing every possible feature.",
      "What stayed with me most was how fast a small team can move when priorities are shared clearly."
    ],
    images: [
      { src: "assets/images/watch1.png", alt: "Hackathon concept board", caption: "An early concept board used to align the interface and user flow." },
      { src: "assets/images/watch2.png", alt: "Prototype screenshot", caption: "The final prototype layout after several rounds of rapid iteration." }
    ]
  },
  {
    id: "j3",
    date: "January - April 2026",
    tag: "OJT",
    title: "My 500-hour OJT experience at Ateneo Innovation Center",
    excerpt: "My cybersecurity capstone pushed me into machine learning for the first time — awkwardly, at first.",
    coverImage: "assets/images/placeholder-project.svg",
    body: [
      "The OJT experience helped me connect academic concepts with real research and communication challenges.",
      "I learned that good analysis is as much about context and storytelling as it is about the model or query.",
      "That balance made me more interested in turning data into something people can actually use."
    ],
    images: [
      { src: "assets/images/placeholder-project.svg", alt: "Placeholder visual", caption: "A simple visual placeholder for the write-up until a final photo is added." }
    ]
  }
];

const JOURNAL = BLOG;
