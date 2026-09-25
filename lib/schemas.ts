import { z } from 'zod';

export const COUNTRIES = [
  'South Africa', 'Botswana', 'Eswatini', 'Lesotho', 'Mozambique', 'Namibia', 'Zambia', 'Zimbabwe',
  'Kenya', 'Nigeria', 'United Kingdom', 'United States', 'Other',
] as const;

export const PROVINCES = [
  'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga',
  'Northern Cape', 'North West', 'Western Cape',
] as const;

export const INTERESTS = [
  'Personal safety', 'Family safety', 'Community communication', 'Missing-person awareness',
  'Emergency SOS', 'All Havenly Solutions features',
] as const;

export const ORG_TYPES = ['Security', 'Emergency Services', 'Medical Response', 'Community Organization', 'Technology', 'Other'] as const;
export const PARTNERSHIP_TYPES = ['Response partnership', 'Community partnership', 'Service or technology partnership', 'Not sure yet'] as const;
export const CONTACT_METHODS = ['Email', 'Phone', 'Either'] as const;
export const DISPATCH_ANSWERS = ['Yes', 'No', 'Not sure'] as const;
export const CONTACT_TOPICS = ['General Enquiries', 'Partnership Enquiries', 'Press / Media', 'Customer / Pre-launch Enquiries'] as const;

const ZA = /^(\+27|0)[0-9]{9}$/;
const INTL = /^\+?[0-9]{7,15}$/;
export function phoneValid(value: string, country: string): boolean {
  const v = value.replace(/[\s()-]/g, '');
  return country === 'South Africa' ? ZA.test(v) : INTL.test(v);
}

const text = (label: string, min = 1, max = 200) =>
  z.string().trim().min(min, `Enter ${label}.`).max(max, `${label[0].toUpperCase()}${label.slice(1)} is too long.`);
const email = z.string().trim().max(254).email('Enter a valid email address.');
const consent = (message: string) => z.literal(true, { message });

/** Anti-spam fields present on every public form. `hp` is a honeypot and must stay empty. */
const guard = { hp: z.string().max(0).optional().default(''), startedAt: z.number().optional() };

export const preRegisterSchema = z
  .object({
    firstName: text('your first name', 1, 80),
    lastName: text('your last name', 1, 80),
    email,
    mobile: z.string().trim().min(1, 'Enter your mobile number.').max(30),
    country: z.enum(COUNTRIES, { message: 'Choose your country.' }),
    city: z.string().trim().max(120).optional().default(''),
    interest: z.enum(INTERESTS, { message: 'Choose what you are most interested in.' }),
    consent: consent('Tick the box to confirm you would like to receive launch information.'),
    ...guard,
  })
  .superRefine((v, ctx) => {
    if (!phoneValid(v.mobile, v.country)) {
      ctx.addIssue({
        code: 'custom', path: ['mobile'],
        message: v.country === 'South Africa'
          ? 'Enter a South African mobile number, for example 082 000 0000.'
          : 'Enter your mobile number with the country code, for example +267 71 234 567.',
      });
    }
  });

export const partnerSchema = z
  .object({
    orgName: text('your organization name', 2, 200),
    orgType: z.enum(ORG_TYPES, { message: 'Choose an organization type.' }),
    regNo: z.string().trim().max(60).optional().default(''),
    country: z.enum(COUNTRIES, { message: 'Choose your country.' }),
    region: text('your province or region', 2, 120),
    serviceArea: text('your service area', 2, 300),
    website: z.string().trim().max(300).optional().default('').refine(
      (v) => v === '' || /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/.*)?$/i.test(v), 'Enter a valid website address.'),
    contactName: text('the contact person\'s name', 2, 120),
    email,
    phone: z.string().trim().min(1, 'Enter a phone number.').max(30),
    preferredContact: z.enum(CONTACT_METHODS, { message: 'Choose a contact method.' }),
    partnershipType: z.enum(PARTNERSHIP_TYPES, { message: 'Choose a partnership type.' }),
    description: text('a short description of your organization', 10, 2000),
    support: text('how your organization could support users', 10, 2000),
    dispatch: z.enum(DISPATCH_ANSWERS, { message: 'Choose an option.' }),
    consent: consent('Tick the box to allow Havenly Solutions to contact you.'),
    ...guard,
  })
  .superRefine((v, ctx) => {
    if (!phoneValid(v.phone, v.country)) {
      ctx.addIssue({ code: 'custom', path: ['phone'], message: 'Enter a valid phone number, for example 011 000 0000.' });
    }
  });

export const contactSchema = z.object({
  name: text('your name', 2, 120),
  email,
  topic: z.enum(CONTACT_TOPICS, { message: 'Choose a topic.' }),
  message: text('a message of at least 10 characters', 10, 4000),
  consent: consent('Tick the box to allow us to reply.'),
  ...guard,
});

export type PreRegisterInput = z.infer<typeof preRegisterSchema>;
export type PartnerInput = z.infer<typeof partnerSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Record<string, string>;
export function fieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? '_');
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
