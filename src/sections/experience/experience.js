import React from 'react';
import {Container, Row, Col} from 'reactstrap';

// data
import data from '../../data/experience.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import TimelineItem from '../../components/timelineItem/timelineItem';
import MiniNav from '../../components/miniNav/miniNav';

const Experience = () => {

    console.log(data);
 
    const positions = data.companies.map(company => {
        const jobPosition = data[company].map(position => <TimelineItem {...position} />);
        return <div className={company}>{jobPosition}</div>;
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
                            <MiniNav navItems={data.companies}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {positions}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;