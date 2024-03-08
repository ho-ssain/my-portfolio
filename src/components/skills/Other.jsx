const Other = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Other</h3>

      <div className="skills-box">
        {/* --==============================--  */}
        <div className="skills-group">
          {/*--============ Git =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Git</h3>
              <span className="skills-level">
                <i className="bx bxl-git"></i>
              </span>
            </div>
          </div>

          {/*--============ Github =============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Github</h3>
              <span className="skills-level">
                <i className="bx bxl-github"></i>
              </span>
            </div>
          </div>

          {/*--========= Command Line Tools ================--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">CLI</h3>
              <span className="skills-level">
                <i className="bx bx-terminal"></i>
              </span>
            </div>
          </div>
        </div>

        {/* --==============================--  */}
        <div className="skills-group">
          {/*--=========== Package Managers ==============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">npm</h3>
              <span className="skills-level">
                <i className="bx bx-package"></i>
              </span>
            </div>
          </div>

          {/*--=========== Package Managers ==============--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">yarn</h3>
              <span className="skills-level">
                <i className="bx bx-package"></i>
              </span>
            </div>
          </div>

          {/*--========= Visual Studio Code ================--*/}
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">VScode</h3>
              <span className="skills-level">
                <i className="bx bx-code-block"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
