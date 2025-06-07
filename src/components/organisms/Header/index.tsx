import React from 'react'
import NavTitle from '../../atoms/NavTitle/index'
import Icon from '../../atoms/Icon/index'

export default function Header() {
  return (
    <nav className='flex flex-row items-center justify-between bg-white shadow-md h-35 w-full px-4'>
        <Icon icon='mingcute:menu-fill' classes='self-start mt-4 hover:text-gray-500 hover:cursor-pointer'></Icon>
        <div className='absolute left-1/2 transform -translate-x-1/2'>
            <img src='/Logo-ViveMedellin.png' alt='Logo Vive Medellín' className= 'w-80 h-auto'/>
        </div>
        <div className='flex items-center self-start space-x-1'>
          <div className='hidden lg:block'>
            <div className='flex items-center space-x-1'>
              <NavTitle 
              title='Iniciar sesión'
              titleClasses='text-black hover:text-gray-500 leading-none inline-block'
              link='/Login'
              classes='hover:cursor-pointer hover:border-b'
              />
              <span className="h-11 flex items-center justify-center text-black px-1">/</span>
              <NavTitle
              title='Registrarse'
              titleClasses='text-black hover:text-gray-500 leading-none inline-block'
              link='/Register'
              classes='hover:cursor-pointer hover:border-b'
              />
            </div>
          </div>
          <Icon icon='iconoir:user-circle' classes='self-start mt-4 hover:text-gray-500 hover:cursor-pointer'></Icon>
        </div>
    </nav>
  );
}