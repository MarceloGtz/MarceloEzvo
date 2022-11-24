import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Marcelo Gutiérrez</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              Sobre Mi
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Portafolio
            </a>
          </li>

          <li>
            <a href='#contact' className='footer__link'>
              Contacto
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/marcelo-ezvo/'
            className='footer__social-link'
            target='_blank'
          >
            <i className='bx bxl-linkedin'></i>
          </a>

          <a
            href='https://github.com/MarceloGtz'
            className='footer__social-link'
            target='_blank'
          >
            <i className='bx bxl-github'></i>
          </a>

          {/* <a
            href='https://twitter.com/'
            className='footer__social-link'
            target='_blank'
          >
            <i className='bx bxl-twitter'></i>
          </a> */}
        </div>

        <span className='footer__copy'>
          &#169; Marcelo Gutiérrez. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
