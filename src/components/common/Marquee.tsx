const items = ['Skincare', 'Makeup', 'Hair Care', 'Fragrance', 'Body Care', 'Personal Care', 'Order via WhatsApp'];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap font-serif text-xl italic text-plum-900 sm:text-2xl">
          <span className="px-6 sm:px-9">{t}</span>
          <span className="h-1.5 w-1.5 rotate-45 bg-plum-900/60" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden bg-gold-light py-4" role="presentation">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
