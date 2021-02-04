import React from 'react';
import { v4 } from 'uuid';

// images
import linkImage from '../../images/link.svg';

const ProjectTile = ({title,description,technologies,link}) => {
    return (
        <div className='project-tile p-3'>
            <div className='project-name'>
                <h4 className='gray-color-text m-0'>{title}</h4>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={linkImage} alt='Project' />
                </a>
            </div>
            <p className='gray-color-text my-4'>{description}</p>
            <div className='technologies-used'>
                {technologies.map(technology => <span key={v4()} className='gray-color-text'>{technology}</span>)}
            </div>
            
        </div>
    )
}

export default ProjectTile;