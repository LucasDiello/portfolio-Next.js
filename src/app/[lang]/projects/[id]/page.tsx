'use client';
import { useDictionary } from '@/app/context/DictionaryContext';
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
  const { translation, lang } = useDictionary();
  return (
    <div className="w-full p-4 pt-14 md:p-16">
      <div>
        <Image
          src={project.image}
          alt="Elements"
          className="mb-3 w-[800px] rounded object-contain md:h-[400px] md:object-cover"
        />
      </div>
      <div className="p-0 md:w-[70%]">
        <h1 className="font-oswald mb-3 mt-4 text-4xl tracking-tighter text-white">
          <a href={project.link} target="_blank" className=" hover:text-blue-400">
            {project.name}
          </a>
        </h1>
        <ul className="mb-3 flex space-x-4 font-light uppercase text-white">
          <li className="flex items-center justify-center gap-2">
            <CiClock2 size={20} className="text-blue-500" />
            {lang === 'pt-BR' ? project.date : project.dateEn}
          </li>
          <li>
            <a
              href={project.github}
              target="_blank"
              className="flex items-center justify-center gap-2 hover:text-blue-400"
            >
              <LiaGithubSquare size={24} className="text-blue-500" />
              Github!
            </a>
          </li>
        </ul>
        <p className="text-sm font-light text-[#B0B0B0] ">
          {lang === 'pt-BR' ? project.description : project.descriptionEn}
        </p>
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
          {translation.project_id_1}
        </h2>
        <div>
          <ul className="mt-4 grid grid-cols-2 text-sm font-light text-[#B0B0B0]">
            {project.technologies.map((tech) => (
              <li key={tech.id}>
                <h2 className="pb-1 pt-1 text-white">{tech.name}</h2> -{' '}
                {lang === 'pt-BR' ? tech.description : tech.descriptionEn}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
            {translation.project_id_2}
          </h2>
          <p className="mt-4 text-sm font-light text-[#B0B0B0]">
            {lang === 'pt-BR' ? project.whatILearned : project.whatILearnedEn}
          </p>
        </div>

        <div>
          <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
            {translation.project_id_3}
          </h2>
          <p className="mt-4 text-sm font-light text-[#B0B0B0]">
            {lang === 'pt-BR' ? project.whatIdDoDifferently : project.whatIdDoDifferentlyEn}
          </p>
        </div>
        {project.whatsNext && (
          <div>
            <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
              {translation.project_id_4}
            </h2>
            <p className="mt-4 text-sm font-light text-[#B0B0B0]">
              {lang === 'pt-BR' ? project.whatsNext : project.whatsNextEn}
            </p>
          </div>
        )}
        {project.images && (
          <div>
            <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
              {translation.project_id_5}
            </h2>

            <div className="mt-4 flex flex-wrap gap-4">
              {project.images?.map((image, index) => (
                <div key={index}>
                  <Image src={image} alt="Elements" className="rounded object-cover" width={300} height={200} />
                </div>
              ))}
            </div>
            <div>
              <p className="mt-4 text-sm font-light text-[#B0B0B0]">
                {translation.project_text2}{' '}
                <a href={project.link} className="text-blue-400">
                  link
                </a>
              </p>
            </div>
          </div>
        )}
        <div>
          <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
            {translation.project_id_6}
          </h2>
          <p className="mt-4 text-sm font-light text-[#B0B0B0]">
            {translation.project_text}{' '}
            <a
              href="mailto:
        lucasoliveiradiello@gmail.com"
              className="text-blue-400"
            >
              lucasoliveiradiello@gmail.com
            </a>
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="mt-5 inline-block bg-blue-500 px-4 py-2 font-mono text-sm text-white hover:underline"
          >
            {translation.back}
          </Link>
          <Link
            target="_blank"
            href={project.link}
            className="ml-5 mt-5 inline-block bg-blue-500 px-4 py-2 font-mono text-sm text-white hover:underline"
          >
            {translation.acess}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
