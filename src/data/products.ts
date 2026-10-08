import type { Product } from '../types/product';

/**
 * Sample catalogue. Replace names, prices, descriptions and stock with the
 * real product list. Add `images: ['/products/xyz.jpg']` to any product to
 * use a real photo instead of the illustrated visual.
 */
export const products: Product[] = [
  {
    id: 'radiance-face-serum',
    name: 'Radiance Face Serum',
    category: 'skincare',
    price: 14500,
    oldPrice: 17000,
    rating: 4.8,
    stock: 14,
    featured: true,
    addedOrder: 12,
    description:
      'A lightweight daily serum that absorbs quickly and leaves skin looking fresh and even. Works well under moisturiser and makeup.',
    benefits: ['Lightweight, non-greasy feel', 'Helps skin look brighter and more even', 'Suitable for daily use, morning or night'],
    visual: { kind: 'dropper', bg: '#F1E4EC', color: '#6B2A74' },
  },
  {
    id: 'hydrating-body-lotion',
    name: 'Hydrating Body Lotion',
    category: 'body-care',
    price: 8500,
    rating: 4.6,
    stock: 22,
    featured: true,
    addedOrder: 11,
    description:
      'A soft, everyday body lotion in a pump bottle. Smooths dry skin and leaves a light, clean scent.',
    benefits: ['Long-lasting moisture', 'Quick-absorbing formula', 'Easy pump dispenser'],
    visual: { kind: 'pump', bg: '#F3E9DF', color: '#8A5A3C' },
  },
  {
    id: 'velvet-matte-lipstick',
    name: 'Velvet Matte Lipstick',
    category: 'makeup',
    price: 6500,
    rating: 4.7,
    stock: 30,
    featured: true,
    addedOrder: 10,
    description:
      'A comfortable matte lipstick with rich colour payoff. Glides on smoothly and wears well through the day.',
    benefits: ['Rich, even colour', 'Comfortable matte finish', 'Compact enough for any handbag'],
    visual: { kind: 'lipstick', bg: '#F5E6DC', color: '#A23E8B' },
  },
  {
    id: 'luxury-body-mist',
    name: 'Luxury Body Mist',
    category: 'fragrance',
    price: 9500,
    oldPrice: 11000,
    rating: 4.5,
    stock: 18,
    featured: true,
    addedOrder: 9,
    description:
      'A soft, floral body mist for a fresh finish after your shower or before heading out. Light enough to reapply during the day.',
    benefits: ['Fresh floral scent', 'Fine, even mist', 'Easy to reapply'],
    visual: { kind: 'mist', bg: '#EDE3F0', color: '#8E4A9A' },
  },
  {
    id: 'vitamin-c-face-cream',
    name: 'Vitamin C Face Cream',
    category: 'skincare',
    price: 12000,
    rating: 4.7,
    stock: 16,
    featured: true,
    addedOrder: 8,
    description:
      'A smooth day cream with vitamin C to help skin look bright and refreshed. Sits well under sunscreen and makeup.',
    benefits: ['Brightening daily moisturiser', 'Smooth, non-sticky texture', 'Suits most skin types'],
    visual: { kind: 'jar', bg: '#F6EAD9', color: '#B5733A' },
  },
  {
    id: 'cocoa-body-butter',
    name: 'Cocoa Body Butter',
    category: 'body-care',
    price: 7500,
    oldPrice: 9000,
    rating: 4.9,
    stock: 20,
    featured: true,
    addedOrder: 7,
    description:
      'A rich body butter with a warm cocoa scent. Best for dry skin, elbows, knees and after-bath care.',
    benefits: ['Deep, lasting moisture', 'Warm cocoa scent', 'A little goes a long way'],
    visual: { kind: 'tub', bg: '#F0E4D8', color: '#7A4A32' },
  },
  {
    id: 'gentle-cleansing-foam',
    name: 'Gentle Cleansing Foam',
    category: 'skincare',
    price: 7000,
    rating: 4.4,
    stock: 25,
    featured: true,
    addedOrder: 6,
    description:
      'A soft foaming cleanser that removes dirt and oil without leaving skin tight. Good for morning and evening.',
    benefits: ['Cleans without stripping', 'Soft, airy foam', 'Daily use, morning and night'],
    visual: { kind: 'pump', bg: '#E9EEF0', color: '#4F6F7A' },
  },
  {
    id: 'silk-hair-treatment',
    name: 'Silk Hair Treatment',
    category: 'hair-care',
    price: 11500,
    rating: 4.6,
    stock: 12,
    featured: true,
    addedOrder: 5,
    description:
      'A smoothing leave-in treatment that helps reduce frizz and adds softness and shine to dry or styled hair.',
    benefits: ['Smooths and softens', 'Adds natural shine', 'Works on dry or styled hair'],
    visual: { kind: 'bottle', bg: '#EFE8DD', color: '#4A2A52' },
  },
  {
    id: 'satin-finish-foundation',
    name: 'Satin Finish Foundation',
    category: 'makeup',
    price: 13500,
    rating: 4.5,
    stock: 10,
    addedOrder: 4,
    description:
      'A buildable foundation with a smooth satin finish. Light coverage for everyday, more for special occasions.',
    benefits: ['Buildable coverage', 'Natural satin finish', 'Blends easily'],
    visual: { kind: 'bottle', bg: '#F6E8DC', color: '#C08A5E' },
  },
  {
    id: 'soft-floral-eau-de-parfum',
    name: 'Soft Floral Eau de Parfum',
    category: 'fragrance',
    price: 18500,
    rating: 4.8,
    stock: 8,
    addedOrder: 3,
    description:
      'A refined floral perfume with a warm, lasting base. Suitable for day and evening wear.',
    benefits: ['Long-lasting wear', 'Floral with a warm finish', 'Day-to-evening scent'],
    visual: { kind: 'mist', bg: '#F1E5EA', color: '#6B2A74' },
  },
  {
    id: 'soothing-hand-cream',
    name: 'Soothing Hand Cream',
    category: 'personal-care',
    price: 4500,
    rating: 4.3,
    stock: 35,
    addedOrder: 2,
    description:
      'A small, handbag-friendly hand cream that softens dry hands without feeling greasy.',
    benefits: ['Non-greasy', 'Compact tube', 'Great for daily top-ups'],
    visual: { kind: 'tube', bg: '#EEE7E2', color: '#53325A' },
  },
  {
    id: 'nourishing-hair-oil',
    name: 'Nourishing Hair Oil',
    category: 'hair-care',
    price: 6000,
    rating: 4.6,
    stock: 24,
    addedOrder: 1,
    description:
      'A light hair and scalp oil for added moisture and shine. Use on natural, relaxed or protective styles.',
    benefits: ['Adds moisture and shine', 'Light, non-heavy feel', 'Suits many hair styles'],
    visual: { kind: 'dropper', bg: '#EDE6D6', color: '#7A5A2A' },
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
