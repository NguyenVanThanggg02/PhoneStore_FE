import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import { CartDashFill, HouseHeartFill, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { toast } from "react-toastify";

const ListProduct = () => {
  const [listproduct, setListProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [search, setSearch] = useState("");
  const [noResult, setNoResult] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  useEffect(() => {
    fetch("http://localhost:9999/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (Array.isArray(data)) {
          setListProduct(data);
        } else {
          setListProduct([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setListProduct([]);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:9999/brands")
      .then((response) => setBrand(response.data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

 

  const loadData = async () => {
    try {
      let response;
      if (search) {
        response = await axios.get(`http://localhost:9999/search/${search}`);
      } else {
        response = await axios.get("http://localhost:9999/products");
      }
      const products = response.data;
      if (products.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
        setListProduct(products);
      }
    } catch (error) {
      toast.error("Lỗi khi load dữ liệu");
    }
  };


  const handleSearch = () => {
    loadData();
  };

  useEffect(() => {
    if (search === "") {
      loadData();
    }
  }, [search]);

  const handleChooseBrand = (e) => {
    const selectedBrandId = e.target.value;
    if (selectedBrandId !== "0") {
      const selectedBrand = brand.find((b) => b._id === selectedBrandId);
      setSelectedBrand(selectedBrand);
      getProductByBrand(selectedBrandId); // Truyền ID của thương hiệu
    } else {
      setSelectedBrand(null);
      loadData();
    }
  };

    const getProductByBrand = async (selectedBrandId) => {
    try {
      let response;
      if (selectedBrandId) {
        response = await axios.get(
          `http://localhost:9999/products/bybrand/${selectedBrandId}`
        );
      } else {
        response = await axios.get("http://localhost:9999/products");
      }
      setListProduct(response.data);
    } catch (error) {
      toast.error("Lỗi khi gọi API lấy danh sách sản phẩm theo brand ", error);
    }
  };

  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Danh sách sản phẩm
        </span>
      ),
      url: "http://localhost:3000/listproduct",
    },
  ];
  const home = {
    icon: (
      <HouseHeartFill
        style={{
          fontSize: "30px",
          marginLeft: "10px",
          marginRight: "-80px",
          color: "gray",
        }}
      />
    ),
    url: "http://localhost:3000",
  };

  return (
    <Container fluid>
      <Row
        style={{
          margin: "20px 20px 100px 20px",
        }}
      >
        <input
          type="text"
          placeholder="Find by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            height: "50px",
            width: "400px",
            paddingLeft: "10px",
            border: "solid #CCC 1px",
            margin: "20px",
            boxShadow: "5px 10px 10px 5px #E0EEE0",
            borderRadius: "10px",
          }}
        ></input>
        <Button
          type="submit"
          onClick={handleSearch}
          style={{
            marginLeft: "20px",
            height: "50px",
            paddingLeft: "10px",
            border: "solid #3399FF 1px",
            margin: "20px",
            boxShadow: "4px 5px 10px 3px #3399FF",
            borderRadius: "10px",
          }}
        >
          <Search /> Search
        </Button>
        {/* <Dropdown
          options={brand.map((item) => ({
            label: item.hangSanXuat,
            value: item._id,
          }))}
          optionLabel="label"
          style={{
           height: "50px",
            width: "19%",
            padding: "10px 5px 0 10px",
            border: "solid #CCC 1px",
            margin: "20px",
            boxShadow: "5px 10px 10px 5px #E0EEE0",
            borderRadius: "10px",
          }}
          placeholder="Brands"
        /> */}

        <FormSelect
          className="items_option"
          style={{
            height: "50px",
            width: "19%",
            padding: "0px 5px 0 10px",
            border: "solid #CCC 1px",
            margin: "20px",
            boxShadow: "5px 10px 10px 5px #E0EEE0",
            borderRadius: "10px",
          }}
          onChange={ handleChooseBrand}
        >
          <option value="0">Tất cả</option>

          {brand.map((b) => (
            <option key={b._id} value={b._id}>{b.hangSanXuat}</option>
          ))}
        </FormSelect>
      </Row>
      <Row
        className="mt-3"
        style={{
          border: "solid #CCC 1px",
          margin: "20px",
          boxShadow: "5px 10px 10px 5px #C0C0C0",
          borderRadius: "20px",
        }}
      >
        <BreadCrumb model={items} home={home} style={{ marginTop: "15px" }} />
      </Row>
      <Row
        className="d-flex justify-content-start mt-4 mb-4"
        style={{ margin: "5px" }}
      >
        {noResult ? ( // Hiển thị thông báo "Không có sản phẩm" nếu không có kết quả từ tìm kiếm
          <Col style={{ textAlign: "center" }}>
            <h6 style={{ margin: "20px" }}>Không có sản phẩm nào !!!</h6>
          </Col>
        ) : (
          listproduct.map((product) => (
            <Col key={product._id} md={3} sm={6} xs={12} className="mb-4">
              <Card
                style={{
                  height: "100%",
                  boxShadow: "5px 10px 10px 5px #C0C0C0",
                }}
              >
                <Link to={"/details/" + product._id} className="text-dark">
                  <Card.Img variant="top" src={product.images[0]} />
                  <Card.Body className="text-center">
                    <Card.Text>{product.brand.hangSanXuat}</Card.Text>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Title>{product.option[0]?.price}</Card.Title>
                  </Card.Body>
                </Link>
                <Card.Footer className="text-center bg-white">
                  <Button className="btn btn-danger">
                    <CartDashFill
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    ADD TO CART
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ListProduct;
