import React from "react";
import "./Cbutton.css";

const Cbutton = (props) => (
  <div className="btnclear" onClick={props.eventClear}>
    {props.children}
  </div>
);

export default Cbutton;
