import React, {useState} from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import './Form.css';

function Form({route, method}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === 'login' ? 'Login' : 'Register';

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try{
            const res = await api.post(route, {username, password});
            if(method === 'login'){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/');
            }else{
                navigate('/login');
            }
        }
        catch(error){
            alert(error);
        }finally{
            setLoading(false);
        };
    };
                
    return <form className = 'form' onSubmit = {handleSubmit}>
        <div className = 'usernamefield'>
            <p>Enter Username:</p>
            <input 
                type = 'text' 
                value = {username} 
                onChange = {(e) => setUsername(e.target.value)}
                placeHolder = 'Username'
            >
            </input>
        </div>
        <div className = 'passwordfield'>
            <p>Enter Password:</p>
            <input 
                type = 'password' 
                value = {password} 
                onChange = {(e) => setPassword(e.target.value)}
                placeHolder = 'Password'
            >
            </input>
        </div>
        <button type = 'submit'>{name}</button>
    </form>
}

export default Form;