import React from "react";
import { Link } from "react-router-dom";

function NavbarPart2() {
  return (
    <>
    <div className="flex gap-10 items-center justify-between bg-blue-500 p-4">
            <Link to="/" className="text-white font-bold">Home</Link>
            <Link to="/about" className="text-white font-bold">About</Link>
            <Link to="/product" className="text-white font-bold">Product</Link> 
            <Link to="/contact" className="text-white font-bold">Contact</Link>
        </div>
    </>
       
    
  
  );
}
export default NavbarPart2;