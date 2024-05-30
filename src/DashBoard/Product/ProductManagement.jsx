import axios from "axios";
import { Paginator } from "primereact/paginator";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { PenFill, PlusSquareFill, Trash } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import AddProduct from "../../Models/AddProduct";
import EditProduct from "../../Models/EditProduct";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const imageBodyTemplate = (p) => {
    return (
      <img
        src={p.images[0]}
        alt="image"
        style={{ height: "150px", width: "150px" }}
        className="w-6rem shadow-2 border-round"
      />
    );
  };
  const handleDeleteProduct = (index) => {
    if (
      window.confirm(
        "Are you sure you want to delete product id " + index + "?"
      )
    ) {
      axios
        .delete("http://localhost:9999/products/" + index)
        .then(() => {
          toast.success("Product deleted");
          setProducts(products.filter((p) => p._id !== index));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const onPageChange = (event) => {
    setFirst(event.first);
    setCurrentPage(event.page + 1);
    setRows(event.rows);
  };
  const productToDisplay = products.slice(first, first + rows);


  const handleEditProduct = (product) => {
    setDataEdit(product); // Cập nhật giá trị dataEdit bằng dữ liệu sản phẩm cần chỉnh sửa
    setEditVisible(true); // Hiển thị giao diện chỉnh sửa sản phẩm
  };
  return (
    <Container fluid>
      <Row style={{ marginLeft: "70px", marginTop: "30px", width: "100%" }}>
        <div>
          <Row className="ml-1 mb-4">
            <h3>Product Management</h3>
          </Row>
          <Row className="ml-1 mb-4">
            <Button onClick={() => setVisible(true)}>
              <PlusSquareFill className="mr-2" />
              Add Product
            </Button>
          </Row>
        </div>

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
            {productToDisplay.map((p, index) => (
              <tr key={index}>
                <td>{p._id}</td>
                <td>{p.name}</td>
                <td>{imageBodyTemplate(p)}</td>
                <td>{p.brand.hangSanXuat}</td>
                <td>{p.quantity}</td>
                <td>{p.option[0]?.price}</td>
                <td>
                  <i className="delete">
                    <Trash
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDeleteProduct(p._id)}
                    />
                  </i>
                </td>
                <td>
                  <i className="edit">
                    <PenFill
                      style={{
                        color: "blue",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleEditProduct(p)}
                    />
                  </i>
                </td>
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
          totalRecords={products.length}
          onPageChange={onPageChange}
        />
      </Row>
      {visible === true && (
        <AddProduct visible={visible} setVisible={setVisible} />
      )}
      {editVisible === true && (
        <EditProduct editVisible={editVisible} setEditVisible={setEditVisible} data={dataEdit} />
      )}
    </Container>
  );
};

export default ProductManagement;
