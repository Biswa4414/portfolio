import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import "./movileMenu.css";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-menu">
      {open ? (
        <IoClose onClick={toggleMenu} />
      ) : (
        <IoMenu onClick={toggleMenu} />
      )}
      {open && (
        <div className="menu-items">
          <a href="/">Home</a>
          <a href="/menu">Skills</a>
          <a href="/about">Experience</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
