const steps = [
  { n: '01', title: 'Choose', text: 'Browse the collection and add your favourites to the bag.' },
  { n: '02', title: 'Send', text: 'Tap Order via WhatsApp. Your list and total are filled in for you.' },
  { n: '03', title: 'Confirm', text: 'We confirm availability and delivery details with you directly.' },
];

export default function HowToOrder() {
  return (
    <section className="container-x py-20 lg:py-28" aria-labelledby="how-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Simple ordering</p>
          <h2 id="how-title" className="text-[38px] font-medium leading-[1.05] sm:text-5xl">
            Order in <span className="italic text-plum-700">three steps</span>
          </h2>
        </div>
        <ol className="divide-y divide-charcoal/15 border-y border-charcoal/15">
          {steps.map((s) => (
            <li key={s.n} className="flex items-baseline gap-6 py-6 sm:gap-10 sm:py-8">
              <span className="font-serif text-4xl italic text-gold sm:text-5xl">{s.n}</span>
              <div>
                <h3 className="font-serif text-2xl font-medium sm:text-3xl">{s.title}</h3>
                <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-charcoal/80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
