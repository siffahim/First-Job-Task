import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/google.png';
import img from '../../../images/login.svg';
import Navigation from '../../Shared/Navigation/Navigation';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, error, googleLogin } = useAuth();
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
    const handleSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, navigate, location)
    }
    return (
        <>
            <Navigation />
            <Container>
                <h3 className='text-muted text-center text mt-4'>Login</h3>
                <Row className='align-items-center m-auto mt-5'>
                    <Col sm={12} md={6}>
                        <img width='90%' src={img} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <div className='text-center form-container'>
                            <form onSubmit={handleSubmit}>
                                <input className='col-12 col-md-9 d-block mx-auto my-2' name='email' onBlur={handleOnBlur} type="email" placeholder='Email' />
                                <input className='col-12 col-md-9 d-block mx-auto my-2' name='password' onBlur={handleOnBlur} type="password" placeholder='Password' />
                                <p className='text-danger'>{error}</p>
                                <button className='col-12 col-md-9 d-block mx-auto my-2 btn-custom' type="submit">Login</button>
                            </form>
                            <p>have no account <Link to='/register'>Create new account</Link></p>
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

export default Login;