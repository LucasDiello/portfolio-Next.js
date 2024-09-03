import React from "react";
import "../styles/animation.css";
import "../styles/about.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-me" id="about">
      <div className="heading-text hidd show">
        <h2 className="heading-5-a">{t("title-about")}</h2>
        <div className="about-me-text">
          <p className="para-5-a leading-5">
            {t("text-about")} <br />
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={1000} href="#"
             className="bg-inherit hover:cursor-pointer  font-bold text-base text-[#93b0c6] ml-2 border-none">
          <button
          className="about-project z-50 glow-on-hover font-sans mt-10 uppercase font-[300] tracking-wider"
          onClick={scrollTo}
        >
              {t("title-contact")}
        </button>
            </Link>
            <br />{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
