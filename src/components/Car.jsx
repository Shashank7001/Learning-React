import React from "react";

function Car(props) {
      return (
    <div className="text-black text-3xl bg-white inline-block p-6 m-5 rounded-lg shadow-lg text-center">
        <img className="h-32 w-32 rounded mb-3" src={props.profilePhoto} alt="" />
        <h1 className="text-2xl font-semibold mb-4">{props.user}</h1>
        <h2 className="text-xl">{props.city}, {props.age}</h2>
        <h2 className="text-xl text-blue-500">{props.profession}</h2>
        <button className="mt-4 bg-emerald-700 text-white px-4 py-2 rounded font-medium">Add Friend</button></div>
  );
}
export default Car;