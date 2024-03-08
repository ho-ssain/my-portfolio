const Technology = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Technology</h3>

      <div className="skills-box">
        <div className="skills-group">
          {/*--============ React =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">React.js</h3>
              <span className="skills-level">
                <i className="bx bxl-react"></i>
              </span>
            </div>
          </div>

          {/*--========== Redux ===============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Redux</h3>
              <span className="skills-level">
                <i className="bx bxl-redux"></i>
              </span>
            </div>
          </div>

          {/*--========== SaaS ===============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">SaaS</h3>
              <span className="skills-level">
                <i className="bx bxl-sass"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          {/*--=========== Tailwind.css==============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Tailwind</h3>
              <span className="skills-level">
                <i className="bx bxl-tailwind-css"></i>
              </span>
            </div>
          </div>

          {/*--============ Node.js =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Node.js</h3>
              <span className="skills-level">
                <i className="bx bxl-nodejs"></i>
              </span>
            </div>
          </div>

          {/*--============ MongoDB =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">MongoDB</h3>
              <span className="skills-level">
                <i className="bx bxl-mongodb"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
