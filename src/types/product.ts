export type CategorySlug =
  | 'skincare'
  | 'makeup'
  | 'hair-care'
  | 'fragrance'
  | 'body-care'
  | 'personal-care';

export type VisualKind =
  | 'dropper'
  | 'jar'
  | 'lipstick'
  | 'pump'
  | 'mist'
  | 'tube'
  | 'bottle'
  | 'tub';

export interface ProductVisualSpec {
  kind: VisualKind;
  /** Background tint of the product tile */
  bg: string;
  /** Main product colour */
  color: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  price: number;
  oldPrice?: number;
  rating: number;
  stock: number;
  featured?: boolean;
  /** Higher number = newer */
  addedOrder: number;
  description: string;
  benefits: string[];
  visual: ProductVisualSpec;
  /** Optional real photos. When provided they replace the illustrated visual. */
  images?: string[];
}

export interface Category {
  slug: CategorySlug;
  name: string;
  blurb: string;
  visual: ProductVisualSpec;
}

export interface CartItem {
  id: string;
  qty: number;
}
