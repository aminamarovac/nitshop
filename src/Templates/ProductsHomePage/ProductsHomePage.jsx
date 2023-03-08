import React from "react";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../Components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../Components/Text/Text";
import CategoryTab from "../CategoryTab/CategoryTab";

const styles = {
  container: {
    padding: "0px 10%",
  },
  headingContainer: {
    width: "100%",
    textAlign: "center",
  },
};

const ProductsHomePage = () => {
  return (
    <SimplifiedDiv style={styles.headingContainer}>
      <Grid container direction="row">
        <Grid item md={3} lg={3}>
          <SimplifiedDiv>
            <Text>Category</Text>
          </SimplifiedDiv>
          <CategoryTab />
        </Grid>
        <Grid item md={9} lg={9}>
          <SimplifiedDiv style={styles.headingContainer}>
            <Text>Articles</Text>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ProductsHomePage;
