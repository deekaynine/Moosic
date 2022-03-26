import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ Ambient }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div class="md:hidden fixed w-full h-[80px] flex justify-between items-center align-middle px-4 bg-[#0d0d0e] text-gray-300 z-20 ">
      <div>
        <p class="font-bold tracking-widest">Moosic</p>
      </div>

      <div onClick={handleClick} class="md:hidden z-40 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        class={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-30"
        }
      >
        <li class="py-6 text-4xl">
          <p>Ambient</p>
        </li>
        <li class="py-6 text-4xl">
          <p>Anime</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
