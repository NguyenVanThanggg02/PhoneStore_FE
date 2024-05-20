import axios from "axios";
import { Paginator } from "primereact/paginator";
import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { PenFill, Trash } from "react-bootstrap-icons";
import { toast } from "react-toastify";

const TopSeller = () => {
  
  return (
    <Container fluid>
      
      <Row style={{ marginLeft: "70px", marginTop: "30px", width:"100%" }}>
      <Row className="ml-1 mb-4">
        <h3>TopSeller</h3>
      </Row>
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th> Name</th>
              <th>Image</th>
              <th>Brand</th>
              <th>Quantity </th>
              <th>Option</th>
              <th colSpan={2}>Operation</th>
            </tr>
          </thead>

          <tbody className="text-center">
              <tr>
                <td>1</td>
                <td>aa</td>
                <td>33</td>
                <td>aple</td>
                <td>4</td>
                <td>333</td>
                <td>
                  <i className="delete">
                    <Trash
                      style={{ color: "red", fontSize: "25px" }}
                      
                    />
                  </i>
                </td>
                <td>
                  <i className="edit">
                    <PenFill style={{ color: "blue", fontSize: "25px" }} />
                  </i>
                </td>
              </tr>
          </tbody>
        </Table>
      </Row>
      
    </Container>
  );
};


export default TopSeller;