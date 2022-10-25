import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {}


function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit : SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:cesargarabito97@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
  return (
    <div className='h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl z-20'>Contact</h3>
        <div className='flex flex-col space-y-6'>
            <h4 className='text-2xl font-semibold text-center'>I have got just what you need.
            <span className='decoration-[#F7AB0A]/50 underline'>Let´s talk!</span>
            </h4>
            <div className='space-y-4'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon  className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+34 643 39 6428</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-1xl'>cesargarabito97@gmail.com</p>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon  className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-1xl'>C/Teodosio 82, 2C, Sevilla, España.</p>
            </div>
            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-1 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                    <input {...register('email')} className='contactInput' placeholder='E-mail' type="email" />
                </div>
                <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
                <textarea {...register('message')} className='contactInput' placeholder='Message'></textarea>
                <button className='bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
        </div>
  )
}

export default ContactMe