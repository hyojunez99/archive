import "./EditorialSection.scss";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import editorial from "../../assets/data/editorial.json";
import EditorialCard from "./EditorialCard";

gsap.registerPlugin(ScrollTrigger);

const MOBILE_BREAKPOINT = 767;

const EditorialSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      const initHorizontal = () => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) return;

        const totalWidth = track.scrollWidth;
        const viewport = window.innerWidth;

        gsap.to(track, {
          x: -(totalWidth - viewport),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth - viewport}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      initHorizontal();

      ScrollTrigger.addEventListener("refreshInit", () => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
          gsap.set(track, { x: 0 });
          ScrollTrigger.getAll()
            .filter((st) => st.trigger === section)
            .forEach((st) => st.kill());
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="editorial-section" ref={sectionRef}>
      <div className="editorial-section__track" ref={trackRef}>
        {editorial.map((item) => (
          <EditorialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default EditorialSection;
