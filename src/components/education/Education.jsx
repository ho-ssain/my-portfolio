import { useState } from "react";
import "./Education.css";

const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section education" id="education">
      <h2 className="section-title">Education</h2>
      <span className="section-subtitle">My Educational background</span>

      <div className="education-container container">
        <div className="education-tabs">
          <div
            className={
              toggleState === 1
                ? "education-button education-active button-flex"
                : "education-button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap education-icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "education-button education-active button-flex"
                : "education-button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase education-icon"></i> Certification
          </div>
        </div>

        <div className="education-sections">
          {/* ================================ */}
          <div
            className={
              toggleState === 1
                ? "education-content education-content-active"
                : "education-content"
            }
          >
            <div className="education-data">
              <div>
                <h3 className="education-title">
                  BSc. In Computer Science and Engineering
                </h3>
                <span className="education-subtitle">
                  American International University Bangladesh
                </span>
                <div className="education-calender">
                  <i className="uil uil-location-point"></i> Dhaka, bangladesh.
                </div>
              </div>

              <div>
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>
            </div>

            <div className="education-data">
              <div></div>

              <div>
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>

              <div>
                <h3 className="education-title">HSC In Science</h3>
                <span className="education-subtitle">
                  Comilla Govt. College
                </span>
                <div className="education-calender">
                  <i className="uil uil-location-point"></i> Comilla,
                  Bangladesh.
                </div>
              </div>
            </div>

            <div className="education-data">
              <div></div>

              <div>
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>

              <div>
                <h3 className="education-title">SSC In Science </h3>
                <span className="education-subtitle">
                  Comilla Modern High School
                </span>
                <div className="education-calender">
                  <i className="uil uil-location-point"></i> Comilla,
                  Bangladesh.
                </div>
              </div>
            </div>
          </div>

          {/* ================================ */}
          <div
            className={
              toggleState === 2
                ? "education-content education-content-active"
                : "education-content"
            }
          >
            <div className="education-data">
              <div>
                <h3 className="education-title">Cisco Cybercops Associate</h3>
                <span className="education-subtitle">Cisco Academy</span>
                <div className="education-calender">
                  <i className="bx bx-badge-check"></i>
                  &nbsp;
                  <a
                    href="https://www.credly.com/badges/47b3a1a6-c7b3-4f08-8df5-d6e4fe02969a/public_url"
                    target="_blank"
                  >
                    Badge
                  </a>
                </div>
              </div>

              <div>
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>
            </div>

            <div className="education-data">
              <div></div>

              <div>
                <span className="education-rounder"></span>
                <span className="education-line"></span>
              </div>

              <div>
                <h3 className="education-title">Programming for Everybody</h3>
                <span className="education-subtitle">Coursera Academy</span>
                <div className="education-calender">
                  <i className="bx bx-badge-check"></i>
                  &nbsp;
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/Z83JCHQ2LKH3"
                    target="_blank"
                  >
                    Badge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
