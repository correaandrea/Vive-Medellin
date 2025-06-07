import { Icon as IconifyIcon } from '@iconify/react';
import React from 'react'

type IconProps = {
    icon: string,
    classes?: string
}

export default function Icon(props: IconProps) {
  return (
    <IconifyIcon icon={props.icon} className={props.classes || ''} />
  )
}