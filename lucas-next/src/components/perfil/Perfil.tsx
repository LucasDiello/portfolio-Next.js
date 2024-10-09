import { futureProjects } from '@/utils'
import Image from 'next/image'
import React from 'react'
import eu from '@/images/eu.jpg'
import Link from 'next/link'

const Perfil = () => {
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
            Entre em contato comigo através do meu e-mail ou redes sociais.
          </p>
          <form action="https://gmail.us4.list-manage.com/subscribe/post?u=463ee871f45d2d93748e77cad&amp;amp;id=a0a2c6d074" method="post" target="_blank" className="mt-4 w-full space-y-4 flex justify-center items-center flex-col">
            <input type="email" className="w-[80%] border-[1px] py-2 bg-inherit border-[#3f3d45]" />
            <button type="submit" className="bg-blue-500 w-[40%]  py-2 px-4 font-mono text-sm">Enviar →</button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl font-base mb-10 border-b-[3px] border-blue-400 pb-3 font-oswald tracking-wide">Futuros Projetos!</h2>
          {
            futureProjects.map((project) => {
              return (
                <article className="mb-5">
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
                      }   
                    ) }
        </div>
      </div>
    </aside>
  )
}

export default Perfil
