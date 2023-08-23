import React from 'react';
import './AboutMe.css';
import { Fade } from 'react-reveal';

function AboutMe() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <Fade bottom duration={1500}>
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Sobre mim</span>
            <span className="heading-sec__sub">
              Um pequeno resumo para você me conhecer melhor
            </span>
          </h2>
        </Fade>
        <div className="about__content">
          <div className="about__content-main">
            <Fade left duration={1000}>
              <h3 className="about__content-title">Me conheça melhor!</h3>
            </Fade>
            <Fade left duration={2000}>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Meu nome é Rikelmy e tenho 19 anos, sou natural de Veredinha, apaixonado por tecnologia e sempre
                  em busca de novos desafios como desenvolvedor Back-end. Me formei através do curso da Trybe e
                  agora possuo habilidades em Javascript, Typescript, Nodejs, ExpressJs, Mysql, sequelize, mongodb,
                  moongose, programação orientada a objetos e docker. Acredito que esses conhecimentos técnicos
                  combinados com minha paixão por tecnologia me permitem criar soluções robustas
                  e escaláveis para os negócios. <br /> <br />
                  Além disso, sou uma pessoa colaborativa, resiliente, com boa gestão do tempo e organizada, o que
                  me permite trabalhar de forma eficiente com equipes diversas. Meu objetivo é continuar evoluindo
                  em minha carreira como desenvolvedor back-end, trabalhando em projetos desafiadores que me
                  permitam aprimorar minhas habilidades técnicas e soft skills, e contribuir para a evolução da
                  tecnologia de forma significativa!
                </p>
                <p className="about__content-details-para">
                  <strong> </strong>
                </p>
              </div>
            </Fade>
            <Fade left duration={2000}>
              <a href="./#contact" className="btn-mine btn--med btn--theme dynamicBgClr"
              >Contato </a>
            </Fade>
          </div>
          <div className="about__content-skills">
            <Fade right duration={1000}>
              <h3 className="about__content-title">Minhas Habilidades</h3>
            </Fade>
            <Fade right duration={2000}>
              <div className="skills">
                <div className="skills__skill">Javascript</div>
                <div className="skills__skill">Typescript</div>
                <div className="skills__skill">NodeJs</div>
                <div className="skills__skill">ExpressJs</div>
                <div className="skills__skill">MySQL</div>
                <div className="skills__skill">Sequelize</div>
                <div className="skills__skill">MongoDB</div>
                <div className="skills__skill">Mongoose</div>
                <div className="skills__skill">Git</div>
                <div className="skills__skill">POO</div>
                <div className="skills__skill">Docker</div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;