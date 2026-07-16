import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { images, navLinks, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-iron-900/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link href="/" className="block shrink-0">
            <Image
              src={images.wordmark}
              alt={site.name}
              width={900}
              height={280}
              className="h-8 w-auto max-w-[220px] object-contain object-left sm:h-9"
              priority
            />
          </Link>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <SocialLinks />
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-iron-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/sports-highlights"
                className="text-sm text-iron-400 transition-colors hover:text-white"
              >
                Sports Highlights
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-iron-500 md:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Digital & creative work for sports · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}
