import { Check, X } from 'lucide-react';
import { useStore } from '../../hooks/useCart';

export default function Toasts() {
  const { toasts, dismissToast } = useStore();
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-20 z-[70] flex flex-col items-center gap-2 px-4 sm:bottom-6 sm:items-start sm:pl-8"
      role="status"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto flex max-w-sm animate-fadeUp items-center gap-3 bg-ink px-4 py-3 text-sm text-white shadow-soft"
        >
          <Check size={16} className="shrink-0 text-gold-light" />
          <span>{t.message}</span>
          <button type="button" onClick={() => dismissToast(t.id)} aria-label="Dismiss notification" className="ml-1 text-white/70 hover:text-white">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
