import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRepeat,
  BoxArrowInRight,
  Cart2,
  EnvelopeFill,
  GeoAltFill,
  GraphUpArrow,
  PersonVcard,
  TelephoneFill,
} from "react-bootstrap-icons";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const HeaderApp = () => {
  const settings = [
    {
      name: "Profile",
      icon: <PersonVcard style={{ fontSize: "20px", marginRight: "10px" }} />,
    },
    {
      name: "Change Password",
      icon: <ArrowRepeat style={{ fontSize: "20px", marginRight: "10px" }} />,
    },
    {
      name: "My Orders",
      icon: <Cart2 style={{ fontSize: "20px", marginRight: "10px" }} />,
    },
    {
      name: "Logout",
      icon: (
        <BoxArrowInRight style={{ fontSize: "20px", marginRight: "10px" }} />
      ),
    },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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
  const handleViewOrder = () => {
    nav("/orderstatus");
    handleCloseUserMenu();
  };

  if (user && user.role === 1) {
    settings.splice(3, 0, {
      name: "DashBoard",
      icon: <GraphUpArrow style={{ fontSize: "20px", marginRight: "10px" }} />,
    });
  }

  //  logout luôn ở cuối mảng
  const orderedSettings = [
    ...settings.filter((s) => s.name !== "Logout"),
    ...settings.filter((s) => s.name === "Logout"),
  ];

  return (
    <Container fluid>
      <div>
        <Row className="header">
          <Col
            md={7}
            xs={12}
            sm={6}
            className="header-item d-flex text-white mt-1"
          >
            <Col md={6} sm={4} xs={4}>
              <TelephoneFill style={{ color: "red" }} /> {user.phone}
            </Col>
            <Col md={6} sm={4} xs={4}>
              <EnvelopeFill style={{ color: "red" }} /> {user.email}
            </Col>
          </Col>
          <Col
            md={5}
            sm={6}
            xs={12}
            className="header-item d-flex text-white text-right justify-content-end mt-1"
          >
            <Col md={4} sm={4} xs={4}>
              <GeoAltFill style={{ color: "red" }} /> {user.address}
            </Col>
            <Col
              md={8}
              sm={6}
              xs={12}
              className="d-flex justify-content-center"
            >
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    style={{ color: "white", marginTop: "1px" }}
                  >
                    <h6 style={{ fontSize: "16px" }}>
                      {user.full_name ? user.full_name : user.username}
                    </h6>
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
                  {orderedSettings.map((setting) => (
                    <MenuItem
                      key={setting.name}
                      onClick={
                        setting.name === "Logout"
                          ? handleLogout
                          : setting.name === "Profile"
                          ? handleProfile
                          : setting.name === "Change Password"
                          ? handleChangePass
                          : setting.name === "My Orders"
                          ? handleViewOrder
                          : setting.name === "DashBoard"
                          ? handleDashBoard
                          : handleCloseUserMenu
                      }
                    >
                      {setting.icon}
                      <Typography textAlign="center">{setting.name}</Typography>
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
