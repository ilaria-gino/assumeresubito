import { FAQ_EMPRESA, FAQ_LAVORATORE } from "./faqContent";

/** Schema.org FAQPage per motori di ricerca (contenuto statico FAQ). */
export function buildFaqPageStructuredData() {
  const mainEntity = [...FAQ_EMPRESA, ...FAQ_LAVORATORE].map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
