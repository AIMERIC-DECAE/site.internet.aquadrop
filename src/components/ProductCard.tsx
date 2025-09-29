type BadgeTone = 'teal' | 'olive' | 'sand';

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  badgeLabel: string;
  badgeTone: BadgeTone;
  options: string[];
};

const badgeClassMap: Record<BadgeTone, string> = {
  teal: 'badge-teal',
  olive: 'badge-olive',
  sand: 'badge-sand',
};

const ProductCard = ({ name, description, price, badgeLabel, badgeTone, options }: ProductCardProps) => {
  return (
    <article className="card" aria-labelledby={`${name.replace(/\s+/g, '-')}-title`}>
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <span className={badgeClassMap[badgeTone]}>{badgeLabel}</span>
          <h3 id={`${name.replace(/\s+/g, '-')}-title`} className="text-balance text-3xl leading-[1.1]">
            {name}
          </h3>
        </div>
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-aquadrop-ink-primary/20 bg-aquadrop-surface-1">
          <div className="absolute inset-2 rounded-full border border-white/10 bg-aquadrop-accent-teal/40" />
          <div className="absolute bottom-3 left-1/2 h-10 w-5 -translate-x-1/2 rounded-full bg-aquadrop-ink-primary/70" />
        </div>
      </header>
      <p className="mt-6 text-sm text-aquadrop-neutral-100/80">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-aquadrop-neutral-100/80">
        <li className="flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-aquadrop-ink-primary/30 text-[10px] font-semibold uppercase tracking-[0.28em] text-aquadrop-ink-primary">
            ECO
          </span>
          Réutilisable, verre épais et pompe inox
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-aquadrop-ink-primary/30 text-[10px] font-semibold uppercase tracking-[0.28em] text-aquadrop-ink-primary">
            30j
          </span>
          Une pastille = 250&nbsp;ml de mousse généreuse
        </li>
      </ul>
      <div className="mt-8 space-y-4">
        <label className="text-xs font-semibold uppercase tracking-[0.32em] text-aquadrop-neutral-700" htmlFor={`${name.replace(/\s+/g, '-')}-options`}>
          Sélectionner la recharge
        </label>
        <select id={`${name.replace(/\s+/g, '-')}-options`}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="text-lg font-semibold text-aquadrop-ink-primary">{price}</p>
        <button type="button" className="btn-primary">
          Ajouter
        </button>
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.28em] text-aquadrop-neutral-700">
        Réutilisable · Moins de plastique
      </p>
    </article>
  );
};

export default ProductCard;
