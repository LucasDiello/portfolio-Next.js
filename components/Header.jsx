import React, { useState, useEffect } from "react";
import { imagesProject } from "../lib/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";
import transition from "../transition";
import LanguageSwitcher from "./SwitcherLanguage";
import { useTranslation } from "react-i18next";
import ButtonProject from "./ButtonProject";
import { DiGithubAlt } from 'react-icons/di'
import { TbWorldCancel } from 'react-icons/tb'
import "../styles/animation.css"
const Header = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [itemActive, setItemActive] = useState(0);
  const countItem = imagesProject.length;
  const navigate = useNavigate();

  const showSlider = (index) => {
    setItemActive(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
  };

  return (
    <section className="">
      <div className="slider">
        <div className="list">
          {imagesProject.map((image, index) => (
            <div
              className={`item ${index === itemActive && "active"}`}
              key={index}
            >
              <img src={image.image} alt={image.name} />
              <div className="content p-4 font-sans lg:!left-[10%]  top-[12%] hidd show">
                <p className="lg:ml-[5px] text-sm">design</p>
                <h2 className="!text-[30px] md:!text-[60px] lg:!text-6xl lg:!ml-[2px] ">
                  {image.name}
                </h2>
                <p className="text-gray-200 lg:text-sm lg:ml-2 text-sm lg:w-[600px]">
                  {language === "en" ? image.descriptionEn : image.description}
                </p>
                <div className="flex space-x-4 lg:ml-[7px]">
                  <a
                    href={image.project}
                    target="_blank"
                    className="cursor-pointer text-white tracking-[2px] link-customizado  font-bold hover:text-red-800"
                  >
                   <ButtonProject acess={t("view-project")} text={"Acessar site"} icon={<TbWorldCancel color="black"/>} />
                  </a>
                  <a href={image.github} target="_blank" className="cursor-pointer text-white tracking-[2px] link-customizado  font-bold hover:text-red-800">
                  <ButtonProject acess={t("view-code")} text="Visualizar código" icon={<DiGithubAlt color="black"/>}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button
            className="hover:cursor-pointer"
            onClick={() =>
              setItemActive((prevItemActive) =>
                prevItemActive === 0 ? countItem - 1 : prevItemActive - 1
              )
            }
          >
            {"<"}
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() =>
              setItemActive((prevItemActive) =>
                prevItemActive === countItem - 1 ? 0 : prevItemActive + 1
              )
            }
          >
            {">"}
          </button>
        </div>
        <div className="flex overflow-y-hidden justify-center items-center">
          <div className="thumbnail hover:cursor-pointer lg:right-[10%] !overflow-hidden lg:w-[50%] w-[100%] hidden md:block">
            <Slider {...settings}>
              {imagesProject.map((image, index) => (
                <div
                  className={`item ${index === itemActive && "active"}`}
                  key={index}
                >
                  <img
                    src={image.imageMobile}
                    alt={image.name}
                    onClick={() => showSlider(index)}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="thumbnail hover:cursor-pointer w-[100%] lg:bottom-[50] bottom-[100] flex gap-4 !p-4 md:hidden ">
            {imagesProject.map((image, index) => (
              <div
                className={`item !h-[170px] !w-[130px] ${
                  index === itemActive && "active"
                }`}
                key={index}
              >
                <img
                  src={image.imageMobile}
                  alt={image.name}
                  onClick={() => showSlider(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(Header);
