import "./App.css";
import CounterHooks from "./CounterHooks";
import Counter from "./Counter";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red')
  console.log(theme)
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <div className="App">
        <>
          Counter
          <Counter initialCount={0}></Counter>
          CounterHooks
          <CounterHooks initialCount={3} />
          <button onClick={() => setTheme(prevTheme => {
            return prevTheme === 'red' ? 'blue' : 'red'
          })}>Toggle Theme</button>
        </>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
