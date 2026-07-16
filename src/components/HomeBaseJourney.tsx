const discoveryChannels = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "Google",
  "Referrals",
  "Email",
  "QR Codes",
] as const;

const nextSteps = [
  "Book Lessons",
  "Register for Camps",
  "Request Information",
  "View Results",
  "Watch Athlete Videos",
  "Purchase Recruiting Media",
] as const;

type HomeBaseJourneyProps = {
  compact?: boolean;
};

export function HomeBaseJourney({ compact = false }: HomeBaseJourneyProps) {
  return (
    <div
      className="rounded-3xl border border-white/10 bg-iron-900/70 p-6 sm:p-8"
      aria-label="Customer journey from discovery channels through the trainer website to booking and media actions"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iron-400">
            Where families find you
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {discoveryChannels.map((channel) => (
              <li
                key={channel}
                className="rounded-full border border-white/10 bg-iron-950 px-3 py-2 text-sm text-iron-200"
              >
                {channel}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-2xl text-ember-400" aria-hidden="true">
          <span className="lg:hidden">↓</span>
          <span className="hidden lg:inline">→</span>
        </div>

        <div className="rounded-2xl border border-ember-500/30 bg-ember-500/10 p-6 text-center">
          <p
            className="text-xl font-bold text-white sm:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Website
          </p>
          <p className="mt-1 font-medium text-ember-400">Your Home Base</p>
          {!compact ? (
            <p className="mt-3 text-sm leading-relaxed text-iron-300">
              One clear place for programs, proof, booking, registration, and
              athlete media.
            </p>
          ) : null}
        </div>

        <div className="text-center text-2xl text-ember-400" aria-hidden="true">
          <span className="lg:hidden">↓</span>
          <span className="hidden lg:inline">→</span>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iron-400">
            What families can do next
          </p>
          <ul className="mt-4 space-y-2">
            {nextSteps.map((step) => (
              <li key={step} className="flex items-center gap-3 text-sm text-iron-200">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
