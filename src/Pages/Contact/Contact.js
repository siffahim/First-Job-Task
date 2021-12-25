import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Caontact = () => {
    return (
        <>
            <Navigation />
            <Container>
                <div className='form-container'>
                    <div className='text-center mb-5'>
                        <h3 className="text fw-bold" style={{ color: "black" }}>Contact Me</h3>
                    </div>
                    <Row className='text-center'>
                        <Col sm={12} md={4}>
                            <div className='contact-card' id="contact">
                                <h1><i className="fas fa-phone-alt icon"></i></h1>
                                <h6>01860760170</h6>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className='contact-card'>
                                <h1><i className="fas fa-envelope icon"></i></h1>
                                <h6>siffahim25@gmail.com</h6>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className='contact-card'>
                                <h1><i className="fas fa-map-marked-alt icon"></i></h1>
                                <h6>Mogbazer-12,Dhaka,Bangladesh</h6>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className='google-map'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9592172991565!2d90.40125571449535!3d23.748833684590164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8901fd2fc9f%3A0x51da9f588b5d2066!2s12%20Moghbazar%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1640354487771!5m2!1sen!2sbd" width="100%" height="370" allowfullscreen="" loading="lazy" title="This is a unique title" ></iframe>
                            </div>
                        </Col>
                        <Col sm={12} md={8}>
                            <div className='form-side'>
                                <form action="https://formsubmit.co/siffahim25@gmail.com" method="POST">
                                    <Row>
                                        <Col sm={12} md={6}>
                                            <input type="text" placeholder='Name' className='form-control' required />
                                            <input type="hidden" name="_next" value="https://thankyouforsend.netlify.app/" />
                                            <input type="hidden" name="_captcha" value="false" />
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <input type="email" placeholder='Email' className='form-control' required />
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <input type="number" placeholder='Number' className='form-control' required />
                                        </Col>
                                        <Col sm={12} md={6}>
                                            <input type="text" placeholder='Subject' className='form-control' required />
                                        </Col>
                                    </Row>
                                    <textarea name='message' placeholder='Message' rows="5" className='form-control custom-bg'></textarea><br />
                                    <button className='form-btn'><i className="fas fa-paper-plane icon"></i> Send</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Caontact;