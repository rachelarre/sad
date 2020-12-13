import React from "react";
import "./css/App.css";
import { FiGithub } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <header>
      <footer className="ft-main">
        <div className="ft-icon-bar">
          <a
            href="https://www.instagram.com/rachelarre/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram"
          >
            <FiInstagram />
          </a>
          <a
            href="https://github.com/rachelarre"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rachelarre/"
            target="_blank"
            rel="noreferrer"
            alt="Linkedin"
          >
            <FiLinkedin />
          </a>
        </div>
        <div className="ft-right">
          Designed by
          <a
            href="https://github.com/rachelarre"
            target="_blank"
            rel="noreferrer"
            alt="Portfolio"
          >
            Rachel Arredondo
          </a>
        </div>
      </footer>
    </header>
  );
}

export default Footer;
