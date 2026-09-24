export type Banner = { src: string; position?: string };

/** One distinct banner photo (or crop) per page, shown behind the navigation bar. */
export const BANNERS: Record<string, Banner> = {
  home: { src: '/images/banners/home.jpg', position: 'center 62%' },
  'how-it-works': { src: '/images/banners/how-it-works.jpg', position: 'center' },
  features: { src: '/images/banners/features.jpg', position: 'center' },
  communities: { src: '/images/banners/communities.jpg', position: 'center' },
  'safe-hub': { src: '/images/banners/safe-hub.jpg', position: 'center 40%' },
  partners: { src: '/images/banners/partners.jpg', position: 'center' },
  about: { src: '/images/banners/about.jpg', position: 'center' },
  contact: { src: '/images/banners/contact.jpg', position: 'center' },
  faq: { src: '/images/banners/faq.jpg', position: 'center' },
  register: { src: '/images/banners/pre-register.jpg', position: 'center' },
  'pre-register': { src: '/images/banners/pre-register.jpg', position: 'center' },
  'privacy-policy': { src: '/images/banners/privacy-policy.jpg', position: 'center' },
  terms: { src: '/images/banners/terms.jpg', position: 'center' },
  'cookie-policy': { src: '/images/banners/cookie-policy.jpg', position: 'center' },
  eula: { src: '/images/banners/eula.jpg', position: 'center' },
  'acceptable-use-policy': { src: '/images/banners/acceptable-use-policy.jpg', position: 'center' },
  disclaimer: { src: '/images/banners/disclaimer.jpg', position: 'center' },
};

export const PILLARS = [
  { icon: 'shield', title: 'Safety', text: 'Emergency SOS and emergency workflow support.' },
  { icon: 'msg', title: 'Communication', text: 'Messaging, voice and video communication.' },
  { icon: 'users', title: 'Community', text: 'Community chat and community interaction.' },
  { icon: 'file', title: 'Information', text: 'Community updates and important information.' },
  { icon: 'search', title: 'Awareness', text: 'Missing-person reporting and visibility.' },
  { icon: 'signal', title: 'Response', text: 'Approved responder integrations and coordinated emergency workflows.' },
];

export const STEPS = [
  'Activate SOS',
  'Havenly Solutions identifies relevant emergency information',
  'Configured people and pathways can be notified',
  'Approved responders can receive necessary incident information where supported',
  'The emergency workflow can be monitored and coordinated',
];

export const PRINCIPLES = [
  { icon: 'heart', title: 'Human first', text: 'Technology should make difficult moments simpler.' },
  { icon: 'lock', title: 'Privacy minded', text: 'People should understand who receives their information and why.' },
  { icon: 'users', title: 'Community connected', text: 'Safety does not stop with one person.' },
  { icon: 'file', title: 'Purposeful technology', text: 'Technology should solve real problems instead of adding complexity.' },
  { icon: 'building', title: 'Responsible partnerships', text: 'External organizations should receive only the access and information appropriate to their role.' },
];

export const FEATURE_CATEGORIES = ['All', 'Safety', 'Communication', 'Community', 'Information', 'Experience'] as const;
export const FEATURES = [
  { cat: 'Safety', icon: 'shield', title: 'SOS', text: 'A central emergency action on the Home Screen, designed to be easy to find under stress.' },
  { cat: 'Safety', icon: 'signal', title: 'Offline and Bluetooth resilience', text: 'Additional emergency communication resilience where supported, not a guarantee of connectivity.' },
  { cat: 'Safety', icon: 'building', title: 'Responder integration', text: 'Connections to approved providers managed by Havenly Solutions, sharing only what an incident requires.' },
  { cat: 'Communication', icon: 'users', title: 'Trusted contacts', text: 'Controlled communication connections. You decide who becomes part of your trusted network.' },
  { cat: 'Communication', icon: 'msg', title: 'Messaging', text: 'One-to-one communication, subject to supported relationships and permissions.' },
  { cat: 'Communication', icon: 'phone', title: 'Voice calling', text: 'Relationship-based calling, subject to permissions.' },
  { cat: 'Communication', icon: 'video', title: 'Video calling', text: 'Relationship-based video communication, subject to permissions.' },
  { cat: 'Community', icon: 'users', title: 'Community chat', text: 'Community-level communication for announcements, safety information and local coordination.' },
  { cat: 'Community', icon: 'file', title: 'Community feed', text: 'Missing-person information at the top, with community posts underneath.' },
  { cat: 'Community', icon: 'search', title: 'Missing-person reporting', text: 'A structured workflow for creating a report and sharing it through the feed.' },
  { cat: 'Information', icon: 'msg', title: 'Jabu', text: 'Controlled information and guidance, working from approved and scoped information.' },
  { cat: 'Information', icon: 'bell', title: 'Notifications', text: 'Important communication and status alerts.' },
  { cat: 'Experience', icon: 'sun', title: 'Light and dark mode', text: 'Choose the appearance that works best for you.' },
  { cat: 'Experience', icon: 'eye', title: 'Accessibility', text: 'Readable, high-contrast and clear interaction design.' },
];

