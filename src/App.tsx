import Hero from './components/Hero';
import ProductCard from './components/ProductCard';

type Product = {
  name: string;
  description: string;
  price: string;
  badgeLabel: string;
  badgeTone: 'teal' | 'olive' | 'sand';
  options: string[];
};

const products: Product[] = [
  {
    name: 'Coffret Sport Vitalité',
    description:
      'Pastilles vivifiantes eucalyptus + flacon mousseur graphite. Pensé pour accompagner les routines sportives sans compromis sur la douceur.',
    price: '24,90 €',
    badgeLabel: 'Sport',
    badgeTone: 'teal',
    options: ['Recharge x3', 'Recharge x6', 'Starter pack'],
  },
  {
    name: 'Essentiel Eco Pureté',
    description:
      'Un rituel quotidien neutre pour les peaux sensibles : mousse généreuse, parfum discret et flacon durable fabriqué en Europe.',
    price: '22,90 €',
    badgeLabel: 'Eco',
    badgeTone: 'olive',
    options: ['Recharge x3', 'Recharge x9', 'Abonnement mensuel'],
  },
  {
    name: 'Collection Sans Fragrance',
    description:
      'Pastilles hypoallergéniques et flacon sablé : l’allié minimaliste des intérieurs épurés et des mains exigeantes.',
    price: '21,50 €',
    badgeLabel: 'Sans Fragrance',
    badgeTone: 'sand',
    options: ['Recharge x3', 'Recharge x6', 'Recharge x12'],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-aquadrop-bg-deep text-aquadrop-ink-body">
      <header className="border-b border-white/5 bg-aquadrop-bg-deep/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-6">
          <a href="#" className="text-sm font-semibold uppercase tracking-[0.4em] text-aquadrop-ink-primary">
            Aquadrop
          </a>
          <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-aquadrop-neutral-100/70 md:flex">
            <a href="#collection">Collection</a>
            <a href="#engagements">Engagements</a>
            <a href="#recharges">Recharges</a>
          </nav>
          <a className="btn-secondary hidden sm:inline-flex" href="#compte">
            Mon espace
          </a>
        </div>
      </header>

      <main>
        <Hero />

        <section id="collection" className="bg-aquadrop-bg-deep py-24">
          <div className="container">
            <div className="flex flex-col gap-6 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-aquadrop-ink-primary/70">
                Collection signature
              </p>
              <h2 className="text-balance text-4xl leading-tight sm:text-5xl">Des rituels sensoriels, des économies concrètes</h2>
              <p className="mx-auto max-w-3xl text-base text-aquadrop-neutral-100/80 sm:mx-0">
                Chaque coffret associe un flacon mousseur durable à des pastilles concentrées prêtes à l’emploi. Nos accords olfactifs sont pensés pour sublimer votre intérieur tout en réduisant le plastique à usage unique.
              </p>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="engagements"
          className="bg-aquadrop-surface-1/50 py-20"
          aria-labelledby="engagements-title"
        >
          <div className="container grid gap-12 lg:grid-cols-[0.8fr,1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-aquadrop-ink-primary/70">
                Engagements durables
              </p>
              <h2 id="engagements-title" className="mt-4 text-balance text-4xl leading-tight">
                Une expérience luxueuse qui protège la planète
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <article className="space-y-3">
                <h3 className="text-xl leading-tight">Ingrédients sourcés</h3>
                <p className="text-sm text-aquadrop-neutral-100/80">
                  Pastilles formulées en France avec des tensioactifs d’origine végétale, sans sulfates agressifs.
                </p>
              </article>
              <article className="space-y-3">
                <h3 className="text-xl leading-tight">Économie circulaire</h3>
                <p className="text-sm text-aquadrop-neutral-100/80">
                  Emballages recyclables, production maîtrisée et logistique optimisée pour réduire l’empreinte carbone.
                </p>
              </article>
              <article className="space-y-3">
                <h3 className="text-xl leading-tight">Design durable</h3>
                <p className="text-sm text-aquadrop-neutral-100/80">
                  Verre renforcé, finitions mates et pièces remplaçables pour prolonger la durée de vie du flacon.
                </p>
              </article>
              <article className="space-y-3">
                <h3 className="text-xl leading-tight">Expérience sensorielle</h3>
                <p className="text-sm text-aquadrop-neutral-100/80">
                  Trois univers olfactifs équilibrés pour accompagner chaque moment de la journée sans saturation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="recharges" className="bg-aquadrop-bg-deep py-24">
          <div className="container grid gap-12 rounded-[24px] border border-white/5 bg-aquadrop-surface-1/70 p-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-aquadrop-ink-primary/70">
                Recharges intelligentes
              </p>
              <h2 className="text-balance text-4xl leading-tight">
                Des pastilles compactes pour 1 mois de mousse soyeuse
              </h2>
              <p className="text-base text-aquadrop-neutral-100/80">
                Glissez une pastille dans votre flacon, ajoutez de l’eau chaude et profitez d’une mousse dense, sans parabènes ni colorants artificiels. Le format compact réduit l’impact carbone du transport.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-aquadrop-neutral-100/70">
                <span className="rounded-full bg-aquadrop-accent-teal/30 px-4 py-2">Sport</span>
                <span className="rounded-full bg-aquadrop-accent-olive/30 px-4 py-2">Eco</span>
                <span className="rounded-full bg-aquadrop-accent-sand/40 px-4 py-2 text-aquadrop-bg-deep">Sans fragrance</span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-[20px] border border-white/5 bg-aquadrop-bg-deep/80 p-10 shadow-aquadrop-soft">
              <p className="text-sm uppercase tracking-[0.32em] text-aquadrop-ink-primary/70">Routine recommandée</p>
              <ul className="space-y-4 text-sm text-aquadrop-neutral-100/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-aquadrop-ink-primary" aria-hidden="true" />
                  Diluer 200&nbsp;ml d’eau tiède avec 1 pastille.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-aquadrop-ink-primary" aria-hidden="true" />
                  Laisser reposer 6 heures pour révéler la mousse.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-aquadrop-ink-primary" aria-hidden="true" />
                  Agiter avant chaque utilisation pour un nuage velouté.
                </li>
              </ul>
              <a className="btn-primary self-start" href="#collection">
                Choisir ma recharge
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-aquadrop-bg-deep py-10 text-center text-xs uppercase tracking-[0.32em] text-aquadrop-neutral-700">
        © {new Date().getFullYear()} Aquadrop · Durable par nature
      </footer>
    </div>
  );
}

export default App;
