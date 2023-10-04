import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Projects.module.css";

const Projects = ({ items }) => {
  return (
    <div>
      <div>Projects: </div>
      <div className={styles.cardsContainer}>
        {items.map((item) => {
          return (
            <Card
              title={item.name}
              text={item.description}
              link={item.link}
              imageLink={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
