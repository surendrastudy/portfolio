import React from "react";
import arrayDestruct from "./assets/portfolio/arrayDestruct.jpg";
import installNode from "./assets/portfolio/installNode.jpg";
import navbar from "./assets/portfolio/navbar.jpg";
import reactParallax from "./assets/portfolio/reactParallax.jpg";
import reactWeather from "./assets/portfolio/reactWeather.jpg";
import usestate from "./assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const portfolioItems = [
    { src: arrayDestruct },
    { src: installNode },
    { src: navbar },
    { src: reactWeather },
    { src: reactParallax },
    { src: usestate },
  ];
  return (
    <div
      name="portfolio"
      className="portfolioSection bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="portfolioContainer max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out Some my Work right here</p>
        </div>
        <div className="projectsContainer grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolioItems.map((p, index) => (
            <div
              className="project shadow-md shadow-gray-600 rounded-lg mb-8"
              key={index}
            >
              <img
                src={p.src}
                alt={`project-${index}`}
                className="rounded-lg w-full h-64 p-4 object-cover duration-200 scale-105"
              />
              <div className="buttonsContainer flex items-center justify-center">
                <button className="w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
