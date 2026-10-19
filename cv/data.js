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
    { id: "ls", company: "Wellness Brand in Australia", role: "Virtual Assistant: Social Media, CRM & Admin", where: "Remote (Australia)", dates: "Jan 2026 – Present",
      bullets: [
        { t: "**Plan and post content** on Facebook and Instagram, designed in Canva and scheduled with Meta Business Suite: **post views up 50% to 265K** and **followers up 147% within 90 days**.", tags: ["social", "design"], tools: ["Canva", "Meta Business Suite", "Facebook", "Instagram"] },
        { t: "**Manage the CRM** (GoHighLevel): built automations and **follow-up sequences** for events, SMS and email confirmations, ticket purchases and reminders, organized in **7 workflow folders**.", tags: ["crm", "leads"], tools: ["GoHighLevel"] },
        { t: "Manage client bookings across **61 calendars** and coordinate **200+ calendar events**, onboarding sessions and consultations, with daily and weekly progress reports for the owner.", tags: ["admin", "ops"], tools: ["GoHighLevel", "Google Workspace"] },
        { t: "Respond to **leads and client enquiries** by email, Messenger and the CRM, sharing booking links and sending follow-ups and reminders.", tags: ["leads", "support", "english"], tools: ["GoHighLevel", "WhatsApp"] },
        { t: "Designed and update the business website, including a dedicated program landing page, using Wix Studio, HTML, CSS and JavaScript.", tags: ["web", "design"], tools: ["Wix Studio"] },
        { t: "Built a Notion business hub for planning, SOPs and marketing strategy, and organized records for 67 products and all customer orders.", tags: ["admin", "ops"], tools: ["Notion"] }
      ] },
    { id: "kk", company: "Landscaping Services in Australia", role: "Virtual Assistant, Web Design & Branding", where: "Remote (Australia)", dates: "Jun 2026 – Present",
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
    { group: "Social Media & Design", items: ["Canva", "CapCut", "Adobe Photoshop", "Figma", "Meta Business Suite", "Metricool", "Facebook", "Instagram", "LinkedIn"] },
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
    ghlRecords: { category: "CRM & Automation", resp: "I manage and update contacts, orders and bookings in GoHighLevel so every record stays accurate.", title: "Contacts, opportunities & orders on GoHighLevel", clients: ["Wellness Brand in Australia"],
      challenge: "My client's business data was spread across many sheets and documents.", solution: "I organised the records in GoHighLevel, including 67 products and every customer order.", result: "I made accurate data faster to find and cut the manual searching.",
      tools: ["GoHighLevel", "Google Sheets"], images: ["ghl-orders.jpg", "ghl-products.jpg"] },
    ghlPipeline: { category: "CRM & Automation", resp: "I move opportunities into the correct stages based on customer responses, appointments and attendance.", title: "Pipelines & opportunity stages on GoHighLevel", clients: ["Wellness Brand in Australia"],
      challenge: "My client needed a clear way to see who had booked, attended, no-showed or cancelled for each event.", solution: "I managed an events pipeline of 84 opportunities, moving each one through Booked, Attended, No Show and Cancelled, and kept the source, value and notes up to date.", result: "I made every attendee's status easy to see at a glance, so follow-ups never get missed.",
      tools: ["GoHighLevel", "Opportunities", "Pipelines"], images: ["ghl-pipeline.jpg"] },
    ghlConvos: { category: "Customer Support", resp: "I check every new enquiry, follow it up, and monitor conversations so no customer is left waiting.", title: "Enquiries, follow-ups & conversations on GoHighLevel", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "My clients' customers expected quick, clear answers across many conversations.", solution: "I answered enquiries, helped with bookings, and shared accurate session details and booking links.", result: "I gave clients a better customer experience and stronger trust.",
      tools: ["GoHighLevel", "Gmail", "Messenger"], images: ["cs-inquiry.jpg", "cs-inquiry-2.jpg", "cs-email-follow-up.jpg", "cs-booking-link.jpg", "cs-reminder.jpg"] },
    ghlBooking: { category: "Admin Support", resp: "I support appointment booking and keep accurate notes on every calendar event.", title: "Appointment booking & accurate notes on GoHighLevel Calendar and Google Workspace", clients: ["Wellness Brand in Australia", "EO Staff", "Landscaping Services in Australia"],
      challenge: "Handling registrations and bookings manually caused extra work and errors for my client.", solution: "I managed bookings across 61 GoHighLevel calendars and 200+ Google Calendar events, keeping notes on each event.", result: "I made booking smoother and cut scheduling conflicts.",
      tools: ["GoHighLevel", "Google Calendar", "Google Workspace"], images: ["ghl-calendars.jpg", "ghl-booking-widget.jpg", "ghl-recurring.jpg", "gcal-day.jpg", "gcal-event.jpg"] },
    ghlWorkflows: { category: "CRM & Automation", resp: "I create GoHighLevel workflows, check that they run correctly, and flag any problems.", title: "Workflows & automations I create on GoHighLevel", clients: ["Wellness Brand in Australia"],
      challenge: "My client's automations were hard to find and manage, and follow-ups relied on doing things by hand.", solution: "I built SMS and email confirmations, reminders and follow-up flows, and sorted every workflow into 7 clear folders.", result: "I made automations easy to find, check and fix, and reduced missed appointments.",
      tools: ["GoHighLevel", "Gmail", "Google Calendar"], images: ["crm-workflow-list.jpg", "crm-ticket-workflow.jpg", "crm-call-confirmation.jpg", "crm-call-confirmation-2.jpg", "crm-follow-up.jpg", "crm-follow-up-2.jpg"] },
    ghlUpdates: { category: "Admin Support", resp: "I send a short daily update covering progress, outstanding tasks and issues.", title: "Daily updates & documented processes on Google Workspace and Notion", clients: ["EO Staff", "Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Owners had to keep asking for updates on completed work.", solution: "I sent structured daily and weekly reports on tasks, priorities and next steps, and documented my processes in a Notion hub.", result: "I gave owners more transparency and one place where every process is written down.",
      tools: ["Google Docs", "Notion", "Gmail"], images: ["weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg"] },
    ghlLeads: { category: "Business Operations", resp: "I keep contact records and lead data consistent and tidy, with accurate details.", title: "Organised records & lead data on GoHighLevel and Google Sheets", clients: ["EO Staff"],
      challenge: "The sales team needed accurate, organised prospect data.", solution: "I researched prospects and built a lead database of 1,400+ rows, keeping records in GoHighLevel and Zoho CRM.", result: "I gave the team reliable data that supports outreach and follow-up.",
      tools: ["GoHighLevel", "Zoho CRM", "Google Sheets"], images: ["franchise-database.jpg"] },
    cdcResearch: { category: "Online Research", resp: "I research online, verify the details and prepare short summaries of fit.", title: "Online research & short summaries on Google Sheets", clients: ["EO Staff"],
      challenge: "My client's team needed reliable information about many companies, and it was scattered and unchecked.", solution: "I researched each company online and wrote a short summary of what it does and how well it fit. One daily report covered 32 companies assessed and 53 contacts added, all in one organized spreadsheet.", result: "I built a 1,400+ row database the team could search, filter and follow up from.",
      tools: ["Google Sheets", "Apollo.io", "Seamless.AI", "LinkedIn"], images: ["franchise-database.jpg", "weekly-report.jpg"] },
    cdcTracker: { category: "Project Coordination", resp: "I create and maintain tasks, deadlines and reminders, and track each item from start to done.", title: "Tasks, deadlines & trackers on Asana, Notion and Trello", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "My clients had plans, posts and tasks in many places, with no clear view of what was due next.", solution: "I set up task lists and trackers with deadlines, owners and reminders, and kept each item moving from start to done.", result: "I gave my clients one clear place to see priorities, deadlines and what is still outstanding.",
      tools: ["Asana", "Notion", "Trello", "Google Sheets"], images: ["smm-posting-schedule.jpg", "smm-calendar.jpg", "notion-planning.jpg"] },
    cdcDrive: { category: "Organized Records", resp: "I organize documents, records and spreadsheets so every file is easy to find.", title: "Organized files & records on Google Drive, Docs and Sheets", clients: ["Wellness Brand in Australia"],
      challenge: "My client's business data was spread across many sheets and documents.", solution: "I organized the records, including 67 products and every customer order, with clear names and one place for each document.", result: "I made accurate records faster to find and cut the manual searching.",
      tools: ["Google Drive", "Google Docs", "Google Sheets", "Microsoft Office"], images: ["ghl-orders.jpg", "ghl-products.jpg"] },
    cdcFollow: { category: "Follow-Up", resp: "I follow up consistently until the missing information arrives, and track upcoming deadlines.", title: "Follow-ups, reminders & upcoming deadlines on Google Calendar", clients: ["EO Staff", "Wellness Brand in Australia"],
      challenge: "Replies and tasks slipped when nobody followed up on them.", solution: "I sent follow-ups and reminders, coordinated 200+ calendar events, and kept a clear view of what was upcoming.", result: "I reduced missed appointments and kept my clients on track.",
      tools: ["Google Calendar", "Google Workspace", "Gmail"], images: ["gcal-day.jpg", "gcal-event.jpg", "cs-reminder.jpg", "crm-follow-up.jpg"] },
    cdcUpdates: { category: "Reporting", resp: "I send a brief weekly update on priorities and outstanding items, so leadership is always informed.", title: "Weekly updates & documented processes on Google Docs and Notion", clients: ["EO Staff", "Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Owners had to keep asking for updates on completed work.", solution: "I sent a structured update on tasks completed, next priorities and open items, and documented my processes in a Notion hub.", result: "I gave owners more transparency and one place where every process is written down.",
      tools: ["Google Docs", "Notion", "Gmail"], images: ["weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg"] },
    cupFeeds: { category: "Instagram Feed Planning", resp: "I help with content planning, creative ideas and maintaining a consistent brand aesthetic, so every post fits one clean, modern feed.", title: "Instagram feed planning: an aesthetic 9-post grid for three brands", clients: ["Sample concepts: Aesthetic Clinic, Travel Creator, Makeup Brand"],
      challenge: "A feed with random posts looks messy, and people do not follow a messy page.", solution: "I plan nine posts at a time as one grid: a colour palette, a mix of photos and text posts, and a fixed layout, then preview it as a flat plan and in the Instagram app.", result: "A feed that looks clean, modern and consistent at first glance, ready to schedule.",
      tools: ["Canva", "Instagram", "Later (ready to learn)", "Meta Business Suite"], images: ["ig-feed-clinic.webp", "ig-feed-travel.webp", "ig-feed-makeup.webp"] },
    cupSchedule: { category: "Manage and Schedule Content", resp: "I manage and schedule social media content, and ensure content is delivered on time and meets quality standards.", title: "Content calendar and scheduling for Instagram and Facebook", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Posts were put up when there was time, so the feed was irregular and hard to keep on brand.", solution: "I plan a content calendar, write the captions, and schedule every post, Reel and story with Meta Business Suite and Metricool. Later is the same idea as these schedulers, so I would learn it quickly.", result: "Every post goes out on time and on brand: post views up 50% to 265K and followers up 147% in 90 days.",
      tools: ["Meta Business Suite", "Metricool", "Notion", "Instagram", "Later (ready to learn)"], images: ["smm-calendar.jpg", "smm-posting-schedule.jpg", "smm-content-plan.jpg", "strategy-doc.jpg"] },
    cupReels: { category: "Instagram Reels & Short-Form Video", resp: "I edit Instagram Reels and short-form videos with captions and music.", title: "Instagram Reels and short-form videos in CapCut", clients: ["Landscaping Services in Australia"],
      challenge: "Raw before-and-after footage does not stop the scroll on its own.", solution: "I edit it into short Reels with captions, music and clean cuts in CapCut, and make short promo videos in Canva. Adobe Premiere Pro and DaVinci Resolve are new to me, and I would learn them.", result: "Plain footage turned into branded Reels, ready to schedule.",
      tools: ["CapCut", "Instagram Reels", "Canva", "Adobe Premiere Pro (ready to learn)", "DaVinci Resolve (ready to learn)"], images: ["reel-1.jpg", "reel-2.jpg", "reel-3.jpg"] },
    cupGraphics: { category: "Graphics, Promotional Posts & Ads", resp: "I create engaging graphics and promotional posts, with a clean, modern, visually appealing look.", title: "Graphics, promotional posts and ad creatives in Canva and Photoshop", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Service and product brands need graphics that look polished and on brand, not generic or cluttered.", solution: "I turn offers, products and photos into branded promotional posts, vouchers, coupons and seasonal campaigns. The same designs work as paid social media ad creatives. Running Meta Ads is new for me, and I would learn your setup properly from day one.", result: "A clean, consistent look that makes people stop and book.",
      tools: ["Canva", "Adobe Photoshop", "Meta Ads (ready to learn)"], images: ["design-promo.jpg", "design-valentine-pink.webp", "design-voucher-20.png", "design-coupon-20.webp", "design-stress-relief.jpg", "design-book-now-pay-later.png"] },
    cupCaptions: { category: "Captions & Brand Voice", resp: "I write captions with strong English grammar, spelling and brand-appropriate messaging, using keywords and hashtags.", title: "Captions, keywords and hashtags in the brand's voice", clients: ["Wellness Brand in Australia"],
      challenge: "Captions that sound generic do not build a brand or help people find it.", solution: "I write natural captions in the brand's voice, with the right keywords and hashtags, and plan content pillars in Notion so every post has a purpose. I am Google Digital Marketing certified and would go deeper on social media SEO for your brand.", result: "Clear, friendly captions that fit the brand and stay consistent.",
      tools: ["Notion", "Instagram", "Facebook", "Google Digital Marketing"], images: ["smm-content-plan.jpg", "notion-planning.jpg", "notion-home.jpg"] },
    cupBrand: { category: "Consistent Brand Aesthetic", resp: "I maintain a consistent brand aesthetic, so the whole feed reads as one brand.", title: "Consistent branding across the Instagram and Facebook feed", clients: ["Wellness Brand in Australia"],
      challenge: "A feed built from many topics and events risked looking mixed and cluttered.", solution: "I used the same fonts, colours, logo placement and layouts for every post, from education tips to event launches.", result: "A clean, recognizable look that builds trust at first glance.",
      tools: ["Canva", "Instagram", "Facebook"], images: ["brand-feed-1.webp", "brand-feed-2.webp"] },
    cupResults: { category: "On Time & Tracked", resp: "I make sure content is delivered on time, and I track what works.", title: "Results and weekly updates in Meta Business Suite", clients: ["Wellness Brand in Australia"],
      challenge: "The client could not tell which posts were working.", solution: "I tracked views, followers and interactions, used the numbers to decide what to post next, and sent a short weekly update.", result: "Post views grew 50% to 265K and followers 147% in 90 days.",
      tools: ["Meta Business Suite", "Facebook", "Google Docs"], images: ["results-views.jpg", "results-followers.jpg", "results-interactions.jpg", "weekly-report.jpg"] },
    plushStrategy: { category: "Social Media Strategy", resp: "I plan the social media strategy and content pillars so every post has a purpose and fits the brand.", title: "Social media strategy & content pillars on Notion", clients: ["Wellness Brand in Australia"],
      challenge: "My client posted when she had time, with no clear themes, so content felt random and was hard to keep consistent.", solution: "I built the social media strategy in Notion with content pillars for every day of the week: quotes and affirmations, soft promotion of upcoming events, education about the services, behind-the-scenes, and client reviews, with a feed preview to keep the look consistent.", result: "I made posting predictable and on brand, and it supported post views up 50% to 265K and followers up 147% in 90 days.",
      tools: ["Notion", "Instagram", "Facebook", "Canva"], images: ["smm-content-plan.jpg", "notion-planning.jpg", "notion-home.jpg"] },
    plushBranding: { category: "Branding", resp: "I maintain consistent branding across all accounts, so every post looks clean, polished and recognizable.", title: "Consistent branding across the Instagram and Facebook feed in Canva", clients: ["Wellness Brand in Australia"],
      challenge: "My client's posts came from many topics and events, and the feed risked looking mixed and cluttered.", solution: "I used the same fonts, colors, logo placement and layouts for every post, from education tips to event launches and personal brand content, so the whole feed reads as one brand.", result: "I gave the account a clean, consistent, recognizable look that builds trust at first glance.",
      tools: ["Canva", "Instagram", "Facebook"], images: ["brand-feed-1.webp", "brand-feed-2.webp"] },
    plushCalendar: { category: "Social Media Management", resp: "I manage Instagram and Facebook accounts and organize a monthly social media content calendar.", title: "Monthly social media content calendar on Instagram and Facebook", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "My clients needed steady, on-brand posting without scrambling for ideas each week.", solution: "I planned a content calendar, wrote natural captions in the brand's voice, and scheduled posts, Reels and stories with Meta Business Suite.", result: "I kept every account consistent and growing: post views up 50% to 265K and followers up 147% in 90 days.",
      tools: ["Meta Business Suite", "Instagram", "Facebook", "Canva", "Notion"], images: ["smm-calendar.jpg", "smm-posting-schedule.jpg", "strategy-doc.jpg"] },
    plushGraphics: { category: "Graphic Design & Branded Content", resp: "I design clean, professional promotional graphics for services, special offers and seasonal campaigns.", title: "Promotional graphics for services, special offers & seasonal campaigns in Canva", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Wellness and service brands need graphics that look polished and on brand, not generic or cluttered.", solution: "I turned simple services, offers and photos into branded graphics: service spotlights, vouchers, coupons, event announcements and a seasonal Valentine campaign.", result: "I gave my clients a clean, consistent look that makes people stop and book.",
      tools: ["Canva", "Adobe Photoshop"], images: ["design-promo.jpg", "design-valentine-pink.webp", "design-voucher-20.png", "design-coupon-20.webp", "design-stress-relief.jpg", "design-9d-breathwork.jpg", "design-breathwork-events.jpg", "design-book-now-pay-later.png"] },
    plushReels: { category: "Short-Form Video", resp: "I create short-form video content and Reels, and edit photos and videos from the team.", title: "Short-form video & Reels with captions and music", clients: ["Landscaping Services in Australia"],
      challenge: "Raw before-and-after footage does not stop the scroll on its own.", solution: "I edited it into short Reels with captions and music in CapCut, and made short promo videos in Canva.", result: "I turned plain footage into branded Reels ready to schedule.",
      tools: ["CapCut", "Reels", "Canva", "Meta Business Suite"], images: ["reel-1.jpg", "reel-2.jpg", "reel-3.jpg"] },
    plushTrack: { category: "Performance Reporting", resp: "I track social media performance, engagement and marketing results.", title: "Social media performance, engagement & results on Meta Business Suite", clients: ["Wellness Brand in Australia"],
      challenge: "My client could not tell which posts were actually working.", solution: "I tracked views, followers and interactions in Meta Business Suite and used the numbers to decide what to post next.", result: "Post views grew 50% to 265K and followers 147% in 90 days.",
      tools: ["Meta Business Suite", "Facebook"], images: ["results-views.jpg", "results-followers.jpg", "results-interactions.jpg", "smm-analytics.jpg"] },
    plushEmail: { category: "Email & Text Marketing", resp: "I assist with email and text marketing campaigns to encourage repeat visits and online booking.", title: "Email and text marketing campaigns, follow-ups & online booking", clients: ["Wellness Brand in Australia"],
      challenge: "Customers booked once and were not reminded to come back.", solution: "I built email and SMS follow-ups, confirmations and reminders, and shared online booking links.", result: "I reduced missed appointments and encouraged repeat bookings.",
      tools: ["GoHighLevel", "Gmail", "Mailchimp"], images: ["crm-follow-up.jpg", "crm-follow-up-2.jpg", "cs-email-follow-up.jpg", "cs-booking-link.jpg"] },
    pgLeads: { category: "Lead Generation & Research", resp: "I research prospects, build lead lists and keep accurate records of every lead.", title: "Lead research & contact database on Google Sheets", clients: ["EO Staff"],
      challenge: "The sales team needed a steady supply of qualified prospects, and the details were scattered and unchecked.", solution: "I researched prospects online with Apollo.io and Seamless.AI, checked the details, and built one organised spreadsheet. One daily report covered 32 companies assessed and 53 contacts added.", result: "I built a 1,400+ contact database the team could search, filter and use for outreach and discovery calls.",
      tools: ["Apollo.io", "Seamless.AI", "Google Sheets", "LinkedIn"], images: ["franchise-database.jpg", "weekly-report.jpg"] },
    pgFollow: { category: "Follow-Up & Communication", resp: "I follow up with people who have not replied or confirmed, by email and message.", title: "Follow-ups, reminders & enquiry replies by email, Messenger and CRM", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "People who enquire or book often go quiet, and the lead is lost if nobody follows up.", solution: "I reply to enquiries, send follow-ups and reminders, share booking links, and track who has and has not confirmed in GoHighLevel.", result: "I reduced missed appointments and kept every enquiry moving until it was confirmed.",
      tools: ["GoHighLevel", "Gmail", "Messenger", "WhatsApp"], images: ["cs-inquiry.jpg", "cs-email-follow-up.jpg", "cs-booking-link.jpg", "cs-reminder.jpg", "crm-follow-up.jpg"] },
    pgReports: { category: "Records & Weekly Reporting", resp: "I keep accurate records of leads, messages and results, and send a clear weekly update.", title: "Weekly progress reports & lead records on Google Docs and Notion", clients: ["EO Staff", "Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Owners had to keep asking what was done and what was working.", solution: "I sent a structured update on tasks completed, results, open items and next priorities, and kept every process written down in a Notion hub.", result: "I gave owners full transparency and one place to see progress against their targets.",
      tools: ["Google Docs", "Google Sheets", "Notion", "Gmail"], images: ["weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg"] },
    plushLibrary: { category: "Organization & Reporting", resp: "I maintain an organized digital library of photos, videos and graphics, and send brief weekly updates.", title: "Organized digital library & weekly updates on Google Drive and Notion", clients: ["Wellness Brand in Australia", "Landscaping Services in Australia"],
      challenge: "Photos, graphics and plans were scattered, and owners kept asking for updates.", solution: "I organized files in one library, documented the content plan in a Notion hub, and sent a brief weekly update on completed work, upcoming content and recommendations.", result: "I gave owners one place to find everything and no need to chase updates.",
      tools: ["Google Drive", "Notion", "Google Docs"], images: ["weekly-report.jpg", "notion-home.jpg", "notion-planning.jpg"] }
  },

  work: {
    results: { label: "Results", blurb: "Facebook Page, last 90 days (Wellness Brand in Australia).",
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
    reels: { label: "Reels I edit for you", blurb: "Before-and-after Reels with captions and music for Landscaping Services in Australia. Tap a phone to play.",
      items: [1, 2, 3].map(n => ({ src: "reel-" + n + ".mp4", poster: "reel-" + n + ".jpg", kind: "video" })) },
    feeds: { label: "Instagram content feed I create and plan for you", blurb: "A consistent feed builds trust, and people follow pages that look put together. I plan nine posts at a time around one colour palette, a mix of photos and text posts and a fixed layout, then preview each feed as a flat plan and inside the Instagram app, ready to schedule. Sample feeds, tap to enlarge.",
      items: [
        { src: "ig-feed-makeup.webp", phone: "ig-feed-makeup-phone.webp", grid: "ig-feed-makeup-grid.webp", title: "Makeup Brand Based in Los Angeles, CA", note: "Soft, feminine and shoppable", accent: "#8b2f4b", tint: "#fbeff2" },
        { src: "ig-feed-coffee.webp", phone: "ig-feed-coffee-phone.webp", grid: "ig-feed-coffee-grid.webp", title: "Coffee Shop Based in Melbourne, Australia", note: "Warm, cosy and café-fresh", accent: "#6b4a2f", tint: "#f6efe6" },
        { src: "ig-feed-travel.webp", phone: "ig-feed-travel-phone.webp", grid: "ig-feed-travel-grid.webp", title: "Traveler Based in Bali, Indonesia", note: "Warm, wanderlust and save-worthy", accent: "#1f5f80", tint: "#edf4f8" },
        { src: "ig-feed-clinic.webp", phone: "ig-feed-clinic-phone.webp", grid: "ig-feed-clinic-grid.webp", title: "Aesthetic Clinic Based in Beverly Hills, CA", note: "Calm, clean and premium", accent: "#3f5a4b", tint: "#eef3ee" }
      ] },
    brands: { label: "Brand identity design", cols: 2, blurb: "Logos, colour palettes, typography, stationery and mood boards pulled together on one sheet, so a brand looks consistent and professional on every platform. Mock-up brands, tap to enlarge.",
      items: [
        { src: "brand-board-plumbing.webp", title: "Plumbing Business Brand Identity", note: "Reliable, fast and trusted", accent: "#12304f", tint: "#edf4fa", chips: ["Logo suite", "Colour palette", "Typography", "Stationery"], board: true, scroll: true },
        { src: "brand-board-water.webp", title: "Water Refilling Station Brand Identity", note: "Pure, fresh and trusted", accent: "#0b5563", tint: "#eaf6f7", chips: ["Logo suite", "Colour palette", "Typography", "Stationery"], board: true, scroll: true }
      ] },
    seo: { label: "Social media SEO, keywords and hashtags", blurb: "Finding the words people actually search for, then placing them in bios, captions, alt text and hashtag sets, so posts are easier to discover on Instagram and Facebook. Tap to enlarge.",
      items: [
        { src: "seo-keywords.webp", title: "Keyword Research", note: "Keywords, intent and exactly where to use them", accent: "#2f7d6d", tint: "#eef5f1", chips: ["Keyword bank", "Search intent", "Priority"], scroll: true },
        { src: "seo-hashtags.webp", title: "Hashtag Sets", note: "Grouped by purpose and rotated every week", accent: "#2f7d6d", tint: "#eef5f1", chips: ["Niche", "Community", "Local", "Branded"], scroll: true }
      ] },
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
    websites: { label: "Websites", blurb: "Live client websites (Wellness Brand in Australia, Landscaping Services in Australia) and website concept designs.",
      items: [
        { src: "web-kerbingking.jpg", cap: "Landscaping Services in Australia (live)" }, { src: "web-loveandsound.jpg", cap: "Wellness Brand in Australia (live)" },
        { src: "web-realestate.jpg", cap: "Real estate website (concept)" }, { src: "web-realestate-2.jpg", cap: "Real estate website (concept)" },
        { src: "web-realestate-3.jpg", cap: "Real estate website (concept)" }, { src: "web-aesthetic.jpg", cap: "Aesthetic clinic (concept)" },
        { src: "web-tutoring.jpg", cap: "Tutoring (concept)" }, { src: "web-solar.jpg", cap: "Solar (concept)" }
      ] }
  }
};

/* Website projects, shown as cards with a "View" popup (same as the portfolio page). */
window.RESUME_BASE.webProjects = [
  { group: "Real Client Website", title: "Landscaping Services in Australia", desc: "A professional landscaping website that showcases services, builds trust and encourages quote requests with a clean, modern design.", btn: "View Live Site", url: "https://thekerbingking.com.au/", images: ["web-kerbingking.jpg", "web-kerbingking-2.jpg", "web-kerbingking-3.jpg", "web-kerbingking-5.jpg", "web-kerbingking-4.jpg", "web-kerbingking-6.jpg", "web-kerbingking-7.jpg", "web-kerbingking-8.jpg"] },
  { group: "Real Client Website", title: "Wellness Brand in Australia", desc: "A calming holistic wellness website that showcases natural therapy services and makes it easy for clients to explore and enquire.", btn: "View Live Site", url: "https://loveandsoundtherapies.com/the-reclamation-page", images: ["web-reclamation-1.jpg", "web-reclamation-2.jpg", "web-reclamation-3.jpg", "web-reclamation-4.jpg", "web-loveandsound.jpg", "web-loveandsound-2.jpg", "web-loveandsound-3.jpg", "web-loveandsound-4.jpg"] },
  { group: "Website Design Concept", title: "Aesthetic Clinic", desc: "A premium aesthetic clinic website concept with treatment filters, memberships and an online consultation booking form.", btn: "View Design Concept", url: "https://themariaoffice.com/concepts/aesthetic-clinic/", images: ["web-aesthetic.jpg", "web-aesthetic-2.jpg", "web-aesthetic-3.jpg", "web-aesthetic-4.jpg", "web-aesthetic-5.jpg"] },
  { group: "Website Design Concept", title: "Real Estate", desc: "A real estate website concept that showcases premium listings and connects buyers and sellers with an agent.", btn: "View Design Concept", url: "https://real-estate.yveriel-simbajon.workers.dev/", images: ["web-realestate-3.jpg", "web-realestate.jpg", "web-realestate-4.jpg", "web-realestate-2.jpg", "web-realestate-5.jpg", "web-realestate-6.jpg"] },
  { group: "Website Design Concept", title: "Tutoring Centre", desc: "A tutoring website concept that shows programs by year level, clear pricing and a two-step free assessment booking.", btn: "View Design Concept", url: "https://themariaoffice.com/concepts/tutoring/", images: ["web-tutoring.jpg", "web-tutoring-2.jpg", "web-tutoring-3.jpg", "web-tutoring-4.jpg", "web-tutoring-5.jpg"] },
  { group: "Website Design Concept", title: "Cleaning Services", desc: "A cleaning services website concept with an instant quote calculator, room-by-room checklist and online booking.", btn: "View Design Concept", url: "https://themariaoffice.com/concepts/cleaning/", images: ["web-cleaning.jpg", "web-cleaning-2.jpg", "web-cleaning-3.jpg", "web-cleaning-4.jpg", "web-cleaning-5.jpg"] }
];

/* Social media portfolio, same order and content as /portfolio/#social (used by the family-care-plan resume). */
(function(){
  const W = window.RESUME_BASE.work;
  W.socialDesigns = { label: "Graphic Design", blurb: "Social media posts, event posters, promos, videos and educational graphics designed to grab attention and build brand recognition.",
    items: W.designs.items.slice(3) };
  W.socialFeeds = { label: W.feeds.label, blurb: W.feeds.blurb, items: W.feeds.items.filter(it => !/Bali/.test(it.title)) };
  W.socialBrand = { label: "Brand Identity Design", blurb: "Logos, promotional materials and visual identity elements for a consistent, professional brand across digital platforms (Landscaping Services in Australia).",
    items: ["logo-kerbing-king-wordmark.jpg", "logo-kerbing-king.png", "logo-kerbing-king-alt.jpg", "logo-kerbing-king-icon.jpg"].map(f => ({ src: f })) };
  W.socialStrategy = { label: "Social Media Content Strategy via Notion", blurb: "Planning, scheduling and tracking Facebook & Instagram content for a wellness brand and a landscaping business.",
    items: ["smm-content-plan.jpg", "smm-calendar.jpg", "smm-posting-schedule.jpg", "smm-analytics.jpg"].map(f => ({ src: f })) };
  W.pageant = { label: "Miss Philippines Earth Mindanao-Water 2022", resp: "Experience with events, fashion, beauty or modelling is an advantage.", blurb: "I won this pageant title, so I know the modelling and pageant world from the inside: the runway, the photoshoots and what it feels like to be a contestant.",
    items: ["pageant-crown", "pageant-gown", "pageant-sash-closeup", "pageant-white-dress", "pageant-sash-dress"].map(f => ({ src: f + ".webp" })) };
  W.pageantJudge = { label: "Pageant judge", blurb: "I have also sat on the Board of Judges at local pageant coronation nights, so I understand what organisers and contestants are looking for.",
    items: ["pageant-judge-queen-abunda", "pageant-judge-grand-coronation", "pageant-judge-bae-lucena", "pageant-judge-certificate", "pageant-judge-medal"].map(f => ({ src: f + ".webp" })) };
  const S = window.RESUME_BASE.stats;
  S.reached = { value: 44, suffix: "K", label: "People reached", note: "unique viewers" };
  S.interactions = { value: 49, prefix: "+", suffix: "%", label: "Interactions", note: "1.1K in the last 28 days" };
})();
