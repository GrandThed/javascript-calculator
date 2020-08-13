import React from "react";
import "./keyboard.css";
import { CalcContext } from "../context/CalcContext";

export const Keyboard = () => {
  return (
    <CalcContext.Consumer>
      {(value) => {
        const add = value.add
        
        return (
          <div className="keyboard">
            <button onClick={e => add(e.target.innerHTML)} id="clear" className="btns-calc ac">
              AC
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="divide" className="btns-calc operator">
              /
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="multiply" className="btns-calc operator">
              *
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="seven" className="btns-calc number">
              7
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="eight" className="btns-calc number">
              8
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="nine" className="btns-calc number">
              9
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="subtract" className="btns-calc sub operator">
              -
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="four" className="btns-calc number">
              4
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="five" className="btns-calc number">
              5
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="six" className="btns-calc number">
              6
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="add" className="btns-calc add operator ">
              +
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="one" className="btns-calc number">
              1
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="two" className="btns-calc number">
              2
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="three" className="btns-calc number">
              3
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="equals" className="btns-calc equal">
              =
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="zero" className="btns-calc number zero">
              0
            </button>
            <button onClick={e => add(e.target.innerHTML)} id="decimal" className="btns-calc number dot">
              .
            </button>
          </div>
        );
      }}
    </CalcContext.Consumer>
  );
};
