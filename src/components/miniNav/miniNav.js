import React from 'react';

const MiniNav = ({navItems}) => {
    console.log(navItems);
    return (
        <div className='miniNav mb-5'>
            {
                navItems.map((navItem,i) => <button className={i == 0 ? 'active p-3':'p-3'}>{navItem}</button>)
            }
        </div>
    )
}

export default MiniNav;