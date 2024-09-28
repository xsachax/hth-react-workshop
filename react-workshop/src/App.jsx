import { useState, useEffect, useContext, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./components/Users";

const themes = {
  dark: "I am dark theme",
  light: "I am light theme",
};

const ThemeContext = createContext(themes);

const TestComponent = () => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
    return () => {};
  }, [theme]);

  return (
    <div
      className={
        theme == "I am dark theme" ? "dark-component" : "light-component"
      }
    >
      {theme}
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    console.log("useEffect triggered!");
    return () => {};
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme == "dark" ? themes.dark : themes.light}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          Change theme
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TestComponent />
      <Users />
    </ThemeContext.Provider>
  );
}

export default App;
