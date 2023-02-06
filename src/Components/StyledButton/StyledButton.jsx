import React from "react";
import "./StyledButton.css";
import PrimaryButon from "../PrimaryButton/PrimaryButton";
const StyledButton = ({onClickHandler,innerText}) => {
  return (
    <PrimaryButon onclick={onClickHandler} >{innerText}</PrimaryButon>
  );
};

export default StyledButton;