import "primeicons/primeicons.css";
import { BreadCrumb } from "primereact/breadcrumb";
import { Card } from "primereact/card";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { HouseHeartFill } from "react-bootstrap-icons";

// Component Header
const Header = () => (
  <div style={{ marginLeft: "20px", paddingRight: "25px" }}>
    <h1>Shoe Blog</h1>
  </div>
);


// Component Blog
const Blog = () => {
  const [showFullContent, setShowFullContent] = useState({
    Converse: false,
    Adidas: false,
    Vans: false,
    Nike: false,
  });


  const shoeImages = {
    Converse:
      "https://hanoi26sneaker.com/wp-content/uploads/2023/06/Giay-Converse-Chuck-70-Club-House-HI-Utility-5.jpg",
    Adidas:
      "https://hanoi26sneaker.com/wp-content/uploads/2023/07/Giay-Adidas-Originals-Centennial-85-Low-White-Brown-IE2369.jpg   ",
    Vans: "https://ordixi.com/wp-content/uploads/2019/10/giay-vans-forgotten-bones-sk8-high-black-true-white-vnoa4bv6v8v2-1.jpg",
    Nike: "https://trungsneaker.com/wp-content/uploads/2022/12/giay-nike-court-vision-mid-smoke-grey-dn3577-002-3-1020x680.jpg",
  };

  const descriptions = {
    Converse: {
      short: "Giày Converse là...",
      full: "Giày Converse là một trong những thương hiệu giày lâu đời và nổi tiếng bậc nhất trên thế giới. Với thiết kế đẹp, chất lượng tuyệt vời cùng khả năng marketing tốt, thương hiệu giày “Converse” đã thu hút được một lượng fans khổng lồ trên thế giới, trở thành 1 trong 5 thương hiệu giày được yêu thích nhất hiện tại.",
    },
    Adidas: {
      short: "Giày Adidas là...",
      full: "Adidas (tiếng Đức: [ˈʔadiˌdas] ⓘ; cách điệu thành adidas từ năm 1949)là một tập đoàn đa quốc gia của Đức, được thành lập và có trụ sở tại Herzogenaurach, Bavaria, chuyên thiết kế và sản xuất giày dép, quần áo và phụ kiện. Đây là nhà sản xuất đồ thể thao lớn nhất ở châu Âu và lớn thứ hai trên thế giới, sau Nike. Đây là công ty cổ phần của Tập đoàn Adidas, bao gồm 8,33% cổ phần của câu lạc bộ bóng đá Bayern München,[7] và Runtastic, một công ty công nghệ thể dục của Áo. Doanh thu của Adidas cho năm 2018 được liệt kê là 21,915 tỷ euro.",
    },
    Vans: {
      short: "Giày Vans là...",
      full: "Vans là một thương hiệu sản xuất giày, thời trang và phụ kiện nổi tiếng của Mỹ Công ty được thành lập năm 1966 bởi Paul và Jim Van Doren cùng đối tác là Gordon Lee và Serge Delia. Thương hiệu nổi tiếng toàn cầu và được xem là biểu tượng gắn liền với phong cách trượt ván đường phố. Ban đầu là một doanh nghiệp sản xuất giày và bán trực tiếp cho công chúng. Cái tên Vans đã sống qua gần 1 thế kỷ và vượt xa hơn trên toàn thế giới. Cho đến nay, Vans đã vươn mình thành thương hiệu được săn đón hàng đầu.",
    },
    Nike: {
      short: "Giày Nike là...",
      full: "Nike là một trong những thương hiệu thể thao nổi tiếng nhất trên thế giới. Từ học sinh tiểu học cho đến các vận động viên chuyên nghiệp, không ai có thể phủ nhận sức hấp dẫn của Nike. Nếu bạn khảo sát xem có bao nhiêu người đã hoặc đang sở hữu các sản phẩm của Nike, thì con số này sẽ khiến bạn bất ngờ.",
    },
  };
  // ..
  const toggleContent = (brand) => {
    setShowFullContent((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };
  const items = [
    {
      label: (
        <span style={{ color: "gray", marginLeft: "-80px", fontSize: "19px" }}>
          𝓑𝓵𝓸𝓰
        </span>
      ),
      url: "http://localhost:3000/blog",
    }
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
    <Container fluid
      style={{ paddingTop: "15px", paddingBottom: "20px" }}
    >
       <Row className="mt-3" style={{ border: "solid #CCC 1px", margin:"20px", boxShadow:'5px 10px 10px 5px #C0C0C0', borderRadius:'20px' }}>
      <BreadCrumb model={items} home={home} style={{ marginTop: "15px", border:'none', backgroundColor:'transparent' }} />
      </Row>
    
      <div
        className="flex align-items-center justify-content-center"
        style={{
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "row",
          paddingTop: "50px",
        }}
      >
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Converse`}
            onClick={() => toggleContent("Converse")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Converse"]}
                alt={"Converse"}
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  border: "none",
                  display: "flex",
                }}
              />
              <div style={{ maxWidth: "100%", paddingTop: "20px" }}>
                <p>
                  {showFullContent["Converse"]
                    ? descriptions["Converse"].full
                    : descriptions["Converse"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Converse"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Adidas`}
            onClick={() => toggleContent("Adidas")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Adidas"]}
                alt={"Adidas"}
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  border: "none",
                  display: "flex",
                }}
              />
              <div style={{ maxWidth: "100%", paddingTop: "20px" }}>
                <p>
                  {showFullContent["Adidas"]
                    ? descriptions["Adidas"].full
                    : descriptions["Adidas"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 5px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Adidas"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
      </div>

      <div
        className="flex align-items-center justify-content-center"
        style={{
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "row",
          paddingTop: "50px",
        }}
      >
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Vans`}
            onClick={() => toggleContent("Vans")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Vans"]}
                alt={"Vans"}
                style={{ width: "100%", marginBottom: "1rem", border: "none" }}
              />
              <div style={{ maxWidth: "100%" }}>
                <p>
                  {showFullContent["Vans"]
                    ? descriptions["Vans"].full
                    : descriptions["Vans"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Vans"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Nike`}
            onClick={() => toggleContent("Nike")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Nike"]}
                alt={"Nike"}
                style={{ width: "100%", marginBottom: "1rem", border: "none" }}
              />
              <div style={{ maxWidth: "100%" }}>
                <p>
                  {showFullContent["Nike"]
                    ? descriptions["Nike"].full
                    : descriptions["Nike"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Nike"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Blog;