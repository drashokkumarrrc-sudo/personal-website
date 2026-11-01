// Everything shown on the site lives in this file. Edit the text here and push;
// no component changes are needed for routine updates.

export const site = {
  // The public address once published, e.g. "https://drashokkumar.github.io". Optional; used for search metadata.
  url: "",
  title: "Head, Regional Research Centre (Unani), Prayagraj",
  description:
    "Dr Ashok Kumar is Head & Research Officer In-Charge of the Regional Research Centre (Unani), Prayagraj (CCRUM, Ministry of AYUSH), and a Senior Scientist (Level IV, Pathology) with over two decades in clinical research, laboratory quality and public health.",
  updated: "November 2026",
};

export const profile = {
  honorific: "Dr",
  name: "Ashok Kumar",
  initials: "AK",
  badge: "Alternate Member, IMA Central Working Committee · 2025–26",
  tagline: "Head & Research Officer In-Charge · Scientist Level IV (Pathology)",
  organisation: "Regional Research Centre (Unani), Prayagraj",
  parentOrganisation:
    "Central Council for Research in Unani Medicine (CCRUM), Ministry of AYUSH, Government of India",
  blurb: [
    "I am a Senior Scientist (Level IV, Pathology) and have served under the Ministry of AYUSH since 2002, across clinical research, laboratory medicine and institutional administration. I head the Regional Research Centre (Unani), Prayagraj, leading its administration, research supervision, finance, digital governance and public health programmes in line with Government of India norms.",
    "My work spans research governance, regulatory coordination and large-scale healthcare delivery, from Unani clinical validation studies to health camps at four Kumbh Melas. I am also active in Indian Medical Association leadership at state and national level.",
  ],
  email: "drashokkumarrrc@gmail.com",
  officialEmail: "ashok.ccrum@ccrum.res.in",
  // Set to "" to keep the number off the public site.
  phone: "+91 94506 19024",
  location: "Prayagraj, Uttar Pradesh, India",
  // Save a square photo as public/profile.jpg and set this to "/profile.jpg". Empty shows the initials.
  avatar: "",
  // The PDF in public/ behind the "Download CV" buttons. Set to "" to hide them.
  cv: "/Dr_Ashok_Kumar_CV.pdf",
  interests: [
    "Clinical Research & Governance",
    "Laboratory Medicine & Quality (ISO 15189)",
    "Unani Medicine",
    "Public Health Programmes",
    "Institutional Leadership",
  ],
};

export const highlights = [
  { value: "20+", label: "years of service under the Ministry of AYUSH, since 2002" },
  { value: "9", label: "Unani clinical validation study areas, as PI / Supervisor" },
  { value: "4", label: "Kumbh Melas served with health camps" },
  { value: "11", label: "awards and appreciations since 2015" },
];

export const currentRole = {
  org: "Regional Research Centre (Unani), Prayagraj",
  parent: "Central Council for Research in Unani Medicine (CCRUM), Ministry of AYUSH",
  post: "Head & Research Officer In-Charge (Scientist Level IV)",
  period: "2002 – Present",
  // Initials shown in the logo square; set `logo` to e.g. "/logos/ccrum.png" to use an image instead.
  mark: "RRC",
  logo: "",
  duties: [
    {
      title: "Administration & finance",
      text: "Oversees overall management of the Centre, ensuring operational efficiency and compliance with institutional standards. Monitors budgets and revised estimates, and manages land and lease matters for optimal use of resources. Prepares monthly, half-yearly and annual reports; Reporting Officer for staff ACRs; member of statutory committees.",
    },
    {
      title: "Clinical services, pharmacy & laboratories",
      text: "Supervises the OPD, geriatric clinic, Mobile Clinical Research Programme, school health programme, pharmacy and laboratories, ensuring quality patient care and programme efficiency. Ensures compliance, quality control and efficiency in pharmaceutical and laboratory operations.",
    },
    {
      title: "Digital governance",
      text: "Implemented GeM, e-Office, PFMS and AHMIS, modernising administrative processes and streamlining operations.",
    },
    {
      title: "Legal & government liaison",
      text: "Nodal Officer, Ministry of AYUSH, for matters before the Allahabad High Court and Central Administrative Tribunal (CAT), Prayagraj, strengthening institutional coordination and ensuring AYUSH policies are implemented within judicial and administrative frameworks.",
    },
  ],
};

export const earlierRoles = [
  { role: "Medical Officer", org: "Indian Red Cross Society", place: "New Delhi", period: "2001", mark: "IRCS" },
  { role: "Senior Resident", org: "ESI Main Hospital, Basai Darapur", place: "New Delhi", period: "1998 – 2001", mark: "ESI" },
  { role: "Junior Resident", org: "All India Institute of Medical Sciences (AIIMS)", place: "New Delhi", period: "1997", mark: "AIIMS" },
];

export const research = {
  role: "Principal Investigator / Supervisor",
  programme: "Unani Pharmacopoeial Clinical Validation Studies",
  summary: "Advancing the evidence-based application of Unani medicine through pharmacopoeial clinical validation studies.",
  studies: [
    "Insomnia",
    "Piles",
    "Rheumatoid arthritis",
    "Anaemia",
    "Gout",
    "Bronchial asthma",
    "Nephrolithiasis",
    "Common cold",
    "Wet cupping (Hijama)",
  ],
};

