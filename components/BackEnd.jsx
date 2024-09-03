import React from "react";
import "../styles/backend.css"
import { RenderIcon } from "./RenderIcon";
import { useTranslation } from "react-i18next";
import { projectsData } from "../lib/utils";

const BackEnd = () => {
  const { t, i18n : {language} } = useTranslation();
  return (
    <section className="bg-[#181818] relative" id="backend">
      <div className="projects "></div>
      <section className="flex justify-center ">
        <div className=" w-full font-sans">
          <section className="container-projects !bg-[#181818]">
            <div className="z-50">
              <p className="text-6xl mb-10 font-bold tracking-wide">Backend</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-[#93b0c6]"
                height="25px"
                width="25px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 4h12v2H6zm6 16.414 6.707-6.707-1.414-1.414L13 16.586V8h-2v8.586l-4.293-4.293-1.414 1.414z"></path>
              </svg>
            </div>
          </section>
          <div className="boxes backend-content text-[#d8d8d8]">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="box !p-[10px] lg:w-[30vw] mb-14 lg:items-start lg:justify-start  flex  flex-col  justify-center  items-center "
              >
                <p className="icon">{RenderIcon(project.title)}</p>
                <h2 className="">{project.title}</h2>
                <p className="piece-count text-xs">{project.tech}</p>
                <p className="description mr-2 mb-10 text-center lg:text-start text-xs">
                  {language === "en" ? project.descriptionEn : project.description}
                </p>
                <a
                  href={project.githubLink}
                  className="text-[#93b0c6] font-light text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};


export default BackEnd;
