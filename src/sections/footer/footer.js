import React from 'react';
import {Container, Row, Col} from 'reactstrap';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import Input from '../../components/input/input';

const Footer = () => {
    return (
        <footer className='projects mt-5 pt-5 mt-md-0 pt-md-0 container'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                    <Row>
                        <Col>
                            <SectionHeading title='Get in Touch'/>
                            <p className='gray-color-text'>Do you have project in mind? Let's chat</p>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={{ size: 12 }} md={{ size: 3 }} className='form-container'>
                            <Input name='Name'/>
                        </Col>
                        <Col xs={{ size: 12 }} md={{ size: 3 }}>
                            <Input name='Email'/>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={{ size: 6 }} className='form-container'>
                            <Input name='Message'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-5'>
                            <button className='green-border-btn mt-4 p-2 px-4'>Send</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;