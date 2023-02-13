import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../Components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui"
import Text from "../../Components/Text/Text";
import { getScreenWidth } from "../../util/helpers";

const TopRow = () =>{

  const screenWidth=getScreenWidth();
  console.log(screenWidth);
  return (
    
    <CustomDiv
      bgColor={colors.secondColor}
      display="flex"
      width='100%'
      height='30px'
      padding='0px 5% '
      border='0px'
    >
      <Grid container direction='row'>
        <Grid item md={6} lg={6} spacing={0}>
            <PhoneIcon
              style={{
                fontSize: fontSize.normal,
              }}
            />
            <Text fontSize={fontSize.small}>+38163333333</Text>
            <CustomDiv display='flex' alignItems="flex-start" alignContent="flex-start">
   <EmailIcon
              style={{
                fontSize: fontSize.normal,
              }}
            />
             <Text fontSize={fontSize.small}>info@gmail.com</Text>
          </CustomDiv>
        </Grid>
        <Grid item md={6} lg={6} spacing={0}>
          <CustomDiv/>
          <CustomDiv width='50%' border='0px' bgColor='inherit'></CustomDiv>
        </Grid>
      </Grid>
      </CustomDiv>
   
  );
};

export default TopRow;