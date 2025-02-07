/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            // Quando a rolagem for maior que 560px, adiciona a classe show-scroll
            if (window.scrollY >= 560) {
                scrollUp.classList.add("show-scroll");
            } else {
                scrollUp.classList.remove("show-scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpa o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adiciona a rolagem suave
        });
    };

    return (
        <a href="#" className="scrollup" onClick={scrollToTop}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>    
    );
}

export default ScrollUp;