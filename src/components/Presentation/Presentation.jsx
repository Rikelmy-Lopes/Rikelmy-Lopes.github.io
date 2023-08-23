import './Presentation.css';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';

import linkedinIcon from '../../assets/png/linkedin-ico.png';
import githubIcon from '../../assets/png/github-ico.png';
import instaIcon from '../../assets/png/insta-ico.png';

function Presentation() {
  const text = 'Transformando ideias em soluções robustas e escaláveis com o poder da tecnologia!';

  return (
    <section className="home-hero" id='home'>
      <div className="home-hero__content">
        <h1 className="heading-primary">Olá, Meu nome é Rikelmy</h1>
        <br />
        <h1 className="heading-primary">Back-end Developer</h1>
        <div className="home-hero__info">
          <Typewriter
            options={{
              delay: 80,
              cursor: null,
              wrapperClassName: 'text-primary-mine',

            }}
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter.typeString(text)
                  .start();
              }, 500);
            }}
          />
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn-mine btn--bg">Projetos</a>
        </div>
      </div>
      <Fade triggerOnce duration={1500}>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a href="https://www.linkedin.com/in/rikelmy-lopes/" target={'_blank'}
              className="home-hero__social-icon-link" rel="noreferrer">
              <img
                src={linkedinIcon}
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://github.com/Rikelmy-Lopes" target={'_blank'}
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
              href="https://www.instagram.com/rikelmy_lopes18/" target={'_blank'}
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
      </Fade>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default Presentation;