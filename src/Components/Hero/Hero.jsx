import React from 'react';
import pix1 from '../../assets/about.jpg';
import pix2 from '../../assets/lady3.jpg';
import pix3 from '../../assets/hero.jpg';
import pix4 from '../../assets/man3.jpg';
import pix5 from '../../assets/lady2.jpg';
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex justify-between items-center px-24 gap-5 h-[100vh]">
        {/* Hero Content */}
        <div className="max-w-[50%]">
          <h1 className="text-7xl font-bold">
            Transforming <span className="text-purple-600">Brands</span>, One Story at a Time
          </h1>
          <p className="text-gray-500 mt-5 text-lg">
            Unlock the power of strategic storytelling and dynamic communication. Let's build a brand narrative that resonates and lasts.
          </p>
          {/* Buttons */}
          <div className="mt-10">
            <a href="#" className="bg-purple-600 text-white px-8 py-4 rounded-full mr-4 hover:bg-gray-700 transition">
              Contact Us
            </a>
            <a href="#" className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-700 transition">
              View All Services
            </a>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex items-center gap-5 max-w-[50%]">
          <div className="flex flex-col gap-5">
            <img src={pix1} alt="Professional Teams" className="w-[150px] h-[340px] rounded-full object-cover" />
            <img src={pix2} alt="Professional Teams" className="w-[150px] h-[340px] rounded-full object-cover" />
          </div>
          <div>
            <img src={pix3} alt="Affordable Pricing" className="w-[150px] h-[340px] rounded-full object-cover" />
          </div>
          <div className="flex flex-col gap-5">
            <img src={pix4} alt="Affordable Pricing" className="w-[150px] h-[340px] rounded-full object-cover" />
            <img src={pix5} alt="Affordable Pricing" className="w-[150px] h-[340px] rounded-full object-cover" />
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-5">
          <img src={logo1} alt="Brand Logo" className="w-[170px]" />
          <img src={logo2} alt="Brand Logo" className="w-[170px]" />
          <img src={logo3} alt="Brand Logo" className="w-[170px]" />
          <img src={logo4} alt="Brand Logo" className="w-[170px]" />
          <img src={logo5} alt="Brand Logo" className="w-[170px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
