import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attaches a ScrollTrigger fade-up reveal to every element matching
 * `selector` inside the given `containerRef`.
 *
 * Usage:
 *   const ref = useGsapReveal<HTMLDivElement>(".my-card");
 *   <Box ref={ref}>...</Box>
 */
export function useGsapReveal<T extends HTMLElement>(
  selector: string,
  options: {
    y?: number;
    stagger?: number;
    duration?: number;
    delay?: number;
    once?: boolean;
  } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = gsap.utils.toArray<HTMLElement>(selector, el);
    if (!targets.length) return;

    const {
      y = 32,
      stagger = 0.1,
      duration = 0.7,
      delay = 0,
      once = true,
    } = options;

    gsap.fromTo(
      targets,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: targets[0],
          start: "top 88%",
          toggleActions: once ? "play none none none" : "play none none reset",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return ref;
}
