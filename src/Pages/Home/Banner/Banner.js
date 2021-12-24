import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/circle-1.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Container>
                <Row className='text-center text-md-start d-flex align-items-center p-2'>
                    <Col sm={12} md={7} className='pt-4 order-2 order-md-1 '>

                        <p className='text-muted'>WELCOME TO MY WORLD</p>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#23272b' }}>Hi, <br /> I’M <sapn style={{ color: '#f9004d' }}>𝐒𝐀𝐈𝐅𝐔𝐋 𝐈𝐒𝐋𝐀𝐌</sapn>
                            <div className='wrapper'>
                                <div className='static-txt'>a Front End Developer</div>

                            </div>
                        </h1>

                        <p className='mb-3 text-muted'>A highly skilled developer with strong confidence with high quality and high-performance web applications seeks the rules of junior Software Developer at JavaScript, React, Node, andmodern JavaScript libraries.</p>


                        <div>
                            <p>FIND WITH ME</p>
                            <a href="https://www.facebook.com/sif.fahim" target='_blank' className='text-light' rel="noreferrer">
                                <div className='banner-icon'><i className="fab fa-facebook-f icon"></i></div>
                            </a>
                            <a href="https://www.instagram.com/siffahim/" target='_blank' className='text-light' rel="noreferrer">
                                <div className='banner-icon'><i className="fab fa-instagram icon"></i></div>
                            </a>
                            <a href="https://www.linkedin.com/in/siffahim/" target='_blank' className='text-light' rel="noreferrer">
                                <div className='banner-icon'><i className="fab fa-linkedin-in icon"></i></div>
                            </a>
                        </div>

                    </Col>
                    <Col sm={12} md={5} className=' order-1 order-md-2'>

                        <div>
                            <img src={img} width='80%' alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;