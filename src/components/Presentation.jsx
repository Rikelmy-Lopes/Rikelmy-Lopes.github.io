import React from "react";

import linkedinIcon from '../assets/png/linkedin-ico.png'
import githubIcon from '../assets/png/github-ico.png'
import instaIcon from '../assets/png/insta-ico.png'

function Presentation() {
    return(
        <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Olá, Meu nome é Rikelmy</h1>
        <br />
        <h1 className="heading-primary">Back-end Developer</h1>
        <div className="home-hero__info">
          <p className="text-primary-mine">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn-mine btn--bg">Projetos</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/rikelmy-lopes-0a3b38238/" target={"_blank"} 
          className="home-hero__social-icon-link" rel="noreferrer">
            <img
              src={linkedinIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/Rikelmy-Lopes" target={"_blank"}
          className="home-hero__social-icon-link" rel="noreferrer">
            <img
              src={githubIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.instagram.com/rikelmy_lopes18/" target={"_blank"}
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer"
          >
            <img
              src={instaIcon}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
    )
}

export default Presentation