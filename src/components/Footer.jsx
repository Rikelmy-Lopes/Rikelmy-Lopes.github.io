import React from "react";

import LinkedinIcon from '../assets/png/linkedin-ico.png'
import GithubIcon from '../assets/png/github-ico.png'
import InstaIcon from '../assets/png/insta-ico.png'

function Footer() {
    return (
        <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rikelmy-lopes-0a3b38238/">
                <img
                  class="main-footer__icon"
                  src={LinkedinIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Rikelmy-Lopes">
                <img
                  class="main-footer__icon"
                  src={GithubIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rikelmy_lopes18/">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src={InstaIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Rikelmy Lopes</h4>
            <p class="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer