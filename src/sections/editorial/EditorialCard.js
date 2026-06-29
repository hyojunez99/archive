import "./EditorialSection.scss";
import { useNavigate } from "react-router-dom";

const EditorialCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <article className="editorial-card">
      <div className="editorial-card__content">
        <span className="editorial-card__eyebrow">{item.eyebrow}</span>

        <h2 className="editorial-card__title">{item.title}</h2>

        <div className="editorial-card__line" />

        <h4>{item.subtitle}</h4>

        <p>{item.description}</p>

        <button onClick={() => navigate(`/issue/${item.id}`)}>
          {item.link} →
        </button>
      </div>

      <div className="editorial-card__image">
        <img src={`/images/${item.image}`} alt={item.alt} />
      </div>
    </article>
  );
};

export default EditorialCard;
