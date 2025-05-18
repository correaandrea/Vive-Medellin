import React from 'react'
import InfoBody from '../components/molecules/BodyInfo/index'
import Header from '../components/organisms/Header/index'
import Navbar from '../components/organisms/Navbar/index'
import Body from '../components/organisms/Body';
import Footer from '../components/atoms/Footer/index';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Contenido fijo arriba */}
      <div className="flex flex-col items-center bg-background w-full px-10 lg:px-60 pt-10 gap-4">
        <Header />
        <Navbar />
      </div>

      {/* Este bloque crece y empuja el footer abajo */}
      <div className="flex-1 flex w-full px-10 lg:px-60 pt-4 bg-background">
        <Body />
      </div>

      {/* Footer abajo siempre */}
      <div className="flex flex-col items-center bg-background w-full mt-10">
        <Footer />
      </div>
    </div>
  )
}