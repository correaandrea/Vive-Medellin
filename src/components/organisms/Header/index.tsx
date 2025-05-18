import React from 'react'
import NavTitle from '../../atoms/NavTitle/index'
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <nav className='flex flex-row items-center justify-between bg-white shadow-md h-35 w-full px-4'>
        <div className='self-start mt-4 hover:text-gray-500 hover:cursor-pointer '>
            <Icon icon='mingcute:menu-fill'></Icon>
        </div>
        <div className='absolute left-1/2 transform -translate-x-1/2'>
            <img src='/Logo-ViveMedellin.png' alt='Logo Vive Medellín' className= 'w-80 h-auto'/>
        </div>
        <div className='flex items-center self-start space-x-1'>
          <div className='hidden lg:block'>
            <div className='flex items-center space-x-1'>
              <NavTitle title='Iniciar sesión' link='/Login' />
              <span className="h-11 flex items-center justify-center text-black px-1">/</span>
              <NavTitle title='Registrarse' link='/Register' />
            </div>
          </div>
          <div className='self-start mt-4 hover:text-gray-500 hover:cursor-pointer'>
            <Icon icon='iconoir:user-circle'></Icon>
          </div>
        </div>
    </nav>
  );
}