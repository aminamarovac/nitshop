import React from "react"
import styled from "styled-components";


const StyledDiv=styled.div`
border:8px solid white;
color: ${(props)=>(props.primary?"blue" : "white")};
  background-color: ${(props)=>(props.primary?"white" : "blue")};
  padding: ${(props)=>(props.padding ? props.padding:20)};
  border-radius:20px;
  width:250px;
  height:200px;
  margin:50px auto;
  opacity:${(props)=>(props.opacity ? props.opacity:1)};
`
export default StyledDiv;