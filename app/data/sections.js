export const projectImages = [
  { id: 1, slug: "casa-hu", src: "/projects/casa-hu/cover.webp", title: "House Extension", category: "Architecture · 3D", description: "Contemporary residential architecture with swimming pool, outdoor living areas and integrated gym.", images: ["/projects/casa-hu/image-01.webp", "/projects/casa-hu/image-02.webp", "/projects/casa-hu/image-03.webp"], video: "/projects/casa-hu/video.mp4" },
  { id: 2, slug: "luxury-residence-patio", src: "/projects/luxury-residence-patio/cover.webp", title: "Multi-Family Residence", category: "Architecture · 3D", description: "Contemporary single-storey residence with landscaped gardens, covered parking and outdoor dining areas.", images: ["/projects/luxury-residence-patio/cover.webp", "/projects/luxury-residence-patio/image-01.webp", "/projects/luxury-residence-patio/image-02.webp"], video: "/projects/luxury-residence-patio/video.mp4" },
  { id: 3, slug: "hillside-villa-complex", src: "/projects/hillside-villa-complex/cover.webp", title: "House with pool & outdoor living", category: "Architecture · 3D", description: "Contemporary single-storey residence with a swimming pool, timber sun deck, covered outdoor dining and landscaped garden.", images: ["/projects/hillside-villa-complex/cover.webp", "/projects/hillside-villa-complex/image-01.webp", "/projects/hillside-villa-complex/image-02.webp"], video: "/projects/hillside-villa-complex/video.mp4" },
  { id: 4, slug: "covered-outdoor-dining", src: "/projects/covered-outdoor-dining/cover.webp", title: "Single Residence", category: "Architecture · 3D", description: "Contemporary outdoor dining space integrated with a warm timber facade and landscaped exterior setting.", images: ["/projects/covered-outdoor-dining/cover.webp", "/projects/covered-outdoor-dining/image-01.webp", "/projects/covered-outdoor-dining/image-02.webp"], video: "/projects/covered-outdoor-dining/video.mp4" },
  { id: 5, slug: "two-storey-contemporary-villa", src: "/projects/two-storey-contemporary-villa/cover.webp", title: "Two-Storey Contemporary House", category: "Architecture · 3D", description: "Contemporary two-storey residence with a white rendered facade, terracotta roof tiles, landscaped garden and enclosed front courtyard.", images: ["/projects/two-storey-contemporary-villa/cover.webp", "/projects/two-storey-contemporary-villa/image-01.webp", "/projects/two-storey-contemporary-villa/image-02.webp"], video: "/projects/two-storey-contemporary-villa/video.mp4" },
  { id: 6, slug: "terrace-barbecue-palm-garden", src: "/projects/terrace-barbecue-palm-garden/cover.webp", title: "Modern Tropical House", category: "Architecture · 3D", description: "Contemporary residence with a generous outdoor terrace, barbecue area, glass balcony, palm trees and swimming pool.", images: ["/projects/terrace-barbecue-palm-garden/cover.webp", "/projects/terrace-barbecue-palm-garden/image-01.webp", "/projects/terrace-barbecue-palm-garden/image-02.webp"], video: "/projects/terrace-barbecue-palm-garden/video.mp4" },
  { id: 7, slug: "stone-residence-pool-mountain-views", src: "/projects/stone-residence-pool-mountain-views/cover.webp", title: "Mixed-Use Building", category: "Architecture · 3D", description: "Contemporary residence featuring natural stone façades, a swimming pool, landscaped outdoor spaces and mountain views.", images: ["/projects/stone-residence-pool-mountain-views/cover.webp", "/projects/stone-residence-pool-mountain-views/image-01.webp", "/projects/stone-residence-pool-mountain-views/image-02.webp"], video: "/projects/stone-residence-pool-mountain-views/video.mp4" },
  { id: 8, slug: "contemporary-luxury-interior", src: "/projects/contemporary-luxury-interior/cover.webp", title: "Contemporary Luxury Interior", category: "INTERIOR · 3D", description: "Contemporary luxury interiors featuring an open-plan living and dining area, a refined kitchen and a warm, elegant bedroom.", images: ["/projects/contemporary-luxury-interior/cover.webp", "/projects/contemporary-luxury-interior/image-01.webp", "/projects/contemporary-luxury-interior/image-02.webp"], video: "/projects/contemporary-luxury-interior/video.mp4" },
  { id: 9, slug: "contemporary-loft-interior", src: "/projects/contemporary-loft-interior/cover.webp", title: "Contemporary Loft with Mezzanine", category: "INTERIOR · 3D", description: "Contemporary loft interior combining a mezzanine bedroom, compact open-plan kitchen and living area, warm timber finishes and a refined green-and-charcoal palette.", images: ["/projects/contemporary-loft-interior/cover.webp", "/projects/contemporary-loft-interior/image-01.webp", "/projects/contemporary-loft-interior/image-02.webp"], video: "/projects/contemporary-loft-interior/video.mp4" },
  { id: 10, slug: "two-bedroom-apartment", src: "/projects/two-bedroom-apartment/cover.webp", title: "Two-Bedroom Apartment", category: "INTERIOR · 3D", description: "Two-Bedroom Apartment.", images: ["/projects/two-bedroom-apartment/cover.webp", "/projects/two-bedroom-apartment/image-01.webp", "/projects/two-bedroom-apartment/image-02.webp"], video: "/projects/two-bedroom-apartment/video.mp4" },
];

export const serviceDetails = {
  drafting: {
    id: "drafting",
    title: "ARCHITECTURAL DRAFTING & TECHNICAL DOCUMENTATION",
    icon: "FileText",
    tagline:
      "Preparation of clear, detailed architectural drawings to support project development.",
    img: "/images/drafting/marcenaria/marcenaria%205.webp",
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
    title: "3D MODELLING & VISUALISATION",
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
    title: "DIGITALISATION",
    icon: "Compass",
    tagline:
      "Conversion of hand drawings to CAD, image retouching, and presentation graphics.",
    img: "/images/services/digitalisation/digitalisation-cover.webp",
    detailImg: "/digitalisation/digitalisation-page-cover.webp",
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
  { id: "projects", name: "PORTFOLIO" },
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

// Preview deployment test: harmless code comment.
// Trigger Vercel Preview for the project translation changes.
