import React from "react";
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? 'active' : ''} ><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><BsBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  );
};

export default Nav;
