import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const ManageBlogCard = ({ data, setNum }) => {
    const { img, title, country, _id } = data;
    const navigate = useNavigate();
    //delete data
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://whispering-sands-36256.herokuapp.com/blogs/${id}`, {
                        method: 'DELETE'
                    }).then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal({
                                    title: "Opps!",
                                    text: "Successfully Deleted",
                                    icon: "success",
                                    button: "Ok",
                                })
                            }
                            setNum(prev => prev + 1)
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });

    }

    //update
    const handleUpdate = id => {
        navigate(`/updateBlog/${id}`)
    }
    return (
        <tr className='align-items-center'>
            <td><img width='40px' height='40px' style={{ borderRadius: '50%' }} src={`data:image/png;base64,${img}`} alt="" /></td>
            <td>{country}</td>
            <td>{title}</td>
            <td><button className='btn bg-success text-white' onClick={() => handleUpdate(_id)}><i class="far fa-edit"></i></button><button className='btn bg-danger ms-1 text-white' onClick={() => handleDelete(_id)}><i class="fas fa-trash-alt"></i></button></td>
        </tr>
    );
};

export default ManageBlogCard;