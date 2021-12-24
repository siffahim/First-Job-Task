import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const IntroSocial = () => {
    return (
        <div className="card-wrapper text-center">
            <Container>
                <Row>
                    <Col className=" card_two">
                        <p className='fs-4'><i class="fab fa-youtube icon"></i></p>
                        <h4>52</h4>
                        <p class="icon">Youtue Subscriber</p>
                    </Col>
                    <Col className=" card_two">
                        <p className='fs-4'><i class="fab fa-instagram icon"></i></p>
                        <h4>42</h4>
                        <p class="icon">Instagram Fllowers</p>
                    </Col>
                    <Col className="card_two">
                        <p className='fs-4'><i class="fab fa-linkedin-in icon"></i></p>
                        <h4>5K</h4>
                        <p class="icon">Dribble Shot likes</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IntroSocial;