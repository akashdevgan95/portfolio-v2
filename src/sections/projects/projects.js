import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

// data
import data from '../../data/projects.json';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import ProjectTile from '../../components/projectTile/projectTile';
import MiniNav from '../../components/miniNav/miniNav';

const Projects = () => {

    const [activeTab, setActiveTab] = useState(data.companies[0]);

    const projects = data[activeTab] || [];

    console.log(projects);

    const handleMiniNavButtonClick = (e) => {
       setActiveTab(e.target.innerText)
    }

    return (
        <Container className='projects mt-5 pt-5 mt-md-0 pt-md-0'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
                    <Row>
                        <Col>
                            <SectionHeading title='Projects'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                    
                            <MiniNav activeTab={activeTab} onClick={handleMiniNavButtonClick} navItems={data.companies} />
                            </Col>
                    </Row>
                    <Row className='pl-3 project-list'>
                        <Col>
                            <Row>
                            {projects.map(project => <ProjectTile {...project} />)}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;