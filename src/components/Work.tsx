import Image from "next/image";
import { work } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
            Portfolio
          </p>
          <h2
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Moments that move people
          </h2>
          <p className="mt-4 text-lg text-iron-400">
            From game-winning plays to athlete spotlights — every cut is built
            to capture energy and drive engagement.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {work.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-iron-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/20 to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-iron-950/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ember-400 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-iron-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
