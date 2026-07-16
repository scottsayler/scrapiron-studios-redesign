"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SocialLinks } from "@/components/SocialLinks";
import { contactServiceOptions, site } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

const athleteServices = new Set([
  "Recruiting video",
  "Athlete highlight reel",
]);

const organizationServices = new Set([
  "Trainer website",
  "Website Care",
  "Growth",
  "Growth Partnership",
  "Organization website",
  "Website redesign",
  "Branding",
  "Ongoing digital support",
]);

type ContactProps = {
  heading?: string;
  description?: string;
  showSidebar?: boolean;
};

function mapInterestToService(interest: string | null): string {
  if (interest === "trainer") return "Trainer website";
  if (interest === "organization") return "Organization website";
  if (interest === "athlete") return "Recruiting video";
  if (interest === "event") return "Event coverage";
  return "";
}

export function Contact({
  heading = "Tell us what you’re building",
  description = "Share a few details about your organization, athlete, or event. We’ll follow up with next steps.",
  showSidebar = true,
}: ContactProps) {
  const searchParams = useSearchParams();
  const initialService =
    searchParams.get("service") ||
    mapInterestToService(searchParams.get("interest"));

  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState(initialService);

  const showAthleteFields = useMemo(
    () => athleteServices.has(serviceNeeded),
    [serviceNeeded],
  );
  const showOrgFields = useMemo(
    () => organizationServices.has(serviceNeeded),
    [serviceNeeded],
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      organizationOrAthlete: String(
        formData.get("organizationOrAthlete") ?? "",
      ),
      sport: String(formData.get("sport") ?? ""),
      serviceNeeded: String(formData.get("serviceNeeded") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      message: String(formData.get("message") ?? ""),
      graduationYear: String(formData.get("graduationYear") ?? ""),
      position: String(formData.get("position") ?? ""),
      schoolOrClub: String(formData.get("schoolOrClub") ?? ""),
      existingFilm: String(formData.get("existingFilm") ?? ""),
      organizationType: String(formData.get("organizationType") ?? ""),
      currentWebsite: String(formData.get("currentWebsite") ?? ""),
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
      setServiceNeeded("");
    } catch {
      setErrorMessage(
        `Unable to send your message. Please email us directly at ${site.email}.`,
      );
      setFormState("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-iron-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-iron-600 focus:border-ember-500/50 disabled:opacity-60";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-white/5 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={
            showSidebar ? "grid gap-16 lg:grid-cols-2" : "mx-auto max-w-2xl"
          }
        >
          {showSidebar ? (
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {heading}
              </h2>
              <p className="mt-4 text-lg text-iron-400">{description}</p>

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
          ) : (
            <div className="mb-10 text-center">
              <h2
                id="contact-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {heading}
              </h2>
              <p className="mt-4 text-lg text-iron-400">{description}</p>
            </div>
          )}

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
              className="relative rounded-2xl border border-white/5 bg-iron-900/50 p-8"
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
                <div className="grid gap-5 sm:grid-cols-2">
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
                      className={inputClass}
                      placeholder="Your name"
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
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-iron-300"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled={formState === "submitting"}
                      className={inputClass}
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organizationOrAthlete"
                      className="block text-sm text-iron-300"
                    >
                      Organization or athlete name
                    </label>
                    <input
                      id="organizationOrAthlete"
                      name="organizationOrAthlete"
                      type="text"
                      disabled={formState === "submitting"}
                      className={inputClass}
                      placeholder="Club, academy, or athlete"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="sport"
                      className="block text-sm text-iron-300"
                    >
                      Sport
                    </label>
                    <input
                      id="sport"
                      name="sport"
                      type="text"
                      disabled={formState === "submitting"}
                      className={inputClass}
                      placeholder="Soccer, basketball, etc."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="serviceNeeded"
                      className="block text-sm text-iron-300"
                    >
                      Service needed
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      required
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      disabled={formState === "submitting"}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {contactServiceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm text-iron-300"
                  >
                    Project timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    disabled={formState === "submitting"}
                    className={inputClass}
                    placeholder="When do you need this completed?"
                  />
                </div>

                {showAthleteFields ? (
                  <div className="space-y-5 rounded-xl border border-white/5 bg-iron-950/50 p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-ember-400">
                      Athlete details
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="graduationYear"
                          className="block text-sm text-iron-300"
                        >
                          Graduation year
                        </label>
                        <input
                          id="graduationYear"
                          name="graduationYear"
                          type="text"
                          disabled={formState === "submitting"}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="position"
                          className="block text-sm text-iron-300"
                        >
                          Position
                        </label>
                        <input
                          id="position"
                          name="position"
                          type="text"
                          disabled={formState === "submitting"}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="schoolOrClub"
                        className="block text-sm text-iron-300"
                      >
                        School or club
                      </label>
                      <input
                        id="schoolOrClub"
                        name="schoolOrClub"
                        type="text"
                        disabled={formState === "submitting"}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="existingFilm"
                        className="block text-sm text-iron-300"
                      >
                        Existing film availability
                      </label>
                      <input
                        id="existingFilm"
                        name="existingFilm"
                        type="text"
                        disabled={formState === "submitting"}
                        className={inputClass}
                        placeholder="Hudl link, Google Drive, or need filming"
                      />
                    </div>
                  </div>
                ) : null}

                {showOrgFields ? (
                  <div className="space-y-5 rounded-xl border border-white/5 bg-iron-950/50 p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-ember-400">
                      Organization details
                    </p>
                    <div>
                      <label
                        htmlFor="organizationType"
                        className="block text-sm text-iron-300"
                      >
                        Organization type
                      </label>
                      <input
                        id="organizationType"
                        name="organizationType"
                        type="text"
                        disabled={formState === "submitting"}
                        className={inputClass}
                        placeholder="Club, academy, league, facility..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="currentWebsite"
                        className="block text-sm text-iron-300"
                      >
                        Current website
                      </label>
                      <input
                        id="currentWebsite"
                        name="currentWebsite"
                        type="url"
                        disabled={formState === "submitting"}
                        className={inputClass}
                        placeholder="https://"
                      />
                    </div>
                  </div>
                ) : null}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-iron-300"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={formState === "submitting"}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about the project, goals, and any important context..."
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
