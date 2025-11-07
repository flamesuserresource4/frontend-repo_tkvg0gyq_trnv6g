import { useEffect, useMemo, useState } from 'react';
import { Rocket, Timer, PlayCircle, Shield } from 'lucide-react';

function useCountdown(hours = 24) {
  const target = useMemo(() => Date.now() + hours * 60 * 60 * 1000, [hours]);
  const [remaining, setRemaining] = useState(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setRemaining(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');

  return { h, m, s };
}

export default function LeadCaptureSection() {
  const { h, m, s } = useCountdown(24);
  const [form, setForm] = useState({ name: '', email: '', agree: false, choice: 'pdf' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.agree) return;
    console.log('Lead captured:', form);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-purple-700/10 to-red-600/20" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-fuchsia-200/90">
              <Rocket className="h-3.5 w-3.5" />
              Tunnel IA pour contenus viraux
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Débloquez 1000€+/mois avec l’IA et des vidéos virales
            </h1>
            <p className="mt-4 max-w-xl text-white/70">
              Reçois le PDF exclusif « 10 outils IA gratuits » ou un mini-cours vidéo sur 3 jours. Inscris-toi pour commencer.
            </p>

            {!submitted ? (
              <form onSubmit={onSubmit} className="mt-8 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Prénom"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-fuchsia-400/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 focus:border-fuchsia-400/50"
                    required
                  />
                </div>

                <div className="flex gap-4 pt-1 text-sm text-white/80">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="choice"
                      checked={form.choice === 'pdf'}
                      onChange={() => setForm((f) => ({ ...f, choice: 'pdf' }))}
                      className="h-4 w-4 text-fuchsia-500 focus:ring-fuchsia-500"
                    />
                    PDF « 10 outils IA »
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="choice"
                      checked={form.choice === 'cours'}
                      onChange={() => setForm((f) => ({ ...f, choice: 'cours' }))}
                      className="h-4 w-4 text-fuchsia-500 focus:ring-fuchsia-500"
                    />
                    Mini-cours 3 jours
                  </label>
                </div>

                <label className="flex items-start gap-2 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm((f) => ({ ...f, agree: e.target.checked }))}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-fuchsia-500 focus:ring-fuchsia-500"
                  />
                  J’accepte de recevoir des emails (désinscription en 1 clic).
                </label>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110 focus:outline-none"
                    disabled={!form.email || !form.agree}
                  >
                    <PlayCircle className="h-5 w-5" />
                    Je commence maintenant
                  </button>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Shield className="h-4 w-4" />
                    0 spam • Annulation à tout moment
                  </div>
                </div>
              </form>
            ) : (
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-white/90">
                Merci {form.name || '!'} 🎉 — vérifie ta boîte mail pour le premier contenu.
              </div>
            )}

            <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80">
              <Timer className="h-4 w-4 text-fuchsia-400" />
              Offre limitée: <span className="ml-2 font-mono text-lg">{h}:{m}:{s}</span>
            </div>
          </div>

          <div className="relative h-[360px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-1 sm:h-[440px]">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(139,92,246,0.25),transparent_45%)]" />
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="rounded-xl border border-white/10 bg-black/40 p-6 text-center backdrop-blur">
                <p className="text-sm uppercase tracking-widest text-white/60">Prévisualisation</p>
                <p className="mt-2 text-2xl font-bold">Style TikTok/YouTube</p>
                <p className="mt-2 max-w-xs text-white/60">Animations, micro-interactions et design néon pensés pour convertir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
