import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
              How It Works
            </p>
            <h2
              className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From raw footage to ready-to-share
            </h2>
          </div>
          <p className="max-w-md text-iron-400">
            A straightforward process designed for coaches, athletic directors,
            and programs that need quality video without the hassle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <div key={item.step} className="relative">
              {index < process.length - 1 && (
                <div className="absolute left-8 top-8 hidden h-px w-[calc(100%+1.5rem)] bg-gradient-to-r from-ember-500/40 to-transparent lg:block" />
              )}
              <div className="rounded-2xl border border-white/5 bg-iron-900/50 p-6">
                <span
                  className="text-3xl font-bold text-ember-500/80"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.step}
                </span>
                <h3
                  className="mt-4 text-lg font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
