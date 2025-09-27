import React from "react";
import { AiOutlineCar } from "react-icons/ai";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-[#F7F8F9] p-5 items-center text-gray-800 shadow-md">
      <div className="flex items-center gap-2 text-3xl font-semibold text-purple-700">
        <AiOutlineCar size={32} />
        <div>Auctions</div>
      </div>
      <div>Search</div>
      <div>Login</div>
    </header>
  );
}
