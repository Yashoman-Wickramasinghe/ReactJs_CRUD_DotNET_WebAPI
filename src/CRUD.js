import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';

const CRUD = ()=>{
    
    const empData = [
        {
            id : 1,
            name : 'Yashoman',
            age : 34,
            isActive : 1
        },
        {
            id : 1,
            name : 'Pavithra',
            age : 33,
            isActive : 1
        },
        {
            id : 1,
            name : 'Omal',
            age : 34,
            isActive : 0
        }
    ]

    const [data, setData] = useState([]);

    //----Create useEffect hook and Pass blank dependancy []
    useEffect(()=>{

        setData(empData);

    }, []);

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
            </tr>
          </thead>
          <tbody>
            {
              data && data.length > 0 ?
                data.map((item, index)=>{
                  return(
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                  </tr>
                  )
                })
                :
                'Loading.......'
            }
          </tbody>
        </Table>
      </Fragment>
    );
}

export default CRUD;