import React from "react";
const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  margin,
  bgColor,
  display,
  justifyContent,
  justifyItems,
  alignItems,
  alignContent,
}) => {
  const divWidth = width ? width : 100;
  const divHeight = height ? height : 100;
  const divBr = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "1px solid black";
  const divMargin = margin ? margin : 0;
  const divPadding = padding ? padding : 0;
  const backgroundColor= bgColor ? bgColor: "white";
  const disp =display ? display:"block";
  const jc=justifyContent?justifyContent:"flex-start";
  const ji=justifyItems?justifyItems:"center";
  const ai=alignItems?alignItems:"center";
  const ac=alignContent?alignContent:"center";
  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBr,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
        backgroundColor:backgroundColor,
        display:disp,
        justifyContent:jc
        ,justifyItems:ji,
        alignItems:ai,
        alignContent:ac,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
