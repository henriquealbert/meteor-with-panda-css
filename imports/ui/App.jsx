import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";
import { css } from "../../styled-system/css";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <div className={css({ fontSize: "2xl", fontWeight: "bold", color:'red' })}>Hello 🐼!</div>
    <Hello />
    <Info />
  </div>
);
