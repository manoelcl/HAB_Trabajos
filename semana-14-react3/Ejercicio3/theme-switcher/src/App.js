import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => setDarkMode(!darkMode);
  return (
    <div className="App">
      <header>
        <h1>Theme switcher</h1>
        <ThemeSwitcher callback={changeTheme}></ThemeSwitcher>
      </header>
      <ThemeContext.Provider value={darkMode}>
        <Content></Content>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
