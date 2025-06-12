import { Icon as IconifyIcon } from '@iconify/react';
import React from 'react';

type IconProps = {
  readonly icon: string;
  readonly classes?: string;
  readonly onClick?: React.MouseEventHandler<SVGSVGElement>;
};

export default function Icon({ icon, classes = '', onClick }: IconProps) {
  return (
    <IconifyIcon
      icon={icon}
      className={classes}
      onClick={onClick}
    />
  );
}