import logo from "./logo.svg";
import "./App.css";
import "./style/header.css";
import "./style/banner.css";
import "./style/footer.css";
import "./style/home.css";
import "./style/store.css";
import "./style/checkout.css";
import "./style/detail.css";
import "./style/detail.css";
import "./style/sign_in.css";
import "./style/sign_up.css";
import "./style/listpro.css";
import "./style/similarproduct.css";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign_In from "./screens/Sign_In";
import Banner from "./screens/Banner";
import Home from "./screens/Home";
import Footer from "./screens/Footer";
import { Container } from "react-bootstrap";
import Store from "./Models/Store";
import CheckOut from "./Models/CheckOut";
import Details from "./Models/Details";
import Sign_Up from "./screens/Sign_Up";
import UserProfile from "./screens/UserProfile";
import EditProfile from "./screens/EditProfile";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import HeaderApp from "./components/HeaderApp";
import ListProduct from "./Models/ListProduct";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setIsLoggedIn(true);
        setUserName(parsedUser.username);
      } catch (error) {
        console.error("Error parsing user data:", error);
        // Xử lý lỗi khi không thể chuyển đổi thành JSON
        // Ví dụ: Hiển thị thông báo lỗi, đặt giá trị mặc định cho user, ...
      }
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserName(user.username);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <Container fluid className="p-0">
      <BrowserRouter>
      {isLoggedIn ? <HeaderApp username={username} /> : <Header />}
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                username={username}
              />
            }
          />
          <Route path="/store" element={<Store />} />
          <Route path="/details/:pid" element={<Details />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/sign_in"
            element={<Sign_In handleLogin={handleLogin} />}
          />
          <Route path="/sign_up" element={<Sign_Up />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/editprofile" element={<EditProfile />} />
          <Route path="/listproduct" element={<ListProduct/>} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
