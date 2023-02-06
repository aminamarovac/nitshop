import React from "react";
import styled from "styled-components";

const PrimaryButon = styled.button`
  border: 2px solid pink;
  color: ${(props)=>(props.primary?"pink" : "white")};
  background-color: ${(props)=>(props.primary?"white" : "pink")};
  padding: 20px;
  margin:50px auto;
  border-radius:20px;
  margin-left:250px;
  opacity:${(props)=>(props.opacity ? props.opacity:1)};
`;

export default PrimaryButon;
