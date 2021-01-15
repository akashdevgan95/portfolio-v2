import React from 'react';
import {Container, Row, Col} from 'reactstrap';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';

//Image
import MyImage from '../../images/my-image.jpg';

const About = () => {
    return (
        <Container className='About'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} className='offset-md-2 offset-lg-1'>
                    <Row>
                        <Col>
                            <SectionHeading title='About me'/>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 0 }}>
                           <img className='img-fluid' src={MyImage} /> 
                        </Col>
                        <Col xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 0 }}>
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