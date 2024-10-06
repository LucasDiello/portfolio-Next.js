import React from 'react';
import { projectsFrontEnd } from '@/utils/utils';
import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';
import { DiGithub } from 'react-icons/di';
import { VscGithub } from 'react-icons/vsc';
import { LiaGithubSquare } from 'react-icons/lia';
import "./projects.css";
const Projects = () => {
  return (
    <section className="flex bg-[#222] ">
      <div className="w-1/2 p-16  md:w-2/3">
      <h1 className="text-4xl text-white font-bold mb-10 "><span className="text-blue-400  text-6xl">Projetos <br /></span> Desenvolvidos por <br /> Lucas Diello</h1>
        {
          projectsFrontEnd.slice(0,3).map((project) => {
            return (
              <article className="mb-10">
                        <Image
                            src={project.image}
                            alt="Elements"
                            className="mb-3 w-full rounded object-cover"
                            />
                        <div className="p-0">
                            <h3 className="text-[28px] mb-3 tracking-tighter ">
                                <a href={project.link} className="text-blue-400 hover:underline">
                                   {project.name}
                                </a>
                            </h3>
                            <ul className="mb-3 flex space-x-4 uppercase text-white font-light">
                            <li className='flex justify-center items-center gap-2'> 
                            <CiClock2 size={20} className='text-blue-400' />
                              {project.date}</li>
                                <li>
                                    <a href={project.github} className="hover:underline flex justify-center items-center gap-2">
                                    <LiaGithubSquare
                                    size={24} className='text-blue-400'/>
                                    Github!
                                    </a>
                                </li>
                            </ul>
                            <p className="text-gray-300 ">{project.description.slice(0,120)}...</p>
                            <a href={project.link} className="bg-blue-400 px-4 py-2 mt-3 inline-block text-white hover:underline">
                                Read More →
                            </a>
                        </div>
                    </article>
                )
              }
            )
          }
        <h1 className="text-4xl text-white font-bold "><span className="text-blue-400  text-6xl">Projetos</span> Desenvolvidos por <br /> Lucas Diello</h1>
        <article className="mb-5  ">
          <img
            src="https://demo.gethugothemes.com/galaxy/site/images/post/post-3.png"
            alt="Elements"
            className="mb-3 w-full rounded"
          />
          <div className="p-0">
            <h3 className="text-3xl mb-3 text-white">
              <a href="https://demo.gethugothemes.com/galaxy/site/post/elements/" className="text-blue-400 hover:underline">
                Elements
              </a>
            </h3>
            <ul className="mb-3 flex space-x-4 text-gray-400">
              <li>14 JANUARY, 2020</li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                 Visualizar!
                </a>
              </li>
            </ul>
            <p className="text-gray-300">Heading example. Here is an example of headings. You can use this heading by following markdownify rules.</p>
            <a href="https://demo.gethugothemes.com/galaxy/site/post/elements/" className="bg-blue-400 px-4 py-2 mt-3 inline-block text-white hover:underline">
              Read More →
            </a>
          </div>
        </article>

        <div className="mt-5">
          <ul className="flex space-x-2">
            <li className="text-gray-500">««</li>
            <li className="text-gray-500">«</li>
            <li className="bg-blue-500 text-white px-3 py-1 rounded">1</li>
            <li className="text-blue-400">2</li>
            <li className="text-blue-400">»</li>
            <li className="text-blue-400">»»</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
