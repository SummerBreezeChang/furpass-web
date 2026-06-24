import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#security", label: "Privacy" },
] as const;

const STEPS = [
  ["01", "Build your care guide", "Fill in care pads for your pet: house rules, food, medication, routine, emergency contacts."],
  ["02", "Choose what to share", "Pick exactly which pads your sitter sees. Share the door code with family, not the dog walker."],
  ["03", "Send a secure link", "Enter the sitter's name, email, and dates. The link expires automatically when the sitting ends."],
  ["04", "Sitter opens in browser", "No app download, no account needed. A clean, scannable care guide with one-tap emergency calls."],
] as const;

const CARE_PADS = [
  { emoji: "🏠", bg: "#D4FAF9", title: "House rules", desc: "Door code, key location, WiFi, alarm. Plus yes/no rules: furniture, off leash, people food." },
  { emoji: "🍽️", bg: "#FFF3E0", title: "Food & feeding", desc: "Brand, amount, schedule, bowl location, restrictions." },
  { emoji: "💊", bg: "#D6EBFF", title: "Medication", desc: "Dosage, frequency, sitter instructions, side effects. Status badges show what's due." },
  { emoji: "🕐", bg: "#E8F5E9", title: "Daily routine", desc: "A visual timeline of your pet's day from morning walk to bedtime." },
  { emoji: "🧠", bg: "#EDE8FF", title: "Behavior & personality", desc: "Commands, triggers, fears, quirks. Your sitter understands your pet before they meet." },
  { emoji: "🚨", bg: "#FFE0E8", title: "Emergency care", desc: "Step-by-step protocol, vet contacts, and one-tap call buttons for when things go wrong." },
] as const;

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
    </svg>
  );
}

function XCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function Logo({ size = 28, withWordmark = true, className = "", textClass = "text-fp-navy" }: { size?: number; withWordmark?: boolean; className?: string; textClass?: string }) {
  return (
    <span className={`flex items-center gap-2 font-bold ${className}`} style={{ fontFamily: "var(--font-display)" }}>
      <Image
        src="/icon.png"
        alt="FurPass logo"
        width={size}
        height={size}
        priority
        className="rounded-md"
      />
      {withWordmark && <span className={`text-lg ${textClass}`}>FurPass</span>}
    </span>
  );
}

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-[220px] overflow-hidden rounded-[2.25rem] border-[6px] border-fp-navy bg-fp-navy shadow-[0_30px_60px_-20px_rgba(15,23,42,0.45)] sm:w-[240px] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes="240px" className="object-cover" priority />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-fp-bg">

      {/* Navbar */}
      <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
        <div className="flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-5 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <Link href="/" aria-label="FurPass home">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href} className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-fp-teal-soft hover:text-fp-navy">{label}</Link>
            ))}
          </nav>
          <Link href="#download" className="rounded-full bg-fp-pink px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-fp-pink/90">
            Download
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">

        {/* Hero */}
        <section className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center rounded-full border border-fp-teal/20 bg-fp-teal-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fp-teal-dark">
              Now on the App Store
            </div>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-fp-navy sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              Your pet&apos;s whole world, in one secure link.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-fp-muted">
              Build a care guide in minutes. Share a private, expiring link with your sitter — no app required on their end.
            </p>
            <div className="mt-8" id="download">
              <a
                href="#"
                className="group inline-flex w-full max-w-[340px] items-center justify-center gap-4 rounded-2xl bg-fp-navy px-8 py-4 text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)] ring-1 ring-fp-navy/5 transition-all hover:-translate-y-0.5 hover:bg-fp-navy/95 hover:shadow-[0_22px_48px_-18px_rgba(15,23,42,0.6)] sm:max-w-[360px]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <AppleIcon />
                </span>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">Download on the</span>
                  <span className="mt-0.5 text-[22px] font-semibold tracking-tight">App Store</span>
                </span>
              </a>
              <p className="mt-4 text-xs font-medium text-fp-muted">Free · No ads · No subscriptions</p>
            </div>
          </div>

          {/* Phone stack */}
          <div className="relative lg:col-span-6">
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[420px] max-w-md rounded-[40px] bg-gradient-to-br from-fp-teal-soft via-white to-fp-pink-soft blur-2xl" />
            <div className="relative mx-auto flex w-full items-center justify-center gap-6 px-4 py-6 sm:gap-10">
              <Phone
                src="/screens/screen-01.png"
                alt="FurPass care guide home"
                className="relative z-20 -rotate-3"
              />
              <Phone
                src="/screens/screen-11.png"
                alt="Sitter's view in browser"
                className="relative z-10 hidden translate-y-8 rotate-3 sm:block"
              />
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-fp-muted">
              <span aria-hidden>🐾</span>
              Trusted by pet owners who care about privacy
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-fp-teal-dark">How it works</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold leading-snug text-fp-navy sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            From first care pad to sitter handoff — in four steps.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-3xl font-bold text-fp-teal-dark" style={{ fontFamily: "var(--font-display)" }}>{n}</p>
                <h3 className="mt-3 text-base font-semibold text-fp-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fp-muted">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-fp-teal-dark">Care pads</p>
            <h2 className="mt-2 text-3xl font-bold leading-snug text-fp-navy sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Everything your sitter needs, nothing they don&apos;t.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fp-muted">
              Each care pad contains only what your sitter actually needs to know — organised, scannable, and private.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CARE_PADS.map(({ title }) => (
                <li key={title} className="flex items-center gap-3 text-sm font-medium text-fp-navy">
                  <span className="text-fp-teal"><CheckIcon /></span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto,1fr] sm:items-center">
              <div className="flex justify-center sm:justify-start">
                <Phone src="/screens/screen-01.png" alt="Care pads in the FurPass app" />
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CARE_PADS.map(({ emoji, bg, title, desc }) => (
                  <div key={title} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl text-base" style={{ background: bg }}>{emoji}</div>
                    <h3 className="mt-2 text-sm font-semibold text-fp-navy">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-fp-muted">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sitter view */}
        <section className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-br from-fp-teal-soft via-fp-teal-soft to-white p-8 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="flex justify-center lg:col-span-5">
              <Phone src="/screens/screen-11.png" alt="Sitter's view of the care guide" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-fp-teal-dark">Sitter&apos;s view</p>
              <h2 className="mt-2 text-3xl font-bold leading-snug text-fp-navy sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                Sitters open it in their browser. No app. No account.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-fp-muted">
                Just a clean, private care guide with everything they need — accessible in seconds from any phone. The link expires automatically when the sitting ends.
              </p>
              <a href="#download" className="mt-8 inline-flex items-center justify-center rounded-full bg-fp-pink px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-fp-pink/90">
                Download FurPass free
              </a>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mb-20 mt-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-fp-teal-dark">Privacy first</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold leading-snug text-fp-navy sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Your pet&apos;s information stays yours.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fp-teal-soft text-fp-teal-dark">
                <ClockIcon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-fp-navy">Expiring links</h3>
              <p className="mt-2 text-sm leading-relaxed text-fp-muted">Links auto-expire when the sitting ends. Your door code doesn&apos;t live in a text thread forever.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-fp-success">
                <ShieldCheckIcon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-fp-navy">Email-gated access</h3>
              <p className="mt-2 text-sm leading-relaxed text-fp-muted">Only the sitter&apos;s email can open the link. Nobody else can access your pet&apos;s information.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fp-pink-soft text-fp-pink">
                <XCircleIcon />
              </div>
              <h3 className="mt-4 text-lg font-bold text-fp-navy">Revoke anytime</h3>
              <p className="mt-2 text-sm leading-relaxed text-fp-muted">One tap. The link stops working immediately. Full control, always in your hands.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#252A34" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Logo textClass="text-white" />
            <p className="text-xs text-white/50">The safe way to share pet care.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/support" className="transition-colors hover:text-white">Support</Link>
            <a href="mailto:contact@summerchang.co" className="transition-colors hover:text-white">contact@summerchang.co</a>
          </div>
          <p className="text-sm text-white/50">&copy; 2026 FurPass</p>
        </div>
      </footer>
    </div>
  );
}
