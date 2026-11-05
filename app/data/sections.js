
export const projectImages = [
  {
    id: 1,
    src: "/project-01.webp",
    title: "Modern Villa with Gym & Pool",
    category: "Exterior & 3D Visualisation",
  },
  {
    id: 2,
    src: "/project-02.webp",
    title: "Luxury Residence Patio & Poolside",
    category: "3D Modelling",
  },
  {
    id: 3,
    src: "/project-03.webp",
    title: "Hillside Modern Villa Complex",
    category: "Architectural Rendering",
  },
  {
    id: 4,
    src: "/project-04.webp",
    title: "Covered Outdoor Dining & Wood Facade",
    category: "Interior & Veranda",
  },
  {
    id: 5,
    src: "/project-05.webp",
    title: "Two-Story Contemporary Villa & Pool",
    category: "Exterior Design",
  },
  {
    id: 6,
    src: "/project-06.webp",
    title: "Terrace Barbecue & Palm Garden",
    category: "Lighting & Material Render",
  },
  {
    id: 7,
    src: "/project-07.webp",
    title: "Glass Balcony & Stone Elevation Detail",
    category: "Architectural Drafting & 3D",
  },
  {
    id: 8,
    src: "/project-08.webp",
    title: "Dusk Stone Residence & Mountain View",
    category: "Atmospheric Rendering",
  },
  {
    id: 9,
    src: "/project-09.webp",
    title: "Evening Poolside Pavilion & Lounge",
    category: "Lighting Study",
  },
  {
    id: 10,
    src: "/project-10.webp",
    title: "Natural Stone House & Infinity Pool",
    category: "3D Modelling & Exterior",
  },
];

export const serviceDetails = {
  drafting: {
    id: "drafting",
    title: "ARCHITECTURAL DRAFTING & TECHNICAL DOCUMENTATION",
    icon: "FileText",
    tagline:
      "Preparation of clear, detailed architectural drawings to support project development.",
    img: "/project-07.webp",
    deliverables: [
      "2D Technical Drafting",
      "Floor Plans & Elevations",
      "Sections & Construction Details",
      "Dimensioning & Project Documentation",
    ],
    workflow: [
      { id: "01", label: "Initial Sketches & Brief Review" },
      { id: "02", label: "CAD / Revit Drafting" },
      { id: "03", label: "Scale & Dimension Verification" },
      { id: "04", label: "Final Technical Package Delivery" },
    ],
    fullContent:
      "Preparation of clear, detailed architectural drawings to support project development, coordination, and presentation. We ensure precise technical execution across floor plans, elevations, sections, and detailed construction documentation so your team can focus on design decisions.",
  },

  modelling: {
    id: "modelling",
    title: "3D MODELLING AND EXTERIOR / INTERIOR RENDERING",
    icon: "Layers",
    tagline:
      "Exterior & interior views designed to showcase design, materials, and spatial relationships.",
    img: "/project-01.webp",
    deliverables: [
      "Architectural 3D Models",
      "Interior & Exterior High-End Renders",
      "Realistic & Detailed Environments",
      "Lighting Studies at Different Times of Day",
    ],
    workflow: [
      { id: "01", label: "3D Geometry Build" },
      { id: "02", label: "Custom Material & Texture Application" },
      { id: "03", label: "Atmospheric & Day/Night Lighting Setup" },
      {
        id: "04",
        label: "High-Resolution Render Output & Post-Production",
      },
    ],
    fullContent:
      "We craft immersive, highly accurate 3D models and renderings that clearly present spatial qualities, lighting scenarios, and material choices to your clients and stakeholders. Perfect for presentations, approvals, and marketing packages.",
  },

  digitalisation: {
    id: "digitalisation",
    title: "DIGITALISATION & IMAGE EDITING",
    icon: "Compass",
    tagline:
      "Conversion of hand drawings to CAD, image retouching, and presentation graphics.",
    img: "/project-04.webp",
    deliverables: [
      "Conversion of Hand Sketches to CAD/BIM",
      "Image Retouching & Post-Production",
      "Presentation Board Assembly",
      "Architectural Portfolio Formatting",
    ],
    workflow: [
      { id: "01", label: "Digitisation / Raster Scan Input" },
      { id: "02", label: "Vectorisation & Layer Setup" },
      { id: "03", label: "Graphic Post-Production" },
      { id: "04", label: "Format Export & Final Review" },
    ],
    fullContent:
      "Streamlined support for digitising paper archives, hand-drawn schematics, or legacy files into clean CAD formats. We also provide professional image editing and post-production for architectural graphics.",
  },

  support: {
    id: "support",
    title: "FLEXIBLE TEAM SUPPORT & PEAK WORKLOADS",
    icon: "UserCheck",
    tagline:
      "Reliable, remote collaboration without expanding your in-house headcount.",
    img: "/project-10.webp",
    deliverables: [
      "Extra Support for Peak Workloads",
      "Specific Task Execution with Clear Deliverables",
      "Agreed Scope & Budget",
      "Seamless Integration with Your Office Workflow",
    ],
    workflow: [
      { id: "01", label: "Briefing & Requirements Alignment" },
      { id: "02", label: "Capacity & Timeline Agreement" },
      { id: "03", label: "Agile Remote Collaboration" },
      { id: "04", label: "Quality Check & Handover" },
    ],
    fullContent:
      "Every practice experiences peak periods. We join your team as an external collaborator whenever you need us, taking care of technical tasks so you meet deadlines effortlessly without long-term commitments.",
  },
};

export const navigationLinks = [
  { id: "home", name: "HOME" },
  { id: "about", name: "ABOUT ME" },
  { id: "projects", name: "PORTFOLIO PROJECTS" },
  { id: "drafting", name: "DRAFTING" },
  { id: "modelling", name: "3D & VISUALISATION" },
  { id: "digitalisation", name: "DIGITALISATION" },
  { id: "support", name: "TEAM SUPPORT" },
  { id: "contact", name: "CONTACT" },
];

export const contactInfo = {
  name: "Elissandra Oliveira",
  email: "elissandra@uptovai.com",
  phone: "+351 914 052 658",
  location: "Porto, Portugal",
};
