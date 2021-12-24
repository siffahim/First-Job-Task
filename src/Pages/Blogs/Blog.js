import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
    const { img, title, country, description } = blog;
    return (

        <Card className='mb-3'>
            <Card.Img variant="top" height='400px' src={`data:image/png;base64,${img}`} />
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
    );
};

export default Blog;