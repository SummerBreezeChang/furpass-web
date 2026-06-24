export default function Support() {
  return (
    <div className="min-h-screen bg-fp-bg">
      <nav className="border-b border-fp-teal/10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-fp-teal flex items-center justify-center"><span className="text-white text-sm font-bold">F</span></div>
            <span className="font-display font-bold text-xl text-fp-navy">FurPass</span>
          </a>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display font-bold text-4xl text-fp-navy mb-4">Support</h1>
        <p className="text-lg text-fp-muted mb-12">Need help with FurPass? We&apos;re here for you.</p>
        <div className="space-y-10 text-fp-muted">
          <div className="bg-white rounded-2xl p-8 border border-fp-teal/10">
            <h2 className="font-display font-bold text-xl text-fp-navy mb-3">Contact Us</h2>
            <p className="mb-4">For questions or support, email us at:</p>
            <a href="mailto:contact@summerchain.co" className="text-fp-teal-dark font-semibold text-lg hover:underline">contact@summerchain.co</a>
            <p className="mt-2 text-sm text-fp-muted/60">We typically respond within 24 hours.</p>
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-fp-navy mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Faq q="What is FurPass?" a="A pet care handoff app. Build a care guide — feeding, meds, house rules, routine, behavior — and share a secure link with your sitter. They open it in their browser. No download needed." />
              <Faq q="Does my sitter need the app?" a="No. They receive a link and open it in their phone's browser. Clean, scannable care guide with tap-to-call for emergencies." />
              <Faq q="How do shared links work?" a="Set a date range and sitter's email. FurPass generates a unique link that only works for that email and expires automatically." />
              <Faq q="Can I choose what my sitter sees?" a="Yes. Each care pad can be toggled on or off per share. Share everything with family, only food and meds with a dog walker." />
              <Faq q="Is my door code safe?" a="Links are tied to the sitter's email, expire on your date, and can be revoked instantly. Your info lives in a temporary, controlled link — not a text thread." />
              <Faq q="Can I have multiple pets?" a="Yes. Each pet has their own care guide with separate pads." />
              <Faq q="How do I delete my account?" a="Email contact@summerchain.co. We delete your data within 30 days." />
              <Faq q="Is FurPass free?" a="Yes. Free for all pet owners. No ads, no subscriptions." />
            </div>
          </div>
          <div className="bg-fp-teal-soft rounded-2xl p-8">
            <h2 className="font-display font-bold text-xl text-fp-navy mb-3">Report a Problem</h2>
            <p className="mb-2">Email <a href="mailto:contact@summerchain.co" className="text-fp-teal-dark font-semibold hover:underline">contact@summerchain.co</a> with:</p>
            <ul className="list-disc list-inside space-y-1 text-fp-muted/80 ml-2">
              <li>What you were trying to do</li>
              <li>What happened instead</li>
              <li>Your device model and iOS version</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="border-t border-fp-teal/10 mt-16"><div className="max-w-3xl mx-auto px-6 py-6 text-sm text-fp-muted/50 text-center">&copy; 2026 FurPass</div></footer>
    </div>
  )
}

function Faq({ q, a }: { q: string; a: string }) {
  return (<div className="border-b border-fp-teal/10 pb-5"><h3 className="font-semibold text-fp-navy mb-2">{q}</h3><p className="text-fp-muted/80 leading-relaxed">{a}</p></div>)
}
