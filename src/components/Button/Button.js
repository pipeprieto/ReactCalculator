import React from "react";
import "./Button.css";
export default function Button(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };
  return (
    <div
      className={`btncontainer ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.event(props.children)} //Llamando a la función y no al valor retornado
    >
      {props.children}
    </div>
  );
}
