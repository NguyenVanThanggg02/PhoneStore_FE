import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  EnvelopeFill,
  GeoAltFill,
  PersonCircle,
  TelephoneFill,
} from "react-bootstrap-icons";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import UserProfile from "../screens/UserProfile";

const settings = ["Profile", "Logout", "Change Password", "DashBoard"];
const HeaderApp = ({ username }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    nav("/");
    window.location.reload();
  };
  const handleProfile = () => {
    nav("/profile");
    handleCloseUserMenu();
  };
  const handleChangePass = () => {
    nav("/changepass");
    handleCloseUserMenu();
  };
  const handleDashBoard = () => {
    nav("/dashboard");
    handleCloseUserMenu();
  };
  return (
    <Container fluid>
      <div>
        <Row className="header">
          <Col md={6} xs={12} sm={6} className="header-item d-flex text-white">
            <Col md={4} sm={4} xs={4}>
              <TelephoneFill style={{ color: "red" }} /> {user.phone}
            </Col>
            <Col md={4} sm={4} xs={4}>
              <EnvelopeFill style={{ color: "red" }} /> {user.email}
            </Col>
            <Col md={4} sm={4} xs={4}>
              <GeoAltFill style={{ color: "red" }} /> Ha-Noi
            </Col>
          </Col>
          <Col
            md={6}
            sm={6}
            xs={12}
            className="header-item d-flex text-white text-right justify-content-end"
          >
            <Col md={4} sm={4} xs={4}>
              <Link className="text-white link-item" to="/blog">
                Blog
              </Link>
            </Col>
            <Col md={4} sm={4} xs={4}>
              <Link className="text-white link-item" to="/contact">
                Contact
              </Link>
            </Col>

            <Col
              md={3}
              sm={6}
              xs={12}
              className="d-flex justify-content-center"
            >
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    style={{ color: "white", marginTop: "6px" }}
                  >
                    <h6 style={{ fontSize: "16px" }}>{username}</h6>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={
                        setting === "Logout"
                          ? handleLogout
                          : setting === "Profile"
                          ? handleProfile
                          : setting === "Change Password"
                          ? handleChangePass
                          : setting === "DashBoard"
                          ? handleDashBoard
                          : handleCloseUserMenu
                      }
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Col>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HeaderApp;
