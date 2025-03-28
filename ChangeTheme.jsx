import LocalStorage from "./LocalStorage";

function ColorChange() {
  const [color, setColor] = LocalStorage('color', 'black')

  function handleColorChange() {
    setColor(color === "white" ? "black" : "white");
  }

  console.log(color);

  return (
    <div className="color-mode" data-color={color}>
      <div className="container">
        <h1>Hello World !</h1>
        <button onClick={handleColorChange}>Change Theme</button>
      </div>
    </div>
  );
}

export default ColorChange;
