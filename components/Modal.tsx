"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Modal = () => {
    const router = useRouter();
    useEffect(() => {
        router.refresh();
    } , [router]);
    
    return (
    <button>
        <span onClick={() => router.push('/en')}>en</span>
        <span onClick={() => router.push('/pt')}>pt</span>
    </button>
  )
}

export default Modal
