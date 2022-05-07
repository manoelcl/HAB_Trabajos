import "./App.css";
import { randomColor } from "./randomColor.js";

function App() {
  const h1Style = {
    backgroundColor: randomColor(),
  };
  return (
    <div className="App">
      <h1 style={h1Style}>Título de la página</h1>
      <p className="importante">Este es un párrafo importante</p>
    </div>
  );
}

export default App;
