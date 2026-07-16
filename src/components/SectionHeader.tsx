import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  action?: {
    href: string;
    label: string;
  };
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  action,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={`mb-12 lg:mb-16 ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-400">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`${eyebrow ? "mt-4" : ""} text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-iron-400">
          {description}
        </p>
      ) : null}
      {action ? (
        <Link
          href={action.href}
          className="mt-6 inline-flex text-sm font-medium text-ember-400 transition-colors hover:text-ember-300"
        >
          {action.label}
          <span aria-hidden="true" className="ml-2">
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}
