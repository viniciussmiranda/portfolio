/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
          <i class="ci ci-python ci-2x"></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>

          <div className="skills__data">
          <i class="ci ci-cplusplus ci-2x"></i>

            <div>
              <h3 className="skills__name">C++</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
          <i class="ci ci-php ci-2x"></i>

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
          <svg width="2rem" height="2rem" viewBox="0 0 1024 1024" className="skills__icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M938.666667 384v-85.333333H725.333333V85.333333h-85.333333v213.333334h-85.333333V85.333333h-85.333334v213.333334h-85.333333V85.333333h-85.333333v213.333334H85.333333v85.333333h213.333334v85.333333H85.333333v85.333334h213.333334v85.333333H85.333333v85.333333h213.333334v213.333334h85.333333V725.333333h85.333333v213.333334h85.333334V725.333333h85.333333v213.333334h85.333333V725.333333h213.333334v-85.333333H725.333333v-85.333333h213.333334v-85.333334H725.333333v-85.333333h213.333334z" fill="#FF9800" /><path d="M170.666667 256v512c0 46.933333 38.4 85.333333 85.333333 85.333333h512c46.933333 0 85.333333-38.4 85.333333-85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H256c-46.933333 0-85.333333 38.4-85.333333 85.333333z" fill="#4CAF50" /><path d="M661.333333 661.333333H362.666667c-23.466667 0-42.666667-19.2-42.666667-42.666666V405.333333c0-23.466667 19.2-42.666667 42.666667-42.666666h298.666666c23.466667 0 42.666667 19.2 42.666667 42.666666v213.333334c0 23.466667-19.2 42.666667-42.666667 42.666666z" fill="#37474F" /></svg>

            <div>
              <h3 className="skills__name">Assembly</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>

          <div className="skills__data">
          <i class="ci ci-git ci-2x"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediário</span>
            </div>
          </div>
          
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Backend;
