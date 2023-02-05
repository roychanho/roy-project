import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="header">
      <div className="flex flex-row">
        <div className="mr-4 flex justify-center items-center">
          <a
            href="https://github.com/roychanho"
            target="_blank"
            className="pr-2 text-xl"
          >
            GitHub
          </a>
          <AiFillGithub size={18} />
        </div>
        <div className="mr-4 flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/long-ch-014b18214/"
            target="_blank"
            className="pr-2 text-xl"
          >
            Linkedin
          </a>
          <AiFillLinkedin size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
