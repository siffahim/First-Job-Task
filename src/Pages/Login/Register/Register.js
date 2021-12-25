import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/login.svg';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, error } = useAuth();
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
                <Row className='align-items-center m-auto mt-5'>
                    <Col sm={6}>
                        <img width='100%' src={img} alt="" />
                    </Col>
                    <Col sm={6}>
                        <div className='text-center form-container'>
                            <h3 className='text-muted mb-3'>Register</h3>
                            <form onSubmit={handleSubmit}>
                                <input className='col-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='name' type="text" placeholder='Name' />
                                <input className='col-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='email' type="email" placeholder='Email' />
                                <input className='col-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='password' type="password" placeholder='Password' />
                                <input className='col-9 d-block mx-auto my-2' onBlur={handleOnBlur} name='password2' type="password" placeholder='Confirm Password' />
                                <p className='text-danger'>{error}</p>
                                <button className='col-9 d-block mx-auto my-2 btn-custom' type="submit">Register</button>
                            </form>
                            <p>alrady have an account <Link to='/login'>Login</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;