import React from 'react';
import {Container, Row, Col} from 'reactstrap';

// data
import data from '../../data/experience.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';

const Experience = () => {
    console.log(data);
    return (
        <Container className='experience'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }}  className='offset-md-2 offset-lg-1'>
                    <Row>
                        <Col>
                            <SectionHeading title='Work Experience'/>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;