'use client'
import React from 'react'
import { useState } from 'react';
import NavTitle from '../../atoms/NavTitle/index'
import Icon from '../../atoms/Icon/index'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <nav className="flex flex-row items-start justify-between bg-white shadow-md h-36 w-full px-4">
      <div className="flex items-center">
        <Icon 
          icon="mingcute:menu-fill" 
          classes="hover:text-gray-500 hover:cursor-pointer mt-4"
        />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src="/Logo-ViveMedellin.png" alt="Logo Vive Medellín" className="w-80 h-auto" />
      </div>

      <div className="relative flex items-center space-x-1">
        <div className="hidden lg:flex items-center space-x-1">
          <NavTitle 
            title="Iniciar sesión"
            titleClasses="text-black hover:text-gray-500 leading-none inline-block"
            link="/Login"
            classes="hover:cursor-pointer hover:border-b"
          />
          <span className="h-11 flex items-center justify-center text-black px-1">/</span>
          <NavTitle
            title="Registrarse"
            titleClasses="text-black hover:text-gray-500 leading-none inline-block"
            link="/Register"
            classes="hover:cursor-pointer hover:border-b"
          />
        </div>
        <Icon 
          icon="iconoir:user-circle"
          classes="lg:hidden hover:text-gray-500 hover:cursor-pointer mt-4"
          onClick={toggleMenu}
        />
        {showMenu && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md z-50 p-2 w-40 flex flex-col lg:hidden">
            <NavTitle title="Iniciar sesión" link="/Login" classes="text-black hover:text-gray-500 hover:border-b py-1" />
            <NavTitle title="Registrarse" link="/Register" classes="text-black hover:text-gray-500 hover:border-b py-1" />
          </div>
        )}
      </div>
    </nav>
  );
}