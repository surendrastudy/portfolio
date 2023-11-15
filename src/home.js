import React from "react";
import heroImage from "./assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="homeContainer h-screen min-h-screen w-full bg-gradient-to-b from-black to-gray-800 flex flex-col md:flex-row items-center justify-between p-4"
    >
      <div className="left w-full md:w-[60vw] mt-16 md:mt-0 md:flex md:flex-col items-center justify-center h-full">
        <div className="aboutMyself text-3xl font-bold text-gray-300 flex flex-col content-center md:ml-14">
          <ReactTypingEffect
            staticText="I am "
            text={[
              "MERN Stack Developer",
              "Project Builder",
              "Zero Experience Enthusiast",
            ]}
          />
          <p className="text-lg">
            As a budding MERN stack developer, I bring a fresh perspective and
            various diverse projects showcasing my commitment to crafting
            user-centric, efficient web solutions. A quick learner with zero
            formal experience, I'm passionate about staying at the forefront of
            technology, ready to tackle challenges and contribute to innovative
            projects.
          </p>
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
      <div className="right w-full md:w-[40vw] mb-8 md:mb-0">
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
