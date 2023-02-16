import CustomDiv from "../../Components/CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";
import Logo from "../assets/images/logo.png";
import { colors, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";


const MainBar = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="30px"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6}>
            <img src={Logo}alt="logo" style={{
                width:200,
                height:100,
            }}/>
             </Grid>
        <Grid item md={6} lg={6}> </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
