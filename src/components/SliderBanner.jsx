// import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
// import "../style/sliderBanner.css";
// import banner1 from "../assets/images/banner1.jpg";
// import banner2 from "../assets/images/banner2.jpg";
// import banner3 from "../assets/images/banner3.jpg";
// import banner4 from "../assets/images/banner4.jpg";
// import banner5 from "../assets/images/banner5.jpg";
// import banner6 from "../assets/images/banner6.jpg";

// const SliderBanner = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item className="silder">
//         <img className="d-block w-100" src={banner4} alt="First slide" />
//       </Carousel.Item>
//       <Carousel.Item className="silder">
//         <img className="d-block w-100" src={banner5} alt="Second slide" />
//       </Carousel.Item>
//       <Carousel.Item className="silder">
//         <img className="d-block w-100" src={banner6} alt="Third slide" />
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default SliderBanner;
