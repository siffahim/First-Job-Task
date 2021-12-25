import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/edit.png';

const About = () => {
    return (
        <div className='about_bg'>
            <Container>
                <Row className='px-1 d-flex align-items-center'>
                    <Col sm={12} md={5}>
                        <div className='about-img'>
                            <img src={img} width='70%' alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className='about'>
                            <h3 className='icon fw-bold'>About Me</h3>
                            <h5>I M</h5>
                            <h5>SAIFUL ISLAM FAHIM</h5>
                            <p className='icon'>Front End Devepler <span className='text-light'>||</span> MERN Stack Developer</p>
                            <p>I'm developer focused on crafting user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                            <a href='#f' className='form-btn mt-2'><i className="fas fa-download icon"></i> Download CV</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;