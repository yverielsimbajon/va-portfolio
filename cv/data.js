/* Shared resume data: facts about Maria. Only true things go here.
   Per-job changes (headline, summary, order, highlights) live in jobs.js. */
window.RESUME_BASE = {
  name: "Maria Simbajon",
  email: "simbajonmaria89@gmail.com",
  phone: "+63 909 492 8860",
  wa: "639094928860",
  site: "https://themariaoffice.com/",
  portfolio: "https://themariaoffice.com/portfolio/",
  book: "https://themariaoffice.com/discovery-call.html",
  intro: { video: "../images/intro.mp4", poster: "../images/intro-poster.jpg" },
  photo: "../images/maria-portrait.webp",
  photo2: "../images/about-portrait.jpg",
  defaultPdf: "files/Maria-Simbajon-Resume.pdf",

  stats: {
    views:     { value: 265, suffix: "K", label: "Post views", note: "up 50% in 90 days" },
    followers: { value: 147, prefix: "+", suffix: "%", label: "Follower growth", note: "in 90 days" },
    leads:     { value: 1400, suffix: "+", label: "Leads researched", note: "franchise database" },
    calendars: { value: 61, suffix: "", label: "Calendars managed", note: "GoHighLevel bookings" },
    events:    { value: 200, suffix: "+", label: "Calendar events", note: "coordinated" },
    years:     { value: 5, suffix: "+", label: "Years supporting", note: "AU, US and EU businesses" }
  },

  /* tags: social, design, crm, leads, admin, web, support, ops, english
     tools: shown in the skill-chip highlighter */
  experience: [
    { id: "ls", company: "Love & Sound Natural Therapies", role: "Virtual Assistant: Social Media, CRM & Admin", where: "Remote (Australia)", dates: "Jan 2026 – Present",
      bullets: [
        { t: "**Plan and post content** on Facebook and Instagram, designed in Canva and scheduled with Meta Business Suite: **post views up 50% to 265K** and **followers up 147% within 90 days**.", tags: ["social", "design"], tools: ["Canva", "Meta Business Suite", "Facebook", "Instagram"] },
        { t: "**Manage the CRM** (GoHighLevel): built automations and **follow-up sequences** for events, SMS and email confirmations, ticket purchases and reminders, organized in **7 workflow folders**.", tags: ["crm", "leads"], tools: ["GoHighLevel"] },
        { t: "Manage client bookings across **61 calendars** and coordinate **200+ calendar events**, onboarding sessions and consultations, with daily and weekly progress reports for the owner.", tags: ["admin", "ops"], tools: ["GoHighLevel", "Google Workspace"] },
        { t: "Respond to **leads and client enquiries** by email, Messenger and the CRM, sharing booking links and sending follow-ups and reminders.", tags: ["leads", "support", "english"], tools: ["GoHighLevel", "WhatsApp"] },
        { t: "Designed and update the business website, including a dedicated program landing page, using Wix Studio, HTML, CSS and JavaScript.", tags: ["web", "design"], tools: ["Wix Studio"] },
        { t: "Built a Notion business hub for planning, SOPs and marketing strategy, and organized records for 67 products and all customer orders.", tags: ["admin", "ops"], tools: ["Notion"] }
      ] },
    { id: "kk", company: "The Kerbing King", role: "Virtual Assistant, Web Design & Branding", where: "Remote (Australia)", dates: "Jun 2026 – Present",
      bullets: [
        { t: "Design **social media graphics** and plan and schedule **Facebook and Instagram content**, including before-and-after **Reels**.", tags: ["social", "design"], tools: ["Canva", "Meta Business Suite", "Facebook", "Instagram"] },
        { t: "Designed and built the company website to build trust and **generate quote enquiries (leads)**, plus the full brand: logo, wordmark, icon and promotional materials.", tags: ["web", "design", "leads"], tools: ["Canva"] },
        { t: "Manage the calendar, appointment scheduling and customer enquiries; weekly progress reports; Notion workspace for planning and SOPs.", tags: ["admin", "support"], tools: ["Notion"] }
      ] },
    { id: "eo", company: "EO Staff", role: "Assistant to the CEO, Sales & Marketing Operations", where: "Remote (United States)", dates: "Nov – Dec 2025",
      bullets: [
        { t: "**Generated leads:** researched prospects and built a **1,400+ contact lead database** with Apollo.io, Seamless.AI and Google Sheets; supported LinkedIn outreach and discovery calls.", tags: ["leads"], tools: ["Apollo.io", "Seamless.AI", "Google Sheets", "LinkedIn"] },
        { t: "**Managed the CRM** (GoHighLevel, Zoho CRM): kept client and lead records accurate and supported **automated email follow-up workflows**.", tags: ["crm", "leads"], tools: ["GoHighLevel", "Zoho CRM"] },
        { t: "Scheduled and published content on **Facebook, Instagram, LinkedIn** and Google Business Profile; replied to comments and messages.", tags: ["social"], tools: ["Facebook", "Instagram", "LinkedIn"] },
        { t: "Managed the CEO's calendar, inbox and appointments; daily end-of-day updates, weekly KPI reports and SOPs.", tags: ["admin", "ops"], tools: ["Google Workspace"] }
      ] },
    { id: "mk", company: "Blanche Butuan Aesthetic Clinic · Amazing Beauty Skincare · Vitacel Products", role: "Marketing Representative & Social Media Support", where: "Philippines", dates: "Jul 2022 – Sep 2025",
      bullets: [
        { t: "Created, scheduled and published **social media posts** on Facebook, Instagram and LinkedIn; replied to comments and messages.", tags: ["social"], tools: ["Facebook", "Instagram", "LinkedIn"] },
        { t: "Handled **customer enquiries, bookings and follow-ups**, building client satisfaction and loyalty.", tags: ["support", "leads"], tools: [] },
        { t: "Represented the brands at events and promotions and reached out to local businesses.", tags: ["leads"], tools: [] }
      ] },
    { id: "fl", company: "Freelance Virtual Assistant", role: "Research & Documentation Support", where: "Remote (United States & Europe)", dates: "Sep 2022 – Jun 2024",
      bullets: [
        { t: "Managed tasks, deadlines and submissions for multiple clients with Trello and shared spreadsheets.", tags: ["admin", "ops"], tools: ["Trello", "Google Sheets"] },
        { t: "Prepared documents, reports and research in Google Workspace and Microsoft Office; handled client emails.", tags: ["admin", "english"], tools: ["Google Workspace", "Microsoft Office"] }
      ] },
    { id: "as", company: "ASSCAT", role: "Project Engineer Intern, Data Reporting & Documentation", where: "Philippines", dates: "Jul – Sep 2024",
      bullets: [ { t: "Prepared budget summaries and project reports; built **Excel databases** to track milestones, costs and documents.", tags: ["admin", "ops"], tools: ["Excel"] } ] }
  ],

  skills: [
    { group: "CRM & Automation", items: ["GoHighLevel", "HubSpot", "Zoho CRM", "Salesforce", "Zapier", "n8n"] },
    { group: "Social Media & Design", items: ["Canva", "Adobe Photoshop", "Figma", "Meta Business Suite", "Metricool", "Facebook", "Instagram", "LinkedIn"] },
    { group: "Admin & Operations", items: ["Google Workspace", "Microsoft Office", "Notion", "ClickUp", "Asana", "Trello", "Monday.com", "Google Sheets"] },
    { group: "Websites", items: ["WordPress", "Wix Studio", "Webflow", "Framer"] },
    { group: "Customer Support", items: ["Zendesk", "Freshdesk", "RingCentral", "WhatsApp", "Zoho Desk"] }
  ],

  certs: [
    "Google Analytics Certification",
    "Fundamentals of Digital Marketing (Google, 2024)",
    "Customer Service Course (Oxford Home Study Centre, 2024)",
    "Customer Service and Advanced Virtual Assistance Training",
    "Lean Six Sigma Yellow Belt (C.S.S.C.)",
    "Data Analysis: Visualizations in Excel (The Open University, 2024)"
  ],
  education: { degree: "Bachelor of Science in Civil Engineering", school: "Agusan del Sur State College of Agriculture and Technology (ASSCAT)", years: "2021 – 2024" },
  setup: ["Laptop (Intel Core i5, 24GB RAM) plus a backup laptop", "65 Mbps fiber with backup mobile Wi-Fi", "Backup power generator", "Headset and webcam for calls"],

  /* Work samples. Files live in /images. kind: img | video. "thumb" is a small copy in /images/thumbs. */
  work: {
    results: { label: "Results", blurb: "Facebook Page, last 90 days (Love & Sound Natural Therapies).",
      items: ["results-views.jpg", "results-followers.jpg", "results-interactions.jpg", "smm-analytics.jpg"].map(f => ({ src: f })) },
    designs: { label: "Canva designs", blurb: "Posters, promos, vouchers, event graphics and short videos I designed for clients.",
      items: [
        { src: "design-coupon-20.webp", thumb: "design-coupon-20.jpg" }, { src: "design-taxi-light.webp", thumb: "design-taxi-light.jpg" },
        { src: "design-video-1.mp4", thumb: "design-video-1.jpg", kind: "video" }, { src: "design-stress-relief.jpg", thumb: "design-stress-relief.jpg" },
        { src: "design-valentine-pink.webp", thumb: "design-valentine-pink.jpg" }, { src: "design-9d-breathwork.jpg", thumb: "design-9d-breathwork.jpg" },
        { src: "design-taxi-dark.webp", thumb: "design-taxi-dark.jpg" }, { src: "design-video-2.mp4", thumb: "design-video-2.jpg", kind: "video" },
        { src: "design-coupon-5.webp", thumb: "design-coupon-5.jpg" }, { src: "design-valentine-call.jpg", thumb: "design-valentine-call.jpg" },
        { src: "design-breathwork-events.jpg", thumb: "design-breathwork-events.jpg" }, { src: "design-9dmt-trip.jpg", thumb: "design-9dmt-trip.jpg" },
        { src: "design-promo.jpg", thumb: "design-promo.jpg" }, { src: "design-education.jpg", thumb: "design-education.jpg" },
        { src: "design-voucher-20.png", thumb: "design-voucher-20.jpg" }, { src: "design-book-now-pay-later.png", thumb: "design-book-now-pay-later.jpg" },
        { src: "design-social-media-management.png", thumb: "design-social-media-management.jpg" },
        { src: "design-video-3.mp4", thumb: "design-video-3.jpg", kind: "video" }, { src: "design-video-4.mp4", thumb: "design-video-4.jpg", kind: "video" }
      ] },
    reels: { label: "Reels I edit for you", blurb: "Before-and-after Reels with captions and music for The Kerbing King. Tap a phone to play.",
      items: [1, 2, 3].map(n => ({ src: "reel-" + n + ".mp4", poster: "reel-" + n + ".jpg", kind: "video" })) },
    smm: { label: "Content planning", blurb: "Content calendar, posting schedule and plan I run for clients.",
      items: ["smm-calendar.jpg", "smm-content-plan.jpg", "smm-posting-schedule.jpg", "strategy-doc.jpg"].map(f => ({ src: f })) },
    crm: { label: "CRM & automation", blurb: "GoHighLevel workflows, follow-ups and calendars I built and manage.",
      items: ["crm-workflow-list.jpg", "crm-ticket-workflow.jpg", "crm-follow-up.jpg", "crm-follow-up-2.jpg", "crm-call-confirmation.jpg", "crm-call-confirmation-2.jpg", "ghl-calendars.jpg", "ghl-booking-widget.jpg", "ghl-orders.jpg", "ghl-products.jpg", "ghl-recurring.jpg", "franchise-database.jpg"].map(f => ({ src: f })) },
    admin: { label: "Admin & ops", blurb: "Calendars, reports and the Notion hub I built.",
      items: ["gcal-day.jpg", "gcal-event.jpg", "weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg", "notion-offers.jpg", "notion-menu.jpg"].map(f => ({ src: f })) },
    websites: { label: "Websites", blurb: "Live client sites and concept designs (concepts are labelled).",
      items: [
        { src: "web-kerbingking.jpg", cap: "The Kerbing King (live)" }, { src: "web-loveandsound.jpg", cap: "Love & Sound Natural Therapies (live)" },
        { src: "web-realestate.jpg", cap: "Real estate website (concept)" }, { src: "web-realestate-2.jpg", cap: "Real estate website (concept)" },
        { src: "web-realestate-3.jpg", cap: "Real estate website (concept)" }, { src: "web-aesthetic.jpg", cap: "Aesthetic clinic (concept)" },
        { src: "web-tutoring.jpg", cap: "Tutoring (concept)" }, { src: "web-solar.jpg", cap: "Solar (concept)" }
      ] }
  }
};
