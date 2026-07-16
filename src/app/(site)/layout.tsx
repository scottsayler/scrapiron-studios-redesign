import { Footer } from "@/components/Footer";
import { HashRedirect } from "@/components/HashRedirect";
import { Header } from "@/components/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HashRedirect />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
