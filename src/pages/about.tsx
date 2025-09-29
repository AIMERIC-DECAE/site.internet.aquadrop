function About() {
  return (
    <section className="bg-aquadrop-bg-deep py-24">
      <div className="container flex flex-col items-center justify-center gap-12 text-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-aquadrop-ink-primary/70">
            Fondateur Aquadrop
          </p>
          <h1 className="text-4xl font-bold text-aquadrop-ink-primary mb-6">À propos de moi</h1>
          <div className="mx-auto flex max-w-2xl flex-col gap-5 text-center text-aquadrop-ink-body leading-relaxed">
            <p>
              <span className="font-semibold text-aquadrop-neutral-100">Prénom :</span> Aimeric Decae
            </p>
            <p>
              <span className="font-semibold text-aquadrop-neutral-100">Âge :</span> 16 ans
            </p>
            <p>
              <span className="font-semibold text-aquadrop-neutral-100">Parcours :</span> étudiant en 5e secondaire en Belgique,
              passionné d’entrepreneuriat et de technologie.
            </p>
            <p>
              <span className="font-semibold text-aquadrop-neutral-100">Mon projet :</span> Aquadrop, une mini-entreprise qui
              réduit le plastique grâce à des pastilles de savon rechargeables.
            </p>
            <p>
              Ma motivation est de proposer une expérience sensorielle raffinée tout en défendant un avenir sans plastique à
              usage unique. Ma vision pour Aquadrop est de démontrer qu’un geste quotidien peut devenir un acte responsable,
              élégant et durable.
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-aquadrop-ink-primary/60 via-aquadrop-neutral-700 to-aquadrop-bg-deep shadow-aquadrop-soft"
        >
          <span className="text-4xl font-semibold tracking-[0.2em] text-white/80">AD</span>
        </div>
      </div>
    </section>
  );
}

export default About;
