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
    image: "assets/images/placeholder-project.svg",
    summary: "An interactive dashboard analyzing regional sales trends and identifying underperforming product lines.",
    tags: ["SQL", "Power BI", "DAX"],
    problem: "Replace with the real problem: what question was the business trying to answer, and why did it matter?",
    approach: [
      "Step 1 — how you got and cleaned the data.",
      "Step 2 — the analysis or modeling you did.",
      "Step 3 — how you turned it into something decision-makers could use."
    ],
    outcome: "Replace with the result — a metric, a decision it informed, or what you'd do differently next time.",
    link: "https://github.com/yourname/sales-dashboard"
  },
  {
    id: "p2",
    title: "WATCH: An AI-Driven Multimodal Acoustic-Vision Sensing Framework for Hyper-Local Extreme Rainfall Classification and Early Warning",
    status: "done",
    image: "assets/images/placeholder-project.svg",
    summary: "A machine learning classifier that flags anomalous network traffic, built for a cybersecurity coursework project.",
    tags: ["Python", "Scikit-learn", "Wireshark"],
    problem: "Replace with the real problem statement — what kind of traffic/attack you were trying to detect.",
    approach: [
      "Dataset and features used.",
      "Model(s) tried and why you picked the final one.",
      "How you evaluated it (precision/recall, confusion matrix, etc.)."
    ],
    outcome: "Replace with results — accuracy achieved, what you learned about the trade-off between false positives and false negatives.",
    link: "https://github.com/yourname/nid-classifier"
  },
  {
    id: "p3",
    title: "AI-Enhanced Circular Sanitation: A Smart Nature-Based System for Transforming Septic Effluent into High-Value Ornamental Aquaponics",
    status: "progress",
    image: "assets/images/placeholder-project.svg",
    summary: "A model to predict which customers are at risk of churning, using historical usage and support-ticket data.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    problem: "Replace with the business context — why churn prediction mattered for this dataset/company.",
    approach: [
      "Exploratory data analysis and feature engineering.",
      "Model selection and validation strategy.",
      "Current status / what's left to finish."
    ],
    outcome: "Replace once finished — for now, describe what's in progress and your target completion date.",
    link: "https://github.com/yourname/churn-prediction"
  },
  {
    id: "p4",
    title: "Data Handling Policy Audit (OJT)",
    status: "done",
    image: "assets/images/placeholder-project.svg",
    summary: "A review of a partner company's data-handling practices during OJT, mapping gaps against basic data-privacy principles.",
    tags: ["Data Privacy", "Risk Assessment", "Documentation"],
    problem: "Replace with the real scope — what system or process you audited and why.",
    approach: [
      "How you gathered information (interviews, system review, documentation).",
      "Framework or checklist you used to assess gaps.",
      "How findings were presented to the team/supervisor."
    ],
    outcome: "Replace with the outcome — recommendations made, and whether/how they were adopted.",
    link: ""
  }
];

const CERTIFICATIONS = [
  {
    id: "c1",
    title: "Oracle Cloud Infrastructure 2025 Multicloud Architecture Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    credentialId: "REPLACE-ID",
    description: "Replace with a short note on what the certificate covered and what you took away from it.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=2EDC6BCA356C877510F9CC4ABE24EE0B1EF409EDE43A661B97ED31136CC0D8BB"
  },
  {
    id: "c2",
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    credentialId: "REPLACE-ID",
    description: "Replace with details — this is where your cybersecurity specialization shows up for recruiters.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=252B58F537FA89A9CFBE6257FC80CA61D0E0436115A11F856822A42736402C5F"
  },
  {
    id: "c3",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "2024",
    credentialId: "",
    description: "Replace with what the challenge was, your team's approach, and why you won.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=83A1D4D0A659DBDE2B4A92DC441E44B7286B1AFAFCFB15A08C6B13B0D3FE2495"
  },
  {
    id: "c4",
    title: "Dean's Lister Award",
    issuer: "Technological Institute of the Philippines",
    date: "2024",
    credentialId: "REPLACE-ID",
    description: "Replace with a short note on scope/level of the course.",
    link: "",
    link: "https://app.diplomasafe.com/en-US/certificates/de35bb7097983a22d718295e85bd1b96386110d28"
  },
  {
    id: "c5",
    title: "Dean's Lister Award",
    issuer: "Technological Institute of the Philippines",
    date: "2023",
    credentialId: "REPLACE-ID",
    description: "Replace with details relevant to how it shaped your data-security mindset.",
    link: "https://app.diplomasafe.com/en-US/certificates/ddbe15b0089f5bd9bf22268a4dedae56f335fa803"
  },
  {
    id: "c6",
    title: "Dean's Lister Award",
    issuer: "Technological Institute of the Philippines",
    date: "2022–2024",
    credentialId: "",
    description: "Replace or remove — academic honors go here too.",
    link: "https://app.diplomasafe.com/en-US/certificates/da611336204ba2094982e99913856ea74de352d0f"
  }
];

const EXPERIENCE = [
  {
    id: "e1",
    role: "Iot Intern / Researcher (OJT)",
    org: "Ateneo Innovation Center",
    period: "Jan 2026 — Apr 2026",
    points: [
      "Replace with a specific responsibility, e.g. maintained and queried internal databases.",
      "Replace with a measurable contribution, e.g. built a report that reduced manual reconciliation time by X%.",
      "Replace with anything security-related you touched — access reviews, data handling, etc."
    ]
  },
  {
    id: "e2",
    role: "Customer Service Representative",
    org: "Concentrix",
    period: "July 2022 — Dec 2022",
    points: [
      "Replace with what you actually did — vulnerability scanning, log review, awareness training, etc.",
      "Replace with a specific outcome or finding you contributed to."
    ]
  },
];

const JOURNAL = [
  {
    id: "j1",
    date: "Apr 2026",
    tag: "OJT",
    title: "What four months in a real IT department taught me about 'clean' data",
    excerpt: "Coursework never tells you how messy production data actually is. Here's what surprised me.",
    body: [
      "Replace with the full story. What was the situation, what did you expect going in, and what actually happened?",
      "Add a paragraph on a specific challenge you ran into and how you solved (or didn't solve) it.",
      "Close with what you'd tell a underclassman about to start their own OJT."
    ]
  },
  {
    id: "j2",
    date: "Nov 2025",
    tag: "Competition",
    title: "Placing 1st at [Hackathon Name]: our 30-hour data pipeline",
    excerpt: "Our team had 30 hours to turn a messy public dataset into a working dashboard. Here's how we split the work.",
    body: [
      "Replace with the challenge brief and your team's plan of attack.",
      "Add the specific technical decisions you made and why (tools, models, visualizations).",
      "Close with the result and a lesson that stuck with you."
    ]
  },
  {
    id: "j3",
    date: "Mar 2025",
    tag: "Coursework",
    title: "Building my first intrusion-detection classifier",
    excerpt: "My cybersecurity capstone pushed me into machine learning for the first time — awkwardly, at first.",
    body: [
      "Replace with the assignment context and your starting point.",
      "Add what you learned about the trade-off between precision and recall in a security context.",
      "Close with how this project shaped your interest in data analytics."
    ]
  }
];
