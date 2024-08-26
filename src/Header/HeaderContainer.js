import React from 'react';
import {jwtDecode} from 'jwt-decode';
import './HeaderContainer.css';
import GumFruit from './GumFruit';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import CartButton from './CartButton';

const HeaderContainer = () => {
   
    /*const isLoggedIn = () => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        return token !== null;
    }

    const username = () => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        if(token){
            const decodedToken = jwtDecode(token);
            username = decodedToken.username;
        }
    <div>{isLoggedIn ? <p>Hello, {username}</p> : null}</div>
    }*/
   
    return(
        <div className = 'headercontainer'>
            
            <div className = 'item1'>
                <GumFruit></GumFruit>
            </div>
            
            <div className = 'item2'>
                <p>Merchandise Store</p>
            </div>
            
            <div className = 'item3'>
                <LoginButton></LoginButton>
                <SignUpButton></SignUpButton>
                <CartButton></CartButton>
            </div>
        </div>
   ) 
}

export default HeaderContainer;