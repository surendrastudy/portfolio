import React from "react";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import tailwind from "./assets/tailwind.png";
import react from "./assets/react.png";
import node from "./assets/node.png";
import github from "./assets/github.png";
import expressjs from "./assets/expressjs.png";
import mongodb from "./assets/mongodb.png";
import postman from "./assets/postman.png";

const Skills = () => {
  const skillsArray = [
    { url: html, name: "HTML", shadowColor: "shadow-[#E44D26]" },
    { url: css, name: "CSS", shadowColor: "shadow-[#264DE4]" },
    { url: javascript, name: "Javascript", shadowColor: "shadow-[#F7DF1E]" },
    { url: tailwind, name: "TAILWIND", shadowColor: "shadow-[#38B2AC]" },
    { url: expressjs, name: "express Js", shadowColor: "shadow-[#FFFF00]" },
    { url: mongodb, name: "mongodb", shadowColor: "shadow-[#47A248]" },
    { url: node, name: "Node Js", shadowColor: " shadow-[#68A063]" },
    { url: react, name: "React Js", shadowColor: "shadow-[#61DAFB]" },

    { url: postman, name: "Postman", shadowColor: "shadow-[#FF6C37]" },
    { url: github, name: "Github", shadowColor: "shadow-[#181717]" },
  ];
  return (
    <div
      name="skills"
      className="skillsSection  min-h-screen bg-gradient-to-b from-gray-800 to-black w-full p-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="textContainer">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-8">The technologies I am familiar with</p>
        </div>
        <div className="skillsContainer w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillsArray.map((skill, index) => (
            <div
              key={index}
              className={`skill shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.shadowColor}`}
            >
              <img
                className="w-20 mx-auto"
                src={skill.url}
                alt={skill.name}
              ></img>
              <p className="mt-4 capitalize">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
