import { Check, CreditCard, Sparkles } from 'lucide-react';

const features = [
  'Formation complète IA + Contenu Viral',
  '100 prompts prêts à l’emploi',
  'Templates CapCut & scripts VSL',
  'Accès au groupe privé Discord',
  'Garantie 30 jours satisfait ou remboursé',
];

export default function PricingCTASection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-600/10 via-transparent to-red-600/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-fuchsia-200">
              <Sparkles className="h-3.5 w-3.5" />
              Offre spéciale lancement
            </div>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Passe à l’action aujourd’hui</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Accède à la méthode, aux outils et aux scripts qui font la différence. Conçu pour convertir et scaler.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/80">
                  <Check className="mt-0.5 h-5 w-5 text-fuchsia-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold">97€</span>
              <span className="mb-1 text-white/60 line-through">197€</span>
            </div>
            <p className="mt-2 text-sm text-white/70">Prix de lancement — places limitées</p>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110 focus:outline-none">
              <CreditCard className="h-5 w-5" />
              Rejoindre la formation
            </button>
            <p className="mt-3 text-center text-xs text-white/60">Paiement sécurisé • Accès immédiat • 30 jours garantie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
