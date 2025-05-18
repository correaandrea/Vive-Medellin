import React from 'react';
import Link from 'next/link';

interface IndexProps {
    title: string,
    link: string
}

export default function Titles ({ title, link }: IndexProps) {
  return (
    <Link href={link}>
        <div className='h-11 flex items-center justify-center text-black hover:text-gray-500'>
            <h1 className='hover:cursor-pointer hover:border-b'>{title}</h1>
        </div>
    </Link>
  );
};