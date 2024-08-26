import React from 'react';
import './MidContainer.css';
import SidebarContainer from './Sidebar/SidebarContainer';
import Banner from './Banner/Banner';

const MidContainer = () => {
    return(
        <div className = 'midcontainer'>
            <SidebarContainer></SidebarContainer>
            <Banner></Banner>
        </div>
    )
}

export default MidContainer;