"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 0.3, id = "parallax" }) {
  const trigger = useRef(null);
  const target = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const y = 100 * speed; // More natural scale

    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          setY(self.progress * y);
        },
      },
    });

    return () => {
      timeline.current?.kill();
    };
  }, [id, speed]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target}>{children}</div>
    </div>
  );
}
