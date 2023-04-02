import React, { FC } from 'react'
import { HeadingProps } from './Heading.types'

export const Heading: FC<HeadingProps> = ({ children, type, style }) => {
    return React.createElement(type, { className: style }, children)
}
