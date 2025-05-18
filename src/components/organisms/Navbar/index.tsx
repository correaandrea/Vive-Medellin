import React from 'react'
import NavTitle from '../../atoms/NavTitle/index'

export default function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row items-center justify-around bg-secondary shadow-md h-35 lg:h-11.5 w-full'>
        <div><NavTitle title='Eventos y Actividades' link='/EventosYactividades' /></div>
        <div><NavTitle title='Comunidades' link='/Comunidades' /></div>
        <div><NavTitle title='Valoraciones' link='/Valoraciones' /></div>
    </nav>
  );
}