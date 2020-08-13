import React, { createContext, Component } from "react";

export const CalcContext = createContext();

export default class CalcContextProvider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      restart: false,
      onNumbers: true,
      input: ["0"],
      display: [],
    };
    this.add = this.add.bind(this);
  }

  add(value) {
    let onNumbers = this.state.onNumbers;

    switch (value) {
      case "0":
      case ".":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (!onNumbers) {
          this.setState({
            display: [...this.state.display, this.state.input],
            input: [value],
            onNumbers: true,
          });
        } else if (!(this.state.input[0] === "0")) {
          this.setState({
            input: [...this.state.input, value],
            onNumbers: true,
          });
        } else {
          this.setState({
            input: [value],
          });
        }

        break;
      case "/":
      case "*":
      case "+":
        if (this.state.input === ["-"]) {
          this.setState({
            input: [value],
          });
        } else if (onNumbers) {
          this.setState({
            display: [
              ...this.state.display,
              this.state.input.join("").replace(/^0/, ""),
            ],
            input: [value],
            onNumbers: false,
          });
        } else {
          this.setState({
            input: [value],
          });
        }
        break;
      case "-":
        if (this.state.input[0] === "-") {
          if (this.state.input.length > 1) {
            this.setState({
              display: [
                ...this.state.display,
                this.state.input.join("").replace(/^0/, ""),
              ],
              input: value,
            });
          } else {
          }
        } else {
          this.setState({
            display: [
              ...this.state.display,
              this.state.input.join("").replace(/^0/, ""),
            ],
            input: value,
            onNumbers : !this.state.onNumbers
          });
        }
        break;
      case "AC":
        this.ac();
        break;
      case "=":
        this.equal();
        break;
      default:
        break;
    }
  }

  evaluate() {
    let char = this.state.display;
    let result = eval(char.join(""));
    if (char.length > 39) {
      return result.toExponential(char.length - 39);
    } else {
      return result;
    }
  }

  ac() {
    this.setState({
      display: [],
      input: ["0"],
    });
  }

  equal() {
    this.setState(
      {
        restart: true,
        display: [...this.state.display, this.state.input.join("")],
      },
      () => {
        try {
          this.setState({
            input: [`=   ${this.evaluate()}`],
          });
        } catch (error) {
          this.setState({
            input: ["error"],
          });
        }
      }
    );
  }
  render() {
    return (
      <CalcContext.Provider
        value={{
          state: this.state,
          add: this.add,
        }}
      >
        {this.props.children}
      </CalcContext.Provider>
    );
  }
}

// sorry for long code u.u
