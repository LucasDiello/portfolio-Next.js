import React, { useState } from "react";
import "../styles/perfil.css";
import "../styles/animation.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./SwitcherLanguage";

const Perfil = () => {
  const { t } = useTranslation();

  return (
    <section className="container-perfil">
      <div className="image-perfil"></div>
      <div className="arrow-perfil"></div>
      <div className="arrow2-perfil"></div>
      <div className="content-perfil hidd show">
        <h3 className="text-sm text-center mr-4 ml-4 lg:text-xs">{t('presentation')}
           -{" "}
        </h3>
        <h1>LUCAS DIELLO</h1>
        <div className="container-dark">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="hexagon bg-[#2d2f36] lg:bg-[#131419] hover:cursor-pointer"
            href="#"
            aria-label="Para saber mais sobre mim clique aqui!"
            >
            <div className="side"></div >
            <div className="side"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
