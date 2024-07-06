import React from "react";
import { Container, Row } from "react-bootstrap";
import StatCards from "./Chart/StartCard";
import TopSellingTable from "./Chart/TopSellingTable";
import StatCards2 from "./Chart/StatCards2";
import { Card, Grid, styled, useTheme } from "@mui/material";
import RevenueChart from "./Chart/RevenueChart";

const AdminDashBoard = () => {
  const { palette } = useTheme();
  const Title = styled("span")(() => ({
    fontSize: "1rem",
    fontWeight: "500",
    marginRight: ".5rem",
    textTransform: "capitalize",
  }));
 
  return (
    <Container fluid>
      <Row style={{ marginLeft: "70px", marginTop: "30px", width: "100%" }}>
        <h3>Admin DashBoard</h3>
        <StatCards />
        {/* <TopSellingTable /> */}
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12} >
            <Card sx={{ mb: 3 }}>
              <StatCards2 />
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <RevenueChart />
            </Card>
          </Grid>
        </Grid>
      </Row>
    </Container>
  );
};

export default AdminDashBoard;
