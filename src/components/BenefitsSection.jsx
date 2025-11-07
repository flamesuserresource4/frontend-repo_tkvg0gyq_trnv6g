import { Star, CheckCircle2, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: "Scripts IA qui convertissent",
    desc: "Accède à 100 prompts et scripts optimisés pour TikTok & YouTube.",
    icon: Sparkles,
  },
  {
    title: "Étapes claires, résultats rapides",
    desc: "Suis un plan d'action jour par jour pour atteindre 1000€/mois.",
    icon: CheckCircle2,
  },
  {
    title: "Preuves sociales",
    desc: "Stratégies validées par des créateurs avec 1M+ de vues.",
    icon: Star,
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative bg-neutral-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-600/10 via-transparent to-red-600/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Pourquoi ça fonctionne</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Méthodologie orientée conversion, basée sur l'IA, testée sur des centaines de contenus.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-fuchsia-500/40 hover:bg-white/[0.06]">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/30 to-red-600/30 text-fuchsia-200">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
