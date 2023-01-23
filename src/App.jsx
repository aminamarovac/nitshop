import React, { useState, useEffect } from "react";
import "./App.css";
import CustomForm from "./Components/CustomForm/CustomForm";

const App = () => {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    clicked ? setInnerText("Clicked") : setInnerText("Click me");
  }, [clicked]);

  function buttonClick() {
    setClicked(!clicked);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <CustomForm />
      </header>
    </div>
  )
};
  export default App;
