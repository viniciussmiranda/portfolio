import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section"); // Supondo que suas seções tenham a tag <section>
            const scrollPos = window.scrollY + 80; // Adiciona um offset para a rolagem

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Verifica se a seção está visível na viewport
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    setActiveNav(`#${section.id}`); // Atualiza o estado com o ID da seção visível
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        // Limpa o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className={`nav__logo ${Toggle ? 'hidden' : ''}`}>
                    Vinicius
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-estate nav__icon"></i> Início
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-user nav__icon"></i> Sobre
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-file-alt nav__icon"></i> Habilidades
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link" }> 
                                <i className="uil uil-scenery nav__icon"></i> Projetos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link" }> 
                                <i className="uil uil-message nav__icon"></i> Contato
                            </a>
                        </li>
                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(false)}
                    ></i>
                </div>

                {!Toggle && (
                    <div className="nav__toggle" onClick={() => showMenu(true)}>
                        <i className="uil uil-apps"></i>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;