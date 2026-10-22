"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-driven stand-in for hover on touch screens.
 *
 * Any element with `data-touch-hover` gets `data-inview="true"` while it
 * sits in the middle band of the screen, so the `inview:` and
 * `group-inview:` variants (globals.css) can mirror its hover styles.
 * Does nothing on devices with a mouse, where real hover works.
 */
export function TouchHover() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-touch-hover]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.inview = String(entry.isIntersecting);
        }
      },
      // Only the middle 30% of the screen counts, so items light up one
      // after another as the visitor scrolls.
      { rootMargin: "-35% 0px -35% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      targets.forEach((el) => delete el.dataset.inview);
    };
  }, [pathname]);

  return null;
}
