import { useRef } from "react";
import { explainerVideoMp4, explainerVideoPoster } from "../data/freeMedia";

export function ExplainerSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="border-y border-[#2C4A6E]/20 bg-gradient-to-b from-[#0f172a] via-[#152435] to-[#0a1628] px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#FF8F5E]">Presentazione</p>
        <h2 className="font-luxury-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Ambito del servizio e differenza rispetto ai portali generici
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#cbd5e1]">
          Organizzazione per verticali di settore, livelli di dettaglio progressivi sui profili, tempi di risposta
          definiti (con riferimento alle quarantotto ore ove applicabile). Indirizzato a imprese e candidati che
          richiedono un percorso strutturato.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={explainerVideoPoster}
            aria-label="Video di presentazione del servizio Lavoro48h"
          >
            <source src={explainerVideoMp4} type="video/mp4" />
            Il tuo browser non supporta il video HTML5.
          </video>
        </div>
      </div>
    </section>
  );
}
