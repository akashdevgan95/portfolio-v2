import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

// data
import data from '../../data/experience.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import TimelineItem from '../../components/timelineItem/timelineItem';
import MiniNav from '../../components/miniNav/miniNav';

const Experience = () => {

 
    const positions = data.companies.map((company,i) => {
        const jobPosition = data[company].map(position => <TimelineItem key={uuidv4()} {...position} />);
        return <div key={uuidv4()} className={i === 0 ? `${company} active` : `${company} d-none`}>{jobPosition}</div>;
    });

    return (
        <Container className='experience mt-5 pt-5 mt-md-0 pt-md-0'>
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
                        <Col className='job-positions'>
                            {positions}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;