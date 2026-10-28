import { profile } from "@/content/site";

// A nod to Bettina's voice UI work: the hero is a spoken question and its answer.
export function Hero() {
  const bars = [14, 26, 18, 32, 22, 12, 28, 16];
  return (
    <section aria-labelledby="hero-q" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="flex items-center gap-3 text-muted">
        <span className="wave flex h-8 items-center gap-1" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: h, animationDelay: `${i * 70}ms` }} />
          ))}
        </span>
        <p id="hero-q" className="text-lg">
          &ldquo;{profile.question}&rdquo;
        </p>
      </div>
      <h1 className="mt-6 font-display text-[clamp(3rem,11vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
        {profile.name}
      </h1>
      <p className="mt-4 font-display text-2xl font-medium text-teal sm:text-3xl">
        {profile.role}
        {profile.company && <span className="text-muted"> at {profile.company}</span>}
      </p>
      <p className="answer mt-8 max-w-[60ch] text-xl leading-relaxed">{profile.answer}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="rounded-full bg-teal px-6 py-3 font-bold text-paper no-underline shadow-[0_5px_0_-1px_var(--plum)] transition-[translate,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_0_-1px_var(--plum)] active:translate-y-0.5 active:shadow-none"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border-2 border-teal px-6 py-3 font-bold no-underline transition-[translate,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-teal hover:text-paper active:translate-y-0.5"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
