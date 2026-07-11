const AREAS = ["Charleston", "Mt Pleasant", "Isle of Palms", "Kiawah Island"];

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Story
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            A Family Studio,
            <br />
            <span className="italic text-rose">Built On Trust.</span>
          </h2>
          <p className="mt-6 text-lg text-cocoa/75">
            O.Z. Cake Studio started in 2017 the simplest way possible
            &mdash; friends asking Sergii and Olga Zlati to make a cake for
            their wedding, and word of mouth taking it from there. There
            was never a storefront to walk past or an ad that brought
            people in. Just cakes people loved, and the people they told.
          </p>
          <p className="mt-4 text-lg text-cocoa/75">
            Today, we're a family-owned studio serving Charleston and the
            surrounding Lowcountry, still built the same way: one
            conversation, one cake, one celebration at a time. Our
            approach to design is artistic and non-standard &mdash; we
            don't work from a fixed catalog, because your cake shouldn't
            look like everyone else's.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-gold/30 bg-gold-soft/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cocoa"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="flex gap-5 rounded-2xl border border-gold/20 bg-ivory p-6 shadow-sm">
            <span className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-rose to-gold" />
            <div>
              <h3 className="text-display text-xl font-semibold text-ink">
                Started From Word of Mouth
              </h3>
              <p className="mt-2 text-cocoa/70">
                Since 2017, our best advertising has always been a happy
                guest at someone else's wedding.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border border-gold/20 bg-ivory p-6 shadow-sm">
            <span className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-rose to-gold" />
            <div>
              <h3 className="text-display text-xl font-semibold text-ink">
                Serving the Lowcountry
              </h3>
              <p className="mt-2 text-cocoa/70">
                From Mt Pleasant to Isle of Palms and Kiawah Island, we
                travel to celebrate with you.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border border-gold/20 bg-ivory p-6 shadow-sm">
            <span className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full bg-gradient-to-b from-rose to-gold" />
            <div>
              <h3 className="text-display text-xl font-semibold text-ink">
                Artistic, Not Off-the-Shelf
              </h3>
              <p className="mt-2 text-cocoa/70">
                Every design is built around you &mdash; there's no
                standard template here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
