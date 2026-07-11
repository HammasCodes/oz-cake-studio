const STEPS = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Text, DM us on Instagram, or send an email with your event date and a few details about what you're imagining.",
  },
  {
    number: "02",
    title: "Tell Us Your Dream",
    description:
      "We'll talk through flavors, design, and inspiration together — no fixed menu, no set price list. Just your vision.",
  },
  {
    number: "03",
    title: "We Create Your Cake",
    description:
      "Your custom cake is designed and baked specifically for your celebration, ready for your big day.",
  },
];

export default function HowToOrder() {
  return (
    <section id="order" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            How To Order
          </p>
          <h2 className="text-display mt-3 text-4xl font-semibold text-ink sm:text-5xl">
            No Cart. Just a Conversation.
          </h2>
          <p className="mt-4 text-cocoa/70">
            We're a custom studio, not a shop with a fixed price list.
            Every cake starts with a simple message.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gold/20 bg-ivory p-8 text-center shadow-sm"
            >
              <span className="text-display text-4xl font-semibold text-gold">
                {step.number}
              </span>
              <h3 className="text-display mt-3 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-cocoa/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="sms:+18438721326"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose to-gold px-8 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-md transition hover:shadow-lg"
          >
            Text to Order
          </a>
          <a
            href="https://instagram.com/o.z.cake"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-medium uppercase tracking-wider text-cocoa transition hover:border-gold hover:bg-gold-soft/20"
          >
            DM on Instagram
          </a>
          <a
            href="mailto:ozcakestudio@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-medium uppercase tracking-wider text-cocoa transition hover:border-gold hover:bg-gold-soft/20"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
