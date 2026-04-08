import { Link, useParams } from "react-router-dom";
import { getArticleBySlug } from "../data/blog/posts";
import { getBlogVisual } from "../data/blog/covers";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getArticleBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="luxury-page flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-luxury-display text-2xl font-semibold text-[#152435]">Articolo non trovato</h1>
        <Link
          to="/blog"
          className="mt-6 rounded-full border border-[#152435] px-6 py-2 text-sm font-semibold text-[#152435] hover:bg-[#152435] hover:text-white"
        >
          Torna al blog
        </Link>
      </div>
    );
  }

  const v = getBlogVisual(post.slug);

  return (
    <article className="luxury-page font-luxury-sans pb-24">
      {/* Hero articolo */}
      <header className="relative">
        <div className="relative h-[min(52vh,420px)] min-h-[280px] w-full overflow-hidden bg-[#152435]">
          <img
            src={v.coverImage}
            alt={v.imageAlt}
            className="h-full w-full object-cover opacity-95"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#152435] via-[#152435]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#152435]/80 to-transparent sm:w-4/5" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="mx-auto max-w-4xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                <Link to="/blog" className="transition hover:text-white">
                  Blog
                </Link>
                <span className="mx-2 text-white/30" aria-hidden>
                  /
                </span>
                <span className="text-white/60">{v.category}</span>
              </p>
              <h1 className="font-luxury-display mt-4 text-3xl font-semibold leading-[1.15] text-white sm:text-4xl md:text-[2.75rem]">
                {post.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-[0.8rem] text-white/50">
                <time dateTime={post.dateIso}>{post.date}</time>
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
                <span>{post.readTimeMin} min di lettura indicativi</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="-mt-8 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 shadow-lg shadow-amber-900/20" />
        </div>

        {post.disclaimer && (
          <p className="mt-10 rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-white px-5 py-4 text-sm leading-relaxed text-amber-950 shadow-sm">
            <strong className="font-semibold">Nota: </strong>
            {post.disclaimer}
          </p>
        )}

        <p className="mt-10 text-lg leading-relaxed text-slate-700">{post.intro}</p>

        {post.sections.map((section, idx) => (
          <section key={`${post.slug}-sec-${idx}`} className="mt-12">
            {section.heading && (
              <>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-amber-600/60" />
                  <h2 className="font-luxury-display text-2xl font-semibold text-[#152435]">{section.heading}</h2>
                </div>
              </>
            )}
            <div className="mt-4 space-y-4 border-l-2 border-[#ece8e0] pl-5 text-slate-700 leading-relaxed">
              {section.paragraphs.map((p, i) => (
                <p key={`${section.heading ?? "s"}-${i}`} className="text-[0.95rem] leading-[1.75]">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-16 overflow-hidden rounded-2xl border border-[#e1dbd1] bg-gradient-to-br from-white to-[#faf8f5] shadow-lg">
          <div className="border-b border-[#ece8e0] bg-[#152435] px-6 py-5">
            <h2 className="font-luxury-display text-2xl font-semibold text-white">Domande frequenti</h2>
            <p className="mt-2 text-sm text-white/55">
              Sintesi collegata all&apos;argomento — verificate sempre fonti ufficiali e consulenti.
            </p>
          </div>
          <dl className="divide-y divide-[#ece8e0] p-2">
            {post.faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg p-4 transition hover:bg-white/80">
                <dt className="font-luxury-display text-lg font-semibold text-[#152435]">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-14 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-800 underline decoration-amber-600/40 underline-offset-4 transition hover:text-[#152435]"
          >
            ← Tutti gli articoli
          </Link>
        </p>
      </div>
    </article>
  );
}
