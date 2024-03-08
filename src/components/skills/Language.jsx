const Language = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Language</h3>

      <div className="skills-box">
        <div className="skills-group">
          {/*--============ HTML5 =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">HTML5</h3>
              <span className="skills-level">
                <i className="bx bxl-html5"></i>
              </span>
            </div>
          </div>

          {/*--============= CSS3 ============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">CSS3</h3>
              <span className="skills-level">
                <i className="bx bxl-css3"></i>
              </span>
            </div>
          </div>

          {/*--============= C++ ============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">C++</h3>
              <span className="skills-level">
                <i className="bx bxl-c-plus-plus"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="skills-group">
          {/*--============= JavaScript ============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">JavaScript</h3>
              <span className="skills-level">
                <i className="bx bxl-javascript"></i>
              </span>
            </div>
          </div>

          {/*--============ TypeScript =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">TypeScript</h3>
              <span className="skills-level">
                <i className="bx bxl-typescript"></i>
              </span>
            </div>
          </div>

          {/*--============ Python =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Python</h3>
              <span className="skills-level">
                <i className="bx bxl-python"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
