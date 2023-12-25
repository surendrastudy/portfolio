import React from "react";
import heroImage from "./assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="homeContainer max-h-fit  w-full bg-gradient-to-b from-black to-gray-800 flex flex-col md:flex-row items-center justify-around p-4"
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
          <Link
            to="portfolio"
            smooth
            duration={700}
            className="group cursor-pointer flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-fit m-2 rounded-md text-xl"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300 text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="right flex ">
        <img
          src={heroImage}
          alt="Krishna"
          className="rounded-3xl aspect-square"
        />
      </div>
    </div>
  );
};

export default Home;
