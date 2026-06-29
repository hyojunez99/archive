import { Link } from "react-router-dom";
import { useRef } from "react";

import gsap from "gsap";

const IssueCard = ({ issue }) => {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const seasonRef = useRef(null);
  const buttonArrowRef = useRef(null);

  const handleEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.08,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      y: -10,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(numberRef.current, {
      scale: 1.08,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(titleRef.current, {
      y: -8,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(seasonRef.current, {
      opacity: 1,
      duration: 0.4,
    });

    gsap.to(buttonArrowRef.current, {
      x: 8,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(numberRef.current, {
      scale: 1,
      duration: 0.4,
    });

    gsap.to(titleRef.current, {
      y: 0,
      duration: 0.4,
    });

    gsap.to(seasonRef.current, {
      opacity: 0.8,
      duration: 0.3,
    });

    gsap.to(buttonArrowRef.current, {
      x: 0,
      duration: 0.3,
    });
  };

  return (
    <article
      className="issue-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="issue-card__image">
        <img
          ref={imageRef}
          src={`/images/${issue.coverImage}`}
          alt={issue.title}
        />

        <div className="issue-card__overlay" ref={overlayRef}>
          <span className="issue-card__label">ISSUE</span>

          <span ref={numberRef} className="issue-card__number">
            {String(issue.id).padStart(2, "0")}
          </span>

          <h3 ref={titleRef} className="issue-card__title">
            {issue.title}
          </h3>

          <p ref={seasonRef} className="issue-card__season">
            {issue.season}
          </p>
        </div>
      </div>

      <Link to={`/issue/${issue.slug}`} className="issue-card__button">
        <span>READ ISSUE</span>

        <span ref={buttonArrowRef}>→</span>
      </Link>
    </article>
  );
};

export default IssueCard;
