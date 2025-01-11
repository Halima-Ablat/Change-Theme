import React, {  useState, useRef } from "react";

function ChangeTheme() {
   const [styles, setStyles] = useState({
    color: "black",
    backgroundColor: "white",
    buttonColor: "white",
    buttonBackgroundColor: "black",
    borderColor: "white"
   })

  function changeColor() {
    setStyles(prevStyles => ({ color: prevStyles.color === "white" ? "black" : "white", backgroundColor: prevStyles.backgroundColor === "white" ? "black" : "white", buttonColor: prevStyles.buttonColor === "black" ? "white" : "black", buttonBackgroundColor: prevStyles.buttonBackgroundColor === "white" ? "black" : "white", 
      borderColor: prevStyles.borderColor === "white" ? "black" : "white" })); 
      document.body.style.backgroundColor = styles.backgroundColor === "white" ? "black" : "white"; }

  return (
    <>
      <div className="container">
        <h1 style={{color: styles.color}}>Hello World !</h1>
        <button onClick={changeColor} style={{
          color: styles.buttonColor,
          backgroundColor: styles.buttonBackgroundColor,
          borderColor: styles.borderColor
        }} >
          Change Theme
        </button>
      </div>
    </>
  );
}

export default ChangeTheme;
