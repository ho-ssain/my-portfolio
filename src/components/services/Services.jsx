import { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What I Offer</span>

      <div className="services-container container grid">
        {/*--========================================--*/}
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              User Interface <br /> Development
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>
            View More &nbsp;
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "active-modal services-model"
                : "services-model"
            }
          >
            <div className="services-model-content">
              <i
                className="uil uil-times services-model-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services-model-title">
                User Interface Development
              </h3>
              <p className="services-model-description">
                Designing and implementing visually appealing and intuitive user
                interfaces using HTML, CSS, and JavaScript frameworks like React
              </p>

              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Designing intuitive and visually appealing interfaces.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Implementing responsive design for multi-device
                    compatibility.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Collaborating with designers to translate mockups into code.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Using modern frameworks like React for dynamic UIs.
                  </p>
                </li>
                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Conducting usability tests and iterating based on feedback.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*--========================================--*/}
        <div className="services-content">
          <div>
            <i className="uil uil-setting services-icon"></i>
            <h3 className="services-title">
              Performance <br /> Optimization
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(2)}>
            View More &nbsp;
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "active-modal services-model"
                : "services-model"
            }
          >
            <div className="services-model-content">
              <i
                className="uil uil-times services-model-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services-model-title">Performance Optimization</h3>
              <p className="services-model-description">
                Ensuring fast loading times and smooth user experiences by
                optimizing front-end code, reducing page load times, and
                implementing performance best practices
              </p>

              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Identifying and resolving performance bottlenecks.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Implementing code-splitting and lazy loading techniques.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Minifying and compressing assets for faster loading.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Utilizing caching and CDNs to improve load times.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Monitoring metrics to guide ongoing optimization efforts.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*--========================================--*/}
        <div className="services-content">
          <div>
            <i className="uil uil-server-connection services-icon"></i>
            <h3 className="services-title">
              API <br /> Integration
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            View More &nbsp;
            <i className="uil uil-arrow-right services-button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "active-modal services-model"
                : "services-model"
            }
          >
            <div className="services-model-content">
              <i
                className="uil uil-times services-model-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services-model-title">API Integration</h3>
              <p className="services-model-description">
                Integrating front-end interfaces with back-end systems through
                RESTful or GraphQL APIs to fetch and display dynamic data,
                enable user authentication, and facilitate interactive user
                experiences
              </p>

              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Designing API endpoints for front-end needs.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Utilizing libraries like Axios for asynchronous calls.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Securing communications with OAuth or JWT.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Implementing robust error handling mechanisms.
                  </p>
                </li>

                <li className="services-model-service">
                  <i className="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Documenting API usage for clarity and consistency.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
