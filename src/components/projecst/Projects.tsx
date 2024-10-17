'use client';
import React, { useState } from 'react';
import Perfil from '../perfil/Perfil';
import { projectsFrontEnd } from '@/utils/index';
import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';
import { LiaGithubSquare } from 'react-icons/lia';
import Link from 'next/link';
import { useDictionary } from '@/app/context/DictionaryContext';
import './projects.css';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const { translation, lang } = useDictionary();
  const route = useRouter();
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const currentProjects = projectsFrontEnd.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <section className="flex flex-col-reverse flex-wrap md:flex-row">
      <div className="w-full p-4 pt-12 md:p-16 lg:w-2/3">
        <div className="flex items-center justify-center">
          <div className="nine">
            <h1 className="text-white">
              {translation.projects_title}
              <span className="text-black ">{translation.projects_subtitle}</span>
            </h1>
          </div>
        </div>
        {currentProjects.map((project) => {
          return (
            <article key={project.id} className="mb-10">
              <Image
                onClick={() => {
                  route.push(`/projects/${project.id}`);
                }}
                src={project.image}
                alt="Elements"
                className="mb-3 w-[800px] cursor-pointer rounded object-contain md:h-[380px] md:object-cover"
              />
              <div className="p-0">
                <h3 className="mb-3 text-[28px] tracking-tighter text-white">
                  <a
                    href={project.link}
                    target="_blank"
                    className="font-base font-oswald mt-4 text-3xl tracking-wide hover:text-blue-400"
                  >
                    {project.name}
                  </a>
                </h3>
                <ul className="mb-3 flex space-x-4 font-light uppercase text-white">
                  <li className="flex items-center justify-center gap-2">
                    <CiClock2 size={20} className="text-blue-500" />
                    {translation.project_date} {lang === 'pt-BR' ? project.date : project.dateEn}
                  </li>
                  <li>
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-center gap-2 hover:text-blue-400"
                    >
                      <LiaGithubSquare size={24} className="text-blue-500" />
                      Github
                    </a>
                  </li>
                </ul>
                <p className="text-sm font-light text-[#B0B0B0] ">
                  {lang === 'pt-BR' ? project.description.slice(0, 120) : project.descriptionEn.slice(0, 120)}...
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-3 inline-block bg-blue-500 px-4 py-2 font-mono text-sm text-white hover:underline"
                >
                  {translation.view_more}
                </Link>
              </div>
            </article>
          );
        })}

        <div className="mt-5">
          <ul className="flex space-x-2">
            <li
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(1);
                }
              }}
              className={`
                cursor-pointer ${currentPage === 1 ? 'text-gray-500' : 'text-blue-400'}
              `}
            >
              ««
            </li>
            <li
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              className={`
                cursor-pointer ${currentPage === 1 ? 'text-gray-500' : 'text-blue-400'}
              `}
            >
              «
            </li>
            <li className={`active`}>{currentPage}</li>
            <li
              onClick={() => {
                if (currentPage < Math.ceil(projectsFrontEnd.length / projectsPerPage)) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className={`
                cursor-pointer ${
                  currentPage < Math.ceil(projectsFrontEnd.length / projectsPerPage) ? 'text-blue-400' : 'text-gray-500'
                }
              `}
            >
              {currentPage + 1}
            </li>
            <li
              onClick={() => {
                if (currentPage < Math.ceil(projectsFrontEnd.length / projectsPerPage)) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className={`
                cursor-pointer ${
                  currentPage === Math.ceil(projectsFrontEnd.length / projectsPerPage)
                    ? 'text-gray-500'
                    : 'text-blue-400'
                }
              `}
            >
              »
            </li>
            <li
              onClick={() => {
                if (currentPage < Math.ceil(projectsFrontEnd.length / projectsPerPage)) {
                  setCurrentPage(Math.ceil(projectsFrontEnd.length / projectsPerPage));
                }
              }}
              className={`
                cursor-pointer ${
                  currentPage === Math.ceil(projectsFrontEnd.length / projectsPerPage)
                    ? 'text-gray-500'
                    : 'text-blue-400'
                }
              `}
            >
              »»
            </li>
          </ul>
        </div>
      </div>
      <Perfil />
    </section>
  );
};

export default Projects;
