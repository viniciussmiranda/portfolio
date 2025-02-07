/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <i class="ci ci-html ci-2x"></i>


            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>

          <div className="skills__data">
          <i class="ci ci-css ci-2x"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Avançado</span>
            </div>
          </div>

          <div className="skills__data">
          <i class="ci ci-js ci-2x"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
          <i class="ci ci-figma ci-2x"></i>

            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>


          <div className="skills__data">
          <i class="ci ci-react ci-2x"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Frontend;
