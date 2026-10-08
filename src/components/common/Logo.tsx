import { Link } from 'react-router-dom';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="Jessyca Secrets - home" className="inline-flex flex-col leading-none">
      <span
        className={`font-serif text-[22px] font-semibold uppercase tracking-[0.22em] sm:text-2xl ${
          light ? 'text-white' : 'text-plum-800'
        }`}
      >
        Jessyca
      </span>
      <span
        className={`mt-1 text-[9px] font-medium uppercase tracking-[0.5em] ${
          light ? 'text-gold-light' : 'text-gold'
        }`}
      >
        Secrets
      </span>
    </Link>
  );
}
