import React from "react";
import Slider from "./Slider.tsx";
import { SwiperSlide } from "swiper/react";
import projetos from "./Data.jsx"; // Importa os projetos
import "./work.css"; // Importa o CSS para estilização

const settings = {
  spaceBetween: 20, // Espaçamento padrão
  slidesPerView: 1,
  centeredSlides: true, // Garante que os slides fiquem centralizados
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: true,
  pagination: {
    clickable: true,
  },
};

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">
        Projetos concluídos e tecnologias utilizadas
      </span>

      <Slider settings={settings}>
        {projetos.map((projeto) => (
          <SwiperSlide key={projeto.id}>
            <div className="card">
              <img
                src={projeto.image}
                alt={projeto.title}
                className="card__image"
              />
              <h3 className="card__title">{projeto.title}</h3>
              <p className="card__description">{projeto.description}</p>
              <div className="card__tags">
                {projeto.technologies.map((tech, index) => (
                  <span key={index} className="card__tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="card__link">
                Ver mais →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default Work;