export const publications: { year: string; text: string; venue: string; note?: string }[] = [
  { year: "2019", text: "Published research in", venue: "The Tabeeb" },
  { year: "2017–18", text: "Editor,", venue: "JAMS", note: "Journal of Uttar Pradesh Indian Medical Association" },
];

export type OutreachIcon = "crowd" | "shield" | "megaphone" | "stethoscope" | "school";

export const outreach: { title: string; icon: OutreachIcon; text: string; tags?: string[]; featured?: boolean }[] = [
  {
    title: "Kumbh and Magh Mela health camps",
    icon: "crowd",
    text: "Delivered large-scale preventive healthcare and essential medical services through health and exhibition camps, raising health awareness among millions of pilgrims.",
    tags: ["Ardha Kumbh 2007", "Maha Kumbh 2013", "Ardha Kumbh 2019", "Maha Kumbh 2025", "Magh Mela"],
    featured: true,
  },
  {
    title: "COVID-19 response",
    icon: "shield",
    text: "As a member of Arogya Bharati, and with the District Magistrate, Varanasi, facilitated distribution of AYUSH-64 and Kabasura Kudineer across Kashi Prant, including Varanasi, the Prime Minister’s constituency, building public trust in AYUSH systems. Also contributed to the pandemic response with the Allahabad Medical Association, Prayagraj.",
  },
  {
    title: "National campaigns",
    icon: "megaphone",
    text: "Organised and promoted national campaigns, including the 7th–10th editions of the International Day of Yoga, encouraging wellness, nutrition, cleanliness and ethical practice.",
    tags: ["International Day of Yoga", "Poshan Maah", "Swachhta Abhiyan", "Vigilance Awareness Week"],
  },
  {
    title: "TB elimination",
    icon: "stethoscope",
    text: "Supported the national campaign through awareness, screening and preventive interventions.",
  },
  {
    title: "Community and school health camps",
    icon: "school",
    text: "Extended preventive healthcare and wellness education to grassroots communities and schools.",
  },
];

export const competencies = [
  "Clinical Research & Governance",
  "Laboratory Quality Systems (ISO 15189, NABL/NABH)",
  "Public Health Programme Management",
  "Institutional Administration",
  "Scientific Leadership",
  "Budgeting & Financial Oversight",
  "Government & Judicial Liaison",
  "Legal & Administrative Coordination",
  "Digital Governance (GeM, PFMS, e-Office, AHMIS)",
];

export const certifications: { title: string; place?: string; date: string }[] = [
  { title: "NABH/NABL Certification of Medical Laboratory Programme", place: "Prayagraj", date: "May 2016" },
  { title: "Quality Management Systems Implementation in Medical/Research Laboratories", date: "November 2015" },
  {
    title: "Quality Management Systems and Internal Audit in Medical Laboratories (ISO 15189:2012)",
    date: "August 2015",
  },
];

export const capacityBuilding = [
  "Organised training programmes at RRC (Unani), Prayagraj for Unani drug regulators, industry personnel, laboratory staff, academicians and other stakeholders.",
  "Organising Member, NABL & NABH programmes, Prayagraj and Kolkata (2022).",
  "Organised National Seminar on Role of Unani Medicine in Lifestyle Disorders, Prayagraj.",
  "Organised National Seminar on Role of Unani Medicine in Rural Health, Prayagraj (June 2010).",
  "Conducted training workshops, capacity-building programmes and IMA CGP sessions.",
  "Regular participant in national and international IMA conferences since 2011.",
];

export const memberships: { role: string; org: string; period?: string; note?: string }[] = [
  { role: "Alternate Member, Central Working Committee", org: "Indian Medical Association", period: "2025–26" },
  { role: "Member, State Working Committee", org: "IMA Uttar Pradesh", period: "Since 2015" },
  { role: "Joint Secretary", org: "Allahabad Medical Association", period: "2018–19" },
  { role: "Joint Secretary, Zone IV", org: "IMA Uttar Pradesh State", period: "2017–18" },
  {
    role: "Member",
    org: "Arogya Bharati",
    note: "Representing the Ministry of AYUSH in promoting holistic health awareness and traditional medical practice.",
  },
];

export const awards: { title: string; from?: string; year?: string }[] = [
  {
    title: "Rajbhasha Award",
    from: "Nagar Rajbhasha Karyanvayan Samiti (NARAKAS), Ministry of Home Affairs",
    year: "2023–24",
  },
  { title: "IMA National President’s Appreciation Award", year: "2019, 2022" },
  { title: "Kamlesh Aggarwal Memorial Best Souvenir Award", from: "Ayodhya", year: "March 2022" },
  {
    title: "President’s Appreciation Award (Individual Member)",
    from: "IMA UP State Branch",
    year: "2015–16, 2017–18, 2020–21, 2021–22",
  },
  { title: "IMA President’s Appreciation Award", from: "As Joint Secretary, Zone IV", year: "2018" },
  { title: "IMA CGP Appreciation Award", year: "2016" },
  { title: "COVID Warrior Award", from: "Allahabad Medical Association, Prayagraj" },
];
