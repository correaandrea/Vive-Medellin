import React from 'react'

type TextBoxProps = {
  readonly name: string;
  readonly type?: string;
  readonly placeholder?: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly className?: string;
}

export default function TextBox(props: TextBoxProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={props.className}
    />
  )
}