import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Service = () => {
    return (
        <div className='service-container text-light'>
            <div className='text-center mb-5'>
                <p className='text-black'>FEATURES</p>
                <h3 className='text-black text fw-bold'>Whate I Do</h3>
            </div>
            <Container>
                <Row className='gy-4 gx-xs-0 gx-3 p-2'>
                    <Col sm={12} md={4}>
                        <div className='card-filp'>
                            <div className='front'>
                                <h2><i className="fas fa-crop-alt icon"></i></h2>
                                <h5>Web Design</h5>
                                <p>I'm developer focused on crafting user‑friendly experiences.</p>
                                <h5 className='mt-3'><i className="fas fa-recycle icon"></i></h5>
                            </div>
                            <div className='back'>
                                <h3>back</h3>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='card-filp'>
                            <div className='front' style={{ backgroundColor: '#e21657', color: '#fff' }}>
                                <h2><i className="fas fa-mobile-alt"></i></h2>
                                <h5>Responsive</h5>
                                <p>I'm developer focused on crafting user‑friendly experiences.</p>
                                <h5 className='mt-3'><i className="fas fa-recycle"></i></h5>
                            </div>
                            <div className='back'>
                                <h3>back</h3>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='card-filp'>
                            <div className='front'>
                                <h2><i className="fas fa-laptop-code icon"></i></h2>
                                <h5>Web Development</h5>
                                <p>I'm developer focused on crafting user‑friendly experiences.</p>
                                <h5 className='mt-3'><i className="fas fa-recycle icon"></i></h5>
                            </div>
                            <div className='back'>
                                <h3>back</h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;