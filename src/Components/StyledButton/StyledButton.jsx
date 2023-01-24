import React from "react";
import "./StyledButton.css";

const StyledButton = (props) => {
  return (
    <button className="styledButton" onClick={props.onClickHandler}>
      Send
    </button>
  );
};

export default StyledButton;