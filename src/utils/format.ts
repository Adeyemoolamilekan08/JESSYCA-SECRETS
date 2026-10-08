export const formatNaira = (amount: number): string =>
  `₦${amount.toLocaleString('en-NG')}`;

export const discountPercent = (price: number, oldPrice?: number): number | null =>
  oldPrice && oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;
