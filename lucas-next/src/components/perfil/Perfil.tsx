import { futureProjects } from '@/utils'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import eu from '@/images/eu.jpg'
import Link from 'next/link'
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { getDictionaryUseClient } from '@/dictionaries/default-dictionary-use-client'

const Perfil = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false); 
  const [timer, setTimer] = useState(10); 

  const notify = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in-up' : 'animate-fade-out-down'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/725/725643.png"
                alt="Email Icon"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                E-mail Enviado!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Obrigado por entrar em contato. Retornarei em breve!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              toast.dismiss(t.id);
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Fechar
          </button>
        </div>
      </div>
    ));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  

    const templateParams = {
      email: email,
    };

    if (!email || email === "" || email === " " || email === null) {
      toast.error("Preencha todos os campos.");
      return;
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
      toast.error("E-mail inválido.");
      return
    }
    console.log(email)
    setIsDisabled(true);
    emailjs
      .send(
        "service_lzlsbka",
        "template_ocpy3y8",
        templateParams,
        "c7xOWKtXvM4FEGhYa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Recebido! Logo entrarei em contato.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Erro ao enviar email. Tente novamente. :(");
        }
      )
    notify();

    setTimer(10);
    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      setIsDisabled(false);
      clearInterval(countdown);
    }, 10000);
  };  

  return (
    <aside className='lg:w-1/3 w-full pt-12 pr-4 pl-4 md:pl-0'>
      <div className="mt-5">
        <div className="flex justify-center items-center flex-col">
          <Image className="object-cover rounded-full h-64 w-64" src={eu}  width="1000" height="1000" alt="" />
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Sobre Mim</h2>
          <p className="text-center mt-4 text-[#B0B0B0] text-sm font-light">
          Me chamo Lucas, tenho 22 anos e sou desenvolvedor de software com conhecimento parcial tanto no Front End como também no Back End.
          </p>
          <Link href="/about" className="bg-blue-500  py-3 px-5 mt-4 font-mono text-sm">Ver mais →</Link>
        </div>
        <div className="bg-[#1a191d] p-6 mt-14 mb-14 flex justify-center items-center flex-col">
          <h2 className="text-3xl font-base mt-4 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Contato Rápido!</h2>
          <p className="text-center mt-4 text-[#B0B0B0] text-sm font-light">
            Entre em contato comigo, apenas coloque seu email.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 w-full space-y-4 flex justify-center items-center flex-col">
            <input onChange={(e) => 
              setEmail(e.target.value)
            } type="email" className="w-[80%] border-[1px] py-2 bg-inherit border-[#3f3d45]" />
            <button 
              disabled={isDisabled} 
              type="submit" 
              className={`w-[40%] py-2 px-4 font-mono text-sm ${
                isDisabled ? 'bg-gray-400' : 'bg-blue-500'
              }`}
            >
              {isDisabled ? `Aguarde... ${timer}s` : 'Enviar →'}
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl font-base mb-10 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Futuros Projetos!</h2>
          {
            futureProjects.map((project) => {
              return (
                <article className="mb-5" key={project.name}>
                  <Image src={project.image} alt={project.name} className="w-full h-48  object-center object-cover mb-3" />
                  <h3 className="text-lg font-bold">
                    <a className="  hover:text-blue-500">
                    {project.description}
                    </a>
                    </h3>
                  <ul className="text-gray-600 text-sm mt-2">
                    <li className='uppercase'>{project.date}</li>
                    <li>{project.type}</li>
                  </ul>
                  <a href="https://demo.gethugothemes.com/galaxy/site/post/elements/" className="bg-blue-500 px-4 py-2 mt-3 inline-block  hover:underline">
              Read More →
            </a>
                </article>
              )
            }) 
          }
        </div>
      </div>
    </aside>
  )
}

export default Perfil;
