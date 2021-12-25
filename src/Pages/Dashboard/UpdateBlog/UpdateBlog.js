import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const UpdateBlog = () => {
    const [blog, setBlog] = useState({});
    const { updateId } = useParams();
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://whispering-sands-36256.herokuapp.com/blogs/${updateId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }, [updateId])

    //update
    const handleChangeTitle = e => {
        const updateTitle = e.target.value;
        const updateBlog = { ...blog };
        updateBlog.title = updateTitle;
        setBlog(updateBlog)
    }

    const handleChangeCountry = e => {
        const updateCountry = e.target.value;
        const updateBlog = { ...blog };
        updateBlog.country = updateCountry;
        setBlog(updateBlog)
    }

    const handleChangeDescripttion = e => {
        const updateDescription = e.target.value;
        const updateBlog = { ...blog };
        updateBlog.description = updateDescription;
        setBlog(updateBlog)
    }


    //form submit
    const handleUpdate = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', blog.title)
        formData.append('img', image)
        formData.append('country', blog.country)
        formData.append('description', blog.description)

        console.log('client side', formData)
        fetch(`https://whispering-sands-36256.herokuapp.com/blogs/${updateId}`, {
            method: 'PUT',
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    swal({
                        title: "Hey!",
                        text: "Updated Successfully",
                        icon: "success",
                        button: "Ok",
                    })
                }
            })
    }

    const handleBlog = () => {
        navigate('/adminpage')
    }

    return (
        <>
            <Navigation />
            <Container>
                <div className='form-container mb-4'>
                    <button className='btn-custom mt-3' onClick={handleBlog}><i className="fas fa-undo"></i> Blog</button>
                    <form onSubmit={handleUpdate}>
                        <input type="text" onChange={handleChangeTitle} className='col-12 col-md-6 mb-3 d-block mx-auto' value={blog.title || ''} />

                        <input type="file" onChange={(e) => setImage(e.target.files[0])} className='col-12 col-md-6 mb-3 d-block  mx-auto' required />

                        <input type="text" onChange={handleChangeCountry} className='col-12 col-md-6 mb-3 d-block  mx-auto' value={blog.country || ''} />

                        <textarea onChange={handleChangeDescripttion} className='border col-12 col-md-6 d-flex mx-auto' value={blog.description || ''} cols="100" rows="8"></textarea>

                        <button type="submit" className='col-12 col-md-6 mb-3 d-block mx-auto btn-custom' >Update Blog</button>
                    </form>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default UpdateBlog;