/* eslint-disable react/prop-types */

import { useState } from "react";

const WorksItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work-card" key={item.id}>
      <video className="work-video" controls autoPlay muted loop>
        <source src={item.video} type="video/webm" />
      </video>

      <h3 className="work-title">{item.title}</h3>

      <span className="work-button" onClick={() => toggleTab(1)}>
        View More <i className="uil uil-arrow-right work-button-icon"></i>
      </span>

      <a href={item.liveLink} className="work-button" target="_blank">
        Live Demo <i className="bx bx-link-external work-button-icon"></i>
      </a>

      <a href={item.code} className="work-button" target="_blank">
        Code <i className="bx bxl-github work-button-icon"></i>
      </a>

      <div
        className={
          toggleState === 1 ? "active-modal services-model" : "services-model"
        }
      >
        <div className="services-model-content">
          <i
            className="uil uil-times services-model-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="services-model-title">{item.title}</h3>
          <p className="services-model-description">{item.desc}</p>

          <ul className="services-model-services grid">
            {item.tech.map((val, i) => (
              <li className="services-model-service" key={i}>
                <i className="uil uil-check-circle services-model-icon"></i>
                <p className="services-model-info">{val}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;
