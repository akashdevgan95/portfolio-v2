import React from "react";

//components
import Layout from '../components/layout/layout';
import Intro from '../sections/intro/intro';
import About from '../sections/about/about';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <About />
    </Layout>
  );
}

export default IndexPage
