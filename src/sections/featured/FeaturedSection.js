import "./FeaturedSection.scss";

import featured from "../../assets/data/featured.json";

const FeaturedSection = () => {
  const item = featured[0];

  return (
    <section className="featured">
      <div className="featured__image">
        <img
          src={`${process.env.PUBLIC_URL}/images/${item.image}`}
          alt={item.title}
        />
      </div>

      <div className="featured__content">
        <span className="featured__category">{item.category}</span>

        <h2 className="featured__title">{item.title}</h2>

        <button className="featured__button">
          {item.link}
          <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default FeaturedSection;
