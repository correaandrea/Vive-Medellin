import React from 'react'
import Section from '../../molecules/BodyInfo/index';

export default function Body() {
  return (
    <nav className='flex flex-col lg:flex-row justify-around gap-4'>
        <div className='w-fit'>
            <Section title='Descubre todo lo que Medellín tiene para ofrecerte' info='ViveMedellín es tu guía actualizada para conocer los eventos, actividades y tendencias que mueven la ciudad. Desde conciertos y ferias hasta exposiciones culturales y encuentros locales, aquí encontrarás lo mejor de la vida urbana en un solo lugar. Explora, agenda y vive Medellín con nosotros.' />
        </div>
        <div className='w-full'>
            <img src='/Carousel1.png' alt='Imagen carousel 1' className='h-full w-full object-cover shadow-md'/>
        </div>
    </nav>
  );
}