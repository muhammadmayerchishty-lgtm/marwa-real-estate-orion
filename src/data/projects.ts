export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  location: string;
  highlights: string[];
  description: string;
  keyFacts: { label: string; value: string }[];
  sampleAmenities: string[];
  samplePaymentPlan: {
    milestone: string;
    percentage: string;
    amount: string;
  }[];
  legalNote: string;
  gradientCover: {
    from: string;
    via: string;
    to: string;
    patternType: 'rings' | 'grid' | 'angles';
  };
}

export interface SampleListing {
  id: string;
  title: string;
  project: 'Soul City Lahore' | 'Marwa Tower One' | 'Marwa Signature';
  type: 'Residential Plot' | 'Commercial Plot' | 'Shop' | 'Office';
  size: string;
  samplePrice: string;
  priceNumeric: number; // in Lacs for range filtering
  features: string[];
  location: string;
  paymentHighlight: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: "soul-city-lahore",
    title: "Soul City Lahore",
    tagline: "Residential and commercial plots on Jia Bagga Road near the Halloki Interchange (Ring Road), Lahore",
    category: "Residential and Commercial Plots",
    status: "Active Project (Sample)",
    location: "Jia Bagga Road near the Halloki Interchange (Ring Road), Lahore",
    highlights: [
      "Residential and commercial plots",
      "On Jia Bagga Road near the Halloki Interchange (Ring Road), Lahore",
      "Direct Ring Road connectivity with signal-free transit"
    ],
    description: "Soul City Lahore offers residential and commercial plots situated on Jia Bagga Road near the Halloki Interchange (Ring Road), Lahore. The master planning emphasizes modern urban infrastructure, wide road networks, and rapid access across Lahore's south-eastern artery. (All amenities, figures, and schedules below are sample data, to be confirmed by Marwa).",
    keyFacts: [
      { label: "Location", value: "Jia Bagga Road near Halloki Interchange (Ring Road), Lahore" },
      { label: "Category", value: "Residential & Commercial Plots" },
      { label: "Plot Types", value: "Residential and Commercial (Sample)" },
      { label: "Access Corridor", value: "Halloki Interchange / Ring Road Arterial" },
      { label: "Developer", value: "Marwa Real Estate & Developers" },
      { label: "Availability", value: "Open for Inquiry (Sample)" }
    ],
    sampleAmenities: [
      "Sample: 150-Foot Main Entrance Boulevard",
      "Sample: Underground Electrical & Utilities Ducting",
      "Sample: Gated Community with 24/7 Security Patrols",
      "Sample: Sector Parks & Green Belt Landscaping",
      "Sample: Central Jamia Mosque & Commercial Hub"
    ],
    samplePaymentPlan: [
      { milestone: "Booking Down Payment (Sample)", percentage: "20%", amount: "Sample PKR 7.6 Lacs" },
      { milestone: "12 Quarterly Installments (Sample)", percentage: "65%", amount: "Sample PKR 2.06 Lacs / quarter" },
      { milestone: "Balloting Confirmation (Sample)", percentage: "10%", amount: "Sample PKR 3.8 Lacs" },
      { milestone: "Possession Handover (Sample)", percentage: "5%", amount: "Sample PKR 1.9 Lacs" }
    ],
    legalNote: "Approval and documents: to be provided by Marwa",
    gradientCover: {
      from: "#1E1A14",
      via: "#2A2318",
      to: "#171717",
      patternType: "grid"
    }
  },
  {
    id: "marwa-tower-one",
    title: "Marwa Tower One",
    tagline: "Commercial tower with shops and offices, opposite Expo Center, Johar Town, Lahore",
    category: "Commercial Tower (Shops & Offices)",
    status: "20% Down Payment Option",
    location: "Opposite Expo Center, Johar Town, Lahore",
    highlights: [
      "Commercial tower with shops and offices",
      "Opposite Expo Center, Johar Town, Lahore",
      "20% down payment option available"
    ],
    description: "Marwa Tower One is a dedicated commercial tower offering retail shops and corporate offices positioned prominently opposite the Expo Center in Johar Town, Lahore. The development features an accessible 20% down payment option designed for commercial investors and businesses. (All amenities, floor numbers, and schedules below are sample data, to be confirmed by Marwa).",
    keyFacts: [
      { label: "Location", value: "Opposite Expo Center, Johar Town, Lahore" },
      { label: "Property Type", value: "Commercial Tower (Shops & Offices)" },
      { label: "Payment Term", value: "20% Down Payment Option" },
      { label: "Ground Floors", value: "High-Visibility Retail Outlets (Sample)" },
      { label: "Upper Floors", value: "Executive Corporate Suites (Sample)" },
      { label: "Parking", value: "Dedicated Multi-Basement Parking (Sample)" }
    ],
    sampleAmenities: [
      "Sample: High-Speed Passenger & Service Elevators",
      "Sample: 24/7 Power Redundancy via Dual Commercial Generators",
      "Sample: Modern Double-Glazed Glass Facade",
      "Sample: Fire Suppression & Emergency Evacuation Grid",
      "Sample: Dedicated Valet & Multi-Level Parking"
    ],
    samplePaymentPlan: [
      { milestone: "Initial Down Payment", percentage: "20%", amount: "20% Down Payment Option" },
      { milestone: "Construction Installments (Sample)", percentage: "60%", amount: "Sample Quarterly Milestones" },
      { milestone: "Structural Completion (Sample)", percentage: "10%", amount: "Sample On Grey Structure" },
      { milestone: "Possession & Fit-Out (Sample)", percentage: "10%", amount: "Sample On Handover" }
    ],
    legalNote: "Approval and documents: to be provided by Marwa",
    gradientCover: {
      from: "#221C14",
      via: "#2F2618",
      to: "#161616",
      patternType: "angles"
    }
  },
  {
    id: "marwa-signature",
    title: "Marwa Signature",
    tagline: "Premium project by Marwa · Details to be confirmed",
    category: "Premium Project",
    status: "Details to be confirmed",
    location: "Lahore (Details to be confirmed)",
    highlights: [
      "Premium project by Marwa",
      "Details to be confirmed",
      "Upcoming signature benchmark"
    ],
    description: "Marwa Signature represents an upcoming premium real estate project by Marwa Real Estate & Developers in Lahore. Official floor layouts, inventory specifications, and commercial details are to be confirmed directly with Marwa.",
    keyFacts: [
      { label: "Project Title", value: "Marwa Signature" },
      { label: "Status", value: "Details to be confirmed" },
      { label: "Developer", value: "Marwa Real Estate & Developers" },
      { label: "Location", value: "Lahore (Details to be confirmed)" }
    ],
    sampleAmenities: [
      "Sample: Signature Architecture & Bespoke Finishes",
      "Sample: Concierge & Security Desk",
      "Sample: Private Resident Lobby",
      "Sample: Smart Access Systems"
    ],
    samplePaymentPlan: [
      { milestone: "Pre-Launch Expression (Sample)", percentage: "Sample", amount: "Details to be confirmed" },
      { milestone: "Flexible Plan (Sample)", percentage: "Sample", amount: "Details to be confirmed" }
    ],
    legalNote: "Approval and documents: to be provided by Marwa",
    gradientCover: {
      from: "#1F1A15",
      via: "#27221A",
      to: "#141414",
      patternType: "rings"
    }
  }
];

