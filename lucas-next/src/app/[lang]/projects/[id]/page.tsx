"use client";
import { projectById } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { LiaGithubSquare } from 'react-icons/lia';

const Page = () => {
  const { id } = useParams();
  const project = projectById(id as string);

  return (
    <div className='w-full md:p-16 p-4 pt-14'>
      <div>
        <Image src={project.image} alt="Elements" className="mb-3 h-[400px] w-[800px] rounded object-cover" />
      </div>
      <div className="p-0 md:w-[70%]">
        <h1 className="mb-3 tracking-tighter font-oswald mt-4 text-4xl  ">
          <a
            href={project.link}
            target='_blank'
            className=" hover:text-blue-400"
          >
            {project.name}
          </a>
        </h1>
        <ul className="mb-3 flex space-x-4 font-light uppercase text-white">
          <li className="flex items-center justify-center gap-2">
            <CiClock2 size={20} className="text-blue-500" />
            {project.date}
          </li>
          <li>
            <a href={project.github} target='_blank' className="flex items-center justify-center gap-2 hover:text-blue-400">
              <LiaGithubSquare size={24} className="text-blue-500" />
              Github!
            </a>
          </li>
        </ul>
        <p className="text-sm font-light text-[#B0B0B0] ">{project.description}</p>

        <div className='mt-10'>
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Tecnologias Utilizadas</h2>
          <ul className="text-[#B0B0B0] text-sm font-light mt-4">
            {project.technologies.map((tech) => (
              <li key={tech.id}>
                <h2 className='text-white pt-1 pb-1'>{tech.name}</h2> - {tech.description}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">O que eu aprendi</h2>
          <p className="text-[#B0B0B0] text-sm font-light mt-4">{project.whatILearned}</p>
        </div>

        <div>
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">O que eu faria diferente</h2>
          <p className="text-[#B0B0B0] text-sm font-light mt-4">{project.whatIdDoDifferently}</p>
        </div>
          {
            project.whatsNext &&
            <div>
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">O que vem por aí</h2>
          <p className="text-[#B0B0B0] text-sm font-light mt-4">{project.whatsNext}</p>
        </div>
        }
          {
          project.images && 
        <div>
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Algumas imagens do projeto</h2>
            
            <div className="flex flex-wrap gap-4 mt-4">
            {project.images?.map((image, index) => (
              <div key={index}>
                <Image src={image} alt="Elements" className="rounded object-cover" width={300} height={200} />
              </div>
            ))} 
          </div>
          <div>
            <p className="text-[#B0B0B0] text-sm font-light mt-4">Caso queira acessar a aplicação, acesse o <a href={ project.link } className="text-blue-400">link</a> do projeto.</p>
          </div>
        </div>
          }
        <div>
        <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Caso alguma Duvida!</h2>
        <p className="text-[#B0B0B0] text-sm font-light mt-4">Caso tenha alguma dúvida ou queira saber mais sobre o projeto, entre em contato comigo pelo meu e-mail: <a href="mailto:
        lucasoliveiradiello@gmail.com" className="text-blue-400">lucasoliveiradiello@gmail.com</a></p>
        </div>
        <div>
          <Link href="/" className="mt-5 inline-block bg-blue-500 px-4 py-2 font-mono text-sm text-white hover:underline">
            Voltar
          </Link>
          <Link target='_blank' href={project.link} className="mt-5 ml-5 inline-block bg-blue-500 px-4 py-2 font-mono text-sm text-white hover:underline">
            Acessar site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
