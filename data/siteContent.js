export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Export Markets", href: "/exports" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" }
];

export const heroContent = {
  eyebrow: "Welcome To Astro",
  titleTop: "Extracting",
  titleAccent: "Treasures",
  titleBottom: "From The Earth",
  copy:
    "Astro Mining and Industrial Company is a rising Egyptian mining company working in the field of exploration, treatment and upgrading of high-quality mining ores for local and international markets.",
  primaryCta: { label: "Explore Products", href: "/products" },
  secondaryCta: { label: "Get a Quote", href: "/contact" }
};

export const features = [
  {
    title: "High Quality Minerals",
    copy: "Premium industrial raw materials prepared to meet export and production standards.",
    icon: "gem"
  },
  {
    title: "Advanced Technology",
    copy: "Efficient production lines supported by German technology and precise treatment processes.",
    icon: "cog"
  },
  {
    title: "Quality Control",
    copy: "Laboratory-backed inspection and testing across strategic production stages.",
    icon: "flask"
  },
  {
    title: "Global Reach",
    copy: "Supplying Egypt and exporting to partners across Africa, the Gulf, and Asia.",
    icon: "globe"
  }
];

export const aboutContent = {
  eyebrow: "About Us",
  title: "Egyptian mining expertise built around quality minerals",
  copy:
    "Astro Mining and Industrial is a dynamic and forward-thinking Egyptian mining company dedicated to the exploration, treatment, and upgrading of high-quality mining ores.",
  overview:
    "Our focus is on providing superior products and services in the extraction and processing of essential minerals including feldspar, kaolin, glass sand, iron oxides, calcium carbonate, dolomite, and gypsum.",
  story:
    "Extracting treasures from the earth is our slogan. It is a direct reminder that beneath the surface lies a valuable resource base that supports modern manufacturing, construction, and industrial growth.",
  minerals: [
    "Feldspar",
    "Kaolin",
    "Glass Sand",
    "Iron Oxides",
    "Calcium Carbonate",
    "Dolomite",
    "Gypsum"
  ],
  highlights: [
    "Exploration, treatment, and upgrading handled within one industrial workflow",
    "Superior mineral purity prepared for local and export-focused supply",
    "A growing Egyptian company focused on dependable service and product quality"
  ],
  visuals: [
    {
      src: "/assets/images/company/quarry-excavator.jpeg",
      alt: "Excavator operating inside an Astro quarry"
    },
    {
      src: "/assets/images/company/quarry-loader.png",
      alt: "Loader moving white mineral stone at an Astro quarry"
    },
    {
      src: "/assets/images/company/site-photo-5.jpeg",
      alt: "Astro Mining industrial site operations"
    },
    {
      src: "/assets/images/company/site-photo-6.jpeg",
      alt: "Astro Mining site overview"
    }
  ],
  factCards: [
    {
      value: "7+",
      label: "Core mineral categories"
    },
    {
      value: "Egypt",
      label: "Operations rooted in high-value quarry resources"
    }
  ]
};

export const services = [
  {
    title: "Exploration",
    copy: "Comprehensive geological surveys and assessments to identify and evaluate mineral deposits.",
    icon: "layers",
    image: { src: "/assets/images/company/site-photo-1.jpeg", alt: "Astro quarry exploration site" }
  },
  {
    title: "Treatment",
    copy: "State-of-the-art processing techniques to treat and refine minerals, ensuring high purity and quality.",
    icon: "flask",
    image: { src: "/assets/images/company/site-photo-2.jpeg", alt: "Mineral treatment and processing facility" }
  },
  {
    title: "Upgrading",
    copy: "Advanced methods to enhance the value of raw materials and make them suitable for various industrial applications.",
    icon: "growth",
    image: { src: "/assets/images/company/site-photo-3.jpeg", alt: "Mineral upgrading operations" }
  },
  {
    title: "Supply Raw Materials",
    copy: "Providing high-quality raw materials from mines and quarries while ensuring products stand out through their exceptional quality.",
    icon: "gem",
    image: { src: "/assets/images/company/site-photo-4.jpeg", alt: "Raw mineral supply and dispatch" }
  }
];

export const servicesContent = {
  eyebrow: "Our Services",
  title: "From quarry discovery to refined industrial supply",
  copy:
    "Astro supports clients across the full mineral value chain with practical field experience, treatment precision, and dependable raw material supply.",
  visual: {
    src: "/assets/images/company/partnership-handshake.jpeg",
    alt: "Astro partnership and industrial supply handshake"
  }
};

