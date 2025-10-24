import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0b1320] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            {/* Logo */}
            <div className="font-medium text-xl flex items-center gap-2 justify-center sm:justify-start">
              <img src={logo} alt="" className="w-8 h-8" />
              <h1>HERO.IO</h1>
            </div>

            {/* Social heading */}
            <div>
              <h6 className="text-white text-xl font-medium">Social Links</h6>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3 sm:gap-0">
            <div></div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <Twitter className="border-1 rounded-xl p-1 text-black bg-white" />
              </a>
              <a>
                <Youtube className="border-1 rounded-xl p-1 text-black bg-white" />
              </a>
              <a>
                <Facebook className="border-1 rounded-xl p-1 text-black bg-white" />
              </a>
            </div>
          </div>

          <hr className="text-gray-600 border-1 mt-6" />

          {/* Bottom text */}
          <div className="mt-6 text-center text-[#FAFAFA]">
            <p>Copyright &copy; 2025 • All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
