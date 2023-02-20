import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../Components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import Logo from "../../assets/images/logo.png";

const MainBar = () => {
  return (
    <CustomDiv
      bgColor='white'
      display='flex'
      width='100%'
      height='30px'
      padding='0px 10%'
      border='0px'
    >
      <Grid container direction='row'>
        <Grid item md={6} lg={6}>
          <img src={Logo}alt='Logo'
            style={{
              width: 150,
              height: "auto",
            }}
          />
        </Grid>
        <Grid item md={6} lg={6}></Grid>
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;