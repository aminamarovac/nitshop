import React from "react";
import SimplifiedDiv from "../../Components/SimplifiedDiv/SimplifiedDiv";
import { colors, fontSize } from "../../util/theme";

const Bottombar = () => {
  const styles = {
    mainDiv: {
      bacgroundColor: colors.lightGray,
      height: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 160px",
      alignItems: "center",
    },
    innerText: {
      color: colors.white,
      fontSize: fontSize.optimal,
    },
  };
  return (
    <SimplifiedDiv style={styles.mainDiv}>
      <Text>Copyright 2023 CENTAR NIT.All right reserved.</Text>
      <Text>MADE BY NIT EKIPA</Text>
    </SimplifiedDiv>
  );
};

export default Bottombar;
