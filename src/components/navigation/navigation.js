import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

// css
import './navigation.scss';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar expand='md' className='p-3 p-sm-5'>
            <NavbarBrand href='/'>
                <svg viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='99' height='99' stroke='#66FCF1'/>
                    <path d='M59.4688 65.4531H40.9766L37.4609 76H26.2461L45.3008 24.8125H55.0742L74.2344 76H63.0195L59.4688 65.4531ZM43.8242 56.9102H56.6211L50.1875 37.75L43.8242 56.9102Z' fill='#66FCF1'/>
                </svg>
            </NavbarBrand>
            <div className={isOpen ? 'hamburger-container active d-md-none' : 'hamburger-container d-md-none'} onClick={toggle}>
                <div className='hamburger-icon'></div>
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem className='mx-md-3'>
                        <NavLink href='#about'>About</NavLink>
                    </NavItem>
                    <NavItem className='mx-md-3'>
                        <NavLink href='#experience'>Experience</NavLink>
                    </NavItem>
                    <NavItem className='mx-md-3'>
                        <NavLink href='#projects'>Projects</NavLink>
                    </NavItem>
                    <NavItem className='mx-md-3'>
                        <NavLink href='#blog'>Blog</NavLink>
                    </NavItem>
                    <NavItem className='mx-md-3'>
                        <NavLink href='#contact' className='green-btn px-sm-3'>Hire me</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;