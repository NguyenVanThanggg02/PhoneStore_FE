import Moving from "@mui/icons-material/Moving";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Card,
  Fab,
  Grid,
  Icon,
  lighten,
  styled,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
}));

const FabIcon = styled(Fab)(() => ({
  width: "44px !important",
  height: "44px !important",
  boxShadow: "none !important",
}));

const H3 = styled("h3")(({ textcolor }) => ({
  margin: 0,
  color: textcolor,
  fontWeight: "500",
  marginLeft: "12px",
}));

const H1 = styled("h1")(({ theme }) => ({
  margin: 0,
  flexGrow: 1,
  color: theme.palette.text.secondary,
}));

const Span = styled("span")(({ textcolor }) => ({
  fontSize: "13px",
  color: textcolor,
  marginLeft: "4px",
}));

const IconBox = styled("div")(() => ({
  width: 16,
  height: 16,
  color: "#fff",
  display: "flex",
  overflow: "hidden",
  borderRadius: "300px ",
  justifyContent: "center",
  "& .icon": { fontSize: "14px" },
}));

const StatCards2 = () => {
  const { palette } = useTheme();
  const textError = palette.error.main;
  const bgError = lighten(palette.error.main, 0.85);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:9999/payment/totalamount")
      .then((response) => setTotalAmount(response.data))
      .catch((error) => console.log(error));
  });
  function formatCurrency(number) {
    // Sử dụng hàm toLocaleString() để định dạng số thành chuỗi với ngăn cách hàng nghìn và mặc định là USD.
    if (typeof number === "number") {
      return number.toLocaleString("en-US", {
        currency: "VND",
      });
    }
  }
  return (
    <Grid container spacing={12}>
      <Grid item xs={12} md={12}>
        <Card elevation={6} sx={{ p: 2 }} style={{ height: '340px' }}>
          <ContentBox>
            <FabIcon
              size="medium"
              sx={{ background: bgError, overflow: "hidden" }}
            >
              <StarBorderIcon sx={{ color: textError }}>
                star_outline
              </StarBorderIcon>
            </FabIcon>
            <H3 textcolor={textError}>Transactions</H3>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>{formatCurrency(totalAmount.amount) +" đ"}</H1>
          </ContentBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCards2;
