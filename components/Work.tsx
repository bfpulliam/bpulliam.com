import Link from "next/link";
import { featured, type Project } from "@/content/site";

export function Media({ p, zoom = true }: { p: Project; zoom?: boolean }) {
  const cls = `w-full object-cover object-top aspect-[16/10] ${
    zoom ? "transition-transform duration-700 ease-out group-hover:scale-[1.04] group-inview:scale-[1.04]" : ""
  }`;
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

export function Status({ p }: { p: Project }) {
  if (p.status === "live") return null;
  return (
    <span className="rounded-full border border-line px-3 py-0.5 text-sm text-muted">
      {p.years ? `Live ${p.years}` : "No longer live"}
    </span>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h" className="border-t border-line py-20">
      <h2 id="work-h" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Selected work
      </h2>
      <p className="mt-4 max-w-[60ch] text-muted">
        Some of these sites have since been retired by their owners. The recordings show them as they shipped.
      </p>
      <div className="mt-12 space-y-20">
        {featured.map((p) => (
          <article key={p.slug} data-touch-hover className="group grid gap-8 md:grid-cols-[1.25fr_1fr] md:items-start">
            <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-[0_24px_40px_-30px_rgba(11,92,87,0.6)] transition-[translate,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-inview:-translate-y-1 group-hover:shadow-[0_32px_50px_-28px_rgba(11,92,87,0.7)] group-inview:shadow-[0_32px_50px_-28px_rgba(11,92,87,0.7)]">
              <Media p={p} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold transition-colors duration-300 group-hover:text-teal group-inview:text-teal">
                {p.title}
              </h3>
              <p className="mt-1 text-plum">
                {p.role}, {p.client}
              </p>
              <div className="mt-3">
                <Status p={p} />
              </div>
              <p className="mt-4 max-w-[55ch]">{p.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full bg-surface px-3 py-1 text-sm transition-colors duration-300 group-hover:bg-paper group-inview:bg-paper group-hover:ring-1 group-inview:ring-1 ring-line">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-bold">
                <Link href={`/work/${p.slug}/`} className="link-draw">
                  Read the case study
                  <span className="sr-only">: {p.title}</span>
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
