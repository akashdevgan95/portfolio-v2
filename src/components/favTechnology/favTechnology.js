import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import chevron from '../../images/chevron.svg';

//data
import data from '../../data/favTechnologies.json';

const FavTechnologies = (props) => {
 return (
        <div className='technologies'>
            {
                data.technologies.map(technology => {
                    return (
                        <span key={uuidv4()} className='gray-color-text'>
                            <img src={chevron} alt={technology} className='mr-2' />{technology}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default FavTechnologies;