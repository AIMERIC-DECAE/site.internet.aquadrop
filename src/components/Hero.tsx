const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-aquadrop-bg-deep py-24">
      <div className="container relative z-10 grid gap-16 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-aquadrop-ink-primary/70">
            AquaDrop Collection
          </p>
          <h1 className="mt-6 text-balance text-5xl leading-[1.05] sm:text-6xl">
            Rituels durables pour des mains impeccables
          </h1>
          <p className="mt-6 text-lg text-aquadrop-neutral-100/90 sm:max-w-lg">
            Pastilles concentrées et flacon mousseur réutilisable : une expérience premium, écologique et économique qui sublime
            chaque lavage de mains.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="btn-primary" href="#collection">
              Découvrir Aquadrop
            </a>
            <a className="btn-secondary" href="#recharges">
              Voir la recharge
            </a>
          </div>
          <dl className="mt-12 grid gap-6 text-sm text-aquadrop-neutral-100/70 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.36em] text-aquadrop-ink-primary/80">
                Impact
              </dt>
              <dd className="mt-2 text-base text-aquadrop-neutral-100">-92% de plastique</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.36em] text-aquadrop-ink-primary/80">
                Mousse
              </dt>
              <dd className="mt-2 text-base text-aquadrop-neutral-100">Dense & soyeuse</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.36em] text-aquadrop-ink-primary/80">
                Durée
              </dt>
              <dd className="mt-2 text-base text-aquadrop-neutral-100">30 jours / recharge</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex justify-center">
          <div
            className="relative aspect-[3/4] w-full max-w-md rounded-[24px] border border-white/8 bg-aquadrop-surface-1/80 p-8 shadow-aquadrop-soft"
            aria-hidden="true"
          >
            <div className="absolute inset-0 -z-10 rounded-[24px] border border-aquadrop-ink-primary/10" />
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4">
                <span className="badge-sand">Starter</span>
                <h2 className="text-2xl leading-tight text-aquadrop-ink-primary">
                  Flacon mousseur en verre fumé
                </h2>
                <p className="text-sm text-aquadrop-neutral-100/80">
                  Un design intemporel aux lignes mates, conçu pour durer et valoriser vos recharges.
                </p>
              </div>
              <div className="relative mt-8 flex flex-1 items-end justify-center">
                <div className="relative h-64 w-36 rounded-[18px] bg-aquadrop-accent-teal/90">
                  <div className="absolute inset-x-4 top-5 h-20 rounded-[14px] bg-aquadrop-accent-sand/90" />
                  <div className="absolute inset-x-6 bottom-6 h-28 rounded-[12px] bg-white/15" />
                </div>
                <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full border border-aquadrop-ink-primary/30 bg-aquadrop-accent-olive/40 backdrop-blur-sm" />
                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-aquadrop-ink-primary/30 bg-aquadrop-accent-teal/30" />
              </div>
              <p className="mt-10 text-xs uppercase tracking-[0.32em] text-aquadrop-neutral-700">
                Rechargeable · Nettoyage sensoriel
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aquadrop-accent-teal/10 blur-3xl" />
    </section>
  );
};

export default Hero;
