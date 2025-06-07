import React from 'react';
import Link from 'next/link';
import Icon from '../Icon/index'

interface IndexProps {
    title: string,
    titleClasses?: string,
    classes?: string
    link: string,
    iconName?: string
}

export default function Titles ({ title, link, iconName, titleClasses, classes }: IndexProps) {
  return (
    <Link href={link}>
        <div className={classes}>
            {iconName && <Icon icon={iconName} />}
            <h1 className={titleClasses}>{title}</h1>
        </div>
    </Link>
  );
};