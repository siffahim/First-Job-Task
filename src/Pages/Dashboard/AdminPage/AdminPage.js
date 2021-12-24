import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import AdminPageCard from './AdminPageCard';

const ManageBlog = () => {
    const [datas, setDatas] = useState([]);
    const [num, setNum] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        const run = async () => {
            const res = await fetch('http://localhost:5000/blogs')
            const data = await res.json()

            setDatas(data)
        }
        run()
    }, [num])

    //create blog navigate
    const handleCreate = () => {
        navigate('/addBlog')
    }
    return (
        <>
            <Navigation />
            <Container>
                <button className='btn-custom my-3' onClick={handleCreate}><i class="fas fa-pencil-alt"></i> Create Blog</button>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr className='text-uppercase text-muted'>
                            <th>Picture</th>
                            <th>Country or Purpose</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(data => <AdminPageCard
                                key={data._id}
                                data={data}
                                setNum={setNum}
                            />)
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default ManageBlog;