import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Navigation = () => {
    const { user, logOut } = useFirebase();
    return (
        <Navbar className='px-2 header' collapseOnSelect expand="lg" sticky='top' variant="dark">
            <Navbar.Brand as={Link} to="/home">𝐅 𝐉 𝐓</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto align-items-center">
                    <Nav.Link className='custom-btn' as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className='custom-btn' as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link className='custom-btn' as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link className='custom-btn' as={Link} to="/adminpage">Admin Page</Nav.Link>
                    {
                        user.email && <h6 className='me-2 text-success'>{user.displayName}</h6>
                    }
                    {
                        user.email ? <button className='custom-btn' onClick={logOut}><i class="fas fa-sign-in-alt"></i> Logout</button> : <Nav.Link className='custom-btn' as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;