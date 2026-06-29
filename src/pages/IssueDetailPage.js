import "./IssueDetailPage.scss";

import { Link, useParams } from "react-router-dom";

import issueData from "../assets/data/issueDetail.json";
import issues from "../assets/data/issues.json";

const IssueDetailPage = () => {
  const { id } = useParams();

  const issue = issueData.find((item) => Number(item.id) === Number(id));

  if (!issue) {
    return <h1>Issue Not Found</h1>;
  }

  const relatedIssues = issues
    .filter((item) => Number(item.id) !== Number(id))
    .slice(0, 4);

  return (
    <main className="issue-detail">
      <section className="issue-hero">
        <img
          className="issue-hero__image"
          src={`/images/${issue.hero.heroImage}`}
          alt={issue.hero.title}
        />

        <div className="issue-hero__overlay">
          <span className="issue-hero__breadcrumb">
            HOME / STORIES / {issue.hero.title}
          </span>

          <h1>{issue.hero.title}</h1>

          <p>{issue.hero.subtitle}</p>

          <div className="issue-hero__meta">
            <span>{issue.hero.season}</span>
            <span>{issue.hero.date}</span>
          </div>
        </div>
      </section>

      <section className="issue-intro">
        <div className="issue-intro__text">
          <h2>{issue.intro.heading}</h2>

          <div className="line"></div>

          <p>{issue.intro.text}</p>
        </div>

        <div className="issue-intro__image">
          <img src={`/images/${issue.intro.image}`} alt={issue.hero.title} />
        </div>
      </section>

      <section className="issue-story">
        <div className="issue-story__image">
          <img src={`/images/${issue.story.image}`} alt={issue.hero.title} />
        </div>

        <div className="issue-story__text">
          <p>{issue.story.text}</p>
        </div>
      </section>

      <section className="issue-quote">
        <blockquote>{issue.quote.text}</blockquote>

        <span>{issue.quote.author}</span>
      </section>

      <section className="issue-gallery">
        <div className="issue-gallery__title">
          <h3>Behind The Issue</h3>

          <div className="line"></div>

          <p>{issue.galleryDescription}</p>
        </div>

        <div className="issue-gallery__grid">
          {issue.gallery.map((image, index) => (
            <img
              key={index}
              src={`/images/${image}`}
              alt={`${issue.hero.title} ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="issue-related">
        <div className="issue-related__top">
          <h3>Related Stories</h3>
        </div>

        <div className="issue-related__grid">
          {relatedIssues.map((item) => (
            <Link
              key={item.id}
              to={`/issue/${Number(item.id)}`}
              className="issue-related__card"
            >
              <img src={`/images/${item.coverImage}`} alt={item.title} />

              <div className="overlay">
                <span>{item.season}</span>

                <h4>{item.title}</h4>

                <button type="button">READ MORE →</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default IssueDetailPage;
