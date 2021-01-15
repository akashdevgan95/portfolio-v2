import React from 'react';
import {Container, Row, Col} from 'reactstrap';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';

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
                    <Row></Row>
                </Col>
                
            </Row>
        </Container>
    );
}

export default About;