import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Thayrone</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contato
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/thayronesouza.n/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thayrone-souza/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/thaydeveloper"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169;Todos direitos reservados ThayDeveloper.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
