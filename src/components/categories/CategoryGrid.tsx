import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../../data/categories';
import ProductVisual from '../common/ProductVisual';

const layout = (i: number, last: number) => {
  if (i === 0) return 'col-span-2 row-span-2';
  if (i === last) return 'col-span-2 lg:col-span-4';
  return '';
};

export default function CategoryGrid() {
  const last = categories.length - 1;
  return (
    <ul className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:gap-4 lg:auto-rows-[270px] lg:grid-cols-4">
      {categories.map((c, i) => (
        <li key={c.slug} className={layout(i, last)}>
          <Link to={`/shop/${c.slug}`} className="group relative block h-full overflow-hidden bg-cream" aria-label={`Shop ${c.name}`}>
            <ProductVisual
              spec={c.visual}
              fit={i === last ? 'meet' : 'slice'}
              className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-900/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-6">
              <div>
                <p className="text-[11px] tracking-[0.2em] text-gold-light">{String(i + 1).padStart(2, '0')}</p>
                <h3 className={`font-serif font-medium leading-none text-white ${i === 0 ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>
                  {c.name}
                </h3>
                <p className="mt-2 hidden text-xs text-white/85 sm:block">{c.blurb}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/60 text-white transition-colors group-hover:bg-white group-hover:text-plum-800">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