export const sampleListings: SampleListing[] = [
  // Soul City Lahore
  {
    id: "scl-01",
    title: "5 Marla Residential Plot (Sample)",
    project: "Soul City Lahore",
    type: "Residential Plot",
    size: "5 Marla",
    samplePrice: "PKR 38 Lacs (Sample)",
    priceNumeric: 38,
    features: ["Sector C Proximity", "Sample Plot Allocation", "Halloki Link Access"],
    location: "Jia Bagga Road near Halloki Interchange, Lahore",
    paymentHighlight: "Sample Quarterly Installment Option"
  },
  {
    id: "scl-02",
    title: "10 Marla Residential Plot (Sample)",
    project: "Soul City Lahore",
    type: "Residential Plot",
    size: "10 Marla",
    samplePrice: "PKR 68 Lacs (Sample)",
    priceNumeric: 68,
    features: ["Near Park & Green Belt", "Sample Master Layout", "Ring Road Connectivity"],
    location: "Jia Bagga Road near Halloki Interchange, Lahore",
    paymentHighlight: "Sample 3-Year Schedule"
  },
  {
    id: "scl-03",
    title: "1 Kanal Executive Residential Plot (Sample)",
    project: "Soul City Lahore",
    type: "Residential Plot",
    size: "1 Kanal",
    samplePrice: "PKR 1.25 Crore (Sample)",
    priceNumeric: 125,
    features: ["Boulevard Facing", "Sample Luxury Sector", "Gated Security"],
    location: "Jia Bagga Road near Halloki Interchange, Lahore",
    paymentHighlight: "Sample Flexible Plan"
  },
  {
    id: "scl-04",
    title: "4 Marla Commercial Plot (Sample)",
    project: "Soul City Lahore",
    type: "Commercial Plot",
    size: "4 Marla",
    samplePrice: "PKR 1.10 Crore (Sample)",
    priceNumeric: 110,
    features: ["Commercial Broadway", "Sample Footfall Corridor", "Main Boulevard Front"],
    location: "Jia Bagga Road near Halloki Interchange, Lahore",
    paymentHighlight: "Sample Commercial Plan"
  },
  {
    id: "scl-05",
    title: "8 Marla Main Boulevard Commercial (Sample)",
    project: "Soul City Lahore",
    type: "Commercial Plot",
    size: "8 Marla",
    samplePrice: "PKR 2.20 Crore (Sample)",
    priceNumeric: 220,
    features: ["150-ft Road Frontage", "Sample Prime Plaza Plot", "Corner Allotment"],
    location: "Jia Bagga Road near Halloki Interchange, Lahore",
    paymentHighlight: "Sample Milestone Structure"
  },

  // Marwa Tower One
  {
    id: "mto-01",
    title: "Ground Floor Retail Shop (Sample)",
    project: "Marwa Tower One",
    type: "Shop",
    size: "180 Sq Ft",
    samplePrice: "PKR 55 Lacs (Sample)",
    priceNumeric: 55,
    features: ["Opposite Expo Center", "Double Glass Frontage", "20% Down Payment Option"],
    location: "Johar Town, Lahore",
    paymentHighlight: "20% Down Payment Option"
  },
  {
    id: "mto-02",
    title: "Mezzanine Commercial Shop (Sample)",
    project: "Marwa Tower One",
    type: "Shop",
    size: "350 Sq Ft",
    samplePrice: "PKR 72 Lacs (Sample)",
    priceNumeric: 72,
    features: ["Escalator Adjacent", "High Customer Visibility", "Johar Town Hub"],
    location: "Johar Town, Lahore",
    paymentHighlight: "20% Down Payment Option"
  },
  {
    id: "mto-03",
    title: "First Floor Brand Outlet (Sample)",
    project: "Marwa Tower One",
    type: "Shop",
    size: "280 Sq Ft",
    samplePrice: "PKR 62 Lacs (Sample)",
    priceNumeric: 62,
    features: ["Prime Retail Aisle", "Opposite Expo Center", "Power Backup"],
    location: "Johar Town, Lahore",
    paymentHighlight: "20% Down Payment Option"
  },
  {
    id: "mto-04",
    title: "Executive Corporate Office (Sample)",
    project: "Marwa Tower One",
    type: "Office",
    size: "550 Sq Ft",
    samplePrice: "PKR 85 Lacs (Sample)",
    priceNumeric: 85,
    features: ["Johar Town Skyline View", "Dedicated High-Speed Lifts", "20% Down Payment Option"],
    location: "Johar Town, Lahore",
    paymentHighlight: "20% Down Payment Option"
  },
  {
    id: "mto-05",
    title: "Corner Executive Office Suite (Sample)",
    project: "Marwa Tower One",
    type: "Office",
    size: "850 Sq Ft",
    samplePrice: "PKR 1.35 Crore (Sample)",
    priceNumeric: 135,
    features: ["Dual Corner Panoramic Glass", "Private Restroom Provision", "Basement Parking"],
    location: "Johar Town, Lahore",
    paymentHighlight: "20% Down Payment Option"
  },

  // Marwa Signature (Details to be confirmed)
  {
    id: "ms-01",
    title: "Signature Executive Suite (Sample)",
    project: "Marwa Signature",
    type: "Office",
    size: "700 Sq Ft (Sample)",
    samplePrice: "PKR 1.45 Crore (Sample)",
    priceNumeric: 145,
    features: ["Premium Concept", "Details to be confirmed", "Valet & Concierge"],
    location: "Lahore (Details to be confirmed)",
    paymentHighlight: "Sample Schedule"
  },
  {
    id: "ms-02",
    title: "Signature Penthouse Space (Sample)",
    project: "Marwa Signature",
    type: "Office",
    size: "1,200 Sq Ft (Sample)",
    samplePrice: "PKR 2.60 Crore (Sample)",
    priceNumeric: 260,
    features: ["Skyline Terrace", "Details to be confirmed", "Architectural Glass"],
    location: "Lahore (Details to be confirmed)",
    paymentHighlight: "Sample Schedule"
  }
];

