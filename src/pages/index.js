import React from "react";

//components
import Layout from '../components/layout/layout';
import Intro from '../sections/intro/intro';
import About from '../sections/about/about';
import Experience from '../sections/experience/experience';
import Projects from '../sections/projects/projects';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
}

export default IndexPage
