import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const run = async () => {
            const res = await fetch('http://localhost:5000/blogs')
            const data = await res.json()

            setBlogs(data)
        }
        run()
    }, [])
    return (
        <>
            <Navigation />
            <Container>
                <h5 className='text text-white text-center my-4'>Blogs</h5>
                <Row xs={1} md={2} className="g-4">
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        />)
                    }
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Blogs;