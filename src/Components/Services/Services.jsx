import React from 'react';
import img1 from '../../assets/analytic.jpg';
import img2 from '../../assets/email.jpg';
import img3 from '../../assets/lead.jpg';

const ServiceList = () => {
  const services = [
    {
      image: img1,
      title: 'Advanced Analytics',
      text: 'Make data-driven decisions with real-time insights. Track campaign performance, monitor ROI, and optimize your strategy with our comprehensive analytics suite. Our platform provides actionable data, enabling you to make informed decisions and optimize your campaigns on the fly for better engagement and higher conversion rates.',
    },
    {
      image: img2,
      title: 'Email Campaign Automation',
      text: 'Send the right message at the right time with our powerful email automation tools. Personalize and schedule emails based on user behavior, ensuring maximum engagement. Our platform streamlines the process, allowing you to design, schedule, and automate campaigns without the need for extensive technical knowledge.',
    },
    {
      image: img3,
      title: 'Lead Scoring & Nurturing',
      text: 'Identify high-potential leads and nurture them through the sales funnel with automated workflows. Convert prospects into customers with minimal effort. High-scoring leads are prioritized and nurtured with targeted content, increasing the likelihood of conversion and maximizing your marketing ROI.',
    },
  ];

  return (
    <div className="py-10 px-5">
      <h2 className="text-center text-3xl font-bold mb-8">
        Transform Your Marketing Strategy <br /> With Our Services
      </h2>

      {/* Service Container */}
      <div className="flex flex-col items-center space-y-6">
        {services.map((service, index) => (
          <div
            className="flex flex-col md:flex-row bg-purple-700 rounded-lg shadow-lg overflow-hidden w-full max-w-6xl h-auto md:h-72"
            key={index}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg md:rounded-r-none"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-white text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-white text-lg">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
