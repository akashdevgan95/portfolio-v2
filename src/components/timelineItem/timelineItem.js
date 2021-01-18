import React from 'react';

import chevron from '../../images/chevron.svg';

const timelineItem = ({title,time,responsibilities}) => {
    
    return (
        <div class="timeline-item">
				<div class="timeline-icon">
					

				</div>
				<div class="timeline-content">
                    <p className='gray-color-text mb-2'>{time}</p>
					<h6 className='green-color-text mb-4'>{title}</h6>
					
					<div>{responsibilities.map(resposibility => <span className='gray-color-text mb-1'><img src={chevron} className='mr-2' />{resposibility}</span>)}</div>
				</div>
			</div>
    )
}

export default timelineItem;