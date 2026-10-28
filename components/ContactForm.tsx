"use client";

import { useState } from "react";
import { profile } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1 w-full rounded-lg border-2 border-line bg-paper px-4 py-3 text-ink transition-colors hover:border-muted focus:border-teal focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [detail, setDetail] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(profile.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        // Formspree explains rejections, e.g. a deleted form or one awaiting email confirmation.
        const data = await res.json().catch(() => null);
        const why = data?.errors?.map((x: { message: string }) => x.message).join(" ") || data?.error || `HTTP ${res.status}`;
        console.error("Contact form rejected:", res.status, data);
        throw new Error(why);
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setDetail(err instanceof Error && err.message !== "Failed to fetch" ? err.message : "");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="mt-8 max-w-[55ch] rounded-lg bg-surface p-6 text-lg">
        Message sent. Thanks for reaching out — I&rsquo;ll reply soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid max-w-2xl gap-5 sm:grid-cols-2">
      <label className="font-bold">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="font-bold">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="font-bold sm:col-span-2">
        Message
        <textarea name="message" required rows={6} className={field} />
      </label>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-teal px-7 py-3 font-bold text-paper shadow-[0_5px_0_-1px_var(--plum)] transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_0_-1px_var(--plum)] active:translate-y-0.5 active:shadow-none disabled:translate-y-0 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-plum">
            Your message didn&rsquo;t send. {detail ? `The form service said: ${detail}` : "Check your connection and try again."}
          </p>
        )}
      </div>
    </form>
  );
}
