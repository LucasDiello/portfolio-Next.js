"use client";
import React, { use } from 'react'
import { Nav } from '../Nav/Nav'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import "./asideLeft.css"
import Link from 'next/link'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import animation from '../../images/pngtree-black-and-white-outline-thunder-cloud-thundercloud-lightning-strike-coloring-cartoon-vector-png-image_7330781.png'

const AsideLeft = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
    <aside className='min-h-[100vh] max-w-[300px]'>
        <div className="md:hidden">
        <BiMenu onClick={() => setIsOpen(!isOpen)} size={50} className='text-white fixed !z-50 right-2 top-2' />
        </div>
        <div className={`${isOpen ? "left-0" : "left-[-120%]"} bg-[#1f1e22] fixed min-h-[100%] z-49  sidenav p-16 pt-12 md:sticky md:min-h-[100vh] top-0 min-w-[260px] flex justify-between flex-col`}>
            <h1 className='text-5xl font-bold hover:text-blue-400 border-b-[3px] pb-4 border-blue-400'>
                <Link href={"/"}>
            Lucas
                 <p className='ml-10'>
            Diello
                </p>
            </Link>
                </h1>
            <ul className='font-oswald space-y-5 text-xl tracking-widest font-light'>
                <li className='hover:text-blue-400 hover:font-bold'>
                    <Link href="/">Home</Link>
                    </li>
                <li className='hover:text-blue-400 hover:font-bold'>
                    <Link href="/about">Sobre</Link>
                </li>
                <li className='hover:text-blue-400 hover:font-bold'>
                    <Link href="/seemore">Ver Mais</Link>
                </li>
                <li className='hover:text-blue-400 hover:font-bold'>
                    <Link href="/contact">Contate-Me</Link>
                </li>
                <Nav />
            </ul>

            <ul className='flex  justify-between'>
                <li>
                    <Link href="https://www.linkedin.com/in/lucasdiello/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={20} />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/LucasDiello" target="_blank" rel="noreferrer">
                        <FaGithub size={20} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/lucasdiello/" target="_blank" rel="noreferrer">
                        <FaWhatsapp size={20} />
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default AsideLeft
