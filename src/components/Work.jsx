import React from "react";
import data from "../assets/data.png";
import food from "../assets/food.png";
import hotel from "../assets/hotel.png";
import ibeep from "../assets/ibeep.png";
import book from "../assets/book.png";
import movie from "../assets/movie.png";
import ecommerce from "../assets/ecommerce-pic.png";
import webmuse from "../assets/webmuse.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a132f] pt-[8rem] md:pt-[32rem] pb-18 px-2">
      <div className="max-w-[1000px] mx-auto py-8 px-2 flex flex-col justify-center w-full h-full m-4">
        <div className="pb-8">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 text-xl md:text-2xl">Check out some of my recent work</p>
        </div>
        {/* container for projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-auto">

          <div
            style={{ backgroundImage: `url(${ibeep})` }}
            className="shadow-lg w-full shadow-[#040c16] group cursor-pointer rounded-md flex justify-center text-center items-center object-contain mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                ibeep
              </span>
              <div className="pt-8 text-center">
                <a href="https://ibeep-project.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/ibeep-project">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card div */}
          <div
            style={{ backgroundImage: `url(${hotel})` }}
            className="shadow-lg cursor-pointer shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-1xl font-bold text-white tracking-wider">
                Royal-Waterfront-Hotel
              </span>
              <div className="pt-8 text-center">
                <a href="https://royal-water-app.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/royal-water-app">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{ backgroundImage: `url(${ecommerce})` }}
            className="shadow-lg shadow-[#040c16] m-4 group cursor-pointer container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 cursor-pointer">
              <span className="text-1xl font-bold text-white tracking-wider">
                E-commerce Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://portfolio-project-atere21.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/portfolio-project">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{ backgroundImage: `url(${webmuse})` }}
            className="shadow-lg shadow-[#040c16] m-4 group cursor-pointer container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Webmuse
              </span>
              <div className="pt-8 text-center">
                <a href="https://webmuse.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/webmuse">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            style={{ backgroundImage: `url(${food})` }}
            className="shadow-lg shadow-[#040c16] m-4 group cursor-pointer container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Food-App
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-food-app-pied.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/react-food-app">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            style={{ backgroundImage: `url(${data})` }}
            className="shadow-lg shadow-[#040c16] m-4 group cursor-pointer container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Data-Finance (React JS App)
              </span>
              <div className="pt-8 text-center">
                <a href="https://data-finance-app.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/data-finance-app">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div
            style={{ backgroundImage: `url(${movie})` }}
            className="shadow-lg shadow-[#040c16] m-4 group cursor-pointer container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                Movie-Box
              </span>
              <div className="pt-8 text-center">
                <a href="https://movie-web-app-taupe.vercel.app/">
                  <button className="text-center rounded-lg px-5 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/atere21/movie-web-app">
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
