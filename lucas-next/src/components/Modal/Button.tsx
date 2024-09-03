"use client";
import React, { useState } from 'react'
import FullScreenModal from './FullScreenModal';

const Button = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      <FullScreenModal  isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Button
