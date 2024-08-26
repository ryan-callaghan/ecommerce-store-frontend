import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    }

    return(
        <button className = 'cartbutton' onClick = {handleClick}>Cart</button>
    );
};

export default CartButton;