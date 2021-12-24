import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Caontact = () => {
    return (
        <>
            <Navigation />
            <div className='form-container'>
                <div className='text-center mb-5'>
                    <h3 className="text fw-bold" style={{ color: "#f6f6f6" }}>Contact Me</h3>
                </div>
                <Row>
                    <Col sm={12} md={3}>

                        <div className='contact-card' id="contact">
                            <h2><i className="fas fa-phone-alt icon"></i></h2>
                            <h6>01860760170</h6>
                        </div>

                        <div className='contact-card'>
                            <h2><i className="fas fa-envelope icon"></i></h2>
                            <h6>siffahim25@gmail.com</h6>
                        </div>


                        <div className='contact-card'>
                            <h2><i className="fas fa-map-marked-alt icon"></i></h2>
                            <h6>Mogbazer-12,Dhaka,Bangladesh</h6>
                        </div>


                    </Col>
                    <Col sm={12} md={9}>
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
            <Footer />
        </>
    );
};

export default Caontact;