
import React from 'react'
import { Nav } from '../Nav/Nav'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import "./asideLeft.css"

const AsideLeft = () => {
  return (
    <aside className='bg-[#222] min-h-[100vh]'>
        <div className="sidenav p-16 sticky min-h-[100vh] top-0 min-w-[260px] flex justify-between flex-col">
            <h1 className='text-4xl font-bold'>Lucas <span className='ml-10'>
            Diello
                </span></h1>

            <ul className='fontsOswald space-y-5 text-lg tracking-widest font-light'>
                <li>Home</li>
                <li>Sobre</li>
                <li>Ver Mais</li>
                <li>Contate-me</li>
                <Nav />
            </ul>

            <ul className='flex  justify-between'>
                <li>
                    <a href="https://www.linkedin.com/in/lucasdiello/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={26} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LucasDiello" target="_blank" rel="noreferrer">
                        <FaGithub size={26} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lucasdiello/" target="_blank" rel="noreferrer">
                        <FaInstagram size={26} />
                    </a>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default AsideLeft
