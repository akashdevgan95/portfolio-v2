import React, { useState, useEffect } from 'react';
import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from "react-scroll";



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
                <svg viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect x='0.5' y='0.5' width='99' height='99' stroke='#66FCF1'/>
                    <path d='M59.4688 65.4531H40.9766L37.4609 76H26.2461L45.3008 24.8125H55.0742L74.2344 76H63.0195L59.4688 65.4531ZM43.8242 56.9102H56.6211L50.1875 37.75L43.8242 56.9102Z' fill='#66FCF1'/>
                </svg>
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