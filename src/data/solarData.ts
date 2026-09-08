import { ServiceItem, ProjectItem, FAQItem, TestimonialItem, SolarGuideItem } from '../types';
import headerImage from '../assets/header_image.png';
import commercialNeeds from '../assets/Commercial-Needs.jpg';
import offGridNeeds from '../assets/off-grid-solar-energy-system.png';
import kw from '../assets/5kw.jpg';
import kW15 from '../assets/15kw.jpg';
import kw6 from '../assets/6-kw.jpeg';

export const BUSINESS_INFO = {
  name: 'Orbit Power Solutions',
  altName: 'Orbit Enterprises',
  tagline: 'Reliable Solar Energy & Rooftop Installation Across Andhra Pradesh',
  phone1: '+91 9010888099',
  phone1Raw: '+919010888099',
  phone2: '+91 95534 79199',
  phone2Raw: '+919553479199',
  whatsapp: '+91 9010888099',
  whatsappRaw: '919010888099',
  email: 'Orbit.rvpm@gmail.com',
  website: 'https://orbitpowersolutions.com/',
  address: {
    street: 'Main Road',
    town: 'Ravulapalem',
    district: 'East Godavari / Dr. B.R. Ambedkar Konaseema',
    state: 'Andhra Pradesh',
    pincode: '533238',
    country: 'India',
    fullFormatted: 'Main Road, Ravulapalem, East Godavari, Andhra Pradesh - 533238'
  },
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed / Emergency On-Call)',
  whatsappPrefill: 'Hello Orbit Power Solutions, I am interested in a solar solution. I would like to get more information and a quotation.',
  primaryServiceAreas: [
    'Ravulapalem',
    'Rajahmundry',
    'Kakinada',
    'Amalapuram',
    'Mandapeta',
    'Tanuku',
    'Razole',
    'Ramachandrapuram',
    'East Godavari District',
    'Konaseema District'
  ]
};

export const QUICK_BENEFITS = [
  {
    title: 'Quality Solar Solutions',
    desc: 'Tier-1 Mono PERC & TopCon solar panels designed for high thermal efficiency and coastal Andhra weather conditions.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Professional Installation',
    desc: 'Engineered hot-dip galvanized mounting structures built to endure high wind loads and regional monsoon gusts.',
    icon: 'Wrench'
  },
  {
    title: 'Reliable Products',
    desc: 'High-efficiency string and hybrid inverters with standard manufacturer warranties up to 25 years on panels.',
    icon: 'Cpu'
  },
  {
    title: 'Local Expert Support',
    desc: 'Local team based in Ravulapalem providing responsive on-site service, system troubleshooting, and routine check-ups.',
    icon: 'Headset'
  },
  {
    title: 'Customized Solar Systems',
    desc: 'Bespoke designs tailored to your actual energy consumption, shadow-free roof area, and budget.',
    icon: 'Sliders'
  }
];

