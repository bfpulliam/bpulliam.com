import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Media, Status } from "@/components/Work";
import { featured, profile } from "@/content/site";

// Placeholder lines start with "TODO" and stay hidden until they're filled in.
const real = (lines: string[]) => lines.filter((l) => !l.startsWith("TODO"));

export function generateStaticParams() {
  return featured.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = featured.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} | ${profile.name}`, description: p.summary };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = featured.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = featured[i];
  const next = featured[(i + 1) % featured.length];
  const approach = real(p.approach);
  const outcome = real(p.outcome);

  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
        <Link href="/" className="font-display text-lg font-bold text-ink no-underline transition-colors hover:text-teal">
          BP
        </Link>
        <Link href="/#work" className="link-draw">
          All work
        </Link>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <div className="pt-12 sm:pt-16">
          <p className="text-plum">
            {p.role}, {p.client}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            {p.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Status p={p} />
            {p.stack.map((s) => (
              <span key={s} className="rounded-full bg-surface px-3 py-0.5 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-line bg-surface">
          <Media p={p} zoom={false} />
        </div>

        <div className="mx-auto mt-14 max-w-[65ch] space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">The problem</h2>
            <p className="mt-3 text-lg">{p.problem}</p>
          </section>

          {approach.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold">What I did</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-teal">
                {approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          {p.before && (
            <section>
              <h2 className="font-display text-2xl font-bold">Before and after</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <figure>
                  <img className="w-full rounded-lg border border-line" src={p.before.src} alt={p.before.alt} loading="lazy" />
                  <figcaption className="mt-2 text-sm text-muted">Before</figcaption>
                </figure>
                <figure>
                  <img className="w-full rounded-lg border border-line" src={p.media.poster} alt={p.media.alt} loading="lazy" />
                  <figcaption className="mt-2 text-sm text-muted">After</figcaption>
                </figure>
              </div>
            </section>
          )}

          {outcome.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold">The outcome</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-teal">
                {outcome.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <nav aria-label="More work" className="mx-auto mt-20 max-w-[65ch] border-t border-line pt-8">
          <p className="text-muted">Next project</p>
          <Link href={`/work/${next.slug}/`} className="link-draw font-display text-3xl font-bold">
            {next.title}
          </Link>
        </nav>
      </main>
    </>
  );
}
