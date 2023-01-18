import emailjs from '@emailjs/browser';
import React from 'react';
import { useState } from 'react';
import { emailjsInfo } from '../config';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  emailjs.init(emailjsInfo.publicKey);

  const isEmailValid = () => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };
  const isNameMessageValid = () => {
    const regex = /[a-zA-Z]/;
    return regex.test(name) && regex.test(message);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let template_params = {
      to_name: 'Rikelmy Lopes',
      from_name: name,
      from_email: email,
      message: message,
    };
    if (!isNameMessageValid()) {
      alert('Nome ou Mensagem Inválido');
      return;
    }

    if(!isEmailValid()) {
      alert('Email Inválido');
      return;
    }

    emailjs.send(emailjsInfo.serviceId, emailjsInfo.templateId, template_params)
      .then(() => {
        alert('Email enviado com Sucesso!!!');
        setName(''); setEmail(''); setMessage('');
      }, (error) => {
        alert('Ocorreu um Erro ao enviar o Email!', error);
      });
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contato</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
          </span>
        </h2>
        <div className="contact__form-container">
          <form action="#" className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Nome</label>
              <input
                required
                placeholder="Preencha com seu Nome"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                onChange={({target}) => setName(target.value)}
                value={ name }
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Preencha com seu Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                onChange={({target}) => setEmail(target.value)}
                value={ email }
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Mensagem</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Preencha com sua Mensagem"
                name="message"
                id="message"
                onChange={({target}) => setMessage(target.value)}
                value={ message }
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-mine btn--theme contact__btn"
              onClick={ sendEmail }
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;