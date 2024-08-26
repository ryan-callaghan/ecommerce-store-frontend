import React from 'react';
import './BaseContainer.css';
import HeaderContainer from '../Header/HeaderContainer';
import MidContainer from '../Mid/MidContainer';
import InventoryContainer from '../Inventory/InventoryContainer';

const BaseContainer = () => {
    return(
        <div className = 'basecontainer'>
            <HeaderContainer></HeaderContainer>
            <MidContainer></MidContainer>
            <InventoryContainer></InventoryContainer>
        </div>
    )
}

export default BaseContainer;