export const whyMarwaCards = [
  {
    id: "trusted-developer",
    title: "Trusted Developer",
    subtitle: "Registered Standards",
    description: "Operating with verified developer registrations in Lahore, ensuring transparency, professional documentation, and client-first ethics."
  },
  {
    id: "prime-locations",
    title: "Prime Lahore Locations",
    subtitle: "High-Growth Corridors",
    description: "Secured along premier growth hubs including Jia Bagga Road by Halloki Interchange, Johar Town Expo Center, and DHA Phase 6."
  },
  {
    id: "flexible-payment",
    title: "Flexible Payment Options",
    subtitle: "Structured for Investors",
    description: "Accessible payment frameworks including the 20% down payment option on Marwa Tower One and flexible installment horizons."
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    subtitle: "Daily Consultation Desk",
    description: "Two executive offices in Lahore (Jail Road & DHA Phase 6) with direct phone and WhatsApp lines open daily until 8:00 PM."
  }
];

export const sampleCountUpMetrics = [
  { value: "3+", label: "Flagship Projects", note: "Sample" },
  { value: "2", label: "Executive Offices in Lahore", note: "Jail Road & DHA Phase 6" },
  { value: "20%", label: "Down Payment Option", note: "Marwa Tower One" },
  { value: "8 PM", label: "Consultation Desk Closes", note: "Daily (to be confirmed)" }
];
