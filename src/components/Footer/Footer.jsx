import './Footer.css';
import { Fade } from 'react-awesome-reveal';

import LinkedinIcon from '../../assets/png/linkedin-ico.png';
import GithubIcon from '../../assets/png/github-ico.png';
import InstaIcon from '../../assets/png/insta-ico.png';

function Footer() {
  return (
    <Fade triggerOnce direction='left' duration={2000}>
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rikelmy-lopes-0a3b38238/">
                  <img
                    className="main-footer__icon"
                    src={LinkedinIcon}
                    alt="icon"
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Rikelmy-Lopes">
                  <img
                    className="main-footer__icon"
                    src={GithubIcon}
                    alt="icon"
                  />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rikelmy_lopes18/">
                  <img
                    className="main-footer__icon main-footer__icon--mr-none"
                    src={InstaIcon}
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h4 className="heading heading-sm text-lt">Rikelmy Lopes</h4>
              <p className="main-footer__short-desc">
                A tecnologia move o mundo - Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}

export default Footer;