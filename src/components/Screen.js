import React from "react";
import "./screen.css";
import { CalcContext } from "../context/CalcContext";
export const Screen = () => {
  return (
    <CalcContext.Consumer>
      {(value) => {
        const displayDef = value.state.display.join(" ")
        const input = value.state.input
        return (
          <div>
            <p className="live">{displayDef}</p>
            <p className="current">{input}</p>
          </div>
        );
      }}
    </CalcContext.Consumer>
  );
};
