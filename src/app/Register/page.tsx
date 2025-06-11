//'use client'
import React from 'react'
//import { useState } from "react"
import Footer from '../../components/atoms/Footer/index'
import Icon from '../../components/atoms/Icon/index'
import NavTitle from '../../components/atoms/NavTitle/index'
import Text from '../../components/atoms/Text/index'
// import TextBox from '../../components/atoms/TextBox/index'
import Button from '../../components/atoms/Button/index'

export default function Register () {
//   const [form, setForm] = useState({ email: "", password: "" })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

  return (
    <div className='flex flex-col min-h-screen justify-between bg-background'>
        <div className='px-10 lg:px-55 pt-10 bg-background'>
            <div className="flex flex-row items-center justify-between bg-background">
                <Icon icon='mingcute:menu-fill' classes='self-start mt-4 hover:text-gray-500 hover:cursor-pointer'></Icon>
                <NavTitle
                iconName='line-md:arrow-left'
                titleClasses='text-black hover:text-gray-500 leading-none inline-block'
                title='Regresar'
                link= '/'
                classes='flex flex-row gap-x-1 hover:cursor-pointer hover:border-b'
                />
            </div>
        </div>
        <div className="flex justify-center bg-background lg:px-50 lg:w-full 2xl:px-230">
            <div className="flex flex-col items-center justify-between bg-white rounded-xl shadow-md p-10 lg:p-13 gap-2 max-w-[360px] sm:max-w-md lg:max-w-lg w-full mx-auto py-16 lg:py-7">
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
                    style={{ imageRendering: "auto" }}
                    />
                </div>
                <form className='flex flex-col items-center gap-4'>
                    Registro
                </form>
                <div className='flex flex-col items-center gap-2'>
                    <Text classes='text-sky-600 hover:cursor-pointer my-2'>Terminos y condiciones</Text>
                    <Button
                    children='Crear cuenta'
                    />
                </div>
            </div>
        </div>
        <footer className="w-full">
            <Footer />
        </footer>
    </div>
  )
}