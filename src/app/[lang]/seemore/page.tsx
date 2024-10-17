'use client';
import React from 'react';
import { projectsBackEnd } from '@/utils';
import Link from 'next/link';
import { useDictionary } from '@/app/context/DictionaryContext';

const page = () => {
  const { translation, lang } = useDictionary();

  return (
    <section className="mx-auto w-full p-4 md:p-16 lg:w-[80%]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-oswald mb-10 mt-4 border-b-[3px] border-blue-400 pb-3 text-7xl tracking-wide text-white">
          Back-End
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsBackEnd.map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-start justify-between space-y-5 bg-[#1e1e1e] p-6 shadow-lg hover:shadow-2xl 
              "
            >
              <h1 className="mb-3 mt-4 font-mono text-3xl tracking-tighter text-white">
                <a href={project.github} target="_blank" className=" hover:text-blue-400">
                  {project.title}
                </a>
                <div className="flex flex-wrap items-center justify-start">
                  {project.techs.map((tech, index) => (
                    <span className="mr-2 p-0 text-end text-xs text-[#B0B0B0]">
                      {tech}
                      {index < project.techs.length - 1 && ','}
                    </span>
                  ))}
                </div>
              </h1>
              <p className="mb-4 text-sm font-light text-[#B0B0B0]">
                {lang === 'pt-BR' ? project.description : project.descriptionEn}
              </p>
              <Link
                target="_blank"
                href={project.github}
                className=" inline-block bg-blue-500 px-4 py-2 font-mono text-xs text-white hover:underline"
              >
                {translation.view_in_github}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
