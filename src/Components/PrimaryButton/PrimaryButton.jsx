import React from "react";
import styled from "styled-components";
import { colors } from "../../util/theme";

const PrimaryButton = styled.button`
  border: 2px solid
  color: ${(props) =>
    props.primary ? colors.white : props.color ? props.color : colors.black};
  background-color: ${(props) =>
    props.primary
      ? colors.accentColor
      : props.bgColor
      ? props.bgColor
      : colors.white};
  padding: ${(props) => (props.padding ? props.padding : 20)}px;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export default PrimaryButton;