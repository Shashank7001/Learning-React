import React from "react";

function Examp2(props) {
  return (
    <div className="text-black text-3xl bg-white inline-block p-5 m-5 rounded-lg shadow-lg text-center">
        <h1>This is an example component {props.user}</h1>
    </div>
  );
}
export default Examp2;