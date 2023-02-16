import React from "react";
import Grid from "@mui/material/Grid";
import TopRow from "./TopRow";
import CustomDiv from "../../Components/CustomDiv/CustomDiv";
const Navigation = () => {
  return (
    <Grid container direction='row'>
      <CustomDiv padding='0px 5%' border='0px' width='100%'>
        <TopRow/>
        <MainBar/>
      </CustomDiv>
    </Grid>
  );
};
export default Navigation;