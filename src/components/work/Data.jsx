// src/components/work/data.jsx

import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";
import work5 from "../../assets/work5.jpg";


const projetos = [
    {
      id: 1,
      title: "Cinema São Luiz",
      description: "Protótipo navegável que promove acessibilidade digital para o Cinema São Luiz. O projeto ficou entre as 10 melhores soluções no programa Kick Off 2024.2 da Residência Tecnológica do Porto Digital. ",
      technologies: ["Figma"],
      image: work1,
      link: "https://www.figma.com/proto/WzTHrvKhg6lt1s5KohifqA/squad45?node-id=36-116&node-type=canvas&t=FvDKb2aCw9VWLUbG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=36%3A116",
    },
    {
      id: 2,
      title: "Organo",
      description: "Meu primeiro projeto em React, criado para gerenciar organizações de forma visual e intuitiva.",
      technologies: ["React"],
      image: work2, 
      link: "https://organo-sigma-three.vercel.app/", 
    },
    {
      id: 3,
      title: "Freshfit",
      description: "Simulador de um e-commerce focado na compra de roupas.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: work3, 
      link: "https://viniciussmiranda.github.io/vitrine-rfec/", // 
    },

    {
        id: 4,
        title: "Codificador",
        description: "Aplicação que utiliza uma cifra de substituição simples para criptografar e descriptografar mensagens.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: work4, 
        link: "https://codificador-lovat.vercel.app/", 
      },

      {
        id: 5,
        title: "Esse portfólio",
        description: "Portfólio pessoal",
        technologies: ["React"],
        image: work5, 
        link: "https://codificador-lovat.vercel.app/", 
      },


  ];
  
  export default projetos;