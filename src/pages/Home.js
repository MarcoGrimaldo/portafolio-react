import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Projects from "../modules/Projects/Projects";
import AboutMe from "../modules/AboutMe/AboutMe";
import WorkExp from "../modules/WorkExp/WorkExp";

import mock from "../ServiceMock.json";

const {
  sections: { banner, projects, aboutMe },
} = mock;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner
        greeting={banner.greeting}
        name={banner.name}
        textBottom={banner.textBottom}
      />
      <AboutMe
        me={aboutMe.me}
        devInfo={aboutMe.devExp}
        education={aboutMe.education}
      />
      <Projects items={projects} />
      <WorkExp />
    </div>
  );
};

export default Home;
