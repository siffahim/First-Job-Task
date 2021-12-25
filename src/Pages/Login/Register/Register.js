import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, error } = useAuth();

    //get all values from input field
    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newLogin = { ...loginData };
        newLogin[name] = value;
        setLoginData(newLogin);
    }

    //form submit 
    const handleSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            swal({
                title: "Sorry!",
                text: "Please give same password!",
                icon: "warning",
                button: "Ok",
            })
            return
        }
        //send user info on firebase
        registerUser(loginData.email, loginData.password, loginData.name);
    }

    return (
        <>
            <Navigation />
            <div className='text-center form-container'>
                <h3 className='text-muted mb-3'>Register</h3>
                <form onSubmit={handleSubmit}>
                    <input className='col-4 d-block mx-auto my-2' onBlur={handleOnBlur} name='name' type="text" placeholder='Name' />
                    <input className='col-4 d-block mx-auto my-2' onBlur={handleOnBlur} name='email' type="email" placeholder='Email' />
                    <input className='col-4 d-block mx-auto my-2' onBlur={handleOnBlur} name='password' type="password" placeholder='Password' />
                    <input className='col-4 d-block mx-auto my-2' onBlur={handleOnBlur} name='password2' type="password" placeholder='Confirm Password' />
                    <p className='text-danger'>{error}</p>
                    <input className='col-4 d-block mx-auto my-2' type="submit" value='Register' />
                </form>
                <p>alrady have an account <Link to='/login'>Login</Link></p>
            </div>
        </>
    );
};

export default Register;