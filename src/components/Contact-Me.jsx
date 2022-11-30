import React from "react";

function ContactMe() {
    return (
        <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contato</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
          ⚠️⚠️AINDA NÃO ESTA FUNCIONANDO⚠️⚠️
          </span>
        </h2>
        <div className="contact__form-container">
          <form action="#" className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" for="name">Nome</label>
              <input
                required
                placeholder="Preencha com seu Nome"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="email">Email</label>
              <input
                required
                placeholder="Preencha com seu Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" for="message">Mensagem</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Preencha com sua Mensagem"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" className="btn-mine btn--theme contact__btn">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
    )
}

export default ContactMe