export const SOLAR_SERVICES: ServiceItem[] = [
  {
    id: 'residential-on-grid',
    title: 'Residential On-Grid Rooftop Solar',
    shortDesc: 'Cut your home electricity bills by up to 90% while feeding surplus clean power back to the grid via net metering.',
    fullDesc: 'Our on-grid residential solar systems are connected directly to your local electricity utility (APEPDCL). You consume solar power during daylight hours and export excess generation to the grid, reducing monthly bills to minimum charges.',
    benefits: [
      'Eligible for PM Surya Ghar Muft Bijli Yojana Central Government subsidy up to ₹78,000',
      'Bi-directional net metering with local Discom for credits on excess units',
      'No expensive battery replacement or maintenance overhead',
      'Typical payback period of 3 to 4.5 years with 25-year panel longevity'
    ],
    idealFor: 'Independent homes, villas, and residential apartments with active Discom connections',
    capacityRange: '2 kW to 15 kW',
    warranty: '25-Year Panel Performance | 5-Year Inverter Warranty',
    icon: 'Home',
    image: headerImage
  },
  {
    id: 'commercial-industrial',
    title: 'Commercial & Industrial Solar Solutions',
    shortDesc: 'Significant operational expense reduction and accelerated depreciation tax benefits for businesses and enterprises.',
    fullDesc: 'Commercial and industrial electricity tariffs in Andhra Pradesh are among the highest operational costs. Orbit Power Solutions designs high-capacity rooftop and elevated solar plants for commercial buildings, manufacturing units, hospitals, and educational institutions.',
    benefits: [
      'Substantial reduction in peak-tariff daytime commercial utility bills',
      'Accelerated depreciation benefits (Section 32 of Income Tax Act)',
      'Custom elevated structures allowing continued use of roof space below',
      'Remote monitoring app to monitor generation and consumption in real time'
    ],
    idealFor: 'Hospitals, hotels, colleges, shopping centers, rice mills, cold storages & factories',
    capacityRange: '10 kW to 250+ kW',
    warranty: '25-Year Panel Performance | 5-Year Comprehensive Service Support',
    icon: 'Building2',
    image: commercialNeeds
  },
  {
    id: 'off-grid-solar',
    title: 'Off-Grid Solar Power Systems',
    shortDesc: 'Complete energy independence with high-capacity battery energy storage for areas with frequent power outages.',
    fullDesc: 'Designed for rural setups, farmhouses, and sites with unstable or non-existent grid electricity. Sunlight is converted into power, running critical loads while charging deep-cycle solar batteries for seamless nighttime and blackout operation.',
    benefits: [
      '100% reliable backup during power cuts and grid failures',
      'Compatible with deep-cycle tubular or modern Lithium Iron Phosphate (LiFePO4) batteries',
      'Protects sensitive electronics from grid voltage surges and brownouts',
      'Ideal standalone power source where Discom lines are unavailable or erratic'
    ],
    idealFor: 'Farmhouses, rural households, remote establishments & essential critical appliances',
    capacityRange: '1 kW to 10 kW',
    warranty: '25-Year Panel Performance | 3 to 5-Year Battery Warranty',
    icon: 'BatteryCharging',
    image: offGridNeeds
  },
  {
    id: 'hybrid-solar',
    title: 'Hybrid Solar Systems',
    shortDesc: 'The smart combination: Enjoy grid net-metering savings plus battery backup during blackout emergencies.',
    fullDesc: 'Hybrid solar systems connect to both the Discom grid and a battery bank. When the grid is available, enjoy full net metering credits. When a power cut strikes, the intelligent hybrid inverter automatically transitions to battery power in milliseconds.',
    benefits: [
      'Zero blackout downtime with instantaneous automatic switchover',
      'Earn net metering bill credits on sunny surplus generation days',
      'Programmable peak-shaving to draw from battery when grid tariffs are highest',
      'Scalable battery storage capacity that can be expanded in the future'
    ],
    idealFor: 'Residences with frequent load shedding, clinics, labs & offices requiring 24/7 power',
    capacityRange: '3 kW to 20 kW',
    warranty: '25-Year Panels | 5-Year Hybrid Inverter | Battery Warranty',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'agricultural-solar-pumps',
    title: 'Agricultural Solar Water Pumps',
    shortDesc: 'Cost-effective solar water pumping for reliable irrigation without relying on erratic rural feeder lines.',
    fullDesc: 'Harness the abundant Andhra sun to pump water directly for agriculture, horticulture, and aqua farms. Replaces high diesel pump fuel bills or erratic agricultural electricity supply with dependable daytime water discharge.',
    benefits: [
      'Eliminates recurring diesel fuel and pump maintenance expenditures',
      'High-performance submersible and surface solar pump controllers',
      'Automatic variable-frequency drive (VFD) maximizing flow even on overcast mornings',
      'Durable galvanized structure with manual seasonal sun-tracking tilt'
    ],
    idealFor: 'Farms, coconut and paddy plantations, horticulture & remote water supply',
    capacityRange: '3 HP to 10 HP pumps',
    warranty: '25-Year Panels | 5-Year Controller & Pump Warranty',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'solar-maintenance',
    title: 'Solar Maintenance & Health Audits',
    shortDesc: 'Preventive cleaning, electrical string testing, and performance optimization to protect your solar yield.',
    fullDesc: 'Dust, soot, and regional bird droppings can decrease solar generation by up to 20%. Our technicians conduct thorough module cleaning, string voltage measurements, DC isolator audits, and earthing resistance tests.',
    benefits: [
      'Restores up to 15%–25% lost energy output from soiling and dust buildup',
      'Thermal hotspot scanning and string voltage continuity validation',
      'Tightening of all mechanical clamps, DC isolators, and AC distribution boxes',
      'Discom net-metering generation reconciliation and inverter firmware checks'
    ],
    idealFor: 'Existing solar installations needing inspection, repair, or regular maintenance',
    capacityRange: 'All system sizes',
    warranty: 'Satisfaction Guaranteed On-Site Service',
    icon: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80'
  }
];

