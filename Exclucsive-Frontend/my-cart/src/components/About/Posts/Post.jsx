import React from "react";
import person1 from "./person1.png";
import person2 from "./person2.png";
import person3 from "./person3.png";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const Post = () => {
  return (
    <div className="flex mx-32 gap-10 justify-around">
      <div className="">
        <div className="bg-gray-200 pt-6 px-10 flex justify-center items-center w-[300px] h-[350px] rounded-sm">
          <img
            src={person1}
            alt="Tom Cruise"
            className="h-[100%] object-cover rounded-md"
          />
        </div>
        <h1 className="text-xl font-semibold mt-4">Tom Cruise</h1>
        <p className="text-gray-600">Managing Director</p>
        <div className="flex items-center gap-3 mt-3">
          <CiTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <RiLinkedinLine className="text-xl cursor-pointer" />
        </div>
      </div>

      <div className="">
        <div className="bg-gray-200 pt-6 px-10 flex justify-center items-center w-[350px] h-[350px] rounded-sm">
          <img
            src={person2}
            alt="Emma Watson"
            className=" h-[100%] object-cover rounded-md"
          />
        </div>
        <h1 className="text-xl font-semibold mt-4">Will Smith</h1>
        <p className="text-gray-600">Founder & CEO</p>
        <div className="flex items-center gap-3 mt-3">
          <CiTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <RiLinkedinLine className="text-xl cursor-pointer" />
        </div>
      </div>

      <div className="">
        <div className="bg-gray-200 pt-6 px-10 flex justify-center items-center w-[300px] h-[350px] rounded-sm">
          <img
            src={person3}
            alt="Will Smith"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h1 className="text-xl font-semibold mt-4">Emma Watson</h1>
        <p className="text-gray-600">Product Designer</p>
        <div className="flex items-center gap-3 mt-3">
          <CiTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <RiLinkedinLine className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Post;
