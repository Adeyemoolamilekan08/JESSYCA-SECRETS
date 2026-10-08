import { site } from '../data/site';
import { formatNaira } from './format';

const base = `https://wa.me/${site.whatsappNumber}`;

export const whatsappLink = (message?: string): string =>
  message ? `${base}?text=${encodeURIComponent(message)}` : base;

export const productMessage = (name: string, qty = 1): string =>
  qty > 1
    ? `Hello Jessyca Secrets, I am interested in purchasing ${name} (quantity: ${qty}).`
    : `Hello Jessyca Secrets, I am interested in purchasing ${name}.`;

export interface OrderLine {
  name: string;
  qty: number;
  price: number;
}

export const orderMessage = (lines: OrderLine[]): string => {
  const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const rows = lines.map(
    (l, i) => `${i + 1}. ${l.name} x${l.qty} - ${formatNaira(l.price * l.qty)} (${formatNaira(l.price)} each)`,
  );
  return [
    'Hello Jessyca Secrets, I would like to place an order:',
    '',
    ...rows,
    '',
    `Estimated total: ${formatNaira(total)}`,
    '',
    'Please confirm availability and delivery details. Thank you.',
  ].join('\n');
};

export const generalMessage = 'Hello Jessyca Secrets, I would like some help choosing a product.';
