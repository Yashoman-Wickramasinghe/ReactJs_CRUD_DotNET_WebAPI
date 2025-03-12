import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table"; // ✅ Correct import
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const empData = [
    { id: 1, name: "Yashoman", age: 34, isActive: 1 },
    { id: 2, name: "Pavithra", age: 33, isActive: 1 },
    { id: 3, name: "Omal", age: 34, isActive: 0 }
];

const CRUD = () => {

  //-----Confirmation Box activities
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //-----Add new form
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [isActive, setIsActive] = useState(0)

  //-----Edit existing data
  const [editId, setEditId] = useState('')
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')
  const [editIsActive, setEditIsActive] = useState(0)

  //-----State of the Array data (`useState` is for storing & updating data inside the component. )
  const [data, setData] = useState([]);

  //------Each and every (app needs to fetch data from a server when the page loads)
  //------`useEffect` is for running side effects like fetching data, updating the title, or setting timers.  
    useEffect(() => {
        setData(empData);
    }, [])

    const handleEdit = (id) =>{
      handleShow();
    }

    const handleDelete = (id) =>{
      if(window.confirm("Are you sure to delete this employee?") == true)
      {
        alert(id);
      }
    }
    
    const handleUpdate = () =>
    {

    }

    return (
      <Fragment>
        <br></br>
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="checkbox"
                checked={isActive === 1 ? true : false}
                onChange={(e) => setIsActive(e)}
                value={isActive}
              />
              <label style={{ marginLeft: "2px" }}>IsActive</label>
            </Col>
            <Col>
              <button className="btn btn-primary">Submit</button>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Row Count</th>
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
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      {" "}
                      Edit
                    </button>{" "}
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remove
                    </button>
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify / Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Age"
                  value={editAge}
                  onChange={(e) => setEditAge(e.target.value)}
                />
              </Col>
              <Col>
                <input
                  type="checkbox"
                  checked={editIsActive === 1 ? true : false}
                  onChange={(e) => setEditIsActive(e)}
                  value={editIsActive}
                />
                <label style={{ marginLeft: "2px" }}>IsActive</label>
              </Col>
              </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
};

export default CRUD;
