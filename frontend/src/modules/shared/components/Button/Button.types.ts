import { ICONS } from '~/shared/components/Icon/Icon.const'
import { BUTTON_TYPES } from './button.const'

export type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    icon?: ICONS
    iconEnabled: boolean
    iconPosition?: 'left' | 'right'
    className?: string
    type: `${BUTTON_TYPES}`
    onClick?: () => void
}
