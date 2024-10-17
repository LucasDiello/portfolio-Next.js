'use client';
import React from 'react';
import { Nav } from '../Nav/Nav';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './asideLeft.css';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import { useDictionary } from '@/app/context/DictionaryContext';

const AsideLeft = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { translation } = useDictionary();

  return (
    <aside className="min-h-[100vh] max-w-[300px]">
      <div className="md:hidden">
        <BiMenu onClick={() => setIsOpen(!isOpen)} size={50} className="fixed right-2 top-2 !z-50 text-white" />
      </div>
      <div
        className={`${
          isOpen ? 'left-0' : 'left-[-120%]'
        } z-49 sidenav fixed top-0 flex  min-h-[100%] min-w-[260px] flex-col justify-between bg-[#1f1e22] p-16 pt-12 md:sticky md:min-h-[100vh] md:bg-inherit`}
      >
        <h1 className="border-b-[3px] border-blue-400 pb-4 text-5xl font-bold text-white hover:text-blue-400">
          <Link href={'/'}>
            Lucas
            <p className="ml-10">Diello</p>
          </Link>
        </h1>
        <ul className="font-oswald space-y-5 text-xl font-light tracking-widest text-white">
          <li
            onClick={() => setIsOpen(false)}
            className={`${pathname === '/' ? 'text-blue-400 ' : 'hover:font-bold hover:text-blue-400'}`}
          >
            <Link href="/">{translation.home}</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`${pathname === '/about' ? 'text-blue-400 ' : 'hover:font-bold hover:text-blue-400'}`}
          >
            <Link href="/about">{translation.about}</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`${pathname === '/seemore' ? 'text-blue-400' : 'hover:font-bold hover:text-blue-400'}`}
          >
            <Link href="/seemore">{translation.backend}</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`${pathname === '/contact' ? 'text-blue-400' : 'hover:font-bold hover:text-blue-400'}`}
          >
            <Link href="/contact">{translation.contact}</Link>
          </li>
          <Nav />
        </ul>

        <ul className="flex justify-between">
          <li>
            <Link href="https://www.linkedin.com/in/lucas-diello-5b5440265/" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} className="text-white hover:text-blue-400" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/LucasDiello" target="_blank" rel="noreferrer">
              <FaGithub size={20} className="text-white hover:text-blue-400" />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/5551992514676" target="_blank" rel="noreferrer">
              <FaWhatsapp size={20} className="text-white hover:text-blue-400" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideLeft;
