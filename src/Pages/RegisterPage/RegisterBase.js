import React from 'react';
import './RegisterBase.css';
import HeaderContainer from '../../Header/HeaderContainer';
import Form from '../.././Form/Form';

const RegisterBase = () => {
    return(
        <div className = 'registerbase'>
            <HeaderContainer></HeaderContainer>
            <div className = 'registerbox'>
                <Form route = '/api/user/register/' method = 'register'></Form>
            </div>
        </div>
    );
};

export default RegisterBase;