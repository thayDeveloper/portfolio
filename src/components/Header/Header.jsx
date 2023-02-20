import { useState } from "react";
import "./header.css";

function Header() {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Thayrone
        </a>
        <div className={showToggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a className="nav__link active-link" href="#home">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link " href="#about">
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link " href="#skills">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link " href="#portfolio">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link " href="#contact">
                <i className="uil uil-message nav__icon"></i> Contato
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setShowToggle(!showToggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setShowToggle(!showToggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
export default Header;
