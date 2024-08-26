import React from 'react';
import './LoginBase.css';
import HeaderContainer from '../../Header/HeaderContainer';
import Form from '../.././Form/Form';

const LoginBase = () => {
    return(
        <div className = 'loginbase'>
            <HeaderContainer></HeaderContainer>
            <div className = 'loginbox'>
                <Form route = '/api/token/' method = 'login'></Form>
            </div>
        </div>
    );
};

export default LoginBase;