"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const FullScreenModal = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

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
      transition: { duration: 2 },
     });
     
    setTimeout(() => setIsVisible(false), 2000); // Sincronize com o tempo da animação
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ 
        y: '-100vh',
        opacity: 0,
      }}
      animate={controls}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 2 }}
      className='w-[100%] h-[100vh] bg-blue-100 absolute top-0'
>
      <button onClick={handleClose}>X</button>
      <div>Conteúdo da animação</div>
    </motion.div>
  );
};

export default FullScreenModal;
