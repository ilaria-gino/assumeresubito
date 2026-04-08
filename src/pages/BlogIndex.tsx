import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../config/brand";
import { ALL_BLOG_ARTICLES } from "../data/blog/posts";
import { BLOG_CATEGORIES, getBlogVisual } from "../data/blog/covers";

export function BlogIndex() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<string>("Tutti");

  const sorted = useMemo(
    () =>
      [...ALL_BLOG_ARTICLES].sort(
        (a, b) => new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime(),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return sorted.filter((post) => {
      const v = getBlogVisual(post.slug);
      const catOk = cat === "Tutti" || v.category === cat;
      if (!catOk) return false;
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
      );
    });
  }, [sorted, search, cat]);

  const [hero, ...rest] = filtered;
  const featuredSide = rest.slice(0, 2);
  const gridPosts = rest.slice(2);
  const recentSidebar = sorted.slice(0, 4);
  const tagSet = new Set(sorted.map((p) => getBlogVisual(p.slug).category));

  return (
    <div className="luxury-page font-luxury-sans pb-20">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[#152435] via-[#1e3a5f] to-[#0f172a] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#FF6B35]/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
              Blog &amp; risorse
            </p>
            <h1 className="font-luxury-display mt-3 text-4xl font-light leading-[1.15] text-white sm:text-5xl">
              Guide e analisi su{" "}
              <span className="font-semibold italic text-amber-100">lavoro, selezione</span>
              <br />
              e diritti
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45">
              Approfondimenti istituzionali su normativa, recruiting e contratti. Ogni articolo si chiude con FAQ.
              Contenuti utili, senza sostituire pareri legali.
            </p>
            <p className="mt-2 text-xs text-white/35">
              Ultimo aggiornamento contenuti: {new Date().toLocaleDateString("it-IT", { month: "long", year: "numeric" })}
            </p>
          </div>
          <div className="relative">
            <label htmlFor="blog-search" className="block text-[0.65rem] font-medium uppercase tracking-wider text-white/35">
              Cerca nel blog
            </label>
            <div className="relative mt-2">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="blog-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Es. smart working, RAL, colloquio…"
                className="w-full rounded-lg border border-white/10 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/40"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Filtri categoria */}
      <div className="border-b border-[#e1dbd1] bg-[#ece8e0]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 [&::-webkit-scrollbar]:hidden">
          {BLOG_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                cat === c
                  ? "border-[#152435] bg-[#152435] text-white shadow-md"
                  : "border-[#e1dbd1] bg-white text-slate-600 hover:border-slate-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 sm:px-6 lg:grid-cols-[1fr_300px] lg:gap-12 lg:pt-12">
        <div>
          {/* In evidenza */}
          {hero && (
            <>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-600/40 to-amber-600/20" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  In evidenza
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-600/40 to-amber-600/20" />
              </div>
              <div
                className={
                  featuredSide.length > 0
                    ? "mb-12 grid gap-4 md:grid-cols-2 md:grid-rows-2"
                    : "mb-12"
                }
              >
                <FeaturedBig post={hero} compact={featuredSide.length === 0} />
                {featuredSide.length > 0 && (
                  <div className="flex flex-col gap-4 md:col-start-2 md:row-start-1 md:row-span-2 md:justify-center">
                    {featuredSide.map((p) => (
                      <FeaturedSmall key={p.slug} post={p} />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {!hero && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white/60 py-16 text-center text-slate-500">
              Nessun articolo corrisponde ai filtri.
            </p>
          )}

          {gridPosts.length > 0 && (
            <>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-200" />
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Tutti gli articoli
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-200" />
              </div>
              <ul className="grid gap-5 sm:grid-cols-2">
                {gridPosts.map((post) => (
                  <li key={post.slug}>
                    <ArticleCard post={post} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-sm">
            <div className="border-b border-[#e1dbd1] bg-gradient-to-r from-white to-[#faf8f5] px-5 py-3">
              <h2 className="font-luxury-display text-lg font-semibold text-[#152435]">Articoli recenti</h2>
            </div>
            <div className="p-4">
              {recentSidebar.map((p) => {
                const v = getBlogVisual(p.slug);
                return (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group mb-4 flex gap-3 border-b border-[#ece8e0] pb-4 last:mb-0 last:border-0 last:pb-0"
                  >
                    <div className="relative h-11 w-14 shrink-0 overflow-hidden rounded-sm bg-[#ece8e0]">
                      <img
                        src={v.coverImage}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="line-clamp-2 text-[0.8rem] font-medium leading-snug text-[#152435] group-hover:text-amber-800">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[0.65rem] text-slate-500">{p.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-sm">
            <div className="border-b border-[#e1dbd1] bg-gradient-to-r from-white to-[#faf8f5] px-5 py-3">
              <h2 className="font-luxury-display text-lg font-semibold text-[#152435]">Argomenti</h2>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
              {[...tagSet].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setCat(t)}
                  className="rounded-full border border-[#e1dbd1] bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:border-[#152435] hover:bg-[#152435] hover:text-white"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#152435] to-[#1e3a5f] p-6 text-center shadow-lg ring-1 ring-white/10">
            <p className="font-luxury-display text-xl text-white">Accedi al servizio</p>
            <p className="mt-2 text-xs leading-relaxed text-white/50">
              Registrazione candidati gratuita. Percorsi dedicati per le imprese.
            </p>
            <Link
              to="/registrazione"
              className="mt-5 inline-block w-full rounded-lg bg-amber-600 py-3 text-xs font-bold uppercase tracking-wider text-[#152435] transition hover:bg-amber-500"
            >
              Registrazione
            </Link>
          </div>

          <p className="text-center text-[0.65rem] text-slate-400">{BRAND.domain}</p>
        </aside>
      </div>
    </div>
  );
}

function FeaturedBig({ post, compact }: { post: (typeof ALL_BLOG_ARTICLES)[0]; compact?: boolean }) {
  const v = getBlogVisual(post.slug);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group relative overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        compact ? "" : "md:row-span-2 md:min-h-[300px]"
      }`}
    >
      <div className="relative h-56 overflow-hidden bg-[#ece8e0] sm:h-64">
        <img
          src={v.coverImage}
          alt={v.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152435]/90 via-[#152435]/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-sm bg-[#152435] px-2 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white">
          {v.category}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <time className="text-[0.7rem] text-slate-500" dateTime={post.dateIso}>
          {post.date}
        </time>
        <h2 className="font-luxury-display mt-2 text-2xl font-semibold leading-snug text-[#152435] group-hover:text-amber-900">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-[#ece8e0] pt-4 text-[0.7rem] text-slate-500">
          <span>{post.readTimeMin} min di lettura</span>
          <span className="font-semibold text-amber-700">Leggi →</span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedSmall({ post }: { post: (typeof ALL_BLOG_ARTICLES)[0] }) {
  const v = getBlogVisual(post.slug);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-[120px] w-[110px] shrink-0 bg-[#ece8e0] sm:w-[130px]">
        <img
          src={v.coverImage}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-2 top-2 rounded-sm bg-[#152435]/90 px-1.5 py-0.5 text-[0.5rem] font-bold uppercase tracking-wide text-white">
          {v.category}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-4">
        <time className="text-[0.65rem] text-slate-500" dateTime={post.dateIso}>
          {post.date}
        </time>
        <h3 className="font-luxury-display mt-1 line-clamp-3 text-base font-semibold leading-snug text-[#152435] group-hover:text-amber-900">
          {post.title}
        </h3>
        <span className="mt-2 text-[0.65rem] font-medium text-amber-700">{post.readTimeMin} min</span>
      </div>
    </Link>
  );
}

function ArticleCard({ post }: { post: (typeof ALL_BLOG_ARTICLES)[0] }) {
  const v = getBlogVisual(post.slug);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e1dbd1] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-40 overflow-hidden bg-[#ece8e0]">
        <img
          src={v.coverImage}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-2 top-2 rounded-sm bg-white/95 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
          {v.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-luxury-display text-lg font-semibold leading-snug text-[#152435] group-hover:text-amber-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[0.8rem] leading-relaxed text-slate-600">{post.excerpt}</p>
        <div className="mt-3 flex items-center justify-between border-t border-[#ece8e0] pt-3 text-[0.7rem] text-slate-500">
          <time dateTime={post.dateIso}>{post.date}</time>
          <span className="text-amber-800">{post.readTimeMin} min</span>
        </div>
      </div>
    </Link>
  );
}
