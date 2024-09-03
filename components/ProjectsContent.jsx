import React from "react";
import Ecommerce from "../assets/e-commerce-fa3a01a1.jpeg";
import projectMusics from "../assets/project-musics-d7e31baf.jpeg";
import projectWallet from "../assets/projectWallet-4912858c.jpeg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectsContent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollTo = () => {
    navigate("/projects");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="project-content">
      <div className="links-project">
        <Link
          className="hidd show cursor-pointer"
          onClick={scrollTo}
          href="/projects"
          aria-label="
          Clique para saber mais sobre o projeto de E-commerce!
        "
        >
          <img src={Ecommerce} alt="" />
        </Link>
        <Link
          className="hidd show cursor-pointer"
          onClick={scrollTo}
          href="/projects"
          aria-label="
          Clique para saber mais sobre o projeto de Músicas!
        "
        >
          <img src={projectMusics} alt="" />
        </Link>
        <Link
          className="hidd show cursor-pointer"
          onClick={scrollTo}
          href="/projects"
          aria-label="
          Clique para saber mais sobre o projeto de Wallet!
        "
        >
          <img src={projectWallet} alt="" />
        </Link>
      </div>
      <div className="route-to-projects">
        <button
          className="about-project z-50 glow-on-hover font-sans uppercase font-[300] tracking-wider"
          onClick={scrollTo}
        >
          {t("more-info")}
        </button>
      </div>
    </section>
  );
};

export default ProjectsContent;
