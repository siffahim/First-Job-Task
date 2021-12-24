import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { img, title, country, description } = blog;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" height='350px' src={`data:image/png;base64,${img}`} />
                <Card.Body>
                    <p>{country}</p>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Blog;