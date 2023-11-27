import React from "react";

const BackEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-End Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-award"></i>
            <div>
              <h3 className="skills__name">NodeJS</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-award"></i>
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-award"></i>
            <div>
              <h3 className="skills__name">API REST</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-award"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
