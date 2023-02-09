import React from "react";
import {Grid}  from "@mui/material";
import CustomDiv from "../../Components/CustomDiv/CustomDiv";

const Navigation=()=>{
    return(
        <Grid container direction="row">
        <CustomDiv padding="0px 20px" border="1px solid black" width="100%">
            <Grid container direction="row"></Grid>
        </CustomDiv>
        </Grid>
    )
};

export default Navigation;