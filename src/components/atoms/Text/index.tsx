import React from 'react'

type TextProps = {
    readonly classes?: string
    readonly children: React.ReactNode
}

export default function Text (props: TextProps) {
    const classNames = `${props.classes ?? ''}`
    return (
        <p className={classNames}>
            {props.children}
        </p>
    )
}