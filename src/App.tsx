// Types
type Feature = {
  title: string;
  description: string;
};

// Données
const features: Feature[] = [
  {
    title: 'Formule éco-responsable',
    description:
      'Nos pastilles concentrées réduisent drastiquement l’utilisation de plastique et offrent une mousse riche qui respecte votre peau.',
  },
  {
    title: 'Utilisation simplifiée',
    description:
      'Ajoutez simplement de l’eau, insérez une pastille et profitez instantanément d’un savon moussant doux et efficace.',
  },
  {
    title: 'Fraîcheur longue durée',
    description:
      'Chaque parfum est élaboré pour accompagner votre routine quotidienne avec une sensation de propreté durable.',
  },
];

// Logo (SVG inline)
const Logo = () => (
  <svg
    className="w-28 text-emerald-300 sm:w-36"
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="logoTitle logoDesc"
  >
    <title id="logoTitle">Logo AquaDrop</title>
    <desc id="logoDesc">Une goutte d’eau contenant une pastille pétillante</desc>
    <defs>
      <linearGradient id="drop" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#9AF6E3" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <radialGradient
        id="tablet"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(70 85) scale(28)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#F9FAFB" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#D1FAE5" stopOpacity="0.3" />
      </radialGradient>
    </defs>
    <path
      d="M70 10C70 10 22 66 22 96C22 120.301 43.699 138 68 138C92.301 138 114 120.301 114 96C114 66 70 10 70 10Z"
      fill="url(#drop)"
    />
    <circle cx="70" cy="85" r="26" fill="url(#tablet)" />
    <circle cx="70" cy="85" r="14" fill="#ECFEFF" opacity="0.9" />
    <circle cx="70" cy="85" r="6" fill="#10B981" opacity="0.8" />
    <path
      d="M70 34C70 34 44 66 44 90C44 109.882 58.118 124 78 124"
      stroke="#047857"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

// Bottle doit être défini AVANT ProductIllustration
type BottleProps = {
  x: number;
  tone: string;
  accent: string;
};

const Bottle = ({ x, tone, accent }: BottleProps) => (
  <g transform={`translate(${x - 80} 80)`}>
    <rect x="60" y="16" width="40" height="28" rx="8" fill={accent} opacity="0.65" />
    <path d="M76 44h8v24h-8z" fill={accent} opacity="0.35" />
    <rect x="52" y="64" width="56" height="210" rx="28" fill={tone} />
    <rect x="52" y="64" width="56" height="210" rx="28" fill="#FFFFFF" fillOpacity="0.16" />
    <rect x="60" y="104" width="40" height="104" rx="20" fill={accent} fillOpacity="0.35" />
    <rect x="68" y="128" width="24" height="52" rx="12" fill={accent} fillOpacity="0.6" />
    <path d="M56 272h48c0 16-12 28-24 28s-24-12-24-28z" fill="#0F172A" fillOpacity="0.45" />
    <circle cx="80" cy="214" r="6" fill="#F8FAFC" opacity="0.6" />
    <circle cx="96" cy="146" r="4" fill="#F8FAFC" opacity="0.5" />
    <circle cx="72" cy="176" r="3" fill="#F8FAFC" opacity="0.35" />
  </g>
);

// Illustration produit (utilise Bottle)
const ProductIllustration = () => (
  <svg
    className="w-full max-w-xl"
    viewBox="0 0 520 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="productTitle productDesc"
  >
    <title id="productTitle">Présentation du produit AquaDrop</title>
    <desc id="productDesc">Trois flacons de savon moussant avec des bulles et des reflets lumineux</desc>
    <rect x="20" y="30" width="480" height="360" rx="36" fill="url(#bg)" />
    <g filter="url(#glow)">
      <circle cx="120" cy="140" r="42" fill="#6EE7B7" fillOpacity="0.5" />
      <circle cx="400" cy="110" r="48" fill="#99F6E4" fillOpacity="0.45" />
      <circle cx="300" cy="320" r="60" fill="#5EEAD4" fillOpacity="0.35" />
    </g>
    <g filter="url(#shadow)">
      <ellipse cx="160" cy="320" rx="72" ry="22" fill="#064E3B" fillOpacity="0.45" />
      <ellipse cx="260" cy="340" rx="80" ry="24" fill="#064E3B" fillOpacity="0.38" />
      <ellipse cx="360" cy="320" rx="72" ry="22" fill="#064E3B" fillOpacity="0.45" />
    </g>
    <Bottle x={120} tone="#F0FDFA" accent="#34D399" />
    <Bottle x={260} tone="#ECFEFF" accent="#14B8A6" />
    <Bottle x={400} tone="#FEFCE8" accent="#FACC15" />
    <defs>
      <linearGradient id="bg" x1="20" y1="30" x2="500" y2="390" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#022C22" />
        <stop offset="100%" stopColor="#064E3B" />
      </linearGradient>
      <filter id="shadow" x="60" y="278" width="400" height="120" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="12" result="blur" />
      </filter>
      <filter id="glow" x="40" y="40" width="440" height="320" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="24" result="blur" />
      </filter>
    </defs>
  </svg>
);

// App
function App() {
  return (
    <div className="min-h-screen bg-[#0f1c17] text-white">
      <header className="flex flex-col items-center gap-4 px-6 pt-12 pb-10 text-center">
        <Logo />
        <div>
          <p className="uppercase tracking-[0.4em] text-sm text-emerald-300">AquaDrop</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Savon moussant durable</h1>
          <p className="mt-3 max-w-2xl text-base text-emerald-100 sm:text-lg">
            Découvrez une solution innovante pour garder vos mains propres tout en réduisant votre impact environnemental. AquaDrop offre une mousse généreuse, des parfums raffinés et un design élégant.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16">
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-800">
          <div className="grid items-center gap-8 p-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">La nouvelle génération de savon moussant</h2>
              <p className="mt-4 text-base text-emerald-100 sm:text-lg">
                AquaDrop combine élégance et efficacité. Trois univers parfumés – Sport, Eco et Sans Fragrance – répondent à toutes vos envies. Chaque flacon rechargeable est pensé pour durer et réduire les déchets plastiques.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-emerald-700/60 px-4 py-2 text-sm font-medium uppercase tracking-wide">
                  Rechargeable
                </span>
                <span className="rounded-full bg-emerald-700/60 px-4 py-2 text-sm font-medium uppercase tracking-wide">
                  Sans plastique inutile
                </span>
                <span className="rounded-full bg-emerald-700/60 px-4 py-2 text-sm font-medium uppercase tracking-wide">
                  Made in France
                </span>
              </div>
            </div>
            <figure className="flex justify-center">
              <ProductIllustration />
            </figure>
          </div>
        </section>

        <section>
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Pourquoi choisir AquaDrop ?</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl bg-emerald-900/70 p-6 shadow-lg shadow-emerald-950/40 transition-transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-emerald-100">{feature.title}</h3>
                <p className="mt-3 text-sm text-emerald-200 sm:text-base">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-emerald-700/40 bg-emerald-900/70 p-8 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Prêt à transformer votre routine ?</h2>
          <p className="mt-3 text-base text-emerald-100 sm:text-lg">
            Rejoignez la communauté AquaDrop et profitez d’un savon moussant haut de gamme, économique et respectueux de la planète.
          </p>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-emerald-950 transition hover:bg-emerald-300">
            Commander maintenant
          </button>
        </section>
      </main>

      <footer className="border-t border-emerald-800/60 bg-emerald-950/40 py-8 text-center text-sm text-emerald-200">
        © {new Date().getFullYear()} AquaDrop. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;

