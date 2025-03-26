import React from "react";
import style from "./ResultDisplay.module.css"

function ResultDisplay({gorjeta, total}){
  return (
    <>
    <div>
      <p> Gorjeta: R$ {gorjeta} </p>
      <p> Total: R$ {total}</p>
    </div>
    </>
  );

}

export default ResultDisplay;