export const companyStoryContent = {
  eyebrow: "About Us & Services",
  title: "One integrated story from the quarry to industrial supply",
  copy:
    "Scroll through Astro's journey to see how our company profile and service capabilities move together from exploration into export-ready mineral delivery.",
  cta: {
    label: "Explore Products",
    href: "/products"
  },
  steps: [
    {
      id: "company-overview",
      label: "01 / About Astro",
      title: "A forward-thinking Egyptian mining company",
      copy:
        "Astro Mining and Industrial is a dynamic and forward-thinking Egyptian mining company dedicated to the exploration, treatment, and upgrading of high-quality mining ores.",
      detail:
        "Our focus is on providing superior products and services in the extraction and processing of essential minerals for local and international markets.",
      bullets: [
        "Operations built around dependable mineral quality and industrial relevance.",
        "Integrated workflow spanning exploration, treatment, and upgrading."
      ],
      chips: ["Egyptian Mining", "Industrial Minerals", "Export Supply"],
      image: {
        src: "/assets/images/company/quarry-excavator.jpeg",
        alt: "Excavator operating inside an Astro quarry"
      }
    },
    {
      id: "mineral-focus",
      label: "02 / Mineral Focus",
      title: "Essential minerals prepared for industrial demand",
      copy:
        "Astro extracts and processes key industrial minerals including feldspar, kaolin, glass sand, iron oxides, calcium carbonate, dolomite, and gypsum.",
      detail:
        "Extracting treasures from the earth is our slogan because beneath the surface lies a resource base that supports modern manufacturing, construction, and industrial growth.",
      bullets: [
        "Superior mineral purity prepared for ceramic, glass, paint, paper, and chemical uses.",
        "A focused portfolio aligned with both local production and export channels."
      ],
      chips: ["Feldspar", "Kaolin", "Glass Sand", "Iron Oxides", "Calcium Carbonate", "Dolomite", "Gypsum"],
      image: {
        src: "/assets/images/company/quarry-loader.png",
        alt: "Loader moving white mineral stone at an Astro quarry"
      }
    },
    {
      id: "exploration-treatment",
      label: "03 / Exploration & Treatment",
      title: "Exploration and treatment under one workflow",
      copy:
        "Comprehensive geological surveys and assessments help identify and evaluate deposits, while state-of-the-art treatment processes refine minerals toward high purity and quality.",
      detail:
        "Astro supports clients with practical field experience and production discipline rather than a generic trading-only model.",
      bullets: [
        "Exploration: geological surveys and mineral deposit evaluation.",
        "Treatment: modern refining methods that improve consistency and purity."
      ],
      chips: ["Exploration", "Geological Survey", "Treatment", "Quality"],
      image: {
        src: "/assets/images/company/site-photo-5.jpeg",
        alt: "Astro exploration work at a quarry site"
      }
    },
    {
      id: "upgrading-supply",
      label: "04 / Upgrading & Supply",
      title: "Upgrading minerals into export-ready supply",
      copy:
        "Advanced upgrading methods increase the value of raw materials and prepare them for multiple industrial applications, while reliable supply keeps Astro competitive across markets.",
      detail:
        "Providing high-quality raw materials from mines and quarries ensures Astro products stand out because of their exceptional quality and readiness for industrial use.",
      bullets: [
        "Upgrading raw materials into stronger industrial inputs.",
        "Supplying high-quality minerals with practical export and service focus."
      ],
      chips: ["Upgrading", "Raw Material Supply", "Export Ready"],
      image: {
        src: "/assets/images/company/site-photo-6.jpeg",
        alt: "Astro mineral supply and dispatch operations"
      }
    }
  ]
};

