import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut, admin } = useAuth();

    return (
        <Navbar className='px-2 header' collapseOnSelect expand="lg" sticky='top' variant="dark">
            <Navbar.Brand as={Link} to="/home">𝐅 𝐉 𝐓</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto align-items-center">
                    <Nav.Link className='custom-btn' as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className='custom-btn' as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link className='custom-btn' as={Link} to="/contact">Contact</Nav.Link>
                    {
                        admin && <Nav.Link className='custom-btn' as={Link} to="/adminpage">Admin Page</Nav.Link>
                    }
                    {
                        user.email && <Nav.Link href="#a" className='text-white fw-bold'>{user.displayName}</Nav.Link>
                    }
                    {
                        user.email && <img style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                    }
                    {
                        user.email ? <button className='custom-btn' style={{ backgroundColor: '#e0dbd244' }} onClick={logOut}><i className="fas fa-sign-in-alt"></i> Logout</button> : <Nav.Link className='custom-btn' as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;