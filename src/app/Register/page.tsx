// src/app/Register/page.tsx
'use client';

import React, { useState } from 'react';
import Footer from '../../components/atoms/Footer/index';
import Icon from '../../components/atoms/Icon/index';
import NavTitle from '../../components/atoms/NavTitle/index';
import Text from '../../components/atoms/Text/index';
import Button from '../../components/atoms/Button/index';
import TextBox from '../../components/atoms/TextBox';

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        window.location.assign('/Login');
      } else {
        console.error('API responded with an error');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (

    <div className='flex flex-col min-h-screen bg-background'>
      {/* Header */}
      <div className='px-10 lg:px-55 pt-10 bg-background'>
        <div className="flex flex-row items-center justify-between bg-background">
          <Icon icon='mingcute:menu-fill' classes='self-start mt-4 hover:text-gray-500 hover:cursor-pointer'></Icon>
          <NavTitle
            iconName='line-md:arrow-left'
            titleClasses='text-black hover:text-gray-500 leading-none inline-block'
            title='Regresar'
            link='/'
            classes='flex flex-row gap-x-1 hover:cursor-pointer hover:border-b'
          />
        </div>
      </div>

      {}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="flex flex-col items-center justify-between bg-white rounded-xl shadow-md p-10 lg:p-13 gap-2 max-w-[360px] sm:max-w-md lg:max-w-lg w-full mx-auto">
          <div className='flex flex-row items-center justify-between gap-x-2 w-full'>
            <div>
              <Text classes='font-bold text-sm'>Registrarse</Text>
              <div className='flex flex-row gap-x-1'>
                <Text classes='text-gray-500 text-sm'>¿Ya tienes una cuenta?</Text>
                <NavTitle
                  title='Iniciar sesión'
                  link='/Login'
                  classes='text-sky-600 text-sm'
                />
              </div>
            </div>
            <img
              src="/Logo-Login.png"
              alt="Logo Vive Medellín"
              className="w-[80px] h-[70px] mb-4"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          <form className='flex flex-col items-center gap-4 mt-4'>
            <TextBox
              name='fullName'
              type='text'
              placeholder='Nombre completo'
              value={form.fullName}
              onChange={handleChange}
              className='h-8 w-[300px] lg:w-[300px] border border-gray-400 rounded p-2'
            />
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
          </form>
          <div className='flex flex-col items-center gap-2 mt-4'>
            <Text classes='text-sky-600 hover:cursor-pointer my-2'>Terminos y condiciones</Text>
            <Button onClick={handleSubmit}>Crear cuenta</Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}