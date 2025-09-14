import React from "react";
import "./App.css";

const experiences = [
  {
    role: "Développeur web PHP",
    company: "Stratis World Wide, Sfax",
    period: "Depuis mars 2023",
    details: [
      "Développement des applications web en PHP (Symfony)",
      "Développement des sites web avec CMS (WordPress et Prestashop)",
      "Création et personnalisation de blocs Gutenberg avec PHP et React",
      "Conception de composants React réutilisables pour WordPress"
    ]
  },
  {
    role: "Intégrateur web",
    company: "Databiz, Tunis",
    period: "Janvier 2022 à mars 2023",
    details: [
      "Développement Front-end en HTML, SCSS et JS",
      "Intégration des maquettes XD et Figma",
      "Refonte responsive des sites web"
    ]
  },
  // Tu peux ajouter les autres expériences ici
];

const skills = [
  "PHP (Symfony, Laravel, POO)",
  "React JS, HTML5, CSS3, SCSS, JavaScript ES6, jQuery",
  "WordPress, PrestaShop, Shopify, ACF, Gutenberg",
  "MySQL, SQL, Git/GitHub/GitLab",
  "Python"
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ibtissem BOUKOUBA</h1>
        <h2>Développeuse Web PHP Symfony | React JS | CMS WordPress</h2>
      </header>

      <section className="about">
        <h3>À propos</h3>
        <p>
          Développeuse web passionnée et proactive, avec plus de 3 ans d’expérience en
          développement et intégration de sites en HTML/CSS/JS, ainsi qu’en CMS
          tels que WordPress et PrestaShop. J’accompagne des projets web de bout en bout.
        </p>
      </section>

      <section className="experience">
        <h3>Expériences professionnelles</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="job">
            <h4>{exp.role}</h4>
            <p className="company">{exp.company} | {exp.period}</p>
            <ul>
              {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="skills">
        <h3>Compétences techniques</h3>
        <ul>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </section>

      <section className="contact">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:ibtissemboukouba@example.com">ibtissemboukouba@example.com</a></p>
        <p>GitHub: <a href="https://github.com/ibtissemboukouba">ibtissemboukouba</a></p>
      </section>
    </div>
  );
}

export default App;
