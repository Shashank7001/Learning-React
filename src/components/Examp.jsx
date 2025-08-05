import React from "react";
import Examp2 from "./Examp2";
function Examp(props) {
  return (
    <div className="text-black text-3xl bg-white inline-block p-5 m-5 rounded-lg shadow-lg text-center">
        <h1>{props.name}</h1>
      <p>It demonstrates how to create a simple React component.</p>
      <Examp2 user ={props.name}/>
    </div>
  );
}
export default Examp;