export const SYSTEM_COMPONENTS = [
  {
    name: 'Tier-1 Mono PERC / TopCon Panels',
    role: 'Converts sunlight into direct current (DC) electricity using high-efficiency photovoltaic cells with anti-reflective tempered glass.'
  },
  {
    name: 'Solar Grid / Hybrid Inverter',
    role: 'The brain of the system: efficiently converts DC power into 230V/415V Alternating Current (AC) synchronized with your building and the grid.'
  },
  {
    name: 'Bi-directional Net Meter',
    role: 'Installed and approved by Discom (APEPDCL) to measure both incoming grid units consumed and outgoing surplus solar units exported.'
  },
  {
    name: 'Hot-Dip Galvanized Mounting Structure',
    role: 'Rigid, corrosion-resistant framing anchored securely to withstand coastal Andhra humidity and regional cyclone wind speeds.'
  },
  {
    name: 'DC & AC Distribution Boxes (DB)',
    role: 'Equipped with Type-II surge protection devices (SPDs) and miniature circuit breakers (MCBs) to guard against voltage spikes and lightning.'
  },
  {
    name: 'Chemical Earthing & Lightning Arrestor',
    role: 'Dedicated earthing pits for DC, AC, and lightning arrestor lines to protect your family and expensive appliances.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Initial Enquiry',
    desc: 'Reach out via WhatsApp, phone call, or our online form with your basic property location and monthly electricity bill.'
  },
  {
    step: 2,
    title: 'Site Assessment',
    desc: 'Our technician inspects your roof orientation, shadow obstacles, structural strength, and Discom electrical meter board.'
  },
  {
    step: 3,
    title: 'System Recommendation',
    desc: 'We calculate your optimal kilowatt capacity (On-grid, Off-grid, or Hybrid) to yield maximum savings with minimum payback time.'
  },
  {
    step: 4,
    title: 'Transparent Quotation',
    desc: 'Receive an itemized quote detailing panel brands, inverter specifications, mounting hardware, Discom charges, and subsidy breakdown.'
  },
  {
    step: 5,
    title: 'Seamless Installation',
    desc: 'Our certified installation team mounts structures, aligns panels, completes wiring, and secures safety earthing within 3–5 working days.'
  },
  {
    step: 6,
    title: 'Liaison & Long-Term Support',
    desc: 'We handle Discom net-metering paperwork, test inspection, commissioning, and provide continuous local support.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '5 kW On-Grid Residential Rooftop System',
    type: 'Residential',
    capacity: '5 kW',
    location: 'Ravulapalem, East Godavari',
    description: 'Rooftop installation on a two-storey independent residential home. Integrated with APEPDCL net metering, reducing monthly power bills from ₹6,200 to under ₹700.',
    image: kw,
    savingsHighlights: 'Generates ~650 units/month, saving over ₹65,000 annually.',
    completionYear: '2024'
  },
  {
    id: 'proj-2',
    title: '15 kW Commercial Rooftop Solar Plant',
    type: 'Commercial',
    capacity: '15 kW',
    location: 'Rajahmundry, Andhra Pradesh',
    description: 'Custom elevated galvanized steel framework installed over a commercial complex. Provides clean daytime solar generation while preserving rooftop recreational access.',
    image: kW15,
    savingsHighlights: 'Cuts commercial daytime peak tariff loads by ~75%.',
    completionYear: '2024'
  },
  {
    id: 'proj-3',
    title: '3 kW Residential PM Surya Ghar Setup',
    type: 'Residential',
    capacity: '3 kW',
    location: 'Kakinada, Andhra Pradesh',
    description: 'Compact 3 kW On-Grid residential rooftop solution completed with PM Surya Ghar Muft Bijli Yojana Central Government subsidy processing assistance.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    savingsHighlights: 'Optimal 3kW configuration with maximum ₹78,000 subsidy eligibility.',
    completionYear: '2024'
  },
  {
    id: 'proj-4',
    title: '7.5 HP Agricultural Solar Pumping System',
    type: 'Agricultural',
    capacity: '7.5 HP / 6.5 kWp',
    location: 'Amalapuram, Konaseema',
    description: 'High-efficiency submersible solar pump system with auto-start MPPT controller, providing reliable irrigation for coconut and paddy cultivation.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    savingsHighlights: 'Completely eliminated agricultural diesel pump costs.',
    completionYear: '2023'
  },
  {
    id: 'proj-5',
    title: '6 kW Hybrid Solar Backup System',
    type: 'Residential',
    capacity: '6 kW + Lithium Storage',
    location: 'Mandapeta, East Godavari',
    description: 'Hybrid inverter paired with a 10 kWh lithium battery bank. Delivers net metering bill reductions plus instant blackout backup for ACs and home appliances.',
    image: kw6,
    savingsHighlights: 'Uninterrupted power during coastal summer storm blackouts.',
    completionYear: '2024'
  },
  {
    id: 'proj-6',
    title: '25 kW Commercial Agro-Processing Facility',
    type: 'Industrial',
    capacity: '25 kW',
    location: 'Near Ravulapalem, East Godavari',
    description: 'Heavy-duty industrial rooftop installation on standing seam tin shed. Powering processing machinery, sorting lines, and refrigeration chillers during peak sunlight hours.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
    savingsHighlights: 'Annual savings estimated at over ₹3,20,000 with accelerated tax depreciation.',
    completionYear: '2023'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'S. K. Murthy',
    location: 'Ravulapalem, East Godavari',
    propertyType: 'Residential (Two-Storey Home)',
    systemSize: '5 kW On-Grid System',
    reviewText: 'Orbit Power Solutions did a very clean job with the structure and wiring on my terrace. My APEPDCL bill dropped from ₹5,800 to just the minimum meter rent. They took care of the net-meter application and inspection seamlessly.',
    rating: 5,
    date: '3 months ago',
    isVerifiedPlaceholder: false
  },
  {
    id: 't-2',
    clientName: 'M. Venkata Rao',
    location: 'Rajahmundry',
    propertyType: 'Commercial Clinic & Residence',
    systemSize: '10 kW Hybrid Solar',
    reviewText: 'We needed uninterrupted power for our medical clinic equipment without having to run a noisy diesel generator all day. The hybrid system designed by Orbit Power Solutions switches immediately when power cuts occur and saves us heavy monthly electricity expenses.',
    rating: 5,
    date: '5 months ago',
    isVerifiedPlaceholder: false
  },
  {
    id: 't-3',
    clientName: 'P. Satyanarayana',
    location: 'Amalapuram, Konaseema',
    propertyType: 'Coconut Plantation & Residence',
    systemSize: '3 kW Residential System',
    reviewText: 'Prompt communication over WhatsApp, reasonable pricing without any surprise extras, and genuine Tier-1 panels used. The technician team completed the mechanical fitting in just two days. Very satisfied with Orbit Enterprises.',
    rating: 5,
    date: '2 months ago',
    isVerifiedPlaceholder: false
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Costs & Subsidies',
    question: 'What is the approximate cost of installing rooftop solar panels in Andhra Pradesh?',
    answer: 'The cost typically ranges between ₹55,000 to ₹70,000 per kilowatt for residential on-grid systems before government subsidies. Under the central government’s PM Surya Ghar Muft Bijli Yojana, eligible homes can receive up to ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW systems and above, drastically bringing down your out-of-pocket investment.'
  },
  {
    category: 'Costs & Subsidies',
    question: 'How much can solar actually reduce my monthly electricity bill?',
    answer: 'A properly sized on-grid rooftop solar system can reduce your monthly Discom electricity bills by up to 80% to 90%. You only pay the nominal fixed charges/meter rent to your electricity board (APEPDCL/APCPDCL) while consuming your self-generated solar units.'
  },
  {
    category: 'Installation & Tech',
    question: 'How many solar panels does an average home need?',
    answer: 'An average Indian home consuming 250 to 400 units (kWh) per month typically needs a 3 kW solar plant, which requires roughly 6 to 7 high-efficiency mono PERC panels (540W–580W each) and approximately 200–300 sq. ft. of shadow-free rooftop space.'
  },
  {
    category: 'Net Metering & Discom',
    question: 'What is the difference between On-Grid, Off-Grid, and Hybrid solar?',
    answer: 'On-Grid systems connect to the electricity board to export surplus energy via net metering (lowest cost, highest ROI, shuts down during blackout for grid safety). Off-Grid systems use batteries to operate independently without any grid connection (ideal for rural areas with no power lines). Hybrid systems combine both: you enjoy grid net-metering savings plus battery backup during blackout emergencies.'
  },
  {
    category: 'Installation & Tech',
    question: 'How long do solar panels last and what warranty is provided?',
    answer: 'Modern Tier-1 solar panels have an expected operational lifespan of 25 to 30+ years. They carry a 10–12 year product warranty and a 25-year linear performance warranty guaranteeing at least 80%–84% of original generation capacity at the end of 25 years. Grid inverters typically include 5 to 10 year manufacturer warranties.'
  },
  {
    category: 'Maintenance',
    question: 'How does solar panel maintenance work in coastal Andhra Pradesh?',
    answer: 'Solar panels have no moving parts and require minimal maintenance. In coastal regions like East Godavari, washing the panels with clean tap water every 2 to 3 weeks to clear dust and pollen is sufficient to maintain optimal generation. Orbit Power Solutions also offers preventive maintenance check-ups.'
  },
  {
    category: 'Installation & Tech',
    question: 'Can solar panels withstand heavy rains and coastal winds?',
    answer: 'Yes. Orbit Power Solutions uses structural-grade hot-dip galvanized mounting structures and stainless steel fasteners engineered to withstand regional coastal monsoon weather and cyclone gusts up to 150 km/h.'
  },
  {
    category: 'Net Metering & Discom',
    question: 'What information is needed to get an accurate solar quotation?',
    answer: 'We only need your recent electricity bill copy (showing average monthly units and consumer number), your property location/town, and approximate rooftop area or terrace photos. Reach out on WhatsApp at +91 9010888099 or use our website form.'
  }
];

