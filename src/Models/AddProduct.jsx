import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { PlusSquareFill, Trash, TrashFill, X } from "react-bootstrap-icons";
import { Col, FormSelect, Row } from "react-bootstrap";
import "../style/addproduct.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {
  const { visible, setVisible } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [option, setOption] = useState([{ color: "", version: "", price: "" }]);
  const [images, setImages] = useState([]);
  const [congNgheManHinh, setCongNgheManHinh] = useState("");
  const [doPhanGiai, setDoPhanGiai] = useState("");
  const [kichThuocManHinh, setKichThuocManHinh] = useState("");
  const [heDieuHanh, setHeDieuHanh] = useState("");
  const [viXuLy, setViXuLy] = useState("");
  const [boNhoTrong, setBoNhoTrong] = useState("");
  const [ram, setRam] = useState("");
  const [mangDiDong, setMangDiDong] = useState("");
  const [soKheSim, setSoKheSim] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:9999/brands")
      .then((response) => setBrands(response.data))
      .catch((error) => console.error("error fetching brands", error));
  }, []);
  console.log(selectedBrand);
  const onHide = () => {
    setVisible(false);
  };

  const dialogFooter = (
    <div style={{ margin: "20px" }}>
      <Button
        className="btn btn-success mr-2"
        type="submit"
        form="addProductForm"
      >
        <PlusSquareFill /> Add
      </Button>
      <Button onClick={onHide} className="btn btn-danger">
        <X style={{ fontSize: "22px" }} />
        Close
      </Button>
    </div>
  );

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:9999/products?name=${name}`)
      .then((response) => {
        const existingProduct = response.data.find((p) => p.name === name);
        if (existingProduct) {
          toast.error("Product name already exists");
        } else {
          axios
            .post("http://localhost:9999/products", {
              brand: selectedBrand,
              name: name,
              option: option,
              quantity: quantity,
              description: description,
              configuration: {
                congNgheManHinh: congNgheManHinh,
                doPhanGiai: doPhanGiai,
                kichThuocManHinh: kichThuocManHinh,
                heDieuHanh: heDieuHanh,
                viXuLy: viXuLy,
                boNhoTrong: boNhoTrong,
                ram: ram,
                mangDiDong: mangDiDong,
                soKheSim: soKheSim,
              },
              images: images,
            })
            .then((response) => {
              if (response.status === 201) {
                toast.success("Thêm sản phẩm thành công");
                nav("/dashboard");
                setVisible(false);
              } else {
                toast.error("Thêm sản phẩm thất bại");
              }
            });
        }
      });
  };

  const addOption = () => {
    setOption([...option, { color: "", version: "", price: "" }]);
  };

  const removeOption = (index) => {
    const newOptions = option.filter((option, i) => i !== index);
    setOption(newOptions);
  };

  const handleOptionChange = (index, field, value) => {
    const newOptions = option.map((opt, i) =>
      i === index ? { ...opt, [field]: value } : opt
    );
    setOption(newOptions);
  };

  const addImage = () => {
    setImages([...images, ""]); // Thêm một input nhập giá trị url images
  };
  const removeImage = (index) => {
    const newImages = [...images]; // Tạo một bản sao của mảng images
    newImages.splice(index, 1); // Loại bỏ ảnh tại chỉ mục index
    setImages(newImages); // Cập nhật state với mảng ảnh mới
  };
  const handleImageChange = (index, value) => {
    const newImages = [...images]; // Tạo một bản sao của mảng images
    newImages[index] = value; // Cập nhật giá trị của ảnh tại chỉ mục index
    setImages(newImages); // Cập nhật state với mảng ảnh mới
  };

  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        footer={dialogFooter}
        className="bg-light"
        style={{ width: "70vw" }}
        modal
        header={<div className="custom-dialog-header">Add Product</div>}
      >
        <div className="bg-light p-1" style={{ margin: "25px" }}>
          <div style={{ margin: "40px" }}>
            <form id="addProductForm" onSubmit={handleAddProduct}>
              <Row>
                <Col md={6}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="name">
                      <h6>Product Name</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Input product name"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="description">
                      <h6>Description</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Input description"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>

                  {/* <div className="form-group w-full">
                    <label className="label" htmlFor="images">
                      <h6>Images</h6>
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      name="images"
                      value={images}
                      onChange={(e) => setImages(e.target.value)}
                      placeholder="Input image URL"
                      style={{ height: "50px" }}
                      required
                    />
                  </div> */}
                  <div className="form-group w-full">
                    <label className="label" htmlFor="brand">
                      <h6>Brand</h6>
                    </label>
                    <FormSelect
                      className="form-control"
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      style={{
                        height: "50px",
                        border: "solid #CCC 1px",
                      }}
                      required
                    >
                      <option value="">Select a brand</option>
                      {brands.map((b) => (
                        <option key={b._id} value={b._id}>
                          {b.hangSanXuat}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="congNgheManHinh">
                      <h6>Công nghệ màn hình</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input công nghệ màn hình"
                      value={congNgheManHinh}
                      onChange={(e) => setCongNgheManHinh(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="doPhanGiai">
                      <h6>Độ phân giải</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input độ phân giải"
                      value={doPhanGiai}
                      onChange={(e) => setDoPhanGiai(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="soKheSim">
                      <h6>Khe sim</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Input khe sim"
                      value={soKheSim}
                      onChange={(e) => setSoKheSim(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="kichThuocManHinh">
                      <h6>Kích thước màn hình</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input kích thước màn hình"
                      value={kichThuocManHinh}
                      onChange={(e) => setKichThuocManHinh(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="heDieuHanh">
                      <h6>Hệ điều hành</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input hệ điều hành"
                      value={heDieuHanh}
                      onChange={(e) => setHeDieuHanh(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="viXuLy">
                      <h6>Vi xử lý</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input vi xử lý"
                      value={viXuLy}
                      onChange={(e) => setViXuLy(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="boNhoTrong">
                      <h6>Bộ nhớ trong</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input bộ nhớ trong"
                      value={boNhoTrong}
                      onChange={(e) => setBoNhoTrong(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="ram">
                      <h6>Ram</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input ram"
                      value={ram}
                      onChange={(e) => setRam(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="mangDiDong">
                      <h6>Mạng di động</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Input mạng di động"
                      value={mangDiDong}
                      onChange={(e) => setMangDiDong(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                <div className="form-group mt-2">
                  <h6>Options</h6>
                  {option.map((o, index) => (
                    <div key={index} className="option-container">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Color"
                          style={{ height: "50px" }}
                          value={o.color}
                          onChange={(e) =>
                            handleOptionChange(index, "color", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Version"
                          style={{ height: "50px" }}
                          value={o.version}
                          onChange={(e) =>
                            handleOptionChange(index, "version", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                          style={{ height: "50px" }}
                          value={o.price}
                          onChange={(e) =>
                            handleOptionChange(index, "price", e.target.value)
                          }
                          required
                        />
                      </div>
                      <Button
                        type="button"
                        className="btn btn-danger mb-2"
                        onClick={() => removeOption(index)}
                      >
                        <TrashFill /> Option
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    className="btn btn-primary"
                    onClick={addOption}
                  >
                    <PlusSquareFill /> Option
                  </Button>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="form-group">
                    <label className="label" htmlFor="images">
                      <h6>Images</h6>
                    </label>
                    {images.map((image, index) => (
                      <div key={index}>
                        <div className="form-group">
                          <input
                            type="url"
                            className="form-control"
                            value={image}
                            onChange={(e) =>
                              handleImageChange(index, e.target.value)
                            }
                            placeholder="Input image URL"
                            style={{ height: "50px" }}
                            required
                          />
                        </div>

                        <Button
                          type="button"
                          className="btn btn-danger mb-2"
                          onClick={() => removeImage(index)}
                        >
                          <TrashFill /> Image
                        </Button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      className="btn btn-primary"
                      onClick={addImage}
                    >
                      <PlusSquareFill /> Image
                    </Button>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="form-group w-full">
                    <label className="label" htmlFor="doPhanGiai">
                      <h6>Số lượng</h6>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Input độ phân giải"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      style={{ height: "50px" }}
                      required
                    />
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddProduct;
