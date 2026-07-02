"use client";

import { useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      company_website: String(formData.get("company_website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        setFormState("error");
        return;
      }

      setFormState("success");
      form.reset();
    } catch {
      setErrorMessage(
        `Unable to send your message. Please email us directly at ${site.email}.`,
      );
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
              Contact
            </p>
            <h2
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s elevate your highlights
            </h2>
            <p className="mt-4 text-lg text-iron-400">
              Tell us about your program, event, or project. We&apos;ll get back
              to you with next steps and a timeline.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-iron-500">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg text-white transition-colors hover:text-ember-400"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-iron-500">
                  Location
                </p>
                <p className="mt-1 text-lg text-white">{site.location}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-iron-500">
                  Follow Us
                </p>
                <SocialLinks className="mt-3" />
              </div>
            </div>
          </div>

          {formState === "success" ? (
            <div className="flex flex-col justify-center rounded-2xl border border-ember-500/20 bg-iron-900/50 p-8 text-center">
              <h3
                className="text-2xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Message sent!
              </h3>
              <p className="mt-3 text-iron-400">
                Thanks for reaching out. We&apos;ll get back to you soon with
                next steps.
              </p>
              <button
                type="button"
                onClick={() => setFormState("idle")}
                className="mt-8 text-sm text-ember-400 transition-colors hover:text-ember-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-iron-900/50 p-8"
            >
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company_website">Company website</label>
                <input
                  type="text"
                  id="company_website"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-iron-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={formState === "submitting"}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-iron-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-iron-600 focus:border-ember-500/50 disabled:opacity-60"
                    placeholder="Coach Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-iron-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={formState === "submitting"}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-iron-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-iron-600 focus:border-ember-500/50 disabled:opacity-60"
                    placeholder="you@school.edu"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-iron-300"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={formState === "submitting"}
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-iron-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-iron-600 focus:border-ember-500/50 disabled:opacity-60"
                    placeholder="Tell us about your sport, timeline, and what you need..."
                  />
                </div>
              </div>

              {formState === "error" && errorMessage ? (
                <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-6 w-full rounded-full bg-ember-500 py-4 text-sm font-semibold text-white transition-all hover:bg-ember-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formState === "submitting" ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
