import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { TitolareAddress } from "../components/legal/TitolareAddress";
import { PremiumPageShell } from "../components/PremiumPageShell";

const section = "mt-8 space-y-4 text-[#152435]/85 leading-relaxed";
const h2 = "mt-12 text-xl font-bold text-[#152435] sm:text-2xl";

export function Privacy() {
  return (
    <PremiumPageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      subtitle="Ai sensi del Regolamento UE 2016/679 (GDPR)"
    >
      <article className="prose-p:leading-relaxed">
        <section className={section}>
          <h2 className={h2}>1. Titolare del trattamento</h2>
          <TitolareAddress />
        </section>

        <section className={section}>
          <h2 className={h2}>2. Tipologia di dati raccolti</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>dati anagrafici</li>
            <li>dati di contatto</li>
            <li>dati professionali (CV, competenze, esperienze)</li>
            <li>dati aziendali</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>3. Finalità del trattamento</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>pubblicazione annunci</li>
            <li>gestione utenti</li>
            <li>accesso ai profili</li>
            <li>obblighi legali</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>4. Modalità di trattamento</h2>
          <p>I dati sono trattati con strumenti informatici, nel rispetto di sicurezza e riservatezza.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>5. Anonimizzazione</h2>
          <p>I dati dei candidati sono inizialmente pubblicati in forma anonimizzata.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>6. Base giuridica</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>consenso (candidati)</li>
            <li>contratto (aziende)</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>7. Conservazione</h2>
          <ul className="list-inside list-disc space-y-2 pl-1">
            <li>candidati: max 12 mesi</li>
            <li>aziende: durata contrattuale + obblighi fiscali</li>
          </ul>
        </section>

        <section className={section}>
          <h2 className={h2}>8. Comunicazione dati</h2>
          <p>I dati possono essere condivisi tra utenti della piattaforma nei limiti del servizio.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>9. Diritti dell&apos;interessato</h2>
          <p>Accesso, modifica, cancellazione, limitazione, opposizione.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>10. Revoca del consenso</h2>
          <p>Possibile in qualsiasi momento.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>11. Sicurezza</h2>
          <p>Sono adottate misure tecniche e organizzative adeguate.</p>
        </section>

        <section className={section}>
          <h2 className={h2}>12. Reclami</h2>
          <p>
            È possibile rivolgersi al Garante per la protezione dei dati personali (
            <a href="https://www.garanteprivacy.it" className="premium-link" target="_blank" rel="noreferrer">
              www.garanteprivacy.it
            </a>
            ).
          </p>
        </section>

        <section className={section}>
          <h2 className={h2}>Cookie e ulteriori informazioni</h2>
          <p>
            Per i cookie e le tecnologie simili:{" "}
            <Link to="/cookie-policy" className="premium-link font-semibold">
              Cookie Policy
            </Link>
            . Dominio del servizio: {BRAND.siteUrl}
          </p>
        </section>

        <p className="mt-12 text-sm text-[#6b7a8d]">
          Ultimo aggiornamento:{" "}
          {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </article>
    </PremiumPageShell>
  );
}
