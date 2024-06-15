import React from "react";
import { IoMenu } from "react-icons/io5";
import "./navbar.css";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import MobileMenu from "./mobile-menu/MobileMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="component">
        <div className="left">
          <a href="/">
            DarkCoder{" "}
            <img
              className="logo"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwBuE5dXLRtJlcYrMiNXyagekXmzvkdW8AQ&s"
              }
              alt="logo"
            />
          </a>
        </div>
        <div className="middle">
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/menu">Skills</a>
            <a href="/about">Experience</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="right">
          <div className="right-box">
            <div className="connect">
              <a
                href="https://www.instagram.com/night_sky0912/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Biswa4414"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+918917348647?text=Hello%20Nightsky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/biswajit4414"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin className="linked-icon"/>
              </a>
            </div>
            <div className="mobile-menu">
              <IoMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
