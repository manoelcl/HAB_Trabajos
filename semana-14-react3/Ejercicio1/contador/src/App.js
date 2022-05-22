import "./App.css";
import useCounter from "./Counter";

function App() {
  const { counter, add, subtract } = useCounter(3);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={add}>Añadir</button>
      <button onClick={subtract}>Restar</button>
    </div>
  );
}

export default App;
