// ============================================================
//  SITE CONFIG - yahin se phone / email / address change karo,
//  poori website me automatically update ho jayega.
// ============================================================
export const site = {
  name: 'Electrician',
  tagline: 'Professional Electrical Services',
  phone: '+91 93195 80618',
  phoneHref: 'tel:+91 93195 80618',
  whatsapp: '+91 93195 80618', // country code + number, bina + ya space ke
  email: 'info@electrician.com',
  address: '123 Electric St, Power City, State 45678',
  hours: 'Mon - Sat: 08:00 AM - 06:00 PM',
  emergency: 'Emergency: 24/7',
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  // Home page ke video section ki YouTube video ID
  videoId: 'dQw4w9WgXcQ',
};

export const money = (n) =>
  '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
