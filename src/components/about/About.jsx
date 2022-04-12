import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoMdContact } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>80+</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            illum soluta error unde eius explicabo, possimus dicta voluptatibus
            ullam, cum odio sit voluptate in tempora. Cumque illo, hic, quos
            possimus placeat nostrum doloremque reiciendis quam minima sequi
            suscipit veniam eum nisi inventore perspiciatis nobis corporis harum
            mollitia laborum. Cumque, magni.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
