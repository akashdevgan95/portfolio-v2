import React from "react";
import { Container } from 'reactstrap';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/styles.scss';

//Navigation
import Navigation from '../navigation/navigation';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Navigation />
      {children}
    </React.Fragment>
  )
}

export default Layout;