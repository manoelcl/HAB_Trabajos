import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_SALUDO}</h1>
      <img src="http://localhost:3000/foto.jpg" alt="foto.jpg" />
    </div>
  );
}

export default App;
