import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/google.png';
import img from '../../../images/login.svg';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, error, googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

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
        registerUser(loginData.email, loginData.password, loginData.name, navigate, location);
    }

    return (
        <>
            <Navigation />
            <Container>
                <h3 className='text-muted text-center text mt-4'>Register</h3>
                <Row className='align-items-center m-auto mt-5'>
                    <Col sm={12} md={6}>
                        <img width='90%' src={img} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className='text-center form-container'>
                            <form onSubmit={handleSubmit}>
                                <input className='col-12 col-md-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='name' type="text" placeholder='Name' />
                                <input className='col-12 col-md-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='email' type="email" placeholder='Email' />
                                <input className='col-12 col-md-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='password' type="password" placeholder='Password' />
                                <input className='col-12 col-md-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='password2' type="password" placeholder='Confirm Password' />
                                <p className='text-danger'>{error}</p>
                                <button className='col-12 col-md-9 d-block mx-auto my-2 btn-custom' type="submit">Register</button>
                            </form>
                            <p>alrady have an account <Link to='/login'>Login</Link></p>

                            {/* google log style */}
                            <div className='mx-auto'>
                                <button className='icon-content col-12 col-md-9 d-block mx-auto my-2' onClick={() => googleLogin(navigate, location)} >
                                    <img style={{ width: '25px' }} src={logo} alt="" />
                                    <span className='login-text text-muted ms-4'>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;