export const products = [
  {
    name: "Silica Sand",
    slug: "silica-sand",
    image: "/assets/images/products/silica-sand.png",
    capacity: "30,000 tons monthly",
    uses: "Glass, foundries, and filtration applications.",
    specs: ["SiO2 > 99.7%", "Fe2O3 < 0.010-0.015%"],
    tone: "sand"
  },
  {
    name: "Gypsum",
    slug: "gypsum",
    image: "/assets/images/products/gypsum.png",
    capacity: "30,000 tons monthly",
    uses: "Construction, cement, and industrial processing.",
    specs: ["SO3 43.50 - 46.00", "Purity up to 97.5%"],
    tone: "mist"
  },
  {
    name: "Kaolin",
    slug: "kaolin",
    image: "/assets/images/products/kaolin.png",
    capacity: "5,000 tons monthly",
    uses: "Ceramics, paints, paper, and chemicals.",
    specs: ["Al2O3 ranges 26-38%", "Fe2O3 from 0.2-1.5%"],
    tone: "chalk"
  },
  {
    name: "Dolomite",
    slug: "dolomite",
    image: "/assets/images/products/dolomite.png",
    capacity: "10,000 tons monthly",
    uses: "Glass, refractories, and metallurgical use.",
    specs: ["MgO 20% min", "CaCO3 32% min"],
    tone: "stone"
  },
  {
    name: "Iron Oxides",
    slug: "iron-oxides",
    image: "/assets/images/products/iron-oxides.png",
    capacity: "5,000 tons monthly",
    uses: "Pigments, ceramics, and industrial manufacturing.",
    specs: ["Standard grade: Fe2O3 55–65%", "Premium grade: Fe2O3 75–80%"],
    tone: "rust"
  },
  {
    name: "Feldspar",
    slug: "feldspar",
    image: "/assets/images/products/feldspar.png",
    capacity: "5,000 tons monthly",
    uses: "Ceramics, tiles, and glass manufacturing.",
    specs: ["K2O from 5.5-11%+", "Iron oxides below 1%"],
    tone: "dune"
  },
  {
    name: "Calcium Carbonate",
    slug: "calcium-carbonate",
    image: "/assets/images/products/calcium-carbonate.png",
    capacity: "15,000 tons monthly",
    uses: "Paints, plastics, paper, and filler applications.",
    specs: ["CaCO3 > 99%", "Whiteness > 97%"],
    tone: "white"
  },
  {
    name: "Limestone",
    slug: "limestone",
    image: "/assets/images/products/limestone.png",
    capacity: "20,000 tons monthly",
    uses: "Construction, cement, and chemical industries.",
    specs: ["CaCO3 > 95%", "Low impurity content"],
    tone: "slate"
  },
  {
    name: "Talc",
    slug: "talc",
    image: "/assets/images/products/talc.png",
    capacity: "3,000 tons monthly",
    uses: "Plastics, paints, paper, ceramics, and cosmetics.",
    specs: ["Whiteness > 92%", "MgO > 30%"],
    tone: "pearl"
  }
];

export const previewIndustries = [
  {
    name: "Glass & Ceramics",
    icon: "flask",
    description: "High-purity silica sand, feldspar, and dolomite are the backbone of flat glass, container glass, and ceramic tile production — Astro supplies each to specification.",
    minerals: ["Silica Sand", "Feldspar", "Dolomite", "Kaolin"]
  },
  {
    name: "Construction & Concrete",
    icon: "building",
    description: "Gypsum, limestone, and calcium carbonate are essential inputs for cement, plaster, concrete mixes, and a wide range of structural building materials.",
    minerals: ["Gypsum", "Limestone", "Calcium Carbonate"]
  },
  {
    name: "Paints & Coatings",
    icon: "brush",
    description: "Calcium carbonate, kaolin, and talc serve as extenders and functional fillers that improve coverage, opacity, and durability in both water-based and solvent-based coatings.",
    minerals: ["Calcium Carbonate", "Kaolin", "Talc"]
  },
  {
    name: "Plastics & Rubber",
    icon: "flask",
    description: "Ultra-fine calcium carbonate and talc act as cost-effective reinforcing fillers that improve stiffness, surface finish, and dimensional stability in plastic compounds.",
    minerals: ["Calcium Carbonate", "Talc"]
  },
  {
    name: "Oil & Gas",
    icon: "flask",
    description: "Calcium carbonate and limestone are used in drilling fluid formulations and wellbore treatment, supporting safe and efficient extraction operations.",
    minerals: ["Calcium Carbonate", "Limestone"]
  },
  {
    name: "Agriculture",
    icon: "sprout",
    description: "Agricultural gypsum and ground limestone are applied to correct soil acidity, improve soil structure, and replenish essential calcium and sulphur nutrients.",
    minerals: ["Limestone", "Gypsum"]
  },
  {
    name: "Chemicals",
    icon: "flask",
    description: "Precipitated calcium carbonate, kaolin, and iron oxides are critical raw inputs for chemical synthesis, pigment production, and industrial processing.",
    minerals: ["Calcium Carbonate", "Kaolin", "Iron Oxides"]
  },
  {
    name: "Paper & Packaging",
    icon: "file",
    description: "Finely ground calcium carbonate and kaolin are used as coating pigments and filler agents to improve brightness, smoothness, and printability of paper and board.",
    minerals: ["Calcium Carbonate", "Kaolin"]
  }
];

export const industries = [
  "Contracting and drilling",
  "Refractories and ceramics industry",
  "Chemical industry",
  "Oil and gas companies",
  "Paints industry",
  "Paper industry",
  "Glass industry",
  "Concrete industry",
  "Iron and steel industry",
  "Plastic industry",
  "Rubber industry",
  "Wastewater technology and treatment"
];

export const stats = [
  { label: "Production Lines", value: "10+", icon: "factory" },
  { label: "Countries Served", value: "20+", icon: "globe" },
  { label: "In-House Quality Control", value: "100%", icon: "flask" },
  { label: "On-Time Delivery Focus", value: "Always", icon: "clock" }
];

export const qualityHighlights = [
  "Rigorous laboratory quality control is carried out at strategic stages of each operation.",
  "The quality system is designed to detect errors early and protect the performance of every batch.",
  "Astro combines high-quality raw materials with multiple efficient production lines using German technology."
];

