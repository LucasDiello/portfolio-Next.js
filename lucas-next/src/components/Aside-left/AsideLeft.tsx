
import React from 'react'
import { Nav } from '../Nav/Nav'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import "./asideLeft.css"

const AsideLeft = () => {
  return (
    <aside className='bg-[#222] min-h-[100vh]'>
        <div className="sidenav sticky min-h-[100vh] top-0 min-w-[350px] flex justify-between flex-col">
            <h1>Lucas Diello</h1>

            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Contate-me</li>
                <li>Ver Mais</li>
                <Nav />
            </ul>

            <ul className='flex'>
                <li>
                    <a href="https://www.linkedin.com/in/lucasdiello/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LucasDiello" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lucasdiello/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default AsideLeft
