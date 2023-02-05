import React, {useState} from "react";
import { FaBars, FaTimes,
     FaGithub,
     FaLinkedin,
     FaTwitter,
    } 
     from "react-icons/fa";

import Logo from "../assets/logo.jpg";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll'

const Navbar= () =>{
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000026] text-gray-200 ">
      <div>
        <img src={Logo} alt="logo image" style={{ width: "90px" }} />
      </div>
      {/* menu */}
      <div>
        <ul className="hidden md:flex">

          <li>
            <Link activeClass="active" to="home" smooth={true} duration={500} >
          Home
        </Link>
        </li>

          <li> <Link activeClass="active" to="about" smooth={true} duration={500} >
          About
        </Link></li>

          <li> <Link activeClass="active" to="skills" smooth={true} duration={500} >
          Skills
        </Link>
        </li>
        
        <li> <Link activeClass="active" to="work" smooth={true} duration={500} >
          Work
        </Link></li>

        <li> <Link activeClass="active" to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
    
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}

      </div>
      {/* mobile-menu */}
      <ul className={!nav ? 'hidden' : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" }>
        
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500} >
          Home
        </Link></li>
         
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500} >
          About
        </Link></li>

        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
         
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500} >
          Work
        </Link></li>
       
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
      {/* social-icons */}
      <div className=" lg:flex fixed flex-col top-[35%] left-0">
        <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300"
                     href="https://www.linkedin.com/in/oluwatosin-atere-829a58205/">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                    <a className="flex justify-between items-center w-full text-gray-300"
                     href="https://github.com/atere21">
                Github <FaGithub size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                    <a className="flex justify-between items-center w-full text-gray-300"
                     href="mailto:tosinateret@gmail.com">
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                    <a className="flex justify-between items-center w-full text-gray-300"
                     href="/">
                Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-blue-300"
                     href="https://twitter.com/flourishgold212">
                Twitter <FaTwitter size={30}/>
            </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
