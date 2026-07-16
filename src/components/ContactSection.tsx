import { Suspense } from "react";
import { Contact } from "@/components/Contact";

type ContactSectionProps = {
  heading?: string;
  description?: string;
  showSidebar?: boolean;
};

function ContactFallback() {
  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-96 animate-pulse rounded-2xl bg-iron-900/50" />
      </div>
    </section>
  );
}

export function ContactSection(props: ContactSectionProps) {
  return (
    <Suspense fallback={<ContactFallback />}>
      <Contact {...props} />
    </Suspense>
  );
}