export const SOLAR_GUIDES_DATA: SolarGuideItem[] = [
  {
    id: 'guide-cost-and-subsidy',
    title: 'Complete 2024–2025 Rooftop Solar Cost & PM Surya Ghar Subsidy Guide in AP',
    readTime: '4 min read',
    category: 'Subsidy & Savings',
    excerpt: 'Understand how the PM Surya Ghar scheme offers direct DBT subsidies of up to ₹78,000 for Andhra Pradesh households.',
    keyPoints: [
      '1 kW system: ₹30,000 central subsidy',
      '2 kW system: ₹60,000 central subsidy',
      '3 kW and above: Maximum ₹78,000 central subsidy',
      'APEPDCL net-metering paperwork and online national portal application walkthrough'
    ]
  },
  {
    id: 'guide-on-grid-vs-hybrid',
    title: 'On-Grid vs. Hybrid Solar: Which Is Better for Godavari District Homes?',
    readTime: '5 min read',
    category: 'System Selection',
    excerpt: 'Compare upfront costs, payback speed, battery lifespan, and blackout performance to choose the right system.',
    keyPoints: [
      'Why on-grid yields the fastest financial return (3 to 4 years)',
      'When adding a lithium battery bank is essential for home medical devices or night loads',
      'Cost comparisons between deep-cycle tubular batteries and LiFePO4 batteries'
    ]
  },
  {
    id: 'guide-roof-sizing',
    title: 'How Much Terrace Space Do You Really Need for 3kW, 5kW & 10kW Solar?',
    readTime: '3 min read',
    category: 'Technical Planning',
    excerpt: 'Calculate the shadow-free space required, panel orientation rules, and elevated structure options.',
    keyPoints: [
      'Rule of thumb: 80 to 100 sq. ft. of shadow-free area per 1 kW of solar capacity',
      'South-facing tilt angles (15°–18°) for optimal year-round generation in Andhra Pradesh',
      'Elevated structures that keep your terrace usable for walking or drying laundry'
    ]
  }
];
