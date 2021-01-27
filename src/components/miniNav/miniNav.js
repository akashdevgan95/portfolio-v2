import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Row, Col} from 'reactstrap';

const MiniNav = ({activeTab,onClick,navItems}) => {

    return (
        <Row>
            <Col>
                <div className='miniNav mb-5'>
                    {
                        navItems.map((navItem,i) => <button key={uuidv4()} onClick={onClick} className={activeTab === navItem ? 'active p-3':'p-3'}>{navItem}</button>)
                    }
                    <span className='placeholder-highlighter'></span>
                </div>
            </Col>
        </Row>
    )
}

export default MiniNav;