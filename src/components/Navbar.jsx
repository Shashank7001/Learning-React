import React from "react";
import NavbarPart2 from "./NavbarPart2";

function Navbar() {
  return (
    <nav className="flex gap-10 items-center justify-between bg-blue-500 p-4">
      <h1 className="text-white text-2xl">My Navbar</h1>
      <NavbarPart2 />
    </nav>
  );
}
export default Navbar;