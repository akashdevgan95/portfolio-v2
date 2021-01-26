import React from 'react';
import {Col} from 'reactstrap';

// images
import linkImage from '../../images/link.svg';

const ProjectTile = ({title,description,technologies}) => {
    return (
        <Col className='project-tile' sm={{ size: 12}} md={{ size: 4 }}>
            <h4 className='gray-color-text'>{title}</h4>
            <p className='gray-color-text'>{description}</p>
            <div className='technologies-used'>
                {technologies.map(technology => <span className='gray-color-text'>{technology}</span>)}
            </div>
            <img src={linkImage} alt='Link image' />
        </Col>
    )
}

export default ProjectTile;