import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title)
        formData.append('img', image)
        formData.append('country', country)
        formData.append('description', description)

        //send data to server
        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Blog!",
                        text: "Added Blog",
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
            <div className=' form-container'>
                <button className='btn-custom' onClick={handleBlog}><i class="fas fa-undo"></i> Blogs</button>
                <form onSubmit={handleSubmit}>
                    <input type="text" onBlur={(e) => setTitle(e.target.value)} className='col-12 col-md-6 mb-3 d-block mx-auto' placeholder='Blog Title' required />

                    <input type="file" onChange={(e) => setImage(e.target.files[0])} className='col-12 col-md-6 mb-3 d-block mx-auto' required />

                    <input type="text" onBlur={(e) => setCountry(e.target.value)} className='col-12 col-md-6 mb-3 d-block mx-auto' placeholder='Country or Purpose' required />

                    <textarea onBlur={(e) => setDescription(e.target.value)} className='border col-12 col-md-6 d-block mx-auto' id="" cols="100" rows="8"></textarea>

                    <button type="submit" className='col-12 col-md-6 mb-3 d-block mx-auto btn-custom' >Create Blog</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default AddBlog;