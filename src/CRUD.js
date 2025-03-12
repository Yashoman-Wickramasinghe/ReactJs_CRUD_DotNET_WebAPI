import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table"; // ✅ Correct import



const empData = [
    { id: 1, name: "Yashoman", age: 34, isActive: 1 },
    { id: 2, name: "Pavithra", age: 33, isActive: 1 },
    { id: 3, name: "Omal", age: 34, isActive: 0 }
];

const CRUD = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(empData);
    }, [])

    const handleEdit = (id) =>{
      alert(id);
    }

    const handleDelete = (id) =>{
      alert(id);
    }    

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>IsActive</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.isActive}</td>
                                <td colSpan={2}>
                                    <button className="btn btn-primary" onClick={() => handleEdit(item.id)} >Edit</button> &nbsp;
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Loading.......</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default CRUD;
