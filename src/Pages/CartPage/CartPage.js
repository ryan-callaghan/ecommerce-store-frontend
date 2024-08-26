import React from 'react';
import './CartBase.css';
import boss from '../.././Images/mrboss.jpg';
import hoodie from '../.././Images/hoodie.jpg';
import HeaderContainer from '../../Header/HeaderContainer';

const CartPage = () => {
    return(
        <div className = 'cartbase'>
            <HeaderContainer></HeaderContainer>
            <div className = 'cartbox'>
                <div className = 'cartitem'>
                    <img src = {hoodie}></img>
                    <p>Item name here</p>
                </div>
                <div className = 'cartitem'>Hello</div>
                <div className = 'cartitem'>Hello</div>
            </div>
        </div>
    )
};

export default CartPage;