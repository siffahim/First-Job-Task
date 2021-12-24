import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const [blog, setBlog] = useState({});
    const { updateBlogId } = useParams();
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${updateBlogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }, [updateBlogId])

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

        fetch(`http://localhost:5000/blogs/${updateBlogId}`, {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h2>Update: {`${blog.title},  ${blog.country}`}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" onChange={handleChangeTitle} className='col-12 col-md-6 mb-3 d-block' value={blog.title || ''} />

                <input type="file" onChange={(e) => setImage(e.target.files[0])} className='col-12 col-md-6 mb-3 d-block' required />

                <input type="text" onChange={handleChangeCountry} className='col-12 col-md-6 mb-3 d-block' value={blog.country || ''} />

                <textarea onChange={handleChangeDescripttion} className='border col-12 col-md-6' value={blog.description || ''} cols="100" rows="8"></textarea>

                <input type="submit" className='col-12 col-md-6 mb-3 d-block' value='Update Blog' />
            </form>
        </div>
    );
};

export default UpdateBlog;