'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import eu from '@/images/eu2.jpeg';
import '../../../styles/globals.css';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useDictionary } from '@/app/context/DictionaryContext';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

const page = () => {
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const { translation, lang } = useDictionary();

  const notify = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in-up' : 'animate-fade-out-down'
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/725/725643.png"
                alt="Email Icon"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">E-mail Enviado!</p>
              <p className="mt-1 text-sm text-gray-500">Obrigado por entrar em contato. Retornarei em breve!</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              toast.dismiss(t.id);
            }}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Fechar
          </button>
        </div>
      </div>
    ));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      email: email,
    };

    if (!email || email === '' || email === ' ' || email === null) {
      toast.error('Preencha todos os campos.');
      return;
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
      toast.error('E-mail inválido.');
      return;
    }

    setIsDisabled(true);
    emailjs.send('service_lzlsbka', 'template_ocpy3y8', templateParams, 'c7xOWKtXvM4FEGhYa').then(
      (result) => {
        console.log(result.text);
        toast.success('Email Recebido! Logo entrarei em contato.');
      },
      (error) => {
        console.log(error.text);
        toast.error('Erro ao enviar email. Tente novamente. :(');
      },
    );
    notify();

    const countdown = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      setIsDisabled(false);
      clearInterval(countdown);
    }, 10000);
  };

  type Skill = {
    id: number;
    title: string;
    titleEn: string;
    items: {
      name: string;
      description?: string;
      descriptionEN?: string;
      subItems?: { name: string; nameEn: string }[];
      link?: string;
    }[];
  }[];

  const skillsAndExperience: Skill = [
    {
      id: 1,
      title: 'Tecnologias e Habilidades',
      titleEn: 'Technologies and Skills',
      items: [
        { name: 'JavaScript' },
        { name: 'Java Spring Boot' },
        { name: 'TypeScript' },
        { name: 'React.js' },
        { name: 'Next.js' },
        { name: 'Tailwind' },
        { name: 'SASS' },
        { name: 'Node.js' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
        { name: 'Express' },
        { name: 'Prisma' },
        { name: 'Jest/RTL' },
        { name: 'SEO' },
      ],
    },
    {
      id: 2,
      title: 'Ferramentas e Metodologias',
      titleEn: 'Tools',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Scrum' },
        { name: 'VSCode' },
        { name: 'IntelliJ IDEA' },
        { name: 'Postman' },
        { name: 'Figma' },
      ],
    },
    {
      id: 3,
      title: 'Compêtencias Pessoais',
      titleEn: 'Personal Skills',
      items: [
        { name: 'Desenvolvimento de sites' },
        { name: 'Básico de SOLID/Clean Code' },
        { name: 'Adaptável' },
        { name: 'Comunicativo' },
        { name: 'Empático' },
        { name: 'Aceito feedbacks' },
        { name: 'Trabalho em equipe' },
        { name: 'Proativo' },
      ],
    },
    {
      id: 4,
      title: 'Experiência Profissional',
      titleEn: 'Professional Experience',
      items: [
        {
          name: 'Desenvolvedor Full Stack',
          description: 'Freelancer (08/2023 - Atual)',
          descriptionEN: 'Freelancer',
          subItems: [
            {
              name: 'Desenvolvimento de ERP com equipe metodologia ágil scrum',
              nameEn: 'ERP development with an agile scrum team.',
            },
            {
              name: 'Desenvolvimento de interfaces de usuário com React.js e Next.js.',
              nameEn: 'User interface development with React.js and Next.js.',
            },
            { name: 'Manutenção de aplicações web.', nameEn: 'Maintenance of web applications.' },
            {
              name: 'Desenvolvimento de API com Node.js e Express.',
              nameEn: 'API development with Node.js and Express.',
            },
            {
              name: 'Integração de aplicações com banco de dados SQL e NoSQL.',
              nameEn: 'Integration of applications with SQL and NoSQL databases.',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Formação Acadêmica',
      titleEn: 'Academic Education',
      items: [
        {
          name: 'Desenvolvimento Full Stack +1500hrs',
          description: 'Esc. de tecnologia Trybe',
          descriptionEN: 'Trybe Tech School',
          link: 'https://www.credential.net/4302bfcf-2fda-46cb-aa9e-4a8402991180#gs.ghlo1f',
        },
        {
          name: 'Formação Eletiva em Java +150hrs',
          description: 'Esc. de tecnologia Trybe',
          descriptionEN: 'Trybe Tech School',
          link: 'https://www.credential.net/fec44b02-e08e-4d61-967a-9735e4a11e96#gs.g0fibt',
        },
        {
          name: 'Implante na AWS c. Spring Boot',
          description: 'Esc. de tecnologia Udemy',
          descriptionEN: 'AWS Deployment with Spring Boot',
          link: 'https://www.udemy.com/certificate/UC-f5d9aaa6-f2b7-4eb9-b516-ab4a55a8cd0a/',
        },
      ],
    },
    {
      id: 6,
      title: 'Idiomas',
      titleEn: 'Languages',
      items: [
        {
          name: 'Inglês',
          description: 'Intermediário',
          descriptionEN: 'Intermediate',
        },
      ],
    },
  ];

  return (
    <section className="p-4 pt-14 md:w-[60%] md:p-16">
      <div>
        <Image src={eu} alt="" className=" h-[450px] w-full object-cover object-top " />
      </div>
      <div className="mt-5">
        <h1 className={`font-oswald text-2xl tracking-wide text-white md:text-4xl`}>
          {translation.about_me_description2} <IoMdArrowDropdown className="inline-block text-blue-500" />
        </h1>
        <p className="mt-5 text-xs font-light text-[#B0B0B0] md:text-sm">{translation.about_me_text1}</p>
      </div>
      {skillsAndExperience.map((section) => (
        <div key={section.id}>
          <h2 className="font-base font-oswald mt-4 flex items-center border-b-[3px] border-blue-400 pb-3 text-xl tracking-wide text-white md:text-3xl">
            <AiFillStar className="mr-2" size={23} /> {lang === 'pt-BR' ? section.title : section.titleEn}
          </h2>
          <ul
            className={`mt-4 grid ${section.id === 5 ? 'md:w-[100%]' : 'md:w-[500px]'}  ${
              section.id === 1 ? 'md:grid-cols-3' : 'md:grid-cols-2'
            } ${section.id === 1 && 'md:w-full'} gap-2 text-xs font-light text-[#B0B0B0] md:text-sm  `}
          >
            {section.items.map((item) => (
              <li key={item.name}>
                <h2 className="pb-1 pt-1 text-[#B0B0B0]">- {item.name}</h2>
                {item.description && (
                  <p className={`${section.id === 4 && 'mb-4'}`}>
                    {lang === 'pt-BR' ? item.description : item.descriptionEN}
                  </p>
                )}
                {item.subItems && (
                  <ul>
                    {item.subItems.map((subItem, index) => (
                      <li key={subItem.name} className="w-[300px] md:w-[600px]">
                        <h3 className="pb-1 pt-1">{lang === 'pt-BR' ? subItem.name : subItem.nameEn} </h3>
                      </li>
                    ))}
                  </ul>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" className=" underline">
                    Certificado
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-5">
        <h2 className="font-base font-oswald mt-4 flex items-center border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide text-white">
          <AiFillStar className="mr-2" size={23} />
          {translation.fast_contact}!
        </h2>
        <p className="mt-4 text-sm font-light text-[#B0B0B0]">{translation.fast_quick_contact}</p>
        <form className="mt-4 flex w-full flex-col items-center justify-center space-y-4" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-[80%] border-[1px] border-[#3f3d45] bg-inherit py-2"
          />
          <button
            disabled={isDisabled}
            type="submit"
            className={`${isDisabled ? 'bg-gray-400' : 'bg-blue-500'} w-[40%]  px-4 py-2 font-mono text-sm`}
          >
            {isDisabled ? `Aguarde... ${countdown}s` : 'Enviar →'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
