import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contactSection min-h-screen text-white bg-gradient-to-b from-gray-800 to-black w-full p-4"
    >
      <div className="max-w-screen-lg mx-auto p-4 h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Curious? Fill the Form to chat .</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/1ac0a7d8-75ba-44ca-a292-7ba43b7745ce"
            method="post"
            className="flex flex-col w-full gap-4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <textarea
              name="message"
              placeholder="Type your Message..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
