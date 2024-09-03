"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import './fullScreenModal.css';
import { FaChevronDown } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useParams } from 'next/navigation';

const FullScreenModal = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);
  const { lang } = useParams();
  useEffect(() => {
    controls.start({
    y: 0,
    opacity: 1, 

  });
  }, [controls]);

  const handleClose = () => {
    controls.start({ 
      y: '100vh',
      opacity: 0,
      transition: { duration: 1.5 },
     });
     
    setTimeout(() => setIsVisible(false), 1000); // Sincronize com o tempo da animação
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ 
        y: '100vh',
        opacity: 0,
      }}
      animate={controls}
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 1.5 }}
      className='w-[100%] h-[100vh]  absolute top-0 '
>
      <div className="containers">
    <div className="box">

        <div className="title">
            <span className="block"></span>
            <h1>Lucas Diello<span></span></h1>
        </div>

        <div className="role">
            <div className="block"></div>
            <p>Desenvolvedor web <span className='text-xl text-[#e9d856]'>!</span></p>
        </div>

  <button onClick={handleClose} className='btn-exit hover:border-2 '> <IoIosArrowDown size={35}/>
  </button>
    </div>
</div>

<a href="https://www.linkedin.com/in/lucas-diello-5b5440265/" target="_blank"><footer>
    <div className="texto">
        <span>
            <i className="fab fa-youtube"></i>
             Veja meu linkedin!</span>
    </div>
</footer>
   </a>
    </motion.div>
  );
};

export default FullScreenModal;
