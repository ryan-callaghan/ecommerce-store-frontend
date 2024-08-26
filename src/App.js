import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import CartPage from './Pages/CartPage/CartPage';
import NotFound from './Pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

function Logout(){
  localStorage.clear();
  return <Navigate to = '/login'></Navigate>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <RegisterPage></RegisterPage>
}

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "" element = {<HomePage></HomePage>}></Route>
        <Route path = "/login" element = {<LoginPage></LoginPage>}></Route>
        <Route path = "/register" element = {<RegisterPage></RegisterPage>}></Route>
        <Route path = "/cart" element = {<CartPage></CartPage>}></Route>
        <Route path = '*' element = {<NotFound></NotFound>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
