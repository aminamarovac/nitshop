import React from "react";
import "./StyledButton.css";

const StyledButton = (props) => {
  return (
    <button className="StyledButton" onClick={props.onClickHandler}>
      Send
    </button>
  );
};

export default StyledButton;