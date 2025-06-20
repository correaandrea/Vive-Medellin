'use client'

import React, { useState } from 'react'
import Footer from '../../components/atoms/Footer/index'
import Text from '../../components/atoms/Text/index'
import TextBox from '../../components/atoms/TextBox/index'
import Button from '../../components/atoms/Button/index'

export default function Login () {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        window.location.assign('/');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      {/* Header */}
      <div className='px-10 lg:px-55 pt-10 bg-background'>
        {}
      </div>
      
      {/* Contenido Principal */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col items-center justify-between bg-white rounded-xl shadow-md p-10 lg:p-13 gap-2 max-w-[360px] sm:max-w-md lg:max-w-lg w-full mx-auto py-16 lg:py-7">
          <img
            src="/Logo-Login.png"
            alt="Logo Vive Medellín"
            className="w-[80px] h-[70px] mb-4"
          />
          <div>
            <Text classes='font-bold'>Iniciar sesión</Text>
          </div>
          {}
          <div className='flex flex-col items-center gap-4 mt-4'>
            <TextBox
              name='email'
              type='email'
              placeholder='Email'
              value={form.email}
              onChange={handleChange}
              className='h-8 w-[300px] lg:w-[300px] border border-gray-400 rounded p-2'
            />
            <TextBox
              name='password'
              type='password'
              placeholder='Contraseña'
              value={form.password}
              onChange={handleChange}
              className='h-8 w-[300px] lg:w-[300px] border border-gray-400 rounded p-2'
            />
          </div>
          <div className='flex flex-col items-center gap-2 mt-4'>
            <Text classes='text-sky-600 hover:cursor-pointer my-2'>Olvidé mi contraseña</Text>
            {}
            <Button onClick={handleSubmit}>Iniciar sesión</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  )
}