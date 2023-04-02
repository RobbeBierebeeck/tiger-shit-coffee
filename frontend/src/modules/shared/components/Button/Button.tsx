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
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`flex gap-2.5 justify-center ${
                iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
            } ${className}`}
        >
            {iconEnabled ? <Icon icon={icon} /> : null}
            <span>{children}</span>
        </button>
    )
}
