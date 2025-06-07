import React from 'react';

interface IndexProps {
    title: string,
    info: string,
    classes?: string
}

export default function Section ({ title, info, classes }: IndexProps) {
  return (
        <div className={classes}>
            <h1 className='text-2xl font-inter font-bold lg:text-2xl mb-4'>{title}</h1>
            <h3 className='text-lg font-inter text-black lg:text-lg leading-relaxed text-justify'>{info}</h3>
        </div>
  );
};