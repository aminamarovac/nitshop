import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../Components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";

const TopRow = () => {
  return (
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height="30px"
        padding="0px 5%"
        border="0px"
      >
        <Grid container direction="row">
            <Grid item lg={6} spacing={0}>
            <CustomDiv width="50%"  height="auto" border="0px" bgColor="inherit">
<PhoneIcon style={{fontSize:fontSize.normal}}/>
<p>+381631387323</p>
</CustomDiv>
<CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
    </Grid>
    </Grid>
      </CustomDiv>

  );
};

export default TopRow;

