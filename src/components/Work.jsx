import React from "react";
import realestate from "../assets/realestate.jpg";
import workimg from "../assets/work.jpeg";
import amazon from "../assets/amazon.png"
import lemon from "../assets/lemon.png"

const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen  text-gray-300 bg-[#0a132f] work__div px-2" >
      <div className="max-w-[1000px] mx-auto py-2 flex flex-col justify-center w-full h-full " >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className="  grid grid-cols-2 sm: grid-col-1 md:grid-col-3 gap-4 w-full h-screen" >
          {/* card div */}
          <div
            style={{ backgroundImage: `url(${amazon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font bold text-white tracking-wider">
                Amazon-Clone 
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${lemon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font bold text-white tracking-wider">
                LITTLE-LEMON (React JS App)
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          

          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${workimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div 
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex jusify-center text-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center" >
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
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
