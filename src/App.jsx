import LeadCaptureSection from './components/LeadCaptureSection.jsx';
import BenefitsSection from './components/BenefitsSection.jsx';
import SocialProofSection from './components/SocialProofSection.jsx';
import PricingCTASection from './components/PricingCTASection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-red-500" />
            <span className="font-semibold tracking-tight">IA Viral Academy</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#lead" className="hover:text-white">Commencer</a>
            <a href="#benefits" className="hover:text-white">Bénéfices</a>
            <a href="#social" className="hover:text-white">Preuves</a>
            <a href="#pricing" className="hover:text-white">Offre</a>
          </nav>
          <a href="#pricing" className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15">Rejoindre</a>
        </div>
      </header>

      <main>
        <div id="lead"><LeadCaptureSection /></div>
        <div id="benefits"><BenefitsSection /></div>
        <div id="social"><SocialProofSection /></div>
        <div id="pricing"><PricingCTASection /></div>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} IA Viral Academy. Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
