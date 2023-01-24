import React from "react";
import "./StyledHeader.css"

const StyledHeader = (props) => {
  return <h1 className="header1">{props.innerText}</h1>;
};

export default StyledHeader;