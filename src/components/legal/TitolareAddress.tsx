import { TITOLARE } from "../../config/titolare";

export function TitolareAddress() {
  return (
    <address className="not-italic text-[#152435]/90 leading-relaxed">
      <strong className="text-[#152435]">{TITOLARE.ragioneSociale}</strong>
      <br />
      {TITOLARE.indirizzo}
      <br />
      {TITOLARE.cap} {TITOLARE.comune}
      <br />
      Tel: {TITOLARE.tel}
      <br />
      Email:{" "}
      <a className="premium-link" href={`mailto:${TITOLARE.email}`}>
        {TITOLARE.email}
      </a>
      <br />
      PEC:{" "}
      <a className="premium-link" href={`mailto:${TITOLARE.pec}`}>
        {TITOLARE.pec}
      </a>
      <br />
      C.F.: {TITOLARE.cf} – P.IVA: {TITOLARE.piva}
      <br />
      {TITOLARE.cciaa}
    </address>
  );
}
