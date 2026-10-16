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
    { group: "CRM & Automation", items: ["GoHighLevel", "HubSpot", "Zoho CRM", "Salesforce", "Zapier", "n8n", "Mailchimp"] },
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
  /* Case-study cards (same layout as the portfolio): challenge, solution, result. Facts match the portfolio. */
  cases: {
    ghlRecords: { category: "CRM & Automation", resp: "I manage and update contacts, orders and bookings in GoHighLevel so every record stays accurate.", title: "Contacts, opportunities & orders on GoHighLevel", clients: ["Love & Sound Therapies"],
      challenge: "My client's business data was spread across many sheets and documents.", solution: "I organised the records in GoHighLevel, including 67 products and every customer order.", result: "I made accurate data faster to find and cut the manual searching.",
      tools: ["GoHighLevel", "Google Sheets"], images: ["ghl-orders.jpg", "ghl-products.jpg"] },
    ghlPipeline: { category: "CRM & Automation", resp: "I move opportunities into the correct stages based on customer responses, appointments and attendance.", title: "Pipelines & opportunity stages on GoHighLevel", clients: ["Love & Sound Therapies"],
      challenge: "My client needed a clear way to see who had booked, attended, no-showed or cancelled for each event.", solution: "I managed an events pipeline of 84 opportunities, moving each one through Booked, Attended, No Show and Cancelled, and kept the source, value and notes up to date.", result: "I made every attendee's status easy to see at a glance, so follow-ups never get missed.",
      tools: ["GoHighLevel", "Opportunities", "Pipelines"], images: ["ghl-pipeline.jpg"] },
    ghlConvos: { category: "Customer Support", resp: "I check every new enquiry, follow it up, and monitor conversations so no customer is left waiting.", title: "Enquiries, follow-ups & conversations on GoHighLevel", clients: ["Love & Sound Therapies", "The Kerbing King"],
      challenge: "My clients' customers expected quick, clear answers across many conversations.", solution: "I answered enquiries, helped with bookings, and shared accurate session details and booking links.", result: "I gave clients a better customer experience and stronger trust.",
      tools: ["GoHighLevel", "Gmail", "Messenger"], images: ["cs-inquiry.jpg", "cs-inquiry-2.jpg", "cs-email-follow-up.jpg", "cs-booking-link.jpg", "cs-reminder.jpg"] },
    ghlBooking: { category: "Admin Support", resp: "I support appointment booking and keep accurate notes on every calendar event.", title: "Appointment booking & accurate notes on GoHighLevel Calendar and Google Workspace", clients: ["Love & Sound Therapies", "EO Staff", "The Kerbing King"],
      challenge: "Handling registrations and bookings manually caused extra work and errors for my client.", solution: "I managed bookings across 61 GoHighLevel calendars and 200+ Google Calendar events, keeping notes on each event.", result: "I made booking smoother and cut scheduling conflicts.",
      tools: ["GoHighLevel", "Google Calendar", "Google Workspace"], images: ["ghl-calendars.jpg", "ghl-booking-widget.jpg", "ghl-recurring.jpg", "gcal-day.jpg", "gcal-event.jpg"] },
    ghlWorkflows: { category: "CRM & Automation", resp: "I create GoHighLevel workflows, check that they run correctly, and flag any problems.", title: "Workflows & automations I create on GoHighLevel", clients: ["Love & Sound Therapies"],
      challenge: "My client's automations were hard to find and manage, and follow-ups relied on doing things by hand.", solution: "I built SMS and email confirmations, reminders and follow-up flows, and sorted every workflow into 7 clear folders.", result: "I made automations easy to find, check and fix, and reduced missed appointments.",
      tools: ["GoHighLevel", "Gmail", "Google Calendar"], images: ["crm-workflow-list.jpg", "crm-ticket-workflow.jpg", "crm-call-confirmation.jpg", "crm-call-confirmation-2.jpg", "crm-follow-up.jpg", "crm-follow-up-2.jpg"] },
    ghlUpdates: { category: "Admin Support", resp: "I send a short daily update covering progress, outstanding tasks and issues.", title: "Daily updates & documented processes on Google Workspace and Notion", clients: ["EO Staff", "Love & Sound Therapies", "The Kerbing King"],
      challenge: "Owners had to keep asking for updates on completed work.", solution: "I sent structured daily and weekly reports on tasks, priorities and next steps, and documented my processes in a Notion hub.", result: "I gave owners more transparency and one place where every process is written down.",
      tools: ["Google Docs", "Notion", "Gmail"], images: ["weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg"] },
    ghlLeads: { category: "Business Operations", resp: "I keep contact records and lead data consistent and tidy, with accurate details.", title: "Organised records & lead data on GoHighLevel and Google Sheets", clients: ["EO Staff"],
      challenge: "The sales team needed accurate, organised prospect data.", solution: "I researched prospects and built a lead database of 1,400+ rows, keeping records in GoHighLevel and Zoho CRM.", result: "I gave the team reliable data that supports outreach and follow-up.",
      tools: ["GoHighLevel", "Zoho CRM", "Google Sheets"], images: ["franchise-database.jpg"] }
  },

  work: {
    results: { label: "Results", blurb: "Facebook Page, last 90 days (Love & Sound Natural Therapies).",
      items: ["results-views.jpg", "results-followers.jpg", "results-interactions.jpg", "smm-analytics.jpg"].map(f => ({ src: f })) },
    designs: { label: "Canva designs", blurb: "Real estate sample designs, plus posters, promos, vouchers, event graphics and short videos I designed for clients.",
      items: [
        { src: "design-re-just-listed.jpg", thumb: "design-re-just-listed.jpg" }, { src: "design-re-open-home.jpg", thumb: "design-re-open-home.jpg" },
        { src: "design-re-just-sold.jpg", thumb: "design-re-just-sold.jpg" },
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
    ghlRecords: { label: "Contacts, opportunities & orders", resp: "Manage and update contacts, opportunities and pipelines in GoHighLevel.", blurb: "Orders, products and recurring bookings I keep accurate in GoHighLevel, plus the 1,400+ contact lead database.",
      items: ["ghl-orders.jpg", "ghl-products.jpg", "ghl-recurring.jpg", "franchise-database.jpg"].map(f => ({ src: f })) },
    ghlConvos: { label: "Enquiries, follow-ups & conversations", resp: "Check new enquiries are recorded, organise follow-up tasks, and monitor conversations.", blurb: "Real customer enquiries I answer, track and follow up, with booking links and reminders.",
      items: ["cs-inquiry.jpg", "cs-inquiry-2.jpg", "cs-email-follow-up.jpg", "cs-booking-link.jpg", "cs-reminder.jpg"].map(f => ({ src: f })) },
    ghlBooking: { label: "Appointment booking & accurate notes", resp: "Support appointment booking and maintain accurate notes.", blurb: "61 calendars, booking widgets, recurring offers and the calendar entries with notes I manage.",
      items: ["ghl-calendars.jpg", "ghl-booking-widget.jpg", "gcal-day.jpg", "gcal-event.jpg"].map(f => ({ src: f })) },
    ghlWorkflows: { label: "Workflows & automations I check", resp: "Check that existing workflows and automations are running correctly, flagging any problems.", blurb: "7 workflow folders with follow-up, confirmation, reminder and ticket-purchase automations I built and maintain.",
      items: ["crm-workflow-list.jpg", "crm-ticket-workflow.jpg", "crm-call-confirmation.jpg", "crm-call-confirmation-2.jpg", "crm-follow-up.jpg", "crm-follow-up-2.jpg"].map(f => ({ src: f })) },
    ghlUpdates: { label: "Daily updates & documented processes", resp: "Provide a short daily update covering progress, outstanding tasks and issues.", blurb: "The end-of-day and weekly reports I send, and the Notion hub where processes are documented.",
      items: ["weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg"].map(f => ({ src: f })) },
    admin: { label: "Admin & ops", blurb: "Calendars, reports and the Notion hub I built.",
      items: ["gcal-day.jpg", "gcal-event.jpg", "weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg", "notion-offers.jpg", "notion-menu.jpg"].map(f => ({ src: f })) },
    websites: { label: "Websites", blurb: "Live client websites (Love & Sound Natural Therapies, The Kerbing King) and website concept designs.",
      items: [
        { src: "web-kerbingking.jpg", cap: "The Kerbing King (live)" }, { src: "web-loveandsound.jpg", cap: "Love & Sound Natural Therapies (live)" },
        { src: "web-realestate.jpg", cap: "Real estate website (concept)" }, { src: "web-realestate-2.jpg", cap: "Real estate website (concept)" },
        { src: "web-realestate-3.jpg", cap: "Real estate website (concept)" }, { src: "web-aesthetic.jpg", cap: "Aesthetic clinic (concept)" },
        { src: "web-tutoring.jpg", cap: "Tutoring (concept)" }, { src: "web-solar.jpg", cap: "Solar (concept)" }
      ] }
  }
};

/* Website projects, shown as cards with a "View" popup (same as the portfolio page). */
window.RESUME_BASE.webProjects = [
  { group: "Real Client Website", title: "The Kerbing King Landscaping Services", desc: "A professional landscaping website that showcases services, builds trust and encourages quote requests with a clean, modern design.", btn: "View Live Site", url: "https://thekerbingking.com.au/", images: ["web-kerbingking.jpg", "web-kerbingking-2.jpg", "web-kerbingking-3.jpg", "web-kerbingking-5.jpg", "web-kerbingking-4.jpg", "web-kerbingking-6.jpg", "web-kerbingking-7.jpg", "web-kerbingking-8.jpg"] },
  { group: "Real Client Website", title: "Love & Sound Natural Therapies", desc: "A calming holistic wellness website that showcases natural therapy services and makes it easy for clients to explore and enquire.", btn: "View Live Site", url: "https://loveandsoundtherapies.com/the-reclamation-page", images: ["web-reclamation-1.jpg", "web-reclamation-2.jpg", "web-reclamation-3.jpg", "web-reclamation-4.jpg", "web-loveandsound.jpg", "web-loveandsound-2.jpg", "web-loveandsound-3.jpg", "web-loveandsound-4.jpg"] },
  { group: "Website Design Concept", title: "Aesthetic Clinic", desc: "A premium aesthetic clinic website concept with treatment filters, memberships and an online consultation booking form.", btn: "View Design Concept", url: "https://themariaoffice.com/concepts/aesthetic-clinic/", images: ["web-aesthetic.jpg", "web-aesthetic-2.jpg", "web-aesthetic-3.jpg", "web-aesthetic-4.jpg", "web-aesthetic-5.jpg"] },
  { group: "Website Design Concept", title: "Real Estate", desc: "A real estate website concept that showcases premium listings and connects buyers and sellers with an agent.", btn: "View Design Concept", url: "https://real-estate.yveriel-simbajon.workers.dev/", images: ["web-realestate-3.jpg", "web-realestate.jpg", "web-realestate-4.jpg", "web-realestate-2.jpg", "web-realestate-5.jpg", "web-realestate-6.jpg"] },
  { group: "Website Design Concept", title: "Tutoring Centre", desc: "A tutoring website concept that shows programs by year level, clear pricing and a two-step free assessment booking.", btn: "View Design Concept", url: "https://themariaoffice.com/concepts/tutoring/", images: ["web-tutoring.jpg", "web-tutoring-2.jpg", "web-tutoring-3.jpg", "web-tutoring-4.jpg", "web-tutoring-5.jpg"] },
  { group: "Website Design Concept", title: "Cleaning Services", desc: "A cleaning services website concept with an instant quote calculator, room-by-room checklist and online booking.", btn: "View Design Concept", url: "https://themariaoffice.com/concepts/cleaning/", images: ["web-cleaning.jpg", "web-cleaning-2.jpg", "web-cleaning-3.jpg", "web-cleaning-4.jpg", "web-cleaning-5.jpg"] }
];
