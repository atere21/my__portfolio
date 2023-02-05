import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [home, setHome] = useState(false);
  const handleClick = () => setHome(!home);
  return (
    <div name='home' className="w-full h-screen bg-[#0a132f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Oluwatosin Atere</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a software engineer that specializes in building web-applications.
          I have Worked with clients in almost every sector and industry
          creating powerful applications that emphasize customer acquisition and an enhanced online digital experience.

        </p>
        <div>

          <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>
          <button
           className="text-yellow-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-800 hover:border-pink-600">
            View Work 
            <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
