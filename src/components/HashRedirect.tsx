"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const hashRedirects: Record<string, string> = {
  "#contact": "/contact",
  "#services": "/organizations",
  "#process": "/about",
};

export function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    const destination = hashRedirects[hash];
    if (destination) {
      router.replace(destination);
    }
  }, [router]);

  return null;
}
