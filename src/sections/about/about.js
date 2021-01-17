import React from 'react';
import {Container, Row, Col} from 'reactstrap';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';

//Image
import MyImage from '../../images/my-image.jpg';

const About = () => {
    return (
        <Container className='about'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} className='offset-md-2 offset-lg-1'>
                    <Row>
                        <Col>
                            <SectionHeading title='About me'/>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={{ size: 10 }} md={{ size: 6, offset: 0 }}>
                           <div className='image-container'> 
                           <svg className='top-border' viewBox="0 0 202 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.03119" y1="4.96856" x2="5.53421" y2="196.963" stroke="#66FCF1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="198" y1="5.00251" x2="5.99995" y2="5.00003" stroke="#66FCF1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                                <img className='img-fluid' src={MyImage} /> 
                                <svg className='bottom-border'  viewBox="0 0 201 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="196" y1="197.911" x2="4.00002" y2="197.911" stroke="#66FCF1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <line x1="196.018" y1="196" x2="196.018" y2="4" stroke="#66FCF1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                           </div>
                        </Col>
                        <Col xs={{ size: 10 }} sm={{ size: 6, offset: 0 }}>
                            <p className='gray-color-text'>Hello! my name is Akash Devgan. I’m a web developer based in Toronto, Canada. </p>
                            <p className='gray-color-text'>I’m super passiante about build things for the web. My goal is always to build applications that not only load fast but also deliver great user experience.</p>
                            <p className='gray-color-text'>Some of my favourite techologies to work with are :</p>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </Container>
    );
}

export default About;