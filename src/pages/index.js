import React from "react";

//components
import Layout from '../components/layout/layout';
import Intro from '../sections/intro/intro';
import About from '../sections/about/about';
import Experience from '../sections/experience/experience';
import Projects from '../sections/projects/projects';
import Update from '../sections/update/update';
import Footer from '../sections/footer/footer';

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Layout>
  );
}

export default IndexPage
