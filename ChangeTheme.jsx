import React, {  useState, useRef } from "react";

function ChangeTheme() {
   const [color, setColor] = useState({color: "black"});
   const [pageColor, setPageColor] = useState({backgroundColor: "white"});
   const [buttonColor, setButtonColor] = useState({color: "black"});
   const [buttonBackgroundColor, setButtonBackgroundColor] = useState({backgroundColor: "white"})
   const [borderColorChange, setBorderColorChange] = useState({borderColor: "black"})

  function changeColor() {
    setColor({color: color.color === "white" ? "black" : "white"}
    );
    document.body.style.backgroundColor = pageColor.backgroundColor === "white" ? "black" : "white";
    setPageColor({ backgroundColor: document.body.style.backgroundColor });
    setButtonColor({color: buttonColor.color === "black" ? "white" : "black"})
    setButtonBackgroundColor({backgroundColor: buttonBackgroundColor.backgroundColor === "white" ? "black" : "white"})
    setBorderColorChange({borderColor: borderColorChange.borderColor==="black" ? "white" : "black"})
  }

  return (
    <>
      <div className="container">
        <h1 style={color}>Hello World !</h1>
        <button onClick={changeColor} style={{...buttonColor, ...buttonBackgroundColor, borderColor: borderColorChange.borderColor}} >
          Change Theme
        </button>
      </div>
    </>
  );
}

export default ChangeTheme;
