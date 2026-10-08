import type { Category } from '../types/product';

export const categories: Category[] = [
  {
    slug: 'skincare',
    name: 'Skincare',
    blurb: 'Serums, creams and cleansers',
    visual: { kind: 'dropper', bg: '#F1E4EC', color: '#6B2A74' },
  },
  {
    slug: 'makeup',
    name: 'Makeup',
    blurb: 'Lips, face and everyday colour',
    visual: { kind: 'lipstick', bg: '#F5E6DC', color: '#A23E8B' },
  },
  {
    slug: 'hair-care',
    name: 'Hair Care',
    blurb: 'Treatments, oils and care',
    visual: { kind: 'bottle', bg: '#EFE8DD', color: '#4A2A52' },
  },
  {
    slug: 'fragrance',
    name: 'Fragrance',
    blurb: 'Body mists and perfumes',
    visual: { kind: 'mist', bg: '#EDE3F0', color: '#8E4A9A' },
  },
  {
    slug: 'body-care',
    name: 'Body Care',
    blurb: 'Lotions, butters and scrubs',
    visual: { kind: 'tub', bg: '#F3E9DF', color: '#8A5A3C' },
  },
  {
    slug: 'personal-care',
    name: 'Personal Care',
    blurb: 'Daily essentials',
    visual: { kind: 'tube', bg: '#EEE7E2', color: '#53325A' },
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
