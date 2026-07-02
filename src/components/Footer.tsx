import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { images, navLinks, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-iron-900/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt={site.name}
              width={32}
              height={32}
              className="rounded-sm"
            />
            <div>
              <p
                className="font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </p>
              <p className="text-sm text-iron-500">{site.tagline}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <SocialLinks />
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-iron-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-iron-500 md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Sports video editing · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
