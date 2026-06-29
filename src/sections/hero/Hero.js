import "./Hero.scss";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { Power4 } from "gsap";

import issues from "../../assets/data/issues.json";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const issueRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const seasonRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);

  const issue = issues[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % issues.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? issues.length - 1 : prev - 1));
  };

  useEffect(() => {
    animateHero();

    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);

      gsap.killTweensOf(imageRef.current);
      gsap.killTweensOf(issueRef.current);
      gsap.killTweensOf(titleRef.current);
      gsap.killTweensOf(descRef.current);
      gsap.killTweensOf(seasonRef.current);
      gsap.killTweensOf(progressRef.current);
    };
  }, [current]);

  const animateHero = () => {
    gsap.killTweensOf(imageRef.current);
    gsap.killTweensOf(issueRef.current);
    gsap.killTweensOf(titleRef.current);
    gsap.killTweensOf(descRef.current);
    gsap.killTweensOf(seasonRef.current);
    gsap.killTweensOf(progressRef.current);

    gsap.set(
      [issueRef.current, titleRef.current, descRef.current, seasonRef.current],
      {
        opacity: 0,
      },
    );

    gsap.set(progressRef.current, {
      width: "0%",
    });

    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.12,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.3,
        ease: Power4.easeOut,
      },
    )

      .to(
        issueRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=1",
      )

      .fromTo(
        titleRef.current,
        {
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: Power4.easeOut,
        },
        "-=.4",
      )

      .fromTo(
        descRef.current,
        {
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=.45",
      )

      .fromTo(
        seasonRef.current,
        {
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        "-=.35",
      );

    gsap.to(progressRef.current, {
      width: "100%",
      duration: 5,
      ease: "none",
    });
  };

  return (
    <section className="hero">
      <div className="hero__left">
        <span ref={issueRef} className="hero__issue">
          ISSUE NO.{String(issue.id).padStart(2, "0")}
        </span>

        <h1 ref={titleRef} className="hero__title">
          {issue.title.split(" ").map((word, index) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </h1>

        <p ref={descRef} className="hero__description">
          {issue.description}
        </p>

        <span ref={seasonRef} className="hero__season">
          {issue.season}
        </span>

        <Link className="hero__button" to={`/issue/${issue.id}`}>
          VIEW ISSUE →
        </Link>

        <div className="hero__controls">
          <button onClick={prevSlide}>←</button>

          <div className="hero__pagination">
            {issues.map((_, index) => (
              <span
                key={index}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>

          <button onClick={nextSlide}>→</button>
        </div>

        <div className="hero__progress">
          <span ref={progressRef}></span>
        </div>
      </div>

      <div className="hero__right">
        <img
          ref={imageRef}
          src={`${process.env.PUBLIC_URL}/images/${issue.coverImage}`}
          alt={issue.title}
        />
      </div>
    </section>
  );
};

export default Hero;
