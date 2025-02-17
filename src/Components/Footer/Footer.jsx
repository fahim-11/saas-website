import React from 'react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 p-10">
      {/* Top Section */}
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-4xl font-bold">Ready To Get Started?</h2>
        <p className="text-lg text-gray-600">Join our community of Marketers</p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-150 h-14 px-4 rounded-full border-none bg-[#fff3ec] shadow-md"
          />
          <button className="ml-[-120px] px-6 py-3 bg-[#981be0] text-white rounded-full border-none">
            Join Now
          </button>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl font-bold">Trevo</h2>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="text-xl cursor-pointer" />
            <BsInstagram className="text-xl cursor-pointer" />
            <BsYoutube className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Right Side */}
        <ul className="flex gap-6 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Privacy Policy</li>
        </ul>
      </div>

      {/* Copyright */}
      <p className="text-center text-lg">© 2024 Trevo. All rights reserved.</p>
    </div>
  );
};

export default Footer;
