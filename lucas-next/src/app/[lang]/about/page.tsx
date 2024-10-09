import Image from 'next/image';
import React from 'react';
import eu from '@/images/eu2.jpeg';
import Link from 'next/link';
import '../../../styles/globals.css';
import { Barlow_Condensed } from 'next/font/google';

export const barlow = Barlow_Condensed({ subsets: ['latin'], weight: '500' });
const page = () => {
  return (
    <main className="md:w-[60%] md:p-16 p-4 pt-14">
      <div>
        <Image src={eu} alt="" className=" h-[450px] w-full object-cover object-top " />
      </div>
      <div className="mt-5">
        <h1 className={`font-oswald text-4xl tracking-wide`}>
          Me chamo Lucas Diello, tenho 22 anos e sou desenvolvedor de software.
        </h1>
        <p className="mt-5 text-sm font-light text-[#B0B0B0]">
          Atualmente estou há 2 anos na área de desenvolvimento de software, com conhecimento parcial tanto no Front End
          como também no Back End. Meu interesse pela tecnologia começou desde a infância, acabava sempre indo em lan
          houses e desmontando computadores (mesmo sem saber o que estava fazendo). Com o passar do tempo, acabei me
          interessando por programação e comecei a estudar sozinho, até que decidi realmente me aprofundar na área e
          cair de cabeça em cursos e projetos. Hoje em dia, estou sempre em busca de novos conhecimentos e desafios,
          para que eu possa me tornar um desenvolvedor cada vez melhor. Atuando como freelancer, estou sempre disposto a
          ajudar e a aprender com os projetos que me são propostos. Estou ansioso para minha próxima oportunidade de
          trabalho, e espero que possa através dela, contribuir com o crescimento da empresa e também com o meu próprio
          crescimento profissional.
        </p>
      </div>
      {/* Faça um grid de tecnologias que possuo conhecimento e habilidades pessoais. */}
      <div>
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Tecnologias e Habilidades
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 text-sm font-light text-[#B0B0B0]">
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">JavaScript</h2> - Linguagem de programação interpretada.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">React.js</h2> - Biblioteca para construção de interfaces de usuário.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Next.js</h2> - Framework de React.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">HTML</h2> - Linguagem de marcação de hipertexto.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">CSS</h2> - Folhas de estilo em cascata.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Tailwind</h2> - Framework CSS utilitário.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Node.js</h2> - Ambiente de execução JavaScript.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Express</h2> - Framework minimalista para Node.js.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">MongoDB</h2> - Banco de dados NoSQL.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Prisma</h2> - ORM para Node.js.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">MySQL</h2> - Banco de dados relacional.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">TypeScript</h2> - Superset de JavaScript com tipagem estática.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Java Spring Boot</h2> - Framework para desenvolvimento de aplicações em Java.
  </li>
  <li>
    <h2 className="pb-1 pt-1 font-bold text-white font-mono">Jest/RTL</h2> - Testes unitários e de integração.
  </li>
</ul>


        {/* Ferramentas e Metodologias */}
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Ferramentas
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 text-sm font-light text-[#B0B0B0]">
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Git</h2> - Controle de versão.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">GitHub</h2> - Plataforma de hospedagem de código.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Scrum</h2> - Metodologia ágil para desenvolvimento de software.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">SEO</h2> - Otimização de mecanismos de busca.
          </li>
        </ul>

        {/* Habilidades pessoais */}
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Compêtencias Pessoais!
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 text-sm font-light text-[#B0B0B0]">
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Desenvolvimento de sites</h2>- Construção de sites responsivos e
            acessíveis.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Básico de SOLID/Clean Code</h2>- Princípios de desenvolvimento de
            software.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Adaptável</h2> - Capacidade de se ajustar a diferentes contextos e
            desafios.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Comunicativo</h2> - Habilidade de transmitir informações de forma
            clara.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Empático</h2> - Capacidade de se colocar no lugar dos outros.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Aceito feedbacks</h2> - Aberto a críticas construtivas.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Trabalho em equipe</h2> - Colaborativo e comprometido com o sucesso do
            time.
          </li>
          <li>
            <h2 className="pb-1 pt-1 text-white font-mono font-bold">Proativo</h2> - Iniciativa para resolver problemas de forma eficiente.
          </li>
        </ul>
      </div>
      {
        // Experiência Profissional com lista de seus feitos e realizações.
      }
      <div>
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Experiência Profissional
        </h2>
        <ul className="mt-4 text-sm font-light text-[#B0B0B0]">
          <li>
            <h2 className="pb-1 pt-1 text-white font-bold">Desenvolvedor Full Stack</h2> Freelancer
            <ul className="mt-4 text-sm font-light text-[#B0B0B0]">
              <li>- Desenvolvimento de ERP com equipe utilizando metodologia ágil scrum</li>
              <li>- Desenvolvimento de interfaces de usuário com React.js e Next.js.</li>
              <li>- Manutenção de aplicações web.</li>
              <li>- Desenvolvimento de api com Node.js e Express</li>
              <li>- Integração de aplicações com banco de dados SQL e NoSQL</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Formação Acadêmica
        </h2>
        <ul className="mt-4 text-sm font-light flex flex-col gap-4 text-[#B0B0B0]">
          <li className='flex flex-col '>
            <h2 className="pb-1 pt-1 text-white font-bold">Desenvolvimento Full Stack +1500hrs</h2> - (Esc. de tecnologia Trybe)  <a href="" target='_blank' className=' underline'>certificado</a>
          </li>
          <li className='flex flex-col'>
            <h2 className="pb-1 pt-1 text-white font-bold">Formação Eletiva em Java +150hrs</h2> - (Esc. de tecnologia Trybe)  <a href="https://www.credential.net/fec44b02-e08e-4d61-967a-9735e4a11e96#gs.g0fibt" target='_blank' className=' underline'>certificado</a>
          </li>
          <li className='flex flex-col'>
            <h2 className="pb-1 pt-1 text-white font-bold">Implante na AWS c. Spring Boot</h2> - (Esc. de tecnologia Udemy) <a href="" target='_blank' className=' underline'>certificado</a>
          </li>
        </ul>

      </div>
      <div>
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Idiomas
        </h2>
        <ul className="mt-4 text-sm font-light flex flex-col gap-4 text-[#B0B0B0]">
          <li className='flex flex-col '>
            <h2 className="pb-1 pt-1 text-white font-bold">Inglês</h2> - Intermediário
          </li>
        </ul>
      </div>

      
      <div className="mt-5">
        <h2 className="font-base font-oswald mt-4 border-b-[3px] border-blue-400 pb-3 text-3xl tracking-wide">
          Contato Rápido!
        </h2>
        <p className="mt-4 text-sm font-light text-[#B0B0B0]">
          Entre em contato comigo através do meu e-mail ou redes sociais.
        </p>
        <form
          action="https
        ://gmail.us4.list-manage.com/subscribe/post?u=463ee871f45d2d93748e77cad&amp;amp;id=a0a2c6d074"
          method="post"
          target="_blank"
          className="mt-4 flex w-full flex-col items-center justify-center space-y-4"
        >
          <input type="email" className="w-[80%] border-[1px] border-[#3f3d45] bg-inherit py-2" />
          <button  type="submit" className="w-[40%] bg-blue-500  px-4 py-2 font-mono text-sm">
            Enviar →
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
