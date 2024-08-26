import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return(
        <button className = 'loginbutton' onClick = {handleClick}>
            Login
        </button>
    );
};

export default LoginButton;