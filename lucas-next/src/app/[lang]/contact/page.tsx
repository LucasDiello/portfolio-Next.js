"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';  
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";
import { useDictionary } from '@/app/context/DictionaryContext';

const Page = () => {  
  const route = useRouter();
  const [sending, setSending] = useState(false);
  const { translation } = useDictionary();

  const [formData, setFormData] = useState({  
    firstName: '',  
    lastName: '',  
    email: '',  
    subject: '',  
    message: '',  
  });  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  };  

  const notify = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-fade-in-up' : 'animate-fade-out-down'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/725/725643.png"
                alt="Email Icon"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                E-mail Enviado!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Obrigado por entrar em contato. Retornarei em breve!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              route.push('/');
            }}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Fechar
          </button>
        </div>
      </div>
    ));

  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    setSending(true);
    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      toast.error("Preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: firstName + " " + lastName,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_lzlsbka",
        "template_ocpy3y8",
        templateParams,
        "c7xOWKtXvM4FEGhYa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Recebido! Logo entrarei em contato.");
        },
        (error) => {
          console.log(error.text);
          toast.error("Erro ao enviar email. Tente novamente. :(");
        }
      )
    notify();
  };  

  return (  
    <div className=' md:w-[60%] flex justify-center items-center  p-4 md:p-0'>
        <div className='bg-[#1a191d] w-full md:ml-10  md:p-16 p-4 pt-14 h-[80vh]'>
        <h1 className='font-oswald text-4xl tracking-wide'>{translation.contact_me}</h1>  
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-6 mt-10 w-full'>
  <div>  
    <label className='block text-sm font-extralight text-[#B0B0B0]'>{translation.name}</label>  
    <input  
      type="text"  
      name="firstName"  
      value={formData.firstName}  
      onChange={handleChange}  
      required
      placeholder='Anderson'
      className='border-b-[1px] border-[#403c4b] bg-inherit placeholder-[#838383] text-xs pt-2 pb-2 font-extralight w-full'  
    />  
  </div>  
  <div>  
    <label className='block text-sm font-extralight text-[#B0B0B0]'>{translation.lastname}</label>  
    <input  
      type="text"  
      name="lastName"  
      value={formData.lastName}  
      onChange={handleChange}  
      required
      placeholder='Da Silva'
      className='border-b-[1px] border-[#403c4b] bg-inherit placeholder-[#838383] text-xs pt-2 pb-2 font-extralight w-full'  
    />  
  </div>  
  <div>  
    <label className='block text-sm font-extralight text-[#B0B0B0]'>{translation.email}</label>  
    <input  
      type="email"  
      name="email"  
      value={formData.email}  
      onChange={handleChange}  
      required
      placeholder='example@gmail.com'
      className='border-b-[1px] border-[#403c4b] bg-inherit placeholder-[#838383] text-xs pt-2 pb-2 font-extralight w-full'  
    />  
  </div>  
  <div>  
    <label className='block text-sm font-extralight text-[#B0B0B0]'>Assunto</label>  
    <input  
      type="text"  
      name="subject"  
      value={formData.subject}  
      onChange={handleChange}  
      required
      placeholder={translation.placeholder_subject}
      className='border-b-[1px] border-[#403c4b] bg-inherit placeholder-[#838383] text-xs pt-2 pb-2 font-extralight w-full'  
    />  
  </div>  
  <div className='col-span-2'>  
    <label className='block text-sm font-extralight text-[#B0B0B0]'>{translation.message}</label>  
    <textarea  
      name="message"  
      value={formData.message}  
      onChange={handleChange}  
      required
      placeholder={translation.placeholder_message}
      className='border-b-[1px] border-[#403c4b] placeholder-[#838383] bg-inherit  text-xs pt-2 pb-2 font-extralight w-full h-24'  
    />  
  </div>  
        <button className='col-span-1 md:mt-10 inline-block bg-blue-500 w-44 py-4 font-mono text-sm text-white hover:bg-blue-600' type="submit">{translation.send}</button>  
</form>  

            </div>  
    </div>  
  );  
};  

export default Page;
