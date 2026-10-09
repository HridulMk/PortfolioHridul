import { useState, type FormEvent } from "react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

const schema = z.object({
  name: z.string().trim().min(2, { error: "Please enter your name." }),
  email: z.string().trim().email({ error: "Enter a valid email." }),
  topic: z.string().trim().min(2, { error: "Add a short subject." }),
  message: z.string().trim().min(12, { error: "Write at least a short note." }),
});

type Fields = z.infer<typeof schema>;

function mailtoHref(data: Fields) {
  const subject = `Portfolio — ${data.topic}`;
  const body = `${data.message}\n\n— ${data.name}\n${data.email}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState<{ href: string; topic: string } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = new FormData(form);
    const data = {
      name: String(raw.get("name") ?? ""),
      email: String(raw.get("email") ?? ""),
      topic: String(raw.get("topic") ?? ""),
      message: String(raw.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in next)) {
          next[key as keyof Fields] = issue.message;
        }
      }
      setErrors(next);
      setReady(null);
      return;
    }
    const href = mailtoHref(parsed.data);
    setErrors({});
    setReady({ href, topic: parsed.data.topic });
    window.location.href = href;
  }

  return (
    <section id="contact" className="anchor border-t border-line bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <SectionHeading
            index="05"
            label="Contact"
            title="Write a note."
            lede="The form opens your email app with the message addressed to me. Nothing is stored on this page."
          />
          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Email</dt>
              <dd className="mt-1">
                <a className="rule-link text-ink" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Phone</dt>
              <dd className="mt-1">
                <a className="rule-link text-ink" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Location</dt>
              <dd className="mt-1 text-ink">{profile.location}</dd>
            </div>
          </dl>
        </div>

        {ready ? (
          <div role="status" className="border border-line bg-paper p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-accent">Ready to send</p>
            <h3 className="mt-3 font-serif text-3xl text-ink">Your note is addressed.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Subject: {ready.topic}. If a mail app did not open, use the link — it goes to{" "}
              {profile.email}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={ready.href}
                className="press inline-flex h-12 items-center justify-center bg-ink px-5 text-sm text-paper hover:bg-accent"
              >
                Open mail app
              </a>
              <button
                type="button"
                className="press inline-flex h-12 items-center justify-center border border-ink px-5 text-sm text-ink"
                onClick={() => setReady(null)}
              >
                Edit note
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="border border-line bg-paper p-6 md:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                error={errors.email}
                autoComplete="email"
              />
            </div>
            <div className="mt-6">
              <Field label="Subject" name="topic" error={errors.topic} />
            </div>
            <div className="mt-6">
              <label className="block" htmlFor="message">
                <span className="text-xs font-medium uppercase tracking-widest text-muted">
                  Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-base text-ink outline-none focus:border-accent"
                />
              </label>
              {errors.message ? (
                <p id="message-error" className="mt-2 text-sm text-accent">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="press mt-8 inline-flex h-12 items-center justify-center bg-ink px-5 text-sm text-paper hover:bg-accent"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: keyof Fields;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label className="block" htmlFor={name}>
        <span className="text-xs font-medium uppercase tracking-widest text-muted">{label}</span>
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="mt-2 w-full border-b border-line bg-transparent py-3 text-base text-ink outline-none focus:border-accent"
        />
      </label>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
