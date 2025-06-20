import React from 'react';

type ButtonProps = {
  readonly children: string;
  readonly onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className='w-[300px] h-8 bg-primary font-inter font-semibold rounded text-black text-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow'
    >
      {props.children}
    </button>
  );
}