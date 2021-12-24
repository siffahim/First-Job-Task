import React, { useState } from 'react';
import swal from 'sweetalert';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');


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
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onBlur={(e) => setTitle(e.target.value)} className='col-12 col-md-6 mb-3 d-block' placeholder='Blog Title' required />

                <input type="file" onChange={(e) => setImage(e.target.files[0])} className='col-12 col-md-6 mb-3 d-block' required />

                <input type="text" onBlur={(e) => setCountry(e.target.value)} className='col-12 col-md-6 mb-3 d-block' placeholder='Country or Purpose' required />

                <textarea onBlur={(e) => setDescription(e.target.value)} className='border col-12 col-md-6' id="" cols="100" rows="8"></textarea>

                <input type="submit" className='col-12 col-md-6 mb-3 d-block' value='Create Blog' />
            </form>
        </div>
    );
};

export default AddBlog;