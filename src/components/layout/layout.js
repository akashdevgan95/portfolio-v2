import React from "react";

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.scss';

//Navigation
import Navigation from '../navigation/navigation';
import Social from '../social/social';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Navigation />
        <Social />
      {children}
    </React.Fragment>
  )
}

export default Layout;