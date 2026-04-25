/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const COMPANIES = [
  {
    name: "Aussie Custom Homes Pty Ltd",
    licence: "357430C",
    acn: "642 725 022",
    email: "admin@thecapitalre.com.au",
    location: "NSW, Australia",
    focus: "Construction of residential houses and duplexes",
    services: [
      "Carpentry",
      "Bricklaying",
      "Painting and decorating",
      "Roofing",
      "Tiling",
      "Gyprocking",
      "Cabinet Making"
    ]
  }
];

export const REGIONS = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "ACT"
];

export const NAV_LINKS = [
  { label: "Our Story", href: "#story" },
  { label: "Projects", href: "#houses" },
  { label: "Contracts", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export interface Project {
  id: string;
  title: string;
  type: 'Houses' | 'Apartments' | 'Land Only' | 'Duplex' | 'Residential';
  location: string;
  image: string;
  beds?: number;
  baths?: number;
  cars?: number;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Sovereign',
    type: 'Residential',
    location: 'Kellyville',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    beds: 5,
    baths: 3,
    cars: 2
  },
  {
    id: '2',
    title: 'Azure Duplex',
    type: 'Duplex',
    location: 'Marsden Park',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 3,
    cars: 1
  },
  {
    id: '3',
    title: 'The Outlook',
    type: 'Houses',
    location: 'Box Hill',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 2,
    cars: 2
  },
  {
    id: '4',
    title: 'Modern Metro',
    type: 'Apartments',
    location: 'Melbourne CBD',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1200',
    beds: 2,
    baths: 2,
    cars: 1
  },
  {
    id: '19',
    title: 'Grand Residential',
    type: 'Residential',
    location: 'Bella Vista',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    beds: 6,
    baths: 4,
    cars: 3
  },
  {
    id: '20',
    title: 'Double Bay Duplex',
    type: 'Duplex',
    location: 'Double Bay',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 2,
    cars: 2
  },
  {
    id: '5',
    title: 'Western Estate',
    type: 'Land Only',
    location: 'Penrith',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '6',
    title: 'Riverbank Villas',
    type: 'Houses',
    location: 'Brisbane',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 3,
    cars: 2
  },
  {
    id: '7',
    title: 'The Terraces',
    type: 'Houses',
    location: 'Blacktown',
    image: 'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 2,
    cars: 2
  },
  {
    id: '8',
    title: 'Pinnacle Point',
    type: 'Apartments',
    location: 'Parramatta',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    beds: 3,
    baths: 2,
    cars: 2
  },
  {
    id: '9',
    title: 'Green Valley',
    type: 'Land Only',
    location: 'Marsden Park',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '10',
    title: 'Heritage Mews',
    type: 'Houses',
    location: 'Granville',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 2,
    cars: 2
  },
  {
    id: '11',
    title: 'Urban Oasis',
    type: 'Apartments',
    location: 'Sydney CBD',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    beds: 2,
    baths: 1,
    cars: 1
  },
  {
    id: '12',
    title: 'Oakwood Park',
    type: 'Land Only',
    location: 'Box Hill',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '13',
    title: 'The Grandscape',
    type: 'Houses',
    location: 'Pymble',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    beds: 6,
    baths: 4,
    cars: 3
  },
  {
    id: '14',
    title: 'Azure Heights',
    type: 'Apartments',
    location: 'Bondi',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    beds: 3,
    baths: 2,
    cars: 2
  },
  {
    id: '15',
    title: 'Willow Creek',
    type: 'Land Only',
    location: 'Schofields',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '16',
    title: 'Summit Residences',
    type: 'Apartments',
    location: 'Chatswood',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
    beds: 4,
    baths: 3,
    cars: 2
  },
  {
    id: '17',
    title: 'Gardenia Estates',
    type: 'Houses',
    location: 'Kellyville',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
    beds: 5,
    baths: 3,
    cars: 2
  },
  {
    id: '18',
    title: 'Blue Horizon',
    type: 'Land Only',
    location: 'Gregory Hills',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200',
  }
];

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, budget, and site requirements to establish a clear project roadmap."
  },
  {
    id: "02",
    title: "Design & Approvals",
    description: "Our team manages the architectural design and all necessary council approvals and certificates."
  },
  {
    id: "03",
    title: "Pre-Construction",
    description: "Finalizing contracts, selections of materials, and site preparation for the build."
  },
  {
    id: "04",
    title: "The Build",
    description: "Execution of the construction with regular site visits and quality assurance at every milestone."
  },
  {
    id: "05",
    title: "Quality Assurance",
    description: "A comprehensive final inspection to ensure every detail meets our premium standards."
  },
  {
    id: "06",
    title: "Handover",
    description: "The moment you receive the keys to your brand new, custom-built dream home."
  }
];
