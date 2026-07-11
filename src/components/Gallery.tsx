const SHOWCASE = [
  "Blush & Gold Tiers",
  "Floral Wedding Cake",
  "Minimalist Elegance",
  "Garden Party Celebration",
  "Classic Buttercream",
  "Modern Geometric Design",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Cakes
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            A Taste of Our Work
          </h2>
          <p className="mt-4 text-cocoa/70">
            See more on Instagram{" "}
            <a
              href="https://instagram.com/o.z.cake"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose hover:underline"
            >
              @o.z.cake
            </a>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((label) => (
            <div
              key={label}
              className="group aspect-square overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-blush via-cream to-gold-soft shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="h-px w-10 bg-gold" />
                <span className="text-display text-lg italic text-cocoa">
                  {label}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-cocoa/45">
                  Photo Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/o.z.cake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cocoa transition hover:border-gold hover:bg-gold-soft/20"
          >
            See More on Instagram @o.z.cake
          </a>
        </div>
      </div>
    </section>
  );
}
