import React from "react";
import styles from "./WorkExp.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <section>
        <div className={styles.skewed}></div>
      </section>
      <div style={{ backgroundColor: "#A0C1F2" }}>
        <h2 className={styles.header}>Work Experience: </h2>
        <div className={styles.container}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2022 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Application Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">PSL Group</h4>
              <p>
                Completely front-end development, coding with React JS and SCSS,
                component creation and correction of errors related to tracking,
                style and DOM logic.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Veyron</h4>
              <p>
                Developing specialized software for IFS (ERP) with clients in
                Mexico, developing with Oracle. Also in Front End with CSS and
                Javascript.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Front End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                CIITA Chihuahua
              </h4>
              <p>
                Development of the CIITA Chihuahua website, (center of research
                of the National Polytechnic Institute), working with React, Git,
                Javascript, NodeJS and CSS
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
          <section className={styles.containerWave}>
            <div className={styles.wave}></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
