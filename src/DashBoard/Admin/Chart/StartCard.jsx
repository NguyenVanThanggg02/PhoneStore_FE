import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Card, Grid, IconButton, styled, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Small } from "../Chart/Typography";
import axios from "axios";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": {
    opacity: 0.6,
    fontSize: "44px",
    color: theme.palette.primary.main,
  },
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main,
}));

const StatCards = (props) => {
  const { index } = props;
  const [totalPSold, setTotalPSold] = useState(0);
  const [order, setOrder] = useState(0);
  const [revanueOfWeek, setRevanueOfWeek] = useState(0);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleArrowClick = (index) => {
    console.log(index);
    navigate("/dashboard", { state: { selectedTab: index } });
  };
  useEffect(() => {
    axios
      .get("http://localhost:9999/users")
      .then((response) => setUsers(response.data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:9999/payment/totalpsold")
      .then((resp) => resp.json())
      .then((data) => {
        setTotalPSold(data.productsSold);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:9999/payment/totalamountweekly")
      .then((resp) => resp.json())
      .then((data) => {
        setRevanueOfWeek(data.totalAmountWeek);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:9999/payment")
      .then((response) => setOrder(response.data));
  }, []);
  function formatCurrency(number) {
    // Sử dụng hàm toLocaleString() để định dạng số thành chuỗi với ngăn cách hàng nghìn và mặc định là USD.
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  }
  const cardList = [
    {
      name: "Total of user",
      amount: `${users.length} users`,
      icon: "pi pi-user",
      index: 0,
    },
    {
      name: "Total orders",
      amount: `${order.length} orders `,
      icon: "pi pi-shopping-cart",
      index: 0,
    },
    {
      name: "Total products sold.",
      amount: `${totalPSold} products `,
      icon: "pi pi-shopping-cart",
      index: 1,
    },
    {
      name: "This week's revenue",
      amount: `${formatCurrency(revanueOfWeek)} đ`,
      icon: "pi pi-shopping-cart",
      index: 3,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <i className={item.icon} style={{ fontSize: "2.5rem" }}></i>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton onClick={(e) => handleArrowClick(item.index)}>
                <ArrowRightAltIcon>arrow_right_alt</ArrowRightAltIcon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
