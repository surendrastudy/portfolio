import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className="socialContainer flex-col items-center fixed top-[30%] left-0 hidden lg:block">
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        GitHub
        <a href="https://github.com/krishnamahto021" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        LinkedIn
        <a href="https://linkedin.com/krishnamahto021" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        Mail
        <a href="https://github.com/krishnamahto021" target="_blank">
          <HiOutlineMail />
        </a>
      </div>
      <div className="cursor-pointer flex justify-between -ml-[100px] px-4 bg-gray-500 w-36 h-14 items-center text-white text-xl hover:rounded-md hover:-ml-[10px] duration-300">
        Resume
        <a
          href="https://github.com/krishnamahto021"
          target="_blank"
          download={true}
        >
          <BsFillPersonLinesFill />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
