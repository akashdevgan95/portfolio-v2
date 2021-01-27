import React from 'react';
import {Col} from 'reactstrap';

// images
import linkImage from '../../images/link.svg';

const ProjectTile = ({title,description,technologies}) => {
    return (
        <div className='project-tile p-3'>
            <div className='project-name'>
                <h4 className='gray-color-text m-0'>{title}</h4>
                <a href='#'>
                    <img src={linkImage} alt='Link image' />
                </a>
            </div>
            <p className='gray-color-text my-4'>{description}</p>
            <div className='technologies-used'>
                {technologies.map(technology => <span className='gray-color-text'>{technology}</span>)}
            </div>
            
        </div>
    )
}

export default ProjectTile;