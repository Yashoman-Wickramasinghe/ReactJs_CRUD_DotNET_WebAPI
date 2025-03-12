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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

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
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Age"
              />
            </Col>
            <Col>
              <input type="checkbox" />
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
                />
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Age"
                />
              </Col>
              <Col>
                <input type="checkbox" />
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
