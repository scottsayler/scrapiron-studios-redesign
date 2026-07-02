import { services } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  film: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125H9.75m7.5-12.75h.008v.008h-.008V8.25m0 3h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    </svg>
  ),
  share: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  ),
  bolt: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-white/5 bg-iron-900/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
            Services
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for programs that want to win attention
          </h2>
          <p className="mt-4 text-lg text-iron-400">
            Comprehensive video solutions tailored for capturing the essence of
            sports events — and turning it into growth.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-iron-900/80 p-8 transition-all hover:border-ember-500/30 hover:bg-iron-900"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember-500/10 text-ember-400 transition-colors group-hover:bg-ember-500/20">
                {icons[service.icon]}
              </div>

              <h3
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-iron-400">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2 border-t border-white/5 pt-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-iron-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-ember-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
