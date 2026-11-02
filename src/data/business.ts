export interface OfficeLocation {
  type: 'Sales Office' | 'Head Office (Soul City)';
  address: string;
  landmark?: string;
  mapsUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Residential' | 'Commercial' | 'Mixed-Use';
  status: 'Booking Open' | 'Executive Launch' | 'Exclusive Pre-Booking' | 'Under Development';
  location: string;
  priceFrom: string;
  installmentPlan: string;
  image: string;
  features: string[];
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const businessData = {
  name: "Marwa Real Estate & Developers",
  tagline: "Real Estate and Developers · Registered",
  phone: "+92 312 7453245",
  whatsapp: "923127453245",
  email: "marwarealestatedevelopers@gmail.com",
  offices: {
    sales: {
      title: "Sales Office",
      address: "Office P 13, 2nd Floor, Lucky Center, Jail Road, Jinnah Town, Lahore 54000",
      city: "Lahore, Pakistan",
      googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Lucky+Center+Jail+Road+Jinnah+Town+Lahore+54000"
    },
    headOffice: {
      title: "Head Office (Soul City)",
      address: "Sector C 31 CCA, DHA Phase 6, Lahore",
      city: "Lahore, Pakistan",
      googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Sector+C+31+CCA+DHA+Phase+6+Lahore"
    }
  },
  hours: "Closes 8 pm (to be confirmed)",
  social: {
    facebook: "https://www.facebook.com/theindusassociates/",
    instagram: "https://www.instagram.com/marwasignature16/"
  },
  extraSalesLines: [
    { number: "+92 322 2254443", note: "Instagram Sales Line (to be confirmed)", whatsapp: "923222254443" },
    { number: "+92 307 6023256", note: "Instagram Sales Line (to be confirmed)", whatsapp: "923076023256" }
  ],
  footerNote: "Demo concept by ORION IT SOLUTIONS. Sample content, to be confirmed with Marwa."
};

export const featuredProjects: ProjectItem[] = [
  {
    id: "soul-city-lahore",
    title: "Soul City Lahore",
    tagline: "Master-planned residential & commercial expansion in Lahore's premier growth zone",
    category: "Residential",
    status: "Booking Open",
    location: "Sector C 31 CCA, DHA Phase 6 Corridor, Lahore",
    priceFrom: "PKR 38 Lacs",
    installmentPlan: "Easy 3-Year Flexible Quarterly Installments",
    image: "/images/soul-city.svg",
    features: [
      "5, 10 Marla & 1 Kanal Prime Plots",
      "Sector C Commercial Broadway (CCA)",
      "150-ft Wide Main Access Boulevard",
      "Underground Electrification & Gated Security",
      "Parks, Jamia Mosque & Executive Club"
    ],
    description: "Soul City Lahore represents modern urban living engineered with world-class town planning, direct ring road accessibility, and high capital appreciation potential.",
    specs: [
      { label: "Plot Sizes", value: "5 & 10 Marla, 1 Kanal" },
      { label: "Possession", value: "Phase 1 Rolling Handover" },
      { label: "Approval", value: "Registered & Verified Authority" },
      { label: "Commercial", value: "Sector C 31 CCA Broadway" }
    ]
  },
  {
    id: "marwa-tower-one",
    title: "Marwa Tower One",
    tagline: "Iconic corporate & retail vertical tower engineered for Lahore's business elite",
    category: "Commercial",
    status: "Executive Launch",
    location: "Jail Road Commercial Corridor, Lahore",
    priceFrom: "PKR 65 Lacs",
    installmentPlan: "2.5-Year Construction-Linked Plan",
    image: "/images/marwa-tower-one.svg",
    features: [
      "High-Visibility Ground Retail Showrooms",
      "Corporate Headquarters & Executive Office Suites",
      "Dedicated Multi-Level Basements & Valet",
      "High-Speed Smart Mitsubishi Elevators",
      "Integrated 24/7 Power Backup & Fire Safety"
    ],
    description: "A benchmark in commercial architecture offering premium business frontages and corporate suites with optimal footfall, high rental yield, and contemporary glass facade aesthetics.",
    specs: [
      { label: "Structure", value: "G + 14 Storey Commercial Tower" },
      { label: "Units", value: "Retail Outlets & Executive Offices" },
      { label: "Elevators", value: "4 High-Speed Passenger & Cargo" },
      { label: "Power", value: "100% Dual Generator Redundancy" }
    ]
  },
  {
    id: "marwa-signature",
    title: "Marwa Signature",
    tagline: "Architectural luxury suites & penthouses redefining bespoke urban living",
    category: "Mixed-Use",
    status: "Exclusive Pre-Booking",
    location: "DHA Phase 6 Luxury District, Lahore",
    priceFrom: "PKR 1.25 Crore",
    installmentPlan: "Customizable Milestone Plan with Down Payment",
    image: "/images/marwa-signature.svg",
    features: [
      "1, 2 & 3 Bedroom Signature Residences",
      "Exclusive Rooftop Penthouses with Skyline Views",
      "Smart Home Biometric & Lighting Automation",
      "Private Residents' Gym & Heated Infinity Deck",
      "Concierge & 3-Tier Security Screening"
    ],
    description: "Marwa Signature curates elite vertical living with bespoke Italian marble finishes, panoramic glass balconies overlooking Lahore's greenery, and signature privacy.",
    specs: [
      { label: "Typology", value: "1, 2, 3 Bed & Sky Penthouses" },
      { label: "Finishes", value: "Imported Porcelain & Italian Accents" },
      { label: "Amenities", value: "Rooftop Deck, Fitness Studio, Lounge" },
      { label: "Security", value: "Biometric Access & 24/7 Surveillance" }
    ]
  }
];

export const lahoreLocations = [
  {
    title: "DHA Phase 6 & Soul City Corridor",
    description: "Lahore's premier rapid capital growth sector with signal-free Ring Road access and modern infrastructure.",
    yield: "14% - 18% Projected Annual Growth",
    distance: "12 mins to Allama Iqbal International Airport"
  },
  {
    title: "Jail Road & Gulberg Prestige Hub",
    description: "The historic central business artery of Lahore housing financial institutions, top medical hubs, and premium commercial retail.",
    yield: "Prime Commercial Rental Yield 8% - 11%",
    distance: "Walking distance to Mall of Lahore & Main Boulevard"
  },
  {
    title: "Lahore Ring Road Connectivity",
    description: "Seamless transit linking DHA Phase 6, Gulberg, Lake City, and northern business centers within 15 to 25 minutes.",
    yield: "Strategic Transportation Advantage",
    distance: "Direct Interchange Access"
  }
];
