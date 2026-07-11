const PHONE_DISPLAY = "843-872-1326";
const INSTAGRAM_HANDLE = "@o.z.cake";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <p className="text-display text-base font-semibold tracking-wide text-ink">
          O.Z. <span className="text-rose">Cake Studio</span>
        </p>
        <p className="text-sm text-cocoa/60">
          {`Mt Pleasant, SC · ${PHONE_DISPLAY} · ${INSTAGRAM_HANDLE}`}
        </p>
        <p className="text-xs text-cocoa/45">
          {`© ${new Date().getFullYear()} O.Z. Cake Studio. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
