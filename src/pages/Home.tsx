import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { SECTORS } from "../data/sectors";
import { RoleAvatar } from "../components/RoleAvatar";
import { exampleCandidates, heroEmployer, heroWorker } from "../data/freeMedia";
import { ExplainerSection } from "../components/ExplainerSection";
import { TestimonialsMarquee } from "../components/TestimonialsMarquee";
import { btnDark, btnPrimary, btnSecondary } from "../components/ui/ButtonStyles";

const HERO_BG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85&auto=format&fit=crop";

export function Home() {
  return (
    <>
      {/* Hero full-bleed */}
      <section className="relative flex min-h-[calc(100vh-var(--nav-h))] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/55 via-[#152435]/40 to-[#0a1628]/92"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#FF8F5E]">{BRAND.domain}</p>
            <h1 className="font-luxury-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.25rem]">
              Selezione tra{" "}
              <em className="not-italic text-[#FF8F5E]">imprese</em> e <em className="not-italic text-white/95">candidati</em>
              , con verticali e tempi definiti.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Una <strong className="font-semibold text-white">bacheca on-line</strong> (come un marketplace di annunci),
              non un&apos;agenzia: mettiamo in contatto domanda e offerta con profili a dettaglio progressivo, filtri per
              competenza e <strong className="font-semibold text-white">area in Italia</strong> (regione e città) e, per i
              candidati, <strong className="font-semibold text-white">raggio di spostamento in km</strong> — tempi orientati
              alle 48 ore ove applicabile. Le imprese usano la piattaforma con
              abbonamento <strong className="font-semibold text-white">Starter</strong>,{" "}
              <strong className="font-semibold text-white">Basic</strong> o{" "}
              <strong className="font-semibold text-white">Full</strong>.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link to="/registrazione#azienda" className={btnPrimary}>
                Sono un&apos;azienda
              </Link>
              <Link
                to="/registrazione#candidato"
                className={`${btnSecondary} !border-white/25 !bg-white/10 !from-white/10 !to-white/5 !text-white !shadow-none hover:!border-white/40 hover:!bg-white/15`}
              >
                Cerco lavoro
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2">
            <figure className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <img
                src={heroEmployer}
                alt="Imprenditore o manager che organizza il team in azienda"
                width={400}
                height={500}
                className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:h-56"
                loading="eager"
                decoding="async"
              />
              <figcaption className="border-t border-white/10 bg-[#0f172a]/80 px-4 py-3 text-left text-sm text-white/90">
                <span className="font-bold text-white">Lato azienda</span>
                <span className="mt-0.5 block text-white/70">
                  Ricerche e candidature in linea con ruolo, zona e distanza dichiarata dal candidato.
                </span>
              </figcaption>
            </figure>
            <figure className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:mt-6">
              <div className="relative">
                <img
                  src={heroWorker}
                  alt="Lavoratore con percorso professionale chiaro"
                  width={400}
                  height={500}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 rounded-lg bg-[#0f172a]/90 px-3 py-2 text-xs font-bold text-[#FF8F5E] ring-1 ring-[#FF6B35]/40">
                  Profilo &amp; disponibilità
                </div>
              </div>
              <figcaption className="border-t border-white/10 bg-[#0f172a]/80 px-4 py-3 text-left text-sm text-white/90">
                <span className="font-bold text-white">Lato candidato</span>
                <span className="mt-0.5 block text-white/70">
                  Paese, città e km coerenti tra loro: meno tempo perso per te e per le imprese.
                </span>
              </figcaption>
            </figure>
          </div>

          <dl className="mx-auto mt-12 grid max-w-3xl gap-3 text-sm sm:grid-cols-2 sm:text-left">
            <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white/90 backdrop-blur-sm">
              <dt className="font-semibold text-white">Candidati</dt>
              <dd className="mt-1 text-white/75">
                Percorso <strong className="text-white/90">gratis</strong> se resti tra i profili contattabili; opzione{" "}
                <strong className="text-white/90">a pagamento</strong> per cercare attivamente le aziende.{" "}
                <Link to="/prezzi#piano-cerca-aziende" className="font-semibold text-[#FF8F5E] underline underline-offset-2">
                  Piano 6 mesi
                </Link>
                .
              </dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white/90 backdrop-blur-sm">
              <dt className="font-semibold text-white">Imprese</dt>
              <dd className="mt-1 text-white/75">
                Tre formule: <strong className="text-white/90">Starter</strong>,{" "}
                <strong className="text-white/90">Basic</strong> e <strong className="text-white/90">Full (top)</strong> —
                solo col Full i candidati possono contattarvi se abilitato in contratto. Dettagli in{" "}
                <Link to="/prezzi" className="font-semibold text-[#FF8F5E] underline underline-offset-2">
                  Prezzi
                </Link>
                .
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Anonimato + card esempio */}
      <section className="border-y border-[#e1dbd1] bg-[#f7f5f1] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#3A5F8C]">Prima fase</p>
          <h2 className="font-luxury-display mt-3 text-center text-3xl font-semibold text-[#152435] sm:text-4xl">
            Anonimato controllato
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[#6b7a8d] sm:text-base">
            Le prime informazioni non includono l&apos;identità completa: iniziali, ruolo e rappresentazione visiva. Si
            privilegiano competenza e disponibilità, con tutela della riservatezza fino alle fasi previste.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {exampleCandidates.map((c) => (
              <li key={c.initials}>
                <article className="group relative overflow-hidden rounded-2xl border border-[#e1dbd1] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={c.src}
                      alt={c.alt}
                      width={480}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#152435]/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-mono text-lg font-bold tracking-wider">{c.initials}</p>
                      <p className="text-sm text-[#FFCCBC]">{c.role}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ExplainerSection />

      <section className="border-y border-[#e1dbd1] bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#3A5F8C]">Selezione</p>
          <h2 className="font-luxury-display mt-3 text-center text-3xl font-semibold text-[#152435] sm:text-4xl">
            Esigenze ricorrenti
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#6b7a8d]">
            Molte organizzazioni segnalano criticità analoghe nella ricerca di profili coerenti con ruolo e zona.
          </p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 text-[#152435] sm:grid-cols-3">
            {[
              "Volume di curriculum non allineati al fabbisogno",
              "Tempi di risposta incoerenti con le scadenze operative",
              "Difficoltà a verificare disponibilità reale in fase iniziale",
            ].map((t) => (
              <li
                key={t}
                className="rounded-2xl border border-[#e1dbd1] bg-[#f7f5f1] px-4 py-5 text-center text-sm font-medium leading-snug"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#ece7df]/80 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-luxury-display text-center text-3xl font-semibold text-[#152435] sm:text-4xl">
            Cosa offre il servizio
          </h2>
          <ul className="mx-auto mt-10 grid gap-6 sm:grid-cols-3">
            {[
              "Proposte di candidature coerenti con settore e requisiti indicati",
              "Prima fase con informazioni proporzionate per ridurre attriti nella selezione",
              "Percorsi di contatto con tempi definiti, incluso orientamento a risposta entro 48 ore ove applicabile",
            ].map((t) => (
              <li
                key={t}
                className="rounded-2xl border border-[#2C4A6E]/15 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <span className="text-base font-semibold leading-snug text-[#2C4A6E]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-luxury-display text-center text-3xl font-semibold text-[#152435] sm:text-4xl">
            Come funziona
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[#6b7a8d]">
            <strong className="text-[#152435]">Trasparenza:</strong> i candidati possono iscriversi <strong>senza costi</strong>{" "}
            per essere contattati dalle imprese. Chi vuole anche <strong>cercare attivamente le aziende</strong> può
            sottoscrivere un <strong>piano candidato</strong> a parte (indicativo 99 € / 6 mesi + IVA), come in{" "}
            <Link to="/prezzi#piano-cerca-aziende" className="premium-link">
              Prezzi
            </Link>
            . Le <strong className="text-[#152435]">imprese</strong> usano <strong className="text-[#2C4A6E]">Starter, Basic o Full</strong>{" "}
            con limiti chiari sugli sblocchi profilo.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[#2C4A6E]">Per aziende (imprenditori)</p>
              <ol className="mt-6 space-y-4 text-[#152435]/90">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2C4A6E]/10 font-bold text-[#2C4A6E]">
                    1
                  </span>
                  <span>
                    Ti registri e accetti <strong>privacy</strong> e <strong>condizioni</strong> del servizio (base legale
                    per usare la piattaforma).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2C4A6E]/10 font-bold text-[#2C4A6E]">
                    2
                  </span>
                  <span>
                    Scegli tra <strong>Starter</strong> (mensile, 1 sblocco/mese), <strong>Basic</strong> (annuale, 5
                    sblocchi/anno) o <strong>Full</strong> (annuale, illimitato nel contratto). Nessun accesso gratuito
                    per le imprese. Contratto e condizioni per email o PEC prima dell&apos;attivazione.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2C4A6E]/10 font-bold text-[#2C4A6E]">
                    3
                  </span>
                  <span>Pubblichi la ricerca e ricevi candidati filtrati per settore.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2C4A6E]/10 font-bold text-[#2C4A6E]">
                    4
                  </span>
                  <span>
                    Contatti entro 48 ore ove applicabile; l&apos;onere economico per l&apos;azienda è quello
                    dell&apos;abbonamento scelto, non legato al fatto che tu assuma o meno.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6B35] font-bold text-[#0A0F1C]">
                    ✓
                  </span>
                  <span className="font-semibold text-[#152435]">
                    Il rapporto di lavoro resta tra te e il candidato; la piattaforma fornisce accesso e strumenti secondo
                    il piano.
                  </span>
                </li>
              </ol>
            </div>
            <div className="rounded-3xl border border-[#e1dbd1] bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[#6b7a8d]">Per candidati (lavoratori)</p>
              <ol className="mt-6 space-y-4 text-[#152435]/90">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ece7df] font-bold text-[#152435]">
                    1
                  </span>
                  <span>
                    Scegli: <strong>solo essere contattato</strong> (gratis) oppure anche <strong>cercare le aziende</strong>{" "}
                    (piano a pagamento, dopo attivazione) — vedi{" "}
                    <Link to="/prezzi#piano-cerca-aziende" className="font-semibold text-[#2C4A6E] underline">
                      Prezzi
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ece7df] font-bold text-[#152435]">
                    2
                  </span>
                  <span>
                    Compili <strong>privacy e consensi</strong> e il profilo: <strong>Paese</strong>, località (Italia con
                    regione/città oppure estero con testo libero) e <strong>km</strong> di spostamento in modo coerente —
                    così le imprese non perdono tempo su contatti irrealistici.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ece7df] font-bold text-[#152435]">
                    3
                  </span>
                  <span>
                    Profilo e avatar (pochi minuti); presentazione anonima con iniziali dove previsto.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#152435] font-bold text-white">
                    ✓
                  </span>
                  <span className="font-semibold text-[#152435]">
                    Con il percorso gratis ricevi richieste quando c&apos;è match. Il contatto diretto da te verso
                    l&apos;impresa senza piano candidato resta legato al <strong>Full (top)</strong> lato azienda se
                    abilitato. Con il piano <strong>Cerca aziende</strong> accedi alle funzioni di consultazione imprese
                    dopo pagamento.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e1dbd1] bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-luxury-display text-3xl font-semibold text-[#152435] sm:text-4xl">
            Differenza rispetto ai portali generici
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6b7a8d]">
            Offriamo una <strong className="font-semibold text-[#152435]">bacheca strutturata</strong>, non un servizio di
            agenzia: verticali di settore e percorsi di contatto chiari, per ridurre tempo perso su profili non allineati al
            ruolo o alla zona.
          </p>
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#2C4A6E] via-[#1e3a5f] to-[#0f172a] px-6 py-12 text-white shadow-[0_24px_60px_rgba(21,36,53,0.35)]">
            <h3 className="text-xl font-bold">Perché l&apos;anonimato iniziale</h3>
            <p className="mx-auto mt-4 max-w-2xl text-left text-sm leading-relaxed text-white/80 sm:text-base">
              <strong className="text-white">Per le aziende</strong> consente di valutare esperienza, disponibilità e
              coerenza con la ricerca senza elementi identificativi completi nelle prime fasi.{" "}
              <strong className="text-white">Per i candidati</strong> le informazioni sulle opportunità sono presentate
              in modo proporzionato (ad esempio area geografica e tipo di mansione), così da informare senza esporre dati
              non necessari a chi offre lavoro. Il passaggio successivo a contatti più approfonditi segue le regole del
              servizio e della normativa sulla privacy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {SECTORS.slice(0, 4).map((s, i) => (
                <RoleAvatar
                  key={s.slug}
                  hint={s.avatarHint}
                  initials={["M.R.", "L.B.", "G.T.", "A.F."][i] ?? "?.?"}
                  size="lg"
                  className="ring-4 ring-white/25 shadow-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-luxury-display text-center text-3xl font-semibold text-[#152435] sm:text-4xl">
            Scegli il tuo settore
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[#6b7a8d]">
            Pagine dedicate con messaggi e filtri pensati per il tuo mondo.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/settori/${s.slug}`}
                  className="flex items-center gap-4 rounded-2xl border border-[#e1dbd1] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#FF6B35]/40 hover:shadow-lg"
                >
                  <RoleAvatar hint={s.avatarHint} initials="••" size="sm" />
                  <div>
                    <p className="font-bold text-[#152435]">{s.title}</p>
                    <p className="text-sm text-[#6b7a8d]">{s.roleLabel}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialsMarquee />

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#2C4A6E]/20 bg-gradient-to-b from-[#152435] to-[#0a1628] px-6 py-12 text-center text-white shadow-[0_24px_80px_rgba(15,23,42,0.35)] sm:px-12">
          <h2 className="font-luxury-display text-3xl font-semibold sm:text-4xl">Accesso al servizio</h2>
          <p className="mt-3 text-white/70">
            Candidati: percorso base senza costi; opzione a pagamento per cercare aziende. Imprese: attivazione secondo
            Prezzi.
          </p>
          <Link to="/registrazione" className={`${btnDark} mt-8 border border-white/10`}>
            Vai alla registrazione
          </Link>
        </div>
      </section>
    </>
  );
}
