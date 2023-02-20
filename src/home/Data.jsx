import React from "react";
import photo from "../../src/assets/perfil1.jfif";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Thayrone Souza
        <img src={photo} alt="" />
      </h1>
      <h3 className="home__subtitle">Front-End Developer</h3>
      <p className="home__description"></p>
    </div>
  );
};

export default Data;
