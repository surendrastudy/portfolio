import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [showHam, setShowHam] = useState(false);
  const links = [
    { link: "Home" },
    { link: "About" },
    { link: "Portfolio" },
    { link: "Contact" },
  ];
  return (
    <div className="navBar flex bg-black p-2 h-14 w-full fixed justify-between items-center text-3xl font-semibold">
      <div>
        <span className="name font-signature  text-white cursor-pointer p-2 ">
          Krishna
        </span>
      </div>
      <div className="linksContainer text-white hidden md:flex gap-6 ">
        {links.map((l, index) => (
          <div
            key={index}
            className="text-xl cursor-pointer  hover:scale-105 duration-200"
          >
            {l.link}
          </div>
        ))}
      </div>
      <div
        className="hamburgerMenu text-white md:hidden cursor-pointer z-20"
        onClick={() => setShowHam(!showHam)}
      >
        {showHam ? <RxCross2 /> : <FaBarsStaggered />}
      </div>

      {showHam ? (
        <div className="linksContainerMobile flex flex-col justify-center items-center gap-6 absolute top-0 left-0 right-0   w-full h-screen bg-gradient-to-b from-black to-gray-600  text-gray-300 capitalize md:hidden">
          {links.map((l, index) => (
            <div
              key={index}
              className="text-xl cursor-pointer  hover:scale-105 duration-200"
            >
              {l.link}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
