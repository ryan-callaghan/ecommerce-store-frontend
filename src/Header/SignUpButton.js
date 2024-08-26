import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    };

    return(
        <button className = 'signupbutton' onClick = {handleClick}>
            Sign Up
        </button>
    );
};

export default SignUpButton;