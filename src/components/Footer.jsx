import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div name="footer" className="bg-[#0a132f] text-white my-[6rem]">

      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex text-center text-gray-700 my-8">
        <p className="py-4">Designed by Tosin</p>
        <p className="py-4">&copy; 2023 Oluwatosin Atere</p>
        <div className="flex justify-center  w-full pt-4 text-2xl cursor-pointer">
          <a href="https://twitter.com/flourishgold212" className="mx-2 hover:text-yellow-600">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/in/oluwatosin-atere-829a58205/" className="mx-2 hover:text-yellow-600">
            <BsLinkedin />
          </a>
          <a href="https://github.com/atere21" className="mx-2 hover:text-yellow-600">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;