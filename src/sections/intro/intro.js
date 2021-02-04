import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Link } from "react-scroll";

//arrow down
import arrowDown from '../../images/arrow.svg';

const Intro = () => {
    return (
        <Container className='intro'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }}  className='offset-md-2 offset-lg-1'>
                    <h3 className='green-color-text m-0'>Hi, I am</h3>
                    <h1 className='white-color-text mt-2 mb-4'>Akash Devgan</h1>
                    <p className='gray-color-text w-md-50 mb-4'>I am a Web Developer based in Toronto, Canada. My expertise is in building web applications, landing  pages and anything in between.
                    </p>
                    <section className='header-cta'>
                        <a href='https://drive.google.com/file/d/1XfRC1jkgRWsLdTMbMWrN_jAvggBB3DK5/view?usp=sharing' target='_blank' className='green-btn p-2 px-4'>Download CV</a>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='green-border-btn mt-4 mt-md-0 ml-md-4 p-2 px-4'
                        >Contact Me</Link>
                    </section>
                </Col>
            </Row>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
            > <img alt='Arrow Down Icon' src={arrowDown} /></Link>
        </Container>
    );
}

export default Intro;