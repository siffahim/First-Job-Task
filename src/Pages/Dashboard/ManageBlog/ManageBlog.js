import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageBlogCard from './ManageBlogCard';

const ManageBlog = () => {
    const [datas, setDatas] = useState([]);
    const [num, setNum] = useState(0);
    useEffect(() => {
        const run = async () => {
            const res = await fetch('http://localhost:5000/blogs')
            const data = await res.json()

            setDatas(data)
        }
        run()
    }, [num])
    return (
        <Table responsive className='text-white'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Country or Purpose</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    datas.map(data => <ManageBlogCard
                        key={data._id}
                        data={data}
                        setNum={setNum}
                    />)
                }
            </tbody>
        </Table>
    );
};

export default ManageBlog;