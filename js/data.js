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
    image: "assets/images/watch_cover.png",
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
    title: "Design and Implementation of a Library Management System Using Oracle Forms Developer",
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
    date: "November 2025 - June 2026",
    tag: "Capstone",
    title: "Our 7 month long journey to build a foot-traffic analytics dashboard",
    excerpt: "From raw foot traffic data to a working dashboard, our capstone became a lesson in data, iteration, and teamwork.",
    coverImage: "assets/images/c2_cover.png",
    body: [],
    sections: [
      { heading: "Where It All Started: The C2 Design Challenge", text: "This was the moment we signed our commitment, along with the statement of support from the companies we partnered with. A lot of big companies were in that room, and honestly, just being there really motivated me to give this competition my absolute best", images: [{ src: "assets/images/c2 - 1.png", alt: "C2 Design Challenge team"}] },
      { heading: "Getting Direction: The Pitch Deck Workshop", text: "Feb 6, 2025 — The Problem Solution Fit and Pitch Deck Preparation Workshop. Here, we presented the UI of our proposed dashboard system, tackling the foot traffic problem faced by our partner organization. With guidance from an industry professional guest, we got valuable insight into where to focus and what to add to our solution. It set us on the right track before we even started building the actual system."},
      { heading: "Defending the Capstone/Thesis Behind the Project", text: "Since this project doubled as our capstone, we had weekly reports and progress checks the whole way through. This photo was taken right after we successfully defended our capstone with my groupmates, Marx Roxas, Kristay Pasquil, and Serielle Mendoza. This moment meant a lot to me — after sleepless nights and stressful debugging sessions, we finally had a complete system ready to present for the competition.", images: [{ src: "assets/images/c2_2.5.png", alt: "Foot-traffic dashboard presentation"}] },
      { heading: "Exhibit Day: Showing It Off", text: "June 5 — Exhibit Day! This was the booth we set up to showcase our project's features. I had so much fun presenting to students and faculty, watching their reactions as they realized how much impact foot traffic data can have — whether it's for business decisions, urban planning, or beyond, as long as you know how to use the data.", images: [{ src: "assets/images/c2 - 3.png", alt: "Team discussing the dashboard", }, { src: "assets/images/c2 - 4.png", alt: "Foot-traffic dashboard demonstration" }] },
      { heading: "The Final Pitch: Top 5 Out of 20", text: "Out of 17 participating teams, we were fortunate enough to make it into the top 5. I was one of the presenters, and we got to pitch our system directly to our partner organization and the companies in attendance. We didn't reach the podium finish, but honestly, it was still an incredible experience — standing in front of a crowd of big companies and government organizations, presenting seven months of hard work.", images: [{ src: "assets/images/c2_5.png", alt: "Final C2 presentation"}] },
      { heading: "Looking Back", text: "This journey taught me more than just how to build a computer vision system. It taught me how to work under pressure, communicate a technical solution to a non-technical audience, and keep pushing even when the finish line felt far away. Though we were not able to reach the podium finish, it was still a great experience to stand in front of a crowd, especially big companies and government organizations, and present our 7 month long project that we’ve worked hard to develop." }
    ]
  },
  {
    id: "j2",
    date: "January 2026",
    tag: "Competition",
    title: "My first hackathon: How we built a mobile-based AI-companion in under 24 hrs",
    excerpt: "Our first hackathon compressed research, product decisions, and prototyping into one intense day.",
    coverImage: "assets/images/pt - cover.png",
    body: [],
    sections: [
      { heading: "Assembling the Team", text: "January 22, 2025 — Together with my hackathon mates, Aljen Carmona, Josephus Romero, Samuel Sarmiento, and Noah Catungan, we first assembled at school, since this was our designated pick-up location. There's a particular kind of excitement in that moment before a hackathon starts — you don't know exactly what's ahead, but you know it's going to be a long, intense couple of days.", images: [{ src: "assets/images/pt_1.png", alt: "PhilTech hackathon cover"}] },
      { heading: "The Challenge: Mental Health and Wellness", text: "Once we arrived, Philtech introduced the company, walked us through the mechanics, and had us draw lots to determine our presentation order. Then came the topic we'd be tackling: personal productivity and wellness. The prompt was blunt and important - \"Mental health concerns have become evident with the youth. What breakthroughs can be introduced to assist and provide appropriate intervention?\" This was where we spent the bulk of our time. With a question that big, the ideas came fast and kept overflowing - almost too many possible directions to choose from. Narrowing it down to one solid concept took real discussion and some hard calls.", images: [{ src: "assets/images/pt_2.png", alt: "Mental health AI companion concept"}] },
      { heading: "Locking In: Development Phase", text: "Once we settled on what app or prototype to build, along with its core features, we split up to work on our individual roles. I was tasked with the front end together with Samuel, and together we designed the UI of the prototype. This was the \"lock-in\" period - heads down, screens glowing, everyone quietly grinding through their part of the build.", images: [{ src: "assets/images/pt_3.1.png", alt: "AI companion prototype"},{ src:"assets/images/pt_3.2.png", alt:"Development phase"} ] },
      { heading: "Fuel for the Grind", text: "Food and coffee!! I was honestly surprised by how well-fed we were. There wasn't a single moment during the entire competition where we went hungry - which, if you've ever been through a hackathon, you know makes a bigger difference than people expect.", images: [{ src: "assets/images/pt_4.png", alt: "PhilTech hackathon team", caption: "The long build was powered by teamwork, food, and coffee." }] },
      { heading: "Pitch Day", text: "January 23, 2026 - Pitching time! This part was nerve-wracking, since we were the first school to present our project in front of Philtech's general manager, Trung Nguyen, and other department heads. Presenting a project centered on mental health to that kind of audience raised the stakes, but it also reminded us why the work mattered in the first place.", images: [{ src: "assets/images/pt_5.png", alt: "Hackathon project presentation", caption: "Presenting our project to the Philtech panel." }] },
      { heading: "And That's a Wrap", text: "This was a genuinely great experience for me. I'd like to give a huge thanks to our mentors, Ms. Nila Santiago and Ms. Paula Mendoza, for their all-out support throughout the event. They shared their personal experiences from joining hackathons themselves, which gave us much better direction on what to focus on. I'd also like to thank Philtech for the opportunity - they were incredibly accommodating and even provided a workshop before the event that helped prepare us going in. Walking away from this, I didn't just come out with a working prototype. I came out with a better sense of how to turn a broad, difficult problem into something buildable in a short amount of time, and how much a supportive team and good mentorship can make that process feel less overwhelming. Photos in this post with the Philtech watermark are courtesy of Philtech and their official Facebook page.", images: [{ src: "assets/images/pt_6.1.png", alt: "AI companion prototype"},{src:"assets/images/pt_6.2.png", alt:"Group Photo"}] }
    ]
  },
  {
    id: "j3",
    date: "January - April 2026",
    tag: "OJT",
    title: "My 500-hour OJT experience at Ateneo Innovation Center",
    excerpt: "Five hundred hours at the Ateneo Innovation Center taught me how research becomes useful when it is shared well.",
    coverImage: "assets/images/ojt_cover.png",
    body: [],
    sections: [
      { heading: "First Week", text: "On-the-job training is supposed to bridge the gap between what you learn in school and what actually happens in the field. Looking back at my OJT, that's exactly what it did - except the range of things I got hands-on with was a lot wider than I expected. My first hands-on experience at AIC was tinkering with a solar panel. I learned how a solar panel actually works and how it stores energy into a battery. One small but important lesson that stuck with me: keeping the panel clean matters more than it sounds, since even a layer of dust can affect how much light it's able to absorb.", images: [{ src: "assets/images/ojt_1.png", alt: "Ateneo Innovation Center OJT", caption: "My OJT experience at the Ateneo Innovation Center." }] },
      { heading: "Learning to Fly", text: "This was also my first time ever flying a drone. We had the privilege of learning basic droning skills from Sir Nico Lasaca, a remote piloted aircraft controller, who walked us through the do's and don'ts before flying. I used to think you could fly a drone anywhere as long as you had one - turns out that's not the case at all. Sir Nico taught us that there are only specific areas where flying is actually allowed. I was nervous going in, worried I might crash it into something, but I managed to get through it without incident and even landed the drone perfectly on the landing spot.", images: [{ src: "assets/images/ojt_2.1.png", alt: "Picture of me flying the drone"}, {src:"assets/images/ojt_2.2.png", alt:"COC for drone"}] },
      { heading: "Eyes in the Sky: Weather Monitoring on the Rooftop", text: "We also set up a camera on the rooftop of the PLDT CTC building. This camera served as the 'eyes' of a model designed to predict whether it would rain and to classify the rain category based on cloud patterns. This project pushed me to learn a lot more about climate and meteorological data, and how that raw data can be turned into insights that genuinely help the community.", images: [{ src: "assets/images/ojt_3.png", alt: "OJT weather monitoring project", caption: "Weather monitoring became one of the hands-on projects during the OJT." }] },
      { heading: "Smart Greenhouse", text: "We worked on integrating different technologies into a greenhouse weather station, including a CCTV camera used for pest detection on plants - a good reminder of how much overlap there is between agriculture and tech once you start looking for it.", images: [{ src: "assets/images/ojt_4.png", alt: "Ateneo Innovation Center", caption: "Technology, agriculture, and community-centered work came together during the OJT." }] },
      { heading: "Aquaponics and a Lesson in Patience", text: "This part of the OJT wasn't just about technical skills. Building an aquaponics setup and learning how to take care of fish taught me something less tangible but just as valuable: patience, and the understanding that great things take time.",images: [{ src: "assets/images/ojt_5.png", alt: "Ateneo Innovation Center", caption: "Patience and dedication were key lessons from the aquaponics project." }] },
      { heading: "The Little Things: Food and Good Company", text: "Every time we rendered overtime, we'd get a treat from our supervisor, Sir Paul Cabacungan. I'd like to give my thanks to Sir Paul and the rest of the AIC team for the opportunity and everything I got to learn along the way.", images: [{ src: "assets/images/ojt_6.1.png", alt: "Ateneo Innovation Center"},{src:"assets/images/ojt_6.2.png", alt:"Ateneo Innovation Center", caption: "Good company made the OJT experience even better." }] },
      { heading: "Looking Back", text: "I'm genuinely glad we were able to help create something impactful and innovative in the relatively short time we were there. This OJT experience gave me more than technical exposure - it gave me a much broader view of how different fields, from renewable energy to aviation to agriculture, can come together to solve real problems.", images: [{ src: "assets/images/ojt_7.png", alt: "Ateneo Innovation Center"}] }
    ]
  }
];

const JOURNAL = BLOG;
