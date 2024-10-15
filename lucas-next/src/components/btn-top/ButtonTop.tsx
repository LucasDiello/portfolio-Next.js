"use client";
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const ButtonTop = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setScrollDirection('down'); // Topo da página, botão desce
        } else if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            setScrollDirection('up'); // Fundo da página, botão sobe
        } else if (window.scrollY > 50) {
            setScrollDirection(window.scrollY > 100 ? 'up' : 'down'); // Controla mudança no meio da página
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <button
            className='fixed bottom-10 right-10 bg-blue-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-400'
            onClick={scrollDirection === 'down' ? scrollToBottom : scrollToTop}
        >
            {scrollDirection === 'down' ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
    )
}

export default ButtonTop;
