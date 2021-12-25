import React, { useState } from 'react';
import swal from 'sweetalert';
import Navigation from '../../Shared/Navigation/Navigation';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleAdmim = e => {
        e.preventDefault();

        fetch('https://whispering-sands-36256.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Excellent!",
                        text: "Successfully Created Admin",
                        icon: "success",
                        button: "Ok",
                    })
                }
            })
    }
    return (
        <>
            <Navigation />
            <div className='text-center mt-5'>
                <h3 className='text-muted text mb-3'>Make Admin</h3>
                <form onSubmit={handleAdmim}>
                    <input type="email" onBlur={e => setEmail(e.target.value)} placeholder='Admin Email' required />
                    <button type='submit' className='btn-custom bg-danger'>Make Admin</button>
                </form>
            </div>
        </>
    );
};

export default MakeAdmin;