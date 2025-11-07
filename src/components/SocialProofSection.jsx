import { Users, ThumbsUp, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Nadia',
    role: 'Créatrice TikTok',
    quote: "+12k abonnés en 30 jours grâce aux scripts IA. J'ai vendu mes 1ers produits digitaux !",
  },
  {
    name: 'Amine',
    role: 'YouTube Automation',
    quote: "La méthode m'a aidé à lancer 3 chaînes faceless. 1 vidéo a dépassé 800k vues.",
  },
  {
    name: 'Claire',
    role: 'Freelance Social Media',
    quote: "J'utilise les prompts pour mes clients, le ROI est dingue. +2 nouveaux contrats.",
  },
];

export default function SocialProofSection() {
  return (
    <section className="bg-black py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center gap-2 text-fuchsia-300">
          <Users className="h-5 w-5" />
          <span className="text-sm uppercase tracking-widest">Preuves sociales</span>
        </div>
        <h2 className="mt-3 text-center text-3xl font-bold sm:text-4xl">Ils ont obtenu des résultats</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <BadgeCheck className="absolute right-4 top-4 h-5 w-5 text-fuchsia-400" />
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/60">{t.role}</p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs text-white/70">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  Validé
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
