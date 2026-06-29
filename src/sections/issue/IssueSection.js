import "./IssueSection.scss";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import issues from "../../assets/data/issues.json";
import IssueCard from "./IssueCard";

gsap.registerPlugin(ScrollTrigger);

const IssueSection = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  const cardsRef = useRef([]);

  const [progress, setProgress] = useState(0);

  cardsRef.current = [];

  const addCard = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 80,
      });

      gsap.set(".issue-card__image img", {
        scale: 1.12,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 70,
        duration: 0.8,
        ease: "power3.out",
      })

        .from(
          descRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45",
        )

        .from(
          buttonRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.5,
          },
          "-=0.35",
        )

        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.2",
        )

        .to(
          ".issue-card__image img",
          {
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          },
          "<",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;

    const updateProgress = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress((slider.scrollLeft / maxScroll) * 100);
    };

    updateProgress();

    slider.addEventListener("scroll", updateProgress);

    return () => {
      slider.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -452,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 452,
      behavior: "smooth",
    });
  };

  return (
    <section className="issue-section" ref={sectionRef}>
      <div className="issue-section__top">
        <h2 className="issue-section__heading" ref={titleRef}>
          Archive
        </h2>

        <p className="issue-section__description" ref={descRef}>
          Explore all issues of our digital fashion editorial.
        </p>

        <button className="issue-section__view" ref={buttonRef}>
          VIEW ALL ISSUES →
        </button>
      </div>

      <div className="issue-section__slider" ref={sliderRef}>
        {issues.map((issue) => (
          <div key={issue.id} ref={addCard}>
            <IssueCard issue={issue} />
          </div>
        ))}
      </div>

      <div className="issue-section__navigation">
        <button className="issue-section__arrow" onClick={scrollLeft}>
          ←
        </button>

        <div className="issue-section__line">
          <div
            className="issue-section__line-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <button className="issue-section__arrow" onClick={scrollRight}>
          →
        </button>
      </div>

      <p className="issue-section__drag">DRAG TO EXPLORE</p>
    </section>
  );
};

export default IssueSection;
