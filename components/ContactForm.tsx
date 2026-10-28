"use client";

import { useForm, ValidationError } from "@formspree/react";
import { profile } from "@/content/site";

const field =
  "mt-1 w-full rounded-lg border-2 border-line bg-paper px-4 py-3 text-ink transition-colors hover:border-muted focus:border-teal focus:outline-none aria-[invalid=true]:border-plum";
const fieldError = "mt-1 block text-sm font-normal text-plum";

export function ContactForm() {
  const [state, handleSubmit] = useForm(profile.formId);

  if (state.succeeded) {
    return (
      <p role="status" className="mt-8 max-w-[55ch] rounded-lg bg-surface p-6 text-lg">
        Message sent. Thanks for reaching out — I&rsquo;ll reply soon.
      </p>
    );
  }

  const invalid = (name: string) => Boolean(state.errors?.getFieldErrors(name).length) || undefined;
  const formErrors = state.errors?.getFormErrors() ?? [];

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid max-w-2xl gap-5 sm:grid-cols-2">
      <label className="font-bold">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="font-bold">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={invalid("email")}
          aria-describedby="email-error"
          className={field}
        />
        <ValidationError id="email-error" field="email" prefix="Email" errors={state.errors} className={fieldError} />
      </label>
      <label className="font-bold sm:col-span-2">
        Message
        <textarea
          name="message"
          required
          rows={6}
          aria-invalid={invalid("message")}
          aria-describedby="message-error"
          className={field}
        />
        <ValidationError id="message-error" field="message" prefix="Message" errors={state.errors} className={fieldError} />
      </label>
      {/* Tells Formspree what to put in the email subject. */}
      <input type="hidden" name="_subject" value="New message from bpulliam.com" />
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-full bg-teal px-7 py-3 font-bold text-paper shadow-[0_5px_0_-1px_var(--plum)] transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_0_-1px_var(--plum)] active:translate-y-0.5 active:shadow-none disabled:translate-y-0 disabled:opacity-60"
        >
          {state.submitting ? "Sending…" : "Send message"}
        </button>
        {formErrors.length > 0 && (
          <p role="alert" className="text-plum">
            Your message didn&rsquo;t send. {formErrors.map((e) => e.message).join(" ")}
          </p>
        )}
      </div>
    </form>
  );
}
