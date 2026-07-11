const SERVICES = [
  {
    title: "Wedding Cakes",
    description:
      "Custom-designed wedding cakes built around your story, your colors, and your vision for the day.",
  },
  {
    title: "Birthday Cakes",
    description:
      "One-of-a-kind birthday cakes for every age, from milestone celebrations to everyday joy.",
  },
  {
    title: "Custom Celebration Cakes",
    description:
      "Anniversaries, showers, graduations — a beautifully crafted cake for every occasion worth celebrating.",
  },
  {
    title: "Family Recipe Specialties",
    description:
      "Treasured family recipes reimagined with the same care and love they've always been made with.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            What We Create
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            Cakes, Made Personal
          </h2>
          <p className="mt-4 text-cocoa/70">
            Every order starts with a conversation, not a menu.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-gold/20 bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <h3 className="text-display text-2xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-cocoa/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
