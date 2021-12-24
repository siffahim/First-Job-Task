import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, error } = useFirebase();

    //get all values from input field
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newLogin = { ...loginData };
        newLogin[name] = value;
        setLoginData(newLogin);
    }
    const handleSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
    }
    return (
        <>
            <Navigation />
            <div className='text-center form-container'>
                <h1 className='text-white'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input className='col-4 d-block mx-auto my-2' name='email' onBlur={handleOnBlur} type="email" placeholder='Email' />
                    <input className='col-4 d-block mx-auto my-2' name='password' onBlur={handleOnBlur} type="password" placeholder='Password' />
                    <p className='text-danger'>{error}</p>
                    <input className='col-4 d-block mx-auto my-2' type="submit" value='Login' />
                </form>
                <p>have no account <Link to='/register'>Create new account</Link></p>
            </div>
            <Footer />
        </>
    );
};

export default Login;