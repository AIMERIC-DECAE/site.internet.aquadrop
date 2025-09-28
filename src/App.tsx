const LogoMark = () => (
  <div className="inline-flex items-center gap-4 self-start rounded-3xl bg-neutral-950/80 px-5 py-3 shadow-2xl shadow-black/40 ring-1 ring-amber-500/30 backdrop-blur">
    <svg
      className="h-14 w-14"
      viewBox="0 0 120 120"
      role="img"
      aria-labelledby="aquadrop-logo-title"
    >
      <title id="aquadrop-logo-title">AquaDrop</title>
      <defs>
        <linearGradient id="drop-fill" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2CA6B5" />
          <stop offset="100%" stopColor="#0D6E78" />
        </linearGradient>
        <linearGradient id="stone-fill" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A5E5E8" />
          <stop offset="100%" stopColor="#3AADB5" />
        </linearGradient>
      </defs>
      <path
        d="M60 6C60 6 22 60 22 86c0 23.748 17.76 38 38 38s38-14.252 38-38C98 60 60 6 60 6Z"
        fill="url(#drop-fill)"
        stroke="#8C6239"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <ellipse
        cx="60"
        cy="86"
        rx="32"
        ry="20"
        fill="url(#stone-fill)"
        stroke="#8C6239"
        strokeWidth="5"
      />
      <path
        d="M92 88c0 10.493-14.327 19-32 19s-32-8.507-32-19"
        fill="none"
        stroke="#D8B177"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="28" cy="66" r="4" fill="#F4E4C9" stroke="#8C6239" strokeWidth="2" />
      <circle cx="96" cy="66" r="4" fill="#F4E4C9" stroke="#8C6239" strokeWidth="2" />
      <circle cx="40" cy="54" r="3" fill="#E8CFA3" />
      <circle cx="80" cy="54" r="3" fill="#E8CFA3" />
      <circle cx="60" cy="44" r="3.5" fill="#F4E4C9" stroke="#8C6239" strokeWidth="1.5" />
    </svg>
    <span className="font-serif text-2xl tracking-[0.25em] text-amber-100 sm:text-3xl">AquaDrop</span>
  </div>
);

const products = [
  {
    name: "Ritual d'Aqua",
    description:
      "Un rituel de bain revigorant infusé d'algues marines et de jasmin pour un moment de sérénité absolue.",
    price: "38 €",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brume Éthérée",
    description:
      "Brume d'intérieur à la fleur de lotus qui enveloppe la pièce d'une douceur veloutée et subtilement boisée.",
    price: "24 €",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sérum Opaline",
    description:
      "Un concentré précieux de cerisier et de lait de riz qui illumine la peau et la laisse délicatement parfumée.",
    price: "46 €",
    image:
      "https://images.unsplash.com/photo-1598514982833-5c319af0b4c2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bougie Céleste",
    description:
      "Cire naturelle coulée à la main, notes d'ambre et de vanille, contenant en céramique réutilisable.",
    price: "32 €",
    image:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-amber-50">
      <header className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80"
          alt="Ambiance spa luxueuse"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-900/55 to-neutral-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-900/40" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-12 px-6 py-24 sm:px-10 lg:px-16">
          <LogoMark />
          <div className="inline-flex items-center gap-3 self-start rounded-full bg-amber-500/20 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-amber-200 backdrop-blur-md">
            Nouveauté
          </div>
          <div className="max-w-xl space-y-6 text-amber-100">
            <p className="text-sm uppercase tracking-[0.6em] text-amber-300/80">
              AquaDrop Ritual Collection
            </p>
            <h1 className="text-4xl font-light leading-tight text-amber-50 sm:text-5xl lg:text-6xl">
              La sérénité inspire chaque geste de soin
            </h1>
            <p className="text-base leading-relaxed text-amber-100/80 sm:text-lg">
              Une harmonie délicate de textures sensorielles et de fragrances profondes, imaginée pour
              transformer votre routine quotidienne en cérémonial précieux.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-900 shadow-lg shadow-black/20 transition hover:bg-amber-300">
                Découvrir la collection
              </button>
              <button className="rounded-full border border-amber-200/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200 transition hover:bg-amber-200/10">
                Explorer nos rituels
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate px-6 pb-24 pt-28 sm:px-10 lg:px-16">
          <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.5em] text-amber-400/80">Éditions limitées</p>
                <h2 className="text-3xl font-light text-amber-50 sm:text-4xl">Packshots sculpturaux</h2>
                <p className="max-w-xl text-base leading-relaxed text-neutral-300">
                  Chaque produit est mis en scène dans une lumière douce et minérale pour révéler l'éclat des
                  textures et souligner un univers raffiné digne des vitrines Rituals.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200 transition hover:text-amber-100"
              >
                Voir tous les produits
                <span aria-hidden="true" className="text-lg">→</span>
              </a>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-neutral-900/80 shadow-xl shadow-black/40 ring-1 ring-amber-500/10 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:shadow-black/60"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/40" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-6 pb-10 pt-8">
                    <div className="space-y-3">
                      <h3 className="text-xl font-medium tracking-wide text-amber-100">{product.name}</h3>
                      <p className="text-sm leading-relaxed text-neutral-300">{product.description}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-base font-semibold text-amber-300">{product.price}</span>
                      <button className="rounded-full border border-amber-500/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-amber-200 transition hover:border-amber-400 hover:text-amber-100">
                        Ajouter
                      </button>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-10 bottom-6 h-12 rounded-full bg-amber-400/10 blur-3xl transition duration-700 group-hover:opacity-0" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800/80 bg-neutral-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} AquaDrop Rituals. Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition hover:text-amber-100">
              Mentions légales
            </a>
            <a href="#" className="transition hover:text-amber-100">
              Politique de confidentialité
            </a>
            <a href="#" className="transition hover:text-amber-100">
              Nous contacter
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
