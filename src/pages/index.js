import React from "react";

//components
import Layout from '../components/layout/layout';
import Intro from '../sections/intro/intro';
import About from '../sections/about/about';
import Experience from '../sections/experience/experience';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Experience />
    </Layout>
  );
}

export default IndexPage
