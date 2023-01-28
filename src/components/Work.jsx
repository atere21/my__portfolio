import React from "react";
import realestate from "../assets/realestate.jpg";
import workimg from "../assets/work.jpeg";

const Work = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a132f]">
      <div className="max-w[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
        style={{backgroundImage: `url(${workimg})` }}>
        {/* <div
          style={{backgroundImage: `url(${workimg})` }}
          className="grid sm:grid-col-2 md:grid-col-3 gap-4"
             > */}
          {/* card div */}
        <div className= "shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center items-center mx-auto content-div">
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
        style={{backgroundImage: `url(${realestate})` }}>
        {/* <div
          style={{backgroundImage: `url(${workimg})` }}
          className="grid sm:grid-col-2 md:grid-col-3 gap-4"
             > */}
          {/* card div */}
        <div className= "shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center items-center mx-auto content-div">
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
