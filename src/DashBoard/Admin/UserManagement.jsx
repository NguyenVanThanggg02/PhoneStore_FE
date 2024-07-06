import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { Paginator } from "primereact/paginator";
import { FileEarmarkSpreadsheet, Trash } from "react-bootstrap-icons";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

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

  const formatDate = (inputDate) => {
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  return (
    <Container fluid>
      <Row style={{ marginLeft: "70px", marginTop: "30px", width: "1030px" }}>
        <Row className="ml-1 mb-2">
          <Button className="btn btn-success">
            <FileEarmarkSpreadsheet
              style={{ color: "#FFFF", fontSize: "20px" }}
            />{" "}
            Export Excel{" "}
          </Button>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              {/* <th>ID</th> */}
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
            {users.map((u, index) => (
              <tr key={index}>
                <td>{u.full_name}</td>
                <td>{u.gender}</td>
                <td>{u.address}</td>
                <td>{formatDate(u.birthday)}</td>
                <td>{u.phone}</td>
                <td>{u.email}</td>
                <td>{u.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default UserManagement;
