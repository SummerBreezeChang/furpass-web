export default function Privacy() {
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
        <h1 className="font-display font-bold text-4xl text-fp-navy mb-2">Privacy Policy</h1>
        <p className="text-fp-muted/60 mb-12">Last updated: May 13, 2026</p>
        <div className="prose prose-lg text-fp-muted space-y-8">
          <p>FurPass (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a pet care handoff app that helps pet owners create shareable care guides for anyone watching their pet.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">What FurPass Does</h2>
          <p>FurPass lets pet owners build a care guide — feeding schedule, medication instructions, house rules, daily routine, behavior notes, emergency contacts — and share it via a secure, expiring link with their sitter, family member, or vet. The caretaker opens the link in their browser without downloading the app.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Information We Collect</h2>
          <p><strong>Account Information:</strong> When you sign in with Apple, we receive your Apple user ID and, if you choose, your name and email.</p>
          <p><strong>Pet Information:</strong> Pet name, species, breed, age, weight, photo, allergies, dietary needs, and vet details. Stored on your device.</p>
          <p><strong>Care Guide Content:</strong> House rules (door codes, WiFi passwords, entry instructions), feeding schedules, medication details, treat rules, routines, and behavior notes.</p>
          <p><strong>Share Session Data:</strong> Caretaker&apos;s name and email, date range, which pads are shared. A unique token is generated per session.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">How We Use Your Information</h2>
          <p>We use your information to manage your account, store your care guide on your device, generate secure shareable links, enforce link expiration, and improve the app.</p>
          <p>We do <strong>not</strong> sell your information, display advertising, track behavior across apps, or share data with pet marketplaces.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Sensitive Information</h2>
          <p>FurPass handles home access details (door codes, key locations, WiFi passwords, alarm codes). This is stored locally on your device. When shared, it is only accessible to the specified email for the duration you set. Links expire automatically. You can revoke access anytime.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">How Shared Links Work</h2>
          <p>A unique, time-limited link is generated. It is accessible only to the email you specify. It expires on the end date you set. You can revoke access anytime. After expiration, the link stops working.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Data Storage</h2>
          <p>Data is stored locally using Apple&apos;s SwiftData. If you enable iCloud sync, data is in your personal iCloud under Apple&apos;s privacy protections.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Third-Party Services</h2>
          <p>FurPass uses Apple Sign In for authentication. No third-party analytics, advertising, or tracking services are used.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Children&apos;s Privacy</h2>
          <p>FurPass is for adult pet owners. Not directed at children under 13.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Your Choices</h2>
          <p>View and update all info in the app. Revoke any shared link anytime. To delete your account, email <a href="mailto:contact@summerchain.co" className="text-fp-teal-dark hover:underline">contact@summerchain.co</a>. We delete your data within 30 days.</p>
          <h2 className="font-display font-bold text-2xl text-fp-navy">Contact Us</h2>
          <p>Email: <a href="mailto:contact@summerchain.co" className="text-fp-teal-dark hover:underline">contact@summerchain.co</a></p>
        </div>
      </main>
      <footer className="border-t border-fp-teal/10 mt-16"><div className="max-w-3xl mx-auto px-6 py-6 text-sm text-fp-muted/50 text-center">&copy; 2026 FurPass</div></footer>
    </div>
  )
}
