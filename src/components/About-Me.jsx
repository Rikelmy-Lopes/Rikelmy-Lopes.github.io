import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Sobre mim</span>
          <span className="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Me conheça melhor!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Olá, Eu sou o
                <strong> Rikelmy</strong>
                <strong>, Back-end Developer </strong>, atualmente Moro em Veredinha-MG.
              </p>
              <p className="about__content-details-para">
                <strong> </strong>
              </p>
            </div>
            <a href="./#contact" className="btn-mine btn--med btn--theme dynamicBgClr"
            >Contato</a
            >
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">Minhas Habilidades</h3>
            <div className="skills">
              <div className="skills__skill">Javascript</div>
              <div className="skills__skill">Typescript</div>
              <div className="skills__skill">NodeJs</div>
              <div className="skills__skill">MySql</div>
              <div className="skills__skill">ExpressJs</div>
              <div className="skills__skill">MongoDB</div>
              <div className="skills__skill">POO</div>
              <div className="skills__skill">Sequelize</div>
              <div className="skills__skill">Docker</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;