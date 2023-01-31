import React, { useState } from "react";
import "./App.css";
import CustomForm from "./Components/CustomForm/CustomForm";
import CustomDiv from "./Components/CustomDiv/CustomDiv";
import ToDo from "./Components/ToDo/ToDo";

const App = () => {
  const [fullName, setFullName] = useState("");

  function dataGrabber(name, lastName) {
    let fullName = name + " " + lastName;
    console.log(fullName);
    setFullName(fullName);
  }

  return (
      <>
    <div className='App'>
      <header className='App-header'>
        <CustomDiv>
          <h4>{fullName}</h4>
          <p></p>
        </CustomDiv>
        <CustomForm sendData={(name, lName) => dataGrabber(name, lName)} />
      </header>
    </div>
      <ToDo />
    </>
  );
};

export default App; 

