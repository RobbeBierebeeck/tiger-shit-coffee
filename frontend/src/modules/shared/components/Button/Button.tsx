import React, { FC } from 'react'
import { ButtonProps } from './Button.types'
import { Icon } from '~/shared/components/Icon'
import { ICONS } from '~/shared/components/Icon/Icon.const'

export const Button: FC<ButtonProps> = ({
    children,
    icon = ICONS.coffee,
    iconEnabled = false,
    iconPosition = 'left',
    className = '',
    type = 'button',
    onClick,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex gap-2.5 justify-center px-0 items-center ${
                iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
            } ${className}`}
        >
            {iconEnabled ? <Icon classNames="shrink-0" icon={icon} /> : null}
            <span>{children}</span>
        </button>
    )
}
