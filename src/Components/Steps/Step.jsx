import React from 'react';
import { FaGg, FaLayerGroup, FaStaylinked } from "react-icons/fa6";

const Steps = () => {
  return (
    <div>
     
      <section className="text-center py-8 px-5">
        <h2 className="text-4xl font-bold mb-3">Our Workflow Management</h2>
        <p className="text-lg text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, commodi mollitia <br />
          neque, sint assumenda unde porro ad quas excepturi nam molestias blanditiis.
        </p>

       
        <div className="flex flex-wrap justify-center items-center gap-6">
          
          {/* Step 1 */}
          <div className="max-w-sm bg-orange-100 p-6 rounded-lg transition-transform transform hover:-translate-y-2 shadow-md">
            <div className="bg-purple-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <FaGg className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Consultation</h3>
            <p className="text-gray-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit repellat commodi fugit odio quis sed soluta!
            </p>
          </div>

          {/* Step 2 */}
          <div className="max-w-sm bg-orange-100 p-6 rounded-lg transition-transform transform hover:-translate-y-2 shadow-md">
            <div className="bg-purple-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <FaLayerGroup className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Strategy Development</h3>
            <p className="text-gray-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit repellat commodi fugit odio quis sed soluta!
            </p>
          </div>

          {/* Step 3 */}
          <div className="max-w-sm bg-orange-100 p-6 rounded-lg transition-transform transform hover:-translate-y-2 shadow-md">
            <div className="bg-purple-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <FaStaylinked className="text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Ongoing Support</h3>
            <p className="text-gray-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit repellat commodi fugit odio quis sed soluta!
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Steps;
