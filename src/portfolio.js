import React from "react";
import albumCreator from "./assets/portfolio/albumCreator.png";
import calculator from "./assets/portfolio/Calculator.png";
import chatApp from "./assets/portfolio/chatApp.png";
import codingNinjasPage from "./assets/portfolio/CodingNinjasCoursePage.png";
import ecommerce from "./assets/portfolio/Ecommerce.png";
import expenseTracker from "./assets/portfolio/expenseTracker.png";
import habitTracker from "./assets/portfolio/habitTracker.png";
import ogStore from "./assets/portfolio/ogStore.png";
import ipod from "./assets/portfolio/ipod.png";
import photoFolio from "./assets/portfolio/photoFolio.png";
import fbClone from "./assets/portfolio/fbClone.png";

const Portfolio = () => {
  const portfolioItems = [
    {
      src: chatApp,
      name: "chatApp",
      about: "This is chat App made upon socket.io with MERN stack",
      codeLink: "https://github.com/krishnamahto021/chatApp",
      demoLink: "https://chatapp-inyr.onrender.com/",
    },
    {
      src: calculator,
      name: "Calculator",
      about: "This is Calculator made upon the react js",
      codeLink: "https://github.com/krishnamahto021/calculator",
      demoLink: "https://krishnamahto021.github.io/calculator/",
    },
    {
      src: albumCreator,
      name: "Album Creator",
      about:
        "This is Album webapp that helps to create your albums to store your memories",
      codeLink: "https://github.com/krishnamahto021/albumCreator",
      demoLink: "https://github.com/krishnamahto021/albumCreator",
    },
    {
      src: codingNinjasPage,
      name: "Course Page Clone",
      about: "This is coding Ninjas course page Clone made using react js ",
      codeLink: "https://github.com/krishnamahto021/codingNinjasCourses",
      demoLink: "https://github.com/krishnamahto021/codingNinjasCourses",
    },
    {
      src: ecommerce,
      name: "BusyBuy",
      about:
        "This is ecommerce  made on the react js with firebase as database",
      codeLink: "https://github.com/krishnamahto021/busyBuy",
      demoLink: "https://github.com/krishnamahto021/busyBuy",
    },
    {
      src: expenseTracker,
      name: "Expense Tracker",
      about: "This is expense tracker made to track all your expenses",
      codeLink: "https://github.com/krishnamahto021/expenseTracker",
      demoLink: "https://github.com/krishnamahto021/expenseTracker",
    },
    {
      src: habitTracker,
      name: "Habit Tracker",
      about: "This is webApp made for the users who want to track their habits",
      codeLink: "https://github.com/krishnamahto021/habit_tracker",
      demoLink: "https://github.com/krishnamahto021/habit_tracker",
    },
    {
      src: ogStore,
      name: "ogStore",
      about:
        "This is admin dashboard of the ogstore from where the admin can add the product ",
      codeLink: "https://github.com/krishnamahto021/ecommerce-frontend",
      demoLink: "https://github.com/krishnamahto021/ecommerce-frontend",
    },
    {
      src: ipod,
      name: "iPod",
      about: "This is iPod clone made on the reactJs",
      codeLink: "https://github.com/krishnamahto021/iPod",
      demoLink: "https://github.com/krishnamahto021/iPod",
    },
    {
      src: photoFolio,
      name: "photoFolio",
      about: "This is webApp to provide you a digital photos collection",
      codeLink: "https://github.com/krishnamahto021/photoFolio",
      demoLink: "https://github.com/krishnamahto021/photoFolio",
    },
    {
      src: fbClone,
      name: "Facebook authentication Clone",
      about:
        "This is clone for facebook sign up sign in page authorizing the user through session cookie and gooogle oAuth2",
      codeLink: "https://github.com/krishnamahto021/fb_login_clone",
      demoLink: "https://github.com/krishnamahto021/fb_login_clone",
    },
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
                  className="w-1/2 px-2 py-1 m-4 duration-200 hover:scale-105"
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
