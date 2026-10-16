/* One entry per job application. Open the page with  /cv/?job=<key>  (or /cv/<key>/ for a short link).
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
  }
};
