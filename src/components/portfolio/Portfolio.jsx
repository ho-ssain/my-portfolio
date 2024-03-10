import "./Portfolio.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">
        Every project represents a distinctive development endeavor.
      </span>

      <Projects />
    </div>
  );
};

export default Portfolio;