export const partners = [
  {
    name: "Duravit",
    logo: "/assets/images/partners/duravit.png",
    alt: "Duravit logo"
  },
  {
    name: "Kandil Glass",
    logo: "/assets/images/partners/kandil.png",
    alt: "Kandil logo"
  },
  {
    name: "Pasabahce",
    logo: "/assets/images/partners/pasabahce.png",
    alt: "Pasabahce logo"
  },
  {
    name: "Sphinx Glass",
    logo: "/assets/images/partners/sphinx-glass.png",
    alt: "Sphinx Glass logo"
  },
  {
    name: "Crystal Glass",
    logo: "/assets/images/partners/crystal-glass.png",
    alt: "Crystal Glass logo"
  },
  {
    name: "Mega Glass",
    logo: "/assets/images/partners/mega-glass.png",
    alt: "Mega Glass logo"
  },
  {
    name: "Cedar",
    logo: "/assets/images/partners/cedar.jpeg",
    alt: "Cedar logo"
  },
  {
    name: "Saint-Gobain",
    logo: "/assets/images/partners/saint-gobain.jpeg",
    alt: "Saint-Gobain logo"
  },
  {
    name: "Beam",
    logo: "/assets/images/partners/beam.jpeg",
    alt: "Beam logo"
  },
  {
    name: "Sisecam",
    logo: "/assets/images/partners/sisecam.jpeg",
    alt: "Sisecam logo"
  },
  {
    name: "Galaxy",
    logo: "/assets/images/partners/galaxy.png",
    alt: "Galaxy logo"
  }
];

export const globalReach = [
  "Gulf countries",
  "South Africa",
  "India",
  "Bangladesh",
  "Libya",
  "Turkey",
  "Morocco",
  "Tunisia",
  "Algeria"
];

export const mapPins = [
  {
    country: "Gulf countries",
    project: "GCC Silica Supply",
    latitude: 24.7,
    longitude: 47.8,
    flag: "/assets/images/flags/gulf-region.svg",
    flagAlt: "Gulf region flags"
  },
  {
    country: "South Africa",
    project: "Ceramics Grade Minerals",
    latitude: -29.0,
    longitude: 24.0,
    flag: "/assets/images/flags/south-africa.svg",
    flagAlt: "South Africa flag"
  },
  {
    country: "India",
    project: "Feldspar Export Hub",
    latitude: 21.1,
    longitude: 78.0,
    flag: "/assets/images/flags/india.svg",
    flagAlt: "India flag"
  },
  {
    country: "Bangladesh",
    project: "Kaolin Processing Route",
    latitude: 23.7,
    longitude: 90.4,
    flag: "/assets/images/flags/bangladesh.svg",
    flagAlt: "Bangladesh flag"
  },
  {
    country: "Libya",
    project: "Industrial Sand Route",
    latitude: 26.3,
    longitude: 17.2,
    flag: "/assets/images/flags/libya.svg",
    flagAlt: "Libya flag"
  },
  {
    country: "Turkey",
    project: "Dolomite Distribution",
    latitude: 39.0,
    longitude: 35.0,
    flag: "/assets/images/flags/turkey.svg",
    flagAlt: "Turkey flag"
  },
  {
    country: "Morocco",
    project: "North Africa Minerals",
    latitude: 31.8,
    longitude: -7.1,
    flag: "/assets/images/flags/morocco.svg",
    flagAlt: "Morocco flag"
  },
  {
    country: "Tunisia",
    project: "Carbonate Export Line",
    latitude: 34.0,
    longitude: 9.0,
    flag: "/assets/images/flags/tunisia.svg",
    flagAlt: "Tunisia flag"
  },
  {
    country: "Algeria",
    project: "Bulk Minerals Channel",
    latitude: 28.0,
    longitude: 2.6,
    flag: "/assets/images/flags/algeria.svg",
    flagAlt: "Algeria flag"
  }
];

export const textOnlyPartners = [];

export const contactDetails = {
  address: "71 Abdel Hamid Badawi, Sheraton, Heliopolis, Cairo, Egypt",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Astro+Mining+and+Industrial,+71+Abdel+Hamid+Badawi,+Sheraton,+Heliopolis,+Cairo,+Egypt",
  telephones: ["0222667748", "0222667726", "01080040344"],
  whatsapp: "+20 108 004 0388",
  whatsappUrl: "https://wa.me/201080040388",
  emails: ["info@astromining-industrial.com", "sales@astromining-industrial.com"],
  website: "www.astromining-industrial.com",
  social: {
    linkedin: "https://www.linkedin.com/company/astro-mining-and-industrial-company",
    facebook: "https://www.facebook.com/share/1AXm2QHTaz/",
    instagram: "https://www.instagram.com/"
  }
};
