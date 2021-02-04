import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';
import { v4 } from 'uuid';

// data
import data from '../../data/experience.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import TimelineItem from '../../components/timelineItem/timelineItem';
import MiniNav from '../../components/miniNav/miniNav';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(data.companies[0]);


    const positions = data[activeTab] || [];

    const handleMiniNavButtonClick = (e) => {
       setActiveTab(e.target.innerText)
    }

    return (
        <Container className='experience mt-5 pt-5 mt-md-0 pt-md-0'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
                    <Row>
                        <Col>
                            <SectionHeading title='Work Experience'/>
                        </Col>
                    </Row>
                    
                    <MiniNav activeTab={activeTab} onClick={handleMiniNavButtonClick} navItems={data.companies} />

                    <Row>
                        <Col className='job-positions'>
                            {positions.map(position => <TimelineItem key={v4()} {...position} />)}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;