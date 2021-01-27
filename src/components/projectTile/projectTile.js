import React from 'react';
import {Col} from 'reactstrap';

// images
import linkImage from '../../images/link.svg';

const ProjectTile = ({title,description,technologies}) => {
    return (
        <div className='project-tile p-3'>
         
                <h4 className='gray-color-text'>{title}</h4>
                <p className='gray-color-text my-4'>{description}</p>
                <div className='technologies-used'>
                    {technologies.map(technology => <span className='gray-color-text'>{technology}</span>)}
                </div>
                <img src={linkImage} alt='Link image' />
         
        </div>
    )
}

export default ProjectTile;