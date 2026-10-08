interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export default function SectionHeading({ eyebrow, title, intro, align = 'left', as: Tag = 'h2' }: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-[34px] font-medium leading-[1.1] sm:text-4xl lg:text-[44px]">{title}</Tag>
      {intro && <p className="mt-4 text-[15px] leading-relaxed text-charcoal/80 sm:text-base">{intro}</p>}
    </div>
  );
}
