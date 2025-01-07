import React from "react";
import simonsGameImage from "./assets/portfolio/simons.png";
import ticTacToeImage from "./assets/portfolio/tic-tac-toe.png";
import weather from "./assets/portfolio/Weather.png";
import roomReservation from "./assets/portfolio/Room_reservation.png";
import currencyConverterImage from "./assets/portfolio/Currency.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      src: roomReservation,
      name: "Room Reservation",
      about: "A fully functional room reservation system with booking, payment, and review features.",
      codeLink: "https://github.com/surendrastudy/Room-Reservation",
      demoLink: "https://room-reservation-f1hy.onrender.com/",
    },
    {
      src: weather, // replace 'weather' with the actual image source path
      name: "Weather",
      about: "Weather app providing current details based on location.",
      codeLink: "https://github.com/surendrastudy/weather",
      demoLink: "https://aesthetic-starburst-10bb64.netlify.app/",
    }
    ,
    {
      src: currencyConverterImage,  // Replace with actual image variable
      name: "Currency Converter",
      about: "A currency converter app for real-time exchange rate conversions.",
      codeLink: "https://github.com/surendrastudy/Currency_Converter",
      demoLink: "https://currencyconvertweb.netlify.app/",
    }
    ,
    {
      src: ticTacToeImage,  // Replace with actual image variable
      name: "Tic-Tac-Toe",
      about: "A classic Tic-Tac-Toe game built using JavaScript.",
      codeLink: "https://github.com/surendrastudy/Tic-tac-toe",
      demoLink: "https://xand2.netlify.app/",
    }
    ,
    {
      src: simonsGameImage,  // Replace with actual image variable
      name: "Simon's Game",
      about: "A memory-based game where players repeat an increasing sequence of sounds and lights.",
      codeLink: "https://github.com/surendrastudy/simons",
      demoLink: "https://simons2.netlify.app/",
    }
    
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
        <div className="projectsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-0">
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
              <div className="flex flex-col gap-2 max-h-28 ml-2 p-2">
                <p className="capitalize font-extrabold text-gray-400">
                  {p.name}
                </p>
                <p className="capitalize font-medium text-gray-200">
                  {p.about}
                </p>
              </div>
              <div className="buttonsContainer flex items-center ml-2 justify-center">
                <a
                  href={p.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={p.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105 rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
