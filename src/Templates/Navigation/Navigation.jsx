import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../Components/CustomDiv/CustomDiv";

const Navigation=()=>{
    return(
        <Grid container direction="row">
            <Grid item xs={7} sm={5} md={5} lg={4}>
            <CustomDiv border="2px solid black" width="100%"></CustomDiv>
            </Grid>
            <Grid item xs={3} sm={5} md={5} lg={4}>
            <CustomDiv border="2px solid black" width="100%"></CustomDiv>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={4}>
            <CustomDiv border="2px solid black" width="100%"></CustomDiv>
            </Grid>
        </Grid>
    )
}

export default Navigation;