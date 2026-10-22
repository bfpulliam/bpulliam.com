import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Work } from "@/components/Work";
import { about, experience, profile, skills } from "@/content/site";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3">
        Skip to content
      </a>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
        <a href="#" className="font-display text-lg font-bold text-ink no-underline">
          BP
        </a>
        <nav aria-label="Main">
          <ul className="flex gap-5 text-[0.95rem] sm:gap-7">
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-8">
        <Hero />
        <Work />

        <section id="skills" aria-labelledby="skills-h" className="border-t border-line py-20">
          <h2 id="skills-h" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            What I work with
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="font-display text-xl font-bold text-plum">{g.group}</h3>
                <ul className="mt-3 space-y-1">
                  {g.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h" className="border-t border-line py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 id="exp-h" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                How I got here
              </h2>
              {about.map((p, i) => (
                <p key={i} className="mt-6 max-w-[58ch]">{p}</p>
              ))}
            </div>
            <ol className="relative border-l-2 border-line pl-8">
              {experience.map((e, i) => (
                <li key={e.title} className="relative pb-9 last:pb-0">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-teal ${i === 0 ? "bg-teal" : "bg-paper"}`}
                  />
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <p className="text-plum">{e.place}</p>
                  <p className="mt-1 text-muted">{e.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="border-t border-line py-20">
          <h2 id="contact-h" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&rsquo;s talk
          </h2>
          <p className="mt-4 max-w-[55ch] text-xl">
            I&rsquo;m happy to hear about projects, speaking, or mentoring new developers.
          </p>
          <ContactForm />
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-bold">
            <li><a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener">GitHub</a></li>
            <li><a href={profile.resume} target="_blank" rel="noopener">Resume</a></li>
          </ul>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl border-t border-line px-4 py-8 text-sm text-muted sm:px-8">
        &copy; {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
