import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const IntroSocial = () => {
    return (
        <div className="card-wrapper text-center">
            <Container>
                <Row xs={1} className='g-0' md={3}>
                    <Col className=" card_two">
                        <p className='fs-4'><i className="fab fa-youtube icon"></i></p>
                        <h4>52</h4>
                        <p className="icon">Youtue Subscriber</p>
                    </Col>
                    <Col className=" card_two">
                        <p className='fs-4'><i className="fab fa-instagram icon"></i></p>
                        <h4>42</h4>
                        <p className="icon">Instagram Fllowers</p>
                    </Col>
                    <Col className="card_two">
                        <p className='fs-4'><i className="fab fa-linkedin-in icon"></i></p>
                        <h4>5K</h4>
                        <p className="icon">Dribble Shot likes</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default IntroSocial;