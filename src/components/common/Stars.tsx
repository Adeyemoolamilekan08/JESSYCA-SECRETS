import { Star } from 'lucide-react';

export default function Stars({ rating, showValue = true }: { rating: number; showValue?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5`}>
      <span className="inline-flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            size={13}
            strokeWidth={1.5}
            className={n <= Math.round(rating) ? 'fill-gold text-gold' : 'text-charcoal/30'}
          />
        ))}
      </span>
      {showValue && <span className="text-xs text-charcoal/70">{rating.toFixed(1)}</span>}
    </span>
  );
}
