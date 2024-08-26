import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ( {onClick} ) => {
    
    return(
        <button className = "togglebtn" onClick = {onClick}>
            <div className = "menu-icon">
                <div className = "bar"></div>
                <div className = "bar"></div>
                <div className = "bar"></div>
            </div>
        </button>
    );
};

export default ToggleButton;