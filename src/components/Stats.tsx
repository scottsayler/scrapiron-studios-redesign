import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-iron-900/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-14 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p
              className="text-3xl font-bold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-iron-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
