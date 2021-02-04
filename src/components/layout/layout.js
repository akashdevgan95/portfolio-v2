import React from "react";
import { Helmet } from "react-helmet"

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.scss';

//Navigation
import Navigation from '../navigation/navigation';
import Social from '../social/social';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Akash Devgan - Web Developer</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navigation />
        <Social />
      {children}
    </React.Fragment>
  )
}

export default Layout;