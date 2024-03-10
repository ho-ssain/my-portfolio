import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Hossain</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer-link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://github.com/ho-ssain"
            className="footer-social-icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://twitter.com/awarehossain"
            className="footer-social-icon"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://linkedin.com/in/md-hossain-kabir"
            className="footer-social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer-copy">
          &#169; 2024 Hossain Kabir | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
