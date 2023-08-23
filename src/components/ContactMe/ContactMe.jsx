import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { emailjsInfo } from '../../config';
import './ContactMe.css';
import { Fade } from 'react-awesome-reveal';

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
    return regex.test(name) && regex.test(message) && message.length >= 10;
  };

  const statusFormError = () => {
    const message = document.getElementById('status-form');
    message.innerText = 'Email não enviado, tente novamente!';
    message.style.backgroundColor = 'red';
    message.style.visibility = 'visible';
    setTimeout(() => {
      message.style.visibility = 'hidden';
    }, 3000);
  };

  const statusFormSuccess = () => {
    const message = document.getElementById('status-form');
    message.innerText = 'Email enviado com Sucesso!!!';
    message.style.backgroundColor = 'green';
    message.style.visibility = 'visible';
    setTimeout(() => {
      message.style.visibility = 'hidden';
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let template_params = {
      to_name: 'Rikelmy Lopes',
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(emailjsInfo.serviceId, emailjsInfo.templateId, template_params)
      .then(() => {
        statusFormSuccess();
        setName(''); setEmail(''); setMessage('');
      })
      .catch((error) => {
        console.log(error);
        statusFormError();
      });
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <Fade triggerOnce direction='uṕ' duration={1500}>
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">Contato</span>
            <span className="heading-sec__sub heading-sec__sub--lt"></span>
          </h2>
        </Fade>
        <Fade triggerOnce direction='right' duration={2000}>
          <div className="contact__form-container">
            <form action="#" className="contact__form">
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">Nome</label>
                <input
                  required
                  placeholder="Seu nome aqui"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                  onChange={({ target }) => setName(target.value)}
                  value={name}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">Email</label>
                <input
                  required
                  placeholder="nome@exemplo.com"
                  type="email"
                  className="contact__form-input"
                  name="email"
                  id="email"
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">Mensagem</label>
                <textarea
                  required
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Escreva sua mensagem aqui"
                  name="message"
                  id="message"
                  onChange={({ target }) => setMessage(target.value)}
                  value={message}
                ></textarea>
              </div>
              <div className='contact-card-button'>
                <span id='status-form'></span>
                <button
                  disabled={!(isEmailValid() && isNameMessageValid())}
                  type="submit"
                  className="btn-mine btn--theme contact__btn"
                  onClick={sendEmail}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default ContactMe;