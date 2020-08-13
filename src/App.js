import React from "react";
import "./App.css";
import { Keyboard } from "./components/Keyboard";
import { Screen } from "./components/Screen";
import CalcContextProvider from "./context/CalcContext";

const App = () => {
  return (
    <div className="App">
      <CalcContextProvider>
        <Screen />
        <Keyboard />
      </CalcContextProvider>
    </div>
  );
};


export default App;
