import React, { useState, useEffect } from 'react';
import {Collapse, Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { Link } from "react-scroll";

//logo
import logo from '../../images/logo.svg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [scrollDirection, setScrollDirection] = useState('');
    const [prevOffset, setPrevOffset] = useState(0);
    const [scrollToTop, setScrollToTop] = useState(true);

    const toggleScrollDirection = () => {
        let scrollY = window.scrollY;


        if(scrollY === 0){
            setScrollToTop(true);
            return;
        }else{
            setScrollToTop(false);
        }
        
        if(scrollY > prevOffset){
            setScrollDirection('down');
        }else if(scrollY < prevOffset){
            setScrollDirection('up');
        }

        setPrevOffset(scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleScrollDirection);
        return () => {
            window.removeEventListener("scroll", toggleScrollDirection);
        }
    });

    let navClasses = 'p-3 px-md-5 active w-100';

    if(scrollToTop === true){
        navClasses = navClasses + ' top'
    }else if(scrollDirection === 'up'){
        navClasses = navClasses + ' up'
    }else if(scrollDirection === 'down'){
        navClasses = navClasses + ' down'
    }

    
    return (
        <Navbar className={navClasses} expand='md'>
            <NavbarBrand href='/'>
                <img src={logo} alt='Akash Devgan - Web Developer'/>
            </NavbarBrand>
            <div className={isOpen ? 'hamburger-container active d-md-none' : 'hamburger-container d-md-none'} onClick={toggle}>
                <div className='hamburger-icon' onClick={toggle}></div>
            </div>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem className='my-2 my-md-0 mx-md-3'>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='nav-link'
                        onClick={toggle}
                    >About</Link>
                       
                    </NavItem>
                    <NavItem className='my-2 my-md-0 mx-md-3'>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link'
                            onClick={toggle}
                        >Experience</Link>
                    </NavItem>
                    <NavItem className='my-2 my-md-0 mx-md-3'>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link'
                            onClick={toggle}
                        >Projects</Link>
                    </NavItem>
                    <NavItem className='my-2 my-md-0 mx-md-3'>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='nav-link green-btn px-sm-3'
                            onClick={toggle}
                        >Contact</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;