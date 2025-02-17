import React from 'react';
// import Marquee from 'react-marquee-slider';
import './Testimonial.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste facilis? Doloribus consectetur aperiam reprehenderit quam quia atque laudantium! Corporis eveniet eaque quia in odit. Laboriosam a deserunt molestiae recusandae? ",
    name: "Emily Johnson",
    title: "CTO German"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste facilis? Doloribus consectetur aperiam reprehenderit quam quia atque laudantium! Corporis eveniet eaque quia in odit. Laboriosam a deserunt molestiae recusandae?",
    name: "Jane Doe",
    title: "Entrepreneur"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste facilis? Doloribus consectetur aperiam reprehenderit quam quia atque laudantium! Corporis eveniet eaque quia in odit. Laboriosam a deserunt molestiae recusandae?",
    name: "Lucas Andrew",
    title: "Investor"
  },
//   {
//     text: "We're now able to target our campaigns with precision and see real results since using your product.",
//     name: "Indu Ethan",
//     title: "Freelancer"
//   },
];

const Testimonial = () => {
  return (
    <div className="py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Our Success Stories</h2>
      <p className="text-gray-600 text-lg mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste facilis? <br />
        Doloribus consectetur aperiam reprehenderit quam quia atque laudantium!
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#fff3ec] rounded-lg p-6 max-w-xl text-left shadow-lg"
          >
            <p className="text-lg mb-4">
              <RiDoubleQuotesL className="text-2xl inline-block text-purple-700" /> 
              {testimonial.text} 
              <RiDoubleQuotesR className="text-2xl inline-block text-purple-700" />
            </p>
            <p className="text-2xl font-bold text-purple-700">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
