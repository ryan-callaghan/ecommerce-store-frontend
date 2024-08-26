import React from 'react';
import { useNavigate } from 'react-router-dom';
import gum from '../Images/gum.jpg';

const GumFruit = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return(
        <img src = {gum} alt = "Gum" onClick = {handleClick}></img>
    );
};

export default GumFruit;