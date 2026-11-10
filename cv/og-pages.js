/* Builds the short-link pages (cv/<folder>/index.html) with a social media preview:
   title = "<email subject> - <brand>", image + text = the matching portfolio section preview.
   Run after adding a job:  node cv/og-pages.js
   Add the new job to PREVIEW below (brand + section). Section is one of:
   admin, crm, operations, social, support, website. */
const fs = require("fs"), path = require("path");
global.window = {};
require("./jobs.js");
const JOBS = window.RESUME_JOBS;

const SECTIONS = {
  admin:      { img: "og-admin.jpg",      text: "Calendars, bookings, reports and workspaces that keep every day running smoothly." },
  crm:        { img: "og-crm.jpg",        text: "Workflows that follow up, confirm and remind, so nothing falls through the cracks." },
  operations: { img: "og-operations.jpg", text: "Research, payments and strategy behind a business that's ready to scale." },
  social:     { img: "og-social.jpg",     text: "Planning, design and analytics for a consistent, engaging social presence." },
  support:    { img: "og-support.jpg",    text: "Friendly, fast and clear communication that turns questions into bookings." },
  website:    { img: "og-website.jpg",    text: "Real client websites and design concepts built to look great and drive bookings." }
};

// folder: job key, brand shown after the subject (null = subject already names it), section preview
const PREVIEW = {
  "reva-26":                ["reva-26", "Real Estate Virtual Assistant", "social"],
  "jbe-ghl":                ["jbe-ghl", "Justin Bucknell Electrical", "crm"],
  "cdc-research":           ["cdc-research", "Chicago Defender Charities", "admin"],
  "plush-rose":             ["plush-rose", "Plush Rose", "social"],
  "flourish":               ["flourish-dr-lolu", "Flourish with Dr Lolu", "admin"],
  "cupcake-smm":            ["cupcake-smm", null, "social"],
  "family-care-plan":       ["family-care-plan", "Family Care Plan", "social"],
  "hids-engagement":        ["hids-engagement", "Hids Group", "social"],
  "photogenic-au":          ["photogenic-au", null, "operations"],
  "beauty-va":              ["beauty-va", "Beauty & Wellness", "admin"],
  "rg-gva":                 ["rg-gva", "Recruitment Garage", "admin"],
  "bdm-anz":                ["bdm-anz", "Engineering & Construction ANZ", "operations"],
  "samui-sales":            ["samui-sales", null, "support"],
  "admin-smm-sample":       ["admin-smm-sample", "Maria Simbajon", "admin"],
  "ghl-course-builder":     ["ghl-course-builder", null, "crm"],
  "miraco-creative":        ["miraco-creative", "Miraco Nutripharm", "social"],
  "design-va-interior":     ["design-va-interior", "Interior Design & Real Estate", "social"],
  "of-instagram":           ["of-instagram", "Optimum Formula", "social"],
  "tpp-builder-outreach":   ["tpp-builder-outreach", "Time Planning and Programming", "admin"],
  "rosko-creative":         ["rosko-creative", "The Rosko Group", "social"],
  "instinctive-shortform":  ["instinctive-shortform", "Instinctive Branding", "social"],
  "flown-beauty-editor":    ["flown-beauty-editor", "Flown Beauty", "social"],
  "proline-va":             ["proline-va", "ProLine Cleaning Solutions", "admin"],
  "dmwright-redesign":      ["dmwright-redesign", "DMWRIGHT Solutions", "website"],
  "bkg-lead-funnels":       ["bkg-lead-funnels", "BKG", "website"],
  "igc-vayva":              ["igc-vayva", "In Good Company by Vayva", "website"],
  "sweet-potato-smm":       ["sweet-potato-smm", null, "social"],
  "parfumcentral-designer": ["parfumcentral-designer", "ParfumCentral", "social"],
  "casperflow-va":          ["casperflow-va", "CasperFlow", "admin"],
  "funnelish-builder":      ["funnelish-builder", "Funnelish", "website"],
  "sealix-dm":              ["sealix-dm", null, "social"],
  "photo-studio-sg":        ["photo-studio-sg", "Photography & Videography Studio", "support"],
  "beauty-packaging":       ["beauty-packaging", "Beauty Brand", "social"],
  "premiumpages-wdd":       ["premiumpages-wdd", "PremiumPages.io", "website"],
  "homefield-email":        ["homefield-email", "Homefield Email", "admin"],
  "vanuatu-smm":            ["vanuatu-smm", "Vanuatu Team", "social"],
  "dynamic-energy-ops":     ["dynamic-energy-ops", "Dynamic Energy Solutions", "operations"],
  "patient-coordinator":    ["patient-coordinator", "Canada Clinic", "support"],
  "brine-fitness-editor":   ["brine-fitness-editor", "Brine Fitness", "social"],
  "food-lifestyle-editor":  ["food-lifestyle-editor", "Food & Lifestyle", "social"],
  "unseen-support":         ["unseen-support", "UNSEEN Studios", "support"],
  "hgbuilt-wunderbuild":    ["hgbuilt-wunderbuild", "HG Built", "operations"],
  "ea-home-services":       ["ea-home-services", "Home Services Company", "admin"],
  "email-designer-ecom":    ["email-designer-ecom", "Ecommerce Brands", "social"],
  "beauty-in-steel-smm":    ["beauty-in-steel-smm", null, "social"],
  "fashion-de-smm":         ["fashion-de-smm", null, "social"]
};
// amb-va keeps its own custom preview (Alanah's carousel + reel delivery page).

const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const SITE = "https://themariaoffice.com";

for (const [folder, [key, brand, section]] of Object.entries(PREVIEW)) {
  const job = JOBS[key];
  if (!job) { console.error("missing job: " + key); process.exitCode = 1; continue; }
  // Subjects signed "- Maria Simbajon" swap her name for the brand.
  const subject = job.emailSubject.replace(/\s*[-–]\s*Maria Simbajon\s*(\s[-–]\s*\d+)?$/, "");
  const title = brand ? subject + " - " + brand : subject;
  const s = SECTIONS[section];
  const img = SITE + "/images/" + s.img + "?v=1";
  const url = SITE + "/cv/" + folder + "/";
  // No <meta http-equiv="refresh">: Facebook/Messenger follow it and show the main resume preview instead.
  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow">
<title>${esc(title)} | Maria Simbajon</title>
<meta name="description" content="${esc(s.text)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Maria Simbajon">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(s.text)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(s.text)}">
<meta name="twitter:image" content="${img}">
<script>location.replace("../?job=${key}");</script></head>
<body><a href="../?job=${key}">Open Maria Simbajon's resume</a></body></html>
`;
  fs.writeFileSync(path.join(__dirname, folder, "index.html"), html);
  console.log(folder.padEnd(24) + section.padEnd(11) + title);
}
