import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/blog-sidebar-img-1.png';
import img2 from '../../images/footer-map-img.png';
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
                <Row className="g-4 mt-3">
                    <Col sm={12} md={8}>
                        {
                            blogs.map(blog => <Blog
                                key={blog._id}
                                blog={blog}
                            />)
                        }
                    </Col>
                    <Col md={4}>
                        <div className='text-center'>
                            <img width='70%' src={img1} alt="" />
                        </div>
                        <div className='my-5 text-center'>
                            <img width='70%' src={img2} alt="" />
                        </div>
                        <div>
                            <p className='text text-center'>CATEGORIES</p>
                            <ul className='list-group' style={{ listStyleType: 'none' }}>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> EDUCATION</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> PROGRAMMING</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> LEARNING</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> ADVENTURE</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> DESTINATION</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> EXPLORE</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> INSPIRE</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> LIFESTYLE</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> MOMENTS</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> PLANET</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> TOURISM</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> TOURISM TOUR</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> TOURISM GUIDES</li>
                                <li className='mb-2'><i class="fas fa-square-full txt"></i> TRAVALLING</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blogs;