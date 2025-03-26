import React from "react";
import style from "./Button.module.css";

function Button({text, onClik}){
  return (
    <>
      <button onClick={onClik}>
          {text}
      </button>
    </>
  );

}

export default Button;