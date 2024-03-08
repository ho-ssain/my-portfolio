import Language from "./Language";
import Other from "./Other";
import "./Skills.css";
import Technology from "./Technology";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Skills</span>

      <div className="skills-container container grid">
        <Language />
        <Technology />
        <Other />
      </div>
    </section>
  );
};

export default Skills;
