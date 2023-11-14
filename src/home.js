import React from "react";
import heroImage from "./assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="homeContainer h-screen w-full bg-gradient-to-b from-black to-gray-800 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="left w-full md:w-[60vw]  flex flex-col items-center justify-center h-full ">
        <div className="aboutMyself text-3xl font-bold text-gray-300">
          <ReactTypingEffect
            staticText="I am "
            text={[
              "MERN Stack Developer",
              "Project Builder",
              "Zero Experience Enthusiast",
            ]}
          />
        </div>
        <div className="btnContainer ">
          <button className="group flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 p-3 m-2 rounded-md text-xl">
            Portfolio
            <span className="group-hover:rotate-90 duration-300 text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="right w-4/5 mb-40 md:w-[40vw] md:mb-0 ">
        <img
          src={heroImage}
          alt="Krishna"
          className="rounded-3xl w-full md:w-auto"
        />
      </div>
    </div>
  );
};

export default Home;
