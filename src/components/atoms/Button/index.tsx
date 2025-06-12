import React from 'react'
import Icon from '../Icon/index'

type ButtonProps = {
  children: string,
  iconName?: string
  classIcon?: string
}

export default function Button(props: ButtonProps) {
  const hasIcon = Boolean(props.iconName);
  return (
    <button 
      className={`flex items-center justify-center w-[300px] pb-1 bg-primary font-inter font-semibold rounded text-white text-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer shadow ${
        hasIcon ? 'gap-2' : 'px-5' }`}
    >
      <span >{props.children}</span>
      {hasIcon && (
        <Icon icon={props.iconName || ''} classes={props.classIcon || ''}/>
      )}
    </button>
  );
}