import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const MiniNav = ({navItems}) => {

    const handleButtonclick = () => {
        console.log('clicked');
    }
  
    return (
        <div className='miniNav mb-5'>
            {
                navItems.map((navItem,i) => <button key={uuidv4()} onClick={handleButtonclick} className={i === 0 ? 'active p-3':'p-3'}>{navItem}</button>)
            }
        </div>
    )
}

export default MiniNav;