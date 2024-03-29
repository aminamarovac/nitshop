import React from "react";
import Text from "../../Components/Text/Text";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import SimplifiedDiv from "../../Components/SimplifiedDiv/SimplifiedDiv";
import { Card } from "@mui/material";
import { colors, fontSize, fontWeight } from "../../util/theme";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

const ArticleCard = ({ title, description, image, price, onShowMore }) => {
  const styles = {
    imageContainer: {
      width: "100%",
      height: "200px",
    },
    image: {
      objectFit: "cover",
      objectFit: "contain",
      width: "100%",
      height: "100%",
    },
    descriptionContainer: {
      display: "grid",
      placeItems: "center",
      gap: 8,
      margin: "10px 15px",
    },
    buttonHolder: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
    },
    shoppingCartIcon: {
      fontSize: fontSize.normal,
      margin: "0px 3px",
    },
  };

  const altTag = title !== "" ? title : "Article image";
  return (
    <Card>
      <SimplifiedDiv style={styles.imageContainer}>
        <img src={image} style={styles.image} alt={altTag} />
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.descriptionContainer}>
        <Text
          color={colors.accentColor}
          fontWeight={fontWeight.mediumBold}
          fontSize={fontSize.large}
        >
          {price}
        </Text>
        <Text fontSize={fontSize.medium}>{title}</Text>
        <Text fontSize={fontSize.optimal}>{description}</Text>
        <Text color={colors.lightBlack} fontSize={fontSize.optimal}>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Text>
      </SimplifiedDiv>
      <SimplifiedDiv style={styles.buttonHolder}>
        <PrimaryButton
          primary
          borderRadius="3px"
          padding="10px"
          onClick={onShowMore}
        >
          <ShoppingCartOutlined style={styles.shoppingCartIcon} />
          Add to cart
        </PrimaryButton>
      </SimplifiedDiv>
    </Card>
  ); 
};
export default ArticleCard;
