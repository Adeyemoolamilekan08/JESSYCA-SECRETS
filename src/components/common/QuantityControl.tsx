import { Minus, Plus } from 'lucide-react';

interface Props {
  value: number;
  max: number;
  onChange: (qty: number) => void;
  label: string;
  compact?: boolean;
}

export default function QuantityControl({ value, max, onChange, label, compact }: Props) {
  const size = compact ? 'h-9 w-9' : 'h-11 w-11';
  return (
    <div
      className="inline-flex items-center border border-charcoal/25 bg-white"
      role="group"
      aria-label={`Quantity for ${label}`}
    >
      <button
        type="button"
        className={`${size} flex items-center justify-center text-charcoal hover:bg-cream disabled:opacity-40`}
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Decrease quantity of ${label}`}
      >
        <Minus size={14} />
      </button>
      <span className="min-w-[2.25rem] text-center text-sm font-medium tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={`${size} flex items-center justify-center text-charcoal hover:bg-cream disabled:opacity-40`}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Increase quantity of ${label}`}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
