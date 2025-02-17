import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-24 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <h2>Orange Media</h2>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About</li>
          <li className="hover:text-red-500 cursor-pointer">Service</li>
          <li className="hover:text-red-500 cursor-pointer">Projects</li>
        </ul>
      </div>

      {/* Contact Button */}
      <div>
        <a href="#">
          <button className="mt-5 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
