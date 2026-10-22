import { earlier, featured, type Project } from "@/content/site";

function Media({ p }: { p: Project }) {
  const cls = "w-full object-cover object-top aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-[1.04] group-inview:scale-[1.04]";
  if (p.media.video) {
    return (
      <video
        className={cls}
        src={p.media.video}
        poster={p.media.poster}
        aria-label={p.media.alt}
        muted
        loop
        playsInline
        controls
        preload="none"
      />
    );
  }
  return <img className={cls} src={p.media.poster} alt={p.media.alt} loading="lazy" />;
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h" className="border-t border-line py-20">
      <h2 id="work-h" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Selected work
      </h2>
      <div className="mt-12 space-y-20">
        {featured.map((p) => (
          <article key={p.title} data-touch-hover className="group grid gap-8 md:grid-cols-[1.25fr_1fr] md:items-start">
            <div>
              <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-[0_24px_40px_-30px_rgba(11,92,87,0.6)] transition-[translate,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-inview:-translate-y-1 group-hover:shadow-[0_32px_50px_-28px_rgba(11,92,87,0.7)] group-inview:shadow-[0_32px_50px_-28px_rgba(11,92,87,0.7)]">
                <Media p={p} />
              </div>
              {p.before && (
                <details className="mt-3 text-muted">
                  <summary className="cursor-pointer transition-colors hover:text-teal">Show the site before the redesign</summary>
                  <img
                    className="mt-3 w-full rounded-lg border border-line"
                    src={p.before.src}
                    alt={p.before.alt}
                    loading="lazy"
                  />
                </details>
              )}
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold transition-colors duration-300 group-hover:text-teal group-inview:text-teal">{p.title}</h3>
              <p className="mt-1 text-plum">{p.role}</p>
              <p className="mt-4 max-w-[55ch]">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full bg-surface px-3 py-1 text-sm transition-colors duration-300 group-hover:bg-paper group-inview:bg-paper group-hover:ring-1 group-inview:ring-1 ring-line">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex gap-6 font-bold">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener" className="link-draw">
                    {l.label}
                  </a>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-20 font-display text-xl font-bold">Earlier projects</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {earlier.map((e) => (
          <li key={e.title} className="flex transition-colors hover:bg-surface sm:px-2 flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
            <span>
              <span className="font-bold">{e.title}</span>
              <span className="text-muted">, {e.stack}</span>
            </span>
            <span className="flex gap-5">
              <a href={e.demo} target="_blank" rel="noopener" className="link-draw">Demo</a>
              <a href={e.code} target="_blank" rel="noopener" className="link-draw">Code</a>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
