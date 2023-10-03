import React from "react";
import profpic from "./resources/1692076805438.jpg";
import Image from "./resources/Snapchat-1609106530.jpg";

const Profile = () => {
  return (
    <>
      <div className="bigcard">
        <div className="content">
          <div className="flipcard">
            <div className="flex flex-col items-center content1 ">
              <img
                className="h-40 rounded-full w-44 border-x-8 border-slate-800 "
                src={profpic}
                alt="Profile_pic"
              />
              <h1 className="mt-4 text-6xl ">B Ashish </h1>
              <h1>Web Developer</h1>
            </div>
            <div className=" content2">
              <img className="m-auto h-96" src={Image} alt="" />
            </div>
          </div>
        </div>
        <div className="click ">
          <div className="flex items-center h-10 justify-evenly">
            <a
              className="px-5 py-2 mr-3 bg-transparent border-t-2 border-l-2 border-white rounded hover:scale-110 hover:border-t-0 hover:border-l-0 hover:border-b-2 hover:border-r-2 hover:border-white"
              href="tel:+917898691929"
              target="blank"
            >
              Contact Me
            </a>
            <a
              className="px-5 py-2 ml-3 bg-transparent border-b-2 border-r-2 border-white rounded hover:scale-110 hover:bg-black hover:border-2 hover:border-white"
              href="https://docs.google.com/document/d/1uDkwzFA58jP_mYDvVj27NmVH5QQNqKsIPZTrlHEhDRk/edit?usp=drive_link"
              target="blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
