import React from 'react';
import {Container, Row, Col} from 'reactstrap';

// data
import data from '../../data/experience.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import TimelineItem from '../../components/timelineItem/timelineItem';

const Experience = () => {
 

    const positions = data.companies.map(company => {
        const jobPosition = data[company].map(position => <TimelineItem {...position} />);
        return jobPosition;
    });

    return (
        <Container className='experience'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }}  className='offset-md-2 offset-lg-1'>
                    <Row>
                        <Col>
                            <SectionHeading title='Work Experience'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {positions}
                        </Col>
                    </Row>
                    <Row></Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;