import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CartCheck, CartPlus, CashCoin, GearFill } from "react-bootstrap-icons";
import { Galleria } from "primereact/galleria";
import freeship from "../../src/assets/images/freeship.png";
import changeedit from "../../src/assets/images/change&edit.jpg";
import SimilarProduct from "./SimilarProduct";
import { useParams } from "react-router-dom";

const Details = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState({}); // Initialize as null instead of an empty object
  const [phienBan, setPhienBan] = useState([]); // Initialize as empty array
  const [mauSac, setMauSac] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9999/sanpham/${pid}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
        setPhienBan(data?.luaChon || []); // Set phienBan from luaChon array
        setMauSac(data?.luaChon || []);
        const imageUrls = data?.hinhAnh.map((item) => ({
          itemImageSrc: item.itemImageSrc,
          alt: item.alt,
          thumbnailImageSrc: item.thumbnailImageSrc,
        }));
        setImages(imageUrls);
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

  const itemTemplate = (item) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ width: "60%" }}
      />
    );
  };
  const increaseQuantity = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  const allPrices = product.luaChon?.map((g) => g.gia)[0];

  return (
    <Container fluid>
      <Row className=" mt-5">
        <Col md={4}>
          <div className="carddetail">
            <Galleria
              value={images} // Use images state for Galleria value
              responsiveOptions={responsiveOptions}
              numVisible={5}
              style={{ maxWidth: "640px" }}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
          </div>
          <div className="mt-4">
            <p>{product.moTa}</p>
          </div>
        </Col>

        {/* <!-- Product details --> */}
        <Col md={5}>
          <div className="product-details">
            <h2 className="product-name mb-4 text-dark">
              <strong>{product.model}</strong>
            </h2>

            <div className="d-flex justify-content-between">
              <h3 class="product-price">
                <CashCoin
                  style={{
                    fontSize: "40px",
                    color: "gold",
                    marginRight: "15px",
                  }}
                />
                {allPrices + "đ"}
                <del
                  class="product-old-price"
                  style={{ color: "gray", fontSize: "smaller" }}
                >
                  $990.00
                </del>
              </h3>
            </div>

            <div class="product-ver">
              <label>
                <h4>Lựa Chọn Phiên Bản</h4>
                <div className="mt-2 d-flex justify-content-center">
                  {phienBan.map((v, index) => (
                    <div key={index} className="mr-2 inline-block">
                      <Button
                        className={` ${
                          selectedButton === index
                            ? "text-white bg-success"
                            : "bg-white text-dark"
                        }`}
                        onClick={() => handleButtonClick(index)}
                      >
                        <span>{v.phienBan}</span>
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
                  {mauSac.map((m, index) => (
                    <div key={index} className="mr-2 inline-block">
                      <Button
                        className={` ${
                          selectedButtonColor === index
                            ? "text-white bg-success"
                            : "bg-white text-dark"
                        }`}
                        onClick={() => handleButtonColorClick(index)}
                      >
                        <span>{m.mauSac}</span>
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
                  Đổi hàng trong 30 ngày kể từ ngày mua hỗ trợ sửa chữa miễn phí
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
        <Col md={3}>
          <h4>
            <GearFill /> Cấu Hình
          </h4>
          <p>
            <span style={{ fontWeight: "bold" }}>Công nghệ màn hình:</span>
            {product.cauHinh?.congNgheManHinh}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Độ phân giải:</span>
            {product.cauHinh?.doPhanGiai}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Kích thước màn hình:</span>
            {product.cauHinh?.kichThuocManHinh}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Hệ điều hành:</span>
            {product.cauHinh?.heDieuHanh}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Vi xử lý:</span>
            {product.cauHinh?.viXuLy}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Bộ nhớ trong:</span>{" "}
            {product.cauHinh?.boNhoTrong}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>RAM: </span>
            {product.cauHinh?.ram}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Mạng di động:</span>{" "}
            {product.cauHinh?.mangDiDong}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Số khe SIM:</span>
            {product.cauHinh?.soKheSim}
          </p>
        </Col>
      </Row>
      <Row>
        <SimilarProduct />
      </Row>
    </Container>
  );
};

export default Details;
