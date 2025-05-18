import React from 'react'
import NavTitle from '../../atoms/NavTitle/index'

export default function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row items-center justify-around bg-secondary h-[90px] lg:h-[46px] w-full shadow-md mb-2'>
        <div><NavTitle title='Eventos y Actividades' link='/EventosYactividades' /></div>
        <div><NavTitle title='Comunidades' link='/Comunidades' /></div>
        <div><NavTitle title='Valoraciones' link='/Valoraciones' /></div>
    </nav>
  );
}