export const FAQ: { q: string; a: string; link?: { href: string; label: string } }[] = [
  { q: 'What is Havenly Solutions?', a: 'Havenly Solutions is South Africa’s First Civic Technology Software Company building a connected safety and community platform that brings together personal safety, communication, community and information.' },
  { q: 'What is the Havenly Solutions app?', a: 'The app is the consumer product. It combines SOS, trusted contacts, messaging, voice and video calling, community chat, a community feed, missing-person reporting and Jabu in one experience.' },
  { q: 'When is Havenly Solutions launching?', a: 'The planned launch date is 13 October 2026.' },
  { q: 'Can I pre-register?', a: 'Yes. Pre-registering tells us you want to be part of the launch and lets us send you launch information. It does not create an account.', link: { href: '/register', label: 'Pre-register now' } },
  { q: 'Is Havenly Solutions only an SOS application?', a: 'No. It combines safety, communication, community and information features.' },
  { q: 'Can I message people?', a: 'Yes, subject to supported relationships and permissions.' },
  { q: 'Can I make voice and video calls?', a: 'Yes, subject to supported relationships and permissions.' },
  { q: 'Can I join a community?', a: 'The app is designed to support community-based communication.' },
  { q: 'Can I report a missing person?', a: 'The application supports a structured missing-person reporting workflow. It cannot guarantee that a missing person will be found.' },
  { q: 'What is Jabu?', a: 'Jabu is a controlled information and guidance experience.' },
  { q: 'Is Jabu an unrestricted AI agent?', a: 'No. Jabu operates from controlled information sources and scopes.' },
  { q: 'Does Havenly Solutions replace police or emergency services?', a: 'No. The app is designed to help you communicate and coordinate relevant emergency information.' },
  { q: 'Will every SOS reach an emergency service?', a: 'Not necessarily. Responder routing depends on configured capabilities, participating providers and the circumstances of the incident.' },
  { q: 'Will responders see all my information?', a: 'No. The platform is designed around controlled, purpose-based information sharing.' },
  { q: 'Can my organization become a partner?', a: 'Yes. Use the partnership enquiry form on the Partners page.', link: { href: '/partners#apply', label: 'Open the partnership enquiry form' } },
  { q: 'Can I log into the Dashboard from this website?', a: 'No. The Dashboard is an internal operational environment and is not part of the public consumer website.' },
];

export const HELPLINE_CATEGORIES = ['All', 'Emergency', 'GBV', 'Children', 'Legal', 'Mental health'] as const;
export const HELPLINES = [
  { cat: 'Emergency', name: 'SAPS emergency', text: 'Police emergency line, from any phone.', number: '10111' },
  { cat: 'Emergency', name: 'Emergency from a mobile', text: 'Connects you to emergency services from a mobile phone.', number: '112' },
  { cat: 'Emergency', name: 'Crime Stop', text: 'Report a crime anonymously.', number: '08600 10111' },
  { cat: 'GBV', name: 'GBV Command Centre', text: 'Free, 24-hour support for people affected by gender-based violence.', number: '0800 428 428' },
  { cat: 'GBV', name: 'Stop Gender Violence helpline', text: 'Free support and referrals.', number: '0800 150 150' },
  { cat: 'Children', name: 'Childline South Africa', text: 'Free help for children and anyone worried about a child.', number: '0800 055 555' },
  { cat: 'Legal', name: 'Legal Aid South Africa', text: 'Free legal advice for people who qualify.', number: '0800 110 110' },
  { cat: 'Mental health', name: 'SADAG suicide crisis line', text: 'Free support if you or someone you know is in crisis.', number: '0800 567 567' },
];
