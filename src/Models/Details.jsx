import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  CartCheck,
  CartPlus,
  CashCoin,
  GearFill,
  HouseHeartFill,
} from "react-bootstrap-icons";
import { Galleria } from "primereact/galleria";
import freeship from "../../src/assets/images/freeship.png";
import changeedit from "../../src/assets/images/change&edit.jpg";
import SimilarProduct from "./SimilarProduct";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import Comments from "../screens/Comments";

const Details = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({}); // Initialize as null instead of an empty object
  const [version, setVersion] = useState([]); // Initialize as empty array
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9999/products/${pid}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setVersion(data?.option || []);
        setColor(data?.option || []);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [pid]);

  const [value, setValue] = useState(1);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };
  const handleButtonColorClick = (index) => {
    setSelectedButtonColor(index);
  };

  const increaseQuantity = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  const allPrices = product.option?.map((g) => g.price)[0];

  const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          Chi tiết sản phẩm
        </span>
      ),
    },
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          {product.name}
        </span>
      ),
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
    <Container fluid >
      <Row className="mt-3" style={{ border: "solid #CCC 1px", margin:"20px", boxShadow:'5px 10px 10px 5px #C0C0C0', borderRadius:'20px' }}>
        <BreadCrumb model={items} home={home}  style={{marginTop:'15px'}}/>
      </Row>
      <Row className=" mt-5 bg-light" style={{margin:"20px",  boxShadow:'5px 10px 10px 5px #C0C0C0', borderRadius:"20px"}}>
        <Col md={4}>
          <div className="carddetail">
            <Galleria
              value={product?.images} // Use images state for Galleria value
              responsiveOptions={responsiveOptions}
              numVisible={5}
              style={{ maxWidth: "640px" }}
              item={(item) => (
                <img src={item} alt="aa" style={{ width: "100%" }} />
              )}
              thumbnail={(item) => (
                <img src={item} alt="aaa" style={{ width: "100%" }} />
              )}
            />
          </div>
          <div className="mt-4">
            <p>{product.description}</p>
          </div>
        </Col>

        {/* <!-- Product details --> */}
        <Col md={5} style={{marginTop:'10px'}}>
          <div className="product-details">
            <h2 className="product-name mb-4 text-dark">
              <strong>{product.name}</strong>
            </h2>
            <div class="product-ver">
              <label>
                <h4>Lựa Chọn Phiên Bản</h4>
                <div className="mt-2 d-flex justify-content-center">
                  {version.map((v, index) => (
                    <div key={index} className="mr-2 inline-block">
                      <Button
                        className={` ${
                          selectedButton === index
                            ? "text-white bg-success"
                            : "bg-white text-dark"
                        }`}
                        onClick={() => handleButtonClick(index)}
                      >
                        <span>{v.version}</span>
                        <br />
                        <span>{formatCurrency(v.price) + " đ"}</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </label>
            </div>
            <div class="product-color">
              <label>
                <h4>Lựa Chọn Màu</h4>
                <div className="mt-2 d-flex justify-content-center">
                  {color.map((m, index) => (
                    <div key={index} className="mr-2 inline-block">
                      <Button
                        className={` ${
                          selectedButtonColor === index
                            ? "text-white bg-success"
                            : "bg-white text-dark"
                        }`}
                        onClick={() => handleButtonColorClick(index)}
                      >
                        <span>{m.color}</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </label>
            </div>
            <div className="freeship d-flex justify-content-start">
              <Col md={3} sm={6}>
                <img src={freeship} style={{ width: "100px" }}></img>
              </Col>
              <Col md={9} className="mt-3">
                <span style={{ fontWeight: "bold" }}>Miễn Phí Vận Chuyển</span>
                <p>Cho đơn hàng từ 3.000.000</p>
              </Col>
            </div>
            <div className="changeedit d-flex justify-content-start mb-4">
              <Col md={3} sm={6}>
                <img src={changeedit} style={{ width: "100px" }}></img>
              </Col>
              <Col md={9} className="mt-3">
                <span style={{ fontWeight: "bold" }}>
                  Miễn Phí Sửa, Đổi, Trả Hàng
                </span>
                <p>
                  Đổi hàng trong 7 ngày kể từ ngày mua hỗ trợ sửa chữa miễn phí
                </p>
              </Col>
            </div>
            <div className="dty d-flex justify-content-start">
              <h4>Số Lượng</h4>
              <div class="d-flex align-items-center">
                <Button
                  onClick={decreaseQuantity}
                  style={{ borderRadius: "10px" }}
                >
                  -
                </Button>
                <input
                  className="text-center ml-2 mr-2"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  style={{
                    width: "50px",
                    height: "37px",
                    borderRadius: "10px",
                  }}
                />
                <Button
                  onClick={increaseQuantity}
                  style={{ borderRadius: "10px" }}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-start  mt-4 ">
            <Button className="btn btn-danger d-block text-center w-100">
              <CartPlus style={{ color: "white", fontSize: "30px" }} />
              ADD TO CART
            </Button>
          </div>
          <div class="d-flex justify-content-start  mt-2 mb-4 ">
            <Button className="btn btn-success d-block text-center w-100">
              <CartCheck style={{ color: "white", fontSize: "30px" }} />
              BUY NOW
            </Button>
          </div>
        </Col>
        <Col md={3} style={{marginTop:'10px'}}>
          <h4>
            <GearFill /> Cấu Hình
          </h4>
          <p>
            <span style={{ fontWeight: "bold" }}>Công nghệ màn hình:</span>
            {product.configuration?.congNgheManHinh}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Độ phân giải:</span>
            {product.configuration?.doPhanGiai}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Kích thước màn hình:</span>
            {product.configuration?.kichThuocManHinh}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Hệ điều hành:</span>
            {product.configuration?.heDieuHanh}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Vi xử lý:</span>
            {product.configuration?.viXuLy}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Bộ nhớ trong:</span>{" "}
            {product.configuration?.boNhoTrong}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>RAM: </span>
            {product.configuration?.ram}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Mạng di động:</span>{" "}
            {product.configuration?.mangDiDong}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Số khe SIM:</span>
            {product.configuration?.soKheSim}
          </p>
        </Col>
      </Row>
      <Row>
        <Comments />
      </Row>
      <Row>
        <SimilarProduct product={product} />
      </Row>
    </Container>
  );
};

export default Details;
