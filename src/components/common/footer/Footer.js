import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__eyebrow">Subscribe</span>

          <h2 className="footer__title">
            Receive each
            <br />
            edition first
          </h2>

          <p className="footer__description">
            Join over 40,000 readers who receive Archive before it reaches
            newsstands. Complimentary digital access, archive browsing and event
            invitations.
          </p>
        </div>

        <div className="footer__right">
          <div className="footer__input-wrap">
            <input type="email" placeholder="Your email address" />
          </div>

          <button className="footer__button">Subscribe to Archive →</button>

          <p className="footer__notice">
            No advertisements. No data sharing. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
