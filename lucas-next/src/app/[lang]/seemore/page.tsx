import React from 'react';
import { projectsBackEnd } from '@/utils';
import Link from 'next/link';

const page = () => {
  return (
    <section className="md:p-16 p-4 w-full lg:w-[80%] mx-auto">
      <div className="flex flex-col items-center justify-center">
      <h2 className="text-7xl mt-4 mb-10 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Back-End</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsBackEnd.map((project) => (
            <div
              key={project.title}
              className="flex flex-col items-start justify-between p-6 space-y-5 bg-[#1e1e1e] shadow-lg hover:shadow-2xl 
              "
            >
        <h1 className="mb-3 tracking-tighter mt-4 text-3xl  font-mono">
          <a
            href={project.github}
            target='_blank'
            className=" hover:text-blue-400"
          >
            {project.title}
          </a>
         <p className="text-sm font-semibold text-gray-400 mb-2">{project.tech}</p>
        </h1>             
              <p className="text-sm font-light text-[#B0B0B0] mb-4">{project.description}</p>
              <Link target='_blank' href={project.github} className=" inline-block bg-blue-500 px-4 py-2 font-mono text-xs text-white hover:underline">
                Ver no Github
          </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
