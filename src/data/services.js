const PROCESS = [
  { title: 'Book & Discuss', text: 'Call us or book online. We note down your requirement and timing.' },
  { title: 'Site Visit & Quote', text: 'A certified electrician inspects the site and gives a clear, free estimate.' },
  { title: 'Safe Execution', text: 'Work is done by uniformed, licensed professionals with proper safety gear.' },
  { title: 'Testing & Handover', text: 'We test everything, clean up, and explain the work before we leave.' },
];

export const services = [
  {
    slug: 'residential-electrical',
    title: 'Residential Electrical',
    short: 'Smart home integration and complete wiring solutions.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    from: 45,
    overview:
      'From a single faulty switch to complete home rewiring, our residential team keeps your family safe and your power reliable. We follow local electrical codes and use only quality-tested materials.',
    includes: [
      'Full-home and room-wise rewiring',
      'Switch, socket and fan installation',
      'Smart home and automation setup',
      'Earthing and surge protection',
      'Inverter and backup wiring',
      'Safety inspection and reports',
    ],
  },
  {
    slug: 'commercial-solutions',
    title: 'Commercial Solutions',
    short: 'Power distribution for retail and office environments.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    from: 120,
    overview:
      'Offices, shops and restaurants cannot afford downtime. We plan, install and maintain power distribution that keeps your business running, with after-hours work available.',
    includes: [
      'Power distribution and load planning',
      'Office and retail lighting layouts',
      'Structured cabling and data points',
      'Emergency and exit lighting',
      'Annual maintenance contracts',
      'Compliance inspection and certification',
    ],
  },
  {
    slug: 'industrial-systems',
    title: 'Industrial Systems',
    short: 'Heavy-duty machinery power and automation controls.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    from: 250,
    overview:
      'Factories and workshops need robust, safe and efficient power systems. Our industrial engineers handle three-phase installations, motor control and automation with minimal disruption to production.',
    includes: [
      'Three-phase power installation',
      'Motor control centres and starters',
      'PLC and automation controls',
      'Cable trays and heavy-duty cabling',
      'Preventive maintenance schedules',
      'Breakdown repair with fast response',
    ],
  },
  {
    slug: 'lighting-design',
    title: 'Lighting Design',
    short: 'Architectural LED installations and retrofit upgrades.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
    from: 80,
    overview:
      'Good lighting changes how a space looks and feels. We design and install LED lighting for homes, shops and buildings that is beautiful, bright where needed, and cheaper to run.',
    includes: [
      'Lighting plan and fixture selection',
      'LED retrofit of old fittings',
      'Cove, track and spot lighting',
      'Outdoor and security lighting',
      'Dimmers and smart controls',
      'Energy saving audit',
    ],
  },
  {
    slug: 'solar-energy',
    title: 'Solar & Energy',
    short: 'Sustainable photovoltaic systems and battery storage.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000',
    from: 300,
    overview:
      'Cut your power bill with a solar system sized for your real usage. We handle design, installation, net-metering paperwork and battery backup, start to finish.',
    includes: [
      'Roof survey and system sizing',
      'Panel and inverter installation',
      'Battery storage and backup',
      'Net-metering assistance',
      'Monitoring app setup',
      'Annual cleaning and service',
    ],
  },
  {
    slug: 'maintenance-repair',
    title: 'Maintenance & Repair',
    short: '24/7 emergency response and preventative care.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    from: 99,
    overview:
      'Power cut, tripping breaker, burning smell? Our emergency team is available round the clock. We also offer scheduled maintenance so small faults never become big ones.',
    includes: [
      '24/7 emergency call-out',
      'Fault finding and repair',
      'Breaker and fuse replacement',
      'Thermal inspection of panels',
      'Preventive maintenance plans',
      'Post-repair safety check',
    ],
  },
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    short: 'Our installation services ensure that you get the right air conditioner.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    from: 90,
    overview:
      'We help you choose the right capacity, then install and wire your air conditioner safely, with a dedicated line and proper protection so it runs efficiently for years.',
    includes: [
      'Capacity advice for your room',
      'Dedicated wiring and MCB',
      'Indoor and outdoor unit installation',
      'Stabiliser and protection setup',
      'Annual servicing',
      'Uninstall and re-install',
    ],
  },
  {
    slug: 'security-systems',
    title: 'Security Systems',
    short: 'You can view events over a monitor in our home.',
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f8fa00?q=80&w=2043&auto=format&fit=crop',
    from: 150,
    overview:
      'CCTV cameras, alarms and access control installed neatly and wired properly, so you can watch your home or business from your phone, anywhere.',
    includes: [
      'CCTV camera installation',
      'Video door phone and intercom',
      'Burglar alarm and sensors',
      'Access control and biometric locks',
      'Remote viewing setup',
      'Backup power for cameras',
    ],
  },
  {
    slug: 'panel-upgrades',
    title: 'Panel Changes',
    short: 'Electrical panels are the heart of your electrical system.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1887&auto=format&fit=crop',
    from: 150,
    overview:
      'An old or overloaded panel is a fire risk. We upgrade switchboards and distribution panels to handle modern loads, with proper labelling and protection devices.',
    includes: [
      'Panel capacity assessment',
      'Switchboard and MCB upgrade',
      'RCCB / GFCI protection',
      'Circuit labelling and diagrams',
      'Load balancing',
      'Safety test certificate',
    ],
  },
];

export const serviceProcess = PROCESS;
export const getService = (slug) => services.find((s) => s.slug === slug);
