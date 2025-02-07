/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import './qualification.css';

const Qualification = () => {
return (
   <section className='qualification section'>
        <h2 className="section__title">Qualificações</h2>
        <span className="section__subtitle">Minha jornada pessoal</span>

        <div className="qualification__container">
            <div className="qualification__tabs">

            <div className="qualification button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon"></i> Educação
            </div>
            </div>

        <div className='qualification__sections'>
        <div className='qualification_content qualification_content-active'>
            <div className="qualification__data">
            <div>
                <h3 className='qualification__title'>Sistemas para Internet</h3>
                <span className='qualification__subtitle'> UNICAP</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calendar-alt'></i> ago 2024 - dez 2026
                </div>
            </div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

                </div>

            </div>


            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

                </div>
            <div>
                <h3 className='qualification__title'>Oracle Next Education</h3>
                <span className='qualification__subtitle'>Alura + Oracle</span>
                <div className='qualification__calender'>
                    <i className='uil uil-calendar-alt'></i> jul 2024 - jan 2025
                </div>
            </div>


            </div>

            <div className="qualification__data">
            <div>
                <h3 className='qualification__title'>Técnico em eletrônica</h3>
                <span className='qualification__subtitle'> IFPE </span>
                <div className='qualification__calender'>
                    <i className='uil uil-calendar-alt'></i> mar 2018 - agosto 2023
                </div>
            </div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>

                </div>

            </div>


        </div>


        </div>


        </div>


    </section>
    
  )
}
export default Qualification