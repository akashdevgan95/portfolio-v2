import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import chevron from '../../images/chevron.svg';

const timelineItem = ({title,time,responsibilities}) => {
    
    return (
        <div  className="timeline-item ml-5 pl-4">
				<div className="timeline-icon">
					

				</div>
				<div className="timeline-content">
                    <p className='gray-color-text mb-2'>{time}</p>
					<h6 className='green-color-text mb-4'>{title}</h6>
					
					<div>{responsibilities ? responsibilities.map(resposibility => <span key={uuidv4()} className='gray-color-text mb-3 mb-md-2'><img alt='chevron' src={chevron} className='mr-2' />{resposibility}</span>) : ''}</div>
				</div>
			</div>
    )
}

export default timelineItem;