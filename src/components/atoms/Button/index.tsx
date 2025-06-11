import React from 'react'

type ButtonProps = {
  children: string
}

export default function Button(props: ButtonProps) {
  return (
    <button className='w-[300px] h-8 bg-primary font-inter font-semibold rounded text-white text-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow'>{props.children}</button>
  );
}