import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className="socialContainer flex-col items-center fixed top-[30%] left-0 hidden lg:block">
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        <a
          href="https://github.com/krishnamahto021"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://github.com/krishnamahto021"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        <a
          href="https://www.linkedin.com/in/krishnamahto021/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.linkedin.com/in/krishnamahto021/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        <a href="mailto:mahtok98212@gmail.com" target="_blank" rel="noreferrer">
          Mail
        </a>
        <a href="mailto:mahtok98212@gmail.com" target="_blank" rel="noreferrer">
          <HiOutlineMail />
        </a>
      </div>
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        <a
          href="/krishnaMahato.pdf"
          target="_blank"
          rel="noreferrer"
          download={true}
        >
          Resume
        </a>
        <a
          href="/krishnaMahato.pdf"
          target="_blank"
          rel="noreferrer"
          download={true}
        >
          <BsFillPersonLinesFill />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
