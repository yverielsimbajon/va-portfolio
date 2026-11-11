/* One entry per job application. Open the page with  /cv/?job=<key>  (or /cv/<folder>/ for a short link).
   What changes per job: label, headline, summary, highlighted keywords, section order, which work tabs show first,
   which experience bullets come first (focus tags), the "job match" table and the email subject.
   Keep every claim true. If she has not done something, say "ready to learn", never "experienced". */
window.RESUME_JOBS = {

  default: {
    label: "",
    headline: "All-in-One Virtual Assistant",
    sub: "Admin · Websites · CRM · Social Media · Support",
    tagline: "One trusted specialist for the work behind your business.",
    summary: "Virtual Assistant with 5+ years of experience supporting business owners and remote teams in Australia, the United States and Europe. I handle admin and operations, CRM and automation, websites, social media and customer support, so you work with one person instead of several freelancers.",
    keywords: [],
    focus: ["admin", "crm", "social", "web", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workTabs: ["results", "designs", "reels", "crm", "admin", "websites"],
    match: [],
    workTitle: "See it, not just read it",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Hiring a Virtual Assistant"
  },

  "reva-26": {
    label: "Real Estate VA (REVA 26)",
    headline: "Real Estate Virtual Assistant",
    sub: "Social Media · Canva Design · CRM",
    tagline: "A long-term VA for your social media, content and CRM.",
    summary: "Long-term Virtual Assistant with 5+ years of experience supporting business owners and remote teams in Australia, the United States and Europe. I plan and post content on Facebook, Instagram and LinkedIn, design Canva graphics and social posts, and manage the CRM: inputting leads, tagging and segmenting contacts, and setting up follow-up sequences. I grew a client's post views 50% to 265K and followers 147% in 90 days, and I handle admin and tech tasks (email, scheduling, basic troubleshooting) with strong attention to detail and solid written English.",
    keywords: ["Real Estate VA", "social media", "Canva", "CRM", "follow-up sequences", "tag and segmenting contacts", "tagging and segmenting contacts", "inputting leads", "input leads", "lead", "leads", "Facebook", "Instagram", "LinkedIn", "admin and tech tasks", "attention to detail", "written English", "long-term"],
    focus: ["social", "design", "crm", "leads", "admin", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workBlocks: ["designs", "reels", "crm", "smm", "emails"],
    workTabs: ["designs", "results", "crm", "websites", "reels", "smm"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Plan & post content on Facebook, Instagram, LinkedIn", proof: "I plan, design and schedule posts every week with Meta Business Suite. Result for one client: post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Design listing graphics, flyers, and social posts in Canva", proof: "I design posters, promos, vouchers, event graphics and short videos in Canva for several brands. Real estate listing graphics would be new content, but the same skill.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Manage our CRM: input leads, tag/segment contacts, set up follow-up sequences", proof: "I manage a GoHighLevel CRM daily: automated SMS and email follow-ups, confirmations and reminders in 7 workflow folders. I also kept lead records in Zoho CRM, and I use HubSpot.", status: "yes", tab: "crm", cta: "See my CRM workflows" },
      { req: "Experience with at least one CRM (you use Lofty)", proof: "GoHighLevel, Zoho CRM and HubSpot. I learn new CRMs quickly, so Lofty will be a short step.", status: "yes", tab: "crm", cta: "See the CRM work" },
      { req: "Generate leads", proof: "I built a 1,400+ contact lead database with Apollo.io, Seamless.AI and Google Sheets and supported outreach. I also built websites that bring in quote enquiries.", status: "yes", tab: "crm", cta: "See the lead database" },
      { req: "Light admin/tech tasks: email, scheduling, basic troubleshooting", proof: "Calendar, inbox and scheduling for owners and a CEO, 200+ calendar events, plus weekly progress reports.", status: "yes", tab: "admin", cta: "See admin work" },
      { req: "Lead-gen ads (Facebook/Instagram Ads, Google Ads)", proof: "I am Google Analytics and Digital Marketing certified and I know the Meta Business Suite. Running paid ads for you is new for me, and I would learn your setup properly from day one.", status: "learn", tab: "results", cta: "See my reporting" },
      { req: "Real estate marketing experience", proof: "Real estate is a new niche for me. I already designed real estate website concepts, and I bring the same systems, speed and attention to detail.", status: "learn", tab: "websites", cta: "See the real estate concept" },
      { req: "Solid written English and strong attention to detail", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write clear client messages and weekly reports.", status: "yes" },
      { req: "Reliable internet + backup power/internet", proof: "65 Mbps fiber with a backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" },
      { req: "A long-term working relationship, not a short-term gig", proof: "That is what I want too. I have supported the same clients for months and I stay on as ongoing support.", status: "yes" }
    ],
    workTitle: "Effective graphic designs I create",
    portfolioLabel: "View my REVA Portfolio",
    emailSubject: "REVA 26"
  },
  "jbe-ghl": {
    label: "GoHighLevel VA (Justin Bucknell Electrical, UK)",
    headline: "GoHighLevel Expert",
    headlinePill: true,
    headlineBadge: "5+ Years",
    hideSummary: true,
    sub: "GoHighLevel Specialist · CRM · Pipelines · Workflows · Lead Admin",
    tagline: "",
    summary: "Organised, reliable Virtual Assistant with hands-on GoHighLevel experience managing the CRM, enquiries and sales pipeline for business owners in Australia, the United States and Europe. Every day I manage contacts, opportunities, pipelines, tasks, tags and workflows: 61 booking calendars, 7 workflow folders of automations, follow-up sequences and appointment booking. I keep customer records accurate, follow documented processes, flag problems, and send a short daily update. Strong written English, excellent attention to detail, and a reliable setup with backup power and internet.",
    keywords: ["GoHighLevel", "CRM", "contacts", "opportunities", "pipelines", "pipeline", "tasks", "tags", "workflows", "workflow", "automations", "follow-up", "enquiries", "appointment booking", "daily update", "attention to detail", "written English", "documented processes", "reliable"],
    focus: ["crm", "leads", "admin", "support", "english", "ops"],
    order: ["results", "work", "education", "why", "contact"],
    workCards: ["ghlRecords", "ghlPipeline", "ghlConvos", "ghlBooking", "ghlWorkflows", "ghlUpdates", "ghlLeads"],
    resultsShots: "none",
    resultsNote: "GoHighLevel screenshots: calendars, workflows, follow-ups and orders I manage.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "GoHighLevel work I do",
    portfolioLabel: "View my GHL Portfolio",
    emailSubject: "GoHighLevel Virtual Assistant"
  },
  "cdc-research": {
    label: "Grants Research & Administrative Coordinator (Chicago Defender Charities)",
    headline: "Grants Research & Administrative Coordinator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Asana · Online Research · Google Drive, Docs, Sheets · Microsoft Office · Deadlines",
    tagline: "",
    summary: "Dependable, organized virtual coordinator with 5+ years of experience supporting business owners in Australia, the United States and Europe. I do online research and verify details, prepare short summaries, create and maintain tasks, deadlines and reminders in Asana, and track opportunities from initial research through to the final outcome. I organize documents and records in Google Drive, Docs and Sheets, follow up consistently with team members, and keep leadership informed with a brief weekly update. Clear written English, strong attention to detail, reliable internet, and I work independently.",
    keywords: ["Grants Research", "Administrative Coordinator", "virtual coordinator", "Asana", "online research", "research", "verify", "short summaries", "summaries", "tasks", "deadlines", "reminders", "assigned staff", "track opportunities", "opportunities", "Google Drive", "Docs", "Sheets", "Google Docs", "Google Sheets", "Microsoft Office", "spreadsheets", "organized", "organize", "electronic files", "follow up", "follow-up", "follow-ups", "leadership", "weekly update", "upcoming and overdue tasks", "attention to detail", "written English", "independently", "reliable internet", "dependable"],
    focus: ["admin", "ops", "leads", "english", "support"],
    order: ["results", "work", "education", "why", "contact"],
    workCards: ["cdcResearch", "cdcTracker", "cdcDrive", "cdcFollow", "cdcUpdates"],
    workIntro: "Real work matched to what you asked for: research, trackers and deadlines, organized files, follow-ups and weekly updates. Tap a picture to enlarge it.",
    resultsShots: "none",
    resultsNote: "Research, tracking and organized records I handle every day.",
    stats: ["years", "leads", "events", "calendars"],
    workTitle: "Research & coordination work I do",
    portfolioLabel: "View my Portfolio",
    emailSubject: "CDC RESEARCH"
  },
  "plush-rose": {
    label: "Social Media & Brand Content Coordinator (Plush Rose a Blowout Bar Salon)",
    headline: "Social Media & Brand Content Coordinator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Instagram · Facebook · Canva · Meta Business Suite · Reels · Branded Content",
    tagline: "",
    summary: "Creative, organized Social Media & Brand Content Coordinator with 5+ years of experience in social media management, graphic design and digital marketing for U.S., Australian and European businesses, including beauty, wellness and other service-based businesses. I manage Instagram and Facebook business accounts, build the monthly social media content calendar, write natural captions, and design clean, professional, branded graphics in Canva. I create Reels and short-form video content in CapCut, support email and text marketing and Google Business Profile updates, track performance in Meta Business Suite, and send a brief weekly update. I grew a client's post views 50% to 265K and followers 147% in 90 days. Excellent written English, and I work independently.",
    keywords: ["Social Media & Brand Content Coordinator", "social media management", "social media", "graphic design", "digital marketing", "Instagram", "Facebook", "business accounts", "social media strategy", "content pillars", "content calendar", "monthly social media content calendar", "captions", "Reels", "stories", "short-form video", "short-form video content", "branded graphics", "branded content", "promotional graphics", "service spotlights", "Canva", "Meta Business Suite", "CapCut", "branding", "consistent branding", "visual consistency", "marketing strategy", "email and text marketing", "Google Business Profile", "online booking", "digital library", "engagement", "weekly update", "weekly updates", "beauty", "salon", "wellness", "service-based businesses", "U.S.-based businesses", "written English", "independently", "organized", "dependable", "creative"],
    focus: ["social", "design", "web", "admin", "english", "support"],
    order: ["results", "work", "education", "why", "contact"],
    workBlocks: ["designs", "reels", "emails"],
    workCards: ["plushStrategy", "plushBranding", "plushCalendar", "plushTrack", "plushEmail", "plushLibrary"],
    workIntro: "Real work matched to what you asked for: social media strategy, consistent branding, content calendar, performance tracking, email and text marketing, and weekly updates. Tap a picture to enlarge it.",
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Branded content I create",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media & Brand Content Coordinator"
  },
  "flourish-dr-lolu": {
    label: "Virtual Assistant, Flourish with Dr Lolu (UK)",
    headline: "Virtual Assistant for Coaches & Wellness Brands",
    sub: "Newsletters · Canva · Social Media · Website Support",
    tagline: "",
    summary: "Organised, detail-minded Virtual Assistant with 5+ years of experience supporting business owners in Australia, the United States and Europe, including a wellness and holistic therapy business. I schedule and design content for Instagram, Facebook and LinkedIn in Canva, add captions to short videos and edit Reels, build website pages and landing pages, and run email follow-up sequences with sign-up, tags and automations. I read every brief in full and follow it exactly, check my work before I send it, send a clear end-of-day update, keep everything confidential, and never publish anything without sign-off.",
    keywords: ["Mailchimp", "Canva", "Instagram", "LinkedIn", "newsletter", "captions", "short videos", "landing pages", "landing page", "email sequences", "automated sequence", "sign-up", "tags", "Google Workspace", "Drive", "Calendar", "end-of-day update", "brief", "confidential", "wellness", "attention to detail"],
    focus: ["social", "design", "web", "crm", "admin", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workBlocks: ["designs", "websites", "reels", "smm", "emails", "crm"],
    workTitle: "Canva designs I create for wellness brands, real estate and more",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Flourish on Thursdays: Virtual Assistant application"
  },
  "cupcake-smm": {
    label: "Social Media Manager (Cupcake Brand, California)",
    headline: "Social Media Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Later · Instagram Reels · Canva · Photoshop · CapCut · Social Media Ads",
    tagline: "",
    summary: "Creative, reliable, detail-oriented Social Media Manager with 5+ years of experience in social media management, graphic design and digital marketing for beauty, wellness and lifestyle brands. I manage and schedule content, edit Instagram Reels and short-form videos in CapCut, create graphics and promotional posts in Canva and Photoshop. I grew a client's post views 50% to 265K and followers 147% in 90 days, and I can work California business hours.",
    keywords: ["Social Media Manager", "Later", "Instagram Reels", "Reels", "short-form videos", "short-form video", "graphics", "promotional posts", "social media ads", "paid social media ad creatives", "captions", "English grammar", "spelling", "brand-appropriate messaging", "social media SEO", "keywords", "hashtags", "content planning", "creative ideas", "consistent brand aesthetic", "brand aesthetic", "Meta Ads", "campaign management", "Canva", "Photoshop", "CapCut", "Adobe Premiere Pro", "DaVinci Resolve", "scheduling platforms", "Instagram", "content strategy", "social media trends", "feminine", "lifestyle", "beauty", "food", "clean, modern", "visually appealing", "detail-oriented", "organized", "punctual", "dependable", "proactive", "fresh ideas", "California business hours", "on time", "quality standards", "written and spoken"],
    focus: ["social", "design", "english", "admin", "web", "support"],
    order: ["results", "work", "education", "why", "contact"],
    workBlocks: ["designs", "reels", "feeds", "cupSchedule", "cupMore", "emails"],
    workIntro: "Real work matched to what you asked for: scheduling, Reels, graphics, captions, content planning, a consistent brand aesthetic and on-time delivery. Tap a picture to enlarge it.",
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic design: graphics and promotional posts I create",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media Manager (Cupcake Brand)"
  },
  "family-care-plan": {
    label: "Social Media Assistant, Family Care Plan",
    headline: "Social Media Assistant (AI-Savvy)",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Reels in CapCut · Canva Carousels · Hooks & Captions · Scheduling · Viral Research",
    tagline: "",
    summary: "Reliable, detail-minded Social Media Assistant with 5+ years of experience supporting business owners in Australia, the United States and Europe. I edit Reels and short-form video in CapCut, design branded graphics and carousels in Canva, write hooks and captions that sound human, and schedule across Instagram and Facebook with Meta Business Suite. Based in the Philippines, with stable fiber internet and backup power.",
    keywords: ["Reels", "short-form video", "CapCut", "Canva", "carousels", "hooks", "captions", "Claude", "ChatGPT", "human", "viral research", "spreadsheet", "Instagram", "TikTok", "Facebook", "Meta Business Suite", "Metricool", "schedule", "scheduling", "approval", "weekly report", "reliable", "honest", "feedback", "excellent written English", "backup plan"],
    focus: ["social", "design", "english", "admin", "support", "leads"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workBlocks: ["socialDesigns", "reels", "socialFeeds", "socialBrand", "socialStrategy", "emails"],
    workIntro: "Real work matched to what you asked for: Reels in CapCut, Canva designs, content planning, a consistent feed and tracked results. Tap a picture to enlarge it.",
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "reached", "followers", "interactions"],
    workTitle: "Reels and Canva designs I create",
    portfolioLabel: "View my Portfolio",
    emailSubject: "CARE - Social Media Assistant (AI-Savvy)"
  },
  "hids-engagement": {
    label: "Facebook Ad Engagement Moderator, Hids Group",
    headline: "Social Media Engagement & Comment Moderator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Facebook & Instagram Comments · Community Management · Friendly Replies · Spam Control",
    tagline: "",
    summary: "Responsive, reliable Virtual Assistant with 5+ years of experience supporting business owners in Australia, the United States and Europe. I reply to comments and messages on Facebook and Instagram in a friendly, professional tone, keep inboxes and pages clean, and flag important issues to the team. I grew a client's post views 50% to 265K and followers 147% in 90 days. Excellent written English, stable fiber internet with backup power, and I work independently.",
    keywords: ["comments", "comment management", "community management", "Facebook", "Instagram", "ads", "reply", "questions", "friendly", "professional", "spam", "flag", "complaints", "templates", "written English", "responsive", "reliable", "independently", "stable internet"],
    focus: ["social", "support", "english", "admin"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workBlocks: ["socialDesigns", "socialFeeds", "socialStrategy", "emails"],
    workIntro: "Real work matched to what you asked for: Facebook and Instagram content, replying to comments and messages, and tracked results. Tap a picture to enlarge it.",
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Social media work I do",
    portfolioLabel: "View my Portfolio",
    emailSubject: "ENGAGEMENT PRO"
  },
  "photogenic-au": {
    label: "Lead Generation & Sponsorship Outreach VA (Miss Photogenic Australia 2027)",
    headline: "Lead Generation & Sponsorship Outreach VA",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Lead Research · Recruitment Outreach · Sponsorship · Follow-Up · Weekly Reports",
    tagline: "",
    crown: { photo: "pageant-hero.webp", text: "I was crowned as Miss Philippines Earth Mindanao-Water 2022" },
    photo: "pageant-hero.webp",
    aboutPics: ["pageant-02.webp", "pageant-03.webp", "pageant-01.webp", "about-portrait.jpg"],
    summary: "Virtual Assistant with 5+ years of experience supporting business owners in Australia, the United States and Europe. I research leads, run outreach and follow-ups, and keep accurate records with a weekly update, backed by a 1,400+ contact lead database. Excellent written and spoken English.",
    keywords: ["lead generation", "recruitment", "sponsorship", "outreach", "prospective contestants", "contestants", "modelling", "fashion", "beauty", "events", "photography", "community organisations", "follow up", "follow-up", "follow-ups", "sponsors", "leads", "records of leads", "communications", "weekly updates", "weekly update", "written and spoken English", "social media outreach", "email communication", "independently", "measurable targets", "research", "relationship-building"],
    focus: ["leads", "social", "english", "admin", "support", "crm"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workBlocks: ["pageant", "pageantJudge"],
    workCards: ["pgLeads", "pgFollow", "pgReports"],
    workIntro: "Real work matched to what you asked for: lead research, outreach and follow-up, and accurate records with a weekly update. Tap a picture to enlarge it.",
    resultsShots: "none",
    resultsNote: "Lead research, outreach and reporting I handle every day.",
    stats: ["leads", "years", "events", "calendars"],
    workTitle: "Pageant and modelling background",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Miss Photogenic Australia 2027 - Lead Generation & Sponsorship VA"
  },
  "beauty-va": {
    label: "Virtual Assistant, Beauty Industry (Philippines, full-time)",
    headline: "Beauty & Wellness Virtual Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Bookings · Client Enquiries · Follow-Ups · CRM · Reception Support",
    tagline: "",
    summary: "Virtual Assistant with 5+ years of experience, including 3 years supporting beauty and aesthetic brands. I manage bookings, client enquiries and follow-ups, and keep every record accurate in GoHighLevel. Excellent English, and I want a stable long-term role.",
    keywords: ["beauty", "wellness", "aesthetic", "salon", "spa", "bookings", "appointments", "booking", "client bookings", "customer enquiries", "enquiries", "rescheduling", "cancellations", "appointment confirmations", "follow up", "follow-up", "follow-ups", "client records", "booking records", "CRM", "booking systems", "customer service", "reception", "promotions", "administration", "Microsoft", "Google", "written and spoken English", "attention to detail", "long-term", "Zenoti"],
    focus: ["support", "admin", "crm", "english", "leads", "social"],
    order: ["beauty", "results", "work", "experience", "skills", "why", "contact"],
    expOrder: ["mk", "ls", "eo", "kk", "fl", "as"],
    beauty: {
      eyebrow: "Beauty industry experience",
      title: "What you asked me to include",
      lede: "Straight answers to your five application points, including what I have not done yet.",
      cards: [
        { k: "1 · Beauty experience", h: "3 years in beauty and aesthetics, plus a wellness brand today", items: ["Jul 2022 – Sep 2025: Marketing Representative for Blanche Butuan Aesthetic Clinic, Amazing Beauty Skincare and Vitacel Products (Philippines)", "Handled client enquiries, bookings and follow-ups, and represented the brands at events and promotions", "Jan 2026 – now: VA for a wellness brand in Australia, managing its bookings, CRM and client enquiries"], note: "My experience is on the marketing and client-support side, not as a salon receptionist or therapist." },
        { k: "2 · Booking systems", h: "GoHighLevel bookings, ready to learn Zenoti", items: ["GoHighLevel: 61 booking calendars, 200+ calendar events, confirmations and reminders by email and SMS", "Google Calendar, Zoho CRM and HubSpot for client and booking records", "Not used yet: Zenoti, Fresha, Timely, Kitomba or Mindbody. I would learn Zenoti properly from day one."] },
        { k: "3 · Types of beauty businesses", h: "Clinic, skincare and wellness", items: ["Aesthetic clinic (Blanche Butuan Aesthetic Clinic)", "Skincare and beauty products (Amazing Beauty Skincare, Vitacel Products)", "Wellness brand in Australia (sessions, events and bookings)"] },
        { k: "4 · Day-to-day I can run", h: "Bookings, enquiries and records", items: ["Book, reschedule and cancel appointments and send confirmations", "Reply to enquiries by email, Messenger and online chat", "Keep client and booking records accurate, with a daily update to the owner"], note: "Phone support is not something I have done much of yet, and I am happy to practise it." },
        { k: "5 · Why me", h: "Reliable, detail-minded and here for the long term", p: "I have supported the same clients for months, I write clear, friendly English, I check every booking twice, and I have a stable setup: 65 Mbps fiber, backup Wi-Fi, laptop and power. I want a stable role where I can grow with the business." }
      ]
    },
    workBlocks: [],
    workCards: ["ghlConvos", "ghlBooking", "pgFollow", "ghlPipeline", "plushEmail"],
    workIntro: "Real booking, enquiry and follow-up work for a wellness brand, matched to what you asked for. Tap a picture to enlarge it.",
    resultsShots: "none",
    resultsNote: "Bookings, follow-ups and reporting I handle every day.",
    stats: ["calendars", "events", "years", "views"],
    workTitle: "Booking, CRM and client support work",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Virtual Assistant, Beauty Industry application"
  },
  "rg-gva": {
    label: "General Virtual Assistant (Recruitment Garage, Brisbane AU)",
    headline: "Your All-In-One Virtual Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Admin & Operations \u00b7 Marketing & Content \u00b7 Community Portal \u00b7 Research & Projects",
    tagline: "",
    summary: "General Virtual Assistant with 5+ years supporting business owners in Australia, the US and Europe: admin, task trackers and deadlines, marketing content, CRM follow-ups and online research, with a daily update. RG — I've read the full job post.",
    keywords: ["General Virtual Assistant", "organised", "dependable", "resourceful", "administration", "business operations", "routine emails", "client communications", "templates", "calendars", "deadlines", "task lists", "project trackers", "spreadsheets", "databases", "contact lists", "follow up", "follow-up", "follow-ups", "outstanding tasks", "Google Drive", "files", "folders", "documents", "invoices", "forms", "records", "recurring processes", "standard operating procedures", "SOPs", "LinkedIn", "LinkedIn outreach", "introductory messages", "recruitment agency founders", "marketing", "content", "social media", "email marketing", "blogs", "content calendars", "marketing trackers", "publishing schedules", "podcast", "video content", "editing tasks", "gathering assets", "organising files", "uploading", "publishing", "website pages", "landing pages", "links", "digital resources", "portal", "membership", "online courses", "course materials", "member access", "invitations", "registrations", "member questions", "enquiries", "routine queries", "live sessions", "workshops", "community events", "troubleshooting", "escalating", "online research", "findings", "projects", "marketing campaigns", "website updates", "monitor project progress", "testing new tools", "learning platforms", "improve existing processes", "reduce repetitive manual work", "highly organised", "reliable", "accountable", "proactive", "detail-oriented", "clear communicator", "adaptable", "tech-comfortable", "discreet", "confidential", "independent", "Google Workspace", "Gmail", "Google Docs", "Google Sheets", "CRM", "email marketing platforms", "project management software", "Canva", "Trello", "GHL", "GoHighLevel", "Riverside", "Descript", "Vimeo", "Brisbane", "eight-hour", "B2", "English proficiency", "RG"],
    focus: ["admin", "ops", "leads", "english", "support", "social", "web", "crm", "design"],
    order: ["results", "work", "beauty", "experience", "skills", "why", "contact"],
    expOrder: ["ls", "eo", "mk", "kk", "fl", "as"],
    beauty: {
      nav: "Your checklist",
      eyebrow: "RG",
      title: "Everything your application asked for",
      lede: "Quick answers to each point, including what I have not used yet.",
      cards: [
        { k: "1 \u00b7 English proficiency", h: "C1 / Advanced, above the B2 you asked for", p: "Online English teacher, English radio broadcasting awardee and former Editor-in-Chief. I write client emails and reports daily and I am comfortable with native speakers." },
        { k: "2 \u00b7 Verifiable proof of VA work", h: "Named clients, live work and references", p: "Wellness Brand in Australia (now), Landscaping Services in Australia (website + social media), EO Staff US agency (lead research). Every screenshot on this page is from a real client account." },
        { k: "3 \u00b7 Admin, marketing, content & project support", h: "The same mix of work you described", p: "Admin, trackers and follow-ups, content calendars and Canva graphics, online research and SOPs \u2014 see the work samples above." },
        { k: "4 \u00b7 Circle, Riverside, Descript, Vimeo", h: "Not used yet \u2014 I would learn them properly from day one", p: "Daily tools: GoHighLevel, Canva, Trello, Asana, Notion, Meta Business Suite. Circle, Riverside, Descript and Vimeo would be new, and I would rather say so now than claim experience I do not have." },
        { k: "5 \u00b7 Brisbane hours", h: "Yes \u2014 I can work eight hours a day on a Brisbane schedule", p: "I already work Australian hours for other clients, with 65 Mbps fiber, backup Wi-Fi, laptop and power." },
        { k: "6 \u00b7 Rate", h: "Yes \u2014 I accept $13 AUD per hour", p: "Full-time, on a Brisbane schedule, looking for a long-term role where I can take ownership and grow with the team." }
      ]
    },
    workSections: [
      { type: "intro", text: "Real work matched to what you asked for, proof first: admin and automations, then websites I've built, then social media and research. Tap a card or picture to see more." },
      { type: "cards", keys: ["cdcTracker", "ghlWorkflows", "cdcFollow", "ghlBooking", "cdcUpdates"] },
      { type: "block", key: "websites" },
      { type: "cards", keys: ["plushCalendar", "cupCaptions", "ghlLeads", "pgReports"] }
    ],
    resultsShots: "none",
    resultsNote: "Admin, automations, websites and content I handle every day.",
    stats: ["years", "events", "calendars", "leads"],
    workTitle: "Real work I've already done",
    portfolioLabel: "View my Portfolio",
    emailSubject: "RG - General Virtual Assistant application"
  },
  "bdm-anz": {
    label: "Business Development (Engineering & Construction, Australia and New Zealand)",
    headline: "Business Development & Lead Generation",
    headlinePill: true,
    headlineBadge: "5+ Years",
    intro: { video: "../images/intro-bdm.mp4", poster: "../images/intro-bdm-poster.jpg" },
    crown: { photo: "eng-hero-hardhat.webp", photo2: "eng-hero-grad.webp", icon: "&#9937;", text: "Civil Engineering graduate" },
    aboutPics: ["eng-hardhat.webp", "eng-survey.webp", "eng-ojt-cert.webp", "eng-office.webp"],
    sub: "Engineering & Construction · Prospect Research · LinkedIn & Email Outreach · CRM · Follow-Up",
    tagline: "",
    summary: "Civil Engineering graduate with 5+ years supporting business owners in Australia, the United States and Europe. I research prospects and decision-makers, run outreach and follow-ups, and keep every lead accurate in the CRM with a weekly report, backed by a 1,400+ contact lead database. I also coordinate lead generation for a National Pageant in Australia.",
    keywords: ["Civil Engineering", "project intern", "planning office", "National Pageant in Australia", "engineering", "construction", "consultancies", "project opportunities", "business development", "prospect research", "prospects", "prospect lists", "decision-makers", "decision makers", "lead generation", "leads", "LinkedIn", "email outreach", "outreach", "follow up", "follow-up", "follow-ups", "nurture", "CRM", "HubSpot", "Apollo", "pipeline", "pipeline reports", "weekly report", "weekly reports", "qualified", "meeting briefs", "discovery calls", "appointment", "appointments", "booking", "verified", "organised", "Google Workspace", "Zoom", "Microsoft Teams", "Australia", "New Zealand", "Melbourne", "independently", "written and spoken English"],
    focus: ["leads", "crm", "english", "admin", "support", "social"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    workBlocks: [],
    workCards: ["engPlanning", "engSurvey", "bdmLeads", "engPageant", "pgFollow", "pgReports"],
    workIntro: "Real work matched to what you asked for: engineering project experience, prospect research, outreach and follow-up, booking meetings, and accurate records with a weekly report. Tap a picture to enlarge it.",
    resultsShots: "none",
    resultsNote: "Prospect research, follow-up and reporting I handle every day.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Lead generation and CRM work I do",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Business Development Manager (ANZ) application"
  },
  "amb-va": {
    label: "Virtual Assistant (Alanah Mae Beauty Academy & Alanah Mae Creative)",
    headline: "Creative Virtual Assistant for Beauty Education",
    headlinePill: true,
    headlineBadge: "5+ Years",
    crown: { photo: "pageant-portal-blurred.webp", shot: true, icon: "&#128203;", alt: "Maria Simbajon's Staff Portal for a National Pageant in Australia, pageant name blurred", text: "I handle email and coordination in a National Pageant within Australia" },
    sub: "Canva · CapCut · Instagram & Email · Notion · Student Admin · Thinkific",
    tagline: "",
    summary: "Creative, organised Virtual Assistant with 5+ years of experience in graphic design, Canva and CapCut content, email and Instagram support, Notion planning and daily admin, plus email coordination for a National Pageant in Australia.",
    keywords: ["Virtual Assistant", "Alanah Mae Beauty Academy", "Alanah Mae Creative", "Canva", "CapCut", "InShot", "Instagram Reels", "Reels", "carousel posts", "social media graphics", "Customer Communication", "emails", "Instagram enquiries", "outreach", "Email Marketing", "email campaigns", "Student Administration", "training packs", "feedback forms", "course resources", "follow-up emails", "Course Management", "Thinkific", "training manuals", "online course content", "Content Planning", "Notion", "content calendars", "General Administration", "invoices", "organising files", "beauty", "graphic design", "graphic designer", "pageant", "National Pageant in Australia", "recruiter", "coordinator", "recruitment", "contestants", "applicants", "hourly rate", "weekly availability", "reliable", "creative", "long-term", "attention to detail", "written English"],
    focus: ["design", "social", "admin", "english", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    heroReel: "ambReel",
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Content Creation: Reels, carousel posts and social media graphics in Canva, CapCut or InShot", proof: "I design posters, carousels and social graphics in Canva and edit Reels in CapCut for several brands.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Customer Communication: emails and Instagram enquiries, follow-ups, outreach", proof: "I reply to enquiries by email and Instagram, follow up with leads and run outreach and lead-generation, including for a National Pageant in Australia.", status: "yes", tab: "crm", cta: "See the lead work" },
      { req: "Email Marketing: creating and scheduling email campaigns", proof: "I write and schedule email and text marketing campaigns for a wellness brand.", status: "yes" },
      { req: "Student Administration: training packs, follow-up emails, feedback forms, course resources", proof: "I organise records, send follow-ups and keep files and resources tracked and up to date for every client.", status: "yes" },
      { req: "Course Management: Thinkific", proof: "New for me — I would learn Thinkific properly from day one, the way I picked up GoHighLevel.", status: "learn" },
      { req: "Content Planning: content calendars in Notion", proof: "I built a Notion hub for content calendars, planning and SOPs, used daily for a wellness brand.", status: "yes", tab: "crm", cta: "See my content planning" },
      { req: "General Administration: invoices, files, day-to-day tasks", proof: "Invoices, organised Google Drive files and daily admin for business owners.", status: "yes" },
      { req: "An interest in beauty and social media is a bonus", proof: "More than an interest: I am a recruiter and coordinator for a National Pageant in Australia, responding to contestants and applicants every day, and graphic design is part of my daily work too, so beauty and creative content are both close to home.", status: "yes", tab: "designs", cta: "See my pageant recruiter portal" }
    ],
    heroFeed: "ambFeed",
    heroCarousels: [
      { title: "Carousel 1 · Alanah Color Palette Style", sub: "Her brand colours & fonts · 8 slides", images: ["amb-trial-v1-1.jpg", "amb-trial-v1-2.jpg", "amb-trial-v1-3.jpg", "amb-trial-v1-4.jpg", "amb-trial-v1-5.jpg", "amb-trial-v1-6.jpg", "amb-trial-v1-7.jpg", "amb-trial-v1-8.jpg"] },
      { title: "Carousel 2 · Gen-Z Style", sub: "Polaroid, stickers & stars · 8 slides", images: ["amb-trial-gz-1.jpg", "amb-trial-gz-2.jpg", "amb-trial-gz-3.jpg", "amb-trial-gz-4.jpg", "amb-trial-gz-5.jpg", "amb-trial-gz-6.jpg", "amb-trial-gz-7.jpg", "amb-trial-gz-8.jpg"] }
    ],
    moreCarousels: [
      { title: "Carousel 3 · Conservative Business Style", sub: "Brown palette · “3 Things Every Beauty Business Needs”", images: ["amb-c1-1.jpg", "amb-c1-2.jpg", "amb-c1-3.jpg", "amb-c1-4.jpg", "amb-c1-5.jpg"] },
      { title: "Carousel 4 · Gen-Z Style", sub: "Photo-led, trendy · “Brow Era”", images: ["amb-gz-1.jpg", "amb-gz-2.jpg", "amb-gz-3.jpg", "amb-gz-4.jpg", "amb-gz-5.jpg"] }
    ],
    workTitle: null,
    workSections: [
      { type: "block", key: "ambCarouselsOld" },
      { type: "block", key: "ambFeedMore" },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "emails" },
      { type: "cards", part: "support", keys: ["plushEmail", "cdcTracker", "ambAdmin"] }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      designs: { label: "Social Media Design", title: "Graphic Design I Create for You", text: "Posters, promos, vouchers and event graphics I design for clients in Canva." },
      reels: { label: "More Reels I Edit", title: "Reels for Other Clients", text: "Edited with captions and music in CapCut, ready for Instagram and Facebook." },
      support: { label: "Admin & Communication", title: "Email, Content Planning & Day-to-Day Admin", text: "Real work matched to what you asked for: email and Instagram communication, Notion content planning, and day-to-day admin." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    portfolioLabel: "View my Portfolio",
    emailSubject: "Virtual Assistant application - Alanah Mae Beauty Academy & Creative"
  },
  "samui-sales": {
    label: "Sales & Guest Experience Specialist (Koh Samui Tourism Group - Jungle Quad / Jungle 4x4 Safari / Your Samui Booking Team / Koh Samui Taxis, Thailand)",
    headline: "Travel Sales & Booking Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "WhatsApp Business · Zoho CRM · Chat-Based Sales · Quotes & Bookings · Fast Follow-Ups",
    tagline: "",
    summary: "Virtual Assistant with 5+ years of experience in chat-based sales, customer enquiries and CRM management for business owners in Australia, the United States and Europe. I reply fast to leads, recommend the right options, build quotes, close bookings and follow up before quotes go cold, keeping every lead accurate in the CRM. Backed by a 1,400+ contact lead database and excellent written English.",
    keywords: ["sales", "chat-based sales", "WhatsApp", "WhatsApp Business", "Instagram", "Facebook", "email", "leads", "incoming leads", "guest", "guests", "quotes", "itineraries", "close", "closing", "booking", "bookings", "payment", "cross-sell", "follow up", "follow-up", "follow-ups", "open quotes", "CRM", "Zoho", "Zoho CRM", "coordinate", "team", "commission", "written English", "organised", "quick", "reliable internet", "backup connection", "Thailand", "tours", "travel", "hospitality"],
    focus: ["leads", "crm", "support", "english", "admin"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Reply to incoming leads on WhatsApp, Instagram, Facebook and email, fast", proof: "I check every new enquiry, follow it up and monitor conversations across GoHighLevel, Messenger and WhatsApp, so no guest is left waiting.", status: "yes", tab: "crm", cta: "See my enquiry work" },
      { req: "Find out what each guest wants and recommend the right tour or combination", proof: "I read every enquiry closely and match replies to what the person actually asked for, the same way I qualify leads before they go into the pipeline.", status: "yes", tab: "crm", cta: "See my pipeline work" },
      { req: "Build quotes and itineraries, close the booking, and take payment through our system", proof: "I support appointment booking and keep accurate notes on every booking. Taking payment through a new system would be new for me, and I would learn it properly from day one.", status: "learn", tab: "crm", cta: "See my booking work" },
      { req: "Cross-sell across the brands", proof: "New for me by that name, but it is the same instinct I use recommending the right service to the right enquiry. I would learn your four brands fast and start suggesting the right fit.", status: "learn" },
      { req: "Follow up on open quotes before they go cold", proof: "I follow up with people who have not replied or confirmed, by email and message, so quotes and bookings do not get lost.", status: "yes", tab: "crm", cta: "See my follow-up work" },
      { req: "Keep every lead and booking up to date in our CRM", proof: "I keep contact records and lead data consistent and tidy in GoHighLevel and Zoho CRM, with accurate details on every record.", status: "yes", tab: "crm", cta: "See my CRM records" },
      { req: "Comfortable with WhatsApp Business, a CRM (you use Zoho) and Google tools", proof: "I reply to enquiries on WhatsApp, Messenger and email daily, and I already keep lead records in Zoho CRM, GoHighLevel and HubSpot, plus Google Workspace for docs and sheets.", status: "yes", tab: "crm", cta: "See the CRM work" },
      { req: "Excellent written English, warm, clear, never robotic", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write every guest reply to sound like a person, not a script.", status: "yes" },
      { req: "At least 2 years in sales, ideally travel, hospitality or chat-based sales", proof: "5+ years turning chat enquiries into bookings and closed leads for business owners, plus a 1,400+ contact lead database I built and worked for a US agency.", status: "yes", tab: "crm", cta: "See the lead database" },
      { req: "Coordinate with the team on the ground so the guest's day runs perfectly", proof: "I send a short daily update covering progress, outstanding tasks and issues, so nothing falls through the cracks between me and the team.", status: "yes", tab: "crm", cta: "See my daily updates" },
      { req: "Reliable internet, a backup connection and a quiet place to work", proof: "65 Mbps fiber with a backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" },
      { req: "Bonus: been to Thailand, or sold tours or experiences before", proof: "New for me — I have not sold tours specifically or visited Thailand yet, but I bring the same fast, warm, closing-focused chat sales from other industries.", status: "learn" }
    ],
    workCards: ["ghlConvos", "ghlPipeline", "ghlBooking", "pgFollow", "ghlLeads", "ghlUpdates"],
    workIntro: "Real work matched to what you asked for: fast replies to enquiries, quotes and bookings, follow-ups before they go cold, and accurate CRM records. Tap a picture to enlarge it.",
    resultsShots: "none",
    resultsNote: "Enquiries, bookings, follow-ups and CRM records I handle every day.",
    stats: ["leads", "years", "calendars", "events"],
    workTitle: "Sales follow-up and CRM work I do",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Sales Application - Jungle Quad & Your Samui Booking Team"
  },
  "admin-smm-sample": {
    label: "Administrative & Social Media Assistant (sample)",
    headline: "Administrative & Social Media Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Inbox & Calendar · Trackers · Canva · Reels · Meta Business Suite · Weekly Reports",
    tagline: "",
    codeWord: "JOB",
    summary: "Organised, reliable Administrative and Social Media Assistant with 5+ years of experience supporting business owners in Australia, the United States and Europe. I manage inboxes, calendars and trackers, design and schedule content in Canva and CapCut, and send a clear weekly update. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Administrative", "Social Media Assistant", "inbox", "calendar", "scheduling", "trackers", "spreadsheets", "Google Workspace", "Canva", "CapCut", "Reels", "Facebook", "Instagram", "Meta Business Suite", "content calendar", "captions", "weekly update", "weekly report", "attention to detail", "written English", "independently", "reliable"],
    focus: ["admin", "social", "design", "english", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Sample layout: replace each row with the exact lines from the job post. Tap a row for the proof.",
    match: [
      { req: "Manage email inbox and calendar", proof: "Calendar, inbox and scheduling for owners and a CEO, 200+ calendar events, plus weekly progress reports.", status: "yes", tab: "admin", cta: "See admin work" },
      { req: "Keep trackers, spreadsheets and files organised", proof: "Trackers, deadlines and Google Drive records kept accurate for every client.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Plan and schedule posts on Facebook and Instagram", proof: "I plan, design and schedule posts every week with Meta Business Suite. Post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Design graphics in Canva", proof: "Posters, promos, carousels and event graphics in Canva for several brands.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Edit short videos and Reels", proof: "I edit Reels and short-form video in CapCut.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Paid ads (if listed)", proof: "Running paid ads for you is new for me, and I would learn your setup properly from day one.", status: "learn" },
      { req: "Strong written English and attention to detail", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "admin", keys: ["cdcTracker", "plushCalendar", "ghlUpdates"] },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      admin:   { label: "Administrative Support", title: "Admin That Keeps Business Organized.", text: "Trackers, calendars, content calendars and weekly updates that keep every day running smoothly." },
      designs: { label: "Social Media Design", title: "Graphics That Make Posts Stand Out.", text: "Canva posts, carousels, promos and event graphics, ready to schedule on Facebook and Instagram." },
      reels:   { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, made for Instagram and Facebook." },
      feeds:   { label: "Content Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Administrative & Social Media Assistant application"
  },
  "ghl-course-builder": {
    label: "GoHighLevel Course Builder & Marketing Content VA",
    headline: "GoHighLevel Course Builder",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "GoHighLevel Specialist · Workflows & Automations · Websites & Landing Pages · Marketing Content · Video Editing",
    tagline: "",
    summary: "Organised Virtual Assistant with 5+ years of experience and hands-on GoHighLevel experience building workflows, automations and pipelines for business owners in Australia, the United States and Europe. I build websites and landing pages, design marketing content in Canva, and edit short-form video in CapCut. Task-oriented, with a portfolio of real client work to show.",
    keywords: ["Go High Level", "GoHighLevel", "GHL", "online courses", "course", "courses", "task oriented", "task-oriented", "marketing content", "books", "websites", "website", "portfolio", "portfolio of work", "video editing", "edit videos"],
    focus: ["crm", "web", "design", "english", "admin"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Experience with GoHighLevel, building and maintaining online courses", proof: "I work inside the GoHighLevel platform every day: building and maintaining workflows, automations, pipelines, calendars and contact records across 7 workflow folders for real client accounts, and I follow build specs exactly and verify every step before it goes live.", status: "yes", tab: "crm", cta: "See my GoHighLevel work" },
      { req: "Be task oriented", proof: "I follow documented processes exactly, track every task through to completion, and send a short daily or weekly update on progress.", status: "yes", tab: "crm", cta: "See my daily updates" },
      { req: "Build marketing content for books, websites and more", proof: "I design marketing graphics and promos in Canva, and I build full websites and landing pages for client brands.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Have a portfolio of work to show", proof: "This page is built from real client work, and my full portfolio is at themariaoffice.com/portfolio.", status: "yes" },
      { req: "Video editing (a plus)", proof: "I edit Reels and short-form video with captions and music in CapCut.", status: "yes", tab: "reels", cta: "See my Reels" }
    ],
    workSections: [
      { type: "cards", part: "ghl", keys: ["ghlWorkflows", "ghlRecords", "ghlPipeline", "ghlUpdates"] },
      { type: "block", key: "websites" },
      /* Social media part follows the portfolio's Social Media order:
         designs, reels, feeds, content calendar, UGC videos (brand identity removed for this job) */
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "brands" },
      { type: "cards", part: "social", keys: ["plushCalendar", "cupSchedule", "plushTrack"] },
      { type: "block", key: "featReels" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      ghl:      { label: "GoHighLevel Platform Work", title: "Built Inside GoHighLevel Every Day.", text: "Workflows, automations, pipelines and records I build and maintain on the GoHighLevel platform." },
      websites: { label: "Websites & Landing Pages", title: "Pages Built For Your Content.", text: "Websites and landing pages I build and maintain for client brands." },
      designs:  { label: "Marketing Content", title: "Marketing Content For Books & Websites.", text: "Canva graphics, promos, event graphics and short videos I design for client brands." },
      reels:    { label: "Video Editing", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, ready to publish." },
      feeds:    { label: "Content Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      brands:   { label: "Brand Identity", title: "A Brand That Looks the Same Everywhere.", text: "Logos, colours and fonts on one sheet, so every post and page stays on brand." },
      social:   { label: "Content Strategy", title: "Posts That Go Out on Schedule.", text: "A monthly content calendar, scheduled posts and results tracking for Instagram and Facebook." },
      featReels: { label: "UGC Videos", title: "Product Videos Ready to Post.", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      }
    },
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"],
        images: ["smm-content-plan.jpg"]
      }
    },
    resultsShots: "none",
    resultsNote: "GoHighLevel platform work: workflows, automations, calendars and records I build and maintain.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "GoHighLevel Course Builder application"
  },
  "miraco-creative": {
    label: "Creative Strategist (Miraco Nutripharm, health & wellness)",
    headline: "Creative Strategist",
    intro: { video: "../images/intro-bdm.mp4", poster: "../images/intro-bdm-poster.jpg" },
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Creative Strategy · Social Media · Canva & CapCut · Short-Form Video · Copywriting · Performance Reporting",
    tagline: "",
    summary: "Creative Strategist with 5+ years of experience in creative strategy, content creation and social media for wellness and service brands in Australia, the United States and Europe. I plan content calendars, design graphics and edit short vertical videos myself, write the captions and CTAs, and report what works. I grew a wellness brand's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Creative Strategist", "health", "wellness", "supplement", "creative strategy", "content creation", "social media", "brand marketing", "Meta", "Facebook", "Instagram", "LinkedIn", "TikTok", "YouTube", "Generative AI", "Canva", "CapCut", "Photoshop", "Figma", "Premiere Pro", "short-form video", "vertical video", "Reels", "content calendars", "static graphics", "banner ads", "ad variations", "copywriting", "captions", "CTA", "hooks", "A/B testing", "CTR", "CVR", "ROAS", "CPA", "performance reports", "competitor research", "asset management", "Shopify", "compliance", "brand voice"],
    focus: ["social", "design", "admin", "english", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "3–5 years in creative strategy, content creation, social media or brand marketing, ideally health or wellness", proof: "5+ years of social media and content work, including a wellness brand in Australia that I run today.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Platform strategy: Meta carousels, vertical video for Reels and TikTok, static banners", proof: "I plan and design carousels, promos and event graphics in Canva and edit vertical Reels in CapCut for Facebook and Instagram. TikTok uses the same format.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Hypotheses and A/B testing of hooks, CTAs, visuals and copy length", proof: "I compare what each post does in Meta Business Suite and repeat what works, which is how views went up 50% to 265K. Formal test matrices tied to CTR and CVR would be new, and I would learn your setup properly from day one.", status: "learn", tab: "results", cta: "See the results" },
      { req: "Video editing: fast cuts, text overlays, music, UGC-style and product demos", proof: "I edit short Reels with captions, music and clean cuts in CapCut.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Static and image editing: product photos, ad variations, banners", proof: "Promos, vouchers, coupons and event graphics in Canva and Photoshop for several brands.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Copywriting: ad copy, headlines, captions with clear CTAs", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write captions and offers for every post.", status: "yes" },
      { req: "Competitive analysis: keep up with competitors, trends, formats and hooks", proof: "I researched every local competitor's website and social media for a landscaping business and found the gap none of them covered, then built Awareness, Trust and Sales content pillars around it.", status: "yes" },
      { req: "Content calendars for educational, promotional and corporate posts", proof: "Content calendars and nine-post feed plans, previewed before anything goes live.", status: "yes", tab: "feeds", cta: "See the feed plans" },
      { req: "Performance data: ROAS, CPA, CTR, CVR and storefronts (Shopify, Shopee, Lazada)", proof: "I read Meta Business Suite reports and send a weekly update. Paid-ad metrics and Shopee or Lazada storefronts are new for me, and I would learn them from day one.", status: "learn" },
      { req: "Adobe Illustrator and Premiere Pro", proof: "I use Photoshop, Canva, Figma and CapCut daily. Illustrator and Premiere Pro are new, and I am ready to learn them.", status: "learn" },
      { req: "Compliance: factual, regulation-aware health content", proof: "I keep claims factual and check them before publishing. I would follow each market's rules and your team's review before anything goes live.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "strategy", keys: ["plushStrategy", "kkPillars", "kkCompetitors", "plushCalendar"] },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "cards", part: "brand", keys: ["kkBrand", "plushBranding"] },
      { type: "block", key: "feeds" },
      { type: "cards", part: "copy", keys: ["cupCaptions", "ghlUpdates"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      brand:    { label: "Brand Consistency", title: "One Voice on Every Post.", text: "Brand positioning, tone and a consistent look, so content feels like the same brand everywhere." },
      strategy: { label: "Creative Strategy", title: "Strategy That Turns Ideas Into Posts.", text: "Content plans and calendars built around one goal per post and each platform's format." },
      designs:  { label: "Static Creative", title: "Graphics That Stop the Scroll.", text: "Canva and Photoshop posts, carousels, promos and banner-style graphics, with simple variations to test." },
      reels:    { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Fast vertical edits in CapCut with text overlays, music and clean cuts." },
      feeds:    { label: "Content Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      copy:     { label: "Copy & Reporting", title: "Words and Weekly Numbers That Work.", text: "Captions with clear CTAs, plus a simple weekly update on what performed." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Creative Strategist application"
  },
  "design-va-interior": {
    label: "Virtual Assistant (Abstract Art, Interior Design & Real Estate Development)",
    headline: "Creative Virtual Assistant for Design",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "SketchUp · AutoCAD · Social Media Management · Project Coordination · Email Campaigns · Excel · Google Drive & Notion",
    tagline: "",
    codeWord: "Design",
    photo: "maria-civil-outfit.webp",
    heroPhotoMain: "maria-civil-cutout.webp",
    highlight: { icon: "&#127891;", text: "Civil Engineering Graduate" },
    summary: "Civil Engineering graduate and creative, highly organized Virtual Assistant with 5+ years of experience, based in the Philippines. I build 3D models in SketchUp and drawings in AutoCAD, and I manage social media, project files, email campaigns and data in Excel, Google Drive and Notion. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Civil Engineering graduate", "Virtual Assistant", "Philippines", "abstract art", "interior design", "real estate development", "dynamic", "creative", "Social Media Management", "Basic Excel", "Project Coordination", "Email Campaigns", "SketchUp", "AutoCAD", "Enscape", "Layout", "concept boards", "specification sheets", "itemized list", "data entry", "Instagram", "posting content", "engaging with followers", "organizing project files", "Google Drive", "Notion", "community building", "liking", "following", "commenting", "brand presence", "behind the scenes", "proactive in communication", "learning new systems", "detail-oriented", "highly organized", "independently"],
    focus: ["admin", "social", "design", "english", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Social Media Management: posting content on Instagram and other platforms", proof: "I plan, design and schedule posts every week with Meta Business Suite. Post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Community building: liking, following, commenting and keeping a consistent brand presence", proof: "I engage with followers and keep each brand's look and voice consistent, with feeds planned around one palette and a fixed layout.", status: "yes", tab: "feeds", cta: "See my feed plans" },
      { req: "Email Campaigns", proof: "I write and schedule email and text marketing campaigns for a wellness brand.", status: "yes" },
      { req: "Project Coordination, organizing project files, updates in Google Drive and Notion", proof: "Trackers, deadlines and organized Google Drive files for every client, plus a Notion hub for planning and SOPs, with a weekly progress report.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Basic Excel, data entry and itemized lists of products", proof: "I keep spreadsheets, trackers and contact databases accurate every day, including a 1,400+ contact lead database. Product specification sheets would be new content for me, built the same careful way.", status: "yes", tab: "admin", cta: "See my spreadsheets" },
      { req: "SketchUp and AutoCAD: build out realistic drawings", proof: "For my Civil Engineering thesis I modeled a glass-and-solar hydroponics building in SketchUp Pro and drew its plates in AutoCAD: elevations, roof framing, footing details and a solar system layout. Tap to see the drawings.", status: "yes", tab: "thesis", cta: "See my SketchUp and AutoCAD work" },
      { req: "Enscape and Layout", proof: "New for me. My thesis work was in SketchUp and AutoCAD only, so I would learn Enscape and Layout properly from day one, the way I picked up GoHighLevel.", status: "learn" },
      { req: "Graphic design for content", proof: "Posters, promos, carousels and event graphics in Canva for several brands.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Comfortable learning new systems and proactive in communication", proof: "I send a clear daily or weekly update and learn new tools fast. Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "thesis", keys: ["thesisSketchup", "thesisAutocad"] },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "cards", part: "admin", keys: ["cdcTracker", "plushCalendar", "ghlUpdates"] },
      { type: "block", key: "reels" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      thesis:  { label: "SketchUp & AutoCAD", title: "Drawings Built Like a Civil Engineer.", text: "My thesis building modeled in SketchUp and drawn in AutoCAD, from the 3D view to dimensioned plates." },
      feeds:   { label: "Social Media Management", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      designs: { label: "Creative Content", title: "Graphics That Make Posts Stand Out.", text: "Canva posts, carousels, promos and event graphics, ready to schedule on Instagram and other platforms." },
      admin:   { label: "Project Coordination", title: "Admin That Keeps Projects Organized.", text: "Trackers, calendars, files and weekly updates that keep every project running smoothly." },
      reels:   { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, made for Instagram and Facebook." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Design - Virtual Assistant application"
  },
  "of-instagram": {
    label: "Instagram Social Media Manager (Optimum Formula, affiliate & ambassador program)",
    headline: "Instagram Social Media Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Instagram Engagement · Thoughtful Comments · Affiliate Outreach · Follow-Ups · Google Sheets Tracker · Daily Updates",
    tagline: "",
    codeWord: "OF ENGAGEMENT",
    summary: "Reliable Instagram Social Media Manager with 5+ years of experience supporting business owners in Australia, the United States and Europe. I write natural replies and comments, send personalized outreach and follow-ups, keep a simple tracker in Google Sheets, and follow a written SOP with a short daily update. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Instagram Social Media Manager", "Instagram", "engagement", "communities", "influencer outreach", "outreach", "affiliates", "ambassadors", "comments", "thoughtful comments", "replies", "DMs", "direct messages", "introductory messages", "personalized", "follow-up", "follow-ups", "follow-through", "written SOP", "SOP", "brand guidelines", "Google Sheets", "tracker", "prospect tracker", "daily update", "attention to detail", "written English", "conversational", "independently", "feedback", "reliable", "fitness", "wellness", "U.S. business hours"],
    focus: ["social", "leads", "english", "admin", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Hands-on experience managing Instagram engagement and communities for a business", proof: "I manage Instagram and Facebook accounts for a wellness brand in Australia: planning, scheduling, engaging with followers and replying to comments and messages. Post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Thoughtful, natural comments that relate to the post, with humor when it fits", proof: "I write captions and replies in each brand's voice, with strong grammar and a friendly tone. Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes", tab: "smm", cta: "See my captions" },
      { req: "Find and contact potential partners with personalized introductions", proof: "I research prospects, send personalized outreach and keep every lead in a tracker, including a 1,400+ contact lead database and recruitment outreach for a National Pageant in Australia.", status: "yes", tab: "crm", cta: "See the lead work" },
      { req: "Influencer or affiliate program outreach", proof: "Running outreach for an affiliate or ambassador program is new for me. The research, personal message and follow-up steps are the same ones I do for leads today, and I would learn your qualification guidelines properly from day one.", status: "learn" },
      { req: "Follow a written engagement SOP and brand guidelines, and apply feedback", proof: "I work from written SOPs and brand guidelines for my clients, document processes in Notion and Google Workspace, and apply feedback quickly.", status: "yes", tab: "admin", cta: "See my documented processes" },
      { req: "Check comments and DMs at the start and end of the day, pass sensitive issues to the team", proof: "I check enquiries, replies and conversations daily, answer routine questions from approved information and flag anything sensitive or outside my role.", status: "yes", tab: "crm", cta: "See my enquiry follow-ups" },
      { req: "Research-use-only communication rules: no medical advice, dosing, or unsupported claims", proof: "I keep claims factual and only share approved information. Research-use-only compliance is a new niche for me, and I would follow your guidelines word for word.", status: "learn" },
      { req: "Activity and prospect tracker in Google Sheets, plus a short daily update", proof: "Trackers and Google Sheets records for every client, with a short daily update and a weekly report.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Manual, personalized engagement only: no bots, bulk comments or mass messaging", proof: "Agreed. Every comment and message I write is manual and written for the person it goes to.", status: "yes" },
      { req: "Reliable computer, internet and U.S. overlap", proof: "65 Mbps fiber with a backup mobile Wi-Fi, a backup laptop and a backup power generator. I already work Australian and U.S. hours for other clients.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "engage", keys: ["plushCalendar", "cupCaptions", "ghlConvos"] },
      { type: "cards", part: "outreach", keys: ["pgLeads", "pgFollow"] },
      { type: "block", key: "feeds" },
      { type: "block", key: "emails" },
      { type: "cards", part: "track", keys: ["plushTrack", "ghlUpdates", "pgReports"] }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      engage:   { label: "Instagram Engagement", title: "Comments That Sound Like a Real Person.", text: "Accounts I run day to day: content calendars, captions in the brand's voice, and replies to comments and messages." },
      outreach: { label: "Prospects & Outreach", title: "Personal Intros, Not Mass Messages.", text: "Lead research, personalized messages and polite follow-ups, with every conversation kept organized." },
      feeds:    { label: "Instagram Content", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      track:    { label: "Tracking & Reporting", title: "A Tracker That Shows What Happened.", text: "Activity records, engagement results and a short daily update on what is next." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "OF ENGAGEMENT"
  },
  "tpp-builder-outreach": {
    label: "Outreach & Admin Assistant (Time Planning and Programming, Sydney)",
    headline: "Builder Outreach & Admin Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Gmail Outreach · Calendar Booking · Google Drive · Google Sheets Tracker · Follow-Ups · Construction Background",
    tagline: "",
    codeWord: "TPP Builder Outreach",
    highlight: { icon: "&#127891;", text: "Civil Engineering Graduate" },
    summary: "Reliable, detail-focused assistant with 5+ years supporting business owners in Australia, the United States and Europe, and a Civil Engineering graduate who worked as a project intern in a planning office. I send outreach emails, reply from templates, book calls in the calendar, log documents in Google Drive and keep Google Sheets trackers accurate. I already work Australian hours, so Sydney 8-9am is no problem.",
    keywords: ["Civil Engineering graduate", "planning office", "construction", "builders", "tender documents", "outreach emails", "company inbox", "templates", "book calls", "calendar", "Director", "Google Drive", "Google Sheets", "tracker", "status", "follow-up dates", "follow-ups", "notes", "Gmail", "written English", "reliable", "detail-focused", "Sydney", "8-9am", "weekday", "senior Australian construction professionals", "professional-services admin", "long-term"],
    focus: ["admin", "leads", "english", "support", "crm"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Send pre-approved outreach emails to builders from the company inbox", proof: "I research prospects and send outreach emails and follow-ups for business owners, always sticking to the approved wording.", status: "yes", tab: "outreach", cta: "See my outreach work" },
      { req: "Reply to builder responses using templates, and book calls in the Director's calendar", proof: "I reply to enquiries from templates and book calls and appointments on calendars for owners and a CEO, with accurate notes on every event.", status: "yes", tab: "admin", cta: "See calendar booking" },
      { req: "Request tender documents and log them in Google Drive", proof: "I keep documents and records organized in Google Drive and chase missing information until it arrives. Tender documents would be new content, handled the same careful way.", status: "yes", tab: "admin", cta: "See my Drive records" },
      { req: "Keep the Google Sheets tracker up to date (status, follow-up dates, notes)", proof: "Trackers, follow-up dates and notes kept accurate in Google Sheets every day, including a 1,400+ contact lead database.", status: "yes", tab: "outreach", cta: "See my trackers" },
      { req: "Excellent written English for senior Australian construction professionals", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I already write to Australian business owners every day.", status: "yes" },
      { req: "Available 8-9am Sydney time every weekday", proof: "Yes. I already work Australian hours for other clients, with reliable fiber internet, backup Wi-Fi, laptop and power.", status: "yes" },
      { req: "Construction or professional-services admin experience is a bonus", proof: "I am a Civil Engineering graduate and was a project intern in a planning office, supporting reports, records and trackers.", status: "yes", tab: "construction", cta: "See my planning office work" }
    ],
    workSections: [
      { type: "cards", part: "construction", keys: ["engPlanning"] },
      { type: "cards", part: "outreach", keys: ["bdmLeads", "pgFollow", "pgReports"] },
      { type: "cards", part: "admin", keys: ["ghlBooking", "cdcDrive", "cdcFollow", "ghlUpdates"] }
    ],
    workHeads: {
      construction: { label: "Construction Background", title: "I Understand Your Industry.", text: "A Civil Engineering graduate who worked in a planning office, so builders and programmes are not new to me." },
      outreach:     { label: "Outreach & Follow-Up", title: "Outreach That Gets Replies.", text: "Researched contacts, polite emails and consistent follow-ups, recorded accurately in a tracker." },
      admin:        { label: "Admin & Records", title: "Admin That Keeps Everything Organized.", text: "Calendar booking, Google Drive records and daily updates, so nothing slips." }
    },
    resultsShots: "none",
    resultsNote: "Calendars, follow-ups and records I handle every day.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Admin and outreach work I do",
    portfolioLabel: "View my Portfolio",
    emailSubject: "TPP Builder Outreach"
  },
  "rosko-creative": {
    label: "Creative Virtual Assistant (The Rosko Group & Downsizing Roadmap, Dayton)",
    headline: "Creative Virtual Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Canva Graphics · Short-Form Video · Carousels & Pins · Real Estate Content · Captions · Meta Business Suite",
    tagline: "",
    codeWord: "Dayton Creative Lead – CapCut",
    summary: "Creative Virtual Assistant with 5+ years of experience turning raw footage and source material into polished Canva graphics, carousels and short-form video for business owners in Australia, the United States and Europe. I edit Reels in CapCut, write captions from the information provided, schedule in Meta Business Suite and keep the content calendar organised. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Creative Virtual Assistant", "real estate", "podcast", "education", "short-form video", "Reels", "TikTok", "YouTube Shorts", "Facebook", "Instagram", "Pinterest", "carousels", "Just Listed", "Open House", "Just Sold", "Canva", "CapCut", "captions", "hooks", "proofreading", "Meta Business Suite", "content calendar", "repurpose", "brand kit", "written English", "attention to detail", "deadlines", "Eastern Time", "40 hours", "reliable"],
    focus: ["design", "social", "english", "admin", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Strong portfolio showing Canva design and short-form video editing", proof: "Posters, promos, carousels and event graphics in Canva, plus Reels edited in CapCut, for several brands. Real estate sample designs are in the portfolio too.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Short-form videos for Reels, TikTok and YouTube Shorts", proof: "I edit vertical Reels with captions, music and clean cuts in CapCut, the same format TikTok and Shorts use.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Advanced Canva and CapCut Pro, Premiere Pro or DaVinci Resolve", proof: "Canva and CapCut are my daily tools. Premiere Pro and DaVinci Resolve are new for me, and I would learn them if you need them.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Instagram and Facebook carousels, Pinterest pins, newsletter graphics", proof: "Carousels, promos and branded feed graphics in Canva every week. Pinterest pins and newsletter layouts use the same skills, and I would follow your brand kit and templates.", status: "yes", tab: "designs", cta: "See my carousels" },
      { req: "Real estate graphics: Just Listed, Open House, Just Sold, price changes", proof: "I designed real estate sample graphics in Canva, built from listing details only, never invented facts.", status: "yes", tab: "designs", cta: "See the real estate designs" },
      { req: "Captions, hooks and titles from the source material, never inventing facts", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write from the information provided and check every claim before it goes live.", status: "yes", tab: "smm", cta: "See my captions" },
      { req: "Schedule in Meta Business Suite, Pinterest and YouTube, keep files and calendars organised", proof: "I schedule weekly with Meta Business Suite and keep content calendars and Drive files organised. Scheduling in Pinterest and YouTube would be new, and I would learn them from day one.", status: "yes", tab: "admin", cta: "See my content calendar" },
      { req: "Manage recurring content and deadlines without reminders, ask questions when unclear", proof: "I send a clear weekly update and ask early when something is unclear. Post views went up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Reliable internet, capable computer, backup plan, Eastern Time overlap", proof: "65 Mbps fiber with backup mobile Wi-Fi, a backup laptop and a backup power generator. I already work US hours for other clients.", status: "yes" },
      { req: "Transition to 40 hours per week after the 60-day trial", proof: "Yes, I am available to move to 40 hours per week after the trial.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "cards", part: "copy", keys: ["cupCaptions", "plushCalendar"] },
      { type: "block", key: "feeds" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      designs: { label: "Graphic Design", title: "Graphics That Look On Brand.", text: "Canva posts, carousels and listing-style graphics with clean typography, spacing and alignment." },
      reels:   { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Raw footage edited in CapCut with clean captions, music and smooth cuts." },
      copy:    { label: "Copywriting & Scheduling", title: "Captions That Sound Like You.", text: "Hooks and captions written from your source material, then scheduled and organised in a content calendar." },
      feeds:   { label: "Content Management", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Dayton Creative Lead – CapCut"
  },
  "instinctive-shortform": {
    label: "Short-Form Video Creator (Instinctive Branding, U.S. marketing agency)",
    headline: "Short-Form Video Creator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Reels · TikTok · YouTube Shorts · CapCut & Canva · Hooks & Captions · Analytics",
    tagline: "",
    codeWord: "Look No Further! I'm your Person!!",
    summary: "Short-Form Video Creator with 5+ years of experience in social media and content for business owners in Australia, the United States and Europe. I turn raw footage into Reels with a hook in the first seconds, captions, music and clean cuts in CapCut and Canva, then check the numbers in Meta Business Suite to see what to repeat. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Short-Form Video Creator", "Reels", "TikTok", "YouTube Shorts", "Facebook", "Instagram", "hooks", "storytelling", "captions", "transitions", "music", "B-roll", "CapCut", "Canva", "Premiere Pro", "raw footage", "repurpose", "trends", "brand guidelines", "content calendar", "analytics", "watch time", "engagement", "retention", "AI tools", "deadlines", "feedback", "English"],
    focus: ["social", "design", "english", "admin", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Create and edit short-form videos for Instagram Reels, TikTok, YouTube Shorts and Facebook", proof: "I edit vertical Reels with captions, music and clean cuts in CapCut for Facebook and Instagram. TikTok and Shorts use the same format.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Turn raw footage into compelling short videos", proof: "Plain before-and-after footage from a landscaping business edited into branded Reels ready to schedule.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Hooks that capture viewers in the first 1-3 seconds", proof: "I open with the strongest moment of the footage, then add on-screen text and captions so it works with the sound off.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Captions, transitions, music, sound effects and B-roll", proof: "Captions, music and cuts on every Reel in CapCut, plus short promo videos in Canva.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Advanced CapCut, Premiere Pro, Canva or similar", proof: "CapCut and Canva are my daily tools. Premiere Pro is new for me, and I am ready to learn it.", status: "learn", tab: "designs", cta: "See my Canva designs" },
      { req: "Research trends and adapt them to different brands", proof: "I researched competitors' websites and social media for a landscaping business and built content pillars around the gap, and I keep each brand's look and voice consistent.", status: "yes", tab: "feeds", cta: "See the feed plans" },
      { req: "Review analytics and recommend ways to improve engagement and retention", proof: "I track views, followers and interactions in Meta Business Suite, send a weekly update and repeat what works. Post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Follow brand guidelines, content calendars and trackers, meet deadlines", proof: "Content calendars, trackers and a weekly report for every client, with nothing posted before it is previewed.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Viral Reels with high organic reach", proof: "I do not have a single viral Reel to show, and I will not invent one. What I can show is steady, measured growth on a real client account, with the Meta Business Suite screenshots.", status: "learn", tab: "results", cta: "See the real numbers" },
      { req: "Comfortable using AI tools for research, ideation, scripting and editing", proof: "I use AI tools to research ideas, draft hooks and captions and speed up planning, then edit and check everything myself.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "designs" },
      { type: "block", key: "feeds" },
      { type: "cards", part: "copy", keys: ["cupCaptions", "plushCalendar"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      reels:   { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Raw footage edited in CapCut with a hook, captions, music and clean cuts." },
      designs: { label: "Visual Storytelling", title: "Graphics That Stop the Scroll.", text: "Canva posts, covers and carousels that match the video and the brand." },
      feeds:   { label: "Brand Consistency", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      copy:    { label: "Hooks, Captions & Calendar", title: "Words and a Plan That Work.", text: "Captions with clear CTAs and a content calendar that keeps every video on schedule." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Look No Further! I'm your Person!!"
  },

  "flown-beauty-editor": {
    label: "Short-Form Video Editor, DTC Beauty Ads (Flown Beauty)",
    headline: "Short-Form Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Short-Form Video Ads · Meta & AppLovin · Hooks & Retention · Captions & Sound Design · CapCut & Premiere Pro",
    tagline: "",
    summary: "Short-Form Video Editor with 5+ years of experience editing short-form, direct-response video ads and social content for business owners in Australia, the United States and Europe. I turn briefs and raw footage into ads cut for a strong hook and retention from the first second, with captions, sound design and light motion graphics, then re-edit winners into fresh variations based on performance. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Short-Form Video Editor", "DTC", "e-commerce", "direct-response", "video ads", "Meta", "AppLovin", "UGC", "mashups", "motion", "AI animation", "high volume", "variations", "hooks", "retention", "captions", "sound design", "motion graphics", "performance", "iteration", "briefs", "turnarounds", "Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve", "Runway", "Kling", "Higgsfield", "Sora"],
    focus: ["social", "design", "english", "admin", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "2+ years editing short-form / direct-response video ads", proof: "5+ years editing short-form video for business owners: hooks in the first seconds, clean cuts and captions so it works with the sound off, the direct-response style.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "A reel or portfolio (DTC or e-commerce a plus)", proof: "A portfolio of edited Reels and short ads is ready to send. DTC beauty is a new niche for me, and I bring the same hook-first, fast-turnaround editing.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Strong skills in Premiere Pro / After Effects / CapCut / DaVinci Resolve", proof: "CapCut is my daily editing tool for captions, music and clean cuts. Premiere Pro, After Effects and DaVinci Resolve are new to me, and I am ready to learn them quickly.", status: "learn", tab: "reels", cta: "See my Reels" },
      { req: "Captions, sound design, and basic motion graphics", proof: "Captions and music on every edit in CapCut. Deeper sound design and motion graphics in After Effects are new for me, and I would learn them on real briefs.", status: "learn", tab: "reels", cta: "See my Reels" },
      { req: "A fast, reliable, high-volume editor who edits for performance", proof: "I track views, followers and engagement in Meta Business Suite and repeat what works. Post views up 50% to 265K and followers up 147% in 90 days for one client.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Stable internet and reliable availability", proof: "65 Mbps fiber with a backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" },
      { req: "AI video tools (Runway, Kling, Higgsfield, Sora)", proof: "I use AI tools to research ideas and speed up planning. These specific AI video generators are new to me, and I am ready to learn them.", status: "learn" },
      { req: "Deeper motion graphics / After Effects ability", proof: "Honest answer: After Effects is new to me. I am a fast learner with CapCut and Canva already, and I would put in the time to learn it properly.", status: "learn" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "designs" }
    ],
    workHeads: {
      reels:   { label: "Short-Form Video Ads", title: "Edits Built to Stop the Scroll.", text: "Briefs and raw footage cut into fast, high-retention ads with a hook, captions and sound." },
      designs: { label: "Visual Storytelling", title: "Graphics That Match the Brand.", text: "Canva graphics and covers that stay on-brand across every ad variation." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Video Editor - Maria Simbajon"
  },

  "proline-va": {
    label: "Virtual Assistant (ProLine Cleaning Solutions, Portland, ME)",
    headline: "Virtual Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Cold Outreach · LinkedIn & Facebook · Email & Inbox · Calendar Invites · Daily Targets · Office Management",
    tagline: "",
    summary: "Experienced Virtual Assistant with 5+ years supporting business owners in Australia, the United States and Europe, with strong English and a goal-oriented, independent way of working. I research prospects, send outreach and follow-ups on LinkedIn, Facebook and email, manage the inbox and calendar, and report against daily targets. I already work US hours for other clients, so Monday to Friday EST is no problem.",
    keywords: ["Virtual Assistant", "Office Manager", "cold-call outreach", "daily target clients", "phone calls", "LinkedIn", "Facebook", "emails", "schedules", "calendar invitations", "daily tasks", "deadlines", "attention to detail", "strong English", "work independently", "organizational skills", "stable internet", "laptop", "EST", "30 hours", "growth", "learning"],
    focus: ["leads", "admin", "english", "support", "crm"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Prior experience as a Virtual Assistant / Office Manager", proof: "5+ years supporting business owners and a CEO in Australia, the US and Europe: inbox, calendar, CRM, reports and daily admin.", status: "yes", tab: "admin", cta: "See my admin work" },
      { req: "Cold-call outreach: contact the daily target clients by LinkedIn and Facebook", proof: "I research prospects, send outreach and follow-ups on LinkedIn, Facebook and email, and keep a 1,400+ contact lead database with a daily count of contacts added.", status: "yes", tab: "outreach", cta: "See my outreach" },
      { req: "Cold-call outreach by phone", proof: "As Assistant to the CEO at EO Staff, I personally called leads and clients by phone, on top of the outreach emails and LinkedIn messages. I follow a call script and log every call in the tracker.", status: "yes", tab: "outreach", cta: "See my outreach" },
      { req: "Manage and respond to emails", proof: "I answer enquiries by email, Messenger and the CRM every day, with booking links, follow-ups and reminders.", status: "yes", tab: "admin", cta: "See my enquiry replies" },
      { req: "Coordinate schedules and send calendar invitations", proof: "61 GoHighLevel calendars and 200+ Google Calendar events coordinated, with accurate notes on every event.", status: "yes", tab: "admin", cta: "See calendar booking" },
      { req: "Stay organized and meet daily tasks, deadlines and targets", proof: "Task lists with deadlines in Asana, Notion and Trello, plus a short daily update and a weekly report for every client.", status: "yes", tab: "organized", cta: "See my trackers" },
      { req: "Attention to detail, strong English", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I check every record before it goes in.", status: "yes" },
      { req: "Stable internet and a reliable laptop or PC, Monday to Friday EST", proof: "65 Mbps fiber with backup mobile Wi-Fi, a main and a backup laptop and a backup power generator. I already work US hours for other clients.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "outreach", keys: ["bdmLeads", "pgFollow", "engPageant"] },
      { type: "cards", part: "admin", keys: ["ghlConvos", "ghlBooking", "cdcFollow"] },
      { type: "cards", part: "organized", keys: ["cdcTracker", "ghlUpdates", "cdcDrive"] }
    ],
    workHeads: {
      outreach:  { label: "Outreach", title: "Outreach That Gets Replies.", text: "Researched target clients, polite messages on LinkedIn, Facebook and email, and follow-ups until they answer." },
      admin:     { label: "Email & Calendar", title: "An Inbox and Calendar Under Control.", text: "Enquiries answered, invitations sent and every booking noted, so nothing slips." },
      organized: { label: "Organized Daily Work", title: "Targets Met. Deadlines Kept.", text: "Trackers, reminders and a daily update, so you always know where things stand." }
    },
    resultsShots: "none",
    resultsNote: "Leads, calendars and follow-ups I handle every day.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Virtual Assistant"
  },
  "dmwright-redesign": {
    label: "Website Designer / Developer (DMWRIGHT SOLUTIONS, LLC, Georgia)",
    headline: "Website Designer / Developer",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "WordPress · Page Builders · Responsive Design · Galleries · Basic SEO · Consultation Form",
    tagline: "",
    codeWord: "DMWRIGHT WEBSITE REDESIGN",
    summary: "Website designer and developer with 5+ years of experience building websites for service businesses in Australia, the United States and Europe, including a live landscaping website that brings in quote enquiries. I design clean, mobile-responsive sites with project galleries, working forms and on-page SEO, and I send a clear weekly update with a working preview. For this application I already built a redesign concept of your homepage, services, testimonials and projects pages.",
    keywords: ["website designer", "WordPress", "Elementor", "page builders", "responsive design", "service-business websites", "mobile", "navigation", "project galleries", "consultation form", "basic SEO", "image optimization", "staging", "weekly progress updates", "four-week schedule", "14 days post-launch bug fixes"],
    focus: ["web", "design", "english", "support"],
    order: ["results", "redesign", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "A website concept for the redesign (homepage, services, testimonials, projects)", proof: "Done before applying: a four-page concept in your blue, gray and white branding, with residential and commercial shown equally, using your own project photos.", status: "yes", tab: "websites", cta: "See my other concepts" },
      { req: "Three live websites I personally designed or developed", proof: "Live client sites I built: a landscaping business (thekerbingking.com.au) and a wellness brand (loveandsoundtherapies.com). I can share a third on request.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "WordPress experience", proof: "WordPress is part of my website toolkit, together with Wix Studio, Webflow and Framer.", status: "yes" },
      { req: "Elementor or comparable page builders", proof: "I build with page builders every day. Elementor itself is newer for me, and I would work in it on staging first.", status: "learn" },
      { req: "Professional service-business websites, mobile-responsive", proof: "My live sites are service businesses built to generate quote enquiries, with working navigation, forms and galleries on mobile.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Project galleries, consultation form, basic SEO, optimized images", proof: "My concepts include filterable project galleries and working request forms. I compress images and set titles, descriptions and alt text.", status: "yes", tab: "websites", cta: "See my concepts" },
      { req: "Staging site, homepage approval first, weekly previews, written approval before any paid tool", proof: "That is how I work: staging only, homepage approved first, a preview link every week, and nothing paid without your written yes.", status: "yes" },
      { req: "Four weeks, $500 fixed, 14 days free bug fixes, you keep ownership", proof: "I confirm I can deliver the scope in four weeks within the $500 budget, with 14 days of free fixes. You keep full ownership and admin control of the site, hosting and domain.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "block", key: "designs" }
    ],
    workHeads: {
      websites: { label: "Website Design", title: "Websites That Win Enquiries.", text: "Live client sites and redesign concepts for service businesses, mobile-ready and built around a clear consultation request." },
      designs:  { label: "Brand & Graphics", title: "Graphics That Match Your Brand.", text: "Logos, promos and social graphics in one consistent look." }
    },
    resultsShots: "none",
    stats: ["years", "brands"],
    redesign: { title: "Your Website, Redesigned.", hint: "Scroll to see the website redesign I created for you", domain: "dmwrightsolutions.com (redesign concept)", url: "../concepts/dmwright/",
      desk: [{ src: "web-dmwright-desk-home.jpg", cap: "Home" }, { src: "web-dmwright-desk-services.jpg", cap: "Services" }, { src: "web-dmwright-desk-projects.jpg", cap: "Projects" }, { src: "web-dmwright-desk-testimonials.jpg", cap: "Testimonials" }],
      phone: [{ src: "web-dmwright-index-phone.jpg", cap: "Home" }, { src: "web-dmwright-services-phone.jpg", cap: "Services" }, { src: "web-dmwright-projects-phone.jpg", cap: "Projects" }, { src: "web-dmwright-testimonials-phone.jpg", cap: "Testimonials" }] },
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "DMWRIGHT WEBSITE REDESIGN"
  },
  "bkg-lead-funnels": {
    label: "Lead Funnel & Landing Page Specialist (BKG, Netherlands)",
    headline: "Lead Funnel & Landing Page Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Landing Pages · Lead Funnels · Forms · CRM Follow-Up · Showroom Appointments · Reporting",
    tagline: "",
    codeWord: "VARIANT",
    summary: "Website and lead-generation specialist with 5+ years of experience building websites and landing pages that bring in enquiries for service businesses in Australia, the United States and Europe. I build the page, connect the form to the CRM with GoHighLevel automations, follow up every lead and send a clear weekly report. WordPress is part of my toolkit, and Elementor Pro and Gravity Forms are the tools I would learn on staging first.",
    keywords: ["lead funnels", "landing pages", "WordPress", "Elementor", "Gravity Forms", "forms", "thank-you page", "showroom appointment", "CRM", "follow-up", "UTM", "GA4", "Google Tag Manager", "A/B tests", "mobile", "hypothesis", "monthly report", "Dutch colleagues", "careful work on live pages"],
    focus: ["web", "leads", "crm", "english", "design"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Build lead funnels and landing pages (one goal per page, clear offer, form no longer than it needs to be)", proof: "I designed a live landscaping website built to generate quote enquiries, and a dedicated program landing page for a wellness brand in Wix Studio. I have no conversion numbers I can prove, so I will not quote any.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "WordPress with Elementor Pro, mobile-first", proof: "WordPress is part of my website toolkit and I build with page builders every day (Wix Studio, Webflow, Framer). Elementor Pro itself is new for me, and I would build on staging first.", status: "learn" },
      { req: "A form builder such as Gravity Forms (multi-step, conditional logic, hidden fields, webhooks)", proof: "I have built working request forms on my concepts and live sites. Gravity Forms is new for me and I would learn it properly from day one.", status: "learn", tab: "websites", cta: "See my concepts" },
      { req: "Every lead reaches the CRM with its source, and the follow-up is triggered", proof: "I run GoHighLevel automations: confirmation emails and SMS, follow-up sequences in 7 workflow folders, and I check every new enquiry. Bitrix24 is new, but the logic is the same.", status: "yes", tab: "crm", cta: "See my CRM work" },
      { req: "GA4 events, Google Tag Manager, UTM parameters", proof: "I track results in Meta Business Suite and weekly reports. GA4 and Google Tag Manager are new for me, and I would set them up and test each conversion myself.", status: "learn" },
      { req: "Careful work on live pages: test on mobile and desktop, submit every form yourself", proof: "That is how I work: staging first, test every form route myself, and check that the enquiry arrives before anything goes live.", status: "yes" },
      { req: "Improve on data: one hypothesis at a time, report monthly, say so when there is too little data", proof: "I send a clear weekly update for every client. I would change one thing at a time, write down the conclusion, and say honestly when a page has too little traffic to decide.", status: "yes" },
      { req: "Dutch copy checked by a Dutch colleague before anything goes live", proof: "Agreed. I own the structure and the build, and nothing goes live until a Dutch colleague has checked the text.", status: "yes" },
      { req: "Clear written English, part-time 12 hours a week", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I already work US hours for other clients, so afternoon and evening hours are normal for me.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "block", key: "crm" },
      { type: "block", key: "designs" }
    ],
    workHeads: {
      websites: { label: "Landing Pages & Websites", title: "Pages That Turn Visitors Into Leads.", text: "Live client sites and concepts built around one clear request, mobile-ready and simple to fill in." },
      crm:      { label: "Forms to CRM Follow-Up", title: "Every Lead Followed Up.", text: "Enquiries recorded, confirmations sent and reminders running in GoHighLevel, so no lead gets lost." },
      designs:  { label: "Visuals", title: "Graphics That Match the Offer.", text: "Promos and social graphics that match the page the visitor lands on." }
    },
    resultsShots: "none",
    resultsNote: "Leads, calendars and follow-ups I handle every day.",
    stats: ["leads", "calendars", "years", "brands"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "VARIANT"
  },
  "igc-vayva": {
    label: "Freelance Website Developer & Notion Workspace Designer (In Good Company / By Vayva, Brisbane)",
    headline: "Freelance Website Developer & Notion Workspace Designer",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Event Ticketing Websites · Wix Studio · Notion Business Hub · Social Media · Newsletter Signup · Basic SEO",
    tagline: "",
    codeWord: "IN GOOD COMPANY",
    summary: "Freelance website developer and Notion workspace designer with 5+ years of experience building clean, mobile-friendly websites and organised Notion hubs for businesses in Australia, the United States and Europe. I have built live websites that bring in enquiries, ticket-purchase and booking confirmation automations, and a Notion business hub that keeps planning, SOPs and orders in one place. I also run social media (post views up 50% to 265K and followers up 147% in 90 days), so your launch, website and content can all come from one person. I hand everything over with a recorded walkthrough so you can edit it yourself.",
    keywords: ["website developer", "Notion workspace", "event ticketing", "ticket purchase", "booking confirmation emails", "newsletter signup", "contact form", "partnership enquiry form", "basic SEO", "mobile-friendly", "easy to edit", "business hub", "content calendar", "approvals", "recorded walkthrough", "fixed quote", "revisions"],
    focus: ["web", "design", "admin", "crm", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Proven experience in website development", proof: "Live client sites I designed and built: a landscaping business (thekerbingking.com.au) and a wellness brand (loveandsoundtherapies.com), plus website concepts for other industries.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Events and ticketing: customers buy tickets on the website, with automated booking confirmation emails", proof: "For a wellness brand I built the ticket-purchase automations: confirmation emails and SMS, reminders and follow-ups, and I manage an events pipeline of 84 attendees (Booked, Attended, No Show, Cancelled). Building the ticket page itself in Wix Events is new for me, and I would test it with a real purchase before launch.", status: "yes", tab: "crm", cta: "See my ticket workflows" },
      { req: "Elegant, editorial, feminine branding (burgundy, cream, soft pink)", proof: "I design brand sheets and clean feeds in one consistent look, including soft, feminine brands. I would build your colours, type and styling into every page.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Contact form, partnership enquiry form, newsletter signup", proof: "I have built working request forms on my live sites and concepts, and I run email and SMS follow-ups in GoHighLevel and Mailchimp.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Mobile-friendly, fast, basic SEO, connected to your existing domain", proof: "Every site I build is checked on phone and desktop, with compressed images, page titles, descriptions and alt text. Connecting an existing domain is a normal step for me.", status: "yes" },
      { req: "Notion Business HQ that branches into your 8 areas, keeping your existing information", proof: "I built a Notion business hub for planning, SOPs and marketing strategy, organised records for 67 products and every customer order, and built the content calendar and approval flow for a wellness brand and a landscaping business. I migrate and keep your existing databases first, then tidy them.", status: "yes", tab: "admin", cta: "See my Notion work" },
      { req: "Content calendar, approvals and editor workflows", proof: "I plan and schedule content with a calendar, send weekly updates, and write the instructions a team follows, so everyone knows what is due and what is approved.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Future growth: events, retreats, podcast, lifestyle products and the social media to promote them", proof: "I also manage Facebook and Instagram: content calendars, captions, Canva graphics and Reels, with post views up 50% to 265K and followers up 147% in 90 days. One person can build your website and promote the launch.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Simple, easy to maintain, no overcomplicated automations", proof: "That is how I work: clear pages, a consistent icon and colour style, and only the databases you need.", status: "yes" },
      { req: "Handover: full ownership, all logins, recorded tutorial, revisions", proof: "You own everything from day one. I record a short walkthrough for the website and one for Notion, and revisions are included in the quote.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "cards", part: "tickets", keys: ["ghlWorkflows", "ghlPipeline", "plushEmail"] },
      { type: "cards", part: "notion", keys: ["notionHq", "notionPlan", "cdcTracker", "plushStrategy"] },
      { type: "cards", part: "social", keys: ["plushCalendar", "cupResults"] },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      websites: { label: "Website Development", title: "Websites With a Welcome.", text: "Live client sites and concepts that are elegant, mobile-ready and simple to edit yourself." },
      tickets:  { label: "Tickets & Confirmations", title: "Tickets That Confirm Themselves.", text: "Ticket-purchase, confirmation, reminder and follow-up automations I built and manage, so every guest is looked after." },
      notion:   { label: "Notion Workspace", title: "One Hub for Your Whole Business.", text: "Notion hubs, planning databases and trackers built simple, so you can keep them tidy yourself." },
      social:   { label: "Social Media Management", title: "Posts That Grow Your Brand.", text: "Content calendars and weekly posting that took a client to 265K views and +147% followers in 90 days." },
      designs:  { label: "Brand & Graphics", title: "Graphics in One Elegant Look.", text: "Event graphics, promos and social posts that match your brand." },
      reels:    { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, ready for Instagram and Facebook." },
      feeds:    { label: "Content Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, ready for your launch and events." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "brands"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "IN GOOD COMPANY"
  },
  "sweet-potato-smm": {
    label: "Social Media Manager (Sweet Potato Mania)",
    headline: "Social Media Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Engaging Content · Food & Dessert Posts · Canva · Reels · Grow Your Audience",
    tagline: "",
    summary: "Creative, passionate Social Media Manager with 5+ years of experience in social media management and graphic design. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["Social Media Manager", "creative", "passionate", "engaging content", "posts", "showcase", "desserts", "grow", "online presence", "audience", "attract customers", "portfolio", "sample works", "Canva", "Reels", "Facebook", "Instagram"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Create engaging content and posts", proof: "I plan, design and schedule posts every week for Facebook and Instagram in Canva and Meta Business Suite, with captions written for each one.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Showcase delicious Japanese-style sweet potato desserts", proof: "I make products look good with clean graphics, short Reels and a consistent feed. Food is a new niche for me, and I would study your menu and photos from day one.", status: "learn", tab: "reels", cta: "See my Reels" },
      { req: "Help us grow our audience and attract customers", proof: "I grew a client's post views 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Send your portfolio or sample works", proof: "My portfolio and sample works are all on this page, and the full portfolio is one tap away.", status: "yes", tab: "designs", cta: "See sample works" }
    ],
    workSections: [
      { type: "block", key: "foodPosters" },
      { type: "block", key: "designs" },
      { type: "block", key: "feedsMine" },
      { type: "block", key: "feeds" },
      { type: "block", key: "reels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushBranding"] },
      { type: "block", key: "emails" }
    ],
    workOverrides: {
      foodPosters: {
        label: "Food Posters I Design for You",
        blurb: "Food posters I designed in Canva for made-up sample brands: steak, noodles, sandwiches, burgers and cakes.",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => ({ src: "fp3-" + n + ".jpg", thumb: "fp3-" + n + ".jpg" }))
      },
      feedsMine: {
        label: "Instagram feed concept: sweet potato dessert shop",
        blurb: "A sample 9-post feed for a sweet potato dessert shop, with a made-up brand: one colour palette, photos mixed with text posts, previewed as a flat plan and inside the Instagram app. Tap to enlarge.",
        items: [{ src: "ig-feed-sweet.webp", phone: "ig-feed-sweet-phone.webp", grid: "ig-feed-sweet-grid.webp", title: "Sweet Potato Dessert Shop", note: "Warm, cosy and made to make you hungry", accent: "#5b2d6e", tint: "#f6efe9" }]
      },
      reels: {
        blurb: "Two food Reels (cupcakes and a restaurant edit), plus before-and-after Reels with captions and music for Landscaping Services in Australia. Tap a phone to play.",
        items: [
          { src: "reel-cupcake.mp4", poster: "reel-cupcake.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Cupcake Business (sample)" },
          { src: "reel-food.mp4", poster: "reel-food.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Restaurant (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" }, { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      }
    },
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      foodPosters: { label: "Food Poster Design", title: "Posters That Make People Hungry.", text: "Food posters made to stop the scroll and sell the dish." },
      designs: { label: "Social Media Design", title: "Graphics That Make Posts Stand Out.", text: "Canva posts, promos, vouchers and event graphics, ready to schedule on Facebook and Instagram." },
      reels:   { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, made for Instagram and Facebook." },
      feedsMine: { label: "Made for You", title: "My IG Feed Concept for You.", text: "A nine-post sweet potato dessert plan around one palette, previewed before anything goes live." },
      feeds:   { label: "More Feed Plans", title: "Feeds That Look Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      plan:    { label: "Grow Your Audience", title: "Consistent Posting That Brings Customers.", text: "A content calendar and one consistent brand look, so your page keeps growing." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media Manager (Sweet Potato Mania)"
  },
  "parfumcentral-designer": {
    label: "Creative Designer & Social Growth Specialist (ParfumCentral, Dubai)",
    headline: "Creative Designer & Social Growth Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Premium Visuals · Ad Creatives · Instagram & Facebook · Reels · Creative Testing · Social Growth",
    tagline: "",
    codeWord: "Scarlet Sands",
    summary: "Creative designer and social growth specialist with 5+ years of experience in graphic design and social media for brands in Australia, the United States and Europe. I design polished static posts, carousels, stories and Reels in Canva, Photoshop and CapCut, and plan feeds that look premium and put together. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["designer", "premium visuals", "branding", "ad creative", "Instagram", "Facebook", "static ads", "carousels", "stories", "short-form video", "creative variations", "Meta Ads", "Photoshop", "Figma", "Canva", "AI tools", "engagement", "reach", "follower growth", "portfolio"],
    focus: ["design", "social", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "A strong portfolio, good taste and attention to detail", proof: "My portfolio is on this page: posters, promos, vouchers, brand boards and 9-post feeds, all in one consistent look per brand. Fragrance would be a new niche for me, and I would study your bottles, notes and tone from day one.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Design high-quality creatives for Instagram and Facebook: static ads, carousels, stories, banners", proof: "I design posts, promos, event graphics, stories and short videos in Canva and Photoshop for several brands, sized for Instagram and Facebook.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Visual concepts that fit a premium luxury brand", proof: "I plan calm, clean and premium feeds, like a sample aesthetic clinic in Beverly Hills and a makeup brand in Los Angeles, each with one palette, one type style and a fixed layout.", status: "yes", tab: "feeds", cta: "See my premium feeds" },
      { req: "Visual hierarchy, typography, composition and branding", proof: "I build brand boards with logos, colour palettes, typography and stationery on one sheet, so every post follows the same rules.", status: "yes", tab: "brands", cta: "See my brand boards" },
      { req: "Photoshop, Illustrator, Figma, Canva or similar", proof: "Canva, Adobe Photoshop and Figma every week. Illustrator is new for me, and I would learn it.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Short-form video content and basic-to-strong video editing", proof: "I edit Reels with captions, music and clean cuts in CapCut, and make short promo videos in Canva. Premiere Pro and DaVinci Resolve are new for me.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Different ad angles, hooks and creative variations for testing", proof: "I make several versions of one offer, with a different hook, headline or layout for each, and I track which one the audience likes best in Meta Business Suite.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Meta Ads Manager, campaign optimization, CTR, CPA, CPC and ROAS", proof: "I read reach, engagement and follower results in Meta Business Suite every week. Running paid campaigns in Ads Manager is new for me, and I would learn your account properly from day one.", status: "learn", tab: "results", cta: "See my reporting" },
      { req: "Growing social media pages and accounts", proof: "I grew a client's post views 50% to 265K and followers 147% in 90 days with a content calendar, consistent posting and branded designs.", status: "yes", tab: "results", cta: "See the results" },
      { req: "AI tools for creative testing, concepts and more ad variations", proof: "I design every graphic by hand in Canva and Photoshop. I use AI only for content planning, such as ideas, captions and posting schedules, and I check every result before it goes out. AI image and video tools are new for me, and I would learn the ones you prefer.", status: "learn" },
      { req: "Proactive: suggest ideas instead of waiting for instructions", proof: "I plan a month of content ahead, send a weekly update, and bring ideas with each one: what to post, what to test, what to change.", status: "yes", tab: "smm", cta: "See my content planning" }
    ],
    workSections: [
      { type: "block", key: "foodPosters" },
      { type: "block", key: "designs" },
      { type: "block", key: "feeds" },
      { type: "block", key: "brands" },
      { type: "block", key: "reels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "cupResults"] },
      { type: "block", key: "emails" }
    ],
    workOverrides: {
      foodPosters: {
        label: "Product Posters I Design for You",
        blurb: "Product posters I designed in Canva for made-up sample brands: clean cut-outs, gradient backgrounds and bold type that fit one brand look.",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => ({ src: "fp3-" + n + ".jpg", thumb: "fp3-" + n + ".jpg" }))
      },
      reels: {
        blurb: "Before-and-after Reels with captions and music for Landscaping Services in Australia. Tap a phone to play.",
        items: [2, 1, 3].map(n => ({ src: "reel-" + n + ".mp4", poster: "reel-" + n + ".jpg", kind: "video" }))
      }
    },
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      foodPosters: { label: "Product Poster Design", title: "Posters That Make a Product Stand Out.", text: "Cut-out product posters on clean gradients, made to stop the scroll." },
      designs: { label: "Ad & Social Creatives", title: "Creatives That Stop the Scroll.", text: "Static posts, promos and stories for Instagram and Facebook, with variations ready to test." },
      feeds:   { label: "Premium Feed Concepts", title: "A Feed That Looks Premium.", text: "Calm, clean nine-post plans around one palette, previewed before anything goes live." },
      brands:  { label: "Branding", title: "One Brand Look on Every Post.", text: "Logos, colours and type on one sheet, so every creative looks like the same brand." },
      reels:   { label: "Short-Form Video", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, made for Instagram and Facebook." },
      plan:    { label: "Social Growth", title: "Consistent Posting That Grows Your Page.", text: "A content calendar and weekly results in Meta Business Suite, so we see what works and do more of it." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "brands"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Scarlet Sands"
  },
  "casperflow-va": {
    label: "Virtual Assistant (CasperFlow, marketing for contractors)",
    headline: "Experienced Virtual Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Admin Support · Time Management · Problem Solving · Fluent English · CRM & Follow-Ups",
    tagline: "",
    summary: "Experienced Virtual Assistant with 5+ years of experience supporting business owners in Australia, the United States and Europe, with fluent written and spoken English. I handle admin, inboxes, calendars and follow-ups, keep every deadline on track, and send a clear daily update. When something breaks in a workflow or a booking, I find it, fix it and flag it.",
    keywords: ["experienced VA", "virtual assistant", "fluent English", "admin", "administrative", "time management", "problem solving", "contractors", "home service", "lead generation", "automation", "follow-up", "follow-ups", "CRM", "reviews", "daily update"],
    focus: ["admin", "crm", "english", "leads", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "An experienced VA", proof: "5+ years supporting business owners and a CEO in Australia, the United States and Europe, including a wellness brand I run today.", status: "yes", tab: "experience", cta: "See my experience" },
      { req: "Fluent English", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write clear, friendly emails and updates every day.", status: "yes" },
      { req: "Good with admin", proof: "Inbox, calendar, trackers and records for owners and a CEO, 200+ calendar events, 61 booking calendars and a 1,400+ contact lead database.", status: "yes", tab: "work", cta: "See my admin work" },
      { req: "Time management", proof: "I keep deadlines in trackers and calendars, send a daily and weekly update, and have supported the same clients for months without missed handovers.", status: "yes", tab: "work", cta: "See my trackers" },
      { req: "Problem solving", proof: "I check that workflows and automations run correctly and flag problems early, from broken booking links to follow-ups that did not fire.", status: "yes", tab: "work", cta: "See the workflow checks" },
      { req: "Marketing automation for contractors (GoHighLevel-style systems)", proof: "I build and manage GoHighLevel workflows, follow-ups and booking calendars. Contractor and trades niches would be new for me, and I would learn them properly from day one.", status: "learn" }
    ],
    workSections: [
      { type: "cards", part: "admin", keys: ["cdcTracker", "ambAdmin", "plushEmail", "ghlUpdates"] },
      { type: "cards", part: "crm", keys: ["ghlConvos", "ghlBooking", "ghlWorkflows"] }
    ],
    workHeads: {
      admin: { label: "Administrative Support", title: "Admin That Keeps Business Organized.", text: "Trackers, calendars, inboxes and daily updates, so nothing slips and every deadline is met." },
      crm:   { label: "Problem Solving", title: "Follow-Ups That Never Get Dropped.", text: "Enquiries, bookings and automations I check every day, with problems flagged and fixed early." }
    },
    resultsShots: "none",
    resultsNote: "Admin, follow-ups and reporting I handle every day.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Experienced Virtual Assistant application"
  },
  "funnelish-builder": {
    label: "Funnelish Funnel Builder (dropshipping health & beauty brands)",
    headline: "Funnelish Funnel Builder",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Funnelish · DTC Funnels · Health & Beauty · Mobile-Friendly · Localized Markets · Discord",
    tagline: "",
    codeWord: "FUNNELISH",
    summary: "Funnel and website builder with 5+ years of experience building mobile-friendly pages that bring in enquiries for brands in Australia, the United States and Europe, including health, wellness and beauty. Give me the product, the funnel structure and the copy, and I build it clean, check it on phone and desktop, test every button and form myself, and send a clear update when it is done. Funnelish itself is new for me, and I pick up page builders fast.",
    keywords: ["Funnelish", "funnel builder", "funnels", "dropshipping", "DTC", "health and beauty", "product launches", "funnel template", "copy and creative assets", "mobile-friendly", "attention to detail", "localized funnels", "The Netherlands", "Germany", "Nordic countries", "Israel", "international markets", "Discord", "per funnel", "part-time"],
    focus: ["web", "design", "english", "support", "social"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Experience using Funnelish", proof: "Funnelish itself is new for me, and I would not pretend otherwise. I build pages every day in Wix Studio, Webflow and Framer, so a template-based builder is a short step, and I would learn it properly on your first funnel.", status: "learn", tab: "websites", cta: "See my websites" },
      { req: "Experience with dropshipping or DTC funnels", proof: "I build pages and forms for brands that sell direct to customers, and I run the follow-up behind them in GoHighLevel: confirmations, reminders and order records. I have no dropshipping funnel conversion numbers I can prove, so I will not quote any.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Comfortable with health and beauty products", proof: "I work with a wellness brand in Australia and a beauty brand today, from product pages and orders to posts, graphics and Reels.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Build funnels quickly and reliably from a given product, structure and copy", proof: "That is how I already work: I follow the brief and the template exactly, use the copy and creative as given, and check my work before I send it.", status: "yes" },
      { req: "Everything looks good, works smoothly and is mobile-friendly", proof: "Every page I build is checked on phone and desktop, and I click every button, form and link myself before I say it is done.", status: "yes", tab: "websites", cta: "See my phone views" },
      { req: "Good attention to detail", proof: "A former Editor-in-Chief and online English teacher. I keep 7 workflow folders of automations and 61 calendars accurate, and flag problems early.", status: "yes", tab: "crm", cta: "See my CRM work" },
      { req: "Localized funnels for the Netherlands, Germany, Nordics and Israel", proof: "I work with clients in Australia, the United States and Europe. I do not speak these languages, as you said is fine, and I would paste in the localized copy exactly as given.", status: "yes" },
      { req: "Discord for updates and coordination", proof: "Yes. I send a clear daily update to every client and I am comfortable on Discord, Slack and similar tools.", status: "yes" },
      { req: "Part-time, paid per funnel completed", proof: "That works well for me. I build efficiently and I am happy to be paid on output.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "block", key: "designs" },
      { type: "block", key: "crm" }
    ],
    workHeads: {
      websites: { label: "Pages & Funnels", title: "Pages That Look Good and Work Smoothly.", text: "Live client sites and concepts built mobile-first, with working forms and clear buttons." },
      designs:  { label: "Product Creative", title: "Graphics That Match the Product.", text: "Promos, product posts and brand sheets in one consistent look." },
      crm:      { label: "Follow-Up Behind the Page", title: "Orders and Enquiries Followed Up.", text: "Confirmations, reminders and records running in GoHighLevel, so nothing gets lost after the click." }
    },
    resultsShots: "none",
    resultsNote: "Leads, calendars and follow-ups I handle every day.",
    stats: ["years", "brands", "calendars", "leads"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "FUNNELISH"
  },
  "sealix-dm": {
    label: "Digital Marketing Specialist (SEALIX & Viccon Coatings, Australia)",
    headline: "Digital Marketing Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Meta Business Suite · Canva & CapCut · Landing Pages · GoHighLevel · Google Analytics Certified",
    tagline: "",
    summary: "Digital Marketing Specialist with 5+ years of experience supporting business owners in Australia, the United States and Europe, Google Analytics and Digital Marketing (Google) certified. I manage and schedule social content, design graphics and short-form video in Canva and CapCut, and build and update websites and landing pages. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Digital Marketing Specialist", "Google Ads", "Meta Ads", "campaigns", "conversions", "landing pages", "Odoo", "GoHighLevel", "GHL", "SEO", "keyword research", "on-page optimisation", "organic visibility", "ecommerce", "lead generation", "Reels", "CapCut", "Higgsfield", "AI tools", "graphics", "marketing copy", "social media posts", "daily results", "weekly progress updates", "independently", "proactive", "quick learner", "individual applicant"],
    focus: ["social", "design", "web", "crm", "leads", "admin", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Google Ads & Meta Ads: manage campaigns, optimise performance, create ads and monitor conversions", proof: "I am Google Analytics and Digital Marketing (Google) certified, and I read Meta Business Suite performance data daily to see what is working. Running and optimising paid Google and Meta ad campaigns myself is new for me, and I would learn your account setup properly from day one.", status: "learn", tab: "results", cta: "See my reporting" },
      { req: "Websites & Landing Pages: build and improve pages using Odoo and GoHighLevel (GHL)", proof: "I build and update websites (Wix Studio, HTML, CSS, JavaScript) and manage pages and automations in GoHighLevel daily. Odoo is new for me specifically, and I would learn its page builder properly from day one.", status: "learn", tab: "websites", cta: "See my websites" },
      { req: "SEO: keyword research, on-page optimisation and improving organic visibility", proof: "I am Google Analytics and Digital Marketing (Google) certified and I track what content performs in Meta Business Suite. Hands-on SEO keyword research and on-page optimisation would be new for me, and I would learn it properly.", status: "learn" },
      { req: "Video Editing: short-form Reels and advertising videos using CapCut, Higgsfield and AI tools", proof: "I edit Reels and short-form video in CapCut, with captions, music and clean cuts. Higgsfield is new for me, and I would pick it up the way I picked up GoHighLevel.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Content Creation: design graphics, write marketing copy and schedule social media posts", proof: "I design posters, promos and event graphics in Canva, write captions and copy, and schedule posts across Facebook and Instagram with Meta Business Suite.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Reporting: monitor daily results, manage assigned tasks and provide weekly progress updates", proof: "I send a clear weekly update to every client and track performance in Meta Business Suite, the same way I would report on your campaigns.", status: "yes" },
      { req: "Individual applicant, proactive, technically confident, quick learner, works independently", proof: "I am one individual, not an agency. I have supported the same clients for months without missed handovers, and I would rather say a tool is new to me than guess and get it wrong.", status: "yes", tab: "experience", cta: "See my experience" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "emails" },
      { type: "cards", part: "ops", keys: ["seoAi", "ghlWorkflows", "plushCalendar", "ghlUpdates"] }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      ops: { label: "Reporting & Admin", title: "Results Tracked, Updates Sent.", text: "Weekly progress updates and performance tracking in Meta Business Suite, plus GoHighLevel automations kept running." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "brands"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Digital Marketing Specialist application - SEALIX & Viccon Coatings"
  },
  "photo-studio-sg": {
    label: "Client Relations & Digital Operations Specialist (Photography & Videography Studio, Singapore)",
    headline: "Client Relations & Digital Operations Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "WhatsApp & Email Support · Quotations & Invoices · Payment Follow-Ups · Scheduling Coordination · Zoho Books",
    tagline: "",
    summary: "Client Relations & Digital Operations Specialist with 5+ years of experience in client-facing sales administration, booking coordination and operations management via email, WhatsApp and social media for business owners in Australia, the United States and Europe. I prepare quotations and invoices, follow up to chase payments, coordinate schedules between clients and service providers, and answer every enquiry thoroughly across email, WhatsApp and social media. I grew a client's post views 50% to 265K and followers 147% in 90 days, and I am currently completing a cloud bookkeeping course to strengthen my invoicing and expense-keying skills.",
    keywords: ["Client Relations", "Digital Operations Specialist", "WhatsApp", "email", "social media inquiries", "quotations", "invoices", "accurate quotations and invoices", "chase payments", "follow up", "follow-up", "digital application forms", "100% accuracy", "coordinate schedules", "service providers", "cloud accounting software", "Zoho Books", "Zoho", "processing quotations", "keying expenses", "consultative communication", "high EQ", "creative project briefs", "close bookings", "photography", "videography", "Singapore", "Google Workspace", "Meta Suite", "Dropbox", "fully remote", "critical thinking", "independently"],
    focus: ["admin", "crm", "leads", "support", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Manage all incoming email, WhatsApp & social media inquiries", proof: "I check and reply to every new enquiry across email, WhatsApp and Messenger, so no client is left waiting.", status: "yes", tab: "crm", cta: "See my enquiry work" },
      { req: "Prepare and issue accurate quotations and invoices", proof: "I prepare invoices and keep booking and payment records accurate for every client.", status: "yes", tab: "admin", cta: "See my admin work" },
      { req: "Proactively follow up with customers to secure and chase payments", proof: "I follow up on open quotes and unpaid invoices by email and message, so nothing goes cold.", status: "yes", tab: "crm", cta: "See my follow-up work" },
      { req: "Process digital application forms with 100% accuracy", proof: "I keep contact and booking records consistent and accurate across every system I use, with a weekly check for errors.", status: "yes" },
      { req: "Coordinate schedules between clients and service providers", proof: "I manage 61 booking calendars and 200+ calendar events, confirming and rescheduling between clients and the team.", status: "yes", tab: "admin", cta: "See my booking work" },
      { req: "Be familiar with Zoho Books: quotations, invoices, payments, expenses", proof: "I keep records in Zoho CRM and GoHighLevel, and I am currently completing a 2-week Xero bookkeeping course on invoicing, expenses and reconciliation to move quickly into Zoho Books.", status: "learn", tab: "crm", cta: "See my CRM work" },
      { req: "Consultative communication: read client intent, recommend packages, close bookings", proof: "I read every brief closely, recommend the right option, and follow up until the booking is confirmed, the same instinct I use qualifying leads.", status: "yes", tab: "experience", cta: "See my experience" },
      { req: "4+ years in client-facing sales admin, booking coordination or operations", proof: "5+ years supporting business owners and a CEO in Australia, the United States and Europe, managing bookings, enquiries and client communication daily.", status: "yes", tab: "experience", cta: "See my experience" },
      { req: "Google Workspace, WhatsApp, Meta Suite and Dropbox", proof: "I use Google Workspace, WhatsApp, Meta Business Suite and Google Drive daily; Dropbox is a short step from the file systems I already use.", status: "yes" },
      { req: "Prior experience in photography/videography studios or creative service businesses (advantage)", proof: "New for me in this exact industry, but I support creative and service-based brands today, and I would learn your packages and pricing from day one.", status: "learn" }
    ],
    workSections: [
      { type: "cards", part: "crm", keys: ["ghlConvos", "pgFollow", "ghlBooking"] },
      { type: "cards", part: "admin", keys: ["cdcTracker", "ghlUpdates"] }
    ],
    workHeads: {
      crm:   { label: "Client Communication & Follow-Up", title: "Enquiries Answered, Payments Followed Up.", text: "Email, WhatsApp and CRM conversations I manage daily, with fast replies and consistent payment follow-up." },
      admin: { label: "Scheduling & Records", title: "Bookings Coordinated, Records Kept Accurate.", text: "Calendars, trackers and daily updates that keep every client and service provider on the same page." }
    },
    resultsShots: "none",
    resultsNote: "Bookings, enquiries, follow-ups and records I handle every day.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Client Relations & Digital Operations Specialist application"
  },
  "beauty-packaging": {
    label: "Packaging & Product Designer (Beauty Brand, US & EU)",
    headline: "Packaging & Product Designer",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Packaging & Labels · Product Mockups · Photoshop & Figma · Beauty & Cosmetics · Amazon & Shopify Listings",
    tagline: "",
    summary: "Graphic designer with 5+ years of experience creating product visuals, mockups and brand identity for beauty, wellness and lifestyle brands in the United States, Europe and Australia. I design cut-out product shots, promo graphics and listing-style product images in Adobe Photoshop, Canva and Figma, and I build brand boards with logos, colour palettes and typography so every SKU looks like the same brand. I have designed for 10+ brands and I iterate quickly on feedback; dielines and print-ready prep are new to me, and my Civil Engineering background in AutoCAD technical drawings makes them a short step.",
    keywords: ["packaging", "packaging design", "product design", "boxes", "labels", "pouches", "jars", "bottles", "SKUs", "product mockups", "renders", "revisions", "iterating quickly", "US and EU", "labeling requirements", "marketing assets", "product images", "Amazon", "Shopify", "listings", "print-ready", "dielines", "bleed", "CMYK", "Adobe Illustrator", "Photoshop", "Figma", "beauty", "cosmetics", "skincare", "supplement", "clean, premium, trustworthy", "portfolio", "reliable communication", "steady weekly hours", "long-term part-time"],
    focus: ["design", "web", "english", "social"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "Proven experience in product and/or packaging design (portfolio required)", proof: "My portfolio is this page: product shots on clean gradients, promo graphics, brand boards and full brand looks for 10+ brands. Packaging artwork for boxes, pouches and jars is new for me, and the product-presentation and brand side is what I do every week.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Design and refine packaging (boxes, labels, pouches, jars/bottles) for existing and upcoming SKUs", proof: "I design label-style layouts, promo panels and product graphics, and I keep one type and colour system across a whole range so a new SKU still looks like the family. Real dieline artwork is new for me, and I would start on your existing templates with your supply chain team.", status: "learn", tab: "brands", cta: "See my brand systems" },
      { req: "Create product mockups and renders for new launches", proof: "I create product mockups and cut-out product presentations in Photoshop and Canva, and I have built a full 3D model in SketchUp Pro for my Civil Engineering thesis, so 3D renders are familiar ground.", status: "yes", tab: "designs", cta: "See my product visuals" },
      { req: "Improve existing product designs based on team and customer feedback", proof: "Most of my work is revisions: clients send notes, I turn them around the same or next day, and I keep every version so we can compare.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Adapt designs for different markets (US and EU labeling requirements)", proof: "I adapt one design into different sizes, languages and layouts for different audiences. US and EU cosmetics labeling rules are new to me, and I would learn your compliance checklist and follow it exactly.", status: "learn" },
      { req: "Design supporting marketing assets (product images for Amazon/Shopify listings)", proof: "I design clean, premium product images, promos and banners sized for web and social, and I build and manage live client websites, so listing images and product pages are the same work.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Collaborate with the supply chain team so designs are print/manufacture-ready", proof: "I am used to working to someone else's technical spec: I drew my thesis plates in AutoCAD, elevations, framing and details to exact dimensions. Prepress checks are new, and I would follow your printer's spec sheet line by line.", status: "learn", tab: "designs", cta: "See my technical drawings" },
      { req: "Strong skills in Adobe Illustrator and/or Photoshop (Figma is a plus)", proof: "Adobe Photoshop, Canva and Figma every week. Illustrator is new for me, and I am learning it now so I can work in vector dielines properly.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Understanding of print-ready file prep (dielines, bleed, CMYK)", proof: "I know bleed, safe margins and export settings from print work, and CMYK and dielines are the part I am still learning. Honest answer: I would not guess on a print file, I would check it against your printer's template.", status: "learn" },
      { req: "Good eye for beauty/cosmetics aesthetics: clean, premium, trustworthy", proof: "Calm, clean and premium is my default: a makeup brand in Los Angeles, an aesthetic clinic in Beverly Hills and a real beauty client, each on one palette and one type style.", status: "yes", tab: "feeds", cta: "See my premium concepts" },
      { req: "Comfortable receiving revisions and iterating quickly", proof: "I send drafts early, ask for notes, and turn revisions around fast. Clients get a check copy first and the final only after they are happy.", status: "yes" },
      { req: "Reliable communication and steady weekly hours", proof: "I send a short daily or weekly update, I reply the same day, and I have worked the same steady hours for the same clients for months. 65 Mbps fiber with backup internet, a backup laptop and a backup generator.", status: "yes", tab: "admin", cta: "See my updates" },
      { req: "Bonus: experience designing for beauty, skincare or supplement brands", proof: "Yes: I design for a beauty brand and a wellness brand today, plus makeup and aesthetic clinic concepts.", status: "yes", tab: "designs", cta: "See the beauty work" },
      { req: "Bonus: familiarity with FDA/EU labeling basics for cosmetics or supplements", proof: "New for me. I would read your current approved labels first and build a checklist I can self-check against before anything goes to you.", status: "learn" },
      { req: "Bonus: experience designing for Amazon listings", proof: "I have designed product images and web banners, but not a full Amazon listing set. The image specs and A+ layouts are new for me and quick to learn.", status: "learn", tab: "designs", cta: "See my product graphics" }
    ],
    workSections: [
      { type: "block", key: "productShots" },
      { type: "block", key: "brands" },
      { type: "block", key: "designs" },
      { type: "block", key: "feeds" },
      { type: "block", key: "websites" },
      { type: "cards", part: "technical", keys: ["thesisAutocad", "thesisSketchup"] }
    ],
    workOverrides: {
      productShots: {
        label: "Product Visuals I Design for You",
        blurb: "Product presentations I designed in Photoshop and Canva for sample brands: clean cut-outs, gradient backgrounds and bold type, the same look that works on a pack panel, a listing image and an ad.",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => ({ src: "fp3-" + n + ".jpg", thumb: "fp3-" + n + ".jpg" }))
      },
      websites: {
        blurb: "Live client websites and website concepts I designed and built: product pages, layout, type and photography, the same eye a Shopify listing needs."
      },
      designs: {
        blurb: "Promos, vouchers, labels, posters and short videos I designed for real clients in Photoshop and Canva. Clean type, one palette per brand, and every one revised until the owner was happy."
      },
      brands: {
        label: "Brand identity design",
        blurb: "A real brand board I built for Landscaping Services in Australia (logo suite, colour palette, typography on one sheet), plus the logo set I designed for it: wordmark, icon and alternate lockups, so every piece of marketing still reads as one brand.",
        items: [
          { src: "brand-board-landscaping.webp", title: "Landscaping Services Brand Identity", note: "Reliable, professional and trusted", accent: "#1f4d2c", tint: "#eef5ef", chips: ["Logo suite", "Colour palette", "Typography", "Stationery"], board: true, scroll: true },
          { src: "logo-kerbing-king-wordmark.jpg", title: "Logo Suite: Wordmark" }, { src: "logo-kerbing-king-icon.jpg", title: "Logo Suite: Icon" },
          { src: "logo-kerbing-king.png", title: "Logo Suite: Primary Lockup" }, { src: "logo-kerbing-king-alt.jpg", title: "Logo Suite: Alternate Lockup" }
        ]
      }
    },
    workHeads: {
      productShots: { label: "Product Presentation", title: "Product Visuals That Look Premium.", text: "Cut-out product shots on clean backgrounds, ready for a listing, an ad or a pack panel." },
      brands:       { label: "Brand Systems", title: "One Brand Look on Every SKU.", text: "Logos, colours and typography on one sheet, so a new product still looks like the family." },
      designs:      { label: "Graphic Design", title: "Clean, Premium, Trustworthy.", text: "Promos, labels and marketing graphics designed in Photoshop and Canva, revised quickly." },
      feeds:        { label: "Beauty & Cosmetics Aesthetics", title: "A Look That Fits a Beauty Brand.", text: "Makeup, skincare and clinic concepts built on one palette and one type style." },
      websites:     { label: "Product Pages & Listings", title: "Product Pages People Trust.", text: "Live sites and concepts where the product, the photo and the type do the selling." },
      technical:    { label: "Technical Drawing", title: "Built to an Exact Spec.", text: "AutoCAD plates and a SketchUp 3D model from my Civil Engineering degree, where millimetres matter." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days. Proof the designs I make get seen.",
    stats: ["brands", "years", "views", "followers"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Packaging & Product Designer application"
  },
  "premiumpages-wdd": {
    label: "Web Designer / Developer (PremiumPages.io, Dubai)",
    headline: "Web Designer / Developer",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Landing Pages · HTML & CSS · WordPress & Webflow · Technical SEO · Claude Code · Mobile QA",
    tagline: "",
    codeWord: "WDD – Maria Simbajon – 2",
    summary: "Web designer and developer with 5+ years building websites and landing pages for service businesses in Australia, the United States and Europe, where I designed AND built the pages myself. I hand-code HTML, CSS and JavaScript with Claude Code as my daily coding partner, build in Wix Studio, Webflow and WordPress, and QA every page on desktop and mobile before I call it done. I follow written briefs exactly, step by step, and report back with URLs and screenshots.",
    keywords: ["landing pages", "funnels", "HTML/CSS", "HTML", "CSS", "Tailwind", "WordPress", "Elementor", "Webflow", "custom PHP", "Hostinger", "technical SEO", "AEO", "AI-search", "Rank Math", "sitemaps", "noindex", "schema", "robots", "llms.txt", "Core Web Vitals", "alt text", "canonical", "LCP", "Claude Code", "Cursor", "Copilot", "typography", "spacing", "hierarchy", "premium, not templated", "QA", "desktop and mobile", "written briefs", "numbered steps", "do not touch", "written reports", "clear written reports", "Dubai time", "exclusive"],
    focus: ["web", "design", "english", "admin"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof, and I have been honest about what is new for me.",
    match: [
      { req: "3+ years building websites, with real landing pages you designed AND built yourself", proof: "5+ years. Live client sites I designed and built end to end: thekerbingking.com.au (landscaping, plus the whole brand) and the Reclamation program landing page for loveandsoundtherapies.com. My own site, themariaoffice.com, is hand-coded by me.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Build landing pages and funnels in HTML/CSS/Tailwind from written briefs", proof: "I write HTML, CSS and JavaScript by hand for my own site, my client concept pages and a live US client site. Tailwind specifically is new for me, and I would pick it up the way I picked up GoHighLevel: properly, on a test build first.", status: "yes", tab: "websites", cta: "See my pages" },
      { req: "Strong visual sense: typography, spacing, hierarchy, premium not templated", proof: "I design every page before I build it: full-photo heroes, one type family, generous spacing and a clear order on the page. No Figma file is handed to me; the look is mine.", status: "yes", tab: "websites", cta: "See the designs" },
      { req: "WordPress/Elementor and Webflow maintenance: content changes, fixes, page builds", proof: "WordPress and Webflow are part of my toolkit and I build in page builders every day (Wix Studio, Webflow, Framer). Elementor itself is newer for me, and I would work on staging first before touching a live client site.", status: "yes", tab: "websites", cta: "See my builds" },
      { req: "Basic PHP reading ability, custom PHP sites on Hostinger", proof: "Honest answer: I read code more than I write PHP. I can follow a PHP template and find where content lives, but PHP is the part of your stack I am ready to learn, not claim.", status: "learn" },
      { req: "You already use an AI coding tool (Claude Code, Cursor, Copilot) daily", proof: "Claude Code is how I work every day: my portfolio, my client dashboards, a per-job resume system and a live client site were all built with it. This is the part of your job post I am most at home in.", status: "yes", tab: "websites", cta: "See what I built with it" },
      { req: "Technical SEO and AI-search (AEO): sitemaps, noindex rules, schema, robots/llms.txt, Core Web Vitals, alt text", proof: "I set up on-page SEO and AI search optimisation (ChatGPT, Perplexity, Gemini) for a live landscaping site, and I handle titles, meta descriptions, alt text, compressed images, robots rules and noindex headers on my own sites. Rank Math, schema markup and Core Web Vitals work I have not done hands-on yet, and I would learn them on your sites properly.", status: "yes", tab: "ops", cta: "See my SEO work" },
      { req: "QA your own work on desktop and mobile before you report it done. Every time.", proof: "That is already my habit: I check every page at phone and desktop width, click every link, submit every form myself, and only then send the link. I would rather find it than have you find it.", status: "yes" },
      { req: "Written briefs with numbered steps, executed exactly. Bold \"do not touch\" is absolute.", proof: "I follow written instructions step by step and report back with URLs and screenshots per step. If something outside the brief looks wrong, I finish the brief first, then flag it separately and wait for your go-ahead.", status: "yes" },
      { req: "Questions come with what you tried and your proposed answer", proof: "That is how I report now: what I did, what I saw, what I think the fix is, and the one decision I need from you. Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief, so the writing is clear.", status: "yes" },
      { req: "09:00–18:00 Dubai time, Monday to Friday, exclusive", proof: "Dubai hours are 13:00–22:00 my time, which I can work consistently. I already work overlapping Australian and US hours for clients, so a fixed daily schedule is normal for me.", status: "yes" },
      { req: "Paid 48-hour test task, then a video interview", proof: "Happy to do the test task. Give me the brief with the numbered steps and I will send back the URLs, the screenshots and a short written report.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "cards", part: "ops", keys: ["seoAi", "ghlUpdates"] },
      { type: "block", key: "designs" }
    ],
    workHeads: {
      websites: { label: "Landing Pages & Websites", title: "Pages That Look Expensive.", text: "Live client sites and concept pages I designed and built myself, in Wix Studio and in hand-written HTML, CSS and JavaScript." },
      ops:      { label: "Technical SEO & Reporting", title: "Found on Google and on AI Search.", text: "On-page SEO and AI search optimisation on a live client site, plus the written reports I send after every job." },
      designs:  { label: "Visual Design", title: "Graphics That Match the Page.", text: "Typography, spacing and hierarchy applied to brand graphics, promos and social posts." }
    },
    resultsShots: "none",
    resultsNote: "Websites, brands and client work behind the pages I build.",
    stats: ["brands", "years", "leads", "calendars"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "WDD – Maria Simbajon – 2"
  },
  "homefield-email": {
    label: "Email Operations & Administrative Assistant (Homefield Email, email outreach for insurance agencies)",
    headline: "Email Operations & Administrative Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Inbox Setup · Domains & DNS · SPF, DKIM & DMARC · Instantly Warm-Up · Trackers · Admin Support",
    tagline: "",
    summary: "Dependable assistant with 5+ years of experience keeping email, records and admin running for business owners in Australia, the US and Europe. I manage domains, DNS records, trackers and follow-ups. I follow written setup procedures exactly and verify every record.",
    keywords: ["Email Operations", "Administrative Assistant", "email inboxes", "inbox setup", "multiple domains", "domain management", "domain purchases", "naming guidelines", "sender names", "signatures", "forwarding", "email authentication", "SPF", "DKIM", "DMARC", "Instantly", "warm-up", "warm-up settings", "deliverability", "inbox health", "tracker", "renewal dates", "client onboarding", "onboarding checklists", "scheduling", "follow-ups", "spreadsheets", "client records", "Google Sheets", "Google Docs", "attention to detail", "checklist", "competing priorities", "passwords", "account access", "confidential client information", "documented processes", "status updates", "email marketing agency", "multiple client accounts"],
    focus: ["admin", "ops", "english", "support", "crm"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Prepare domain and email address lists for client approval, following naming guidelines", proof: "This is the kind of list work I do every week: I prepare lists in Google Sheets, follow the naming and format rules exactly, and send them for approval before anything is bought or created.", status: "yes", tab: "work", cta: "See my trackers" },
      { req: "Coordinate approved domain purchases and create inboxes through designated providers", proof: "I buy and manage domains myself and connect them to live client sites, including Cloudflare and GitHub Pages hosting. Creating business inboxes from a provider's setup steps is checklist work, and I follow a checklist exactly.", status: "yes", tab: "websites", cta: "See the live sites" },
      { req: "Configure sender names, signatures, forwarding and other account settings", proof: "I set up and maintain sender details, signatures and email settings in Google Workspace and GoHighLevel for client accounts, and I keep them consistent across every account.", status: "yes", tab: "work", cta: "See the email work" },
      { req: "Set up or verify SPF, DKIM and DMARC following established procedures", proof: "I work with DNS records today: A, CNAME and TXT records in Cloudflare for client domains, custom domains and SSL verification. SPF, DKIM and DMARC are TXT records set from a written procedure, and I follow the procedure exactly and then verify each record.", status: "yes", tab: "websites", cta: "See my domain work" },
      { req: "Connect inboxes to Instantly and manage warm-up settings", proof: "I run email and SMS campaigns, sequences and follow-ups in GoHighLevel every day, so connecting accounts and following your warm-up process is work I do with care and on schedule.", status: "yes", tab: "work", cta: "See the campaign work" },
      { req: "Test new inboxes, troubleshoot connection issues and flag problems early", proof: "I check that workflows, booking links and automations actually run, test everything myself before I call it done, and flag what I cannot fix with the details needed to fix it.", status: "yes", tab: "work", cta: "See the checks I run" },
      { req: "Maintain an accurate tracker of domains, inboxes, client assignments, setup status and renewal dates", proof: "Trackers are my strongest habit: tasks, deadlines and statuses in Asana, Notion, Trello and Google Sheets, a 1,400+ contact database kept clean, and 61 booking calendars accurate.", status: "yes", tab: "work", cta: "See my trackers" },
      { req: "Monitor inbox health and coordinate maintenance or replacements when needed", proof: "I monitor accounts, enquiries and conversations daily so nothing sits unanswered. I check inbox health against your thresholds and coordinate replacements when needed.", status: "yes", tab: "work", cta: "See the daily monitoring" },
      { req: "Keep client onboarding checklists updated and follow up on missing information or approvals", proof: "I keep onboarding checklists moving and follow up until the missing detail or approval arrives, by email, message and CRM.", status: "yes", tab: "work", cta: "See my follow-ups" },
      { req: "Schedule meetings and track outstanding tasks and deadlines", proof: "200+ calendar events and onboarding sessions coordinated, 61 calendars managed, and a CEO's calendar and inbox handled daily.", status: "yes", tab: "work", cta: "See the admin work" },
      { req: "Update spreadsheets, client records and internal systems accurately", proof: "I keep contacts, orders, payment records and lead data accurate in GoHighLevel, Google Sheets and Google Drive, with no duplicates and no guessed details.", status: "yes", tab: "work", cta: "See the records" },
      { req: "Organize documents and prepare routine reports and status updates", proof: "An organised Google Drive and Notion hub for every client, plus a short daily update and a weekly report on progress, outstanding items and problems.", status: "yes", tab: "work", cta: "See my reports" },
      { req: "Communicate with clients, vendors and team members clearly and professionally", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write clear, friendly emails and updates every day for owners and a CEO.", status: "yes" },
      { req: "Document recurring tasks and suggest improvements that reduce errors", proof: "I write the SOPs for the work I do, in Notion and Google Docs, so the process survives without me. I also built the trackers and dashboards I work from, because the manual version was slower and easier to get wrong.", status: "yes", tab: "work", cta: "See the documented processes" },
      { req: "Confident in Google Sheets, Google Docs and other online business tools", proof: "Google Workspace daily for 5+ years, plus Notion, Asana, Trello, ClickUp, Monday.com, GoHighLevel and Cloudflare.", status: "yes" },
      { req: "Excellent attention to detail on repetitive setup tasks and account information", proof: "7 workflow folders of automations, 61 calendars and 200+ events kept accurate. Repetitive setup work is where I am strongest, because I work from a checklist and check my own work twice.", status: "yes" },
      { req: "Follow a checklist, manage competing priorities and work without repeated reminders", proof: "My clients do not have to chase me. I keep my own task list and deadlines, start the day with the priorities and end it with an update on what is done and what is next.", status: "yes" },
      { req: "Good judgment with passwords, account access and confidential client information", proof: "I already hold logins for client CRMs, hosting, domains and social accounts. I keep credentials in a password manager, never share or reuse them, and ask before touching anything outside the task.", status: "yes" },
      { req: "Experience supporting an email marketing agency or multiple client accounts", proof: "I support several clients at once across Australia, the United States and Europe, each with their own accounts, trackers and deadlines. An email marketing agency would be a new industry, not new work.", status: "yes", tab: "experience", cta: "See my experience" }
    ],
    workSections: [
      { type: "cards", part: "email", keys: ["plushEmail", "ghlConvos", "cdcFollow"] },
      { type: "cards", part: "records", keys: ["cdcTracker", "cdcDrive", "ghlLeads", "cdcUpdates"] },
      { type: "block", key: "websites" }
    ],
    workHeads: {
      email:    { label: "Email & Outreach", title: "Emails That Get Answered.", text: "Email and text campaigns, enquiry follow-ups and reminders I set up, send and check every day." },
      records:  { label: "Trackers & Records", title: "Account Records That Stay Accurate.", text: "Accounts, statuses, deadlines and renewal dates kept in trackers and organised files, with a short update every day." },
      websites: { label: "Domains & Hosting", title: "Domains I Buy, Point and Keep Live.", text: "Live client sites I connect myself: domains purchased, DNS records set in Cloudflare, SSL verified and every page tested." }
    },
    resultsShots: "none",
    resultsNote: "Admin, email follow-ups and records I handle every day.",
    stats: ["years", "calendars", "events", "leads"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Email Operations & Administrative Assistant application"
  },
  "vanuatu-smm": {
    label: "Social Media & Advertising Specialist (Vanuatu team, remote)",
    headline: "Social Media & Advertising Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Facebook & Instagram · Digital Marketing · Analytics & Reporting · Photoshop · Reels · Website Design",
    tagline: "",
    summary: "Social Media & Advertising Specialist with 5+ years of experience managing Facebook and Instagram for business owners in Australia, the US and Europe. I design in Photoshop, edit Reels and track results in Meta Business Suite. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["Social Media", "Advertising", "online presence", "paid campaigns", "Facebook", "Instagram", "TikTok", "LinkedIn", "digital marketing", "promotions", "analytics", "reporting", "engagement", "followers", "reach", "leads", "campaign performance", "Photoshop", "promotional videos", "reels", "customer inquiries", "comments", "website design", "digital trends", "Vanuatu time", "remote", "independently", "portfolio of past campaigns"],
    focus: ["social", "design", "web", "english", "admin"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Manage Facebook, Instagram, TikTok, LinkedIn and other platforms", proof: "I manage Facebook and Instagram accounts every week: a monthly content calendar, scheduled posts and captions for a wellness brand and a landscaping business in Australia. I edit the same vertical Reels that run on TikTok.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Understanding of online advertising, promotions and digital marketing strategies", proof: "I design the promo graphics and ad creatives campaigns run on (offers, vouchers, seasonal campaigns), run email and text marketing, and plan content pillars and competitor research for local brands.", status: "yes", tab: "designs", cta: "See my promo designs" },
      { req: "Monitor engagement, followers, reach, leads and campaign performance", proof: "I track performance in Meta Business Suite and send a clear weekly update. Post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Photoshop and editing short promotional videos and reels", proof: "Adobe Photoshop and Canva for graphics, CapCut for Reels with captions and music, both in my portfolio below.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Respond professionally to customer inquiries and comments", proof: "I check every new enquiry, reply on email, Messenger and the CRM and follow up until it is closed, so no customer is left waiting.", status: "yes", tab: "crm", cta: "See my enquiry work" },
      { req: "Digital savvy and up to date with digital trends", proof: "I work in Claude Code, GoHighLevel and Meta Business Suite daily, and I built my own website, dashboards and trackers.", status: "yes", tab: "websites", cta: "See what I built" },
      { req: "Proficient in maintaining and developing website design", proof: "I designed and built live client websites and concept sites, and hand-code my own site, themariaoffice.com.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Excellent written and spoken communication", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" },
      { req: "Bachelor's degree in any major", proof: "Bachelor of Science in Civil Engineering, ASSCAT (2021 to 2024).", status: "yes" },
      { req: "Works independently and as part of a team", proof: "I run my own task list and send a daily update, and I work inside client teams and with other creatives on shared trackers.", status: "yes", tab: "admin", cta: "See my updates" },
      { req: "Available during overlapping hours with Vanuatu time", proof: "Vanuatu is only 3 hours ahead of me, and I already work Australian business hours for clients, so the overlap is every working day.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "smm", keys: ["plushCalendar", "cupSchedule", "plushTrack"] },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "emails" },
      { type: "block", key: "websites" },
      { type: "cards", part: "crm", keys: ["ghlConvos", "pgFollow"] }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      smm:      { label: "Social Media Management & Analytics", title: "Pages That Grow and Reports That Prove It.", text: "Content calendars, scheduled posts and performance tracking for Facebook and Instagram." },
      designs:  { label: "Photoshop & Promo Design", title: "Promos That Make People Stop and Book.", text: "Photoshop and Canva promos, vouchers and ad-ready graphics for campaigns." },
      reels:    { label: "Short Promotional Videos", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, made for Instagram, Facebook and TikTok." },
      websites: { label: "Website Design", title: "Websites That Back Up the Campaign.", text: "Live client sites and concepts I designed and built myself." },
      crm:      { label: "Customer Inquiries & Comments", title: "Every Enquiry Answered Professionally.", text: "Replies and follow-ups across email, Messenger and CRM." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "brands"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media & Advertising Specialist application"
  },
  "dynamic-energy-ops": {
    label: "Operations & Administration Coordinator (Dynamic Energy Solutions, Western Australia)",
    headline: "Operations & Administration Coordinator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Job Records · Compliance Paperwork · Inventory · Cost Tracking · Email · Workflows",
    tagline: "",
    summary: "Organised, proactive Operations & Administration Coordinator with 5+ years supporting business owners in Australia, the United States and Europe. I keep job records accurate in ServiceM8 and GoHighLevel, track costs in spreadsheets, follow up on missing information and manage inboxes. As a Civil Engineering graduate, I drew a 10 kW hybrid solar system layout.",
    keywords: ["Operations", "Administration", "Coordinator", "ServiceM8", "job management software", "job records", "accurate", "up to date", "missing information", "follow up", "follow-ups", "paperwork", "documents", "submissions", "outstanding", "inventory", "consumable", "consumables", "stock", "labour and material costs", "cost tracking", "forecasting", "receipts", "reconciliation", "supporting records", "email", "urgent", "workflows", "forms", "data transfers", "CRM", "spreadsheets", "online portals", "business software", "solar", "electrical", "attention to detail", "written", "confidential", "proactive", "ownership", "reliable internet"],
    focus: ["admin", "ops", "crm", "leads", "english", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Transfer job information from contractor portals and emails into our job management software", proof: "I have used ServiceM8 for a blue-collar business, and I enter orders, bookings, contacts and payments into GoHighLevel every day, double-checking each record against the original email or message.", status: "yes", tab: "admin", cta: "See the records I keep" },
      { req: "Keep job records complete, accurate and up to date", proof: "Records for 67 products and every customer order are organised and current, with a short daily update on what changed.", status: "yes", tab: "admin", cta: "See the records" },
      { req: "Identify missing information and follow up with the relevant team members", proof: "I follow up by email and message until the missing details arrive, and track upcoming deadlines in Google Calendar.", status: "yes", tab: "admin", cta: "See my follow-ups" },
      { req: "Check completed installation records for the required paperwork, track outstanding documents through to completion", proof: "I keep a tracker for every document and deadline, mark each item from start to done, and chase what is still outstanding. I work from a written checklist and verify before I submit.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Maintain product and consumable records, allocate items to the correct jobs", proof: "I organised the records for 67 products and tied every customer order to its items in one Notion hub and GoHighLevel.", status: "yes", tab: "admin", cta: "See product and order records" },
      { req: "Track labour and material costs, update forecasting reports", proof: "As a project intern I prepared budget summaries and built Excel databases tracking milestones, costs and documents. Today I send weekly KPI and progress reports.", status: "yes", tab: "admin", cta: "See cost tracking" },
      { req: "Organise and filter incoming emails, flag urgent matters", proof: "I ran a CEO's inbox, calendar and appointments: sorted new mail, flagged urgent items and sent an end-of-day update. Over 200 calendar events coordinated.", status: "yes", tab: "admin", cta: "See my inbox and calendar work" },
      { req: "Assist with migration, help transfer and check data for accuracy and completeness", proof: "I set up and keep GoHighLevel, Zoho CRM and HubSpot records clean. In a data transfer I match the old and new records line by line and fix gaps before sign-off.", status: "yes", tab: "crm", cta: "See my CRM work" },
      { req: "Support system setup, including forms and workflows suited to the business", proof: "I built 7 workflow folders in GoHighLevel (confirmations, reminders, follow-ups) plus 61 booking calendars, and a Notion hub with documented processes.", status: "yes", tab: "crm", cta: "See my workflows" },
      { req: "Confidence with spreadsheets, online portals and business software", proof: "ServiceM8, Google Sheets, Excel, GoHighLevel, Zoho CRM, HubSpot, Asana, Trello and Notion are tools I use.", status: "yes" },
      { req: "Working with electrical, solar or installation businesses", proof: "I am a Civil Engineering graduate. I drew the plates of a 10 kW hybrid solar system in AutoCAD, so I can read installation terms and talk with engineers and installers.", status: "yes", tab: "admin", cta: "See the solar layout" },
      { req: "Excellent written and verbal English", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" },
      { req: "Reliable internet, a suitable computer and a quiet workspace", proof: "65 Mbps fiber with a backup mobile Wi-Fi, a backup laptop, a backup power generator, headset and webcam.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "jobs", keys: ["ghlRecords", "cdcFollow", "sm8Jobs"] },
      { type: "cards", part: "docs", keys: ["cdcTracker", "cdcDrive"] },
      { type: "cards", part: "stock", keys: ["ambAdmin", "notionHq"] },
      { type: "cards", part: "costs", keys: ["engPlanning", "cdcUpdates"] },
      { type: "cards", part: "systems", keys: ["ghlWorkflows", "ghlBooking"] },
      { type: "cards", part: "solar", keys: ["thesisAutocad"] }
    ],
    workHeads: {
      jobs:    { label: "Job Administration", title: "Job Records That Are Complete and Current.", text: "Orders, bookings and contacts entered accurately, with every missing detail chased until it arrives." },
      docs:    { label: "Compliance Administration", title: "Paperwork Tracked Through to Done.", text: "Trackers and organised folders so every required document is found, checked and submitted." },
      stock:   { label: "Inventory and Consumables", title: "Products and Orders Always Accounted For.", text: "Product records, order records and one central hub, so every item is allocated to the right job." },
      costs:   { label: "Accounting Support", title: "Costs and Reports Kept in Order.", text: "Cost tracking databases, budget summaries and weekly reports in spreadsheets." },
      systems: { label: "Systems and Workflow Improvement", title: "Workflows That Save the Team Time.", text: "Forms, automations and calendars set up in the CRM and checked so they run correctly." },
      solar:   { label: "Solar Know-How", title: "I Speak Your Industry's Language.", text: "A 10 kW hybrid solar system layout I drew as a Civil Engineering graduate." }
    },
    resultsShots: "none",
    resultsNote: "Records, calendars and trackers I manage every day.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Operations & Administration Coordinator application"
  },
  "patient-coordinator": {
    label: "Patient Coordinator (Canada clinic)",
    headline: "Patient Coordinator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Patient Enquiries · Appointment Scheduling · Follow-Ups · Intake & Booking · Records · Clinic Software",
    tagline: "",
    summary: "Professional, organized Patient Coordinator with 5+ years of experience supporting wellness and service businesses in Australia, the United States and Europe. I answer enquiries, follow up by email and message, and manage appointment bookings and records accurately. I run 61 booking calendars in GoHighLevel.",
    keywords: ["Patient Coordinator", "patient", "inbound", "outbound", "emails", "inquiries", "follow up", "prospective", "existing", "schedule", "confirm", "appointments", "intake", "booking", "clinicians", "clinic staff", "patient information", "records", "privacy", "verbal and written communication", "organization", "attention to detail", "friendly", "multiple tasks", "priorities", "computer skills", "clinic software", "healthcare", "customer service", "reliable", "proactive", "patient experience"],
    focus: ["admin", "crm", "support", "english", "leads"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Respond to inbound patient calls, emails and inquiries", proof: "I reply to enquiries on email, Messenger and WhatsApp every day in a warm, clear tone, and check every new enquiry so no one is left waiting.", status: "yes", tab: "crm", cta: "See the enquiries I handle" },
      { req: "Follow up with prospective and existing patients", proof: "I follow up with people who have not replied or confirmed, by email and message, with reminders and a note of every outcome.", status: "yes", tab: "crm", cta: "See my follow-ups" },
      { req: "Schedule, confirm and manage patient appointments", proof: "I manage 61 booking calendars in GoHighLevel, with confirmations, reminders and accurate notes on every appointment.", status: "yes", tab: "crm", cta: "See the booking calendars" },
      { req: "Assist patients with intake and booking processes", proof: "I set up booking links and forms, and automations that send confirmations and reminders. I check each one runs correctly.", status: "yes", tab: "crm", cta: "See the booking setup" },
      { req: "Coordinate scheduling with clinicians and clinic staff", proof: "I ran a CEO's calendar and appointments, with 200+ calendar events coordinated, and I send the team a short daily update so nothing is missed.", status: "yes", tab: "admin", cta: "See my calendar and updates" },
      { req: "Maintain accurate patient information and records", proof: "I keep contacts, bookings and orders accurate and current in GoHighLevel, Zoho CRM and HubSpot, including a 1,400+ contact database.", status: "yes", tab: "crm", cta: "See the records I keep" },
      { req: "Knowledge of Canadian privacy laws and regulations", proof: "I treat every client and customer record as confidential, share it only with the team member who needs it, and follow your clinic's privacy procedure exactly.", status: "yes" },
      { req: "Strong verbal and written communication skills", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" },
      { req: "Excellent organization and ability to manage multiple tasks and priorities", proof: "I keep trackers, deadlines and Google Drive records for several clients at once, and I mark each item from start to done.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Strong computer skills and clinic software", proof: "GoHighLevel, Zoho CRM, HubSpot, Google Workspace, Notion, Asana and Trello are tools I use every day.", status: "yes" },
      { req: "Experience in healthcare administration, reception, patient coordination or customer service", proof: "I handle bookings, enquiries and customer support for a wellness brand in Australia, which is the same patient-facing work in a friendly, professional tone.", status: "yes", tab: "crm", cta: "See the customer support work" }
    ],
    workSections: [
      { type: "cards", part: "inbox", keys: ["ghlConvos", "pgFollow"] },
      { type: "cards", part: "schedule", keys: ["ghlBooking", "cdcFollow", "ghlWorkflows"] },
      { type: "cards", part: "records", keys: ["ghlRecords", "ghlLeads", "cdcDrive"] },
      { type: "cards", part: "organized", keys: ["cdcTracker", "ghlUpdates"] }
    ],
    workHeads: {
      inbox:     { label: "Patient Communication", title: "Every Enquiry Answered With Care.", text: "Calls, emails and messages answered warmly and followed up, so no patient is left waiting." },
      schedule:  { label: "Appointment Scheduling", title: "Appointments Booked, Confirmed and Kept.", text: "Booking calendars, confirmations and reminders that keep clinicians and patients on the same page." },
      records:   { label: "Patient Records", title: "Records That Are Accurate and Tidy.", text: "Contacts and bookings kept complete, current and easy to find." },
      organized: { label: "Organization", title: "Many Tasks, One Calm Day.", text: "Trackers and a short daily update that keep priorities clear." }
    },
    resultsShots: "none",
    resultsNote: "Bookings, calendars and records I manage every day.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Patient Coordinator application"
  },
  "brine-fitness-editor": {
    label: "Video Editor (Brine Fitness)",
    headline: "Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Short-Form Video · Captions & Text Overlays · B-roll & Graphics · Zooms & Sound Effects · Colour Correction · Reels, TikTok & Shorts",
    tagline: "",
    summary: "Video Editor with 5+ years of experience editing short-form social media content for business owners in Australia, the United States and Europe. I turn raw footage into clean, well-paced videos with accurate captions, zooms, sound effects and B-roll. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["Video Editor", "short-form", "60-120 seconds", "Instagram", "Facebook", "TikTok", "YouTube Shorts", "clean cuts", "pacing", "transitions", "captions", "text overlays", "B-roll", "images", "graphics", "animations", "colour correction", "lighting", "contrast", "zooms", "sound effects", "branding", "scripts", "raw footage", "turnaround", "educational", "talking-head", "instructions", "communication", "reliable", "long-term"],
    focus: ["social", "design", "english", "admin", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Experience editing short-form videos (60-120 seconds)", proof: "5+ years of vertical Reels and short videos for Instagram and Facebook, cut from raw footage with captions and music in CapCut. TikTok and YouTube Shorts use the same format.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Clean cuts, good pacing and engaging transitions", proof: "Every edit has the dead space removed, a clear order and a clean transition, so the message stays easy to follow and nothing distracts from it.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Accurate, well-timed captions and text overlays", proof: "Captions timed word by word to the voice and checked against the script, so the words are right and it works with the sound off. Plain text overlays for key points.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Relevant B-roll, images, graphics and animations", proof: "I add matching B-roll and images, and make the graphics and short animated promos in Canva, kept simple and on-brand.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Colour correction, lighting and contrast adjustments", proof: "I adjust colour, brightness and contrast on every clip so the footage looks clean and consistent from start to end.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Zooms, sound effects and visual elements to keep people watching", proof: "A hook in the first seconds, slow punch-in zooms on key words, light sound effects and music, used lightly so the message stays clear.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Follow instructions and keep consistent branding", proof: "I follow the script and direction exactly, keep each brand's fonts, colours and look the same on every video, and nothing goes out before it is previewed.", status: "yes", tab: "feeds", cta: "See the brand consistency" },
      { req: "Good communication and reliable turnaround times", proof: "A short update on every task, deadlines tracked in Asana, Notion and Trello, and a weekly report for every client.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Educational content that is accurate and clear", proof: "I edit to the script word for word, check every caption against it, and keep effects simple so accuracy and clarity come first.", status: "yes" },
      { req: "Editing software", proof: "CapCut for editing and Canva for graphics and short videos, every day.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "designs" },
      { type: "cards", part: "organized", keys: ["cdcTracker", "cupResults"] }
    ],
    workHeads: {
      reels:     { label: "Short-Form Video", title: "Clean Edits That Keep People Watching.", text: "Raw footage cut into short videos with a hook, accurate captions, zooms and music." },
      designs:   { label: "Graphics & Animations", title: "Visuals That Support the Message.", text: "Simple Canva graphics, covers and short animated videos that match the brand." },
      organized: { label: "Reliable Turnaround", title: "On Time, Every Week.", text: "Trackers and weekly results that keep every video on schedule." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Video Editor - Maria Simbajon"
  },
  "food-lifestyle-editor": {
    label: "Food & Lifestyle Video Editor (Instagram & TikTok)",
    headline: "Food & Lifestyle Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Food Reels · TikTok & Instagram · Hooks & Captions · Music & Sound Effects · Colour Grading · CapCut",
    tagline: "",
    summary: "Short-Form Video Editor with 5+ years of experience editing Instagram and TikTok content for business owners in Australia, the United States and Europe. I turn vertical footage into polished, ready-to-publish Reels with hooks, captions, music and sound effects. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["video editor", "food", "lifestyle", "Instagram", "TikTok", "Reels", "vertical footage", "short-form", "quick turnaround", "pacing", "shot selection", "sound design", "restaurant reviews", "food discoveries", "recipes", "hooks", "storytelling", "gfx", "sfx", "music", "audience retention", "CapCut", "Premiere Pro", "captions", "colour grading", "ready-to-publish", "independent", "creative initiative"],
    focus: ["social", "design", "english", "admin", "support"],
    order: ["work", "results", "work2", "experience", "skills", "why", "contact"],
    workSplit: 2,
    introAfter: "results",
    workHeadHide: true,
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Fast, efficient editing with quick turnaround times", proof: "Every task has a deadline in Asana, Notion or Trello, a short update when it is done and a weekly report. 65 Mbps fiber with a backup mobile Wi-Fi, backup laptop and power generator, so deadlines hold.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Strong understanding of food content: pacing, shot selection and sound design", proof: "I made food Reels for sample brands (cupcakes and a restaurant edit): the tastiest shot first, quick cuts on the beat, a soft whoosh or chime on key moments, and food posters in Canva to match.", status: "yes", tab: "reels", cta: "See my food Reels" },
      { req: "Experience editing engaging TikToks and Instagram Reels", proof: "5+ years of vertical Reels in CapCut with captions and music. TikTok uses the same 9:16 format, so every edit is ready for both.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Turn raw vertical footage into polished, ready-to-publish social assets", proof: "Plain before-and-after footage from a landscaping business edited into branded Reels, exported and ready to schedule.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Strong instincts for hooks, storytelling, gfx, sfx, music and audience retention", proof: "I open with the strongest moment, add on-screen text so it works with the sound off, and make the graphics in Canva. I track views and followers in Meta Business Suite: post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Proficiency in Premiere Pro or CapCut", proof: "CapCut is my editing tool every day, with Canva for graphics and short videos.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Captions, music, sound effects and basic colour grading", proof: "Captions timed word by word to the voice, music and light sound effects on every edit, and a warm colour grade (brightness, contrast, saturation) so food looks fresh and consistent.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Work independently and take creative initiative", proof: "I made these food Reels, posters and a nine-post feed concept without a brief, and I plan content for clients on my own and preview it before anything goes out.", status: "yes", tab: "feeds", cta: "See the feed plans" },
      { req: "Work directly with you and bring creative flair to every video", proof: "I work directly with business owners, send a short update on every task and keep each brand's look and voice the same, with a fresh idea on every video.", status: "yes", tab: "admin", cta: "See my updates" }
    ],
    workSections: [
      { type: "block", key: "featReels" },
      { type: "block", key: "reels" },
      { type: "block", key: "foodPosters" },
      { type: "block", key: "designs" },
      { type: "cards", part: "turnaround", keys: ["cupResults", "cdcTracker"] }
    ],
    reelsWrap: true,
    workOverrides: {
      featReels: {
        label: "Food Reels I Edit for You",
        blurb: "Two restaurant food Reels with music, sound effects and a warm colour grade, made for sample brands. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", name: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", name: "Stack'd Burgers (sample)" }
        ]
      },
      foodPosters: {
        label: "Food Posters I Design for You",
        blurb: "Food posters I designed in Canva for made-up sample brands: steak, noodles, sandwiches, burgers and cakes.",
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => ({ src: "fp3-" + n + ".jpg", thumb: "fp3-" + n + ".jpg" }))
      },
      reels: {
        label: "Reels I edit for you",
        blurb: "A fresh smoothie product video, two more food Reels (a restaurant edit and cupcakes), plus before-and-after Reels with captions and music. Sample brands, tap a phone to play.",
        items: [
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-food.mp4", poster: "reel-food.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Restaurant (sample)" },
          { src: "reel-cupcake.mp4", poster: "reel-cupcake.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Cupcake Business (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" }, { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      }
    },
    workHeads: {
      featReels:   { label: "Food & Lifestyle Reels", title: "Food Reels That Make People Hungry.", text: "Vertical footage cut with a hook, quick pacing, music and sound effects." },
      reels:       { label: "More Short-Form Video", title: "Reels That Keep People Watching.", text: "Product, food and before-and-after Reels with captions and music." },
      foodPosters: { label: "Food Visuals", title: "Posters That Make the Dish Pop.", text: "Food graphics that match the Reels and stop the scroll." },
      designs:     { label: "Graphics & Covers", title: "Graphics That Match Every Video.", text: "Canva covers, posts and short animated videos, on-brand across your feed." },
      turnaround:  { label: "Quick Turnaround", title: "On Time, Every Week.", text: "Trackers and weekly results that keep every video on schedule." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Video Editor - Maria Simbajon"
  },
  "nordic-ad-localizer": {
    label: "Video Editor, Nordic Ad Localization (DTC Health & Wellness)",
    headline: "Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Meta Video Ads · AI-Assisted Localization · Voiceovers · Captions & On-Screen Text · Re-Cuts · Briefs to Finished Cuts",
    codeWord: "banana",
    tagline: "",
    summary: "Video Editor with 5+ years of experience editing Meta video ads and Reels for brands in Australia, the United States and Europe. I take a brief and turn it into a finished cut with accurate captions, voiceover, on-screen text and clean timing.",
    keywords: ["video editor", "Meta video ads", "localization", "translation", "Danish", "Norwegian", "Swedish", "Finnish", "AI-assisted", "voiceovers", "captions", "on-screen text", "re-cut", "briefs", "performance data", "health and wellness", "DTC", "timing", "detail-oriented", "full-time"],
    focus: ["social", "design", "english", "admin", "support"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Editing Meta video ads", proof: "5+ years of vertical Reels, UGC-style product videos and promo ads for Instagram and Facebook, cut from raw footage with captions, music and clean transitions.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "AI-assisted workflows for voiceovers and video", proof: "My UGC and AI model videos use an AI voiceover and AI-generated video, with the captions re-timed word by word to the new voice and every video labelled as AI-generated.", status: "yes", tab: "featReels", cta: "See my UGC videos" },
      { req: "Swap voiceovers, re-time captions, adjust on-screen text and re-cut", proof: "When a voiceover or line changes, I re-time the captions to the new audio, rebuild the on-screen text so it fits the screen and re-cut so the pacing stays natural.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Strong eye for timing and captions", proof: "Captions timed word by word to the voice, short clean line breaks and music cut to the beat, so it works with the sound on or off.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Take a brief and deliver a finished cut independently", proof: "I follow the script and direction exactly, keep each brand's fonts and colours the same, and send a finished video with a short update. Nothing goes out before it is previewed.", status: "yes", tab: "designs", cta: "See my brand work" },
      { req: "Iterate based on performance data", proof: "I read Meta Business Suite every week: one client's post views grew 50% to 265K and followers 147% in 90 days, by keeping what worked and re-cutting what did not.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Detail-oriented: catch mistranslations, awkward line breaks and off-sync audio", proof: "I check every caption against the script line by line, watch each export with and without sound, and fix line breaks and sync before it goes out.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Health and wellness DTC experience", proof: "Wellness brand videos and a Facebook Page for a wellness brand in Australia (see the real screenshots), plus a sample wellness UGC video.", status: "yes", tab: "results", cta: "See the real screenshots" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "organized", keys: ["cdcTracker", "cupResults"] }
    ],
    workHeads: {
      reels:     { label: "Meta Video Ads", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, captions, music and transitions made for Instagram, Facebook and TikTok." },
      featReels: { label: "Voiceover Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI-Assisted Video", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      organized: { label: "Reliable Turnaround", title: "On Time, Every Week.", text: "Trackers and weekly results that keep every video on schedule." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,
    caseOverrides: {
      cupResults: { solution: "I track every post's views and followers in Meta Business Suite each week and report what worked, so the next cut is better than the last." }
    },
    workOverrides: {
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" },
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "banana - Video Editor, Nordic Ad Localization - Maria Simbajon"
  },
  "unseen-support": {
    label: "Customer Support Assistant (UNSEEN Studios, streetwear online store)",
    headline: "Customer Support Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Customer Emails · Order Checks · Returns & Refunds · Complaints · Templates · Internal Team Messages",
    tagline: "",
    summary: "Customer Support Assistant with 5+ years supporting online businesses in Australia, the United States and Europe. I read the full history, check each order and reply to every customer in clear, professional English using templates and rules. I write short internal notes so the team can act fast.",
    keywords: ["Customer Support", "customer emails", "unread", "oldest to newest", "email history", "order", "payment", "refunds", "fulfillment", "tracking", "return", "withdrawal", "cancellation", "delivery status", "complaint", "wrong or missing item", "size or address change", "discount code", "professional English", "templates", "written rules", "photos and videos", "internal message", "replacement", "store credit", "detail-oriented", "reliable", "Central European hours"],
    focus: ["support", "english", "admin", "crm", "leads"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Work through all unread emails, oldest to newest, every working day", proof: "I check every new enquiry in order so no customer is left waiting, and I send the team a short end-of-day update on what was answered and what is still open.", status: "yes", tab: "crm", cta: "See the enquiries I handle" },
      { req: "Read each customer's full email history and check the order (items, payment, refunds, fulfillment, tracking)", proof: "I read the whole conversation first, then check the order record: items, payment status and delivery details. I keep orders and payment records accurate for an online wellness brand with 67 products.", status: "yes", tab: "admin", cta: "See the order and payment records" },
      { req: "Identify what the customer needs: return, withdrawal, cancellation, delivery status, complaint, wrong or missing item, size or address change, refund status or discount code", proof: "I sort every message by what the customer needs, reply to that exact question, and record the outcome so the next person sees the full story.", status: "yes", tab: "crm", cta: "See my customer conversations" },
      { req: "Reply professionally in English using your templates and written rules", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I follow written procedures exactly and keep a warm, clear tone in every reply.", status: "yes" },
      { req: "Request missing information and evidence for complaints, such as photos and videos", proof: "I follow up by email and message until the missing details arrive, and I note every item received so the team can decide quickly.", status: "yes", tab: "admin", cta: "See my follow-ups" },
      { req: "Write a short internal message whenever someone must act (refund, replacement, store credit, discount code)", proof: "I send short, structured updates covering progress, outstanding tasks and issues. Each internal message states who the customer is, the order, the amount, the reason and the action needed.", status: "yes", tab: "admin", cta: "See my daily updates" },
      { req: "Detail-oriented and reliable on a daily inbox", proof: "I keep trackers, deadlines and records for several clients at once, and mark each item from start to done.", status: "yes", tab: "admin", cta: "See my trackers" },
      { req: "Monday to Saturday, overlapping Central European business hours", proof: "I have supported clients in Europe for years, and I work a schedule that overlaps your hours. Reliable internet: 65 Mbps fiber with a backup mobile Wi-Fi, backup laptop and power generator.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "inbox", keys: ["ghlConvos", "pgFollow"] },
      { type: "cards", part: "orders", keys: ["ghlRecords", "ambAdmin"] },
      { type: "cards", part: "team", keys: ["ghlUpdates", "cdcTracker"] }
    ],
    workHeads: {
      inbox:  { label: "Customer Emails", title: "Every Customer Answered With Care.", text: "Enquiries read in order, answered clearly and followed up until the case is closed." },
      orders: { label: "Order Checks", title: "Orders and Payments Checked Before I Reply.", text: "Order and payment records kept accurate, so every answer is based on the facts." },
      team:   { label: "Internal Team Messages", title: "Short Notes the Team Can Act On.", text: "Daily updates and trackers that show who needs to do what, and by when." }
    },
    resultsShots: "none",
    resultsNote: "Customer enquiries, orders and records I manage every day.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Customer Support Assistant - Maria Simbajon"
  },
  "hgbuilt-wunderbuild": {
    label: "Construction Estimation VA (HG Built, Brisbane)",
    headline: "Construction Estimation Virtual Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    highlight: { icon: "&#127891;", text: "Civil Engineering Graduate" },
    sub: "Wunderbuild · Construction Estimates · Supplier & Subcontractor Quotes · Cost Tracking · Excel · Brisbane Hours",
    tagline: "",
    summary: "Construction Estimation Virtual Assistant with 5+ years supporting businesses in Australia, the United States and Europe, Wunderbuild experience from my internship and a Civil Engineering degree. I keep costs, quantities and supplier details accurate, follow up every quotation and report to the team. I already work Australian hours.",
    keywords: ["Wunderbuild", "construction estimation", "construction administration", "estimates", "plans", "specifications", "material requirements", "supplier", "subcontractor", "quotations", "costs", "quantities", "cost breakdowns", "progress claims", "invoices", "purchase orders", "Australian residential construction", "Excel", "attention to detail", "Brisbane", "independently", "deadlines"],
    focus: ["admin", "ops", "leads", "english", "crm"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Hands-on experience with Wunderbuild", proof: "During my Project Engineering internship at a planning office I explored and used Wunderbuild: the Jobs list, Schedule timeline, Specifications and Assemblies.", status: "yes", tab: "build", cta: "See my Wunderbuild work" },
      { req: "Prepare and manage construction estimates", proof: "In my internship I worked through Wunderbuild's Estimations (specifications by category, with what is and is not allowed for) and its assemblies (timber framing and structural steel line items). As a Civil Engineering graduate and Project Engineering Intern I also prepared budget summaries and built Excel databases tracking milestones, costs and documents.", status: "yes", tab: "build", cta: "See my Wunderbuild and cost work" },
      { req: "Review construction plans, specifications and material requirements", proof: "I drew a full set of plates in AutoCAD (elevations, roof framing, footing and column details) and built the 3D model in SketchUp, so I read drawings and specifications comfortably.", status: "yes", tab: "plans", cta: "See my drawings" },
      { req: "Request, follow up on and compare supplier and subcontractor quotations", proof: "I research companies online, check the details, write a short summary of fit and keep them side by side in a spreadsheet. I follow up by email and message until the missing information arrives.", status: "yes", tab: "quotes", cta: "See my follow-ups" },
      { req: "Update project costs, quantities and supplier details", proof: "I keep records for 67 products and every customer order accurate, and update contact and supplier-style details line by line against the original.", status: "yes", tab: "records", cta: "See the records I keep" },
      { req: "Cost breakdowns, progress claims, invoices and purchase orders", proof: "I track every order and payment in GoHighLevel, check each one against the original, and prepare invoices for my own clients. I also built Excel cost databases as a Project Engineering Intern.", status: "yes", tab: "records", cta: "See orders and payments" },
      { req: "Coordinate with suppliers, subcontractors and the internal team", proof: "I coordinated 200+ calendar events and send the team a short daily update on progress, outstanding tasks and issues.", status: "yes", tab: "coordinate", cta: "See my updates" },
      { req: "Familiarity with Australian residential construction", proof: "I support Australian businesses every week, including a landscaping and kerbing company, and I understand building and civil terms as a Civil Engineering graduate.", status: "yes", tab: "plans", cta: "See my site work" },
      { req: "Good knowledge of Excel and strong attention to detail", proof: "Excel databases for budgets and costs, plus a Data Analysis: Visualizations in Excel course (The Open University). I double-check every figure before I send it.", status: "yes", tab: "build", cta: "See my Excel work" },
      { req: "Good English, organisation, independence and deadlines", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I track deadlines in Asana, Notion and Trello and report weekly.", status: "yes", tab: "coordinate", cta: "See my trackers" },
      { req: "Working hours agreed in Brisbane time", proof: "Yes. I already work Australian hours for other clients, with 65 Mbps fiber, a backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "build", keys: ["wunderbuild", "engInternship"] },
      { type: "cards", part: "plans", keys: ["thesisAutocad", "engSurvey"] },
      { type: "cards", part: "quotes", keys: ["pgFollow", "cdcFollow"] },
      { type: "cards", part: "records", keys: ["ambAdmin", "ghlRecords"] },
      { type: "cards", part: "coordinate", keys: ["ghlUpdates", "cdcTracker"] }
    ],
    workHeads: {
      build:      { label: "Wunderbuild & Estimating", title: "Schedules and Costs Kept Current.", text: "Wunderbuild jobs, schedules, specifications and assemblies explored during my internship, plus Excel cost databases and budget summaries from my Project Engineering internship." },
      plans:      { label: "Plans & Specifications", title: "I Read Drawings Like an Engineer.", text: "Plates drawn in AutoCAD and site measurements taken as a Civil Engineering graduate." },
      quotes:     { label: "Supplier & Subcontractor Quotes", title: "Quotes Chased Until They Arrive.", text: "Polite follow-ups by email and message, with every reply recorded and compared." },
      records:    { label: "Costs, Invoices & Purchase Orders", title: "Every Figure Checked Twice.", text: "Orders, payments and product records kept accurate, so nothing is missed on a claim or invoice." },
      coordinate: { label: "Team Coordination", title: "Everyone Knows What Is Next.", text: "Daily updates and trackers that keep suppliers, subcontractors and the team on the same page." }
    },
    resultsShots: "none",
    resultsNote: "Schedules, records and trackers I manage every day.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Wunderbuild Virtual Assistant"
  },
  "autocad-sg": {
    label: "AutoCAD Drafter (Singapore)",
    headline: "AutoCAD Drafter",
    photo: "maria-civil-hardhat.webp",
    headlinePill: true,
    headlineBadge: "5+ Years",
    highlight: { icon: "&#127891;", text: "Civil Engineering Graduate" },
    sub: "AutoCAD · Layout & Working Drawings · Title Blocks · Dimensions · Submission Sets · Singapore Hours",
    tagline: "",
    summary: "Civil Engineering graduate and Virtual Assistant with 5+ years of experience, drafting in AutoCAD. I draw plans, elevations, structural details and title blocks to exact dimensions, ready for your engineer to review.",
    keywords: ["AutoCAD", "drafting", "layout", "renovation", "as-built", "working drawings", "layers", "lineweights", "title block", "submission sets", "QP endorsement", "HDB", "MCST", "BCA", "URA", "SCDF", "Singapore"],
    focus: ["admin", "ops", "english"],
    order: ["work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Drafting in AutoCAD: layout, renovation, as-built and working drawings", proof: "I drew a full set of plates in AutoCAD for my Civil Engineering thesis: front and side elevations, roof framing and truss plans, footing and column details, a power layout and a solar system diagram. Tap to see the drawings.", status: "yes", tab: "drawings", cta: "See my AutoCAD drawings" },
      { req: "Layers, lineweights and title block", proof: "Every plate in my set has its own title block and dimensions, arranged neatly and kept consistent from the first sheet to the last.", status: "yes", tab: "drawings", cta: "See the title blocks" },
      { req: "Submission-ready drawing sets for your QP's endorsement", proof: "As a Civil Engineering graduate I am used to drawings that an engineer reviews and signs. I follow the QP's markups exactly and check every sheet against your requirements list before I send the set.", status: "yes", tab: "site", cta: "See my site and engineering work" },
      { req: "Reading plans and working with engineers", proof: "I trained in the field with an automatic level and tripod and worked as a Project Engineering Intern, so I speak the language of engineers and contractors.", status: "yes", tab: "site", cta: "See my site work" },
      { req: "AutoCAD drawings only, as requested", proof: "Understood. I deliver exactly the drawings you ask for, in the format and naming you set, on time.", status: "yes" },
      { req: "Singapore company, Singapore hours", proof: "I am in the Philippines, in the same time zone as Singapore, with 65 Mbps fiber, a backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "drawings", keys: ["thesisAutocad", "thesisSketchup"] },
      { type: "cards", part: "site", keys: ["engSurvey", "engInternship"] }
    ],
    workHeads: {
      drawings: { label: "AutoCAD Drafting", title: "Drawings I Created to Exact Dimensions.", text: "Plans, elevations, framing and details drawn in AutoCAD, each sheet with its own title block, plus the 3D model in SketchUp." },
      site:     { label: "Engineering Background", title: "I Read Drawings Like an Engineer.", text: "Site measurements and an engineering internship from my Civil Engineering degree." }
    },
    caseOverrides: {
      thesisAutocad: { title: "I created these thesis plates in AutoCAD: elevations, roof framing, footing details and 10 kW hybrid solar system" },
      thesisSketchup: { title: "I designed and modeled this thesis building in SketchUp: glass facade, laser-cut panels and rooftop solar", tools: ["SketchUp Pro", "3D modeling", "Scenes", "Plans to 3D"] }
    },
    resultsShots: "none",
    stats: ["years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "AutoCAD Drafter"
  },
  "ea-home-services": {
    intro: { video: "../images/intro-hi-six.mp4", poster: "../images/intro-poster.jpg" },
    label: "Executive Assistant (fast-growing home services company, Australia)",
    headline: "Executive Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Payments & Records · CRM · Bookings · Insurance Follow-Ups · Instagram Videos · Sydney Hours",
    tagline: "",
    summary: "Executive Assistant with 5+ years of experience running the back end for business owners in Australia, the United States and Europe. I keep records, bookings, follow-ups and payments accurate, and post Instagram videos on schedule. I grew a client's post views 50% to 265K and followers 147% in 90 days.",
    keywords: ["executive assistant", "back end", "payments", "payroll", "online banking", "CRM", "customer records", "bookings", "invoices", "tradespeople", "repairs", "insurance claims", "Instagram", "videos", "organised", "accurate", "proactive", "Sydney business hours"],
    focus: ["admin", "crm", "ops", "english", "social"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "CRM: keep customer records, bookings and invoices clean and up to date", proof: "I keep 67 products and every customer order, booking and payment accurate in GoHighLevel, plus a 1,400+ contact database and 61 booking calendars.", status: "yes", tab: "crm", cta: "See my CRM work" },
      { req: "Payments: pay suppliers and staff through online banking, with an approval process", proof: "I track every order and payment against the original record and double-check each figure before it goes anywhere. I follow your approval steps exactly.", status: "yes", tab: "records", cta: "See orders and payments" },
      { req: "Book and manage tradespeople for repairs", proof: "I coordinated 200+ calendar events and bookings for an Australian landscaping company, with confirmations, reminders and a daily update.", status: "yes", tab: "records", cta: "See my bookings" },
      { req: "Lodge insurance claims and follow them through to closed", proof: "I follow up by email and message until the missing information arrives, record every reply and track each deadline from start to done.", status: "yes", tab: "followup", cta: "See my follow-ups" },
      { req: "Post videos to Instagram on a regular schedule", proof: "I edit Reels in CapCut and schedule posts every week. Post views up 50% to 265K and followers up 147% in 90 days.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Extremely organised, nothing slips through the cracks", proof: "Trackers in Asana, Notion and Trello, a daily update and a weekly report for every client.", status: "yes", tab: "followup", cta: "See my trackers" },
      { req: "Excellent written and spoken English", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" },
      { req: "Monday to Friday, Sydney business hours, reliable internet", proof: "Yes. I already work Australian hours for other clients, with 65 Mbps fiber, a backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "records", keys: ["ghlRecords", "ambAdmin", "ghlBooking"] },
      { type: "cards", part: "crm", keys: ["ghlConvos", "ghlWorkflows"] },
      { type: "cards", part: "followup", keys: ["pgFollow", "cdcTracker", "ghlUpdates"] },
      /* Social media part follows the portfolio's Social Media order:
         designs, reels, feeds, content calendar, UGC videos (brand identity removed for this job) */
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "cards", part: "social", keys: ["plushCalendar", "cupSchedule", "plushTrack"] },
      { type: "block", key: "featReels" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      emails: { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      records:  { label: "Payments, Bookings & Records", title: "Every Figure Checked Twice.", text: "Orders, payments, bookings and records kept accurate, so nothing slips through the cracks." },
      crm:      { label: "CRM", title: "Customer Records That Stay Clean.", text: "Enquiries, bookings and automations I check every day, with problems flagged and fixed early." },
      followup: { label: "Follow-Through", title: "Followed Up Until It Is Closed.", text: "Trackers, reminders and daily updates that carry every task from start to done." },
      designs:  { label: "Social Media Design", title: "Graphics That Make Posts Stand Out.", text: "Canva posts, promos, event graphics and short videos, ready to schedule." },
      reels:    { label: "Instagram Videos", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, posted on a regular schedule." },
      feeds:    { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine-post plans around one palette and a fixed layout, previewed before anything goes live." },
      social:   { label: "Content Strategy", title: "Posts That Go Out on Schedule.", text: "A monthly content calendar, scheduled posts and results tracking for Instagram and Facebook." },
      featReels: { label: "UGC Videos", title: "Product Videos Ready to Post.", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." }
    },
    reelsContain: true,
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      }
    },
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"],
        images: ["smm-content-plan.jpg"]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Executive Assistant application"
  },
  "email-designer-ecom": {
    label: "Email Designer (email marketing agency, ecommerce brands worldwide)",
    headline: "Email Designer",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Campaign & Flow Emails · Ecommerce · Template Systems · Photoshop & Canva · Fast Turnaround · British & American English",
    tagline: "",
    summary: "Email Designer with 5+ years of experience designing for ecommerce brands in Australia, the United States and Europe. I turn your copy into on-brand emails that guide the eye to one clear action, using repeatable templates. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["email designer", "campaign", "flow", "ecommerce", "high-converting", "template system", "quick turnarounds", "copy", "hierarchy", "above the fold", "brand voice", "Figma", "Photoshop", "British English", "American English", "self-starter", "deadlines", "fast-paced"],
    focus: ["design", "crm", "english", "admin", "social"],
    order: ["work", "results", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Design high-converting campaign and flow emails to a consistently high standard", proof: "Two four-email sample campaigns (a luxury perfume launch with an abandoned-bag email, and a makeup brand), each with a hero, one headline and one button. I also build the confirmation, reminder and follow-up flows for a wellness brand in GoHighLevel.", status: "yes", tab: "emailVelour", cta: "See the email campaigns" },
      { req: "Build and maintain a template system for each client", proof: "For every brand I set the colours, fonts, header, button and footer once, then reuse them in every email, so each new one is quick and always on brand.", status: "yes", tab: "emailRose", cta: "See a second brand" },
      { req: "Quick turnarounds where speed matters as much as polish", proof: "Every task has a deadline in Asana, Notion or Trello, a short update when it is done and a weekly report. 65 Mbps fiber with a backup mobile Wi-Fi, backup laptop and power generator, so deadlines hold.", status: "yes", tab: "speed", cta: "See my trackers" },
      { req: "Design around the copy you are given: flow, guide the eye, drive action", proof: "The offer and the button sit above the fold, the headline is the biggest thing on the screen, and the picture leads the eye down to one clear call to action.", status: "yes", tab: "emailVelour", cta: "See the layouts" },
      { req: "Work across a range of ecommerce brands worldwide", proof: "I work with business owners in Australia, the United States and Europe, and I made sample emails for a perfume brand and a makeup brand, each with its own look and voice.", status: "yes", tab: "emailVelour", cta: "See the brands" },
      { req: "Confident and quick in Figma and Photoshop", proof: "Photoshop and Canva are my daily design tools for posters, ads, carousels and email layouts.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "A real grasp of the marketing behind email", proof: "I send email and text follow-ups, confirmations and reminders that bring customers back to book, and every email I design has one goal and one button.", status: "yes", tab: "flows", cta: "See the email flows" },
      { req: "A systems thinker: repeatable templates and processes", proof: "I document every process in Notion and Google Docs, and I reuse one template per brand instead of starting from scratch.", status: "yes", tab: "speed", cta: "See my systems" },
      { req: "Excellent command of British and American English", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write for clients in Australia, the United States and Europe, so I read the tone, punctuation and emphasis in the copy.", status: "yes" },
      { req: "Own your output and manage your own workload", proof: "A daily update and a weekly report for every client, with my own trackers, so nothing needs chasing.", status: "yes", tab: "speed", cta: "See my updates" }
    ],
    workSections: [
      { type: "block", key: "emailVelour" },
      { type: "block", key: "emailRose" },
      { type: "cards", part: "flows", keys: ["plushEmail", "ghlWorkflows", "pgFollow"] },
      { type: "block", key: "designs" },
      { type: "cards", part: "speed", keys: ["cdcTracker", "ghlUpdates"] }
    ],
    workOverrides: {
      emailVelour: {
        label: "Email campaign: VELOUR Perfume",
        blurb: "A four-email launch campaign for a made-up luxury perfume brand: the launch, the bestselling signature, the gift edit and the abandoned-bag return. Tap to enlarge.",
        items: [1, 2, 3, 4].map(n => ({ src: "email-velour-" + n + ".jpg", thumb: "email-velour-" + n + ".jpg" }))
      },
      emailRose: {
        label: "Email campaign: Makeup Brand Rose",
        blurb: "A four-email campaign for a made-up makeup brand, with its own colours and voice. Tap to enlarge.",
        items: [1, 2, 3, 4].map(n => ({ src: "email-rose-" + n + ".jpg", thumb: "email-rose-" + n + ".jpg" }))
      }
    },
    workHeads: {
      emailVelour: { label: "Campaign Emails", title: "Emails That Sell the Launch.", text: "Hero, headline and one button above the fold, built around the copy." },
      emailRose:   { label: "Template System", title: "One Template, Every Brand.", text: "The same structure, restyled in each brand's colours, fonts and voice." },
      flows:       { label: "Flow Emails", title: "Flows That Bring Customers Back.", text: "Confirmations, reminders and follow-ups that run on their own." },
      designs:     { label: "Graphics", title: "Graphics That Match Every Email.", text: "Photoshop and Canva graphics, on brand across every channel." },
      speed:       { label: "Quick Turnaround", title: "On Time, Every Week.", text: "Trackers and weekly updates that keep every send on schedule." }
    },
    resultsShots: "none",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Email Designer application"
  },
  "beauty-in-steel-smm": {
    label: "Social Media Manager (Beauty in Steel)",
    headline: "Social Media Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Startup Jewelry Brand · Business Page · Consistent Content · Value-Driven Posts · Reels · Canva",
    tagline: "",
    summary: "Creative Social Media Manager with 5+ years of experience handling business pages and growing brands through consistent, value-driven content. I plan, design and schedule posts and edit Reels. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["Social Media Manager", "startup", "jewelry brand", "grow", "creating content", "business page", "brand connect with its audience", "consistent", "value-driven content", "creative", "portfolio", "rates", "Philippines"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Genuinely enjoys creating content", proof: "I design posts in Canva, edit Reels in CapCut and write captions every week for Facebook and Instagram.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Understands how social media works and handles a business page", proof: "I manage and schedule a brand's Facebook and Instagram pages, and I grew a client's post views 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Makes a brand connect with its audience through consistent, value-driven content", proof: "I plan nine-post feeds around one palette and a content calendar, so a page looks put together and keeps posting on schedule.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Send your portfolio, rates and current location", proof: "My portfolio is on this page and one tap away. I am based in Butuan City, Philippines.", status: "yes", tab: "designs", cta: "See my portfolio" }
    ],
    workSections: [
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      featReels: { label: "UGC Videos", title: "Product Videos Ready to Post.", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "Your Piece, Shown in Motion.", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      designs: { label: "Social Media Design", title: "Graphics That Make Posts Stand Out.", text: "Canva posts, promos and event graphics, ready to schedule on Facebook and Instagram." },
      reels:   { label: "Instagram Videos", title: "Reels That Keep People Watching.", text: "Edited in CapCut with captions and music, made for Instagram and Facebook." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "Consistent Posting That Builds Trust.", text: "A content calendar and posting schedule, so your page keeps growing." }
    },
    /* Same arrangement as the main portfolio: designs, reels (food, burger, pageant), feeds, brand, content plan, UGC */
    reelsContain: true,
    reelsWrap: true,     // 3 x 2 reel grid on desktop, like the portfolio
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" },
          { src: "ai-model-walk-turn-pose.mp4", poster: "ai-model-walk-turn-pose.jpg", name: "Walk, Turn, Pose" },
          { src: "ai-model-before-after.mp4", poster: "ai-model-before-after.jpg", name: "Before and After" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media Manager (Beauty in Steel)"
  },
  "fashion-de-smm": {
    label: "Social Media Manager (German Fashion Brand)",
    headline: "Social Media Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Instagram · Reels · TikTok · CapCut · Canva · Captions · Organic Growth",
    tagline: "",
    summary: "Social Media Manager with 5+ years of experience running Instagram and Reels content for brands. I plan and publish posts, edit Reels with subtitles, music and transitions in CapCut and Canva, and reply to comments and DMs.",
    keywords: ["social media manager", "Instagram", "TikTok", "Reels", "carousels", "CapCut", "Canva", "fashion", "clean, minimal aesthetics", "captions", "hashtags", "comments and DMs", "weekly report", "reach", "followers", "organic growth", "portfolio", "availability", "tools"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Plan and publish 4-5 Instagram posts/Reels per week", proof: "I plan, design and schedule a weekly mix of Reels, carousels and posts on Instagram and Facebook, with a content calendar so nothing is missed.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Create short, realistic-looking videos and carousels (CapCut, Canva or similar)", proof: "I design carousels and posts in Canva and edit short Reels in CapCut, using the brand's own colours, photos and footage.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Edit videos: cuts, subtitles, music, transitions", proof: "Every Reel I edit has clean cuts, word-by-word subtitles, music and smooth transitions, made for Instagram and TikTok.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Write simple captions and hashtags", proof: "I write short, friendly captions and hashtag sets for every post, and I follow a brand's own texts and tone when they are supplied.", status: "yes", tab: "designs", cta: "See my posts" },
      { req: "Reply to comments and DMs in a friendly way", proof: "I answer comments and messages every day for business pages and for a national pageant in Australia, always warm and on brand.", status: "yes", tab: "smm", cta: "See my work" },
      { req: "Weekly short report: reach, followers, best posts", proof: "I send a weekly update with what was posted and how it did. One client's post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Good taste for fashion and clean, minimal aesthetics", proof: "I plan feeds around one calm palette and design clean, minimal posts and carousels in the brand's own colours.", status: "yes", tab: "feeds", cta: "See my feed plans" },
      { req: "Organic growth only", proof: "I grow pages with real content, real replies and consistent posting. No bought followers, no bots, no fake engagement.", status: "yes", tab: "results", cta: "See the real screenshots" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "Instagram Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "4-5 Posts a Week, Planned Ahead.", text: "A content calendar and posting schedule, so your page keeps growing." },
      featReels: { label: "UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,   // first reel on screen plays with sound (switches on at the visitor's first tap/key; browsers block sound before that)
    /* shared card text in data.js says "ready to learn": replace it for this resume (never-say-learning rule) */
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool, so a page posts 4-5 times a week without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media Manager (Fashion Brand, Germany)"
  },
  "law-study-smm": {
    label: "TikTok & Instagram Manager (Law Study Page)",
    headline: "TikTok & Instagram Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "TikTok · Instagram · Study Tips · Productivity · Law School Content · CapCut · Canva",
    tagline: "",
    summary: "Social Media Manager with 5+ years of experience managing TikTok and Instagram accounts. I plan and post short-form content, edit videos in CapCut and Canva, and follow a page's existing style and tone.",
    keywords: ["TikTok", "Instagram", "Reels", "study tips", "productivity", "law school content", "CapCut", "Canva", "captions", "content calendar", "5 posts per week", "2-3 posts per week", "existing style and tone", "engagement", "followers", "organic growth", "portfolio", "availability", "tools"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Post on TikTok, 5 posts per week", proof: "I plan, edit and schedule short videos with a weekly content calendar, so a page posts every week without gaps. My Reels are cut for Instagram and TikTok.", status: "yes", tab: "reels", cta: "See my short videos" },
      { req: "Post 2-3 times per week on Instagram (depending on engagement)", proof: "I plan the Instagram mix around what the audience reacts to, then post more or less of it. I design the carousels and posts in Canva.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Follow the page's existing style and tone", proof: "I work inside a brand's own colours, fonts, photos and texts, and I match the voice of the page in every caption.", status: "yes", tab: "feeds", cta: "See my feed plans" },
      { req: "Experience managing TikTok and Instagram accounts", proof: "I have managed social media for business pages and for a national pageant in Australia. One client's post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the real screenshots" },
      { req: "Good speaking and written English", proof: "I write captions, comment replies and client updates in English every day, always clear and friendly.", status: "yes" },
      { req: "Reliable, organized, and able to work independently", proof: "I keep my own trackers, calendars and weekly updates, and I deliver on time without being chased.", status: "yes", tab: "smm", cta: "See my planning" },
      { req: "An interest in study, productivity, or law content", proof: "I make educational and productivity-style posts, and I plan my own days with task trackers and weekly plans.", status: "yes", tab: "designs", cta: "See my educational posts" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "TikTok & Instagram Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "5 TikToks a Week, Planned Ahead.", text: "A content calendar for 5 TikToks and 2-3 Instagram posts a week, so your page keeps growing." },
      featReels: { label: "UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post and Reel with Meta Business Suite and Metricool, so a page posts 5 times a week on TikTok and 2-3 times on Instagram without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "TikTok", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "TikTok & Instagram Manager (Law Study Page)"
  },
  "northnoble-smm": {
    label: "Social Media Manager (North & Noble, AHS, SDS)",
    headline: "Social Media Manager",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Instagram · Facebook · TikTok · Canva · AI Tools · Content Calendars · Analytics",
    tagline: "",
    summary: "Social Media Manager with 5+ years of experience managing social media accounts for brands on Meta platforms, with TikTok trends, Canva and AI tools. I plan monthly content calendars, create and publish posts, Reels and stories, and track performance to improve results.",
    keywords: ["social media manager", "three brands", "Instagram", "Facebook", "Meta", "TikTok", "Canva", "AI tools", "content calendar", "posting strategy", "consistent branding", "Ads team", "paid advertising", "engagement", "analytics", "portfolio"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Manage and maintain three social media accounts", proof: "I run several brand accounts side by side, each with its own colours, tone and content calendar, so every account stays consistent and on brand.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Create and publish feed posts, stories and other content", proof: "I design, write and schedule a weekly mix of feed posts, carousels, Reels and stories on Instagram and Facebook with Meta Business Suite.", status: "yes", tab: "feeds", cta: "See my feed plans" },
      { req: "Design engaging, professional graphics (strong Canva skills)", proof: "Canva is my main design tool: posts, carousels, covers and story graphics in the brand's own colours, ready to schedule.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Monthly content calendars and posting strategies", proof: "I plan the month ahead in a content calendar with the post type, caption and posting day for every piece, so nothing is missed.", status: "yes", tab: "smm", cta: "See my content calendars" },
      { req: "Familiarity with TikTok and its content trends", proof: "I edit short vertical videos in CapCut for Instagram and TikTok, using trending formats, hooks, captions and music.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Align organic content with the Ads team", proof: "I edit Reels and video ads for Meta campaigns, so organic posts and paid ads carry the same message, look and offer.", status: "yes", tab: "reels", cta: "See my videos" },
      { req: "Monitor performance and suggest improvements", proof: "I check reach, views and followers in Meta Business Suite and send what worked and what to post more of. One client's post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the real screenshots" },
      { req: "Use AI tools for content creation, planning and workflow", proof: "I use AI for caption drafts, content ideas and planning, and I make AI UGC and AI model videos, always labelled as AI-generated.", status: "yes", tab: "aiModels", cta: "See my AI videos" }
    ],
    workSections: [
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "Instagram Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "Monthly Content Calendars, Planned Ahead.", text: "A content calendar and posting schedule for every brand, so each page keeps growing." },
      featReels: { label: "UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool, so every account posts on time without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Social Media Manager (North & Noble, AHS, SDS)"
  },
  "travel-ig-creator": {
    label: "Travel & Lifestyle Instagram Content Creator / Video Editor",
    headline: "Instagram Content Creator / Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Travel & Lifestyle · Instagram Reels · Photo Carousels · CapCut · Canva · Hook-Driven Captions · Weekly Batches",
    tagline: "",
    summary: "Creative Content Creator and Video Editor with 5+ years of experience turning raw footage into scroll-stopping Instagram Reels and photo carousels. I research trends, edit with hooks, captions and music, and deliver on weekly deadlines. One client's post views grew 50% to 265K and followers 147% in 90 days.",
    keywords: ["content creator", "video editor", "travel", "lifestyle", "Instagram Reels", "photo carousels", "raw photos and videos", "Google Drive", "CapCut", "trending audio", "trends", "3-second visual hooks", "short-form pacing", "clean text placement", "hook-driven captions", "weekly batches", "unique", "fresh content ideas", "tools", "trend idea", "portfolio", "organically"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Your content: 2-3 Reels you edited", proof: "The Reels below are mine: food, burger, promo and before-and-after edits with captions and music, plus UGC product videos. Tap any phone to play it.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Tools: the main editing apps", proof: "CapCut for every Reel, Canva for carousels, posts and covers, and Google Drive to receive footage and send each batch back.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Browse trip folders and edit scroll-stopping Reels from raw footage", proof: "I sort a folder of raw clips and photos, pick the strongest shots first and cut them into a finished Reel with captions and music. One client's post views grew 50% to 265K in 90 days.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Strong 3-second hooks, short-form pacing and clean text placement", proof: "Every Reel opens on the best moment with a short on-screen hook, quick cuts on the beat and captions kept clear of the face and the key shot.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Photo carousels with written captions", proof: "I design multi-slide carousels in Canva, write the caption and the first-line hook for each, and keep one palette across the whole feed.", status: "yes", tab: "designs", cta: "See my carousels" },
      { req: "Trending audio and travel formats", proof: "I check what is trending each week, match the audio to the footage and send the audio note with every draft, so you can post it straight away.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Weekly batches on time, ready for you to schedule", proof: "I plan a weekly mix of Reels, carousels and posts with a content calendar, deliver the batch in a shared Drive folder and you schedule it.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Self-starter who pitches fresh ideas", proof: "I made feed plans and sample Reels without a brief and send new ideas with every batch.", status: "yes", tab: "feeds", cta: "See my feed plans" },
      { req: "Trend idea: one Reel format for travel footage right now", proof: "\"Skip this, do this instead\": open on the most beautiful shot with the hook text \"Don't do this in [place]\", cut to the crowded tourist spot for one second, then show the quiet local favourite on a trending sound, and end on a save-worthy tip.", status: "yes", tab: "reels", cta: "See how I edit" }
    ],
    workSections: [
      { type: "block", key: "designs" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      designs: { label: "Social Media Design", title: "Carousels That Get Saved and Shared.", text: "Multi-slide Canva carousels and posts with clean text, ready to schedule on Instagram." },
      reels:   { label: "Instagram Videos", title: "Reels That Stop the Scroll.", text: "Strong hooks, quick cuts, captions and music in CapCut, made for Instagram." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "Weekly Batches, Delivered on Time.", text: "A content calendar and posting schedule, so your page keeps growing organically." },
      featReels: { label: "UGC Videos", title: "Short Videos Ready to Post.", text: "Voiceover, captions and clean shots, ready for Instagram." },
      aiModels:  { label: "AI Model Videos", title: "Your Piece, Shown in Motion.", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    /* shared card text in data.js says "ready to learn": replace it for this resume (never-say-learning rule) */
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool, so a page posts every week without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" },
          { src: "ai-model-walk-turn-pose.mp4", poster: "ai-model-walk-turn-pose.jpg", name: "Walk, Turn, Pose" },
          { src: "ai-model-before-after.mp4", poster: "ai-model-before-after.jpg", name: "Before and After" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Travel & Lifestyle Content Creator / Video Editor"
  },
  "soto-group-ea": {
    intro: { video: "../images/intro-hi-six.mp4", poster: "../images/intro-poster.jpg" },
    label: "Executive Assistant (Soto Group, Perth WA)",
    headline: "Executive Assistant",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Calendar & Inbox · Director Follow-Ups · SOPs & Registers · Project Checks · Marketing Support · AWST Hours",
    tagline: "",
    summary: "Executive Assistant with 5+ years of experience supporting founders, business owners and a CEO in Australia, the United States and Europe. I run calendars and inboxes, keep good systems and close loops on follow-ups, so directors spend their time on clients and strategy. I also support marketing with Canva, scheduling and websites.",
    keywords: ["executive assistant", "directors", "founder", "calendar", "inbox", "agendas", "reminders", "meeting", "follow ups", "commitments", "SOP", "register", "renewal", "compliance", "onboarding", "checklist", "operations summary", "invoices", "receipts", "Google Workspace", "Microsoft", "Canva", "Asana", "project management", "content calendar", "proofread", "enquiries", "approvals", "close loops", "discreet", "Australian"],
    focus: ["admin", "ops", "english", "crm", "social"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "At least three years supporting a founder, director or senior manager", proof: "5+ years supporting business owners in Australia, the United States and Europe, including Assistant to the CEO at EO Staff.", status: "yes", tab: "exec", cta: "See my executive support" },
      { req: "Experience running someone else's calendar and inbox, not just your own", proof: "I managed the CEO's calendar, inbox and appointments at EO Staff, and I run 61 booking calendars and 200+ calendar events for Australian clients, with confirmations and reminders.", status: "yes", tab: "exec", cta: "See the calendars I run" },
      { req: "Excellent written English: clear, warm, correct", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I write client emails, replies and follow-ups for business owners every day.", status: "yes", tab: "client", cta: "See my client emails" },
      { req: "Keep a running list of director commitments and nudge until they are done", proof: "Every task sits in Asana, Notion or Trello with an owner and a due date, and I follow up by email and message until it is closed.", status: "yes", tab: "ops", cta: "See my trackers" },
      { req: "Hands on experience with a project management tool (Teamwork, Asana, ClickUp, Monday)", proof: "Asana, Notion and Trello for client tasks, deadlines and content. I set up new systems from their help docs and videos and keep the steps documented.", status: "yes", tab: "ops", cta: "See my trackers" },
      { req: "Keep the SOP library tidy and the accounts and renewals register current", proof: "I built a Notion business hub with SOPs and planning pages, and keep every file and record organised in Google Drive so anyone can find it.", status: "yes", tab: "admin", cta: "See my SOP hub" },
      { req: "Light Xero support: invoices with director approval, receipts attached for the bookkeeper", proof: "I track every order and payment against its record and keep receipts and files organised. Nothing goes out without your approval.", status: "yes", tab: "admin", cta: "See payment records" },
      { req: "Onboarding and offboarding checklists, and a monthly operations summary", proof: "Daily end-of-day updates and weekly KPI reports with outstanding and overdue items, plus step-by-step checklists in Notion.", status: "yes", tab: "ops", cta: "See my reports" },
      { req: "Confident with Google Workspace, Microsoft 365 and Canva", proof: "Docs, Sheets, Drive and Calendar daily, Word, Excel and PowerPoint for documents and reports, and Canva for posts, promos and templates.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Marketing support: schedule approved posts, Canva edits, content calendar", proof: "I keep a monthly content calendar and schedule posts with Meta Business Suite and Metricool. One client's post views grew 50% to 265K in 90 days.", status: "yes", tab: "social", cta: "See my content calendar" },
      { req: "Acknowledge new enquiries, log them in the CRM and chase approvals", proof: "I reply to enquiries, log every contact in GoHighLevel and Zoho CRM, and follow up until the approval, content or login arrives.", status: "yes", tab: "client", cta: "See my enquiry replies" },
      { req: "Basic understanding of how a website or rebrand project runs", proof: "I designed and built live websites for Australian clients, plus a full brand: logo, wordmark, icon and promotional materials.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Worked for an Australian business and understand the tone", proof: "I work with a wellness brand, a landscaping company and a national pageant, all in Australia.", status: "yes" },
      { req: "AWST hours, reliable internet and a quiet workspace", proof: "Yes. Philippine time matches AWST. 65 Mbps fiber, backup mobile Wi-Fi, backup laptop and a backup power generator.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "exec", keys: ["ghlBooking", "cdcFollow", "pgFollow"] },
      { type: "cards", part: "admin", keys: ["notionHq", "cdcDrive", "ambAdmin"] },
      { type: "cards", part: "ops", keys: ["cdcTracker", "cdcUpdates", "notionPlan"] },
      { type: "block", key: "websites" },
      /* Marketing support, in the portfolio's Social Media order: designs, brand identity, content strategy, email */
      { type: "block", key: "designs" },
      { type: "block", key: "brands" },
      { type: "cards", part: "social", keys: ["plushCalendar", "cupSchedule", "plushTrack"] },
      { type: "block", key: "emails" },
      { type: "cards", part: "client", keys: ["ghlConvos", "ghlRecords"] }
    ],
    workHeads: {
      exec:     { label: "Executive Support", title: "Calendars Protected, Follow-Ups Closed.", text: "Calls booked, clashes resolved, reminders sent and every commitment chased until it is done." },
      admin:    { label: "Business Admin", title: "Systems Anyone Can Find Their Way Around.", text: "SOPs, records and files kept tidy and current, with payments matched to every record." },
      ops:      { label: "Light Operations", title: "Nothing Overdue, Nothing Without an Owner.", text: "Tasks, due dates and owners checked every day, with a short update for the directors." },
      websites: { label: "Website & Rebrand Projects", title: "I Know How a Website Project Runs.", text: "Live websites I designed and built for Australian clients, from brief to launch." },
      designs:  { label: "Marketing Support", title: "Canva Edits, Ready to Schedule.", text: "Posts, promos and templates resized and updated in the brand's own look." },
      brands:   { label: "Brand Identity", title: "Brands That Look the Same Everywhere.", text: "Logos and promotional materials that stay consistent across every platform." },
      social:   { label: "Content Calendar", title: "Approved Posts That Go Out on Time.", text: "A monthly content calendar, scheduled posts and results tracking." },
      emails:   { label: "Email Marketing", title: "Newsletters That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      client:   { label: "Client Facing Admin", title: "Every Enquiry Acknowledged and Logged.", text: "Warm replies, confirmations and follow-ups, with every contact recorded in the CRM." }
    },
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every approved post, Reel and story with Meta Business Suite and Metricool.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"],
        images: ["smm-content-plan.jpg"]
      }
    },
    resultsShots: "none",
    stats: ["leads", "calendars", "events", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Executive Assistant (Soto Group)"
  },
  "blnx-marketing": {
    label: "Marketing & Events Coordinator (BLNX Aesthetic Distribution, Texas)",
    headline: "Marketing & Events Coordinator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "GoHighLevel Email & Text · Monthly Newsletter · Canva Flyers · Event Coordination · Lead Tags & Stages · Metricool",
    tagline: "",
    summary: "Marketing & Events Coordinator with 5+ years of experience running email and text campaigns, Canva graphics and events for businesses in Australia, the US and Europe. I build GoHighLevel campaigns and workflows, keep leads tagged and staged, check social calendars in Metricool and reply to comments and DMs.",
    keywords: ["marketing", "events coordinator", "email campaigns", "text message blasts", "GoHighLevel", "monthly email newsletter", "products", "promotions", "education", "events", "audience lists", "pricing", "dates", "links", "spelling", "formatting", "campaign calendar", "performance updates", "Canva", "flyers", "invitations", "promotional graphics", "brand guidelines", "event calendar", "Eventbrite", "registration forms", "attendee lists", "QR codes", "confirmations", "reminders", "post-event communications", "import leads", "duplicates", "tags", "opportunity stages", "sales reps", "follow-up", "Metricool", "captions", "content creator", "approve posts", "comments", "direct messages", "Central Time"],
    focus: ["crm", "social", "design", "admin", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Prepare, schedule and send approved email campaigns and text message blasts through GoHighLevel", proof: "I build and send email and SMS campaigns, confirmations and reminders in GoHighLevel for a wellness brand in Australia, organised in 7 workflow folders.", status: "yes", tab: "email", cta: "See my GoHighLevel campaigns" },
      { req: "Create the monthly email newsletter: products, promotions, education and events", proof: "I design whole email campaigns in the brand's colours with one clear button in every email: welcome, services, proof and offer emails.", status: "yes", tab: "emails", cta: "See my email designs" },
      { req: "Check audience lists, pricing, dates, links, spelling and formatting before sending", proof: "I test every workflow, booking link and email myself before it goes live, and I check each date, price and link against the approved brief.", status: "yes", tab: "email", cta: "See the checks I run" },
      { req: "Maintain a campaign calendar and share basic performance updates", proof: "I keep a monthly content and campaign calendar and send a short weekly update. One client's post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Create flyers, invitations and promotional graphics in Canva using brand guidelines", proof: "I design event flyers, promos, vouchers and invitations in Canva in each brand's own colours and fonts, and keep every approved file organised in Google Drive.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Maintain the event calendar, registrations, attendee lists and post-event communications", proof: "I manage an events pipeline of 84 opportunities (Booked, Attended, No Show, Cancelled), 61 booking calendars and 200+ calendar events, with ticket, confirmation and reminder workflows.", status: "yes", tab: "events", cta: "See my event coordination" },
      { req: "Create and update Eventbrite pages, registration forms and QR codes", proof: "I set up event registrations, ticket follow-ups and booking widgets in GoHighLevel. I follow your Eventbrite steps exactly and check every date, price and link before a page goes live.", status: "yes", tab: "events", cta: "See my event setups" },
      { req: "Import event leads, remove duplicates, apply tags and opportunity stages, assign to sales reps", proof: "I keep a 1,400+ contact lead database clean, and move GoHighLevel opportunities into the right stages with source, value and notes up to date.", status: "yes", tab: "leads", cta: "See my lead records" },
      { req: "Track follow-up activity and flag outstanding leads", proof: "I follow up by email, SMS and message until each lead confirms, and flag who is still outstanding in my daily update.", status: "yes", tab: "leads", cta: "See my follow-ups" },
      { req: "Review the Metricool calendar weekly and check captions, graphics, promotions, dates and links", proof: "I schedule and review posts in Metricool and Meta Business Suite, and check every caption, graphic, date and link before it is approved.", status: "yes", tab: "plan", cta: "See my content calendar" },
      { req: "Monitor comments and DMs in the brand's voice and route inquiries", proof: "I answer comments, messages and enquiries every day for business pages and a national pageant in Australia, and pass each inquiry to the right person.", status: "yes", tab: "email", cta: "See my enquiry replies" },
      { req: "Strong written English and attention to detail", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" },
      { req: "Check-ins during Houston/Central Time business hours", proof: "Yes. I already work with clients in the United States, on 65 Mbps fiber with backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "email", keys: ["plushEmail", "ghlWorkflows", "ghlConvos"] },
      { type: "cards", part: "events", keys: ["ghlPipeline", "ghlBooking", "pgFollow"] },
      { type: "cards", part: "leads", keys: ["ghlLeads", "ghlRecords", "cdcFollow"] },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      email:   { label: "Email & Text Marketing", title: "Campaigns Checked Before They Send.", text: "Email and text campaigns, confirmations and reminders I build and send in GoHighLevel." },
      events:  { label: "Event Coordination", title: "Every Attendee Tracked, Every Reminder Sent.", text: "Registrations, attendee stages, confirmations and reminders kept on schedule for every event." },
      leads:   { label: "GoHighLevel & Lead Organization", title: "Leads Tagged, Staged and Followed Up.", text: "Clean lead records with the right tags, stages and follow-ups, so no lead is missed." },
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "Instagram Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Social Media Oversight", title: "Metricool Calendar, Checked Every Week.", text: "A content calendar reviewed for captions, dates and links before every post is approved." },
      featReels: { label: "UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, review the captions, and schedule every post, Reel and story with Metricool and Meta Business Suite, checking dates and links before anything goes live.",
        tools: ["Metricool", "Meta Business Suite", "Notion", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "BLNX Marketing Coordinator"
  },
  "zippeys-ops": {
    label: "Operations Coordinator (Zippey's, property maintenance and repairs)",
    headline: "Operations Coordinator",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Engineer Scheduling · ServiceM8 Jobs · Parts & Suppliers · WhatsApp Business · Daily Operations Report",
    tagline: "",
    summary: "Operations Coordinator with 5+ years supporting business owners in Australia, the United States and Europe. I keep jobs, schedules and follow-ups moving in ServiceM8 and GoHighLevel, reply to WhatsApp enquiries fast, and send a daily report. As a Civil Engineering graduate, I speak engineers' language.",
    keywords: ["Operations Coordinator", "engineers", "scheduling", "appointments", "ServiceM8", "job status", "next action", "overdue jobs", "parts", "materials", "suppliers", "orders", "return visits", "WhatsApp Business", "customer communication", "enquiries", "complaints", "job notes", "photographs", "completion", "invoicing", "daily operations report", "ownership", "attention to detail", "calm under pressure", "Google Workspace", "property maintenance", "repairs", "construction"],
    focus: ["admin", "ops", "crm", "support", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Coordinate daily engineer appointments and schedules, and communicate changes and delays promptly", proof: "I manage 61 booking calendars in GoHighLevel and coordinated 200+ calendar events for an Australian landscaping company, with confirmations, reminders and a message to everyone when a time changes.", status: "yes", tab: "sched", cta: "See the calendars I run" },
      { req: "Maintain accurate job statuses in ServiceM8, with a clear next action and owner on every job", proof: "I have used ServiceM8 for a blue-collar business to keep jobs, stock and schedules organised. Every task I track has an owner, a due date and a next step, marked from start to done.", status: "yes", tab: "jobs", cta: "See my job tracking" },
      { req: "Identify overdue jobs and take action to resolve delays", proof: "I check my trackers every day, flag what is overdue in my daily update, and follow up by email and message until it is closed.", status: "yes", tab: "jobs", cta: "See my trackers" },
      { req: "Confirm specifications and coordinate approved orders, then track deliveries", proof: "I track every order and payment against its original record and check each detail before it moves on. As a Civil Engineering graduate, I read measurements and specifications comfortably.", status: "yes", tab: "parts", cta: "See orders and records" },
      { req: "Arrange return visits and keep customers informed of delays and expected dates", proof: "I follow up with customers by email, WhatsApp and Messenger, and set reminders and rebookings so nobody is left waiting for an update.", status: "yes", tab: "comms", cta: "See my customer follow-ups" },
      { req: "Respond to WhatsApp Business messages and new enquiries within five minutes in staffed hours", proof: "I check every new enquiry and reply quickly in a warm, clear tone on WhatsApp, email and Messenger, then pass new bookings to the right person.", status: "yes", tab: "comms", cta: "See the enquiries I handle" },
      { req: "Escalate complaints and sensitive issues to the right team member", proof: "I handle customer support for a wellness brand in Australia. I keep every complaint confidential, record what happened and pass it to the right person with the full details.", status: "yes", tab: "comms", cta: "See my customer support" },
      { req: "Check job notes, before and after photographs and completion details are recorded", proof: "I keep organised records, notes and files in Google Drive and check each record is complete before it is handed on. Anything missing gets chased.", status: "yes", tab: "quality", cta: "See my records" },
      { req: "Give Finance complete job information for invoicing", proof: "I keep payment records and orders accurate, and hand over clean, complete records so the person doing the invoices never has to chase me.", status: "yes", tab: "quality", cta: "See my records" },
      { req: "Produce a concise daily operations report", proof: "I send a short end-of-day update to my clients: progress, outstanding tasks, issues and what needs a decision. A weekly report goes out too.", status: "yes", tab: "report", cta: "See my reports" },
      { req: "Comfortable with digital scheduling and CRM systems, Google Workspace", proof: "GoHighLevel, ServiceM8, Zoho CRM, HubSpot, Google Calendar, Docs, Sheets and Drive are tools I use every day.", status: "yes" },
      { req: "Knowledge of property maintenance, repairs or construction", proof: "I am a Civil Engineering graduate. I have worked on site with surveying equipment and drew building plates in AutoCAD, so I can talk with engineers and tradespeople at their level.", status: "yes", tab: "eng", cta: "See my engineering work" },
      { req: "Strong written and spoken English", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief.", status: "yes" }
    ],
    workSections: [
      { type: "cards", part: "sched", keys: ["ghlBooking", "ghlWorkflows"] },
      { type: "cards", part: "jobs", keys: ["sm8Jobs", "cdcTracker", "ghlRecords"] },
      { type: "cards", part: "parts", keys: ["ambAdmin", "engPlanning"] },
      { type: "cards", part: "comms", keys: ["ghlConvos", "pgFollow"] },
      { type: "cards", part: "quality", keys: ["cdcDrive", "cdcFollow"] },
      { type: "cards", part: "report", keys: ["ghlUpdates", "cdcUpdates"] },
      { type: "cards", part: "eng", keys: ["engSurvey", "thesisAutocad"] }
    ],
    workHeads: {
      sched:   { label: "Engineer Scheduling", title: "Appointments Booked, Changes Shared Early.", text: "Calendars, confirmations and reminders that keep engineers and customers on the same page." },
      jobs:    { label: "ServiceM8 Job Management", title: "Every Job Has an Owner and a Next Step.", text: "Job statuses and trackers checked daily, with overdue items flagged and chased." },
      parts:   { label: "Parts and Materials", title: "Orders Checked, Deliveries Tracked.", text: "Order and payment records matched to the original details, so nothing is ordered twice or lost." },
      comms:   { label: "WhatsApp and Customer Communication", title: "Every Enquiry Answered Quickly.", text: "Fast, warm replies and follow-ups, so no customer is left waiting for an update." },
      quality: { label: "Job Documentation", title: "Complete Records, Ready for Invoicing.", text: "Notes, files and details kept organised and checked, so Finance gets everything first time." },
      report:  { label: "Reporting", title: "A Daily Update You Can Read in a Minute.", text: "Progress, overdue items and issues in one short report, with only the real decisions escalated." },
      eng:     { label: "Engineering Background", title: "I Speak Your Engineers' Language.", text: "Site surveying and AutoCAD plates from my Civil Engineering degree." }
    },
    resultsShots: "none",
    resultsNote: "Records, calendars and trackers I manage every day.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Operations Coordinator application"
  },
  "qlayon-email": {
    label: "Email Marketing Specialist (Qlayon, Shopify travel comfort store)",
    headline: "Email Marketing Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Email Campaigns · Welcome & Abandoned Cart Flows · Post-Purchase & Win-Back · Segmentation · Warm English Copy · AI Tools",
    tagline: "",
    summary: "Email Marketing Specialist with 5+ years of experience sending email campaigns and building automated flows for online businesses in Australia, the US and Europe. I plan, write and send warm, clear emails, then track what they bring in.",
    keywords: ["email", "campaigns", "flows", "Klaviyo", "Omnisend", "Mailchimp", "welcome", "abandoned cart", "post-purchase", "win-back", "segment", "online store", "Shopify", "opens", "clicks", "orders", "English", "proofread", "AI tools", "tone"],
    focus: ["crm", "english", "design", "admin", "social"],
    order: ["work", "results", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Live client work and practice samples are labelled. Tap a row for the proof.",
    match: [
      { req: "Plan, write and send email campaigns", proof: "Practice samples: two four-email campaigns with their own colours and voice, a perfume launch (hero, signature product, gift edit, abandoned-bag return) and a makeup launch (tease, launch, tutorial, offer). Live work: email and text campaigns, follow-ups and reminders for a wellness brand in Australia.", status: "yes", tab: "emails", cta: "See the campaigns" },
      { req: "Build, test and improve flows: welcome, abandoned cart, post-purchase and win-back", proof: "Live work: confirmation, reminder and follow-up flows in GoHighLevel and Mailchimp, sorted into 7 workflow folders, tested myself before they go live. Practice sample: a welcome series and an abandoned-bag email in the perfume campaign.", status: "yes", tab: "flows", cta: "See the email flows" },
      { req: "Segment the list so each customer gets the right message", proof: "I keep a 1,400+ contact database clean in GoHighLevel with tags and statuses, so each person gets the reminder, follow-up or offer that fits where they are.", status: "yes", tab: "flows", cta: "See the CRM work" },
      { req: "Write clear, warm emails in English, in the brand's tone", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. Every sample has its own voice, and I proofread each email before it goes out.", status: "yes", tab: "emails", cta: "See a second brand" },
      { req: "Track opens, clicks and orders, and suggest improvements", proof: "I keep trackers and send a short daily update and a weekly report: what went out, what happened, and the one thing to change next.", status: "yes", tab: "speed", cta: "See my reports" },
      { req: "Built or run email flows yourself, in Klaviyo, Omnisend, Mailchimp or another tool", proof: "I build flows myself in GoHighLevel and Mailchimp every week. The trigger, wait, branch and email logic is the same in Klaviyo, so I adapt to the tool you use.", status: "yes", tab: "flows", cta: "See my flows" },
      { req: "Comfortable using AI tools, and can explain how", proof: "I use Claude for first drafts, subject line options and checking copy against the brand's tone, then I edit and proofread every line myself. I can show the steps.", status: "yes" },
      { req: "Full-time availability and time zone", proof: "Full-time, up to 12 hours a day, 7am to 7pm in your own time zone: United States, Canada, the United Kingdom, Australia, New Zealand or Ireland. 65 Mbps fiber, backup mobile Wi-Fi, a backup laptop and a power generator.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "emails" },
      { type: "cards", part: "flows", keys: ["plushEmail", "ghlWorkflows", "pgFollow"] },
      { type: "cards", part: "speed", keys: ["cdcTracker", "ghlUpdates"] }
    ],
    workOverrides: {
      // Cloud 9 real-client campaign first, private details covered with blue PRIVATE tags (Maria, 2026-11-10)
      emails: { campaignsPrepend: {
        items: [{ src: "email-c9-board.jpg" }, { src: "email-c9-1.jpg" }, { src: "email-c9-2.jpg" }],
        campaigns: [{ title: "Real Client - Email Marketing Campaign - Home Services Business", note: "A weather-themed series, private details covered", accent: "#2F5496", tint: "#eaf3ff", chips: ["Real Client", "Brand palette", "Home services"], start: 0,
          alt: "Weather-themed email campaign for a home services client, private details covered",
          emails: [ { name: "Clear Skies", subject: "Today's forecast: 100% sunshine" }, { name: "Long-Range Forecast", subject: "Stay with us all year (now with LIVE GPS tracking)" } ] }]
      }, campaignsOrder: ["Home Services", "Perfume", "Makeup"], campaignsHide: ["The Maria Office"] }
    },
    workHeads: {
      emails:      { label: "Real Screenshots. Real Clients.", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." },
      flows:       { label: "Email Flows", title: "Real Clients, Real Screenshots.", text: "Confirmations, reminders and follow-ups I build, test and improve in the live tool." },
      speed:       { label: "Tracking & Reporting", title: "Results You Can Read in a Minute.", text: "Trackers and a weekly report on what was sent, what happened and what to change." }
    },
    workHeadHide: true,
    resultsShots: "none",
    resultsNote: "Email and text follow-ups, records and calendars I run every day.",
    stats: ["emails", "calendars", "events", "leads"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Email Marketing Specialist application"
  },
  "alfonso-travel-editor": {
    label: "Travel Video Editor (@alfonsoboada)",
    headline: "Travel Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Cinematic Reels · Hooks · Pacing · Visual Storytelling · CapCut · High Retention",
    tagline: "",
    summary: "Creative video editor with 5+ years of experience turning raw footage into high-retention Instagram Reels. I choose the strongest clips, find the hook, put them in the most effective order and add text and music in CapCut for a cinematic flow that keeps people watching.",
    keywords: ["video editor", "creative", "cinematic", "travel", "Reels", "raw footage", "high-retention", "hook", "strongest clips", "effective order", "text", "story", "retention", "cinematic flow", "pacing", "CapCut", "short-form", "trends", "feedback", "alternative versions", "test", "portfolio"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Portfolio with your best lifestyle and cinematic Reels", proof: "Right after the numbers is a Siargao travel Reel I edited for this application (stock footage, the hook I pitched). Below it are my food, lifestyle and event promo edits with music, text and smooth transitions. Tap any phone to play it with sound.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Turn raw footage into high-retention Reels (6 to 25 seconds)", proof: "I cut every Reel short and tight, most between 8 and 20 seconds, so it is watched to the end and replayed. One client's post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the results" },
      { req: "Find the hook: an opening that stops the scroll", proof: "Every Reel opens on its strongest moment with a short line of text in the first second, then the story builds from there.", status: "yes", tab: "reels", cta: "See my hooks" },
      { req: "Choose the strongest clips and place them in the most effective order", proof: "My process: I download the raw files into one folder per trip, watch everything once, star the best 5-8 shots, then build hook, journey and payoff before I add any text or music.", status: "yes", tab: "reels", cta: "See how I edit" },
      { req: "Text where needed to support the story and retention", proof: "Short on-screen lines that open a question and pay it off at the end, placed clear of the face and the main shot.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Cinematic flow and beautiful shots", proof: "Cuts on the beat of the music, smooth speed ramps and matching colour across every clip, so the video feels like one story.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Feedback, alternative versions and tweaks based on what performs", proof: "I send a draft with two hook versions, change it the same day after your notes, and check each Reel's views, watch time and follows a week after posting to choose the next hook.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Watches social media trends and knows why videos grab attention", proof: "I check trending sounds and formats every week for the brands I manage and bring one new idea with each batch.", status: "yes", tab: "feeds", cta: "See my feed plans" },
      { req: "Pitch: a new hook for one of our Reels", proof: "Siargao Reel (\"The Ocean heals the soul\"): instead of opening on the calm beach shot, I would open on the clearest turquoise water with the text \"This is the Philippines, not the Maldives\". Then quick cuts on the beat through the island (palm roads, the boat, the waves), slowing down only for the final moment of you lying on the sand, as the payoff. I would end on \"Save this for your Siargao trip\" and keep it under 12 seconds so it gets replayed.", status: "yes", tab: "reels", cta: "See how I edit" }
    ],
    workSections: [
      { type: "block", key: "samplePitch" },
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      samplePitch: { label: "Sample Reel For @alfonsoboada", title: "Your Siargao Reel, I Edited for You", text: "The hook I pitched, edited and ready to watch: the clearest water first, cuts on the beat, and a save line to end." },
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "Instagram Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "1-3 Reels a Week, Planned Ahead.", text: "A simple posting plan with hooks to test, so the page keeps a steady rhythm." },
      featReels: { label: "UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,   // first reel on screen plays with sound (switches on at the visitor's first tap/key; browsers block sound before that)
    /* shared card text in data.js says "ready to learn": replace it for this resume (never-say-learning rule) */
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool, so a page posts every week without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"]
      }
    },
    workOverrides: {
      samplePitch: {
        label: "Your Siargao Reel, I Edited for You",
        blurb: "The hook I pitched for your Siargao Reel, edited with stock footage. Tap the video to switch the sound.",
        auto: true,
        items: [
          { src: "reel-siargao-hook-sample-v3.mp4", poster: "reel-siargao-hook-sample-v3.jpg", name: "Siargao hook sample" }
        ]
      },
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Travel Video Editor"
  },
  "ghl-lead-system": {
    label: "GoHighLevel Expert: Snapshot, Funnels & Lead Automations (Hank, local marketing business)",
    headline: "GoHighLevel Expert",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "GoHighLevel · Lead Funnels · Email & SMS Workflows · Sales Pipeline · Snapshots · Local Search",
    tagline: "",
    codeWord: "GHL Lead System",
    summary: "GoHighLevel specialist with 5+ years supporting local businesses in Australia, the United States and Europe, building follow-up workflows, booking calendars and sales pipelines. I build the landing page and form, connect the calendar, set up email and SMS follow-up, and test every step before it goes live.",
    keywords: ["GoHighLevel", "GHL", "snapshot", "funnels", "landing pages", "lead capture", "appointment booking", "forms", "surveys", "calendar", "booking confirmations", "thank-you pages", "mobile-friendly", "tracking", "workflows", "automations", "email", "SMS", "reminders", "missed appointments", "cancellations", "notifications", "tasks", "tags", "custom fields", "triggers", "pipeline", "opportunity stages", "lead sources", "local search", "Google Maps", "Google Business Profile", "local SEO", "walkthrough", "documentation", "test"],
    focus: ["crm", "leads", "web", "admin", "english"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Experience building GoHighLevel funnels, workflows and snapshots", proof: "I build GoHighLevel workflows for a live client account: SMS and email confirmations, reminders, ticket purchases and follow-ups, sorted into 7 workflow folders. I would package the agreed pieces into your snapshot and test the install in a separate account before handover.", status: "yes", tab: "automations", cta: "See my workflows" },
      { req: "Lead generation and appointment-booking systems", proof: "I manage 61 GoHighLevel booking calendars and 200+ calendar events, and I built a live service website designed to bring in quote enquiries.", status: "yes", tab: "websites", cta: "See my pages" },
      { req: "Organise a CRM and sales pipeline", proof: "I run an events pipeline of 84 opportunities through Booked, Attended, No Show and Cancelled, with source, value and notes kept up to date, and a 1,400+ contact lead database.", status: "yes", tab: "pipeline", cta: "See my pipeline" },
      { req: "Email and SMS follow-up workflows", proof: "Confirmations, reminders and follow-up sequences by email and SMS, running every day for a wellness brand in Australia.", status: "yes", tab: "automations", cta: "See my follow-ups" },
      { req: "Forms, calendars, tags, custom fields and triggers", proof: "My workflows start from bookings and form submissions, add tags and move opportunities to the right stage, so each lead's status is clear.", status: "yes", tab: "automations", cta: "See my triggers" },
      { req: "Local businesses, Google Business Profile or local SEO (a plus)", proof: "I published posts to Google Business Profile for a US company, and set up SEO and AI search optimization for a landscaping business in Australia so local customers can find it.", status: "yes", tab: "local", cta: "See my local SEO" },
      { req: "Explain recommendations clearly, plus a walkthrough and documentation", proof: "Online English teacher and former Editor-in-Chief. I write step-by-step SOPs in Notion and send clear daily and weekly updates, and I will record a screen walkthrough of every workflow.", status: "yes", tab: "pipeline", cta: "See my documentation" },
      { req: "Attention to detail and willingness to test your work", proof: "I submit every form, book every calendar and check every email and SMS myself before anything goes live.", status: "yes" }
    ],
    workHeadHide: true,
    workSections: [
      { type: "block", key: "websites" },
      { type: "heading" },
      { type: "cards", part: "automations", keys: ["ghlWorkflows", "ghlBooking", "ghlConvos"] },
      { type: "cards", part: "pipeline", keys: ["ghlPipeline", "ghlRecords", "ghlLeads", "ghlUpdates"] },
      { type: "cards", part: "local", keys: ["seoAi"] }
    ],
    workHeads: {
      websites:    { label: "Lead Funnels & Landing Pages", title: "Funnels I Created on GoHighLevel.", text: "Live client sites and concepts built around one clear request, mobile-friendly and simple to fill in." },
      automations: { label: "Lead Follow-Up Automations", title: "Every Lead Followed Up.", text: "Email and SMS confirmations, reminders and follow-ups I build in GoHighLevel, so no lead is left waiting." },
      pipeline:    { label: "CRM & Sales Pipeline", title: "See Where Every Prospect Stands.", text: "Opportunity stages, lead sources and clean records, with documented processes your team can follow." },
      local:       { label: "Local Search", title: "Found by Local Customers.", text: "On-page SEO and AI search optimization for a local service business in Australia." }
    },
    resultsShots: "none",
    webProjectOverrides: {
      "Wellness Brand in Australia": { group: "Funnel I Created via GoHighLevel", desc: "A funnel I created via GoHighLevel: a program landing page that makes it easy for clients to learn about a therapy and enquire." }
    },
    webProjectsOrder: ["Cleaning Services", "Aesthetic Clinic", "Real Estate", "Tutoring Centre"],
    resultsNote: "GoHighLevel work: calendars, workflows, pipelines and lead records I build and manage.",
    stats: ["calendars", "events", "leads", "years"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "GHL Lead System"
  },
  "kind-hearts-it": {
    label: "IT Specialist (Kind Hearts Home Care, Australian disability support business)",
    headline: "IT Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "SiteGround Email · DNS & MX Records · Google Workspace · WordPress · Account Security · 1300 Number",
    tagline: "",
    summary: "Philippines-based IT specialist with 5+ years supporting Australian businesses with WordPress, domains, DNS records and Google Workspace. I update WordPress content and contact details, test every email and form myself, and keep every login confidential.",
    keywords: ["IT specialist", "SiteGround", "business email", "email delivery", "Google Workspace", "DNS", "MX records", "WordPress", "website content", "contact details", "ownership change", "secure", "website and email accounts", "email access", "contact forms", "1300 number", "Australian business", "confidentiality", "data security", "one-off project"],
    focus: ["web", "admin", "ops", "english", "crm"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Troubleshoot SiteGround business email delivery", proof: "I test delivery myself: send a test email both ways, read the bounce message, then check the mailbox settings, the sender records and the DNS in that order. I follow the host's own steps and report each finding with screenshots, so you can see exactly what was wrong and what fixed it.", status: "yes", tab: "websites", cta: "See my domain work" },
      { req: "Investigate Google Workspace and DNS configuration", proof: "Google Workspace every day for 5+ years, and DNS records in Cloudflare for my own domain and website projects: A, CNAME and TXT records, custom domains and SSL verification. I check every record against the setup steps and verify it after the change.", status: "yes", tab: "websites", cta: "See my domain work" },
      { req: "Update WordPress website content and contact details", proof: "WordPress is part of my website toolkit, with Wix Studio, Webflow and Framer. I update text, phone numbers, emails and addresses on the websites I build, then check every page on phone and desktop.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Secure website and email accounts following a business ownership change", proof: "I list every account first (website, hosting, domain, email, social), then change the passwords, turn on two-step verification, remove old access and hand you the finished list. I already hold logins for client CRMs, hosting and domains, and I keep them in a password manager.", status: "yes", tab: "records", cta: "See my records" },
      { req: "Configure business email access and contact forms", proof: "I set up sender details, signatures and email settings in Google Workspace and GoHighLevel, and I have built working request forms. I submit every form myself and confirm the enquiry arrives in the right inbox.", status: "yes", tab: "forms", cta: "See my forms and follow-up" },
      { req: "Assist with integrating a new Australian 1300 business number", proof: "I update every place the number appears (website, contact forms, email signatures, booking pages), then call it myself to test. For the phone line itself I follow your provider's setup steps exactly.", status: "yes", tab: "forms", cta: "See my follow-up work" },
      { req: "Strong WordPress and SiteGround experience", proof: "I connect domains to my own site and my website projects, and work from the host's own steps. I take a backup first, change one thing at a time and check the site after every change.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Experience with DNS, MX records and Google Workspace", proof: "DNS and Google Workspace are tools I use for client work today. MX records are set from the email provider's own values, and I verify the mail flow with a test email after the change.", status: "yes", tab: "websites", cta: "See my domain work" },
      { req: "Good written English and communication skills", proof: "Online English teacher, English radio broadcasting awardee and a former Editor-in-Chief. I send a short update after every step: what I did, what I saw, and what I need from you.", status: "yes", tab: "records", cta: "See my updates" },
      { req: "Ability to work remotely with an Australian business", proof: "I already work with Australian clients every day: a landscaping company, a wellness brand and a national pageant. 65 Mbps fiber, backup mobile Wi-Fi, a backup laptop and a backup power generator.", status: "yes" },
      { req: "Respect for confidentiality and data security", proof: "Logins stay in a password manager and are never shared or reused. I only touch what the task needs, and I ask before anything outside it. Care of client information is already part of how I work.", status: "yes" },
      { req: "One-off project, with potential for ongoing work", proof: "Happy to start with the project and stay on afterwards for updates, fixes and monthly checks, with a written update after each step.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "websites" },
      { type: "cards", part: "forms", keys: ["ghlWorkflows", "ghlConvos", "ghlRecords"] },
      { type: "cards", part: "records", keys: ["cdcTracker", "cdcDrive", "cdcUpdates"] }
    ],
    workHeads: {
      websites: { label: "Websites, Domains & DNS", title: "Domains I Point and Keep Live.", text: "WordPress, Wix Studio and hand-coded websites I designed and built, with domains and DNS records set in Cloudflare and every page tested on phone and desktop." },
      forms:    { label: "Email, Forms & Follow-Up", title: "Every Enquiry Reaches the Right Inbox.", text: "Confirmation emails, forms and follow-ups I set up and test myself, so nothing gets lost on the way." },
      records:  { label: "Access, Records & Updates", title: "Every Account Listed, Every Step Reported.", text: "Trackers, organised files and a short update after every task, so you always know where things stand." }
    },
    webProjectsHide: ["Landscaping Services in Australia", "Wellness Brand in Australia"],
    resultsShots: "none",
    resultsNote: "Websites, calendars and client records I handle every day.",
    stats: ["years", "brands", "calendars", "leads"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "IT Specialist application"
  },
  "aviation-brand-designer": {
    label: "Brand Designer (Aviation gaming company, brand refresh)",
    headline: "Brand Designer",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Brand Identity · Brand Style Guide · Website Direction · Social Presence · Marketing Design · Long-Term Part-Time",
    tagline: "",
    summary: "Brand designer with 5+ years of experience building brand identity, brand boards, websites and social presence for brands in Australia, the United States and Europe. I design logo suites, colour palettes and typography, then carry them into a website and a feed that looks like one brand.",
    keywords: ["brand designer", "brand identity", "rebrand", "brand refresh", "brand style guide", "logo", "colour palette", "typography", "website direction", "social media presence", "marketing", "modern", "distinctive", "credible", "community", "aviation", "gaming", "part-time", "long-term", "portfolio"],
    focus: ["design", "web", "social", "english", "admin"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "A strong portfolio showing complete, detailed brand systems", proof: "My fullest system is for a landscaping business in Australia: logo suite (primary, icon, wordmark, dark version), colour palette, typography, brand positioning, voice and tone, content pillars, a live website and a matching feed. The same one-look rule runs through a wellness brand's feed and several sample brands.", status: "yes", tab: "brands", cta: "See my brand systems" },
      { req: "Develop a brand identity through close discussion with management", proof: "I research first, then design. For the landscaping business I reviewed every local competitor, found the gap none of them covered, and built the identity and positioning around it. I send drafts early, ask for notes and keep every version so we can compare.", status: "yes", tab: "brand", cta: "See the brand direction" },
      { req: "Create an initial brand style guide", proof: "I put the logo suite, colour palette, typography and stationery on one brand board, and write the voice and tone as a short guide: how the brand sounds, what it never sounds like, and its key phrases.", status: "yes", tab: "brands", cta: "See my brand board" },
      { req: "Help shape direction for the brand, website, social media and marketing", proof: "I carry one identity across a live website, a nine-post Instagram feed plan and email campaigns, so the logo, colours and tone match on every touchpoint.", status: "yes", tab: "websites", cta: "See my websites" },
      { req: "Understanding of the latest trends in the digital world", proof: "I work in today's formats every week: Instagram carousels and Reels, UGC-style product videos, AI model videos clearly labelled as AI, and email campaigns, all in the brand's own look.", status: "yes", tab: "designs", cta: "See my designs" },
      { req: "Original thinking and a willingness to push back on ideas", proof: "I bring my own ideas with a reason: the landscaping brand's positioning came from what competitors were not saying, not from copying them. If an idea works against the brand, I say so politely and bring a better option.", status: "yes", tab: "brand", cta: "See how I research" },
      { req: "Clear communication and reliability", proof: "I send a short update after every step, reply the same day and work the same steady hours for the same clients for months. 65 Mbps fiber with backup internet, a backup laptop and a backup generator.", status: "yes" },
      { req: "Part-time, long-term brand designer after the initial project", proof: "Yes. I stay with clients for the long run and keep a brand moving month after month: new posts, pages and campaigns that all follow the same guide.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "brandSystems" },
      { type: "cards", part: "brand", keys: ["kkBrand", "kkCompetitors", "plushBranding"] },
      { type: "block", key: "websites" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "emails" }
    ],
    workOverrides: {
      brandSystems: {
        label: "Brand identity design",
        blurb: "Every brand identity I have designed: logo, colour palette, typography and brand voice, shown with where it is used.",
        items: [{"src":"web-kerbingking.jpg","title":"Kerbing King website"},{"src":"kk-brand-1.webp","title":"Kerbing King brand positioning, voice and tone"},{"src":"email-velour-1.jpg","title":"VELOUR email 1, the launch"},{"src":"email-velour-2.jpg","title":"VELOUR email 2, the signature scent"},{"src":"ig-feed-makeup-grid.webp","title":"Bloom & Blush feed concept"},{"src":"ig-feed-clinic-grid.webp","title":"Lumière Aesthetics feed concept"},{"src":"ig-feed-coffee-grid.webp","title":"Ember & Oak feed concept"},{"src":"ig-feed-sweet-grid.webp","title":"Crave & Co feed concept"}],
        brands: [{"kind":"real","name":"The Kerbing King & Landscaping","note":"Landscaping and kerbing business, Australia: reliable, professional and trusted","accent":"#1b4332","tint":"#eef5ef","bg":"#ffffff","fg":"#1b4332","logo":"logo-kerbing-king.png","thumbs":["logo-kerbing-king-wordmark.jpg","logo-kerbing-king-icon.jpg","logo-kerbing-king-alt.jpg"],"palette":[["Forest Green","#1b4332"],["Leaf Green","#5b8a2a"],["Crown Gold","#d8a31a"],["White","#ffffff"]],"font":"Nunito","fontNote":"Bold rounded sans for the wordmark: friendly, easy to read on a van, a sign or a phone.","voice":["Friendly","Local","Professional","Honest"],"apps":[{"i":0,"label":"Kerbing King website","wide":false},{"i":1,"label":"Kerbing King brand positioning, voice and tone","wide":false}]},{"name":"Lumière Aesthetics","note":"Aesthetic clinic in Beverly Hills: calm, clean and premium","accent":"#3f5b4e","tint":"#eef3ee","bg":"#ffffff","fg":"#f4efe7","font":"Jost","wmWeight":400,"wmSpace":"0.14em","palette":[["Deep Sage","#3f5b4e"],["Sage","#7d9a85"],["Champagne","#c9a97a"],["Blush","#e8d5c8"],["Linen","#f4efe7"]],"fontNote":"Jost, light and airy, with plenty of white space.","voice":["Calm","Clean","Premium"],"apps":[{"i":5,"label":"Lumière Aesthetics nine-post Instagram grid","grid":true}],"logo":"logo-lumiere-skin.svg","thumbs":["logo-lumiere-skin-icon.svg","logo-lumiere-skin-reversed.svg","logo-lumiere-skin-wordmark.svg"]},{"name":"Ember & Oak","note":"Coffee shop in Melbourne: warm, cosy and café-fresh","accent":"#7a4a22","tint":"#f6eee4","bg":"#ffffff","fg":"#f3e9dc","font":"Bricolage Grotesque","wmWeight":700,"palette":[["Espresso","#3b2a20"],["Caramel","#a8703d"],["Latte","#d9bfa3"],["Cream","#f3e9dc"],["Sage","#5f6f52"]],"fontNote":"Bricolage Grotesque: friendly, a little quirky, easy to read on a menu board.","voice":["Warm","Cosy","Café-fresh"],"apps":[{"i":6,"label":"Ember & Oak nine-post Instagram grid","grid":true}],"logo":"logo-ember-oak.svg","thumbs":["logo-ember-oak-icon.svg","logo-ember-oak-reversed.svg","logo-ember-oak-wordmark.svg"]},{"name":"Crave & Co","note":"Dessert shop: warm, cosy and made to make you hungry","accent":"#5b2d6e","tint":"#f6eef8","bg":"#ffffff","fg":"#f4c27a","logo":"logo-crave-co.svg","palette":[["Plum","#5b2d6e"],["Caramel","#c9763a"],["Honey","#f4c27a"],["Cream","#fbf1e4"],["Berry","#8b4a5e"]],"font":"Fraunces","fontNote":"Fraunces: soft, rounded letters that feel like something sweet.","voice":["Warm","Cosy","Hungry"],"apps":[{"i":7,"label":"Crave & Co nine-post Instagram grid","grid":true}],"thumbs":["logo-crave-co-icon.svg","logo-crave-co-reversed.svg","logo-crave-co-wordmark.svg"]},{"name":"VELOUR Maison de Parfum","note":"Luxury perfume e-commerce brand, Sydney: quiet, rich and unhurried","accent":"#7a1f33","tint":"#f6efe9","bg":"#140b0d","fg":"#cdae7a","wordmark":"VELOUR","sub":"Maison de Parfum","font":"Jost","wmWeight":300,"wmSpace":"0.34em","palette":[["Noir","#140b0d"],["Oxblood","#3c0814"],["Champagne Gold","#cdae7a"],["Ivory","#f6f1e9"]],"fontNote":"Jost Light, wide-spaced capitals for the logo and headings.","voice":["Quiet","Rich","Unhurried"],"apps":[{"i":2,"label":"VELOUR email 1, the launch"},{"i":3,"label":"VELOUR email 2, the signature scent"}]},{"name":"Bloom & Blush","note":"Makeup brand in Los Angeles: soft, feminine and shoppable","accent":"#8e2c48","tint":"#fbeff1","bg":"#8e2c48","fg":"#fbf3ee","wordmark":"Bloom & Blush","sub":"Beauty","font":"Playfair Display","wmWeight":600,"palette":[["Berry","#8e2c48"],["Rose","#d98a9b"],["Petal","#f3d6d8"],["Cream","#fbf3ee"],["Sand","#c9a07a"]],"fontNote":"Playfair Display for headlines, a clean sans for captions.","voice":["Soft","Feminine","Shoppable"],"apps":[{"i":4,"label":"Bloom & Blush nine-post Instagram grid","grid":true}]}]
      }
    },
    workHeads: {
      brandSystems: { label: "Brand Identity", title: "Brand Identities I Created and Designed.", text: "Logo, colours, typography and voice for each brand, with samples of where it is used." },
      brand:    { label: "Brand Style & Voice", title: "Positioning, Voice and Tone Written Down.", text: "Competitor research, a clear position and a voice guide the whole team can follow." },
      websites: { label: "Website Direction", title: "Websites That Carry the Brand.", text: "Live sites and concepts where the logo, colours and photography match the identity." },
      feeds:    { label: "Social Presence", title: "A Feed That Looks Put Together.", text: "Nine posts planned around one palette, previewed before anything goes live." },
      designs:  { label: "Marketing Design", title: "Graphic Designs I Create for You", text: "Posts, carousels and promos in the brand's own colours, ready to publish." },
      emails:   { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["brands", "years", "views", "followers"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "Brand Designer application"
  },
  "resmile-marketing": {
    label: "Digital Marketing & Lead Generation Specialist (ReSmile, Australia)",
    headline: "Digital Marketing & Lead Generation Specialist",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "Facebook & Instagram · Meta Business Suite · Reels · Canva · Lead Generation · Australian Audiences",
    tagline: "",
    codeWord: "RESMILE LAUNCH",
    summary: "Digital Marketing & Lead Generation Specialist with 5+ years managing Facebook and Instagram business accounts for beauty, healthcare and service brands. I create Canva graphics, Reels and ad creatives, plan monthly content calendars, and turn enquiries into booked consultations with lead funnels and follow-ups.",
    keywords: ["digital marketing", "lead generation", "Facebook", "Instagram", "Meta Business Suite", "Meta Ads Manager", "paid advertising", "advertising graphics", "ad creatives", "Reels", "Stories", "carousel", "captions", "marketing copy", "content calendar", "monthly content calendars", "Canva", "video editing", "engagement", "brand awareness", "brand trust", "enquiries", "consultation bookings", "cost per lead", "weekly reporting", "recommendations", "Australian audiences", "Australia", "dental", "healthcare", "cosmetic", "beauty", "lifestyle", "aesthetic clinic", "launch", "proactive", "independently", "reliable"],
    focus: ["social", "design", "leads", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Facebook and Instagram business account management", proof: "From 2022 to 2025 I ran Facebook and Instagram for an aesthetic clinic and two skincare and wellness brands, and I post daily on Instagram for a window cleaning company in Sydney.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Plan and maintain monthly content calendars", proof: "I plan a month of Reels, Stories, carousels and posts ahead in a content calendar and schedule them in Meta Business Suite, so the page never goes quiet.", status: "yes", tab: "plan", cta: "See my calendars" },
      { req: "Content creation and Canva", proof: "I design posts, carousels, promos and educational graphics in Canva, always in the brand's own colours and fonts.", status: "yes", tab: "designs", cta: "See my Canva designs" },
      { req: "Instagram Reels and video editing", proof: "Every Reel I edit has a hook in the first second, clean cuts, subtitles and music, made for Instagram and Facebook.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Create advertising graphics, videos and copy", proof: "I edit UGC-style product videos with voiceover and captions, ready to run as Instagram or Facebook ads, and write the ad copy and captions to match.", status: "yes", tab: "featReels", cta: "See my ad videos" },
      { req: "Meta Business Suite, advertising metrics and weekly reporting", proof: "I read reach, views, followers and enquiries in Meta Business Suite every week and send a short report with what to post or test next. One client's post views grew 50% to 265K and followers 147% in 90 days.", status: "yes", tab: "results", cta: "See the real screenshots" },
      { req: "Facebook and Instagram lead generation: genuine enquiries and consultation bookings", proof: "At the aesthetic clinic I handled enquiries, bookings and follow-ups from our social pages. Today I manage 61 GoHighLevel booking calendars and email and SMS follow-ups for a wellness brand in Australia, so every enquiry gets an answer and a booked time.", status: "yes", tab: "leads", cta: "See my lead follow-ups" },
      { req: "Experience marketing to Australian audiences", proof: "I work with an Australian wellness brand, a national pageant in Australia, a landscaping business and a window cleaning company in Sydney, all on Australian time.", status: "yes", tab: "results", cta: "See my Australian work" },
      { req: "Dental, healthcare, cosmetic, beauty or lifestyle industries", proof: "Three years marketing an aesthetic clinic and skincare brands, plus an aesthetic clinic Instagram feed and website concept with an online consultation booking form.", status: "yes", tab: "feeds", cta: "See my clinic feed" },
      { req: "Proactive, reliable and able to work independently", proof: "I keep my own trackers and calendars, bring new content ideas every week, and deliver on time without being reminded.", status: "yes" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "cards", part: "leads", keys: ["ghlBooking", "ghlWorkflows", "ghlPipeline"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "Instagram & Facebook Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "A Month of Content, Planned Ahead.", text: "Monthly content calendars for Facebook and Instagram, so ReSmile launches with a steady, trusted presence." },
      leads:   { label: "Lead Generation", title: "Every Enquiry Followed Up.", text: "Booking calendars, email and SMS follow-ups and pipelines that turn enquiries into consultation bookings." },
      featReels: { label: "Ad Creatives & UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a monthly content calendar, write the captions, and schedule every post, Reel and Story with Meta Business Suite and Metricool, so a page posts consistently without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Facebook", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do, ready to run as ads. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "RESMILE LAUNCH - Digital Marketing & Lead Generation Specialist"
  },
  "tiktok-shop-fitness": {
    label: "Short-Form Video Editor (TikTok Shop Fitness & Home Workout)",
    headline: "Short-Form Video Editor",
    headlinePill: true,
    headlineBadge: "5+ Years",
    sub: "TikTok Shop Videos · Hooks · Fast Pacing · Captions & Zooms · CapCut · Clear Audio",
    tagline: "",
    codeWord: "GYM",
    summary: "Short-form video editor with 5+ years of experience editing TikTok, Reels and UGC-style videos for business owners in Australia, the United States and Europe. I turn raw footage into natural-looking videos with a strong opening, fast pacing, readable captions, zooms and clear audio.",
    keywords: ["short-form video editor", "TikTok Shop", "TikTok", "Reels", "Shorts", "UGC", "raw creator footage", "vertical video", "15-40 seconds", "hooks", "first 1-2 seconds", "pacing", "retention", "captions", "on-screen text", "zooms", "cuts", "product demonstration", "B-roll", "audio clarity", "voice levels", "creative briefs", "consistent style", "deadlines", "revisions", "CapCut", "organic", "authentic", "e-commerce", "long-term"],
    focus: ["social", "design", "english", "admin", "web"],
    order: ["results", "work", "experience", "skills", "why", "contact"],
    matchTitle: "Your list, my proof",
    matchIntro: "Here is each thing you asked for, and what I have already done. Tap a row for the proof.",
    match: [
      { req: "Edit raw creator footage into vertical TikToks (15-40 seconds)", proof: "5+ years of vertical videos cut from raw footage in CapCut, most of them between 15 and 40 seconds. Reels, TikTok and Shorts share the same 9:16 format, so every edit is ready for all three.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Strong openings that capture attention in the first 1-2 seconds", proof: "Every video opens on its strongest moment with a short line of text in the first second, so the viewer has a reason to stay.", status: "yes", tab: "reels", cta: "See my hooks" },
      { req: "Remove pauses and keep fast, natural pacing", proof: "I cut every pause, breath gap and repeated take, keep the strongest take, and time the cuts to the speech so it still sounds like a real person talking.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Readable captions, on-screen text, zooms and cuts", proof: "Captions timed word by word to the voice and placed clear of the face, short text for key points, and slow punch-in zooms on the words that matter.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Product demonstration footage and B-roll where useful", proof: "My UGC product videos mix the voiceover, clean product shots and B-roll, so the viewer sees the product being used while they hear why it works.", status: "yes", tab: "featReels", cta: "See my UGC videos" },
      { req: "Improve audio clarity and balance voice levels", proof: "I clean up the voice, level it against the music and sound effects, and check the final mix on a phone speaker so the words stay clear.", status: "yes", tab: "reels", cta: "See my Reels" },
      { req: "Videos that feel authentic and organic, not overly produced", proof: "My UGC-style edits keep the natural voice and simple captions, with light music and effects, so they look like a real creator's video and not an ad.", status: "yes", tab: "featReels", cta: "See my UGC videos" },
      { req: "Follow creative briefs and keep a consistent editing style", proof: "I follow the brief and the example videos, keep the same caption style, fonts and music feel on every video, and send a draft for a check before anything is final.", status: "yes", tab: "feeds", cta: "See the brand consistency" },
      { req: "Organise finished videos and deliver on agreed deadlines", proof: "Every task has a deadline in Asana, Notion or Trello, a short update when it is done, and a weekly report. Finished videos are named and sorted into one folder per week.", status: "yes", tab: "smm", cta: "See my content planning" },
      { req: "Reasonable revisions based on feedback", proof: "I change a draft the same day after your notes and keep a short list of what you like, so each batch needs fewer changes than the last.", status: "yes" },
      { req: "Editing software", proof: "CapCut every day for editing, with Canva for covers and graphics.", status: "yes", tab: "reels", cta: "See my Reels" }
    ],
    workSections: [
      { type: "block", key: "reels" },
      { type: "block", key: "feeds" },
      { type: "block", key: "designs" },
      { type: "block", key: "featReels" },
      { type: "block", key: "aiModels" },
      { type: "cards", part: "plan", keys: ["cupSchedule", "plushCalendar"] },
      { type: "block", key: "emails" }
    ],
    workHeads: {
      designs: { label: "Social Media Design", title: "Graphic Designs I Create for You", text: "Canva posts and carousels in the brand's own colours, ready to schedule on Instagram." },
      reels:   { label: "Short-Form Videos", title: "Reels I Edit for You That Keep People Watching", text: "Cuts, subtitles, music and transitions in CapCut, made for Instagram and TikTok." },
      feeds:   { label: "Instagram Feed Planning", title: "Instagram Feed That Looks Put Together.", text: "Nine posts planned around one colour palette, previewed as a flat plan and inside the Instagram app before anything goes live." },
      plan:    { label: "Content Strategy", title: "Videos Planned Ahead, Delivered on Time.", text: "A simple weekly plan with a deadline for every video, so nothing is rushed or late." },
      featReels: { label: "UGC Videos", title: "UGC Videos I Edit for Your Brand", text: "Voiceover, captions and clean product shots, ready for Instagram or an ad." },
      aiModels:  { label: "AI Model Videos", title: "AI Model Videos I Edit for Your Product", text: "A product photo turned into a model video, labelled as AI-generated." },
      emails:    { label: "Email Marketing", title: "Emails That Bring People Back.", text: "Whole campaigns in the brand's colours, with one clear button in every email." }
    },
    reelsContain: true,
    reelsWrap: true,
    reelAutoSound: true,
    caseOverrides: {
      cupSchedule: {
        solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool, so a page posts every week without gaps.",
        tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram"]
      }
    },
    workOverrides: {
      designs: {
        items: [
          "design-coupon-20.webp", "design-taxi-light.webp", "design-food-1.jpg",
          "design-video-1.mp4", "design-stress-relief.jpg", "design-food-2.jpg",
          "design-valentine-pink.webp", "design-9d-breathwork.jpg", "design-food-3.jpg",
          "design-taxi-dark.webp", "design-video-2.mp4", "design-food-4.jpg",
          "design-coupon-5.webp", "design-valentine-call.jpg", "design-food-5.jpg",
          "design-breathwork-events.jpg", "design-9dmt-trip.jpg", "design-food-6.jpg",
          "design-promo.jpg", "design-education.jpg", "design-food-7.jpg",
          "design-voucher-20.png", "design-book-now-pay-later.png", "design-food-8.jpg",
          "design-social-media-management.png", "design-video-3.mp4", "design-food-9.jpg",
          "design-video-4.mp4", "design-food-10.jpg"
        ].map(f => f.endsWith(".mp4")
          ? { src: f, thumb: f.replace(".mp4", ".jpg"), kind: "video" }
          : { src: f, thumb: f.replace(/\.(webp|png)$/, ".jpg") })
      },
      reels: {
        blurb: "Food Reels, before-and-after Reels and promo Reels with captions and music, made for Landscaping Services in Australia and sample brands. Tap a phone to play.",
        items: [
          { src: "reel-ember-funk.mp4", poster: "reel-ember-funk.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Ember & Salt (sample)" },
          { src: "reel-stackd-burger.mp4", poster: "reel-stackd-burger.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Stack'd Burgers (sample)" },
          { src: "reel-2.mp4", poster: "reel-2.jpg", kind: "video" },
          { src: "reel-4.mp4", poster: "reel-4.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "Pageant Promo in Australia" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", kind: "video", logo: "logo-crave-icon.jpg", acct: "ROSELLE Wellness (sample)" },
          { src: "reel-1.mp4", poster: "reel-1.jpg", kind: "video" }
        ]
      },
      featReels: {
        label: "UGC videos I edit for your brand",
        blurb: "Product videos with a voiceover, captions, sound effects and music, edited the way UGC creators do. Sample brands, tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ugc-lumera-skincare.mp4", poster: "ugc-lumera-skincare.jpg", name: "LUMERA Skincare (sample)" },
          { src: "ugc-velour-perfume.mp4", poster: "ugc-velour-perfume.jpg", name: "VELOUR Perfume (sample)" },
          { src: "ugc-roselle-wellness.mp4", poster: "ugc-roselle-wellness.jpg", name: "ROSELLE Wellness (sample)" }
        ]
      },
      aiModels: {
        label: "AI model videos I edit for your product",
        blurb: "Your product photo, worn by an AI model who walks, turns and poses, so you can show a piece in motion without booking a shoot. Every video is labelled as AI-generated. Tap a video to switch the sound.",
        auto: true,
        items: [
          { src: "ai-model-product-to-runway.mp4", poster: "ai-model-product-to-runway.jpg", name: "Product to Runway" }
        ]
      }
    },
    resultsShots: "results",
    resultsNote: "Meta Business Suite screenshots: Facebook Page of Wellness Brand in Australia, last 90 days.",
    stats: ["views", "followers", "years", "events"],
    workTitle: "Graphic Designs I Create for You",
    portfolioLabel: "View my Portfolio",
    emailSubject: "GYM - Short-Form Video Editor"
  }
};
