import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { Paginator } from "primereact/paginator";
import { FileEarmarkSpreadsheet, Trash } from "react-bootstrap-icons";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://localhost:9999/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const onPageChange = (event) => {
    setFirst(event.first);
    setCurrentPage(event.page + 1);
    setRows(event.rows);
  };
  const usersToDisplay = users.slice(first, first + rows);

  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  return (
    <Container fluid>
      <Row style={{marginLeft:'70px', marginTop:'30px', width:'1230px'}}>
        <Row className="ml-1 mb-2">
          <Button className="btn btn-success"><FileEarmarkSpreadsheet style={{color:'#FFFF', fontSize:'20px'}}/> Export Excel </Button>
         
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Birth Day</th>
              <th>Phone</th>
              <th>Email</th>
              <th>User Name</th>
              {/* <th>Operation</th> */}
            </tr>
          </thead>

          <tbody className="text-center">
            {usersToDisplay.map((u, index) => (
              <tr key={index}>
                <td>{u._id}</td>
                <td>{u.full_name}</td>
                <td>{u.gender}</td>
                <td>{u.address}</td>
                <td>{formatDate(u.birthday)}</td>
                <td>{u.phone}</td>
                <td>{u.email}</td>
                <td>{u.username}</td>
                {/* <td>
                    <Button className="btn btn-danger">Ban</Button>
                      
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Paginator
          first={first}
          rows={rows}
          totalRecords={users.length}
          onPageChange={onPageChange}
        />
      </Row>
    </Container>
  );
};

export default UserManagement;
