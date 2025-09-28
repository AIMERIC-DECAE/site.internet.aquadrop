const features = [
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

function App() {
  return (
    <div className="min-h-screen bg-[#0f1c17] text-white">
      <header className="flex flex-col items-center gap-4 px-6 pt-12 pb-10 text-center">
        <img
          src="/images/aquadrop-logo.svg"
          alt="Logo AquaDrop"
          className="w-28 sm:w-36"
        />
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
              <img
                src="/images/aquadrop-product.svg"
                alt="Présentation du produit AquaDrop"
                className="w-full max-w-xl"
              />
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
